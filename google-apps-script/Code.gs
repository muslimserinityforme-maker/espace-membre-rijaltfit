// À coller dans l'éditeur Apps Script d'une Google Sheet (Extensions > Apps
// Script), puis déployer comme application web. Voir README.md pour les
// étapes complètes.
//
// Structure attendue sur la 1ère feuille (1 ligne d'en-tête) :
//   Colonne A : Code            — le code d'accès (texte)
//   Colonne B : Origine         — "payant" ou "ancien client", libre, pour ton suivi
//   Colonne C : Actif           — laisse vide ou VRAI/TRUE = actif ; FALSE = désactivé
//   Colonne D : Formule         — "QIYAM", "THABIT" ou "RIJAL" (les 3 ont l'accompagnement jour par jour ;
//                                 RIJAL : 2 ans inclus ; QIYAM et THABIT : 3 mois, puis AccesEtendu)
//   Colonne E : DateDebut       — date de 1er paiement, au format AAAA-MM-JJ (THABIT/RIJAL uniquement,
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
var COL_NOTES = 7;

// « Je redémarre » : possible à partir du jour 183 (6 mois écoulés), pour RIJAL
// ou un membre dont l'accès est prolongé (AccesEtendu). Doit rester cohérent
// avec RESTART_JOUR dans programme.html.
var RESTART_JOUR = 182;

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

// Paliers cumulatifs, doit rester cohérent avec RF_FORMULE_RANK dans auth.js.
var FORMULE_RANK = { qiyam: 1, thabit: 2, rijal: 3 };
function formuleGivesProgramme(formule) {
  // Les 3 formules (QIYAM, THABIT, RIJAL) ont l'accompagnement jour par jour.
  return true;
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
      var formule = (data[i][COL_FORMULE] || '').toString().trim();
      var chatId = (data[i][COL_TELEGRAM_CHAT_ID] || '').toString().trim();
      var dateDebut = dateToIso(data[i][COL_DATE_DEBUT]);
      if (formuleGivesProgramme(formule) && chatId && dateDebut) {
        rows.push({
          code: data[i][COL_CODE],
          chatId: chatId,
          dateDebut: dateDebut,
          accesEtendu: isChecked(data[i][COL_ACCES_ETENDU]),
          formule: formule,
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
            formule: data[j][COL_FORMULE] || 'QIYAM',
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

  // Utilisé par api/restart-coaching.js : le membre relance son accompagnement
  // à zéro (la date de début devient aujourd'hui). Éligibilité revérifiée ici.
  if (body.action === 'restart-coaching') {
    var sheetR = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var dataR = sheetR.getDataRange().getValues();
    var codeR = (body.code || '').toString().trim().toLowerCase();
    var tz = Session.getScriptTimeZone();

    for (var r = 1; r < dataR.length; r++) {
      var rc = (dataR[r][COL_CODE] || '').toString().trim().toLowerCase();
      if (!rc || rc !== codeR) continue;
      if (!isActiveDefaultTrue(dataR[r][COL_ACTIF])) return jsonOut({ ok: false, error: 'code inactif' });

      var debutIso = dateToIso(dataR[r][COL_DATE_DEBUT]);
      if (!debutIso) return jsonOut({ ok: false, error: 'pas de date de début' });

      var isRijal = (dataR[r][COL_FORMULE] || '').toString().trim().toLowerCase() === 'rijal';
      if (!isRijal && !isChecked(dataR[r][COL_ACCES_ETENDU])) return jsonOut({ ok: false, error: 'accès non prolongé' });

      var debut = new Date(debutIso + 'T00:00:00');
      var jour = Math.floor((new Date().getTime() - debut.getTime()) / 86400000) + 1;
      if (jour <= RESTART_JOUR) return jsonOut({ ok: false, error: 'trop tôt' });

      var today = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd');
      sheetR.getRange(r + 1, COL_DATE_DEBUT + 1).setValue(today);
      var oldNote = (dataR[r][COL_NOTES] || '').toString();
      sheetR.getRange(r + 1, COL_NOTES + 1).setValue((oldNote ? oldNote + ' | ' : '') + 'Redémarrage le ' + today + ' (début précédent : ' + debutIso + ')');
      return jsonOut({ ok: true, dateDebut: today });
    }
    return jsonOut({ ok: false, error: 'code introuvable' });
  }

  return jsonOut({ ok: false, error: 'action inconnue' });
}
