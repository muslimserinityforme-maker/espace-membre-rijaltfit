// Contenu de l’accompagnement jour par jour (voir programme.html). Chaque jour
// est débloqué à partir de la date de début du membre. RF_JOURS_OVERRIDES ne
// contient que les jours déjà rédigés ; tout jour absent retombe sur un
// placeholder « à venir ».
//
// Un jour : { titre, blocks: [...] }. Blocs possibles, rendus dans l’ordre :
//   { image: 'images/…' }
//   { text: '…' }                      (HTML autorisé)
//   { video: 'ID_YOUTUBE' }
//   { chapter: { mod, niveau, sous } } reprend tels quels les blocs d’un
//                                      chapitre des modules (rien à recopier)
//
// Les liens vers un chapitre d’un module se font avec espace.html?mod=…&idx=…
// (&sous=… pour un sous-onglet).

const RF_JOURS_TOTAL = 730; // 2x 365 jours (année 1 + année 2)

const RF_JOURS_OVERRIDES = {};

// ───────── Semaine 1 : « Mets en place les bases de ta discipline » ─────────

RF_JOURS_OVERRIDES[1] = {
  titre: 'Bienvenue : revisionne ton bilan',
  blocks: [
    { image: 'images/semaines/jour-01-bienvenue.jpg' },
    { text: '<strong>Message de bienvenue</strong>' },
    { text: 'Salamu alaykum wa ramatoulhai wa barakatouh.' },
    { text: 'Masha’Allah, je tiens à te féliciter pour cette belle décision d’intégrer ce suivi personnalisé !' },
    { text: 'C’est un choix courageux et une démarche louable que tu fais pour prendre soin de la santé qu’Allah t’a confiée. Sache que je suis à tes côtés pour t’accompagner tout au long de ce parcours, et je prie pour qu’Allah te facilite ce chemin et t’accorde la force et la patience nécessaires pour atteindre tes objectifs.' },
    { text: 'Avec ta détermination et l’aide d’Allah, je suis convaincu que tu pourras accomplir de grandes choses.' },
    { text: 'Encore bravo pour ton engagement ! Je suis honoré de faire partie de cette nouvelle étape de ta vie.' },
    { text: 'Qu’Allah te bénisse et te guide dans cette démarche !' },
    { text: 'Amin.' },
    { text: '<strong>🔥 JOUR 1 : Revisionne ton bilan 🔥</strong>' },
    { text: 'Pour ton 1er jour, je voulais te parler de l’importance de revoir ton bilan. C’est essentiel pour suivre tes progrès, réévaluer tes objectifs et ajuster tes stratégies si besoin.' },
    { text: 'En gardant une vision claire de ton évolution, on pourra rester alignés avec tes attentes et optimiser tes efforts pour atteindre ta transformation de vie.' },
    { text: 'Je suis convaincu que cette révision est cruciale pour maintenir ta motivation et t’assurer une progression continue.' },
    { text: '⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️' },
    { text: '<strong>📢 INFORMATION IMPORTANTE 📢</strong>' },
    { text: 'Pas de panique, tout est sous contrôle !' },
    { text: 'Je sais que tu peux te poser des questions ou être un peu impatient, mais ne t’inquiète pas. Ton programme démarre dans seulement 3 jours, et tout est prêt pour te permettre d’atteindre tes objectifs.' },
    { text: 'En attendant, prends ce temps pour te préparer mentalement, clarifier tes intentions, et te reposer. Chaque étape a été pensée pour t’accompagner avec clarté et efficacité, in sha Allah.' },
    { text: 'Reste serein, ce programme est fait pour toi, et je serai là pour te guider à chaque étape. On commence bientôt cette belle aventure !' },
    { text: 'Ton coach M.T' },
    { text: '<strong>📈 Planning de la semaine 📈</strong>' },
    { text: 'Tu vas découvrir ce qui t’attend cette semaine. Cela te permettra d’anticiper et d’avoir une visibilité sur la suite de ton suivi.' },
    { text: 'Si tu as des questions, n’hésite pas à te tourner vers ton coach.' },
    { image: 'images/semaines/s1-planning-1.jpg' },
    { image: 'images/semaines/s1-planning-2.jpg' },
  ],
};

