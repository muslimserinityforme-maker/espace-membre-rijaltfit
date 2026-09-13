# Espace Membre — Rijal Fit (paliers QIYAM / THĀBIT / RIJAL)

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
   est le tableau de bord : sidebar avec les 6 modules (dépliables en
   niveaux, façon plateforme de formation classique), panneau principal avec
   la vidéo + le texte du niveau sélectionné, cercle de progression global
   en haut, et un bouton "Marquer comme terminé" par niveau (état mémorisé
   en `localStorage`, pas de compte donc pas de suivi centralisé côté
   Matthieu — chaque appareil a sa propre progression).
4. **`programme.html`** — Programme jour par jour (730 jours = 2x 365),
   réservé aux formules THĀBIT et RIJAL. Les clients QIYAM voient l'onglet
   mais verrouillé (effet incitatif à l'upgrade). Un bot Telegram envoie
   chaque jour le lien du jour qui vient de se débloquer.

## Les 3 paliers (QIYAM / THĀBIT / RIJAL)

Un seul et même type de code techniquement — la colonne "Formule" dans la
Sheet détermine le palier (`QIYAM`, `THABIT` ou `RIJAL`, cumulatifs), et une
colonne "Origine" (`payant` / `ancien client`) sert juste au suivi de
Matthieu. Les codes sont distribués manuellement (après paiement, ou à un
ancien client), pas de Stripe automatique pour l'instant.

- **QIYAM** (980€) : tous les modules dès le départ, mais certains
  niveaux/vidéos à l'intérieur des modules (hors Introduction) sont
  verrouillés — marqués `minFormule: 'thabit'` ou `'rijal'` dans
  `modules-data.js`. Pas d'accès au Programme jour par jour.
- **THĀBIT** (1980€) : tout QIYAM + les niveaux marqués `minFormule:
  'thabit'` + le Programme jour par jour.
- **RIJAL** (3000€) : tout THĀBIT + les niveaux marqués `minFormule:
  'rijal'` + l'accompagnement maison (hors périmètre du site pour l'instant).

Un client QIYAM qui règle la différence pour passer à THĀBIT (ou THĀBIT →
RIJAL) : Matthieu change simplement la valeur `Formule` sur sa ligne dans la
Sheet, aucune action technique de plus — le site relit la formule à jour à
chaque connexion.

## Le Programme jour par jour (THĀBIT / RIJAL)

- Réservé aux codes marqués `Formule = THABIT` ou `Formule = RIJAL` dans la
  Sheet.
- Le jour débloqué se calcule à partir de `DateDebut` (date du 1er paiement,
  saisie manuelle par Matthieu) : jour 1 le jour même, +1 jour chaque jour.
- Les jours 1 à 90 sont inclus. Au-delà, il faut que Matthieu coche
  `AccesEtendu` dans la Sheet (palier manuel à 200€/mois) pour continuer à
  débloquer les jours suivants, jusqu'au jour 730.
- Notifications **Telegram uniquement** (pas WhatsApp) : le client associe
  son compte au bot en lui envoyant `/start SON-CODE`, puis reçoit chaque
  jour un message avec le lien du nouveau jour débloqué.

## Ton application F.A.C.I.L.E. (analyse photo des repas)

Dans le module Introduction : le membre prend/importe une photo de son
repas, l'IA (Gemini, gratuit) l'analyse selon la Méthode F.A.C.I.L.E. et son
protocole nutritionnel personnel, puis il peut l'ajouter à sa journée.

- Nécessite d'avoir complété **"Ton protocole nutrition"** au préalable
  (c'est ce qui calcule et enregistre côté serveur le protocole, les
  calories et macros journalières du membre).
- Le **code d'accès sert d'identifiant** (pas de vrais comptes, cohérent
  avec le reste du site) — un code partagé entre deux personnes partagerait
  aussi le même historique de repas.
- La Méthode F.A.C.I.L.E. complète (`api/_lib/facile-method.js`) et l'appel
  à Gemini restent **entièrement côté serveur** — jamais envoyés au
  navigateur, jamais falsifiables par le client.
