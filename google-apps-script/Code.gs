// À coller dans l'éditeur Apps Script d'une Google Sheet (Extensions > Apps
// Script), puis déployer comme application web. Voir README.md pour les
// étapes complètes.
//
// Structure attendue sur la 1ère feuille (1 ligne d'en-tête) :
//   Colonne A : Code            — le code d'accès (texte)
//   Colonne B : Origine         — "payant" ou "ancien client", libre, pour ton suivi
//   Colonne C : Actif           — laisse vide ou VRAI/TRUE = actif ; FALSE = désactivé
//   Colonne D : Formule         — "Starter" ou "Premium" (détermine l'accès au Programme jour par jour)
//   Colonne E : DateDebut       — date de 1er paiement, au format AAAA-MM-JJ (Premium uniquement,
//                                 saisie manuelle par toi au moment où tu crées le code)
//   Colonne F : AccesEtendu     — laisse vide/FALSE jusqu'au jour 90, coche VRAI/TRUE quand le
//                                 client paie le palier 200€/mois pour continuer au-delà
//   Colonne G : TelegramChatId  — remplie automatiquement par le bot Telegram, ne pas toucher
//   Colonne H : Notes           — libre (nom du client, date d'envoi...), jamais renvoyé au site
//
// Ajoute/retire des lignes directement dans la Sheet, aucun redéploiement
// n'est nécessaire pour que le site voie le changement.

var COL_CODE = 0;
var COL_ORIGINE = 1;
var COL_ACTIF = 2;
var COL_FORMULE = 3;
var COL_DATE_DEBUT = 4;
var COL_ACCES_ETENDU = 5;
var COL_TELEGRAM_CHAT_ID = 6;

// "Actif" : une case vide compte comme active (pour ne pas avoir à cocher
// chaque ligne manuellement) — seul un FALSE explicite désactive.
function isActiveDefaultTrue(v) {
  return v === '' || v === undefined || v === true ||
    String(v).toUpperCase() === 'TRUE' || String(v).toUpperCase() === 'VRAI';
}

// "AccesEtendu" : à l'inverse, une case vide compte comme non cochée.
function isChecked(v) {
  return v === true || String(v).toUpperCase() === 'TRUE' || String(v).toUpperCase() === 'VRAI';
}

function dateToIso(v) {
  if (!v) return null;
  if (v instanceof Date) {
    return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  }
  return String(v).trim();
}

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var action = (e.parameter.action || 'verify').toString();

  // Utilisé par la tâche quotidienne (api/send-daily-telegram.js) pour
  // savoir à qui envoyer le lien du jour.
  if (action === 'list-active-premium') {
    var rows = [];
    for (var i = 1; i < data.length; i++) {
      var formule = (data[i][COL_FORMULE] || '').toString().trim().toLowerCase();
      var chatId = (data[i][COL_TELEGRAM_CHAT_ID] || '').toString().trim();
      var dateDebut = dateToIso(data[i][COL_DATE_DEBUT]);
      if (formule === 'premium' && chatId && dateDebut) {
        rows.push({
          code: data[i][COL_CODE],
          chatId: chatId,
          dateDebut: dateDebut,
          accesEtendu: isChecked(data[i][COL_ACCES_ETENDU]),
        });
      }
    }
    return jsonOut({ rows: rows });
  }

  // action === 'verify' (par défaut) — utilisé par api/verify-code.js
  var requestedCode = (e.parameter.code || '').toString().trim().toLowerCase();
  var result = { valid: false };

  if (requestedCode) {
    for (var j = 1; j < data.length; j++) {
      var rowCode = (data[j][COL_CODE] || '').toString().trim().toLowerCase();
      if (rowCode && rowCode === requestedCode) {
        if (isActiveDefaultTrue(data[j][COL_ACTIF])) {
          result = {
            valid: true,
            origin: data[j][COL_ORIGINE] || '',
            formule: data[j][COL_FORMULE] || 'Starter',
            dateDebut: dateToIso(data[j][COL_DATE_DEBUT]),
            accesEtendu: isChecked(data[j][COL_ACCES_ETENDU]),
          };
        }
        break;
      }
    }
  }

  return jsonOut(result);
}

// Utilisé par le webhook Telegram (api/telegram-webhook.js) pour relier le
// compte Telegram d'un client à son code d'accès une fois qu'il a envoyé
// "/start SON-CODE" au bot.
function doPost(e) {
  var body = JSON.parse(e.postData.contents);

  if (body.action === 'link-telegram') {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var code = (body.code || '').toString().trim().toLowerCase();
    var chatId = (body.chatId || '').toString().trim();

    for (var i = 1; i < data.length; i++) {
      var rowCode = (data[i][COL_CODE] || '').toString().trim().toLowerCase();
      if (rowCode && rowCode === code) {
        sheet.getRange(i + 1, COL_TELEGRAM_CHAT_ID + 1).setValue(chatId);
        return jsonOut({ ok: true });
      }
    }
    return jsonOut({ ok: false, error: 'code introuvable' });
  }

  return jsonOut({ ok: false, error: 'action inconnue' });
}
