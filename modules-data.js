// Contenu des 5 modules Starter (+ l'Introduction). Même logique que
// jours-data.js : un objet par module, une entrée par niveau (titre + lien
// YouTube non listé + texte). Donne le contenu module par module, je
// remplis directement ici.
//
// Exemple pour ajouter une vidéo à un niveau :
// { titre: 'Niveau 1 — Ton intention', videoId: 'ID_VIDEO_ICI', texte: '...' }
//
// Un niveau peut aussi avoir un champ `images` (tableau d'URLs) pour des
// images d'illustration à la place ou en plus d'une vidéo — laisser le
// tableau vide en attendant les vraies images :
// { titre: '...', images: [], texte: '...' }
//
// Pour intercaler texte et images dans un ordre précis (ex: photo, puis
// texte, puis une autre image), utiliser `blocks` à la place de
// `images`/`texte` — rendu dans l'ordre exact du tableau :
// { titre: '...', blocks: [{ image: '...' }, { text: '...' }, { image: '...' }] }

const RF_MODULES = [
  {
    id: 'introduction',
    num: null,
    nom: 'Introduction',
    desc: "Avant de commencer : comment utiliser l'espace, la vision Rijal Fit, et comment t'équiper.",
    niveaux: [
      { titre: 'Comment ça marche ?', videoId: null, texte: "Vidéo à venir — explique comment utiliser l'espace membre." },
      { titre: 'La vision Rijal Fit', videoId: null, texte: "Vidéo à venir (~5 min) — ce qu'est Rijal Fit." },
      {
        titre: 'Quoi choisir ? En salle ou à la maison ?',
        videoId: null,
        blocks: [
          { image: 'images/intro-salle-ou-maison.jpg' },
          { text: '<strong><u>Salle ou maison : que choisir ?</u></strong>' },
          { text: "Dans Rijal Fit, le programme en salle et le programme à la maison ne sont pas deux chemins différents. Ils suivent la même logique de transformation, les mêmes phases et les mêmes intentions. Ce qui change principalement, ce sont les outils utilisés pour créer la stimulation musculaire et atteindre une transformation extérieure comme intérieure." },
          { image: 'images/intro-salle-image.jpg' },
          { text: "<strong><u>Le programme en salle</u></strong> : <em>permet d'avoir accès à davantage de charges, de machines et de possibilités de progression. Il devient notamment plus simple de quantifier précisément la surcharge progressive, de travailler avec des pourcentages du 1RM et d'augmenter progressivement les charges. À mesure que le niveau du coaché augmente, la salle offre donc davantage de possibilités pour développer la force et la masse musculaire.</em>" },
          { image: 'images/intro-maison-image.jpg' },
          { text: "<strong><u>Le programme maison</u></strong> : <em>répond à une autre priorité : rendre l'entraînement accessible et durable. Tu apprends à créer une stimulation efficace avec son poids de corps, du petit matériel ou des charges disponibles chez toi. La progression ne repose alors pas uniquement sur le poids utilisé. Tu peux jouer sur le niveau de difficulté des exercices, le nombre de répétitions, le volume, le tempo, l'amplitude ou encore la qualité d'exécution.</em>" },
          { text: "<em>Il n'est donc pas nécessaire d'opposer les deux.</em>" },
        ],
      },
      { titre: 'Ne te casse plus la tête', videoId: null, texte: 'Texte à venir.' },
      { titre: 'Matériels à prévoir à la maison', videoId: null, images: [], texte: 'Texte à venir.' },
    ],
  },
  {
    id: 'motive-forme',
    num: 1,
    nom: 'Motive-Forme',
    desc: 'Poser ton intention, comprendre ta motivation, sortir des excuses.',
    niveaux: [
      { titre: 'Niveau 1 — Ton intention', videoId: null, texte: 'Texte du niveau 1 à venir.' },
      { titre: 'Niveau 2 — Ton type de motivation', videoId: null, texte: 'Texte du niveau 2 à venir.' },
    ],
  },
  {
    id: 'nutri-forme',
    num: 2,
    nom: 'Nutri-Forme',
    desc: "La méthode F.A.C.I.L.E pour manger juste, sans te compliquer la vie.",
    niveaux: [
      { titre: 'Niveau 1 — Philosophie Nutri-Forme', videoId: null, texte: 'Texte du niveau 1 à venir.' },
    ],
  },
  {
    id: 'depasse-forme',
    num: 3,
    nom: 'Dépasse-Forme',
    desc: "Les protocoles d'entraînement pour progresser concrètement.",
    niveaux: [
      { titre: 'Niveau 1 — Philosophie des protocoles', videoId: null, texte: 'Texte du niveau 1 à venir.' },
    ],
  },
  {
    id: 'hygiene-forme',
    num: 4,
    nom: 'Hygiène-Forme',
    desc: 'Hygiène de vie et médecine prophétique au quotidien.',
    niveaux: [
      { titre: 'Niveau 1 — Hygiène-Forme', videoId: null, texte: 'Texte du niveau 1 à venir.' },
    ],
  },
  {
    id: 'ramadan-forme',
    num: 5,
    nom: 'Ramadan-Forme',
    desc: 'Garder ta forme et ta régularité pendant les 30 jours de Ramadan.',
    niveaux: [
      { titre: 'Philosophie Ramadan-Forme', videoId: null, texte: "Texte d'introduction à venir." },
    ],
  },
];
