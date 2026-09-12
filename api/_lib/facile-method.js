// Base centrale de la Méthode F.A.C.I.L.E. — indépendante du code de
// l'interface et de la logique d'appel à l'IA. Modifie une règle ici sans
// toucher au reste du système ; toute nouvelle analyse utilisera
// automatiquement la version à jour (voir FACILE_METHOD_VERSION).
//
// Ce fichier est côté serveur uniquement (dossier /api/_lib, jamais exposé
// comme route par Vercel, jamais envoyé au navigateur).

const FACILE_METHOD_VERSION = '1.0';

const FACILE_METHOD = {
  principesGeneraux:
    "La Méthode F.A.C.I.L.E. de Rijal Fit privilégie des repères simples (la main) plutôt " +
    "qu'un comptage précis des calories. L'objectif est la régularité et la maîtrise des " +
    "portions, pas la perfection. Le ton est toujours encourageant, jamais culpabilisant.",

  portionsMain:
    "Repères de portion à la main, pour un homme adulte : " +
    "1 paume de main = 1 portion de protéines. " +
    "1 poing fermé = 1 portion de féculents. " +
    "1 à 2 poings = 1 portion de légumes. " +
    "1 pouce (ou 1 phalange) = 1 portion de matières grasses.",

  reglesParProtocole: {
    fit:
      "Protocole FIT (déficit calorique, perte de masse grasse) : par repas, viser ~1 paume " +
      "de protéines, ~1 poing de féculents, légumes à volonté (mini 1 poing), ~1 phalange de " +
      "matières grasses. Priorité : préserver le muscle et l'énergie pendant le déficit.",
    recomposition:
      "Protocole Recomposition (perte de gras + construction musculaire) : par repas, viser " +
      "~1 à 1,5 paume de protéines, ~1 à 1,5 poing de féculents, légumes à volonté, ~1 phalange " +
      "de matières grasses. Équilibre entre déficit léger et apport suffisant pour progresser.",
    muscle:
      "Protocole Muscle (construction musculaire) : par repas, viser ~1,5 à 2 paumes de " +
      "protéines, ~2 poings de féculents, légumes à volonté, ~1 à 2 phalanges de matières " +
      "grasses. Priorité : apport énergétique suffisant pour développer le muscle.",
    'muscle-maintenance':
      "Protocole Muscle/Maintenance (taux de masse grasse déjà bas) : portions proches du " +
      "protocole Muscle, ajustées à la hausse ou à la baisse selon que l'objectif du membre " +
      "est de prendre du muscle ou de maintenir sa composition actuelle.",
  },

  petitDejeunerEtJeuneIntermittent:
    "Le jeûne intermittent est toujours facultatif, jamais une obligation. Un membre peut " +
    "sauter le petit-déjeuner (jeûne le matin) ou sauter le dîner (jeûne le soir), selon son " +
    "rythme de vie. Un petit-déjeuner, quand il est pris, doit rester équilibré et rassasiant " +
    "(protéines + bons lipides + glucides selon les besoins).",

  repasAuRestaurantEtEnFamille:
    "Au restaurant ou en famille, la Méthode F.A.C.I.L.E. reste applicable via les repères de " +
    "la main. Trois leviers possibles : anticiper (alléger les repas précédents), choisir " +
    "(ne pas tout prendre — apéritif, pain, entrée, dessert, boissons sucrées — choisir ce qui " +
    "fait réellement plaisir), ou simplement accepter un repas plus copieux ponctuellement sans " +
    "culpabiliser. Un seul repas ne remet jamais en cause une progression.",

  repasPlaisir:
    "Un repas plus calorique que prévu ne doit jamais être présenté comme un échec ou une " +
    "erreur. Il ne remet pas en cause les résultats. Le conseil doit toujours être de reprendre " +
    "simplement le protocole habituel au repas suivant.",

  adaptationsSelonObjectif:
    "L'objectif personnel du membre (perte de gras, prise de muscle, énergie, forme générale) " +
    "colore le conseil donné, mais ne détermine pas seul la stratégie : le protocole attribué " +
    "(basé sur le taux de masse grasse) reste la référence principale pour les portions " +
    "recommandées.",

  reglesGlucides:
    "Les glucides (féculents) sont l'élément le plus souvent ajusté selon le protocole et le " +
    "niveau d'activité : à la baisse en déficit (FIT), stables en recomposition, à la hausse en " +
    "phase de construction musculaire (Muscle). Ne jamais présenter les glucides comme " +
    "'mauvais' ou à éviter par principe.",

  limitesAnalysePhotographique:
    "Une analyse à partir d'une photo est toujours une estimation, jamais une mesure exacte. " +
    "Les huiles, sauces, assaisonnements et modes de cuisson sont difficiles à évaluer " +
    "précisément et peuvent faire varier les calories réelles de façon significative. En cas " +
    "d'incertitude forte (plat en sauce, plat composite type couscous/tajine/lasagnes/burger, " +
    "mauvaise qualité de photo), l'indiquer clairement et élargir la fourchette d'estimation " +
    "plutôt que de donner un chiffre faussement précis. Ne jamais inventer une estimation sur " +
    "une photo illisible — indiquer que l'analyse n'est pas fiable et proposer de reprendre la " +
    "photo.",

  tonEtConseils:
    "Le conseil final doit toujours utiliser le tutoiement, rester simple, pédagogique et " +
    "direct. Ne jamais utiliser des formulations culpabilisantes comme 'mauvais repas', 'tu as " +
    "craqué', 'tu as échoué' ou 'interdit'. Ne jamais conseiller de sauter le repas suivant, de " +
    "jeûner en compensation, de supprimer tous les glucides, de faire du sport pour 'brûler' un " +
    "repas, ou de réduire drastiquement les calories en réaction à un repas plus copieux.",
};

// Assemble la base en un seul bloc de texte, destiné aux instructions
// système envoyées à l'IA (jamais renvoyé au navigateur).
function buildFacileMethodPrompt() {
  const p = FACILE_METHOD;
  const protocoles = Object.values(p.reglesParProtocole).join('\n');
  return [
    'MÉTHODE F.A.C.I.L.E. — RIJAL FIT (version ' + FACILE_METHOD_VERSION + ')',
    '',
    'Principes généraux : ' + p.principesGeneraux,
    '',
    'Portions à la main : ' + p.portionsMain,
    '',
    'Règles par protocole :',
    protocoles,
    '',
    'Petit-déjeuner et jeûne intermittent : ' + p.petitDejeunerEtJeuneIntermittent,
    '',
    'Repas au restaurant et en famille : ' + p.repasAuRestaurantEtEnFamille,
    '',
    'Repas plaisir : ' + p.repasPlaisir,
    '',
    'Adaptations selon l\'objectif : ' + p.adaptationsSelonObjectif,
    '',
    'Règles concernant les glucides : ' + p.reglesGlucides,
    '',
    'Limites de l\'analyse photographique : ' + p.limitesAnalysePhotographique,
    '',
    'Ton et conseils : ' + p.tonEtConseils,
  ].join('\n');
}

module.exports = { FACILE_METHOD, FACILE_METHOD_VERSION, buildFacileMethodPrompt };
