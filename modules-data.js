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

// Plans nutrition Rijal Fit : 93 PDF (pdf/plans-nutrition/<categorie>/<orientation>/...).
// Générés depuis la base centrale (voir dossier PLANS NUTRITION RIJAL FIT/_SOURCE).
function rfPlanBlocks(orient, orientLabel, levels) {
  var cats = [['classique', 'Classique', 'CLASSIQUE'], ['sans-gluten', 'Sans-gluten', 'SANS GLUTEN'], ['vegan', 'Vegan', 'VEGAN']];
  var blocks = [{ text: '<strong><u>Plans ' + orientLabel + '</u></strong>' },
    { text: 'Choisis ton type d’alimentation, puis le plan qui correspond à tes calories. Chaque PDF contient la liste de courses, les 7 jours de repas avec les grammages et les repères F.A.C.I.L.E., et les calories et macros de chaque repas.' }];
  cats.forEach(function (c, i) {
    var btns = levels.map(function (k) {
      return '<a class="btn btn--primary recette-pdf-btn" href="pdf/plans-nutrition/' + c[0] + '/' + orient + '/Rijal-Fit_' + c[1] + '_' + ({ 'seche': 'Seche', 'perte-de-masse-grasse': 'Perte-de-masse-grasse', 'prise-de-muscle': 'Prise-de-muscle', 'maintenance': 'Maintenance', 'energie-vitalite': 'Energie-Vitalite' })[orient] + '_' + k + '-kcal.pdf" target="_blank" rel="noopener">📄 ' + k + ' kcal</a>';
    }).join('');
    blocks.push({ text: (i > 0 ? '<hr class="plan-sep">' : '') + '<strong class="plan-cat-title">' + c[2] + '</strong><div class="plan-grid">' + btns + '</div>' });
  });
  return blocks;
}

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
          { text: '<div class="recette-actions"><a class="btn btn--primary recette-pdf-btn" href="pdf/recettes/rijal-fit-boost-testosterone.pdf" target="_blank" rel="noopener">📄 Le carnet de recettes</a><a class="btn btn--primary recette-pdf-btn" href="pdf/recettes/liste-courses-testo.pdf" target="_blank" rel="noopener">🛒 La liste de courses</a></div>' },
        ],
      },
      {
        titre: 'F.A.Q Nutri-Forme',
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
        titre: 'Ta formule RIJAL',
        videoId: null,
        blocks: [
          { text: '<strong><u>Ta formule RIJAL — L’accompagnement en autonomie</u></strong>' },
          { text: 'Avec la formule RIJAL, tes 3 premiers mois de Programme (les 90 premiers jours) sont débloqués directement, dès le premier jour — pas de déblocage au compte-gouttes comme sur les autres formules.' },
          { text: 'Tu avances à ton propre rythme, sans attendre. C’est une formule pensée pour un homme autonome, capable de se structurer seul avec un accompagnement plus léger.' },
          { text: 'Une fois les 90 jours terminés, si tu veux continuer ta progression (Jour 91 à Jour 730) avec un accompagnement suivi, tu pourras poursuivre au tarif de 200€/mois — sur simple demande, sans engagement automatique.' },
          { text: 'À toi de voir jusqu’où tu veux aller seul, et quand tu veux qu’on continue ensemble.' },
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
      {
        titre: 'Rijal Shop',
        videoId: null,
        blocks: [
          { text: '<strong><u>Rijal Shop</u></strong>' },

          { text: '<strong><u>Matériel sport</u></strong>' },
          { text:
            '<div class="shop-grid">' +
            '<div class="shop-item"><img src="images/shop-kit-halteres.png" alt="Kit haltères Rijal Fit" loading="lazy"><p class="shop-item__name">Kit haltères Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-barre-tractions.png" alt="Barre de tractions Rijal Fit" loading="lazy"><p class="shop-item__name">Barre de tractions Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-chaise-romaine.png" alt="Chaise romaine Rijal Fit" loading="lazy"><p class="shop-item__name">Chaise romaine Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-veste-lestee.png" alt="Veste lestée Rijal Fit" loading="lazy"><p class="shop-item__name">Veste lestée Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-chevilliere.png" alt="Chevillère Rijal Fit" loading="lazy"><p class="shop-item__name">Chevillère Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-tapis.png" alt="Tapis Rijal Fit" loading="lazy"><p class="shop-item__name">Tapis Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-serviette.png" alt="Serviette Rijal Fit" loading="lazy"><p class="shop-item__name">Serviette Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-shaker.png" alt="Shaker Rijal Fit" loading="lazy"><p class="shop-item__name">Shaker Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '</div>'
          },
          { text: '<hr class="shop-divider">' },
          { text: '<strong><u>Accessoires</u></strong>' },
          { text:
            '<div class="shop-grid">' +
            '<div class="shop-item"><img src="images/shop-balance-impedancemetre.png" alt="Balance impédancemètre Rijal Fit" loading="lazy"><p class="shop-item__name">Balance impédancemètre Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-montre-connectee.png" alt="Montre connectée Rijal Fit" loading="lazy"><p class="shop-item__name">Montre connectée<br>Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-ruban-metre.png" alt="Ruban mètre couture Rijal Fit" loading="lazy"><p class="shop-item__name">Ruban mètre couture<br>Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-poster.png" alt="Poster Rijal Fit" loading="lazy"><p class="shop-item__name">Poster Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-sac-sport.png" alt="Sac de sport Rijal Fit" loading="lazy"><p class="shop-item__name">Sac de sport Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-sac-a-dos.png" alt="Sac à dos Rijal Fit" loading="lazy"><p class="shop-item__name">Sac à dos Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '</div>'
          },
          { text: '<hr class="shop-divider">' },
          { text: '<strong><u>Vêtements</u></strong>' },
          { text:
            '<div class="shop-grid shop-grid--2col">' +
            '<div class="shop-item"><img src="images/shop-tshirt.png" alt="T-shirt Rijal Fit" loading="lazy"><p class="shop-item__name">T-shirt Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-debardeur.png" alt="Débardeur Rijal Fit" loading="lazy"><p class="shop-item__name">Débardeur Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '</div>'
          },
          { text:
            '<div class="shop-grid shop-grid--3col">' +
            '<div class="shop-item"><img src="images/shop-jogging-simple.png" alt="Jogging simple Rijal Fit" loading="lazy"><p class="shop-item__name">Jogging simple Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-jogging-allonge.png" alt="Jogging allongé Rijal Fit" loading="lazy"><p class="shop-item__name">Jogging allongé Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-sarwel-allonge.png" alt="Sarwel allongé Rijal Fit" loading="lazy"><p class="shop-item__name">Sarwel allongé Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '</div>'
          },
          { text: '<hr class="shop-divider">' },
          { text: '<strong><u>Soins pour homme</u></strong>' },
          { text:
            '<div class="shop-grid">' +
            '<div class="shop-item"><img src="images/shop-boite-soin.png" alt="Boîte soin homme Rijal Fit" loading="lazy"><p class="shop-item__name">Boîte soin homme Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-soin-visage.png" alt="Soin visage homme Rijal Fit" loading="lazy"><p class="shop-item__name">Soin visage homme Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-baume-barbe.png" alt="Baume à barbe Rijal Fit" loading="lazy"><p class="shop-item__name">Baume à barbe Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-brosse-barbe.png" alt="Brosse à barbe Rijal Fit" loading="lazy"><p class="shop-item__name">Brosse à barbe Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '<div class="shop-item"><img src="images/shop-parfum-mekka.png" alt="Parfum Mekka Rijal Fit" loading="lazy"><p class="shop-item__name">Parfum Mekka Rijal Fit</p><p class="shop-item__status">Non disponible</p><button type="button" class="btn btn--primary" disabled>Acheter</button></div>' +
            '</div>'
          },
        ],
      },
      {
        titre: 'F.A.Q Dépasse-Forme',
        videoId: null,
        blocks: [
          { image: 'images/intro-faq-depasse-forme.png' },
          { text: '<strong><u>FAQ — Dépasse-Forme</u></strong>' },

          { text: '<strong><u>1. Je dois choisir entre le programme salle et le programme maison ?</u></strong>' },
          { text: 'Non. Tu peux faire uniquement la salle, uniquement la maison ou combiner les deux. Les programmes avancent avec la même logique, phase par phase.' },

          { text: '<strong><u>2. Est-ce que le programme maison est moins efficace que la salle ?</u></strong>' },
          { text: 'Pas forcément. Pour perdre du gras, retrouver la forme et développer tes muscles, tu peux obtenir d’excellents résultats à la maison. La salle devient surtout intéressante pour aller plus loin dans la progression des charges et de la force.' },

          { text: '<strong><u>3. Puis-je faire une séance salle et une séance maison dans la même semaine ?</u></strong>' },
          { text: 'Oui. Reste simplement dans la même phase du programme. Ton coach pourra t’indiquer quelles séances associer pour éviter de faire trop de volume.' },

          { text: '<strong><u>4. Je pars en vacances et je n’ai plus accès à ma salle, que faire ?</u></strong>' },
          { text: 'Continue avec la version maison correspondant à ta phase. Tu n’as pas besoin d’arrêter ta progression simplement parce que ton environnement change.' },

          { text: '<strong><u>5. De quel matériel ai-je besoin à la maison ?</u></strong>' },
          { text: 'Tu peux progressivement t’équiper d’un kit d’haltères, d’une barre de traction ou chaise romaine, d’une veste lestée et de barres de dips. Tu n’as pas besoin de tout acheter immédiatement.' },

          { text: '<strong><u>6. Je n’ai pas le matériel demandé pour un exercice, que faire ?</u></strong>' },
          { text: 'Ne saute pas automatiquement l’exercice. Contacte ton coach afin qu’il te propose une variante adaptée avec le matériel dont tu disposes.' },

          { text: '<strong><u>7. Comment choisir ma charge ?</u></strong>' },
          { text: 'Respecte les indications de ta phase et privilégie toujours une charge avec laquelle tu peux réaliser toutes les répétitions demandées avec une exécution propre. La charge ne doit jamais détruire ton mouvement.' },

          { text: '<strong><u>8. Comment savoir quand augmenter ma charge ?</u></strong>' },
          { text: 'Lorsque tu maîtrises les répétitions demandées avec une bonne amplitude et un mouvement contrôlé, tu peux appliquer la méthode de progression prévue dans ta phase. Ne cherche pas à augmenter pour simplement soulever plus lourd.' },

          { text: '<strong><u>9. Pourquoi mes charges changent-elles selon les phases ?</u></strong>' },
          { text: 'Parce que chaque phase possède un objectif différent. Certaines développent la technique, d’autres le contrôle, la surcharge progressive, la force, l’endurance musculaire ou mettent l’accent sur un groupe musculaire particulier.' },

          { text: '<strong><u>10. Pourquoi dois-je connaître mon 1RM ?</u></strong>' },
          { text: 'À partir d’un certain niveau, ton 1RM permet de déterminer plus précisément certaines charges de travail. Tu peux le tester avec le protocole prévu ou utiliser le calculateur pour obtenir une estimation sans forcément réaliser une répétition maximale.' },

          { text: '<strong><u>11. Est-ce que je dois aller jusqu’à l’échec à chaque série ?</u></strong>' },
          { text: 'Non. L’échec n’est pas l’objectif permanent du programme. Lorsqu’un maximum de répétitions est demandé, cela sera clairement indiqué dans ta séance.' },

          { text: '<strong><u>12. Je ne sens pas le muscle que je suis censé travailler, est-ce normal ?</u></strong>' },
          { text: 'Cela peut arriver. Avant d’ajouter du poids, vérifie ton placement, ton amplitude et ton contrôle. Filme ton mouvement et transmets-le à ton coach si nécessaire.' },

          { text: '<strong><u>13. Je n’arrive plus à respecter mon tempo, que faire ?</u></strong>' },
          { text: 'Réduis ta charge. Si la charge t’oblige à accélérer, raccourcir ton amplitude ou tricher, elle est probablement trop importante pour le travail demandé.' },

          { text: '<strong><u>14. Quelle différence entre une douleur musculaire et une douleur anormale ?</u></strong>' },
          { text: 'Une sensation d’effort, de brûlure ou des courbatures peuvent accompagner l’entraînement. En revanche, une douleur vive, inhabituelle ou articulaire ne doit pas être ignorée. Arrête l’exercice concerné et informe ton coach ; si nécessaire, consulte un professionnel de santé.' },

          { text: '<strong><u>15. J’ai encore des courbatures, dois-je quand même m’entraîner ?</u></strong>' },
          { text: 'Des courbatures légères n’empêchent pas forcément de s’entraîner. Si elles sont importantes, limitent tes mouvements ou s’accompagnent d’une forte fatigue, préviens ton coach afin d’adapter la séance.' },

          { text: '<strong><u>16. J’ai raté une séance, dois-je la rattraper ?</u></strong>' },
          { text: 'Pas obligatoirement. Ne double pas tes séances simplement pour « rattraper ». Reprends ton organisation normalement ou demande à ton coach comment réorganiser ta semaine.' },

          { text: '<strong><u>17. Pourquoi certaines phases comportent-elles une semaine de deload ?</u></strong>' },
          { text: 'Le deload réduit volontairement la difficulté après plusieurs semaines de progression. Il permet de diminuer la fatigue accumulée avant de repartir sur un nouveau cycle de travail.' },

          { text: '<strong><u>18. Pourquoi le programme change-t-il toutes les plusieurs semaines ?</u></strong>' },
          { text: 'Parce que tu progresses. Le programme évolue avec toi : apprentissage des mouvements, contrôle, progression des charges, travail musculaire ciblé puis méthodes plus avancées. Chaque phase prépare la suivante.' },

          { text: '<strong><u>19. Dois-je faire plus de séances pour avoir des résultats plus rapidement ?</u></strong>' },
          { text: 'Non. Faire plus n’est pas automatiquement faire mieux. Respecte le nombre de séances prévu et les recommandations de ton coach. Ta récupération fait partie de ton programme.' },

          { text: '<strong><u>20. Quelle est la règle la plus importante pendant tout mon parcours ?</u></strong>' },
          { text: 'Ne cherche pas à impressionner avec tes charges. Maîtrise d’abord, progresse ensuite. Ton objectif n’est pas de réussir une séance spectaculaire, mais de construire un corps plus fort et fonctionnel grâce à des mois de régularité.' },
        ],
      },
      {
        titre: 'Les livres conseillés',
        videoId: null,
        blocks: [
          { text: '<strong><u>Les livres conseillés</u></strong>' },
          { text: 'Une sélection d’ouvrages pour aller plus loin, classés par module.' },

          { text: '<strong><u>Motive-Forme</u></strong>' },
          { text:
            '<div class="shop-grid shop-grid--3col">' +
            '<div class="shop-item"><img src="images/livre-vivre-plus-longtemps.jpg" alt="Comment vivre plus longtemps" loading="lazy"><p class="shop-item__name">Comment vivre plus longtemps</p><p class="shop-item__meta">Muhammad Al-Nu’aym — éd. Al-Hadith</p><a class="btn btn--primary" href="https://hadithshop.com/editions-al-hadith/93-comment-vivre-plus-longtemps-muhammad-al-nu-aym-editions-al-hadith-9782875450289.html" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '<div class="shop-item"><img src="images/livre-esprit-de-lame.jpg" alt="L’esprit de l’âme" loading="lazy"><p class="shop-item__name">L’esprit de l’âme</p><p class="shop-item__meta">Al-Ghazali, Ibn al-Jawzi, Ibn Qudamah — éd. Tawbah</p><a class="btn btn--primary" href="https://hadithshop.com/editions-tawbah/356-l-esprit-de-l-ame-al-ghazali-ibn-al-jawzi-ibn-qudamah-editions-tawbah-9782916457314.html" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '<div class="shop-item"><img src="images/livre-talbis-iblis.jpg" alt="Talbis Iblis — Les ruses de Satan" loading="lazy"><p class="shop-item__name">Talbis Iblis — Les ruses de Satan</p><p class="shop-item__meta">Ibn al-Jawzi — éd. Sabil</p><a class="btn btn--primary" href="https://hadithshop.com/editions-sabil/668-talbis-iblis-les-ruses-de-satan-ibn-al-jawzi-sabil.html" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '<div class="shop-item"><img src="images/livre-sira-jeunes.jpg" alt="La Sîra du Prophète expliquée aux jeunes" loading="lazy"><p class="shop-item__name">La Sîra du Prophète expliquée aux jeunes</p><p class="shop-item__meta">Sofiane Meziani — éd. Maison d’Ennour</p><a class="btn btn--primary" href="https://hadithshop.com/le-prophete-sira/379-la-sira-du-prophete-expliquee-aux-jeunes-sofiane-meziani-maison-d-ennour-9782752400628.html" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '</div>'
          },

          { text: '<strong><u>Hygiène-Forme</u></strong>' },
          { text:
            '<div class="shop-grid shop-grid--3col">' +
            '<div class="shop-item"><img src="images/livre-medecine-prophetique.jpg" alt="L’authentique de la médecine prophétique" loading="lazy"><p class="shop-item__name">L’authentique de la médecine prophétique</p><p class="shop-item__meta">Ibn al-Qayyim — éd. Tawbah</p><a class="btn btn--primary" href="https://hadithshop.com/editions-tawbah/366-l-authentique-de-la-medecine-prophetique-ibn-al-qayyim-editions-tawbah-9782916457246.html" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '</div>'
          },

          { text: '<strong><u>Nutri-Forme</u></strong>' },
          { text:
            '<div class="shop-grid shop-grid--3col">' +
            '<div class="shop-item"><img src="images/livre-nutrition-islam.jpg" alt="La nutrition en Islam" loading="lazy"><p class="shop-item__name">La nutrition en Islam</p><p class="shop-item__meta">Doumbia, Oulhadj, Younes — éd. Maison d’Ennour</p><a class="btn btn--primary" href="https://www.la-librairie-musulmane.com/produit/la-nutrition-en-islam/" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '<div class="shop-item"><img src="images/livre-maigrir-islam.jpg" alt="Maigrir avec l’Islam" loading="lazy"><p class="shop-item__name">Maigrir avec l’Islam</p><p class="shop-item__meta">Tariq Mogahed</p><a class="btn btn--primary" href="https://www.amazon.fr/Maigrir-avec-lIslam-Physique-Spirituelle/dp/B0CCCNLVQC" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '</div>'
          },

          { text: '<strong><u>Dépasse-Forme</u></strong>' },
          { text:
            '<div class="shop-grid shop-grid--3col">' +
            '<div class="shop-item"><img src="images/livre-guide-mouvements-musculation.jpg" alt="Guide des mouvements de musculation" loading="lazy"><p class="shop-item__name">Guide des mouvements de musculation</p><p class="shop-item__meta">Frédéric Delavier — éd. Vigot</p><a class="btn btn--primary" href="https://www.amazon.fr/Guide-mouvements-musculation-Fr%C3%A9d%C3%A9ric-Delavier/dp/2711424103" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '<div class="shop-item"><img src="images/livre-methode-delavier-tome3.jpg" alt="La méthode Delavier de musculation — Tome 3" loading="lazy"><p class="shop-item__name">La méthode Delavier de musculation — Tome 3</p><p class="shop-item__meta">Delavier, Gundill — éd. Vigot</p><a class="btn btn--primary" href="https://www.cultura.com/p-la-methode-delavier-de-musculation-t-3-9782711425143.html" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '<div class="shop-item"><img src="images/livre-musculation-au-naturel.jpg" alt="Le guide de la musculation au naturel" loading="lazy"><p class="shop-item__name">Le guide de la musculation au naturel</p><p class="shop-item__meta">Coia, Venesson — Thierry Souccar Éd.</p><a class="btn btn--primary" href="https://thierrysouccar.com/products/le-guide-de-la-musculation-au-naturel-julien-venesson" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '<div class="shop-item"><img src="images/livre-abdos-gainage.jpg" alt="Abdos — Musculation et gainage" loading="lazy"><p class="shop-item__name">Abdos — Musculation et gainage</p><p class="shop-item__meta">Delavier, Gundill — éd. Vigot</p><a class="btn btn--primary" href="https://www.cultura.com/p-abdos-musculation-et-gainage-9782711422333.html" target="_blank" rel="noopener">🛒 Acheter</a></div>' +
            '</div>'
          },
        ],
      },
      {
        titre: 'Conditions générales de vente',
        videoId: null,
        blocks: [
          { text: '<strong><u>RIJAL FIT — CONDITIONS GÉNÉRALES DE VENTE</u></strong>' },
          { text: 'Coaching sportif, nutritionnel et accompagnement numérique.' },
          { text: 'Exploitant : Matthieu Tarley — Rijal Fit<br>Statut : Micro-entreprise<br>SIRET : 892 935 891 00010<br>Adresse professionnelle : 37 rue Saint Savournin, 13005 Marseille<br>E-mail : muslimserinityforme@gmail.com<br>Version du 13 septembre 2026' },

          { text: '<strong><u>1. Objet et champ d’application</u></strong>' },
          { text: 'Les présentes Conditions Générales de Vente (« CGV ») régissent les ventes des prestations proposées sous le nom commercial Rijal Fit par Matthieu Tarley (« le Prestataire ») à des clients consommateurs (« le Client »).' },
          { text: 'Rijal Fit propose des accompagnements à distance portant notamment sur l’activité physique, la remise en forme, la perte de poids, l’éducation nutritionnelle, l’hygiène de vie et l’utilisation d’outils numériques d’accompagnement. Toute commande implique l’acceptation pleine et entière des présentes CGV dans leur version communiquée au Client avant la conclusion du contrat.' },

          { text: '<strong><u>2. Nature des prestations</u></strong>' },
          { text: 'Selon la formule souscrite, l’accompagnement peut comprendre : des vidéos et contenus pédagogiques, des documents PDF, un programme sportif personnalisé, un accompagnement nutritionnel à visée éducative, des échanges via Telegram, des appels téléphoniques ou en visioconférence, des ajustements personnalisés, des outils numériques et/ou utilisant l’intelligence artificielle, l’accès à un espace membre et l’accès à une communauté.' },
          { text: 'Le suivi humain est proposé cinq jours sur sept, dans une amplitude indicative pouvant aller jusqu’à dix heures par jour. Cette disponibilité ne constitue pas un service d’urgence ni une obligation de réponse immédiate. Les modalités pratiques et horaires peuvent être précisées dans l’offre ou lors de l’entrée en accompagnement.' },
          { text: 'Les prestations Rijal Fit ne constituent pas un diagnostic médical, un traitement médical, une consultation médicale ni un suivi diététique médical. En présence d’une pathologie, d’un traitement, d’une douleur inhabituelle, d’une grossesse, d’une contre-indication ou de toute situation nécessitant un avis médical, le Client doit consulter un professionnel de santé compétent avant ou pendant la pratique.' },

          { text: '<strong><u>3. Formules, prix et durée</u></strong>' },
          { text: 'L’accompagnement initial est conclu pour une durée minimale de trois (3) mois.' },
          { text: 'À la date de rédaction des présentes CGV, les principales formules sont proposées au prix total de 980 € TTC ou 1 980 € TTC pour trois mois, selon la formule choisie. Le contenu précis de la formule et son prix sont communiqués au Client avant la commande et figurent sur le bon de commande, le devis, la facture ou tout autre support durable remis au Client.' },
          { text: 'À l’issue des trois mois, le Client peut demander la poursuite de l’accompagnement au tarif indicatif de 200 € TTC par mois. Cette poursuite n’est jamais automatique : elle suppose une demande ou un accord exprès du Client. Il n’existe donc pas de reconduction tacite de l’accompagnement mensuel.' },

          { text: '<strong><u>4. Commande et formation du contrat</u></strong>' },
          { text: 'La commande peut être conclue à distance, notamment à la suite d’un échange téléphonique, d’une visioconférence, d’une messagerie ou de tout autre moyen convenu entre les parties.' },
          { text: 'Avant la conclusion du contrat, le Client reçoit les informations essentielles relatives à la prestation, à sa durée, à son prix, aux modalités de paiement et, lorsque la loi l’exige, à son droit de rétractation.' },
          { text: 'La commande devient ferme après acceptation de l’offre ou du devis, acceptation des présentes CGV et validation du paiement ou de l’échéancier convenu. Une confirmation de commande ou une facture est adressée au Client sur un support durable.' },

          { text: '<strong><u>5. Modalités de paiement</u></strong>' },
          { text: 'Le prix peut être réglé en une (1), deux (2), trois (3) ou quatre (4) échéances lorsque cette possibilité est proposée au moment de la commande.' },
          { text: 'Le paiement fractionné constitue une facilité de paiement et non un abonnement mensuel résiliable à tout moment. Sauf exercice valable d’un droit légal de rétractation ou accord écrit contraire, le Client reste redevable du prix total de la formule souscrite.' },
          { text: 'En cas d’échec d’une échéance, le Client s’engage à régulariser sa situation dans les meilleurs délais. Après relance restée sans effet, le Prestataire peut suspendre l’accès aux prestations personnalisées jusqu’à régularisation, sans préjudice des droits impératifs du consommateur.' },

          { text: '<strong><u>6. Démarrage et exécution de l’accompagnement</u></strong>' },
          { text: 'L’accompagnement débute à la date convenue entre les parties ou, à défaut, lors de l’ouverture effective des accès et du démarrage des premières prestations.' },
          { text: 'Le Client s’engage à fournir des informations exactes et suffisamment complètes pour permettre la personnalisation du programme, à signaler toute contre-indication connue et à adopter une pratique adaptée à ses capacités.' },
          { text: 'Le Prestataire est tenu à une obligation de moyens : il met en œuvre les moyens convenus pour accompagner le Client, mais ne garantit pas une perte de poids déterminée, une transformation physique précise ni un résultat chiffré. Les résultats dépendent notamment de la situation individuelle, de l’assiduité, de l’alimentation, de l’activité, du sommeil, de la santé et du respect des recommandations.' },

          { text: '<strong><u>7. Accès à l’espace membre et accès à vie</u></strong>' },
          { text: 'Pendant l’accompagnement, le Client bénéficie de l’accès aux contenus correspondant à sa formule et aux modules débloqués.' },
          { text: 'À l’issue de l’accompagnement initial, les modules et contenus déjà débloqués sont annoncés comme accessibles à vie au Client, sous réserve du maintien raisonnable de la plateforme et des contraintes techniques, légales ou liées aux prestataires numériques. La notion « à vie » désigne ici un accès sans échéance contractuelle fixe aux contenus débloqués ; elle ne garantit pas le maintien éternel d’un logiciel, d’un hébergeur ou d’une technologie déterminée.' },
          { text: 'Le suivi personnalisé, les réponses cinq jours sur sept, les appels, les ajustements et les services communautaires actifs ne sont pas compris dans cet accès à vie après la fin de la période payée, sauf nouvelle souscription ou indication expresse contraire dans l’offre.' },

          { text: '<strong><u>8. Droit de rétractation</u></strong>' },
          { text: 'Pour un contrat conclu à distance avec un consommateur, le Client dispose en principe d’un délai légal de quatorze (14) jours à compter de la conclusion du contrat pour exercer son droit de rétractation, conformément au Code de la consommation.' },
          { text: 'Si le Client demande expressément que la prestation de services commence avant la fin de ce délai, l’exécution peut débuter. En cas de rétractation avant l’exécution complète du service, le Client peut être redevable d’un montant proportionnel aux prestations effectivement fournies, lorsque les conditions légales sont réunies.' },
          { text: 'Pour les contenus numériques fournis sans support matériel, la perte du droit de rétractation avant l’expiration des quatorze jours n’est possible que dans les conditions prévues par la loi, notamment après consentement exprès du Client au commencement immédiat de l’exécution et reconnaissance expresse de la perte de son droit de rétractation, avec confirmation de cet accord sur un support durable.' },
          { text: 'Le Prestataire ne considère donc pas le simple accès à une vidéo ou à l’espace membre comme supprimant automatiquement tout droit de rétractation.' },
          { text: 'Pour exercer son droit, le Client peut envoyer avant l’expiration du délai une déclaration dénuée d’ambiguïté à : muslimserinityforme@gmail.com. Un modèle de formulaire figure en annexe.' },

          { text: '<strong><u>9. Absence de garantie commerciale « satisfait ou remboursé »</u></strong>' },
          { text: 'Rijal Fit ne propose pas de garantie commerciale « satisfait ou remboursé » ou de garantie de résultat, sauf mention écrite exceptionnelle figurant expressément dans l’offre souscrite.' },
          { text: 'Cette absence de garantie commerciale ne prive pas le Client des garanties et droits impératifs qui lui sont reconnus par la loi.' },

          { text: '<strong><u>10. Report, rendez-vous et disponibilité du Client</u></strong>' },
          { text: 'Les appels et rendez-vous sont organisés selon les disponibilités convenues. En cas d’empêchement, le Client est invité à prévenir le Prestataire le plus tôt possible.' },
          { text: 'Un rendez-vous manqué ou annulé tardivement peut être reprogrammé selon les disponibilités du Prestataire. Les absences répétées du Client, son défaut de réponse ou son manque d’assiduité n’entraînent pas automatiquement le remboursement de la prestation.' },

          { text: '<strong><u>11. Intelligence artificielle et outils numériques</u></strong>' },
          { text: 'Certains outils mis à disposition peuvent intégrer des fonctionnalités d’intelligence artificielle. Ces outils ont une finalité pédagogique, organisationnelle ou d’aide à la personnalisation. Leurs réponses peuvent comporter des erreurs et ne doivent pas être utilisées comme un diagnostic médical ou comme le remplacement d’un professionnel de santé.' },
          { text: 'Le Client demeure responsable des informations qu’il saisit dans les outils tiers. Il est invité à ne pas y transmettre de données de santé ou informations sensibles qui ne seraient pas nécessaires au service.' },

          { text: '<strong><u>12. Propriété intellectuelle</u></strong>' },
          { text: 'Les vidéos, PDF, programmes, méthodes, textes, supports, modèles, outils, contenus pédagogiques et autres ressources Rijal Fit sont protégés par les règles applicables à la propriété intellectuelle.' },
          { text: 'L’achat confère au Client un droit d’utilisation personnel et privé. Sauf autorisation écrite préalable, il est interdit de reproduire, revendre, partager publiquement, mettre à disposition de tiers, enregistrer pour redistribution, modifier à des fins commerciales ou exploiter les contenus Rijal Fit en dehors de l’usage personnel prévu.' },

          { text: '<strong><u>13. Communauté et comportement</u></strong>' },
          { text: 'L’accès à une communauté Rijal Fit est personnel. Le Client s’engage à respecter les autres membres, leur confidentialité et les règles communiquées par le Prestataire.' },
          { text: 'Les propos injurieux, menaçants, discriminatoires, le harcèlement, la diffusion non autorisée d’informations privées ou le partage illicite de contenus peuvent entraîner une exclusion de la communauté, sans remettre en cause les droits impératifs du consommateur ni, à eux seuls, effacer les obligations contractuelles déjà nées.' },

          { text: '<strong><u>14. Données personnelles</u></strong>' },
          { text: 'Les données personnelles collectées sont utilisées dans la mesure nécessaire à la gestion de la relation client, au paiement, à l’exécution et à la personnalisation des prestations, à la communication avec le Client et au respect des obligations légales.' },
          { text: 'Le Client peut exercer les droits qui lui sont reconnus par la réglementation applicable en écrivant à muslimserinityforme@gmail.com. Les données traitées par des services tiers (plateforme membre, paiement, messagerie, visioconférence ou outils numériques) peuvent également être soumises aux politiques de confidentialité de ces prestataires.' },

          { text: '<strong><u>15. Responsabilité</u></strong>' },
          { text: 'Le Prestataire ne saurait être tenu responsable des conséquences résultant d’une utilisation des programmes contraire aux consignes, d’informations importantes non communiquées par le Client, d’une pratique malgré une contre-indication connue ou du recours aux contenus en remplacement d’un suivi médical nécessaire.' },
          { text: 'Aucune clause des présentes CGV ne peut avoir pour effet d’exclure ou de limiter une responsabilité lorsque la loi interdit une telle exclusion ou limitation.' },

          { text: '<strong><u>16. Force majeure</u></strong>' },
          { text: 'Aucune partie ne pourra être tenue responsable d’un manquement directement causé par un événement de force majeure au sens du droit français. L’exécution des obligations affectées est suspendue pendant la durée de l’événement dans les conditions prévues par la loi.' },

          { text: '<strong><u>17. Réclamations et médiation de la consommation</u></strong>' },
          { text: 'En cas de difficulté, le Client est invité à adresser d’abord sa réclamation à Rijal Fit à l’adresse : muslimserinityforme@gmail.com.' },
          { text: 'Après réclamation écrite préalable auprès du Prestataire et en l’absence de solution amiable, le consommateur peut recourir gratuitement au médiateur de la consommation dont relève Rijal Fit. Le Prestataire s’engage à publier sur cette page les coordonnées de ce médiateur dès son inscription effective auprès d’un médiateur agréé.' },

          { text: '<strong><u>18. Droit applicable et règlement des litiges</u></strong>' },
          { text: 'Les présentes CGV sont soumises au droit français.' },
          { text: 'En cas de litige, les parties chercheront prioritairement une solution amiable. Le consommateur conserve le droit de saisir les juridictions compétentes selon les règles impératives applicables. Aucune clause des présentes CGV n’impose au consommateur une juridiction territorialement incompétente au regard des règles protectrices qui lui sont applicables.' },

          { text: '<strong><u>19. Modification des CGV</u></strong>' },
          { text: 'Le Prestataire peut faire évoluer les présentes CGV pour les commandes futures. La version applicable à une commande est celle communiquée et acceptée au moment de sa conclusion. Une modification ultérieure ne modifie pas rétroactivement les conditions d’une commande déjà conclue, sauf accord des parties ou exigence légale.' },

          { text: '<strong><u>ANNEXE — Modèle de formulaire de rétractation</u></strong>' },
          { text: 'À compléter et envoyer uniquement si vous souhaitez vous rétracter du contrat dans les conditions prévues par la loi.' },
          { text: 'À l’attention de :<br>Rijal Fit — Matthieu Tarley<br>Adresse : 37 rue Saint Savournin, 13005 Marseille<br>E-mail : muslimserinityforme@gmail.com' },
          { text: 'Je vous notifie par la présente ma rétractation du contrat portant sur la prestation suivante :<br><br>Prestation / formule : ……………………………………………<br>Commande conclue le : ……………………………………………<br>Nom du consommateur : ……………………………………………<br>Adresse du consommateur : ……………………………………………<br><br>Date : ……………………………<br>Signature du consommateur (uniquement en cas d’envoi papier) : ……………………………' },

          { text: 'RIJAL FIT — Matthieu Tarley — SIRET 892 935 891 00010 — muslimserinityforme@gmail.com' },
        ],
      },
      {
        titre: 'S.A.V',
        videoId: null,
        blocks: [
          { text: '<strong><u>Afin d’obtenir une réponse administrative rapide, voici la méthode à suivre :</u></strong>' },
          { text: '1. Clique sur le lien suivant : <a class="btn btn--primary" href="mailto:muslimserinityforme@gmail.com">✉️ Contacter le S.A.V</a>' },
          { text: 'Cette action est à mettre en pratique dès lors que tu rencontres un problème nécessitant l’intervention du service administratif ou technique :' },
          { text: '• Mail non reçu<br>• Erreur de facturation ou de prélèvement<br>• Demande de résiliation<br>• Etc.' },
          { text: 'Il s’agit du moyen le plus rapide pour obtenir satisfaction à ta demande. Il n’y aura aucun intermédiaire entre toi et la résolution de ton problème.' },
          { text: 'Ne passe pas par le groupe Telegram : aucune personne ne serait en mesure de résoudre ton souci à cet endroit.' },
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
      {
        titre: 'Niveau 1',
        videoId: null,
        sousNiveaux: [
          {
            titre: 'C’est quoi Motive Forme ?',
            blocks: [
              { text: 'Que tu sois là pour perdre du gras, prendre du muscle ou simplement retrouver de l’énergie, une chose ne change pas : ta transformation physique n’est jamais à côté de ta foi. Elle en fait partie.' },
              { text: 'Ce n’est pas : tu progresses physiquement, et en plus tu te rapproches d’Allah. C’est cette transformation qui devient la façon dont tu te rapproches de Lui.' },
              { text: 'Chaque effort que tu fais aujourd’hui pour ton corps, perdre du gras, gagner en force, retrouver de l’énergie, c’est prendre soin de ta amānah, le dépôt qu’Allah t’a confié.' },
              { text: 'Tu ne cherches pas à devenir un homme au mental d’acier. Tu cherches à devenir un mou’min qawi, un croyant fort, capable de tenir, de porter sa famille, de se tenir droit devant Allah.' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/QouRodRMKkU" title="C’est quoi le pilier Motive-Forme ?" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<strong><u>Exercice complémentaire (optionnel)</u></strong>' },
              { text: 'Prends 2 minutes. Écris (sur ton cahier ou ton fichier Word) 3 choses qu’Allah t’a données dans ta vie pour que tu sois l’homme que tu es aujourd’hui.' },
              { text: 'Relis-les à chaque fois que la motivation faiblit. C’est ton ancrage, pas un discours qu’on t’a fait une fois.' },
            ],
          },
          {
            titre: 'Ouverture niveau 1',
            blocks: [
              { text: 'Salam aleykoum wa rahmatullahi wa barakatuh.' },
              { text: 'Le pilier Motive-Forme, c’est la base de tout ton suivi.' },
              { text: 'Avant même de parler de sport ou de nutrition, on va construire ton mental et ton cœur pour que tes efforts soient solides et durables, le tout aligné avec les valeurs de l’Islam.' },
              { text: 'Dans ce premier niveau, on va travailler sur ta prise de conscience.' },
              { text: 'Aujourd’hui, tu es peut-être dans un état de « je ne sais pas que je ne sais pas » : tu ignores encore les vrais mécanismes profonds qui te freinent dans ta transformation physique.' },
              { text: 'L’intention de ce niveau, in sha Allah, est que tu passes à « je sais que je ne sais pas » : tu auras commencé à identifier clairement les zones à améliorer et compris pourquoi il faut agir maintenant.' },
              { text: 'En clair : tu vas ouvrir les yeux sur tes vrais blocages et trouver une ou deux raisons profondes, ancrées dans ta foi, qui te donneront envie d’avancer sans attendre.' },
              { text: 'Tu passeras de « je sais que je devrais... » à « je ne peux plus attendre pour passer à l’action », avec une motivation ancrée dans tes valeurs et ta foi, prêt à te propulser vers la suite.' },
              { text: 'Fais de ton corps un empire et sois un Muslim en forme.' },
            ],
          },
          {
            titre: 'Bienvenue à toi !',
            blocks: [
              { text: 'Merci d’avoir rejoint Rijal Fit. Ce que tu vas découvrir ici, c’est le fruit de ton choix et de ton engagement, pas un simple cadeau.' },
              { text: 'Un mot sur M-T Coaching Empire, mentionné dans cette vidéo : c’est mon entreprise de coaching sportif, toujours active aujourd’hui. C’est là que j’ai construit toute l’expérience (STAPS, certifications en nutrition, des dizaines de clients accompagnés) que je mets maintenant au service de Rijal Fit.' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/4n4-Jk0uwAc" title="Bienvenue à toi !" allowfullscreen loading="lazy"></iframe></div>' },
            ],
          },
          {
            titre: 'Ton état d’esprit',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/05wGQ1en-vE" title="Pas d’effet YOYO !" allowfullscreen loading="lazy"></iframe></div>' },
              { text: 'Un outil simple pour muscler ton mental sur la durée : tenir un journal de gratitude. Ce PDF t’explique comment t’y mettre, en lien direct avec ce que tu viens de voir dans la vidéo.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme/journal-gratitude.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Ton intention',
            blocks: [
              { text: 'Le Prophète ﷺ nous a appris que les actes ne valent que par leurs intentions, et que chacun reçoit selon ce qu’il a eu en intention.' },
              { text: 'Ce qui va te motiver ici, c’est cette intention-là qui va déterminer ton résultat.' },
              { text: 'Alors avant d’aller plus loin : quelle était ton intention quand tu as choisi de rejoindre Rijal Fit ? Si c’était juste par curiosité, tu en repartiras avec de la curiosité satisfaite. Si c’était pour trouver de vraies réponses à mettre en pratique, c’est ce que tu en retireras.' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/juEJfakH8qk" title="Les actes ne valent que par leurs intentions !" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme/ton-intention.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
              { text: 'Pour t’aider à ancrer cette intention dans la durée, voici un PDF qui reprend l’essentiel : commence chaque effort avec une bonne intention. Garde-le sous la main et relis-le dès que tu as besoin de te reconnecter à ton vrai pourquoi.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme/commence-bonne-intention.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
              { text: '<strong><u>Premier travail (obligatoire)</u></strong>' },
              { text: 'Quelle a été ton intention en t’engageant dans cet accompagnement ? Prends le temps d’y répondre honnêtement, par écrit dans ton cahier ou ton Word, avant de continuer.' },
              { text: '<strong>Important :</strong> chacune de tes réponses doit être centralisée dans un support unique, car on devra toutes les réutiliser pour découvrir ton grand domino.' },
            ],
          },
          {
            titre: 'Ton type de motivation',
            blocks: [
              { text: 'À la fin de ce module, tu verras l’exemple de mon propre livret, pas un simple cadeau, un vrai outil qui t’inspirera pour construire le tien.' },
              { text: 'Question à te poser : si tu pouvais atteindre ton objectif, perdre du gras, prendre du muscle ou retrouver de l’énergie, comment tu te sentirais ? Qu’est-ce que ça changerait dans ta vie sur le plan familial, de ta santé, de ton travail, de tes études et de tes amis ?' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/isP9MoH9mGw" title="Les mécanismes de la motivation & ses bienfaits" allowfullscreen loading="lazy"></iframe></div>' },
              { text: 'Réponds aux questions suivantes (PDF) :' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme/ton-type-de-motivation.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
              { text: '<strong>Important :</strong> chacune de tes réponses doit être centralisée dans un support unique, ton livret (si tu as plus de 5 pages, ce n’est pas grave). Plus tu apporteras des informations et plus facilement on trouvera ton grand domino.' },
              { text: 'Ce PDF « Se rappeler de l’objectif ultime » t’aide à garder en tête pourquoi tu fais tout ça, même les jours où la motivation est plus basse.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme/objectif-ultime.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Les 5 piliers de l’assiduité',
            blocks: [
              { text: 'Dans cette vidéo, Matthieu dit souvent « perte de masse grasse » ou « perdre du poids ». Remplace mentalement par ton propre objectif (perte de gras, prise de muscle ou énergie) à chaque fois que tu l’entends : les 5 piliers s’appliquent pareil.' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/LpIBjY89YQY" title="Les 5 piliers de l’assiduité" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme/5-piliers-assiduite.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },

              { text: '<strong><u>Pilier 1 : Placer ta confiance en Allah</u></strong>' },
              { text: 'Ton objectif physique est une épreuve, comme n’importe quelle autre épreuve de la vie. Face à une épreuve, on se tourne vers Allah : cherche les invocations liées aux épreuves et mets-les en pratique.' },
              { text: 'Comme tu l’as vu dans la vidéo, ce premier pilier passe par les invocations face à l’épreuve. Ce PDF te donne des invocations concrètes pour la force et la persévérance, à mettre en pratique dès aujourd’hui.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme/invocations-force-perseverance.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
              { text: 'Vas-tu mettre en place ce premier pilier ?<br>Réponse : ……………………………………………………………' },

              { text: '<strong><u>Pilier 2 : Ton pourquoi</u></strong>' },
              { text: 'Tout à l’heure, c’était pourquoi tu as décidé de rejoindre Rijal Fit. Maintenant, va plus loin : pourquoi toi, précisément, tu veux atteindre cet objectif ?' },
              { text: 'Quelle est ta motivation ? Quel est l’enjeu derrière ?<br>Réponse : ……………………………………………………………' },

              { text: '<strong><u>Pilier 3 : Tes habitudes</u></strong>' },
              { text: 'Les bonnes habitudes, répétées, deviennent une routine naturelle : comme se brosser les dents, tu ne t’en rends même plus compte.' },
              { text: 'Une habitude simple à installer dès maintenant : se lever tôt. Ce PDF t’explique pourquoi ce petit changement peut transformer ta régularité.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme/se-lever-tot.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
              { text: 'Qu’est-ce que tu vas faire pour améliorer tes habitudes ? Comment vas-tu faire pour que ça devienne régulier ?<br>Réponse : ……………………………………………………………' },

              { text: '<strong><u>Pilier 4 : Ton entourage</u></strong>' },
              { text: 'L’entourage t’entraîne vers le haut ou vers le bas, comme le sportif de haut niveau qui reste athlétique grâce à son équipe, ou qui décline une fois isolé.' },
              { text: 'Quel type d’entourage as-tu aujourd’hui ? T’aide-t-il à avancer ou à reculer ? Qu’est-ce que tu vas faire pour être mieux entouré ?<br>Réponse : ……………………………………………………………' },

              { text: '<strong><u>Pilier 5 : Rendre des comptes</u></strong>' },
              { text: 'Seul dans son coin, la motivation finit toujours par redescendre. Rendre des comptes à quelqu’un, un coach, t’engage à aller au bout.' },
              { text: 'À qui vas-tu rendre des comptes pour rester engagé ?<br>Réponse : ……………………………………………………………' },

              { text: 'Garde cette fiche dans ton livret unique, elle fera partie des réponses utilisées pour découvrir ton grand domino.' },
            ],
          },
          {
            titre: 'Les 5 clés perte de masse grasse',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/REG_orJsO-U" title="Les 5 clés pour perdre ta masse grasse" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme/5-cles-perte-masse-grasse.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },

              { text: '<strong><u>Clé 1 : Arrête de te trouver des excuses</u></strong>' },
              { text: 'Ça fait combien de fois que tu te sors ce genre d’excuse ? Est-ce que ta situation s’améliore avec ce type de pensée ? Pourquoi, selon toi, tu manques de détermination ?<br>Réponse : ……………………………………………………………' },

              { text: '<strong><u>Clé 2 : Fais preuve de détermination (un pourquoi fort)</u></strong>' },
              { text: 'Pourquoi aujourd’hui tu cherches à changer ? Et pourquoi maintenant, plutôt que demain ou dans un mois ?<br>Réponse : ……………………………………………………………' },

              { text: '<strong><u>Clé 3 : Organise-toi</u></strong>' },
              { text: 'Combien de temps te laisses-tu pour atteindre ton objectif ? À combien te sens-tu motivé aujourd’hui, de 1 à 10 ? Qu’est-ce qui t’empêche d’être à 100 % ?<br>Réponse : ……………………………………………………………' },

              { text: '<strong><u>Clé 4 : Améliore tes habitudes</u></strong>' },
              { text: 'Depuis que tu as tes habitudes actuelles, ta situation s’est-elle améliorée ou dégradée ? Ça fait combien de temps que tu répètes le même schéma ?<br>Réponse : ……………………………………………………………' },

              { text: '<strong><u>Clé 5 : Ne reviens pas en arrière</u></strong>' },
              { text: 'Une fois ton objectif atteint, quelle nouvelle habitude ou quel nouvel objectif vas-tu te fixer pour continuer à progresser ?<br>Réponse : ……………………………………………………………' },

              { text: '<strong><u>Bonus, Clé 6 : un programme adapté à ta situation</u></strong>' },
              { text: 'Ton programme actuel est-il vraiment adapté à toi, à ta situation, ou copié d’ailleurs sans être personnalisé ?<br>Réponse : ……………………………………………………………' },

              { text: 'Garde cette fiche dans ton livret unique, elle fera partie des réponses utilisées pour découvrir ton grand domino.' },
            ],
          },
        ],
      },
      {
        titre: 'Niveau 2',
        videoId: null,
        sousNiveaux: [
          {
            titre: 'Ouverture niveau 2',
            blocks: [
              { text: 'Salam aleykoum wa rahmatullahi wa barakatuh.' },
              { text: 'Ce deuxième niveau du pilier Motive-Forme va te faire passer à un stade supérieur : travailler en profondeur sur toi-même pour construire un mental stable, solide et reconnaissant envers Allah.' },
              { text: 'Aujourd’hui, tu es peut-être dans un état de « je sais que je ne sais pas » : tu as conscience de certaines failles ou blocages, mais tu ne sais pas encore comment les dépasser.' },
              { text: 'L’objectif de ce niveau, in sha Allah, est que tu passes à « je sais que je sais » : tu connaîtras tes qualités, tes défauts, tes blocages, et tu sauras comment t’appuyer sur tes forces pour avancer malgré les épreuves.' },
              { text: 'En clair : tu vas apprendre à noter tes bénédictions, à comprendre ce que tes épreuves t’ont enseigné, et à identifier clairement tes points forts et tes points faibles.' },
              { text: 'Tu développeras la gratitude (shukr), la patience (sabr) et l’état d’esprit d’un gagnant capable de garder le cap, peu importe les obstacles.' },
              { text: 'Aujourd’hui, tu laisses parfois tes émotions ou un obstacle te freiner. Après ce niveau, in sha Allah, tu seras ancré dans un état d’esprit fort et stable, capable de rester constant dans l’effort, peu importe les difficultés.' },
              { text: 'Tu passeras de « je tiens seulement quand tout va bien » à « je tiens ferme même dans les tempêtes », avec une force intérieure qui te permettra de persévérer jusqu’au bout, dans le sport comme dans ta religion.' },
              { text: 'Fais de ton corps un empire et sois un Muslim en forme.' },
            ],
          },
          {
            titre: 'Intro niveau 2',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/y3diwD7ojLE" title="Intro niveau 2" allowfullscreen loading="lazy"></iframe></div>' },
            ],
          },
          {
            titre: 'C’est quoi SERINITY ?',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/zXLSK8Hkk9k" title="C’est quoi SERINITY ?" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/serinity-forme.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
              { text: 'Un rappel pour ancrer tout ça : prendre soin de ton corps, c’est prendre soin d’une amānah, un dépôt qu’Allah t’a confié. Ce PDF revient sur cette idée centrale.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/corps-amanah.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Trouve ton hyper objectif',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/Zm3i175bjEw" title="Trouve ton hyper objectif" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/ton-hyper-objectif.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
              { text: 'Un grand objectif peut vite paraître trop loin ou intimidant. Ce PDF t’aide à le fractionner en étapes plus petites et atteignables, pour avancer sans te décourager.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/fractionner-objectifs.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'La méthodologie',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/5tPpqy76Bts" title="La méthodologie" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/methodologie.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
              { text: 'Une habitude simple à intégrer dans ta méthode au quotidien : lire et méditer le Coran chaque jour. Ce PDF t’explique comment t’y mettre concrètement.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/lire-mediter-coran.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Trouve ta sérénité',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/FWjen2NV01w" title="Trouve ta sérénité" allowfullscreen loading="lazy"></iframe></div>' },
              { text: 'Avant de commencer : revivre ces moments d’introspection, c’est un acte de lucidité envers toi-même, pas un tribunal intérieur.' },
              { text: 'Tu n’es pas en train de te juger, tu es en train de comprendre.' },
              { text: 'Fais cet exercice avec la même douceur qu’Allah a envers Ses serviteurs.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/trouve-ta-serenite.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'L’état d’esprit du gagnant',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/F0J9NDUYkNE" title="L’état d’esprit du gagnant" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/etat-esprit-gagnant.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
              { text: 'Un gagnant ne s’entoure pas de n’importe qui. Ce PDF t’aide à faire le point sur les compagnies qui t’élèvent, et celles qui te tirent vers le bas.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/bonnes-compagnies.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Challenge toi',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/hp_k0retLT8" title="Challenge toi" allowfullscreen loading="lazy"></iframe></div>' },
              { text: 'Se challenger, c’est aussi savoir écarter ce qui vient saboter ta motivation sans même que tu t’en rendes compte. Ce PDF t’aide à repérer ces freins invisibles.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/limiter-nuisances-motivation.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Visualise-toi dans 14 semaines',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/57JP5ZKXie0" title="Visualise-toi dans 14 semaines" allowfullscreen loading="lazy"></iframe></div>' },
            ],
          },
          {
            titre: 'Bravo à toi',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/O2tM5ES_8oI" title="Bravo à toi" allowfullscreen loading="lazy"></iframe></div>' },
            ],
          },
          {
            titre: 'Ton Book — L’état d’esprit du gagnant',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/FQcHQ_Gyytk" title="Ton Book — L’état d’esprit du gagnant" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n2/book-etat-esprit-gagnant.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
        ],
      },
      {
        titre: 'Niveau 3',
        videoId: null,
        sousNiveaux: [
          {
            titre: 'Ouverture niveau 3',
            blocks: [
              { text: 'Salam aleykoum wa rahmatullahi wa barakatuh.' },
              { text: 'Ce troisième niveau du pilier Motive-Forme marque un tournant : il est temps de passer à l’action concrète et d’ancrer tes efforts dans des habitudes solides, par les enseignements prophétiques.' },
              { text: 'Aujourd’hui, tu es peut-être dans un état de « je sais que je sais » : tu connais déjà tes forces et tes faiblesses, mais tu n’as pas encore mis en place un plan d’action régulier et structuré pour avancer.' },
              { text: 'L’objectif de ce niveau, in sha Allah, est que tu passes à « je fais ce que je sais » : tes connaissances se transforment en actions quotidiennes qui renforcent ta foi, ta discipline et ta santé.' },
              { text: 'En clair : tu vas commencer à appliquer, autant que tu peux et en fonction de tes capacités, des pratiques comme la fréquentation régulière de la mosquée, la lecture du Coran, le dhikr, et la préparation d’un voyage à La Mecque si possible.' },
              { text: 'Chaque effort physique sera accompagné d’un effort spirituel, et chaque bonne habitude religieuse viendra soutenir ta régularité dans le sport, ton sommeil et ton alimentation.' },
              { text: 'Aujourd’hui, tu fais peut-être les choses par phases ou par à-coups. Après ce niveau, in sha Allah, tu seras structuré, constant et aligné, avec une discipline qui façonne autant ton corps que ton cœur.' },
              { text: 'Tu passeras de « je sais ce qu’il faut faire, mais je ne le fais pas toujours » à « je mets en pratique chaque jour, peu importe les circonstances », en liant effort physique et effort spirituel.' },
              { text: 'Ce niveau te prépare directement au Niveau 4, où tu aligneras ta vie entière sur l’exemple du Prophète ﷺ. Souviens-toi : tous les niveaux sont complémentaires et se renforcent mutuellement.' },
              { text: 'Fais de ton corps un empire et sois un Muslim en forme.' },
            ],
          },
          {
            titre: 'Intro niveau 3',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/GC6YskssBnw" title="Intro niveau 3" allowfullscreen loading="lazy"></iframe></div>' },
            ],
          },
          {
            titre: 'La Shahada',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/JCNvOYzG5WA" title="Récompenses des actes obligatoires — La Shahada" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/1-shahada.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'La prière',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/PIRX7NSG2GI" title="Récompenses des actes obligatoires — La prière" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/2-priere.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Le Ramadan',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/5GCJvgyDn8k" title="Récompenses des actes obligatoires — Le Ramadan" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/3-ramadan.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'La zakat',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/ueJtAQ2uT5c" title="Récompenses des actes obligatoires — La zakat" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/4-zakat.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Le pèlerinage',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/PbeFEX_wcdA" title="Récompenses des actes obligatoires — Le pèlerinage" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/5-pelerinage.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
              { text: 'D’ailleurs, le hajj demande une vraie endurance physique : la marche entre Safa et Marwa, le tawaf répété autour de la Kaaba. Prendre soin de ton corps aujourd’hui, c’est aussi te préparer à pouvoir accomplir ce voyage le jour où Allah t’y invitera.' },
            ],
          },
          {
            titre: 'Les bonnes actions & prolonger ton existence',
            blocks: [
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/6-bonnes-actions-coran.pdf" target="_blank" rel="noopener">📄 Les bonnes actions dans le Coran</a>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/7-prolonger-existence.pdf" target="_blank" rel="noopener">📄 Comment prolonger son existence</a>' },
              { text: 'Cette même discipline que tu mets à choisir une action surérogatoire chaque jour, c’est celle qui te permet de tenir ta régularité sportive et alimentaire. Un cœur engagé dans le nafl est un cœur qui sait rester constant, y compris dans l’effort physique.' },
            ],
          },
          {
            titre: 'Clôture Niveau 3',
            blocks: [
              { text: 'Il est temps de transformer tes actions, pour que chaque jour de ta vie soit guidé par la lumière des bonnes actions enseignées par Allah.' },
              { text: 'Concrètement, tu vas améliorer dans ta vie :<br>• La prière régulière et sincère (physique et cœur)<br>• La charité et l’aide aux nécessiteux<br>• La patience face aux épreuves et le pardon<br>• Le rappel d’Allah (dhikr) matin et soir<br>• Le respect de tes parents et des autres croyants<br>• La sincérité dans toutes tes paroles et tes actes<br>• L’étude et la méditation du Coran pour guider tes décisions' },
              { text: 'Chaque action spirituelle que tu pratiques viendra soutenir ta discipline dans tous les aspects de ta vie : santé, alimentation, sommeil et sport.' },
              { text: 'Cette dernière étape du Niveau 3 te prépare à vivre pleinement le Coran, à intégrer ses enseignements dans ta vie quotidienne et à devenir un Muslim complet, discipliné et conscient.' },
              { text: 'Pour t’aider à mettre tout cela en pratique, j’ai préparé plusieurs tableaux complets dans lesquels sont classées toutes les bonnes actions du Coran, de la première à la dernière sourate.' },
              { text: 'L’idée est simple : tu peux maintenant voir clairement ce que le Coran te demande de faire, sourate par sourate. L’objectif de ces tableaux est de te permettre de t’organiser concrètement pour mettre en pratique un maximum de bonnes actions dans ta vie quotidienne.' },
              { text: '• Chaque tableau te montre les actions par bloc de sourates, pour que tu puisses avancer étape par étape<br>• Tu sais exactement ce que tu dois faire, où le trouver dans le Coran, et comment l’appliquer dans ta vie<br>• Tu peux cocher, planifier et suivre tes progrès pour t’assurer que tes efforts deviennent constants et réguliers' },
              { text: 'En résumé, ces tableaux ne sont pas là juste pour les lire : ils sont là pour t’inspirer à transformer la connaissance en pratique, à renforcer ta foi, ta discipline et ton bien-être physique et spirituel.' },
              { text: 'Le PDF complet te donne toutes les bonnes actions classées, pour que tu puisses t’organiser et les mettre en pratique chaque jour, in sha Allah.' },
              { text: 'Fais de ton corps un empire et sois un Muslim en forme.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/8-bonnes-actions-coran-tableaux.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Les péchés dévoreurs de bonnes actions',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/dFp4PMSTvzA" title="Les péchés dévoreurs de bonnes actions" allowfullscreen loading="lazy"></iframe></div>' },
              { text: 'Il en va de même pour ton corps : tu peux t’entraîner dur, mais un mauvais sommeil, une mauvaise alimentation ou un excès qui te blesse peuvent vider tous ces efforts, comme un seau percé.' },
              { text: 'Protège ton corps comme tu protèges tes bonnes actions.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/9-peches-devoreurs.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Vidéo complémentaire',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/mqkyzYPM0rM" title="Niveau 3" allowfullscreen loading="lazy"></iframe></div>' },
            ],
          },
          {
            titre: 'Vidéo finale',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/lR_-I1vmdvw" title="Vidéo finale" allowfullscreen loading="lazy"></iframe></div>' },
              { image: 'images/motive-forme-n3-photo-profils.jpg' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/priere-fajr.pdf" target="_blank" rel="noopener">📄 Fajr</a>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/priere-dohr.pdf" target="_blank" rel="noopener">📄 Dohr</a>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/priere-asr.pdf" target="_blank" rel="noopener">📄 ’Asr</a>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/priere-maghreb.pdf" target="_blank" rel="noopener">📄 Maghreb</a>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n3/priere-icha.pdf" target="_blank" rel="noopener">📄 ’Icha</a>' },
            ],
          },
        ],
      },
      {
        titre: 'Niveau 4',
        videoId: null,
        sousNiveaux: [
          {
            titre: 'Ouverture niveau 4',
            blocks: [
              { text: 'Salam aleykoum wa rahmatullahi wa barakatuh.' },
              { text: 'Ce quatrième et dernier niveau du pilier Motive-Forme est un niveau de synthèse et de basculement. Il ne s’agit plus d’ajouter des efforts, ni d’augmenter la pression, mais d’unifier ce que tu vis déjà.' },
              { text: 'À ce stade, tu as traversé les niveaux précédents : tu as appris à te connaître, à identifier tes schémas, à poser des bases religieuses et physiques plus stables.' },
              { text: 'Mais aujourd’hui, tu peux encore être dans un état intérieur de « je fais des efforts... mais je sens une tension intérieure » ou « je sais quoi faire, mais tout ne s’aligne pas encore naturellement ».' },
              { text: 'L’objectif de ce niveau, in shā’Allāh, est que tu passes à « je comprends le sens de mon chemin, et j’avance avec confiance ».' },
              { text: '<strong><u>Le cœur de ce niveau : le sens avant la performance</u></strong>' },
              { text: 'Dans ce niveau, tu vas apprendre à relire ton histoire de vie, tes épreuves, tes réussites, tes rechutes, à la lumière de la Sîra du Prophète ﷺ. Non pas pour te comparer. Non pas pour chercher la perfection. Mais pour comprendre une chose essentielle :' },
              { text: 'Allah n’a jamais demandé une vie sans contraintes, mais une direction claire.' },
              { text: 'Tu découvriras que ta vie n’est pas en retard, que tes difficultés ne sont pas des fautes, et que ton chemin peut être aligné avec l’exemple prophétique sans nier ta réalité.' },
              { text: '<strong><u>Découvrir ton grand domino</u></strong>' },
              { text: 'C’est ici que ton grand domino devient visible : le point central qui influence ta foi, ton corps, ton rapport à l’action, au travail et à la responsabilité. Une fois identifié, il te permettra de libérer les blocages récurrents, de donner du sens à ton effort, d’aligner toutes tes sphères de vie sur la voie prophétique, et d’éviter le yoyo émotionnel et la tension paralysante.' },
              { text: '<strong><u>Ce que tu vas mettre en pratique</u></strong>' },
              { text: 'Re-lire tes expériences passées avec conscience et bienveillance. Identifier les points clés où tes efforts ont été bloqués ou ralentis. Observer comment tes habitudes physiques, émotionnelles et spirituelles interagissent. Trouver le lien entre tes choix de vie et les enseignements prophétiques pour avancer avec clarté et sérénité.' },
              { text: '<strong><u>Résultat attendu</u></strong>' },
              { text: 'Après ce niveau, in shā’Allāh : tu avanceras avec confiance et alignement, tes actions quotidiennes auront un sens clair, ton corps, ton cœur et ton esprit fonctionneront en harmonie, et ton grand domino sera affaibli, rendant ton effort naturel et durable.' },
              { text: '<strong><u>Complémentarité avec les niveaux précédents</u></strong>' },
              { text: 'Comme pour les autres niveaux : le Niveau 1 t’a fait prendre conscience, le Niveau 2 t’a structuré, le Niveau 3 t’a mis en action, le Niveau 4 te permet d’unifier tout ton parcours avec la méthodologie du Prophète ﷺ.' },
              { text: 'Fais de ton corps un empire et sois un Muslim en forme.' },
            ],
          },
          {
            titre: 'Clôture du module — Le grand domino',
            blocks: [
              { text: 'Précision sur le grand domino : ce qu’on appelle ici « ta perte de poids », c’est en réalité ta transformation physique dans son ensemble, que ton objectif soit de perdre du gras, de prendre du muscle ou de retrouver de l’énergie. Le grand domino sabote cette transformation, quelle qu’elle soit, pas seulement la perte de poids.' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/yLvimne4cwI" title="Clôture du module — Le grand domino" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/motive-forme-n4/biographie-prophete.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'hygiene-forme',
    num: 2,
    nom: 'Hygiène-Forme',
    desc: 'Hygiène de vie et médecine prophétique au quotidien.',
    niveaux: [
      {
        titre: 'Niveau 1',
        videoId: null,
        sousNiveaux: [
          {
            titre: 'Ouverture du pilier',
            blocks: [
              { text: 'Salam aleykoum wa rahmatullahi wa barakatuh,' },
              { text: 'Le pilier Hygiène-Forme, c’est la fondation de tout ton suivi !' },
              { text: 'On va reconstruire ton mental, ton cœur et ton mode de vie pour que tes efforts soient solides, équilibrés et durables, le tout en harmonie avec les valeurs de l’Islam.' },
              { text: 'Aujourd’hui, tu es peut-être dans un état de « je ne sais pas que je ne sais pas » : tu ignores encore les mécanismes profonds qui te freinent dans ta perte de gras, ta vitalité et ton équilibre intérieur.' },
              { text: 'L’intention, in sha Allah, est de te faire passer à « je sais que je ne sais pas » : tu commenceras à identifier clairement ce qui, dans ton hygiène de vie, doit changer : ton alimentation, ton sommeil, ta gestion du stress, ton rapport au temps, à ton corps, et à Allah.' },
              { text: 'En clair : tu vas ouvrir les yeux sur tes vrais blocages, comprendre pourquoi tu manques d’énergie ou de constance, et trouver une ou deux raisons profondes, enracinées dans ta foi, qui te donneront l’élan d’avancer sans attendre.' },
              { text: 'Aujourd’hui, tu avances peut-être avec des freins invisibles, tu repousses les changements essentiels, tu t’éparpilles, et tu laisses filer le temps. Ce pilier t’apportera, in sha Allah, une clarté totale sur pourquoi tu dois agir maintenant, et pour qui tu le fais vraiment.' },
              { text: 'Tu passeras de « je sais que je devrais... » à « je ne peux plus attendre pour passer à l’action ! », avec une motivation ancrée dans ta foi, prêt à te propulser vers un mode de vie sain, apaisé et aligné.' },
              { text: 'Le pilier Hygiène-Forme, c’est bien plus qu’une question de gras : c’est une démarche spirituelle et physique, fondée sur la médecine prophétique : manger avec équilibre, dormir avec sagesse, bouger avec gratitude, purifier son cœur et soigner son âme.' },
              { text: 'Fais de ton corps un empire, sois un Muslim en forme !' },
            ],
          },
          {
            titre: 'Introduction au module',
            blocks: [
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/g8z1O5VWXTw" title="Introduction au module" allowfullscreen loading="lazy"></iframe></div>' },
            ],
          },
          {
            titre: 'La psychologie islamique',
            blocks: [
              { text: 'Je te partage le premier cours concernant la psychologie islamique, corrigé et validé par le Professeur Akim Bouterra.' },
              { text: 'Dans notre religion, il est essentiel de savoir de qui nous prenons la science. C’est pourquoi tout ce que je transmets repose non seulement sur la correction d’un professionnel compétent, mais aussi sur une base solide : le Coran et la Sunnah, les hadiths authentiques, la compréhension de nos pieux prédécesseurs, et les passages éclairants d’Ibn al-Qayyim.' },
              { text: 'C’est important pour moi que tu saches qu’il y a derrière ce que je te partage du sérieux, du travail et une vérification minutieuse. Je veux que tu avances en toute confiance, en sachant que chaque information, chaque méthode, a été validée et approuvée.' },
              { text: 'Ici, rien n’est fait au hasard : on avance avec méthode, rigueur et sincérité, pour apprendre et progresser correctement.' },
              { text: 'Je te partage le témoignage complet du professeur Bouterra concernant le 1er devoir : La psychologie islamique.' },
              { image: 'images/hygiene-forme-m1-temoignage.jpg' },
              { text: '<audio controls style="width:100%;"><source src="pdf/hygiene-forme-m1/temoignage-audio.ogg" type="audio/ogg"></audio>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m1/temoignage-feedback.pdf" target="_blank" rel="noopener">📄 Télécharger la certification</a>' },
              { text: 'Je te partage le résumé :' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/GqlQzS-Lc78" title="La psychologie islamique" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m1/00-devoir-n1-matt.pdf" target="_blank" rel="noopener">📄 Devoir N°1</a>' },
            ],
          },
          {
            titre: 'Vaincre le stress',
            blocks: [
              { text: 'Je te partage le deuxième cours concernant la gestion et la maîtrise du stress, corrigé et validé par le Professeur Akim Bouterra.' },
              { text: 'Dans notre religion, il est essentiel de savoir de qui nous prenons la science et les conseils, surtout lorsqu’il s’agit de notre bien-être mental et spirituel. C’est pourquoi tout ce que je transmets repose non seulement sur la correction d’un professionnel compétent, mais aussi sur une base solide : le Coran et la Sunnah, les hadiths authentiques, la compréhension de nos pieux prédécesseurs, et les passages éclairants d’Ibn al-Qayyim.' },
              { text: 'C’est important pour moi que tu saches qu’il y a derrière ce que je te partage du sérieux, du travail et une vérification minutieuse. Je veux que tu avances en toute confiance, en sachant que chaque information et chaque méthode pour vaincre le stress a été validée et approuvée.' },
              { text: 'Ici, rien n’est fait au hasard : on avance avec méthode, rigueur et sincérité, pour apprendre à gérer le stress efficacement et progresser dans la vie quotidienne et spirituelle.' },
              { text: 'Je te partage le témoignage complet du professeur Bouterra concernant le 2ème devoir : Le stress.' },
              { image: 'images/hygiene-forme-m1-temoignage.jpg' },
              { text: '<audio controls style="width:100%;"><source src="pdf/hygiene-forme-m2/audio.ogg" type="audio/ogg"></audio>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m2/certificat.pdf" target="_blank" rel="noopener">📄 Télécharger la certification</a>' },
              { text: 'Je te partage le résumé :' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/uF9wb3YWRGo" title="Vaincre le stress" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<div class="recette-actions"><a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m2/devoir.pdf" target="_blank" rel="noopener">📄 Devoir N°2</a><a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m2/protocole.pdf" target="_blank" rel="noopener">📄 Protocole général stress</a></div>' },
            ],
          },
          {
            titre: 'Surmonter ses angoisses',
            blocks: [
              { text: 'Je te partage le troisième cours concernant la gestion et la maîtrise de l’angoisse, corrigé et validé par le Professeur Akim Bouterra.' },
              { text: 'L’angoisse est un sujet encore plus profond que le stress. Elle ne se limite pas à une réaction ponctuelle, elle peut s’installer, envahir le cœur et impacter ton corps, ton sommeil, tes pensées et même ta relation avec Allah.' },
              { text: 'Dans notre religion, il est essentiel de savoir de qui nous prenons la science et les conseils, surtout lorsqu’il s’agit de notre équilibre mental, émotionnel et spirituel. C’est pourquoi tout ce que je te transmets repose sur une base solide : le Coran et la Sunnah, les hadiths authentiques, la compréhension de nos pieux prédécesseurs, les enseignements profonds d’Ibn al-Qayyim, et la validation d’un professionnel compétent.' },
              { text: 'L’angoisse n’est pas qu’un problème de respiration ou de pensées. C’est souvent le signe d’un déséquilibre intérieur plus profond : manque de tawakkul, surcharge mentale, attachement excessif à certaines choses, ou difficulté à lâcher prise.' },
              { text: 'C’est pour cela que dans ce cours, on ne va pas seulement chercher à « calmer » l’angoisse : on va apprendre à la comprendre, à identifier sa racine, et surtout à la transformer avec des outils concrets, validés et alignés avec notre dīn.' },
              { text: 'Je te partage le témoignage complet du professeur Bouterra concernant le 3ème devoir : L’angoisse.' },
              { image: 'images/hygiene-forme-m1-temoignage.jpg' },
              { text: '<audio controls style="width:100%;"><source src="pdf/hygiene-forme-m3/audio.ogg" type="audio/ogg"></audio>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m3/certificat.pdf" target="_blank" rel="noopener">📄 Télécharger la certification</a>' },
              { text: 'Je te partage le résumé :' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/9ZOwVOpBYtU" title="Surmonter ses angoisses" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<div class="recette-actions"><a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m3/devoir.pdf" target="_blank" rel="noopener">📄 Devoir N°3</a><a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m3/protocole.pdf" target="_blank" rel="noopener">📄 Protocole général angoisse</a></div>' },
            ],
          },
          {
            titre: 'La dépression',
            blocks: [
              { text: 'Dans notre religion, il est essentiel de savoir de qui nous prenons la science et les conseils, particulièrement lorsqu’il s’agit de notre équilibre mental, émotionnel et spirituel. C’est pourquoi tout ce que je te transmets repose sur une base sérieuse : le Coran et la Sunnah, les hadiths authentiques, la compréhension de nos pieux prédécesseurs, les enseignements d’Ibn al-Qayyim, et la validation d’un professionnel compétent.' },
              { text: 'Aujourd’hui, la dépression est parfois mal comprise. Certains la réduisent à un manque de volonté. D’autres peuvent penser qu’il suffit de retrouver la motivation ou d’être plus fort. Et parfois, dans notre communauté, une personne peut même finir par croire que sa souffrance signifie nécessairement qu’elle manque de foi. Or, la réalité est beaucoup plus complexe.' },
              { text: 'La dépression peut être multifactorielle : des facteurs physiques, hormonaux, biologiques, psychologiques, familiaux, sociaux ou environnementaux peuvent se combiner. Un deuil, un traumatisme, un stress chronique, l’isolement ou certaines difficultés de vie peuvent également participer à son apparition ou à son maintien.' },
              { text: 'C’est pour cela que dans ce cours, on ne va pas simplement chercher à « retrouver la motivation ». On va apprendre à comprendre ce qu’est réellement la dépression, à reconnaître ses principaux signes, à comprendre les différents facteurs qui peuvent l’alimenter, à utiliser des moyens concrets pour soutenir progressivement le corps, le mental et le cœur, et surtout à comprendre quand notre accompagnement atteint ses limites et qu’une prise en charge médicale ou psychologique devient nécessaire.' },
              { text: 'La spiritualité garde une place centrale dans cette démarche. Le Coran, la prière, les invocations, la patience, la gratitude, le tawakkul et le soutien de l’entourage peuvent constituer des ressources importantes. Mais utiliser les causes signifie également accepter de demander de l’aide et de se faire accompagner lorsque la situation le nécessite : chercher de l’aide n’est pas un manque de foi.' },
              { text: 'On ne banalise pas la souffrance. On ne culpabilise pas celui qui traverse une dépression. Et on ne lui demande pas simplement d’« être plus fort ». On avance progressivement, avec les causes adaptées, un accompagnement lorsque celui-ci est nécessaire, et en gardant l’espoir et la confiance en Allah. La dépression peut éteindre beaucoup de choses, mais elle ne peut pas éteindre la miséricorde d’Allah.' },
              { text: 'Je te partage le témoignage complet du Professeur Bouterra concernant le 4ème devoir : La dépression.' },
              { image: 'images/hygiene-forme-m1-temoignage.jpg' },
              { text: '<audio controls style="width:100%;"><source src="pdf/hygiene-forme-m4/audio.ogg" type="audio/ogg"></audio>' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m4/certificat.pdf" target="_blank" rel="noopener">📄 Télécharger la certification</a>' },
              { text: 'Je te partage le résumé :' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/xFk-XU2voj4" title="La dépression" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<div class="recette-actions"><a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m4/devoir.pdf" target="_blank" rel="noopener">📄 Devoir N°4</a><a class="btn btn--primary recette-pdf-btn" href="pdf/hygiene-forme-m4/protocole.pdf" target="_blank" rel="noopener">📄 Protocole général dépression</a></div>' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'nutri-forme',
    num: 3,
    nom: 'Nutri-Forme',
    desc: "La méthode F.A.C.I.L.E pour manger juste, sans te compliquer la vie.",
    niveaux: [
      {
        titre: 'Niveau 1',
        videoId: null,
        sousNiveaux: [
          {
            titre: 'Introduction au module',
            blocks: [
              { image: 'images/nutri-n1/01-introduction.jpg' },
              { text: '<strong><u>Avant de commencer</u></strong>' },
              { text: 'Ce module te donne des repères généraux de nutrition. Il ne remplace pas un avis médical : avant toute complémentation (vitamine D, fer, etc.), fais un bilan sanguin et demande l’avis de ton médecin. Si tu as une maladie chronique, prends aussi son avis avant de changer profondément ton alimentation.' },
              { text: '<strong><u>Bienvenue dans ce module</u></strong>' },
              { text: 'Bienvenue dans ce module exclusivement réservé à la nutrition. Comment va-t-il se passer ? Nous allons voir énormément de choses ensemble. D’abord les bases de la nutrition : qu’est-ce que la nutrition, et comment faire le lien entre nutrition et productivité. Ensuite, comment faire quand on cherche à perdre du gras, ou peut-être que toi tu es dans l’optique de prendre du poids ou du muscle. Enfin, comment avoir une alimentation équilibrée. Nous allons parler de beaucoup de choses, donc je vais faire en sorte d’être concis, réactif et d’aller à l’essentiel. Je vais aussi te donner des conseils pour bien gérer ton alimentation et pour que tu deviennes autonome dans tout cela.' },
              { text: '<strong><u>Qui suis-je ?</u></strong>' },
              { text: 'Avant toute chose, je me présente : je m’appelle Matthieu. Je suis coach sportif diplômé d’État et conseiller en nutrition, notamment en nutrition sportive. Je te le dis parce que tu verras son importance tout au long du module. Je suis également posturologue. J’ai accompagné beaucoup de personnes pour atteindre leurs objectifs, et chacune avait des objectifs particuliers, notamment des sportifs.' },
              { image: 'images/nutri-n1/02-comprendre-nutrition.jpg' },
              { text: '<strong><u>La nutrition, un moyen d’adorer Allah</u></strong>' },
              { text: 'Allah, gloire à Lui, nous dit qu’Il a créé les cieux, la terre et ce qu’il y a entre eux pour que nous L’adorions. Avant tout, la nutrition est donc un élément qui te permet d’adorer Allah : c’est une connaissance qui te permet de mieux L’adorer. Dans ton alimentation, il faut prendre en compte qu’il y a des éléments qui te permettent de vaquer à tes occupations et des éléments qui sont là pour te faire plaisir. Il faut faire la distinction entre les deux, ne pas se laisser piéger par le côté plaisir, et réussir à lier l’aspect santé et l’aspect plaisir. C’est ce que nous verrons ensemble tout au long de ce module.' },
              { text: '<strong><u>Les trois besoins que ton alimentation doit couvrir</u></strong>' },
              { text: 'Ton alimentation doit répondre à trois formes de besoins.' },
              { text: 'Le premier est le <strong>besoin structurel</strong>. L’alimentation doit donner à ton corps des bases pour qu’il soit plus solide : elle est liée à la structure de tes os, de tes organes, à la pousse de tes cheveux, à la reconstruction de ta peau. Plus on avance en âge, plus le corps devient fragile. Plus ton alimentation est de qualité, plus elle aide à ralentir le vieillissement, et tu comprends donc à quel point ce besoin est important.' },
              { text: 'Le deuxième est le <strong>besoin fonctionnel</strong> : la nutrition permet à ton corps de fonctionner comme il faut. Cela passe par les micronutriments, c’est-à-dire les vitamines (A, B, C, E...), mais aussi par les oligo-éléments : le fer, le calcium, le magnésium et d’autres. On les trouve surtout dans les légumes et dans les fruits, qui sont en général les aliments que l’on consomme le moins. Résultat : beaucoup de personnes présentent des carences, notamment en vitamine D et parfois en fer. Une complémentation peut alors être utile, mais uniquement après un bilan sanguin et sur avis médical, jamais au hasard. Ces micronutriments jouent un rôle important, notamment dans la fabrication des protéines par ton corps. Plus tu en apportes, mieux ton corps fonctionne ; moins tu en apportes, plus il tourne au ralenti, tu te sens fatigué et tu risques d’avoir des problèmes de santé.' },
              { text: 'Le troisième est le <strong>besoin d’énergie</strong>. Dans ton alimentation, il y a ce qu’on appelle des calories : chaque aliment contient une quantité d’énergie qui lui est propre, et c’est cette énergie qu’il t’apporte. Prends l’exemple d’une voiture : ton corps est une voiture, il a besoin de carburant pour avancer, mais aussi d’entretien, de faire la vidange, de mettre de l’huile, pour que tout tienne et que tu puisses aller faire tes courses, te balader, accomplir tes occupations. Si tu lui apportes trop d’énergie, c’est comme un réservoir qui déborde, sauf que dans le corps c’est plus subtil : le surplus est stocké sous forme de gras, et un excès prolongé favorise la prise de poids, les problèmes de santé et, à terme, des maladies comme le diabète de type 2. L’objectif est donc de connaître les calories dont ton corps a besoin pour bien fonctionner. Chaque véhicule a un carburant qui lui est propre, et ton corps aussi a besoin d’une quantité d’énergie qui lui est particulière, et d’une énergie de bonne qualité.' },
              { text: '<strong><u>Les calories vides</u></strong>' },
              { text: 'Les calories vides sont des calories qui ne répondent à aucun de ces trois besoins : elles apportent uniquement du plaisir. Je ne te dis pas qu’il ne faut jamais en manger, ni que tout s’arrête ici. Il faut savoir jauger, avec modération, car à force d’apporter surtout des calories vides à ton corps, tu le rends malade. C’est ce qui explique que des personnes se retrouvent avec du diabète, du cholestérol, de l’hypertension, ou en surpoids, voire en obésité.' },
              { text: '<strong><u>Les trois formes de dépense d’énergie</u></strong>' },
              { text: 'Pour que ton corps fonctionne, ton alimentation est soumise à diverses réactions chimiques qu’on appelle le métabolisme, qui a trois formes.' },
              { text: 'La première est le <strong>métabolisme de base</strong> : c’est l’énergie minimale dont ton corps a besoin pour maintenir ses fonctions primaires, comme le fait de cligner des yeux, que ton cœur continue de battre et que ton sang circule correctement.' },
              { text: 'La deuxième est <strong>l’énergie dépensée pour digérer</strong>. Elle représente environ 10 % de ta dépense et varie surtout selon ce que tu manges : les protéines demandent par exemple plus d’énergie à digérer que les sucres ou les graisses. Une alimentation variée et riche en fibres prend aussi soin de ton appareil digestif et de ton microbiote, ce qui te donne moins de lourdeur, moins de fatigue et une meilleure humeur.' },
              { text: 'La troisième est la <strong>dépense liée à l’activité</strong> : ton corps dégage de l’énergie en fonction de ce que tu fais dans la journée, et je fais souvent le parallèle avec l’activité physique. Plus ton activité est régulière, plus cette dépense augmente, et il faut que ton apport énergétique corresponde à ta dépense. Une personne qui fait du foot n’aura pas la même dépense calorique qu’une personne qui fait du karaté, et dans ton domaine d’activité c’est exactement la même chose : je t’expliquerai cela par la suite.' },
              { text: '<strong><u>Ce que tu dois retenir</u></strong>' },
              { text: 'L’alimentation a plusieurs besoins (structurel, fonctionnel, énergétique), ton corps a plusieurs formes de métabolisme, et ton alimentation doit répondre à tout cela tout en te permettant d’adorer Allah, en limitant avec modération les calories vides. Ce sont les bases : prends le temps de bien les comprendre, tu pourras ensuite les mettre en parallèle avec les chapitres suivants.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/01-introduction.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Nutrition et productivité',
            blocks: [
              { image: 'images/nutri-n1/03-nutrition-productivite.jpg' },
              { text: '<strong><u>Définir les termes</u></strong>' },
              { text: 'Commençons par définir les termes. La nutrition est une science appliquée à l’alimentation, qui te permet d’être en bonne santé. Il existe différentes formes d’alimentation : plutôt tournée vers le végétal, ou plutôt tournée vers l’animal. On y prend aussi en compte l’hydratation, les macronutriments (les glucides, les lipides et les protéines), les micronutriments (les vitamines) et les oligo-éléments (le fer, le magnésium, le calcium, le potassium...). Cette alimentation a été mise en place par Allah pour que nous soyons en bonne santé.' },
              { text: 'Dans cette alimentation, le musulman doit prendre en compte qu’il a des obligations et des devoirs : des choses qui lui sont autorisées, des choses prescrites et des choses interdites. Ces règles ont été mises en place par Allah pour préserver notre santé, pour préserver notre âme, et aussi pour nous éprouver, car tout cela est un test.' },
              { text: 'Notre alimentation est différente d’une personne à une autre. Une personne sportive n’aura pas la même alimentation qu’une personne sédentaire : cela dépend de notre sexe, de notre rythme de vie et de nos dépenses quotidiennes. Ces dépenses créent un besoin calorique, un besoin d’énergie, différent d’une personne à l’autre, qui détermine les calories à consommer chaque jour pour rester en bonne santé et en forme.' },
              { text: 'La productivité, ensuite, c’est le fait d’atteindre un objectif, d’atteindre une performance. Elle consiste, pour tout le monde, à aller d’un point A à un point B.' },
              { text: '<strong><u>Nutrition et objectif : des exemples</u></strong>' },
              { text: 'Prenons l’exemple d’un sprinter, dont l’objectif est de battre son propre record. Pour y arriver, il faut s’entraîner, faire des exercices, mais aussi avoir une alimentation qui correspond à son activité. Un sprinter n’a pas la même alimentation qu’une personne qui travaille sa force. Pour la force, on oriente l’alimentation vers plus de protéines, pour préserver la masse musculaire et aider à construire du muscle, afin d’être de plus en plus fort dans l’exécution des mouvements. Pour le sprint, on oriente plutôt vers les glucides, qui apportent de l’énergie de façon quasi immédiate pour maintenir la course. C’est pareil pour l’endurance : on travaille surtout sur les glucides.' },
              { text: 'Prenons maintenant une personne moins active mais qui dépense quand même de l’énergie, par exemple au golf. Ce n’est pas une grosse dépense physique, mais on sollicite ton cerveau. Le cerveau n’est pas un muscle, c’est un organe, mais il faut l’entretenir et lui donner l’énergie dont il a besoin. Pour le golfeur, on va donc plutôt donner une alimentation riche en glucides, mais aussi en lipides de qualité.' },
              { text: 'Si toi tu cherches à perdre du gras, on t’orientera vers l’exemple de la force : une alimentation plus riche en protéines. Attention, je ne dis pas qu’on mange moins de glucides ou de lipides à zéro : on augmente légèrement la portion de protéines et on diminue un peu la portion de glucides et un peu celle de lipides, en fonction de ton point de départ. J’ai fait une vidéo dédiée qui t’explique tout cela. À l’inverse, si tu cherches à prendre du muscle ou du poids, j’ai aussi une vidéo là-dessus. Ce sont, dans les grandes lignes, les principes de travail.' },
              { text: 'Pour améliorer ta productivité et augmenter tes performances dans ton activité, on axera ton alimentation plutôt sur les glucides et les lipides. Il est donc important de connaître ton alimentation et tes habitudes, pour optimiser tes performances au travail. Dis-toi que tu es un peu comme un athlète, mais avec d’autres finalités. Cette idée de performance, on la retrouve dans chaque domaine de la vie. En tant que musulmans, nous sommes aussi des sportifs en quelque sorte : nous cherchons à être performants pour être meilleurs auprès d’Allah. Il te faut donc une routine alimentaire qui te permette d’être productif et dynamique pour maintenir tes adorations, et une routine alimentaire et sportive dans ton travail. Peut-être que dans ton activité, tu cherches à être meilleur chaque jour, à accomplir des tâches plus complexes, à atteindre un certain chiffre d’affaires. Pour cela, il faut connaître tes tâches, et apporter à ton corps l’énergie nécessaire pour assumer tes responsabilités tout au long de la journée, durablement, en évitant au maximum la fatigue.' },
              { text: '<strong><u>Les glucides</u></strong>' },
              { text: 'Concrètement, les paramètres sur lesquels on agit en premier sont les glucides et les lipides. Les glucides sont des sucres : les sucres rapides et les sucres lents. Ils apportent de l’énergie aux muscles et, surtout, au cerveau. Comme repère moyen pour un adulte, ils représentent environ 40 à 55 % de tes calories journalières, mais ce chiffre se règle selon ton objectif (on le baisse, par exemple, en perte de gras).' },
              { text: 'Les glucides passent dans le sang : une partie est assimilée par ton corps et une autre peut être stockée. D’où l’intérêt de bien les gérer, pour limiter le stockage et l’apparition de graisse. Manger très peu de glucides peut donner de la fatigue, voire des malaises chez certaines personnes ; à l’inverse, un excès de sucres, surtout rapides, provoque des pics de glycémie suivis de coups de fatigue et d’irritabilité.' },
              { text: 'On prend aussi en compte l’index glycémique : c’est la vitesse à laquelle les glucides passent dans le sang. Plus ils passent vite, plus l’index glycémique est haut. L’intérêt est de consommer surtout des aliments à faible index glycémique, comme les légumes, les légumineuses et les fruits. Les aliments transformés, ceux dont je t’ai parlé quand j’ai évoqué les calories vides, sont plutôt à index élevé : il faut diminuer leur consommation. Privilégie les glucides complexes, riches en fibres. Fais aussi attention à la cuisson : un aliment à faible index glycémique peut voir son index monter. Par exemple, une carotte crue a un index glycémique faible, mais cuite ou en purée, son index augmente. Elle ne contient pas plus de calories pour autant : son sucre passe simplement plus vite dans le sang. Fais donc attention au type d’aliment, mais aussi au type de cuisson.' },
              { text: '<strong><u>Les lipides</u></strong>' },
              { text: 'Deuxième point d’attention pour ta productivité : les lipides, les matières grasses. On en trouve dans les végétaux, chez les animaux, et dans les produits industriels. Il y a de bonnes matières grasses et de moins bonnes, et ce qui compte n’est pas seulement leur origine mais leur type : il faut privilégier les graisses insaturées et les oméga-3, limiter les graisses saturées et éviter les graisses industrielles de type « trans ». L’objectif est d’en consommer régulièrement, dans de bonnes proportions. Comme repère moyen, elles représentent environ 30 à 40 % de tes calories journalières.' },
              { text: 'Les bienfaits des lipides sont multiples : elles apportent de l’énergie à ton corps, elles protègent contre le froid, elles participent à la structure des membranes des cellules, elles aident à l’absorption des vitamines et elles entrent dans la fabrication des hormones. Les oméga-3, présents dans les poissons gras, les noix, le lin, l’huile de colza et l’huile d’olive, contribuent à la mémoire. Les oméga-6, présents dans de nombreuses huiles végétales, aident au fonctionnement du cerveau.' },
              { text: '<strong><u>Ce que tu dois retenir</u></strong>' },
              { text: 'Pour optimiser ta productivité, il faut comprendre les bases de la nutrition et bien calibrer tes glucides et tes lipides. Pour savoir combien de glucides et de lipides consommer par jour, regarde la vidéo suivante : je t’y explique tout pour que tu puisses personnaliser ta nutrition.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/02-nutrition-productivite.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Hydratation et productivité',
            blocks: [
              { image: 'images/nutri-n1/04-hydratation.jpg' },
              { text: '<strong><u>Qu’est-ce que l’hydratation ?</u></strong>' },
              { text: 'L’hydratation, c’est un liquide qui se déplace dans ton corps et te permet d’être en bonne santé. Il y a plusieurs formes d’hydratation : l’eau, évidemment, mais aussi le thé, le café, le lait, et les boissons sucrées et gazeuses.' },
              { text: 'Ces deux dernières, les boissons sucrées et gazeuses, sont celles qu’on évite de consommer, tout simplement parce qu’elles sont trop riches en sucre. Le thé, le lait, le café et l’eau, en revanche, tu peux en consommer, avec quelques précautions : le lait pose problème aux personnes intolérantes, le café en trop grande quantité a des effets négatifs, et le thé contient lui aussi un peu de caféine. On met donc plutôt l’accent sur le fait de consommer régulièrement de l’eau.' },
              { text: '<strong><u>L’eau, source de vie</u></strong>' },
              { text: 'Allah nous dit qu’Il a créé toute chose à partir d’eau. Ton corps est composé d’environ 60 % d’eau, et ton cerveau en contient encore davantage, autour de 75 %. L’intérêt de lui en apporter régulièrement est de permettre à ton corps de bien fonctionner et d’être en meilleure santé.' },
              { text: 'Les bienfaits de l’hydratation sont multiples : elle aide tes reins à éliminer les déchets, elle régule la température du corps, elle t’aide à avoir plus d’énergie, à mieux te concentrer et à optimiser tes performances. À l’inverse, quand on consomme moins d’eau, on tombe en déshydratation. Même une déshydratation légère fait baisser la concentration et augmente la fatigue, donc elle diminue ta productivité. C’est pourquoi il est important de boire régulièrement.' },
              { text: '<strong><u>Comment faire concrètement ?</u></strong>' },
              { text: 'Première chose : mets-toi une alarme, toutes les heures ou toutes les deux heures, qui te rappelle qu’il faut t’hydrater.' },
              { text: 'Ensuite, voici comment on fait réellement. Quand tu te lèves le matin, bois un verre d’eau. Tu peux y ajouter un peu de miel : cette habitude s’inspire de la médecine prophétique, qui recommande le miel. Attention toutefois : évite-la si tu es diabétique sans avis médical, et ne donne jamais de miel à un enfant de moins d’un an.' },
              { text: 'Une fois ce verre pris, continue à t’hydrater dans la journée. Bois environ 30 minutes avant ton premier repas, celui du midi : un ou deux verres d’eau. Pendant le repas, bois par petites gorgées, sans excès, en gardant l’esprit du hadith du tiers : un tiers pour la nourriture, un tiers pour la boisson et un tiers pour le souffle. Continue ensuite de t’hydrater 1 h à 1 h 30 après le repas. Plus tard dans la journée, bois de nouveau un peu avant ton repas du soir.' },
              { text: 'En revanche, avant d’aller te coucher, évite de trop t’hydrater : tu risques de te lever dans la nuit pour aller aux toilettes, ce qui vient casser ton sommeil et ton rythme circadien. Fais donc attention à cela.' },
              { text: '<strong><u>L’impact sur ta productivité</u></strong>' },
              { text: 'Si tu ne t’hydrates pas suffisamment, tu diminues ta concentration, ta productivité et tes performances. C’est aussi ce que l’on conseille aux sportifs et aux athlètes qui cherchent à réaliser une performance : leur apporter régulièrement une hydratation qui correspond à leurs besoins.' },
              { text: '<strong><u>Combien boire ?</u></strong>' },
              { text: 'En général, on dit qu’il faut s’hydrater entre 1,5 et 2 litres par jour. Si tu as une dépense calorique importante, si tu es actif et que tu fais beaucoup de sport, on monte un peu, vers 3 litres par jour. Ce sont des moyennes : si tu as un problème rénal ou cardiaque, demande l’avis de ton médecin.' },
              { text: 'L’intérêt de cette hydratation est d’apporter à ton cerveau, à tes muscles et à tes organes tout ce dont ils ont besoin, et de permettre à ton sang de mieux circuler dans ton corps. L’hydratation est primordiale, quoi que tu fasses, que ce soit dans ton travail ou dans ta pratique physique.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/03-hydratation.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Fruits, légumes et productivité',
            blocks: [
              { image: 'images/nutri-n1/05-fruits-legumes.jpg' },
              { text: '<strong><u>Pourquoi consommer des fruits et des légumes ?</u></strong>' },
              { text: 'Voyons pourquoi tu devrais consommer des fruits et des légumes afin d’optimiser ta productivité. Les fruits et les légumes sont des aliments qu’Allah a créés et que l’on trouve dans la terre : les fruits poussent sur des arbres, les légumes le plus souvent dans le sol. Il existe plusieurs formes de fruits et de légumes, qui varient selon le pays et la saison, et chacun possède des bienfaits.' },
              { text: 'Privilégie, autant que possible, les fruits et les légumes de saison et de qualité. C’est ce que préconisent les médecins, et c’est aussi dans l’esprit de ce que faisait le Prophète ﷺ, qui mangeait ce que la terre offrait (dattes, pastèque, concombre...), en accord avec ce qu’Allah nous apporte et avec les conditions de ton corps selon les saisons et la température.' },
              { text: '<strong><u>Ce qu’ils t’apportent</u></strong>' },
              { text: 'Les fruits sont souvent chargés de sucre, le fructose, mais aussi de fibres, de micronutriments et de vitamines. Les légumes sont surtout riches en eau, en glucides, en oligo-éléments et en minéraux.' },
              { text: 'Leur couleur indique des familles de nutriments différentes, avec des bienfaits variés. L’idée est de varier les couleurs dans ton assiette, plutôt que de chercher à cibler un organe précis.' },
              { text: 'Quand on cherche à perdre du gras ou à avoir un poids santé, on s’oriente plutôt vers les légumes verts : ils sont pauvres en sucre et en calories, riches en eau et en fibres, et rassasient bien. Selon les aliments, la digestion est plus ou moins lente : ce sont surtout les fibres, les graisses et les protéines qui l’influencent.' },
              { text: '<strong><u>Fruits, légumes et productivité</u></strong>' },
              { text: 'Riches en vitamines et en antioxydants, les fruits et les légumes t’aident à stimuler ta mémoire et à être plus réactif. Quand on passe beaucoup de temps à manger des aliments riches en gras, on passe beaucoup de temps à digérer, ce qui demande plus d’énergie : tu es alors moins productif et moins concentré pour accomplir une tâche et être efficace dans ton domaine. À l’inverse, les fruits et les légumes sont faciles à digérer et ne demandent pas à ton corps une grande quantité d’énergie.' },
              { text: '<strong><u>Commence ton repas par les légumes</u></strong>' },
              { text: 'Un autre point important : je sais que c’est contre-intuitif, car on a plutôt l’habitude de manger les fruits en fin de repas, mais il est intéressant de commencer le repas par des légumes ou des aliments riches en fibres. Les fibres ralentissent l’absorption du sucre, limitent le pic de glycémie après le repas et te rassasient plus vite. C’est utile pour la perte de gras comme pour ton énergie de l’après-midi.' },
              { text: 'Reprenons l’exemple d’une grande assiette de spaghettis bolognaise : tu manges les pâtes, la viande hachée et la sauce tomate, puis tu décides de manger une pomme pour avoir plus d’énergie et apporter des micronutriments à ton corps. Rappelle-toi mon premier cours : ton alimentation doit couvrir trois besoins, et les fruits et les légumes couvrent en particulier le besoin fonctionnel. Manger cette pomme après le repas ne l’empêche pas d’être assimilée : ses vitamines sont absorbées dans l’intestin, quel que soit le moment. Mais si tu commences ton repas par des légumes, tu profites en plus de l’effet des fibres sur ta glycémie et ton rassasiement. Et si c’est ton premier repas de la journée, commencer par un fruit est un excellent réflexe. Je t’invite donc à adopter cette habitude à chaque repas, midi et soir : commence par tes légumes.' },
              { text: '<strong><u>Un repère simple</u></strong>' },
              { text: 'Vise environ cinq portions de fruits et légumes par jour, en variant les couleurs, en privilégiant ce qui est disponible et de bonne qualité.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/04-fruits-legumes.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Protéines et productivité',
            blocks: [
              { text: '<strong><u>Avant de commencer</u></strong>' },
              { text: 'Ces repères sont valables pour un adulte en bonne santé. Si tu as une maladie des reins, un diabète, une grossesse ou un traitement, demande l’avis de ton médecin avant d’augmenter tes protéines de façon importante.' },
              { text: '<strong><u>À quoi servent les protéines ?</u></strong>' },
              { text: 'Les protéines sont l’un des trois macronutriments, avec les glucides et les lipides. Elles répondent en particulier à ton besoin structurel, dont nous avons parlé au début du module : elles servent à construire et à réparer tes muscles, ta peau, tes cheveux, tes ongles, et elles entrent dans la fabrication des enzymes et de nombreuses hormones. Si tu cherches à perdre du gras, les protéines t’aident à conserver ton muscle pendant que tu maigris. Si tu cherches à prendre du muscle, elles sont indispensables pour le construire.' },
              { text: '<strong><u>Protéines et productivité</u></strong>' },
              { text: 'Les protéines ont aussi un effet direct sur ton énergie et ta concentration au quotidien :<br>• Elles rassasient plus longtemps que les glucides et les lipides. Un repas qui contient des protéines te laisse moins de fringales dans l’après-midi et moins tenté de grignoter.<br>• Associées à des fibres et à des glucides complexes, elles ralentissent l’absorption du sucre et t’évitent le coup de fatigue qui suit un repas trop sucré.<br>• Leur digestion demande plus d’énergie que celle des sucres ou des graisses : c’est l’effet dont nous avons parlé avec le métabolisme de la digestion.<br>• Elles fournissent les acides aminés dont ton cerveau a besoin pour fabriquer certains messagers chimiques qui interviennent dans l’attention et l’humeur.' },
              { text: 'Une matinée ou un après-midi sans coup de barre, c’est souvent un repas mieux équilibré en protéines.' },
              { text: '<strong><u>Où en trouver ?</u></strong>' },
              { text: '• Les protéines animales : la viande et la volaille halal, les œufs, le poisson, les produits laitiers (fromage blanc, yaourt, lait).<br>• Les protéines végétales : les légumineuses (lentilles, pois chiches, haricots), le tofu et le tempeh, les céréales complètes, les noix et les graines. Si tu suis un régime végan, pense à varier et à associer ces sources tout au long de la journée.<br>• Les compléments (comme la whey) ne sont utiles que pour combler un manque, jamais pour remplacer l’alimentation : ne les prends pas au hasard, et demande l’avis de ton médecin ou d’un professionnel.' },
              { text: '<strong><u>Combien en manger ?</u></strong>' },
              { text: 'Comme repère, un adulte a besoin d’au moins 0,8 g de protéines par kilo de poids corporel et par jour. Si tu es actif ou que tu cherches à perdre du gras ou à prendre du muscle, on vise plutôt entre 1,4 et 2 g par kilo et par jour, à ajuster avec ton objectif et ton niveau d’activité. Pour une personne de 75 kg, cela représente à peu près 105 à 150 g par jour.' },
              { text: 'Le plus efficace est de les répartir sur tes repas : environ 20 à 30 g de protéines à chaque repas, plutôt que tout concentrer sur un seul. Par exemple : 3 œufs et un fromage blanc au petit-déjeuner, un filet de poulet ou de poisson au déjeuner, des lentilles et un yaourt au dîner.' },
              { text: '<strong><u>Un rappel important</u></strong>' },
              { text: 'Comme toujours, la modération reste la règle, dans l’esprit du hadith du tiers : trop de protéines n’apporte pas plus de résultats, et ne remplace jamais les légumes, les fruits et les féculents. Choisis des sources de qualité, en privilégiant les viandes halal, et cuisine-les simplement.' },
              { text: '<strong><u>À retenir</u></strong>' },
              { text: 'Les protéines construisent ton corps, te rassasient et stabilisent ton énergie. Vise 20 à 30 g à chaque repas, varie les sources, et fais valider tout changement important par ton médecin si tu as un problème de santé.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/05-proteines.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Aliments transformés et productivité',
            blocks: [
              { image: 'images/nutri-n1/06-aliments-transformes.jpg' },
              { text: '<strong><u>Tous les aliments transformés ne se valent pas</u></strong>' },
              { text: 'Transformer un aliment, ce n’est pas toujours mauvais : faire cuire des lentilles, mettre des légumes en conserve ou surgeler des fruits sont des transformations qui peuvent rester très correctes. Le problème, ce sont les aliments dits ultra-transformés. On peut les classer en quatre groupes :' },
              { text: '• Les aliments bruts ou peu transformés : fruits, légumes, œufs, viande, poisson, légumineuses, lait, céréales complètes.<br>• Les ingrédients de cuisine : l’huile, le beurre, le sel, le sucre, le miel.<br>• Les aliments transformés : du pain, du fromage, des conserves simples, un yaourt nature, dont la fabrication ajoute peu d’éléments.<br>• Les aliments ultra-transformés : sodas, biscuits industriels, céréales sucrées, barres chocolatées, plats préparés, charcuteries industrielles, sauces prêtes à l’emploi. Ils contiennent souvent des sucres ajoutés, des graisses raffinées, du sel, des arômes, des colorants ou des émulsifiants, que l’on ne trouverait pas dans une cuisine ordinaire.' },
              { text: '<strong><u>Ce que ça change pour ta productivité</u></strong>' },
              { text: '• Des pics d’énergie suivis de coups de fatigue : riches en sucres rapides et pauvres en fibres, ils font monter puis retomber rapidement ta glycémie, ce qui donne des envies de sommeil et de grignotage en milieu d’après-midi.<br>• Une satiété plus faible : peu de protéines et de fibres, donc on a de nouveau faim plus vite.<br>• Une consommation plus facile à dépasser : ils sont conçus pour être très appétissants et se mangent vite. Plusieurs études montrent qu’on mange plus de calories quand notre alimentation en contient beaucoup.<br>• Des nutriments en moins : moins de vitamines, de minéraux et de fibres pour le même nombre de calories, donc moins de carburant de qualité pour ton corps et ton cerveau.' },
              { text: 'Si tu as déjà eu un repas rapide de type fast-food avant une réunion, tu connais probablement la sensation : lourdeur, baisse de concentration, envie de sucre une heure plus tard.' },
              { text: '<strong><u>Comment faire concrètement ?</u></strong>' },
              { text: 'L’objectif n’est pas de tout supprimer, mais de garder le contrôle. Quelques échanges simples :' },
              { text: '• Céréales sucrées du petit-déjeuner : remplace-les par des flocons d’avoine avec du fromage blanc et un fruit.<br>• Jus de fruits et sodas : remplace-les par de l’eau, ou par le fruit entier.<br>• Biscuits et viennoiseries : remplace-les par des fruits secs, quelques noix ou un fruit.<br>• Plats préparés : prépare deux portions le soir et garde la seconde pour le lendemain.<br>• Sauces industrielles : fais une base maison (tomate, huile d’olive, ail, herbes).' },
              { text: 'Applique une règle simple, comme le 80/20 : environ quatre repas sur cinq à base d’aliments bruts ou peu transformés, et une place pour le plaisir le reste du temps, sans culpabilité. Comme nous l’avons vu, tu sais désormais lire une étiquette : regarde le premier ingrédient, le nombre d’ingrédients et les sucres ajoutés.' },
              { text: '<strong><u>Un point de vigilance pour le musulman</u></strong>' },
              { text: 'Dans les produits transformés, certains ingrédients ou additifs peuvent être d’origine animale ou alcoolisée : gélatine, certains colorants, certains arômes. En cas de doute, vérifie la composition ou cherche un produit certifié halal.' },
              { text: '<strong><u>À retenir</u></strong>' },
              { text: 'Les ultra-transformés ne sont pas interdits, mais ils fatiguent, rassasient mal et se mangent trop facilement. Garde tes repas simples, cuisine maison quand tu peux, lis les étiquettes, et garde une place raisonnable pour le plaisir.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/06-aliments-transformes.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'La pyramide des priorités',
            blocks: [
              { image: 'images/nutri-n1/07-pyramide.jpg' },
              { text: '<strong><u>Que faut-il faire en premier ?</u></strong>' },
              { text: 'Qu’est-ce qu’il faut faire en premier pour améliorer ta productivité ? La première chose, c’est d’avoir des aliments de qualité. Tout ce que nous avons vu ensemble sert à te faire comprendre quels aliments consommer en bonne quantité et lesquels consommer en quantité moindre. Ceux qu’il faut limiter sont, le plus souvent, les aliments transformés : denses en calories, en sel et en sucre, ils incitent à manger plus et ont un impact négatif sur ta concentration, donc sur ta productivité. L’intérêt est d’apporter à ton corps des aliments de qualité, qui facilitent ta digestion et lui permettent d’être en meilleure santé et de fonctionner de façon optimale.' },
              { text: 'Les aliments de bonne qualité sont ceux qui viennent de la terre et dont la glycémie n’est pas trop élevée. Je ne te dis pas d’arrêter les aliments à index glycémique élevé : il faut surtout varier ton alimentation. Voici un exemple d’organisation concrète : consomme plutôt des glucides à index glycémique élevé autour de tes séances de sport, car ils rechargent tes réserves d’énergie. Le soir, ou en jour de repos, privilégie des glucides à index glycémique bas : un repas du soir plus léger aide la digestion et le sommeil. Attention : le corps ne brûle pas plus de calories le soir, il en dépense même moins. Ta prise ou ta perte de gras dépend du bilan de toute ta semaine, pas d’un seul repas. Quand tu es au travail ou en jour de repos, garde des aliments à faible index glycémique, le midi comme le soir.' },
              { text: '<strong><u>La pyramide des priorités</u></strong>' },
              { text: 'La pyramide des priorités consiste à voir ce qui est le plus important à mettre en place dans ton alimentation. Voici l’ordre.' },
              { text: '<strong>Première priorité : les calories.</strong> Je sais que pour certains, compter les calories est redondant et long, mais je t’ai fait un bonus pour cela, et il existe aussi des applications qui peuvent t’aider. Elles restent toutefois limitées : quand tu les télécharges, elles te demandent si tu cherches à être en bonne santé, à perdre du gras, à prendre du poids ou à prendre du muscle, mais si tu veux que ton alimentation t’aide à être plus productif, tu ne le trouveras pas dans l’application. Pour un adulte actif, les besoins se situent le plus souvent entre 2000 et 2800 kcal par jour, à ajuster selon ton profil et ton objectif. Ton corps est un réservoir : si tu lui apportes trop d’énergie, tu stockes du gras et tu te sens lourd ; si tu ne lui en apportes pas assez, tu le mets aussi au ralenti. Il faut donc un compromis.' },
              { text: '<strong>Deuxième priorité : les protéines et la qualité de tes aliments.</strong> Après les calories, vérifie ton apport en protéines, central si tu cherches à perdre du gras ou à prendre du muscle. Puis regarde la qualité : chaque calorie ne se vaut pas. Prenons l’exemple d’un menu burger avec frites et soda : on dit qu’il tourne autour de 1000 à 1500 calories, et avec une glace en plus, il peut monter vers 1500. En un seul repas, tu peux donc consommer une bonne part de ta journée. À côté, on peut très bien composer un repas d’un total calorique comparable avec des aliments sains. Même total, mais pas du tout la même composition : le premier est riche en sel, en sucre et en graisses, le second riche en micronutriments, en vitamines et en fibres. Le premier a un impact négatif sur ta concentration, ta digestion, ta réactivité et ta productivité ; le second a l’effet inverse. C’est pourquoi il faut connaître ses calories, pour rester dans un objectif de santé, et avoir le bon carburant.' },
              { text: '<strong>Troisième priorité : le timing.</strong> La plupart des gens se disent : « Je dois manger mon premier repas à telle heure, le deuxième à telle heure... » En réalité, cela dépend du rythme de vie de chacun : certains peuvent manger à heures fixes, d’autres non, selon leurs disponibilités et leurs tâches. Je t’apporterai une méthode dans la vidéo suivante.' },
              { text: '<strong>Dernière priorité : les compléments alimentaires.</strong> Certaines personnes disent qu’elles vont absolument en prendre. Les compléments peuvent être utiles, notamment en cas de carence, et personnellement j’en prends. Allah nous a déjà donné dans l’alimentation ce qu’il nous faut, mais avec l’agriculture intensive d’aujourd’hui, certains aliments apportent moins de certains micronutriments. Les compléments viennent donc compléter l’alimentation, jamais la remplacer. Ne prends jamais de complément au hasard : fais un bilan sanguin et demande l’avis de ton médecin.' },
              { text: '<strong><u>Ce que tu dois retenir</u></strong>' },
              { text: 'Les priorités, dans l’ordre : connaître tes calories, soigner les protéines et la qualité de tes aliments, organiser le timing selon ton rythme de vie, puis, si tu en as besoin et sur avis médical, terminer par les compléments. Les deux premiers niveaux, les calories et la qualité des aliments, c’est déjà très bien.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/08-pyramide.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Organiser tes repas',
            blocks: [
              { image: 'images/nutri-n1/08-organiser-repas.jpg' },
              { text: '<strong><u>Avant de commencer</u></strong>' },
              { text: 'Les méthodes ci-dessous sont des repères généraux pour un adulte en bonne santé. Si tu es diabétique, enceinte ou allaitante, si tu prends un traitement, si tu as des antécédents de troubles alimentaires ou un problème de santé, demande l’avis de ton médecin avant de modifier le nombre ou le rythme de tes repas. Si tu ressens des malaises, reviens à une organisation plus classique.' },
              { text: '<strong><u>Le principe : le hadith du tiers</u></strong>' },
              { text: 'Comment organiser tes repas ? La première chose, c’est de prendre le hadith du Prophète ﷺ, quand il nous dit qu’il faut réserver un tiers de notre estomac à la nourriture, un tiers à la boisson et un tiers au souffle. À partir du moment où tu as cela en tête, tout devient plus facile : ce qui compte, c’est la modération. Rien ne t’impose un nombre de repas précis. Comme je te l’ai dit dans la vidéo précédente, la première priorité reste tes calories, et ensuite la façon de les répartir dépend de ton emploi du temps.' },
              { text: '<strong><u>Méthode 1 : la journée classique</u></strong>' },
              { text: 'Pour certaines personnes, la journée peut s’organiser de façon classique : le matin tu te lèves et tu prends ton petit-déjeuner, à midi ton repas du midi, éventuellement une collation vers 16 h, et le soir ton repas du soir. C’est la méthode que tu peux mettre en place à partir du moment où ton emploi du temps te le permet.' },
              { text: '<strong><u>Méthode 2 : deux temps de repas, aux extrémités de la journée</u></strong>' },
              { text: 'Si, à l’inverse, tu bouges beaucoup, tu es souvent en déplacement et tu n’as pas forcément le temps de cuisiner ou de te faire une assiette équilibrée, voici une autre méthode. Le matin, tu fais ta prière et tes ablutions, puis tu prends ton petit-déjeuner et, dans la foulée, ton repas du midi : tes deux repas sont rapprochés. Je sais que cela bouscule tes habitudes, et que tu me diras que tu n’as pas l’habitude de faire cela. Tu restes dans tes calories, donc c’est cohérent avec ta première priorité.' },
              { text: 'Il est normal d’avoir faim plus tard dans la journée. Dans ce cas, hydrate-toi et prends des fruits, trois ou quatre si tu veux, pour attendre ton repas suivant. Jusqu’à ta collation, tu n’es de toute façon pas en mesure de manger à cause de ton emploi du temps ; le risque est alors de grignoter ou de manger n’importe quoi. L’idéal est donc de garder tes repas concentrés : un premier temps de repas le matin, et un second plus tard dans la journée, avec ta collation de 16 h et ton repas du soir. Cela te fait deux temps de repas aux extrémités de ta journée. Au début, ce sera compliqué, car ce sont des habitudes qu’on n’a pas, mais avec de la régularité, cela s’installe.' },
              { text: '<strong><u>Répartir tes calories</u></strong>' },
              { text: 'Il faut répartir tes calories entre ces deux temps de repas. Si, par exemple, tu es à 2500 calories par jour, tu peux en mettre à peu près la moitié le matin et la moitié le soir. À chaque temps de repas, tu gardes toujours les trois macronutriments : des glucides, des lipides et des protéines.' },
              { text: '<strong><u>Que manger au petit-déjeuner ?</u></strong>' },
              { text: 'On associe souvent le petit-déjeuner au sucré, alors que les protéines sont le plus souvent salées. Un petit-déjeuner riche en protéines, avec des lipides et une quantité de glucides modérée, rassasie plus longtemps qu’un petit-déjeuner très sucré. Chez beaucoup de personnes, un petit-déjeuner très riche en sucres provoque un pic de glycémie, suivi d’un coup de fatigue et de fringales dans la matinée, ce qui pousse à grignoter et entretient l’effet yoyo. L’idée est d’avoir une énergie régulière, sans montagnes russes.' },
              { text: 'Voici ce que tu peux prendre :<br>• Pour les protéines, si tu préfères le salé : des œufs. Si tu préfères le sucré : du fromage blanc (0 % ou avec la matière grasse que tu choisis), avec, pour le côté gourmand, un peu de miel ou de sirop d’agave, en petite quantité. Attention : le sirop d’agave n’est pas moins calorique que le miel, et il est très riche en fructose, donc ce n’est pas un choix plus sain.<br>• Pour les glucides : des fruits, une orange, une pomme, une banane. Tu peux en prendre deux ou trois.<br>• Pour les lipides : quelques amandes, quelques noix ou un peu de beurre de cacahuète, dans des proportions adaptées à tes calories.' },
              { text: 'Une fois ton petit-déjeuner pris, tu enchaînes avec ton repas du midi.' },
              { text: '<strong><u>T’organiser en amont</u></strong>' },
              { text: 'Si tu choisis cette méthode, il faut planifier tes repas à l’avance, pour ne pas avoir à cuisiner le matin. Le soir, dès que tu arrives, tu manges ton repas, puis tu prépares déjà celui du lendemain, afin que tout soit prêt.' },
              { text: '<strong><u>Méthode 3 : un seul repas dans la journée (OMAD)</u></strong>' },
              { text: 'Il existe aussi une méthode où l’on mange tout sur un seul repas, qu’on appelle OMAD. C’est encore plus compliqué. Si je reprends l’exemple de 2500 calories, il faudrait consommer 2500 calories en un seul repas, ce qui est très difficile, surtout si tu ne l’as jamais fait. C’est une méthode que tu peux expérimenter, mais sache qu’elle est difficile, et qu’elle n’est pas conseillée à tout le monde : évite-la si tu as un métier physique exigeant, si tu es diabétique, enceinte, ou si tu as des antécédents de troubles alimentaires. Elle n’est pas une recommandation par défaut, et il ne faut pas la confondre avec le jeûne surérogatoire de la Sunna (le lundi et le jeudi par exemple), qui est une pratique d’adoration différente.' },
              { text: '<strong><u>Méthode 4 : la méthode Express</u></strong>' },
              { text: 'Enfin, il y a la méthode Express. Par exemple, si à côté de ton travail tu as un supermarché qui te permet d’acheter des aliments sains, voici un exemple de repas simple, économique et prêt en deux minutes :<br>• Une salade de mâche : des légumes, pour faciliter la digestion et caler la sensation de faim.<br>• Du maïs, comme source de glucides, à la place des pâtes ou du pain, avec des haricots rouges, riches en fibres et qui apportent aussi des protéines.<br>• De l’huile d’olive et des tomates.' },
              { text: 'Pour compléter tes protéines, tu peux ajouter un œuf dur, du thon en boîte ou du fromage blanc. Il n’y a rien de compliqué : c’est facile à reproduire, et encore plus simple si tu as un micro-ondes à disposition. Si tu passes beaucoup de temps au restaurant, parce que tu n’as pas envie de mettre en pratique les autres méthodes ou parce que ton travail t’y oblige, regarde la vidéo suivante.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/09-organiser-repas.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Manger au restaurant',
            blocks: [
              { image: 'images/nutri-n1/09-restaurant.jpg' },
              { text: '<strong><u>Avant de commencer</u></strong>' },
              { text: 'Ces conseils s’adressent à un adulte en bonne santé. Si tu es diabétique, enceinte ou allaitante, si tu prends un traitement ou si tu as des antécédents de troubles alimentaires, demande l’avis de ton médecin avant de sauter un repas ou de modifier ton rythme alimentaire.' },
              { text: '<strong><u>Quand ton travail t’amène souvent au restaurant</u></strong>' },
              { text: 'En fonction de ton travail, tu n’as pas forcément le temps de cuisiner ou de manger correctement, et tu vas souvent au restaurant parce que c’est plus pratique pour toi. Il existe des méthodes à mettre en place pour t’aider à rester en bonne santé, à garder ton énergie concentrée sur ton travail et, par la suite, à améliorer tes performances.' },
              { text: '<strong><u>1. Adapter tes autres repas de la journée</u></strong>' },
              { text: 'Si tu sais que tu vas au restaurant dans la journée, tu peux alléger tes autres repas. Par exemple, si tu sais que tu déjeunes au restaurant, tu peux prendre un petit-déjeuner simple, plutôt qu’un gros. Certaines personnes en bonne santé choisissent de ne rien manger le matin, en s’hydratant, jusqu’au repas du midi : c’est ce qu’on appelle le jeûne intermittent. C’est une option, pas une obligation, et elle ne convient pas à tout le monde.' },
              { text: 'Si le restaurant est un imprévu (on te propose de sortir à la dernière minute), tu peux de la même façon alléger le repas d’après. Et si c’est le soir que tu vas au restaurant et que tu as déjà mangé le matin et le midi, tu peux alléger le repas suivant, le lendemain. L’idée est de lisser ce que tu as mangé sur l’ensemble de la journée ou de la semaine.' },
              { text: 'Attention à l’esprit de cette méthode : il ne s’agit jamais de te punir ni de te priver après un repas plus copieux, ce qui alimente le cycle de la privation et de la rechute, c’est-à-dire l’effet yoyo. Un repas plus copieux ne détruit pas ta semaine. Le repas suivant, tu manges simplement plus léger et de façon équilibrée, sans culpabiliser, et tu reprends ton rythme normal.' },
              { text: '<strong><u>2. C’est toi qui choisis le restaurant</u></strong>' },
              { text: 'Quand on te demande d’aller au restaurant, tu peux choisir le restaurant. Tu as des objectifs de santé à maintenir, les autres n’en ont peut-être pas, mais tu peux orienter le groupe vers le restaurant le plus adapté, qui te convient et qui convient aussi aux autres. Aujourd’hui, nous avons tout à notre disposition pour choisir : un téléphone, des applications, des avis sur internet. On voit si le restaurant est équilibré et s’il propose ce dont on a besoin pour rester en bonne santé. On n’a donc plus vraiment d’excuses pour aller systématiquement dans des restaurants riches en matières grasses : on peut choisir des restaurants équilibrés. À toi d’orienter un peu ton entourage, avec douceur.' },
              { text: '<strong><u>3. Commence ton repas par de l’eau</u></strong>' },
              { text: 'Pendant qu’on attend son repas, on a souvent tendance à manger du pain ou des chips posés sur la table. Cela remplit déjà l’estomac, peut même ouvrir l’appétit, et t’apporte des calories avant même que ton repas n’arrive. Commencer par un verre d’eau t’aide à mieux te sentir rassasié et à ne pas piocher à gauche et à droite : tu évites de consommer bien plus que ce dont ton corps a besoin.' },
              { text: '<strong><u>4. Maîtrise tes émotions</u></strong>' },
              { text: 'Quand on est en famille, avec des collègues, quand on décide d’aller au restaurant, on est content et c’est à ce moment qu’on commence à se lâcher. Je peux comprendre que tu aies passé une journée dure, avec beaucoup de pression, et que tu te dises que le restaurant est ton moment pour lâcher les ballons. Mais si tu restes dans cet état d’esprit, tu risques d’annuler tous les efforts de ta journée en accumulant beaucoup de calories. Alors, oui, tu as envie de te faire plaisir, et c’est légitime, mais fais-le avec intelligence et modération, en organisant bien ton assiette. Si tu dépasses un jour, ne te juge pas : reviens simplement à ton équilibre au repas suivant.' },
              { text: '<strong><u>5. Compose ton assiette</u></strong>' },
              { text: '• Au début du repas, commence par une assiette de crudités : cela prépare déjà ton estomac. Tu peux aussi prendre un fruit au début.<br>• Pour le plat principal, fais en sorte que les légumes représentent la moitié de ton assiette. Ajoute une portion de féculents raisonnable et une portion de protéines raisonnable.<br>• Pour les légumes, choisis, quand c’est possible, des légumes pas trop travaillés : le cuisinier met souvent beaucoup d’huile pour donner du goût. Si tu n’as pas le choix, tant pis.<br>• Évite les sauces, ou prends-en un peu, à la cuillère, en l’étalant sur l’assiette : c’est là que se cachent beaucoup de calories.<br>• Pour le dessert, pose-toi la question : après avoir bu de l’eau, mangé des crudités, des légumes et ton assiette, est-ce que j’en ai vraiment besoin ? Je ne te dis pas de ne jamais en prendre : c’est le côté plaisir. Mais si tu as du mal à te retenir, prends plutôt une petite part de gâteau et ne t’y attarde pas : les desserts sont très riches en sucre, pauvres en protéines et en fibres, un vrai cocktail de sucre pour ton corps.' },
              { text: '<strong><u>6. Et si tu manges souvent en fast-food ?</u></strong>' },
              { text: 'C’est une autre situation. Évite les boissons sucrées et gazeuses : prends plutôt une bouteille d’eau. Dans ton menu, évite les frites et prends une salade à la place, avec ton sandwich. Évite aussi les desserts, sauf si c’est un moment où tu veux te faire plaisir, en petite quantité. Le restaurant et le fast-food sont ce qu’on essaie d’éviter de faire régulièrement. Mais si tu ne peux pas faire autrement à cause de ton travail, il faut trouver des solutions pour limiter tes calories.' },
              { text: '<strong><u>7. Le repas suivant</u></strong>' },
              { text: 'Si tu as fait un gros repas au restaurant le midi, le soir tu prends simplement un repas léger et équilibré (une soupe, des légumes, une source de protéines), et le lendemain tu reprends ton alimentation normale, saine et équilibrée. Si tu n’as pas pris de petit-déjeuner le matin et que tu as fait un gros repas le midi, tu peux de la même façon alléger le soir.' },
              { text: '<strong><u>À retenir</u></strong>' },
              { text: 'Voilà la méthode à mettre en place pour rester productif, avoir une meilleure santé, éviter que ton corps soit fatigué pour rien et améliorer ta productivité et tes performances dans ton domaine : adapter les autres repas, choisir le restaurant, commencer par l’eau, maîtriser tes émotions, composer une assiette équilibrée, et reprendre ton rythme sans culpabiliser.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/10-restaurant.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Décrypter une étiquette',
            blocks: [
              { image: 'images/nutri-n1/10-etiquette.jpg' },
              { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/CESNwpnCohw" title="Bonus : savoir lire des étiquettes" allowfullscreen loading="lazy"></iframe></div>' },
              { text: '<strong><u>L’essentiel à retenir</u></strong>' },
              { text: 'Le calcul de tes calories et de tes macronutriments est déjà pris en charge par le module de calcul à partir de photos. Ce complément se concentre sur ce que la photo ne voit pas : la qualité du produit, écrite sur l’emballage.' },
              { text: '<strong><u>1. Lis la liste des ingrédients</u></strong>' },
              { text: '• Regarde le premier ingrédient. La liste est classée par ordre décroissant : le premier est celui dont il y a le plus. Si tu achètes de la sauce tomate, il faut que le premier ingrédient soit la tomate, pas l’eau.<br>• Compte les ingrédients. Au-delà de six environ, le produit est probablement transformé. C’est un repère, pas une règle absolue.<br>• Repère les sucres ajoutés et les additifs (colorants, exhausteurs de goût, émulsifiants). Ce n’est pas interdit d’en manger, mais évite d’en consommer régulièrement et compense avec des produits simples.' },
              { text: '<strong><u>2. Méfie-toi des ultra-transformés</u></strong>' },
              { text: 'Les produits ultra-transformés sont conçus pour être très appétissants : ils sont souvent riches en sucres ajoutés et en graisses transformées, pauvres en fibres, en protéines et en vitamines. On en mange facilement plus et plus vite, et on dépasse ses besoins sans s’en rendre compte. L’idée n’est pas de tout interdire, mais de garder le contrôle : moins d’ultra-transformés, plus de produits simples, avec modération.' },
              { text: '<strong><u>3. Quelques précisions sur les chiffres de la vidéo</u></strong>' },
              { text: '• Le tableau nutritionnel est donné pour 100 g, pas pour ta portion : regarde toujours la valeur pour la quantité que tu manges réellement.<br>• Un produit est considéré comme riche en fibres à partir de 6 g pour 100 g : les 6,9 g de l’exemple sont donc un bon score, à compléter avec des légumes et des fruits (on vise environ 25 à 35 g de fibres par jour).<br>• Les 20 g de protéines sont un repère par repas (environ 20 à 30 g), pas une exigence pour chaque produit : un paquet de céréales n’a pas vocation à les fournir à lui seul, on le complète (fromage blanc, œufs, whey).<br>• L’index glycémique mesure la vitesse à laquelle le sucre passe dans le sang, pas sa quantité. Et l’« équilibre acide-base » n’est pas un critère de digestion validé : ce sont surtout les fibres, les protéines, les graisses et le degré de transformation qui comptent.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/11-etiquette.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          {
            titre: 'Ton plan nutrition',
            blocks: [
              { image: 'images/nutri-n1/11-plan-nutrition.jpg' },
              { text: '<strong><u>Tu connais maintenant les bases</u></strong>' },
              { text: 'Maintenant, tu connais les bases de la nutrition : les besoins de ton corps, tes calories, les glucides, les lipides et les protéines, l’hydratation, la qualité des aliments et la façon d’organiser tes repas. Il est temps de passer à la pratique.' },
              { text: '<strong><u>Télécharge ton plan nutrition</u></strong>' },
              { text: 'Tu peux maintenant télécharger ton plan nutrition, qui correspond à ton régime alimentaire et à tes calories. Choisis le plan qui te convient :<br>• Classique<br>• Végan<br>• Sans gluten' },
              { text: 'Choisis ensuite la version qui correspond à tes calories, celles que tu as calculées grâce au module de calcul.' },
              { text: '<strong><u>Avant de te lancer</u></strong>' },
              { text: 'Ce plan est un repère pour t’aider à démarrer. Ajuste-le à ton quotidien, et si tu as une allergie, une intolérance, une maladie ou un traitement, demande l’avis de ton médecin avant de modifier ton alimentation.' },
              { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/nutri-n1/12-plan-nutrition.pdf" target="_blank" rel="noopener">📄 Télécharger le PDF</a>' },
            ],
          },
          { titre: 'Sèche', blocks: rfPlanBlocks('seche', 'sèche', [1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700]) },
          { titre: 'Perte de gras', blocks: rfPlanBlocks('perte-de-masse-grasse', 'perte de masse grasse', [1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700]) },
          { titre: 'Prise de muscle', blocks: rfPlanBlocks('prise-de-muscle', 'prise de muscle', [2300, 2500, 2700]) },
          { titre: 'Maintenance', blocks: rfPlanBlocks('maintenance', 'maintenance', [1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700]) },
          { titre: 'Énergie / Vitalité', blocks: rfPlanBlocks('energie-vitalite', 'énergie / vitalité', [1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700]) },
        ],
      },
    ],
  },
  {
    id: 'depasse-forme',
    num: 4,
    nom: 'Dépasse-Forme',
    desc: "Les protocoles d'entraînement pour progresser concrètement.",
    niveaux: [
      { titre: 'Niveau 1 — Philosophie des protocoles', videoId: null, texte: 'Texte du niveau 1 à venir.' },
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