RF_JOURS_OVERRIDES[2] = {
  titre: 'Ta vidéo d’explications',
  blocks: [
    { text: '<strong>Bienvenu mon frère à ton JOUR 2 🌿</strong>' },
    { text: 'Salam aleykoum wa ramatoulhai wa barakatouh !' },
    { text: 'Bienvenue à toi dans ton accompagnement Rijal Fit !' },
    { text: 'Dans cette vidéo, je t’explique comment va se dérouler ton suivi :' },
    { video: 'BYNIRBaGlpE' },
    { text: '<strong><u>🌙 Mission sommeil : partie 1</u></strong>' },
    { image: 'images/semaines/mission-sommeil-partie-1.jpg' },
    { chapter: { mod: 'follow-forme', niveau: 0, sous: 13 } },
  ],
};

RF_JOURS_OVERRIDES[3] = {
  titre: 'Présente-toi',
  blocks: [
    { image: 'images/semaines/jour-03-presente-toi.jpg' },
    { text: '<strong>🔥 JOUR 3 : obligatoire ! 🔥</strong>' },
    { text: 'C’est parti pour ton jour 3 !' },
    { text: '<strong>Présente-toi !</strong>' },
    { text: 'Réalise une vidéo OU un audio pour répondre aux 8 questions suivantes :' },
    { text: '<strong>1. Comment t’appelles-tu ?</strong><br>Exemple : je m’appelle Matthieu.' },
    { text: '<strong>2. Quel âge as-tu ?</strong><br>Exemple : j’ai 32 ans.' },
    { text: '<strong>3. Comment as-tu rencontré Rijal Fit ?</strong><br>Exemple : Matthieu m’a contacté sur Instagram.' },
    { text: '<strong>4. Pourquoi as-tu pris contact avec Rijal Fit ?</strong><br>Exemple : j’ai pris contact avec lui parce que je souhaite perdre 15 kg, avoir des abdos dessinés, ne plus jamais reprendre mes kilos en trop et bien vieillir…' },
    { text: '<strong>5. Pourquoi as-tu confiance ?</strong><br>Exemple : il m’a donné confiance par son contenu qui est percutant, plein de bon sens, des conseils très utiles, mais surtout parce qu’il fait la liaison entre la perte de poids et la religion ma sha Allah, et ça fait du bien de travailler sa santé et en même temps sa relation avec Allah !' },
    { text: '<strong>6. Quel est ton problème principal ?</strong><br>Exemple : mon problème principal, c’est le complexe que j’ai avec mon ventre… j’ai vraiment du mal à accepter mes formes devant le miroir… et ça me bloque aussi concernant le mariage…' },
    { text: '<strong>7. Comment pourrais-tu faire pour atteindre tes objectifs ?</strong><br>Exemple : pour atteindre mes objectifs, il faudrait que je fasse attention à mon alimentation… et que j’évite de grignoter…' },
    { text: '<strong>8. Quels sont tes engagements pour atteindre tes objectifs ?</strong><br>Exemple : pour atteindre mes objectifs, je m’engage à mettre en pratique tous les conseils et astuces de Matthieu pour faire de mon corps un EMPIRE et devenir un muslim en forme !' },
    { text: '<strong>Cette mission est obligatoire !!!</strong>' },
    { text: 'Tu partageras ta présentation dans ta conversation !!!' },
  ],
};

