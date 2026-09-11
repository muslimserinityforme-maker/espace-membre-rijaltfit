// Outil "Ton protocole nutrition" — bilan en 3 étapes (infos → calcul du
// taux de masse grasse → objectif) qui oriente le client vers l'un des 4
// protocoles nutrition. Rendu dans le panneau principal du tableau de bord
// (espace.html) quand le niveau sélectionné a `special: 'nutrition-protocol'`.
//
// Rijal Fit s'adresse uniquement aux hommes — pas de sélection de sexe,
// formule US Navy homme uniquement.
//
// Tout ce qui est modifiable (seuils, textes, CTA) est regroupé dans
// RF_PROTOCOLS/RF_OBJECTIFS en haut du fichier — la logique de calcul et le
// rendu ne contiennent aucun texte/seuil en dur.

// ── Configuration centrale des protocoles ──────────────────────────────
// min/max = bornes du taux de masse grasse (%) qui orientent vers ce
// protocole.
const RF_PROTOCOLS = {
  fit: {
    id: 'fit',
    label: 'PROTOCOLE FIT',
    seuils: { min: 20, max: Infinity },
    prioriteDefaut: "Ta priorité est de réduire progressivement ta masse grasse tout en préservant ton muscle, ton énergie et tes performances.\nTu vas commencer par le Protocole FIT.",
    titrePage: 'TON PROTOCOLE FIT',
    intro: "Ton objectif n'est pas simplement de voir ton poids descendre sur la balance.\nNous voulons principalement réduire ta masse grasse tout en conservant ton muscle, ton énergie et une alimentation que tu peux tenir sur la durée.",
    petitDejeuner: {
      texte: "Si tu n'as naturellement pas faim le matin, tu peux choisir de décaler ton premier repas.\nSi tu as l'habitude de prendre un petit-déjeuner, tu peux parfaitement le conserver. L'objectif sera simplement de choisir un petit-déjeuner équilibré et rassasiant.",
      note: 'Le jeûne intermittent est un outil facultatif, jamais une obligation.',
    },
    midiSoir: {
      liste: [
        'la méthode F.A.C.I.L.E. ;',
        'des portions adaptées ;',
        'une bonne consommation de protéines ;',
        'des légumes et aliments rassasiants ;',
        'une gestion adaptée des féculents ;',
        'un déficit calorique raisonnable.',
      ],
    },
  },
  recomposition: {
    id: 'recomposition',
    label: 'PROTOCOLE RECOMPOSITION',
    seuils: { min: 15, max: 20 },
    prioriteDefaut: "Ton objectif sera de réduire progressivement ta masse grasse tout en développant ou en préservant ta masse musculaire.\nTu vas commencer par le Protocole Recomposition.",
    titrePage: 'TON PROTOCOLE RECOMPOSITION',
    intro: 'Ton objectif est double : diminuer progressivement ton taux de masse grasse tout en donnant à ton corps les nutriments nécessaires pour construire ou préserver du muscle.\nTu vas donc chercher l’équilibre entre alimentation, protéines, entraînement et récupération.',
    petitDejeuner: {
      texte: "Comme pour les autres protocoles, le jeûne intermittent reste facultatif : garde ton petit-déjeuner habituel s'il te convient, ou décale ton premier repas si tu n'as naturellement pas faim le matin.",
      note: 'Aucune obligation — choisis ce qui te permet de tenir sur la durée.',
    },
    midiSoir: {
      texte: 'Utilise la méthode F.A.C.I.L.E., avec des portions adaptées à ton profil.',
    },
  },
  muscle: {
    id: 'muscle',
    label: 'PROTOCOLE MUSCLE',
    seuils: { min: 12, max: 15 },
    prioriteDefaut: "Ton niveau de masse grasse te permet de t’orienter vers une construction musculaire contrôlée.\nL’objectif sera de développer du muscle sans augmenter inutilement ton taux de gras.",
    titrePage: 'TON PROTOCOLE MUSCLE',
    intro: "Ton objectif est de donner à ton corps suffisamment d’énergie et de nutriments pour développer du muscle tout en limitant la prise de masse grasse.",
    petitDejeuner: {
      texte: 'Si tu prends un petit-déjeuner, privilégie une base rassasiante avec une source de protéines, une source de bons lipides et, selon tes besoins, une source de glucides.',
      exemples: [
        'œufs + pain complet + fruit ;',
        'omelette + avocat + pain complet ;',
        'œufs + pommes de terre + légumes ;',
        'fromage blanc ou skyr + fruits + oléagineux si tu préfères une version sucrée.',
      ],
      note: 'Le petit-déjeuner salé est une option, jamais une obligation.',
    },
    midiSoir: {
      liste: [
        'conserver un apport suffisant en protéines ;',
        'augmenter progressivement l’énergie disponible ;',
        'augmenter principalement les glucides selon les besoins ;',
        'conserver suffisamment de lipides ;',
        'répartir les repas selon le quotidien du client.',
      ],
      note: 'La méthode F.A.C.I.L.E. reste la base. Pour ce protocole, les portions de féculents sont augmentées par rapport au Protocole FIT, selon les besoins caloriques réels du client — pas une règle fixe universelle.',
    },
  },
  'muscle-maintenance': {
    id: 'muscle-maintenance',
    label: 'PROTOCOLE MUSCLE / MAINTENANCE',
    seuils: { min: -Infinity, max: 12 },
    prioriteDefaut: "Ton taux de masse grasse est relativement bas.\nSelon ton objectif, tu vas pouvoir augmenter progressivement tes apports pour développer ta masse musculaire ou maintenir ta composition corporelle.",
    // Pas de section dédiée dans le brief — partage la page du Protocole Muscle.
    shareContentWith: 'muscle',
    titrePage: 'TON PROTOCOLE MUSCLE',
  },
};

