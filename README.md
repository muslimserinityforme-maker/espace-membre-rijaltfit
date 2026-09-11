# Espace Membre — Rijal Fit (offre Starter + Programme Premium)

Site statique + fonctions serverless, sur le même modèle que
`bilan-sens-rijalfit/` : pas de compte, pas de base de données classique,
pas d'usine à gaz.

## Parcours

1. **`index.html`** — page d'entrée, demande juste un code d'accès.
2. Le code est vérifié **côté serveur** (`api/verify-code.js`, une fonction
   Vercel) contre une liste stockée dans une Google Sheet — jamais un check
   en JS visible côté client. Matthieu ajoute/retire des codes directement
   dans la Sheet, sans redéploiement.
3. Une fois validé, l'accès est mémorisé dans le navigateur (`localStorage`)
   pour ne pas avoir à retaper le code à chaque visite — **`espace.html`**
   est le tableau de bord : sidebar avec les 5 modules (dépliables en
   niveaux, façon plateforme de formation classique), panneau principal avec
   la vidéo + le texte du niveau sélectionné, cercle de progression global
   en haut, et un bouton "Marquer comme terminé" par niveau (état mémorisé
   en `localStorage`, pas de compte donc pas de suivi centralisé côté
   Matthieu — chaque appareil a sa propre progression).
4. **`programme.html`** — Programme jour par jour (730 jours = 2x 365),
   réservé à la formule Premium (1 980€). Les clients Starter voient les
   onglets mais verrouillés (effet incitatif à l'upgrade). Un bot Telegram
   envoie chaque jour le lien du jour qui vient de se débloquer.

## Les deux types de codes (Starter)

Un seul et même type de code techniquement — juste une colonne "Origine"
(`payant` / `ancien client`) dans la Sheet pour le suivi de Matthieu. Les
codes sont distribués manuellement (après paiement, ou à un ancien client),
pas de Stripe automatique pour l'instant.

## Le Programme jour par jour (Premium)

- Réservé aux codes marqués `Formule = Premium` dans la Sheet.
- Le jour débloqué se calcule à partir de `DateDebut` (date du 1er paiement,
  saisie manuelle par Matthieu) : jour 1 le jour même, +1 jour chaque jour.
- Les jours 1 à 90 sont inclus. Au-delà, il faut que Matthieu coche
  `AccesEtendu` dans la Sheet (palier manuel à 200€/mois) pour continuer à
  débloquer les jours suivants, jusqu'au jour 730.
- Notifications **Telegram uniquement** (pas WhatsApp) : le client associe
  son compte au bot en lui envoyant `/start SON-CODE`, puis reçoit chaque
  jour un message avec le lien du nouveau jour débloqué.

## Structure

```
index.html                    → page d'entrée : code d'accès
espace.html                   → tableau de bord : sidebar 5 modules + progression + validation
modules-data.js               → contenu des 5 modules (RF_MODULES à remplir progressivement)
programme.html                → Programme jour par jour (Premium), sidebar Semaines/Jours
jours-data.js                 → contenu des jours (RF_JOURS_OVERRIDES à remplir progressivement)
style.css                     → design Rijal Fit (kaki/or/beige/noir, Rajdhani/Inter)
auth.js                       → mémorisation de l'accès + redirection si non connecté
api/verify-code.js            → fonction serverless : vérifie le code contre la Google Sheet
api/telegram-webhook.js       → reçoit les messages du bot Telegram, associe le compte au code
api/send-daily-telegram.js    → tâche quotidienne (Vercel Cron) : envoie le lien du jour
google-apps-script/Code.gs    → script à coller dans la Google Sheet (lecture + écriture)
vercel.json                   → configuration du Cron quotidien
```

## Mise en route

### 1. Créer la Google Sheet des codes d'accès

1. Crée une nouvelle Google Sheet (sheets.new).
2. Ajoute une ligne d'en-tête : `Code | Origine | Actif | Formule | DateDebut | AccesEtendu | TelegramChatId | Notes`.
3. Ajoute une ligne par code, par ex :
   - Starter : `RIJAL-LOIC-980 | payant | | Starter | | | | Loïc, payé le 12/09`
   - Premium : `RIJAL-ADEM-1980 | payant | | Premium | 2026-09-10 | | | Adem, démarré le 10/09`
   - Laisse `Actif` vide (= actif) ou mets `FALSE` pour désactiver un code sans le supprimer.
   - `DateDebut` au format `AAAA-MM-JJ` — uniquement pour les codes Premium.
   - `AccesEtendu` : laisse vide jusqu'au palier 200€/mois, puis mets `TRUE`.
   - `TelegramChatId` : ne pas remplir à la main, le bot s'en charge.
4. Menu **Extensions → Apps Script**.
5. Supprime le code par défaut et colle le contenu de
   [`google-apps-script/Code.gs`](google-apps-script/Code.gs).
6. **Déployer → Nouveau déploiement** → type **Application web** — Exécuter
   en tant que **Moi**, Qui a accès : **Tout le monde**.
7. Autorise l'accès (c'est ton propre script).
8. Copie l'URL donnée à la fin (`https://script.google.com/macros/s/.../exec`).

