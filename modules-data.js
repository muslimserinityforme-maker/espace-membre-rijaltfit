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
        titre: 'Quel est ton vrai pourquoi ?',
        videoId: null,
        blocks: [
          { image: 'images/intro-vrai-pourquoi.jpg' },
          { text: '<strong><u>Avant de commencer : trouve ton vrai « Pourquoi »</u></strong>' },
          { text: "Avant de commencer ton programme, il y a une étape que je ne veux pas que tu négliges : comprendre pourquoi tu veux vraiment changer." },
          { text: "Perdre 10 kilos. Voir tes abdos. Passer sous les 90 kg. Rentrer dans un ancien pantalon. Avoir un meilleur physique, obtenir plus de masse musculaire etc…" },
          { text: 'Ce sont de bons objectifs, mais ce ne sont que des résultats visibles.' },
          { text: "Parce qu'une fois l'excitation des premières semaines passée, les résultats ne seront pas toujours comme tu le souhaites. Tu auras des semaines difficiles. Tu seras fatigué. Tu manqueras parfois une séance. Et certains jours, tu n'auras simplement pas envie." },
          { text: "C'est souvent à ce moment-là que commence le cycle de l'abandon : tu commences motivé, tu rencontres une difficulté, tu culpabilises, tu perds le sens de tes efforts… puis tu abandonnes avant de recommencer quelques semaines ou quelques mois plus tard." },
          { text: "Ton <strong>Pourquoi</strong> doit donc être plus profond qu'un chiffre ou qu'un reflet dans le miroir." },
          { text: "Peut-être que tu veux retrouver suffisamment d'énergie pour être présent avec tes enfants. Pouvoir te relever plus facilement du sujūd. Arriver au Ramadan avec un corps mieux préparé. Vieillir en restant autonome. Prendre soin de cette amānah qu'est ton corps. Ou simplement retrouver une cohérence entre la personne que tu veux devenir et la manière dont tu prends soin de ta santé aujourd'hui." },
          { text: "Ton <strong>Pourquoi</strong> donne une direction à tes efforts." },
          { text: "Et cette étape est également importante pour commencer à <strong>affaiblir ton Grand Domino</strong>." },
          { text: "<strong>Ton Grand Domino</strong> peut alimenter certaines pensées, habitudes ou réactions qui te ramènent régulièrement vers les mêmes comportements. En donnant à tes efforts une raison plus profonde, tu commences progressivement à ne plus agir uniquement en fonction de ton envie du moment, de la balance ou de tes anciens automatismes." },
          { text: 'Tu construis une direction suffisamment importante pour continuer à avancer, même lorsque ta motivation baisse.' },
        ],
      },
      {
        titre: 'Exercice : trouve ton Pourquoi en 7 questions',
        videoId: null,
        blocks: [
          { image: 'images/intro-exercice-pourquoi.jpg' },
          { text: '<strong><u>Exercice : trouve ton Pourquoi en 7 questions</u></strong>' },
          { text: "Prends quelques minutes et réponds honnêtement. Utilise un cahier, un Word ou autre, et garde tout ton travail précieusement : ça sera <strong>TRÈS TRÈS TRÈS IMPORTANT</strong> pour trouver ton <strong>GRAND DOMINO</strong>. Chaque mot que tu rédiges permet de le trouver, donc ne cherche pas la « bonne » réponse, mais avance dans une démarche sincère envers toi-même." },
          { text: "1. Quel est le changement physique que tu souhaites obtenir aujourd'hui ?<br>Exemple : perdre 10 kg, retrouver de l'énergie, devenir plus fort, améliorer ma santé…" },
          { text: "2. Pourquoi est-ce important pour toi d'obtenir ce résultat ?<br>Qu'est-ce que cela changerait réellement dans ton quotidien ?" },
          { text: "3. Quel est le changement intérieur que tu souhaites obtenir aujourd'hui ?" },
          { text: "4. Si tu obtenais ce résultat demain, qu'est-ce que tu pourrais faire ou vivre que tu ne vis pas pleinement aujourd'hui ?<br>Pense à ta famille, ton travail, tes activités, ta santé, tes adorations…" },
          { text: "5. Pourquoi ces choses sont-elles importantes pour toi ?<br>Qu'est-ce qu'elles représentent profondément dans ta vie ?" },
          { text: "6. Quel homme veux-tu devenir à travers cette démarche ?<br>Ne parle plus de kilos ou de muscles. Parle de qualités : discipline, énergie, responsabilité, constance, autonomie, confiance, capacité à servir…" },
          { text: "7. En quoi prendre soin de ton corps peut-il t'aider à mieux vivre ce qui compte réellement pour toi et à te rapprocher d'Allah ?<br>C'est ici que tu cherches à relier ta santé à quelque chose de plus grand que ton apparence." },
          { text: 'À partir de tes réponses, termine cette phrase :' },
          { text: '« Je ne veux pas seulement __________. Je veux prendre soin de mon corps pour __________, afin de pouvoir __________. Et lorsque ce sera difficile, je veux me rappeler que je fais tout cela pour __________. »' },
          { text: 'Garde cette phrase. Ce sera ta boussole.' },
          { text: "Ton programme te donnera les exercices, les habitudes et la méthode. Mais ton <strong>Pourquoi</strong> te rappellera pourquoi cela mérite de continuer lorsque l'envie d'abandonner reviendra." },
        ],
      },
      { titre: 'Ton protocole nutrition', special: 'nutrition-protocol' },
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
      {
        titre: 'Ne te casse plus la tête',
        videoId: null,
        blocks: [
          { image: 'images/intro-ne-te-casse-plus-la-tete.jpg' },
          { text: '<strong><u>Ne te casse plus la tête !</u></strong>' },
          { text: '<strong><u>Salle ou maison ? Les deux fonctionnent !</u></strong>' },
          { text: "Si ton objectif est de perdre du gras, retrouver de l'énergie, améliorer ta condition physique ou développer tes muscles, tu peux obtenir des résultats aussi bien à la salle qu'à la maison." },
          { text: "La salle te permet d'aller plus loin avec les charges et de développer plus facilement ta force et ta masse musculaire." },
          { text: "La maison te permet de t'entraîner plus facilement : moins de déplacements, moins de contraintes et plus de flexibilité." },
          { text: "C'est pour ça que les programmes Rijal Fit Salle et Maison avancent ensemble, phase par phase." },
          { text: "Tu peux faire uniquement la salle, uniquement la maison, alterner une semaine sur deux ou même faire une séance en salle et la suivante à la maison. Tu pars en vacances ? Pas besoin d'arrêter : tu continues simplement la même phase avec le programme maison." },
          { text: "Le programme s'adapte à ton rythme de vie, pas l'inverse." },
          { text: "Ton coach est là pour t'aider à choisir les bonnes séances selon ton niveau, ton emploi du temps, ton matériel et ta récupération." },
          { text: 'Au final, ne cherche pas le programme « parfait ». Choisis surtout celui que tu peux suivre avec régularité.' },
          { text: '<strong><u>Retenir :</u></strong><br><strong><u>Salle = plus de possibilités.<br>Maison = plus de flexibilité.<br>Rijal Fit = les deux selon ta vie.</u></strong>' },
        ],
      },
      {
        titre: 'Matériels à prévoir à la maison',
        videoId: null,
        blocks: [
          { image: 'images/intro-materiels-maison.jpg' },
          { text: '<strong><u>Le matériel à prévoir à la maison</u></strong>' },
          { text: "Pour progresser à la maison, tu n'as pas besoin de transformer ton salon en salle de musculation. Quelques équipements bien choisis suffisent pour augmenter progressivement la difficulté de tes exercices et continuer à évoluer au fil des phases Rijal Fit." },
          { image: 'images/intro-traction-romaine.jpg' },
          { text: '<strong><u>Barre de traction ou chaise romaine</u></strong>' },
          { text: "Elle te permet principalement de travailler ton dos avec les tractions, mais aussi d'intégrer différents exercices au poids du corps. Si tu ne peux pas installer une barre de traction chez toi, la chaise romaine est une excellente alternative." },
          { image: 'images/intro-halteres.jpg' },
          { text: '<strong><u>Kit d’haltères</u></strong>' },
          { text: "Les haltères vont te permettre d'ajouter progressivement de la charge à tes exercices. Développé, rowing, curl, élévations, jambes… Avec quelques poids réglables, tu peux déjà travailler une grande partie de ton corps." },
        ],
      },
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