const RF_OBJECTIFS = [
  { id: 'perte-de-gras', choix: 'Je veux perdre du gras', label: 'Perdre du gras', infinitif: 'perdre du gras' },
  { id: 'prise-de-muscle', choix: 'Je veux prendre du muscle', label: 'Prendre du muscle', infinitif: 'prendre du muscle' },
  { id: 'energie', choix: 'Je veux retrouver plus d’énergie', label: 'Retrouver plus d’énergie', infinitif: 'retrouver plus d’énergie' },
  { id: 'forme-generale', choix: 'Je veux améliorer ma forme générale', label: 'Améliorer ma forme générale', infinitif: 'améliorer ma forme générale' },
];

const RF_NUTRITION_STORAGE_KEY = 'rf_nutrition_profile';

// ── Calcul (formule US Navy métrique, homme) ────────────────────────────
function rfComputeBodyFat(tailleCm, tourTailleCm, tourCouCm) {
  const log10 = Math.log10;
  return 495 / (1.0324 - 0.19077 * log10(tourTailleCm - tourCouCm) + 0.15456 * log10(tailleCm)) - 450;
}

function rfDetermineProtocol(tauxMasseGrasse) {
  const ordre = ['fit', 'recomposition', 'muscle', 'muscle-maintenance'];
  for (const id of ordre) {
    const seuils = RF_PROTOCOLS[id].seuils;
    if (tauxMasseGrasse >= seuils.min && tauxMasseGrasse < seuils.max) return id;
  }
  return 'muscle-maintenance';
}

function rfPrioriteMessage(protocolId, objectifId) {
  const protocole = RF_PROTOCOLS[protocolId];
  const objectif = RF_OBJECTIFS.find(function (o) { return o.id === objectifId; });

  // Cas particulier explicitement donné : objectif "énergie" alors que le
  // taux de masse grasse oriente vers un protocole de perte/recomposition.
  if (objectifId === 'energie' && (protocolId === 'fit' || protocolId === 'recomposition')) {
    return 'Ton objectif est de retrouver plus d’énergie.\nPour y parvenir, nous allons commencer par réduire progressivement ta masse grasse tout en conservant suffisamment d’énergie pour ton quotidien et tes entraînements.';
  }

  const commenceParVoyelle = /^[aeiouyàâäéèêëïîôöùûü]/i.test(objectif.infinitif);
  const intro = 'Ton objectif est ' + (commenceParVoyelle ? 'd’' : 'de ') + objectif.infinitif + '.';
  return intro + '\n' + protocole.prioriteDefaut;
}