- Base de données + stockage des photos : **Supabase** (gratuit). Tables
  `nutrition_profiles` et `repas`, RLS activé sans règle (= accessible
  uniquement via la clé secrète serveur), bucket de stockage privé
  `repas-photos`.
- Coût : Supabase et Gemini ont un vrai tier gratuit, suffisant à l'échelle
  du projet — aucun budget nécessaire pour démarrer. Si le volume grandit
  un jour, surveiller les quotas dans les deux tableaux de bord.

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
nutrition-protocol.js         → bilan + calcul calories/macros + protocole (persisté côté serveur)
facile-app.js                 → interface "Ton application F.A.C.I.L.E." (prise de photo, résultats, historique)
api/_lib/facile-method.js     → base centrale de la Méthode F.A.C.I.L.E. (côté serveur uniquement)
api/_lib/supabase.js          → client Supabase partagé (clé secrète, côté serveur uniquement)
api/save-nutrition-profile.js → enregistre le profil nutritionnel calculé (Supabase)
api/analyze-meal.js           → appelle Gemini pour analyser une photo de repas
api/meals.js                  → historique des repas du jour (ajouter/lister/supprimer)
```

## Mise en route

### 1. Créer la Google Sheet des codes d'accès

1. Crée une nouvelle Google Sheet (sheets.new).
2. Ajoute une ligne d'en-tête : `Code | Origine | Actif | Formule | DateDebut | AccesEtendu | TelegramChatId | Notes`.
3. Ajoute une ligne par code, par ex :
   - QIYAM : `RIJAL-LOIC-980 | payant | | QIYAM | | | | Loïc, payé le 12/09`
   - THĀBIT : `RIJAL-ADEM-1980 | payant | | THABIT | 2026-09-10 | | | Adem, démarré le 10/09`
   - RIJAL : `RIJAL-SAMI-3000 | payant | | RIJAL | 2026-09-10 | | | Sami, démarré le 10/09`
   - Laisse `Actif` vide (= actif) ou mets `FALSE` pour désactiver un code sans le supprimer.
   - `DateDebut` au format `AAAA-MM-JJ` — uniquement pour les codes THĀBIT/RIJAL.
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

### 3. Créer le projet Supabase (F.A.C.I.L.E.)

1. Va sur [supabase.com](https://supabase.com), connecte-toi (GitHub), crée
   une organisation puis un nouveau projet (région Europe).
2. Dans **SQL Editor**, exécute :

```sql
create table nutrition_profiles (
  code text primary key,
  age integer,
  poids numeric,
  taille numeric,
  taux_masse_grasse numeric,
  protocol_id text,
  objectif_id text,
  niveau_activite text,
  calories_jour integer,
  proteines_g integer,
  glucides_g integer,
  lipides_g integer,
  updated_at timestamptz default now()
);

create table repas (
  id uuid primary key default gen_random_uuid(),
  code text not null,
  created_at timestamptz default now(),
  photo_path text,
  aliments jsonb,
  calories_min numeric,
  calories_max numeric,
  proteines_g numeric,
  glucides_g numeric,
  lipides_g numeric,
  analyse_facile jsonb,
  conseil text,
  quantites_connues jsonb,
  methode_version text,
  note_contexte text
);

