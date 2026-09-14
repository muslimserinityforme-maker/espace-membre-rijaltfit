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
        titre: 'C’est quoi Rijal Fit ?',
        videoId: null,
        blocks: [
          { text: 'Que tu sois là pour perdre du gras, prendre du muscle ou simplement retrouver de l’énergie, une chose ne change pas : ta transformation physique n’est jamais à côté de ta foi. Elle en fait partie.' },
          { text: 'Ce n’est pas : tu progresses physiquement, et en plus tu te rapproches d’Allah. C’est cette transformation qui devient la façon dont tu te rapproches de Lui.' },
          { text: 'Chaque effort que tu fais aujourd’hui pour ton corps — perdre du gras, gagner en force, retrouver de l’énergie — c’est prendre soin de ta amānah, le dépôt qu’Allah t’a confié.' },
          { text: 'Tu ne cherches pas à devenir un homme au mental d’acier. Tu cherches à devenir un mou’min qawi — un croyant fort, capable de tenir, de porter sa famille, de se tenir droit devant Allah.' },
          { text: '<div class="video-embed"><iframe src="https://www.youtube.com/embed/QouRodRMKkU" title="C’est quoi le pilier Motive-Forme ?" allowfullscreen loading="lazy"></iframe></div>' },
          { text: '<strong><u>Exercice complémentaire (optionnel)</u></strong>' },
          { text: 'Prends 2 minutes. Écris (sur ton cahier ou ton fichier Word) 3 choses qu’Allah t’a données dans ta vie pour que tu sois l’homme que tu es aujourd’hui.' },
          { text: 'Relis-les à chaque fois que la motivation faiblit. C’est ton ancrage — pas un discours qu’on t’a fait une fois.' },
        ],
      },
      { titre: 'Niveau 1 — Ton intention', videoId: null, texte: 'Texte du niveau 1 à venir.' },
      { titre: 'Niveau 2 — Ton type de motivation', videoId: null, texte: 'Texte du niveau 2 à venir.', minFormule: 'thabit' },
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