function rfGetNutritionProfile() {
  try {
    const raw = localStorage.getItem(RF_NUTRITION_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

function rfSaveNutritionProfile(profile) {
  try {
    localStorage.setItem(RF_NUTRITION_STORAGE_KEY, JSON.stringify(profile));
  } catch (err) {
    // localStorage indisponible — tant pis, le bilan ne sera pas mémorisé.
  }
}

// ── Rendu de l'outil dans le conteneur donné ────────────────────────────
function rfRenderNutritionProtocol(root) {
  const saved = rfGetNutritionProfile();
  const state = {
    step: saved ? 'resultat' : 'intro',
    age: (saved && saved.age) || '',
    poids: (saved && saved.poids) || '',
    taille: (saved && saved.taille) || '',
    tourTaille: (saved && saved.tourTaille) || '',
    tourCou: (saved && saved.tourCou) || '',
    tauxMasseGrasse: saved ? saved.tauxMasseGrasse : null,
    protocolId: saved ? saved.protocolId : null,
    objectifId: saved ? saved.objectifId : null,
    formError: '',
  };

  function paragraphes(texte) {
    return texte.split('\n').map(function (p) { return '<p>' + p + '</p>'; }).join('');
  }

  // Bloc "protocole des poings" (vidéo + image), affiché sur chaque page protocole.
  function poingsBlockHtml() {
    return (
      '<div class="video-embed"><iframe src="https://www.youtube.com/embed/SJTdzvcY77c" title="Le protocole des poings" allowfullscreen loading="lazy"></iframe></div>' +
      '<div class="niveau__images"><img src="images/protocole-poings.jpg" alt="Le protocole des poings — équivalences de portions" loading="lazy"></div>'
    );
  }

  function render() {
    let html = '';

    if (state.step === 'intro') {
      html =
        '<div class="np-card">' +
        '<div class="niveau__images"><img src="images/protocole-nutrition-intro.jpg" alt="Ton protocole nutrition" loading="lazy"></div>' +
        '<div class="np-text">' + paragraphes(
          'Avant de commencer, tu dois savoir quelle stratégie nutritionnelle correspond réellement à ton corps.\n' +
          'Ton objectif personnel est important, mais ton taux de masse grasse va également nous aider à déterminer par quoi commencer.\n' +
          'Tu vas donc répondre à quelques questions simples. À partir de tes données, nous allons estimer ton taux de masse grasse et t’orienter vers le protocole le plus adapté.'
        ) + '</div>' +
        '<button type="button" id="np-start-btn" class="btn btn--primary">Commencer mon bilan →</button>' +
        '</div>';
    }

    if (state.step === 'form') {
      html =
        '<div class="np-card">' +
        '<div class="np-field-grid">' +
        '<div class="np-field"><label for="np-age">Ton âge (années)</label><input type="number" id="np-age" value="' + state.age + '" min="12" max="100" /></div>' +
        '<div class="np-field"><label for="np-poids">Ton poids (kg)</label><input type="number" id="np-poids" value="' + state.poids + '" min="30" max="300" /></div>' +
        '<div class="np-field"><label for="np-taille">Ta taille (cm)</label><input type="number" id="np-taille" value="' + state.taille + '" min="100" max="230" /></div>' +
        '<div class="np-field">' +
        '<label for="np-tour-taille">Ton tour de taille (cm)</label>' +
        '<input type="number" id="np-tour-taille" value="' + state.tourTaille + '" min="40" max="200" />' +
        '<p class="np-hint">Mesure ton tour de taille au niveau du nombril, sans rentrer le ventre.</p>' +
        '</div>' +
        '<div class="np-field">' +
        '<label for="np-tour-cou">Ton tour de cou (cm)</label>' +
        '<input type="number" id="np-tour-cou" value="' + state.tourCou + '" min="20" max="70" />' +
        '<p class="np-hint">Mesure ton tour de cou juste sous la pomme d’Adam.</p>' +
        '</div>' +
        '</div>' +
        (state.formError ? '<p class="form-error">' + state.formError + '</p>' : '') +
        '<button type="button" id="np-calc-btn" class="btn btn--primary">Calculer mon profil →</button>' +
        '</div>';
    }

    if (state.step === 'objectif') {
      html =
        '<div class="np-card">' +
        '<p class="np-question">Quel est ton objectif principal aujourd’hui ?</p>' +
        '<div class="np-choice-list">' +
        RF_OBJECTIFS.map(function (o) {
          return '<button type="button" class="np-choice" data-objectif="' + o.id + '">' + o.choix + '</button>';
        }).join('') +
        '</div>' +
        '</div>';
    }

    if (state.step === 'resultat') {
      const protocole = RF_PROTOCOLS[state.protocolId];
      const objectif = RF_OBJECTIFS.find(function (o) { return o.id === state.objectifId; });
      html =
        '<div class="np-result-card">' +
        '<p class="np-result-card__label">Ton profil</p>' +
        '<div class="np-result-row"><span>Ton objectif</span><strong>' + (objectif ? objectif.label : '—') + '</strong></div>' +
        '<div class="np-result-row"><span>Ton taux de masse grasse estimé</span><strong>' + Math.round(state.tauxMasseGrasse) + ' %</strong></div>' +
        '<div class="np-result-row"><span>Ta stratégie</span><strong>' + protocole.label + '</strong></div>' +
        '<p class="np-result-card__note">Cette estimation permet de déterminer la stratégie nutritionnelle la plus cohérente pour commencer — ce n’est pas une mesure médicale exacte.</p>' +
        '<div class="np-result-card__priorite">' + paragraphes(rfPrioriteMessage(state.protocolId, state.objectifId)) + '</div>' +
        '<button type="button" id="np-discover-btn" class="btn btn--primary btn--large">Découvrir mon protocole →</button>' +
        '<button type="button" id="np-restart-btn" class="np-restart-link">Refaire le bilan</button>' +
        '</div>';
    }

    if (state.step === 'protocole') {
      const protocole = RF_PROTOCOLS[state.protocolId];
      const contenu = protocole.shareContentWith ? RF_PROTOCOLS[protocole.shareContentWith] : protocole;
      html = '<div class="np-card np-protocol-page">';
      html += '<p class="np-protocol-title">' + protocole.titrePage + '</p>';
      html += '<div class="np-text">' + paragraphes(contenu.intro) + '</div>';

      html += poingsBlockHtml();

      if (contenu.petitDejeuner) {
        html += '<p class="np-subtitle">Petit déjeuner ou jeûne intermittent</p>';
        html += '<div class="np-text">' + paragraphes(contenu.petitDejeuner.texte) + '</div>';
        if (contenu.petitDejeuner.exemples) {
          html += '<ul class="np-list">' + contenu.petitDejeuner.exemples.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>';
        }
        if (contenu.petitDejeuner.note) {
          html += '<p class="np-note">' + contenu.petitDejeuner.note + '</p>';
        }
      }

      if (contenu.midiSoir) {
        html += '<p class="np-subtitle">Midi et soir</p>';
        if (contenu.midiSoir.texte) {
          html += '<div class="np-text">' + paragraphes(contenu.midiSoir.texte) + '</div>';
        }
        if (contenu.midiSoir.liste) {
          html += '<ul class="np-list">' + contenu.midiSoir.liste.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>';
        }
        if (contenu.midiSoir.note) {
          html += '<p class="np-note">' + contenu.midiSoir.note + '</p>';
        }
      }

      html += '<button type="button" id="np-back-result-btn" class="np-restart-link">← Retour à mon profil</button>';
      html += '</div>';
    }

    root.innerHTML = html;
    bind();
  }

  function bind() {
    const startBtn = root.querySelector('#np-start-btn');
    if (startBtn) startBtn.addEventListener('click', function () { state.step = 'form'; render(); });

    const calcBtn = root.querySelector('#np-calc-btn');
    if (calcBtn) {
      calcBtn.addEventListener('click', function () {
        const age = Number(root.querySelector('#np-age').value);
        const poids = Number(root.querySelector('#np-poids').value);
        const taille = Number(root.querySelector('#np-taille').value);
        const tourTaille = Number(root.querySelector('#np-tour-taille').value);
        const tourCou = Number(root.querySelector('#np-tour-cou').value);

        const valeurs = [age, poids, taille, tourTaille, tourCou];

        if (valeurs.some(function (v) { return !v || v <= 0 || Number.isNaN(v); })) {
          state.formError = 'Merci de remplir tous les champs avec des valeurs valides.';
          render();
          return;
        }
        if (tourTaille <= tourCou) {
          state.formError = 'Le tour de taille doit être supérieur au tour de cou — vérifie tes mesures.';
          render();
          return;
        }

        state.age = age; state.poids = poids; state.taille = taille;
        state.tourTaille = tourTaille; state.tourCou = tourCou;
        state.formError = '';
        state.tauxMasseGrasse = rfComputeBodyFat(taille, tourTaille, tourCou);
        state.protocolId = rfDetermineProtocol(state.tauxMasseGrasse);
        state.step = 'objectif';
        render();
      });
    }

    root.querySelectorAll('.np-choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.objectifId = btn.dataset.objectif;
        state.step = 'resultat';
        rfSaveNutritionProfile({
          age: state.age, poids: state.poids, taille: state.taille,
          tourTaille: state.tourTaille, tourCou: state.tourCou,
          tauxMasseGrasse: state.tauxMasseGrasse, protocolId: state.protocolId, objectifId: state.objectifId,
        });
        render();
      });
    });

    const discoverBtn = root.querySelector('#np-discover-btn');
    if (discoverBtn) discoverBtn.addEventListener('click', function () { state.step = 'protocole'; render(); });

    const backResultBtn = root.querySelector('#np-back-result-btn');
    if (backResultBtn) backResultBtn.addEventListener('click', function () { state.step = 'resultat'; render(); });

    const restartBtn = root.querySelector('#np-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', function () {
        state.step = 'intro';
        state.tauxMasseGrasse = null; state.protocolId = null; state.objectifId = null;
        render();
      });
    }
  }

  render();
}