alter table nutrition_profiles enable row level security;
alter table repas enable row level security;
```

3. Dans **Storage**, crée un bucket **`repas-photos`** en **Private**
   (ne pas cocher "Public bucket").
4. Dans **Project Settings → API Keys**, copie l'URL du projet et la
   **Secret key** (`sb_secret_...`) — jamais la "Publishable key".

### 4. Créer la clé Gemini (analyse photo, gratuit)

1. Va sur [aistudio.google.com/apikey](https://aistudio.google.com/apikey).
2. Crée une clé API (un projet Google Cloud est créé automatiquement si tu
   n'en as pas). En cas d'erreur "suspicious request" au moment de la
   création du projet ou de la clé, réessaie après quelques minutes, ou
   passe par [console.cloud.google.com](https://console.cloud.google.com) →
   active manuellement l'API "Generative Language API" → Identifiants →
   Créer des identifiants → Clé API (compte de service créé automatiquement).
3. Copie la clé générée.

### 5. Déployer sur Vercel

1. Crée un nouveau repo GitHub (ex : `espace-membre-rijalfit`) et pousse ce projet.
2. Importe le repo dans Vercel.
3. Dans **Vercel → Settings → Environment Variables**, ajoute :
   - `GOOGLE_SHEETS_WEBHOOK_URL` = l'URL copiée à l'étape 1 (obligatoire).
   - `TELEGRAM_BOT_TOKEN` = le token donné par BotFather (obligatoire pour le Programme).
   - `CRON_SECRET` = une chaîne aléatoire au choix (protège la tâche quotidienne
     contre un déclenchement non désiré — Vercel l'envoie automatiquement).
   - `SITE_URL` = l'URL finale du site (ex : `https://espace-membre-rijalfit.vercel.app`),
     utilisée dans les liens envoyés par Telegram.
   - `SUPABASE_URL` et `SUPABASE_SECRET_KEY` = les valeurs copiées à l'étape 3.
   - `GEMINI_API_KEY` = la clé copiée à l'étape 4.
4. Le fichier `vercel.json` déclenche automatiquement `api/send-daily-telegram`
   une fois par jour — rien à configurer en plus (disponible sur le plan Hobby).

### 6. Tester

- Ouvre le site, entre un code présent dans la Sheet → doit débloquer l'espace membre.
- Entre un code inexistant → message "Code invalide".
- Recharge la page → l'accès doit rester mémorisé (pas besoin de retaper le code).
- Vérifie que chaque module s'ouvre et que les vidéos YouTube (non listées)
  se lisent correctement.
- Avec un code THĀBIT ou RIJAL : ouvre `programme.html`, vérifie que les
  bons jours sont débloqués selon `DateDebut`.
- Avec un code QIYAM : vérifie qu'un niveau marqué `minFormule: 'thabit'`
  (ex. Motive-Forme, niveau 2) s'affiche verrouillé avec un cadenas.
- Envoie `/start TON-CODE` au bot Telegram → doit confirmer l'activation et
  remplir `TelegramChatId` dans la Sheet.
- Attends le déclenchement du Cron (ou appelle `/api/send-daily-telegram`
  manuellement avec le bon header `Authorization: Bearer <CRON_SECRET>`) →
  doit recevoir le lien du jour sur Telegram.
- Complète "Ton protocole nutrition" en entier (jusqu'au choix de
  l'objectif) → va dans "Ton application F.A.C.I.L.E.", prends/importe une
  photo de repas, clique "Analyser mon assiette" → doit renvoyer une
  analyse. Clique "Ajouter à ma journée" → doit apparaître dans "Aujourd'hui".

## Ajouter le contenu des modules

Édite `modules-data.js`, tableau `RF_MODULES` : chaque module a un tableau
`niveaux`, chaque niveau a `titre`, `videoId` (l'ID de la vidéo YouTube non
listée, ou `null` tant qu'il n'y en a pas) et `texte`. Pas de build, pas de
CMS — édition directe du fichier. Le nombre de niveaux par module peut
changer librement (ajoute/retire des entrées dans le tableau).

Pour réserver un niveau à un palier supérieur (hors module Introduction, qui
reste entièrement accessible dès QIYAM), ajoute `minFormule: 'thabit'` ou
`minFormule: 'rijal'` sur ce niveau — il s'affichera verrouillé (cadenas)
pour les membres qui n'ont pas ce palier ou un palier supérieur.

## Ajouter le contenu des jours (Programme THĀBIT/RIJAL)

Édite `jours-data.js`, objet `RF_JOURS_OVERRIDES` : une entrée par jour
(`titre`, `videoId`, `texte`). Tout jour non renseigné affiche un
placeholder "Contenu à venir" — pas besoin de tout remplir d'un coup, comme
pour les modules.

## Distribution des codes

Manuelle, hors de ce projet : Matthieu envoie le code par email/message après
paiement, ou à un ancien client en compensation. Rien à faire côté site —
juste ajouter la ligne dans la Google Sheet.