RF_JOURS_OVERRIDES[4] = {
  titre: 'Les actes ne valent que par leurs intentions',
  blocks: [
    { image: 'images/semaines/jour-04-ton-programme.jpg' },
    { text: '<strong>📋 Ton programme des 6 prochaines semaines</strong>' },
    { text: 'Pendant les 6 prochaines semaines, tu suis la <strong>Phase 1 : Fondation</strong>. Tu t’entraînes soit en salle, soit à la maison : la logique est la même, seuls les exercices changent.' },
    { text: '• Un programme <strong>full-body</strong> : 3 séances par semaine, avec un jour de repos entre chaque séance.<br>• Environ 4 exercices par séance, avec 1 min 30 de repos entre chaque série.<br>• Du <strong>cardio</strong> 3 fois par semaine (20 à 30 minutes, intensité modérée). C’est ton coach qui décide de le mettre en pratique ou non.<br>• Tu recommences le même programme chaque semaine pendant 6 semaines.' },
    { text: '<strong>Ton objectif : ne rate AUCUNE séance pendant 6 semaines.</strong>' },
    { text: 'Dans le PDF, clique sur le nom d’un exercice pour voir la vidéo d’exécution. Si un exercice est trop difficile ou trop facile, demande à ton coach de le changer.' },
    { text: '<span class="btn-row"><a class="btn btn--primary recette-pdf-btn" href="pdf/depasse-forme/phase-1-programme-salle.pdf" target="_blank" rel="noopener">📄 Programme salle</a> <a class="btn btn--primary recette-pdf-btn" href="pdf/depasse-forme/phase-1-programme-maison.pdf" target="_blank" rel="noopener">📄 Programme maison</a></span>' },
    { text: '<a class="btn btn--primary recette-pdf-btn" href="pdf/depasse-forme/choisir-ses-poids-salle.pdf" target="_blank" rel="noopener">📄 Choisir ses poids pour la salle</a>' },
    { text: '<strong>⚠️ JOUR 4 : obligatoire / IMPORTANT ⚠️</strong>' },
    { text: 'C’est parti pour ton jour 4 !' },
    { text: 'Aujourd’hui, c’est le jour le plus IMPORTANT de ton suivi !!!' },
    { text: 'On va se fixer TA DÉTERMINATION ainsi que les bases de ta DISCIPLINE !' },
    { text: 'Cette mission est EXTRÊMEMENT IMPORTANTE !! C’est la 1re pierre qui te permettra d’avoir une transformation durable !' },
    { text: 'Donc je compte sur toi pour respecter les 3 points suivants :' },
    { text: '<strong>1.</strong> Ta présentation d’hier joue le rôle d’engagement avec toi-même ! Donc lorsque tu auras un coup de mou, tu retourneras l’écouter.' },
    { text: '<strong>2.</strong> Ton bilan OFFERT ! Ce qu’on a vu ensemble durant ton bilan t’a mis une claque, et c’est pour cette raison que tu es ici ! Par une prise de conscience. Comme pour le point précédent, lorsque tu as un coup de mou, écoute ton bilan Forme OFFERT d’une valeur de 300 €.' },
    { text: '<strong>3.</strong> Écoute attentivement la vidéo suivante, prends des notes et mets en pratique :' },
    { chapter: { mod: 'motive-forme', niveau: 0, sous: 4 } },
  ],
};

RF_JOURS_OVERRIDES[5] = {
  titre: 'As-tu fait l’exercice d’hier ?',
  blocks: [
    { image: 'images/semaines/jour-05-as-tu-fait-lexercice.jpg' },
    { text: '<strong>⚠️ JOUR 5 : obligatoire / IMPORTANT ⚠️</strong>' },
    { text: 'C’est parti pour ton jour 5 !' },
    { text: 'Aujourd’hui, c’est ÉGALEMENT le jour le plus IMPORTANT de ton suivi !!!' },
    { text: 'Je te partage l’importance des cadenas, qui participent à développer ta discipline pour que tu sois un muslim en forme toute ta vie in sha Allah !' },
    { text: 'Écoute attentivement la vidéo suivante, prends des notes et mets en pratique :' },
    { video: 'NltM7Fem82o' },
  ],
};

