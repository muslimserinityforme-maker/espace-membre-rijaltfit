# Espace Membre — Rijal Fit (offre Starter)

Site statique + une fonction serverless, sur le même modèle que
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
   affiche les 5 modules.
4. Chaque module (`module-*.html`) affiche ses niveaux : vidéo(s) YouTube non
   listées intégrées + texte du niveau.

## Les deux types de codes

Un seul et même type de code techniquement — juste une colonne "Origine"
(`payant` / `ancien client`) dans la Sheet pour le suivi de Matthieu. Les
codes sont distribués manuellement (après paiement, ou à un ancien client),
pas de Stripe automatique pour l'instant.

## Structure

```
index.html                    → page d'entrée : code d'accès
espace.html                   → dashboard : liste des 5 modules
module-motive-forme.html      → module 1
module-nutri-forme.html       → module 2
module-depasse-forme.html     → module 3
module-hygiene-forme.html     → module 4
module-ramadan-forme.html     → module 5
style.css                     → design Rijal Fit (kaki/or/beige/noir, Rajdhani/Inter)
auth.js                       → mémorisation de l'accès + redirection si non connecté
api/verify-code.js            → fonction serverless : vérifie le code contre la Google Sheet
google-apps-script/Code.gs    → script à coller dans une Google Sheet pour servir la liste des codes
```

## Mise en route

### 1. Créer la Google Sheet des codes d'accès

1. Crée une nouvelle Google Sheet (sheets.new).
2. Ajoute une ligne d'en-tête : `Code | Origine | Actif | Notes`.
3. Ajoute une ligne par code (ex : `RIJAL-LOIC-980 | payant | | Loïc, payé le 12/09`).
   Laisse `Actif` vide (= actif) ou mets `FALSE` pour désactiver un code sans
   le supprimer.
4. Menu **Extensions → Apps Script**.
5. Supprime le code par défaut et colle le contenu de
   [`google-apps-script/Code.gs`](google-apps-script/Code.gs).
6. **Déployer → Nouveau déploiement** → type **Application web** — Exécuter
   en tant que **Moi**, Qui a accès : **Tout le monde**.
7. Autorise l'accès (c'est ton propre script).
8. Copie l'URL donnée à la fin (`https://script.google.com/macros/s/.../exec`).

### 2. Déployer sur Vercel

1. Crée un nouveau repo GitHub (ex : `espace-membre-rijalfit`) et pousse ce projet.
2. Importe le repo dans Vercel.
3. Dans **Vercel → Settings → Environment Variables**, ajoute :
   - `GOOGLE_SHEETS_WEBHOOK_URL` = l'URL copiée à l'étape 1 (obligatoire).

### 3. Tester

- Ouvre le site, entre un code présent dans la Sheet → doit débloquer l'espace membre.
- Entre un code inexistant → message "Code invalide".
- Recharge la page → l'accès doit rester mémorisé (pas besoin de retaper le code).
- Vérifie que chaque module s'ouvre et que les vidéos YouTube (non listées)
  se lisent correctement.

## Ajouter le contenu des modules

Chaque page `module-*.html` contient des sections `.niveau` prêtes à
dupliquer : un titre, un bloc `.video-embed` (iframe YouTube, remplacer
`ID_VIDEO_ICI` par l'ID de la vidéo non listée) et un bloc `.niveau__text`
pour le texte. Pas de build, pas de CMS — édition directe du HTML.

## Distribution des codes

Manuelle, hors de ce projet : Matthieu envoie le code par email/message après
paiement, ou à un ancien client en compensation. Rien à faire côté site —
juste ajouter la ligne dans la Google Sheet.
