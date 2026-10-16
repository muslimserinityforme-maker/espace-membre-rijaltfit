// « Ta formule » : tableau de ce que contient chaque formule, avec la colonne
// du membre mise en couleur (une couleur par formule). Affiché dans
// Introduction > Ta formule (espace.html).
var RF_FORMULES_COMPARE = [
  { id: 'qiyam', nom: 'QIYAM', prix: '980 €' },
  { id: 'thabit', nom: 'THĀBIT', prix: '1 680 €' },
  { id: 'rijal', nom: 'RIJAL', prix: '3 000 €' }
];

function rfFormuleId(formule) {
  var k = (formule || 'qiyam').toString().trim().toLowerCase().replace('ā', 'a');
  if (k === 'thabit' || k === 'rijal' || k === 'qiyam') return k;
  if (typeof rfHasCoaching === 'function' && !rfHasCoaching(formule)) return '';
  return 'qiyam';
}

function rfFormuleNom(formule) {
  var id = rfFormuleId(formule);
  var f = RF_FORMULES_COMPARE.filter(function (x) { return x.id === id; })[0];
  return f ? f.nom : '';
}

function rfFormuleCompareHtml(formule) {
  var OUI = '✓';
  var NON = '–';
  var rows = [
    ['Bibliothèque de formation', 'Modules essentiels', 'Tous les modules', 'Tous les modules'],
    ['Durée de l’accompagnement', '3 mois', '3 mois', '2 ans'],
    ['Ton poste de la semaine, avec un retour complet de ton coach', OUI, OUI, OUI],
    ['Relance du coach si tu ne postes pas', OUI, OUI, OUI],
    ['Message de motivation en début de semaine et rappel de ton poste la veille', OUI, OUI, OUI],
    ['Coach disponible pour tes questions et tes changements d’exercices', OUI, OUI, OUI],
    ['Appel toutes les 2 semaines : mindset, séances, nutrition, coaching de vie', NON, OUI, OUI],
    ['Une semaine en physique avec ton coach', NON, NON, OUI],
    ['Après les 3 mois', '200 €/mois pour continuer', '200 €/mois pour continuer', 'Inclus']
  ];
  var current = rfFormuleId(formule);
  var html = '<div class="formules-compare">';
  html += '<div class="formules-compare__scroll"><table class="formules-table"><thead><tr><th></th>';
  RF_FORMULES_COMPARE.forEach(function (f) {
    var cur = f.id === current;
    html += '<th class="' + (cur ? 'is-current f-' + f.id : '') + '">' + f.nom + '<span>' + f.prix + '</span>' + (cur ? '<em>Ta formule</em>' : '') + '</th>';
  });
  html += '</tr></thead><tbody>';
  rows.forEach(function (r) {
    html += '<tr><th scope="row">' + r[0] + '</th>';
    RF_FORMULES_COMPARE.forEach(function (f, i) {
      var v = r[i + 1];
      var cur = f.id === current;
      html += '<td class="' + (cur ? 'is-current f-' + f.id : '') + (v === NON ? ' is-no' : '') + '">' + v + '</td>';
    });
    html += '</tr>';
  });
  html += '</tbody></table></div></div>';
  return html;
}
