// Contenu du Programme jour par jour (réservé à la formule Premium — voir
// programme.html). RF_JOURS_OVERRIDES ne contient que les jours déjà
// rédigés ; tout jour absent retombe sur un placeholder "à venir". Ajoute
// une entrée par jour au fur et à mesure, même logique que les modules
// (module-*.html) : titre + lien YouTube non listé + texte.
//
// Exemple :
// RF_JOURS_OVERRIDES[1] = {
//   titre: "Bienvenue dans le Programme Ancré",
//   videoId: "ID_VIDEO_ICI",
//   texte: "Texte du jour 1.",
// };

const RF_JOURS_TOTAL = 730; // 2x 365 jours (année 1 + année 2)

const RF_JOURS_OVERRIDES = {
  // À remplir progressivement.
};

function rfGetJourContent(jour) {
  if (RF_JOURS_OVERRIDES[jour]) return RF_JOURS_OVERRIDES[jour];
  return { titre: `Jour ${jour}`, videoId: null, texte: 'Contenu à venir.' };
}
