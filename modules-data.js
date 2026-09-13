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
        titre: 'Limiter la casse au restaurant et en famille',
        videoId: null,
        blocks: [
          { text: '<strong><u>Gérer tes repas en famille ou au restaurant</u></strong>' },
          { text: "Suivre ton protocole F.A.C.I.L.E. ne signifie pas que tu dois refuser les invitations ou arrêter de profiter des repas avec tes proches. L'objectif est de trouver un équilibre entre plaisir et maîtrise de tes portions." },
          { text: 'Voici 4 options que tu peux utiliser selon la situation.' },
          { image: 'images/intro-resto-poings.jpg' },
          { text: '<strong><u>Option 1 : Utilise la méthode des poings</u></strong>' },
          { text: 'Même au restaurant ou en famille, tu peux conserver tes repères F.A.C.I.L.E. Utilise simplement ta main pour estimer tes portions : une paume pour les protéines, un poing pour les féculents, un à deux poings de légumes et un pouce pour les matières grasses.' },
          { text: 'Tu peux ainsi profiter de ton repas sans balance et sans compter chaque calorie.' },
          { image: 'images/intro-resto-anticipe.jpg' },
          { text: '<strong><u>Option 2 : Anticipe ton repas plaisir</u></strong>' },
          { text: "Si tu sais que tu vas manger plus copieusement le soir, adapte simplement les repas précédents : fais un jeûne intermittent le matin et un repas plus léger le midi. L'objectif n'est pas de te priver toute la journée, mais de garder davantage de marge pour ton repas plaisir." },
          { text: "Par exemple, tu sais que le soir tu vas manger un couscous en famille avec un dessert. Le midi, tu peux faire plus simple : une paume de poulet, deux poings de légumes et une petite portion de féculents, voire ne pas en ajouter si tu n'en ressens pas le besoin." },
          { text: 'Le soir, tu peux alors profiter de ton couscous et de ton dessert tout en gardant une certaine maîtrise sur l\'ensemble de ta journée.' },
          { image: 'images/intro-resto-choisis.jpg' },
          { text: '<strong><u>Option 3 : Choisis ton plaisir</u></strong>' },
          { text: "Au restaurant ou lors d'un repas en famille, le problème vient souvent de l'accumulation : apéritif, pain, entrée, plat copieux, dessert, boissons sucrées…" },
          { text: "Tu n'es pas obligé de tout prendre. Choisis ce qui te fait réellement plaisir.<br>Par exemple, prends ton plat et ton dessert, mais bois de l'eau et laisse de côté l'entrée." },
          { text: "Et surtout, rappelle-toi : un repas plus copieux ne détruit pas tes résultats. Profite de ton moment, évite simplement que l'exception devienne une habitude, puis reprends normalement ton protocole F.A.C.I.L.E. dès le repas suivant." },
          { image: 'images/intro-resto-photo.jpg' },
          { text: '<strong><u>Option 4 : Prends en photo</u></strong>' },
          { text: 'Une fois que tu as ton plan nutrition, tu le mets dans ton espace Méthode F.A.C.I.L.E.' },
          { text: "Puis tu prends ton repas en photo, et en fonction de ce que tu partages, tu pourras avoir une estimation des calories qu'il te reste. Bien sûr, les valeurs ne seront pas parfaites, sauf si tu es en mesure d'indiquer le grammage…" },
          { text: 'Tu passeras peut-être pour un instagrameur, mais au moins tu éviteras les débordements.' },
        ],
      },
      { titre: 'Ton application F.A.C.I.L.E.', special: 'facile-app' },
      {
        titre: 'Les recettes Rijal Fit',
        videoId: null,
        blocks: [
          { image: 'images/intro-recettes.png' },
          { text: '<strong><u>Les meilleures recettes de Rijal Fit</u></strong>' },
          { text: 'Aucune excuse possible.' },
          { text: 'Tu peux désormais respecter tes macros en te faisant plaisir. Choisi les recettes qui te conviennent : classique, végan, sans gluten ou boost ta testostérone !' },
          { text: '👉🏼 Les Recettes Rijal Fit (classique) 👈🏼' },
          { text: '<div class="recette-actions"><a class="btn btn--primary recette-pdf-btn" href="pdf/recettes/rijal-fit-recettes-classique.pdf" target="_blank" rel="noopener">📄 Le carnet de recettes</a><a class="btn btn--primary recette-pdf-btn" href="pdf/recettes/liste-courses-classique.pdf" target="_blank" rel="noopener">🛒 La liste de courses</a></div>' },
          { text: '👉🏼 Les Recettes Rijal Fit (végan) 👈🏼' },
          { text: '<div class="recette-actions"><a class="btn btn--primary recette-pdf-btn" href="pdf/recettes/rijal-fit-recettes-vegan.pdf" target="_blank" rel="noopener">📄 Le carnet de recettes</a><a class="btn btn--primary recette-pdf-btn" href="pdf/recettes/liste-courses-vegan.pdf" target="_blank" rel="noopener">🛒 La liste de courses</a></div>' },
          { text: '👉🏼 Les Recettes Rijal Fit (sans gluten) 👈🏼' },
          { text: '<div class="recette-actions"><a class="btn btn--primary recette-pdf-btn" href="pdf/recettes/rijal-fit-recettes-sans-gluten.pdf" target="_blank" rel="noopener">📄 Le carnet de recettes</a><a class="btn btn--primary recette-pdf-btn" href="pdf/recettes/liste-courses-sans-gluten.pdf" target="_blank" rel="noopener">🛒 La liste de courses</a></div>' },
          { text: '👉🏼 BOOST TA TESTOSTÉRONE 👈🏼' },
          { text: 'Bientôt disponible.' },
        ],
      },
      {
        titre: 'F.A.Q Nutrition',
        videoId: null,
        blocks: [
          { image: 'images/intro-faq-nutrition.png' },
          { text: '<strong><u>FAQ — Méthode F.A.C.I.L.E.</u></strong>' },

          { text: '<strong><u>1. Est-ce que je dois peser mes aliments pour avoir des résultats ?</u></strong>' },
          { text: 'Non. La méthode F.A.C.I.L.E. est justement conçue pour t’apprendre à gérer tes portions avec des repères simples. Le grammage peut être utilisé ponctuellement si tu veux obtenir une estimation plus précise.' },

          { text: '<strong><u>2. Est-ce que je dois compter mes calories tous les jours ?</u></strong>' },
          { text: 'Non. Tes calories et tes macros servent à déterminer tes besoins et à personnaliser ton protocole. Ensuite, F.A.C.I.L.E. te permet de les traduire en portions faciles à appliquer au quotidien.' },

          { text: '<strong><u>3. Que faire si j’ai encore faim après mon repas ?</u></strong>' },
          { text: 'Commence par attendre quelques minutes et vérifie si tu as réellement faim. Si c’est le cas régulièrement, augmente en priorité les aliments rassasiants comme les légumes et vérifie que tes repas contiennent suffisamment de protéines.' },

          { text: '<strong><u>4. Que faire si je n’ai pas faim le matin ?</u></strong>' },
          { text: 'Tu n’es pas obligé de prendre un petit-déjeuner. Tu peux décaler ton premier repas si cela correspond naturellement à ton quotidien. Le jeûne intermittent reste un outil, pas une obligation.' },

          { text: '<strong><u>5. Et si j’ai toujours pris un petit-déjeuner ?</u></strong>' },
          { text: 'Tu peux le conserver. Choisis simplement un petit-déjeuner équilibré contenant notamment une bonne source de protéines et adapte les autres portions de ta journée à ton protocole.' },

          { text: '<strong><u>6. Est-ce que je dois supprimer les féculents pour perdre du gras ?</u></strong>' },
          { text: 'Non. Ton corps peut très bien perdre du gras en consommant des glucides. L’objectif est d’adapter leur quantité à tes besoins, à ton activité et à ton objectif.' },

          { text: '<strong><u>7. Puis-je manger du riz, des pâtes, du pain ou des pommes de terre ?</u></strong>' },
          { text: 'Oui. Aucun de ces aliments n’est responsable à lui seul d’une prise de gras. Ce sont principalement les quantités et ton équilibre énergétique global qui comptent.' },

          { text: '<strong><u>8. Est-ce que je peux manger après 20 h ?</u></strong>' },
          { text: 'Oui. Manger tard ne bloque pas automatiquement ta perte de gras. Ce qui compte principalement est ton alimentation globale et les quantités consommées sur la durée.' },

          { text: '<strong><u>9. Que faire lorsque je mange au restaurant ?</u></strong>' },
          { text: 'Utilise tes repères F.A.C.I.L.E. autant que possible : privilégie une source de protéines, maîtrise ta portion de féculents, ajoute des légumes et choisis consciemment les extras qui te font réellement plaisir.' },

          { text: '<strong><u>10. Comment gérer un repas en famille plus copieux ?</u></strong>' },
          { text: 'Tu peux anticiper en faisant un repas précédent plus léger, sans tomber dans la privation. Par exemple, si un gros repas est prévu le soir, ton déjeuner peut être composé principalement de protéines et de légumes.' },

          { text: '<strong><u>11. Puis-je prendre un dessert au restaurant ?</u></strong>' },
          { text: 'Oui. F.A.C.I.L.E. n’a pas pour objectif de t’interdire les aliments plaisir. Tu peux par exemple choisir plat + dessert plutôt que de cumuler entrée, pain, plat, dessert et boisson sucrée.' },

          { text: '<strong><u>12. J’ai fait un gros écart. Est-ce que je dois compenser le lendemain ?</u></strong>' },
          { text: 'Non. Évite les compensations extrêmes. Ne te prive pas toute la journée et ne fais pas une séance supplémentaire uniquement pour « brûler » ton repas. Reprends simplement ton protocole au repas suivant.' },

          { text: '<strong><u>13. Un repas plaisir peut-il ruiner ma semaine ?</u></strong>' },
          { text: 'Un repas isolé ne détermine pas tes résultats. C’est la répétition de tes habitudes sur plusieurs semaines qui compte. Profite de ton repas puis retrouve simplement tes repères habituels.' },

          { text: '<strong><u>14. Pourquoi mon poids augmente-t-il après un gros repas ?</u></strong>' },
          { text: 'Une augmentation rapide sur la balance n’est pas nécessairement du gras. Un repas riche en glucides ou en sel peut notamment augmenter temporairement ton glycogène, ton eau corporelle et le contenu de ton système digestif.' },

          { text: '<strong><u>15. Puis-je reprendre une deuxième assiette ?</u></strong>' },
          { text: 'Oui si tu as réellement faim, mais prends quelques minutes avant de te resservir. Commence par privilégier les protéines et les légumes plutôt que de reprendre automatiquement une assiette identique.' },

          { text: '<strong><u>16. Comment savoir si mon assiette respecte F.A.C.I.L.E. ?</u></strong>' },
          { text: 'Utilise d’abord tes repères avec la main. Tu peux également photographier ton assiette dans ton espace F.A.C.I.L.E. afin d’obtenir une estimation et une analyse adaptée à ton protocole.' },

          { text: '<strong><u>17. L’analyse d’une photo peut-elle connaître exactement les calories de mon repas ?</u></strong>' },
          { text: 'Non. Une photo permet seulement une estimation. L’IA ne peut pas toujours connaître la quantité exacte d’huile, de sauce ou les ingrédients cachés dans une préparation.' },

          { text: '<strong><u>18. Comment rendre l’analyse de mon assiette plus précise ?</u></strong>' },
          { text: 'Prends une photo claire avec toute ton assiette visible. Si tu connais certaines quantités, indique-les. Par exemple : « 150 g de poulet, 180 g de riz et 10 g d’huile d’olive ». L’estimation pourra être affinée.' },

          { text: '<strong><u>19. Que faire si mes résultats stagnent ?</u></strong>' },
          { text: 'Ne modifie pas ton alimentation après deux ou trois jours. Observe d’abord ta progression sur plusieurs semaines. Si la stagnation se confirme, ton protocole pourra être ajusté progressivement selon tes résultats.' },

          { text: '<strong><u>20. Est-ce que je devrai suivre F.A.C.I.L.E. toute ma vie ?</u></strong>' },
          { text: 'L’objectif est surtout que tu développes progressivement ton autonomie alimentaire. À force d’utiliser les mêmes repères, tu apprendras à reconnaître naturellement les portions qui correspondent à tes besoins, même au restaurant, en famille ou en voyage.' },
        ],
      },
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
          { image: 'images/intro-veste-lestee.jpg' },
          { text: '<strong><u>Veste lestée</u></strong>' },
          { text: "Lorsque ton poids du corps devient trop facile, la veste lestée te permet de continuer à progresser sans changer complètement tes exercices. Tu peux l'utiliser notamment sur les pompes, squats, fentes ou tractions." },
          { image: 'images/intro-barres-dips.jpg' },
          { text: '<strong><u>Barres de dips</u></strong>' },
          { text: 'Elles te permettent de réaliser les dips à la maison dans de bonnes conditions et de travailler principalement les pectoraux et les triceps. Elles pourront aussi être utilisées pour différents exercices au poids du corps.' },
          { text: "Tu n'es pas obligé de tout acheter dès le début. Ton matériel évoluera avec ton niveau et les besoins de ton programme." },
        ],
      },
      { titre: 'Le Shop Rijal Fit', videoId: null, texte: 'Texte à venir.' },
      { titre: 'F.A.Q Fitness', videoId: null, texte: 'Texte à venir.' },
      { titre: 'Les livres conseillés', videoId: null, texte: 'Texte à venir.' },
      { titre: 'Conditions générales de vente', videoId: null, texte: 'Texte à venir.' },
      { titre: 'S.A.V', videoId: null, texte: 'Texte à venir.' },
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
