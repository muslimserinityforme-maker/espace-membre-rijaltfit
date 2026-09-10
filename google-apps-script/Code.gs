// À coller dans l'éditeur Apps Script d'une Google Sheet (Extensions > Apps
// Script), puis déployer comme application web. Voir README.md pour les
// étapes complètes.
//
// Structure attendue sur la 1ère feuille (1 ligne d'en-tête) :
//   Colonne A : Code        — le code d'accès (texte)
//   Colonne B : Origine     — "payant" ou "ancien client", libre, pour ton suivi
//   Colonne C : Actif       — laisse vide ou VRAI/TRUE = actif ; FALSE = désactivé
//   Colonne D : Notes       — libre (nom du client, date d'envoi...), jamais renvoyé au site
//
// Ajoute/retire des lignes directement dans la Sheet, aucun redéploiement
// n'est nécessaire pour que le site voie le changement.

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  var requestedCode = (e.parameter.code || '').toString().trim().toLowerCase();
  var result = { valid: false };

  if (requestedCode) {
    for (var i = 1; i < data.length; i++) {
      var rowCode = (data[i][0] || '').toString().trim().toLowerCase();
      if (rowCode && rowCode === requestedCode) {
        var actif = data[i][2];
        var isActive = actif === '' || actif === undefined || actif === true ||
          String(actif).toUpperCase() === 'TRUE' || String(actif).toUpperCase() === 'VRAI';
        if (isActive) {
          result = { valid: true, origin: data[i][1] || '' };
        }
        break;
      }
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
