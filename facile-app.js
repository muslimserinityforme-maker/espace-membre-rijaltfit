// "Ton application F.A.C.I.L.E." — analyse photo des repas. Rendu dans le
// panneau principal du tableau de bord quand le niveau sélectionné a
// `special: 'facile-app'`. Prend/importe une photo, l'envoie à
// /api/analyze-meal (Gemini côté serveur), affiche le résultat, permet de
// l'ajouter à la journée (/api/meals) et de consulter/supprimer l'historique
// du jour.

const RF_FACILE_MAX_DIMENSION = 1200;
const RF_FACILE_JPEG_QUALITY = 0.82;

function rfCompressImage(file) {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = function () {
      const img = new Image();
      img.onerror = reject;
      img.onload = function () {
        const ratio = Math.min(1, RF_FACILE_MAX_DIMENSION / Math.max(img.width, img.height));
        const w = Math.round(img.width * ratio);
        const h = Math.round(img.height * ratio);
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', RF_FACILE_JPEG_QUALITY);
        resolve({ base64: dataUrl.split(',')[1], mimeType: 'image/jpeg', previewUrl: dataUrl });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function rfRenderFacileApp(root) {
  const access = (typeof rfGetAccess === 'function') ? rfGetAccess() : null;
  const code = access && access.code;
  const nutritionProfile = (typeof rfGetNutritionProfile === 'function') ? rfGetNutritionProfile() : null;

  const state = {
    step: 'photo',
    photo: null, // { base64, mimeType, previewUrl }
    connaitQuantites: null, // true/false
    quantites: [], // [{aliment, quantite}]
    noteContexte: '',
    analysis: null,
    remaining: null,
    consumedToday: null,
    dailyTargets: null,
    todayMeals: [],
    error: '',
  };

  function fmtBadge(valeur) {
    const map = {
      good: '✅ Bonne portion', slightly_high: '⚠️ Un peu élevée', slightly_low: '⚠️ Un peu faible',
      high: '⚠️ À réduire', low: '⚠️ À augmenter', uncertain: '❔ Difficile à estimer',
    };
    return map[valeur] || valeur || '—';
  }

  function render() {
    if (!nutritionProfile) {
      root.innerHTML =
        '<div class="np-card"><p class="np-question">Complète d\'abord ton bilan</p>' +
        '<p class="programme-empty">Pour analyser tes repas, il faut d\'abord compléter ton profil dans l\'onglet « Ton protocole nutrition ».</p>' +
        '</div>';
      return;
    }

    let html = '';

    if (state.step === 'photo') {
      html =
        '<div class="np-card">' +
        '<div class="np-text"><p>Tu veux savoir si ton repas correspond à ton objectif ? Prends simplement ton assiette en photo.</p>' +
        '<p>F.A.C.I.L.E. va analyser ton repas, estimer tes portions et te donner une estimation de tes calories et de tes macros. Tu recevras ensuite des conseils adaptés à ton protocole.</p></div>' +
        '<p class="np-note">Une analyse à partir d\'une photo reste une estimation. Les quantités réelles, les huiles, les sauces et certains ingrédients peuvent être difficiles à identifier précisément.</p>' +
        (state.photo
          ? '<div class="niveau__images"><img src="' + state.photo.previewUrl + '" alt="Aperçu du repas"></div>'
          : '') +
        '<div class="facile-photo-buttons">' +
        '<label class="btn btn--primary facile-photo-btn">📷 Prendre mon repas en photo<input type="file" accept="image/jpeg,image/png,image/webp" capture="environment" id="facile-capture-input" hidden></label>' +
        '<label class="btn facile-photo-btn facile-photo-btn--secondary">🖼️ Importer une photo<input type="file" accept="image/jpeg,image/png,image/webp" id="facile-import-input" hidden></label>' +
        '</div>' +
        (state.photo
          ? '<div class="np-field"><label>Tu connais les quantités ?</label>' +
            '<div class="np-choice-list">' +
            '<button type="button" class="np-choice" data-connait="non">Non — estime pour moi</button>' +
            '<button type="button" class="np-choice" data-connait="oui">Oui — je connais certaines quantités</button>' +
            '</div></div>'
          : '') +
        (state.connaitQuantites === 'oui'
          ? '<div id="facile-quantites-list">' +
            state.quantites.map(function (q, i) {
              return '<div class="np-field-grid" style="margin:10px 0;">' +
                '<div class="np-field"><input type="text" placeholder="Aliment (ex: Poulet)" value="' + q.aliment + '" data-qi="' + i + '" data-qf="aliment"></div>' +
                '<div class="np-field"><input type="text" placeholder="Quantité (ex: 150 g)" value="' + q.quantite + '" data-qi="' + i + '" data-qf="quantite"></div>' +
                '</div>';
            }).join('') +
            '<button type="button" id="facile-add-quantite" class="np-restart-link" style="text-align:left;">+ Ajouter un aliment</button>' +
            '</div>'
          : '') +
        (state.photo
          ? '<div class="np-field"><label for="facile-note">Info supplémentaire (facultatif — ex: nom du plat au restaurant)</label>' +
            '<input type="text" id="facile-note" value="' + state.noteContexte + '" placeholder="Ex: Couscous royal au restaurant" /></div>'
          : '') +
        (state.error ? '<p class="form-error">' + state.error + '</p>' : '') +
        (state.photo ? '<button type="button" id="facile-analyze-btn" class="btn btn--primary btn--large">Analyser mon assiette →</button>' : '') +
        '</div>' +
        renderTodaySummary();
    }

    if (state.step === 'analyzing') {
      html = '<div class="np-card"><p class="programme-empty">🔍 Analyse de ton assiette en cours…</p></div>';
    }

    if (state.step === 'result') {
      const a = state.analysis;
      if (!a.analyzable) {
        html =
          '<div class="np-card">' +
          '<p class="np-question">Analyse impossible</p>' +
          '<p class="np-text"><p>Je n\'arrive pas à identifier suffisamment ton repas pour te donner une estimation fiable.</p>' +
          '<p>' + (a.unclearReason || 'Essaie de reprendre la photo avec ton assiette entière visible et suffisamment de lumière.') + '</p></p>' +
          '<button type="button" id="facile-retry-btn" class="btn btn--primary">Reprendre une photo</button>' +
          '</div>';
      } else {
        html =
          '<div class="np-result-card">' +
          '<p class="np-result-card__label">Ton analyse F.A.C.I.L.E.</p>' +
          '<div class="np-result-row"><span>Aliments identifiés</span><strong>' + (a.foods || []).map(function (f) { return f.name; }).join(', ') + '</strong></div>' +
          '<div class="np-result-row"><span>Ton repas</span><strong>≈ ' + a.caloriesMin + '–' + a.caloriesMax + ' kcal</strong></div>' +
          '<div class="np-result-row"><span>Macros</span><strong>' + (a.macros ? Math.round(a.macros.protein) + 'g P · ' + Math.round(a.macros.carbs) + 'g G · ' + Math.round(a.macros.fat) + 'g L' : '—') + '</strong></div>' +
          (state.quantites.length ? '<p class="np-result-card__note">Estimation affinée grâce aux quantités renseignées.</p>' : '') +
          '</div>' +
          '<div class="np-card" style="margin-top:16px;">' +
          '<p class="np-subtitle">Analyse F.A.C.I.L.E.</p>' +
          '<div class="facile-analysis-grid">' +
          '<div>🥩 Protéines<br><strong>' + fmtBadge(a.facileAnalysis && a.facileAnalysis.protein) + '</strong></div>' +
          '<div>🍚 Féculents<br><strong>' + fmtBadge(a.facileAnalysis && a.facileAnalysis.carbs) + '</strong></div>' +
          '<div>🥦 Légumes<br><strong>' + fmtBadge(a.facileAnalysis && a.facileAnalysis.vegetables) + '</strong></div>' +
          '<div>🥑 Matières grasses<br><strong>' + fmtBadge(a.facileAnalysis && a.facileAnalysis.fat) + '</strong></div>' +
          '</div>' +
          '<p class="np-subtitle">Ton conseil F.A.C.I.L.E.</p>' +
          '<div class="np-text"><p>' + (a.advice || '') + '</p></div>' +
          '<div class="niveau-actions">' +
          '<button type="button" id="facile-add-day-btn" class="btn btn--primary">Ajouter à ma journée</button>' +
          '<button type="button" id="facile-discard-btn" class="np-restart-link">Ne pas enregistrer</button>' +
          '</div>' +
          '</div>';
      }
    }

    root.innerHTML = html;
    bind();
  }

  function progressBarHtml(consumedValue, targetValue) {
    const target = Number(targetValue) || 0;
    const pct = target ? Math.min(100, Math.round((consumedValue / target) * 100)) : 0;
    const over = target && consumedValue > target;
    return '<div class="facile-progress-bar"><div class="facile-progress-bar__fill' + (over ? ' is-over' : '') + '" style="width:' + pct + '%;"></div></div>';
  }

  function renderTodaySummary() {
    const targets = state.dailyTargets || nutritionProfile;
    const consumed = state.consumedToday;
    let html = '<div class="np-card" style="margin-top:16px;"><p class="np-subtitle">Aujourd\'hui</p>';
    if (consumed) {
      const caloriesTarget = targets.caloriesJour || targets.calories_jour || 0;
      const proteinesTarget = targets.proteinesG || targets.proteines_g || 0;
      const glucidesTarget = targets.glucidesG || targets.glucides_g || 0;
      const lipidesTarget = targets.lipidesG || targets.lipides_g || 0;
      html += '<div class="np-result-row"><span>Calories</span><strong>' + consumed.calories + ' / ' + (caloriesTarget || '?') + ' kcal</strong></div>';
      html += progressBarHtml(consumed.calories, caloriesTarget);
      html += '<div class="np-result-row"><span>Protéines</span><strong>' + consumed.proteines + ' / ' + (proteinesTarget || '?') + ' g</strong></div>';
      html += progressBarHtml(consumed.proteines, proteinesTarget);
      html += '<div class="np-result-row"><span>Glucides</span><strong>' + consumed.glucides + ' / ' + (glucidesTarget || '?') + ' g</strong></div>';
      html += progressBarHtml(consumed.glucides, glucidesTarget);
      html += '<div class="np-result-row"><span>Lipides</span><strong>' + consumed.lipides + ' / ' + (lipidesTarget || '?') + ' g</strong></div>';
      html += progressBarHtml(consumed.lipides, lipidesTarget);
    } else {
      html += '<p class="programme-empty">Aucun repas enregistré aujourd\'hui.</p>';
    }
    if (state.todayMeals.length) {
      html += '<p class="np-subtitle">Mes repas</p>';
      html += state.todayMeals.map(function (m) {
        const heure = new Date(m.created_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        return '<div class="facile-meal-row">' +
          '<span>' + heure + ' — ≈ ' + Math.round(((m.calories_min || 0) + (m.calories_max || 0)) / 2) + ' kcal</span>' +
          '<button type="button" class="facile-meal-delete" data-id="' + m.id + '">🗑️</button>' +
          '</div>';
      }).join('');
    }
    html += '</div>';
    return html;
  }

  async function loadToday() {
    if (!code) return;
    try {
      const res = await fetch('/api/meals?code=' + encodeURIComponent(code));
      const data = await res.json();
      if (data.ok) {
        state.todayMeals = data.meals || [];
        const totals = state.todayMeals.reduce(function (acc, m) {
          acc.calories += ((m.calories_min || 0) + (m.calories_max || 0)) / 2;
          acc.proteines += m.proteines_g || 0;
          acc.glucides += m.glucides_g || 0;
          acc.lipides += m.lipides_g || 0;
          return acc;
        }, { calories: 0, proteines: 0, glucides: 0, lipides: 0 });
        state.consumedToday = {
          calories: Math.round(totals.calories), proteines: Math.round(totals.proteines),
          glucides: Math.round(totals.glucides), lipides: Math.round(totals.lipides),
        };
        render();
      }
    } catch (err) { /* silencieux — l'écran fonctionne sans le récapitulatif */ }
  }

  function bind() {
    const captureInput = root.querySelector('#facile-capture-input');
    const importInput = root.querySelector('#facile-import-input');
    [captureInput, importInput].forEach(function (input) {
      if (!input) return;
      input.addEventListener('change', async function () {
        const file = input.files[0];
        if (!file) return;
        if (!/^image\/(jpeg|png|webp)$/.test(file.type)) {
          state.error = 'Format non accepté — utilise une photo JPEG, PNG ou WEBP.';
          render();
          return;
        }
        if (file.size > 15 * 1024 * 1024) {
          state.error = 'Photo trop lourde (15 Mo max).';
          render();
          return;
        }
        state.error = '';
        state.photo = await rfCompressImage(file);
        render();
      });
    });

    root.querySelectorAll('.np-choice[data-connait]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.connaitQuantites = btn.dataset.connait;
        if (state.connaitQuantites === 'oui' && !state.quantites.length) {
          state.quantites.push({ aliment: '', quantite: '' });
        }
        render();
      });
    });

    const addQuantiteBtn = root.querySelector('#facile-add-quantite');
    if (addQuantiteBtn) addQuantiteBtn.addEventListener('click', function () {
      state.quantites.push({ aliment: '', quantite: '' });
      render();
    });

    root.querySelectorAll('[data-qi]').forEach(function (input) {
      input.addEventListener('input', function () {
        state.quantites[Number(input.dataset.qi)][input.dataset.qf] = input.value;
      });
    });

    const noteInput = root.querySelector('#facile-note');
    if (noteInput) noteInput.addEventListener('input', function () { state.noteContexte = noteInput.value; });

    const analyzeBtn = root.querySelector('#facile-analyze-btn');
    if (analyzeBtn) {
      analyzeBtn.addEventListener('click', async function () {
        state.step = 'analyzing';
        render();
        try {
          const res = await fetch('/api/analyze-meal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              code: code,
              photoBase64: state.photo.base64,
              photoMimeType: state.photo.mimeType,
              quantitesConnues: state.connaitQuantites === 'oui' ? state.quantites.filter(function (q) { return q.aliment && q.quantite; }) : [],
              noteContexte: state.noteContexte,
            }),
          });
          const data = await res.json();
          if (!res.ok || !data.ok) {
            state.step = 'photo';
            state.error = data.error || 'Analyse impossible pour le moment.';
            render();
            return;
          }
          state.analysis = data.analysis;
          state.remaining = data.remaining;
          state.consumedToday = data.consumedToday;
          state.dailyTargets = data.dailyTargets;
          state.methodVersion = data.methodVersion;
          state.step = 'result';
          render();
        } catch (err) {
          state.step = 'photo';
          state.error = 'Analyse impossible pour le moment — vérifie ta connexion.';
          render();
        }
      });
    }

    const retryBtn = root.querySelector('#facile-retry-btn');
    if (retryBtn) retryBtn.addEventListener('click', function () {
      state.step = 'photo'; state.photo = null; state.analysis = null;
      render();
    });

    const addDayBtn = root.querySelector('#facile-add-day-btn');
    if (addDayBtn) {
      addDayBtn.addEventListener('click', async function () {
        addDayBtn.disabled = true;
        addDayBtn.textContent = 'Ajout en cours…';
        try {
          await fetch('/api/meals', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              code: code,
              analysis: state.analysis,
              photoBase64: state.photo.base64,
              photoMimeType: state.photo.mimeType,
              quantitesConnues: state.quantites,
              noteContexte: state.noteContexte,
              methodVersion: state.methodVersion,
            }),
          });
        } catch (err) { /* on repart quand même à l'écran photo */ }
        state.step = 'photo'; state.photo = null; state.analysis = null;
        state.connaitQuantites = null; state.quantites = []; state.noteContexte = '';
        await loadToday();
        render();
      });
    }

    const discardBtn = root.querySelector('#facile-discard-btn');
    if (discardBtn) discardBtn.addEventListener('click', function () {
      state.step = 'photo'; state.photo = null; state.analysis = null;
      state.connaitQuantites = null; state.quantites = []; state.noteContexte = '';
      render();
    });

    root.querySelectorAll('.facile-meal-delete').forEach(function (btn) {
      btn.addEventListener('click', async function () {
        try {
          await fetch('/api/meals', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: code, id: btn.dataset.id }),
          });
        } catch (err) { /* ignore */ }
        await loadToday();
      });
    });
  }

  render();
  loadToday();
}