RF_JOURS_OVERRIDES[6] = {
  titre: 'On débute la nutrition',
  blocks: [
    { image: 'images/nutri-n1/01-introduction.jpg' },
    { text: '<strong>🔥 JOUR 6 : On débute la nutrition 🔥</strong>' },
    { text: 'C’est parti pour ton jour 6 !' },
    { text: 'Pour bien débuter ton accompagnement, voici ta 1re mission 🍔 Nutri-Forme 🥗, qui se déroulera en deux étapes :' },
    { text: '<strong>🌟 Étape 1 : 🌟</strong>' },
    { text: '« Écoute attentivement la vidéo suivante ! »' },
    { text: 'Cette 1re vidéo du module nutrition (Niv 2) t’explique comment manger avant que ton plan nutrition n’arrive, d’ici 2 semaines :' },
    { video: 'SJTdzvcY77c' },
    { text: 'De plus, avec cette vidéo, tu trouveras en support une image qui illustre les portions de tes macronutriments.' },
    { image: 'images/protocole-poings.jpg' },
    { text: 'Si tu as des questions ou des doutes, n’hésite pas à en parler à ton coach.' },
    { text: '<a class="btn btn--primary recette-pdf-btn" href="espace.html?mod=introduction&idx=4">Ton protocole nutrition</a>' },
    { image: 'images/semaines/mission-sommeil-partie-2.jpg' },
    { text: '<strong>🛌 MISSION SOMMEIL OPTIMAL SEMAINE 1 : PARTIE 2 🌙</strong>' },
    { text: '<strong><u>A. Ce qui se passe dans ton corps pendant que tu dors</u></strong>' },
    { text: 'Beaucoup pensent que le sommeil, c’est juste « se reposer ».' },
    { text: 'En réalité, ton corps travaille activement chaque nuit sur 3 niveaux :' },
    { text: '🔴 <strong>Sommeil profond</strong> : réparation musculaire, régulation du cortisol, récupération physique<br>🟡 <strong>Sommeil paradoxal</strong> : traitement des émotions, consolidation de la mémoire, équilibre mental<br>🟢 <strong>Rythme chronobiologique</strong> : si tes horaires sont stables, chaque cycle s’optimise automatiquement' },
    { text: '<strong>👉 Ce que ça veut dire pour toi concrètement :</strong>' },
    { text: 'Un coucher irrégulier = cycles cassés = récupération incomplète = fatigue chronique = cortisol élevé = prise de ventre facilitée.' },
    { text: 'Ce n’est pas un manque de volonté. C’est de la biologie.' },
    { text: 'C’est pourquoi les horaires de A et B ne sont pas négociables.' },
    { text: '<strong><u>B. Prépare ton corps avant de dormir</u></strong>' },
    { text: '<strong>1️⃣ Le dîner : dernier levier de la journée</strong>' },
    { text: 'Mange minimum 2 h avant de te coucher.' },
    { text: '<strong>❌ À éviter le soir :</strong><br>Sucres rapides, repas trop lourd, café et thé après 17 h' },
    { text: '<strong>✅ À privilégier :</strong><br>Protéines légères, légumes cuits, une tisane camomille ou mélisse' },
    { text: '🌿 Le Prophète ﷺ ne remplissait jamais son ventre. Un ventre léger = un sommeil plus profond = une meilleure énergie au Fajr.' },
    { text: '<strong>2️⃣ Auto-massage des cuisses à l’huile de nigelle</strong>' },
    { text: 'Juste avant de te coucher, après les adhkars.' },
    { text: '<strong>🤔 Comment faire ?</strong>' },
    { text: 'Verse quelques gouttes d’huile de nigelle dans ta paume.' },
    { text: 'Masse chaque cuisse avec des mouvements lents et circulaires de bas en haut pendant 3 à 5 minutes.' },
    { text: 'Pas de pression forte. L’objectif, c’est de détendre le système nerveux, de relâcher les tensions musculaires accumulées dans la journée et de préparer ton corps au repos.' },
    { text: '🌿 Le Prophète ﷺ a dit : « Utilisez cette graine noire, car elle est un remède pour tout sauf la mort. » (Boukhari)' },
    { text: 'Ce simple geste active la détente parasympathique. Ton corps comprend que c’est l’heure de se reposer.' },
    { text: '<strong><u>C. 🎯 Objectif semaine 1 complet</u></strong>' },
    { text: '🌟 <strong>Mission quotidienne :</strong> message à 20 h 30 pour confirmer que tu es au lit<br>🌟🌟 <strong>Mission matinale :</strong> à faire tous les matins sans exception, message après le Fajr avec ton niveau d’énergie de 1 à 10<br>🌟🌟🌟 <strong>Mission avant de dormir :</strong> à faire tous les soirs sans exception, message après l’icha avec ton niveau d’énergie de 1 à 10' },
    { text: 'On ajuste ensemble in sha Allah. 💪' },
  ],
};

RF_JOURS_OVERRIDES[7] = {
  titre: 'Apprends à gérer ton appétit',
  blocks: [
    { image: 'images/nutri-n1/01-introduction.jpg' },
    { text: '<strong>🔥 JOUR 7 : Apprends à gérer ton appétit ! 🔥</strong>' },
    { text: 'C’est parti pour ton jour 7 !' },
    { text: 'Encore une fois, aujourd’hui, c’est de la pratique ! Donc on est sur le Niveau 2 du module 🍔 Nutri-Forme 🥗.' },
    { text: 'Ta mission du jour est de visionner la vidéo suivante, de prendre des notes et de mettre en pratique :' },
    { video: '-zQIV8NErcw' },
    { text: 'N’hésite pas à revenir vers ton coach si tu as des difficultés à le faire, si tu as des questions ou si tu souhaites un aménagement spécifique.' },
    { text: '<strong>📝 Conseil du coach 📝</strong>' },
    { text: 'N’oublie pas que tu as un coach à ta disposition ! Alors ne sois pas timide : profite de son expertise pour aménager ton suivi.' },
  ],
};

function rfGetJourContent(jour) {
  if (RF_JOURS_OVERRIDES[jour]) return RF_JOURS_OVERRIDES[jour];
  return { titre: `Jour ${jour}`, blocks: [{ text: 'Contenu à venir.' }] };
}