### 2. Créer le bot Telegram

1. Ouvre Telegram, cherche **@BotFather**, envoie `/newbot`, suis les
   instructions (nom + identifiant se terminant par `bot`).
2. BotFather te donne un **token** (ex : `123456:ABC-DEF...`) — garde-le, il
   ira dans les variables d'environnement Vercel à l'étape suivante.
3. Une fois le site déployé sur Vercel (étape 3), active le webhook en
   ouvrant cette URL dans un navigateur (remplace `<TOKEN>` et `<SITE>`) :
   `https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<SITE>.vercel.app/api/telegram-webhook`

### 3. Déployer sur Vercel

1. Crée un nouveau repo GitHub (ex : `espace-membre-rijalfit`) et pousse ce projet.
2. Importe le repo dans Vercel.
3. Dans **Vercel → Settings → Environment Variables**, ajoute :
   - `GOOGLE_SHEETS_WEBHOOK_URL` = l'URL copiée à l'étape 1 (obligatoire).
   - `TELEGRAM_BOT_TOKEN` = le token donné par BotFather (obligatoire pour le Programme).
   - `CRON_SECRET` = une chaîne aléatoire au choix (protège la tâche quotidienne
     contre un déclenchement non désiré — Vercel l'envoie automatiquement).
   - `SITE_URL` = l'URL finale du site (ex : `https://espace-membre-rijalfit.vercel.app`),
     utilisée dans les liens envoyés par Telegram.
4. Le fichier `vercel.json` déclenche automatiquement `api/send-daily-telegram`
   une fois par jour — rien à configurer en plus (disponible sur le plan Hobby).

### 4. Tester

- Ouvre le site, entre un code présent dans la Sheet → doit débloquer l'espace membre.
- Entre un code inexistant → message "Code invalide".
- Recharge la page → l'accès doit rester mémorisé (pas besoin de retaper le code).
- Vérifie que chaque module s'ouvre et que les vidéos YouTube (non listées)
  se lisent correctement.
- Avec un code Premium : ouvre `programme.html`, vérifie que les bons jours
  sont débloqués selon `DateDebut`.
- Envoie `/start TON-CODE` au bot Telegram → doit confirmer l'activation et
  remplir `TelegramChatId` dans la Sheet.
- Attends le déclenchement du Cron (ou appelle `/api/send-daily-telegram`
  manuellement avec le bon header `Authorization: Bearer <CRON_SECRET>`) →
  doit recevoir le lien du jour sur Telegram.

## Ajouter le contenu des modules

Édite `modules-data.js`, tableau `RF_MODULES` : chaque module a un tableau
`niveaux`, chaque niveau a `titre`, `videoId` (l'ID de la vidéo YouTube non
listée, ou `null` tant qu'il n'y en a pas) et `texte`. Pas de build, pas de
CMS — édition directe du fichier. Le nombre de niveaux par module peut
changer librement (ajoute/retire des entrées dans le tableau).

## Ajouter le contenu des jours (Programme Premium)

Édite `jours-data.js`, objet `RF_JOURS_OVERRIDES` : une entrée par jour
(`titre`, `videoId`, `texte`). Tout jour non renseigné affiche un
placeholder "Contenu à venir" — pas besoin de tout remplir d'un coup, comme
pour les modules.

## Distribution des codes

Manuelle, hors de ce projet : Matthieu envoie le code par email/message après
paiement, ou à un ancien client en compensation. Rien à faire côté site —
juste ajouter la ligne dans la Google Sheet.
