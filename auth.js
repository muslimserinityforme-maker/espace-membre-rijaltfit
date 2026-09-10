// Gestion de l'accès côté navigateur — le VRAI contrôle (est-ce que ce code
// existe dans la Google Sheet) se fait côté serveur dans /api/verify-code.
// Ici on ne fait que mémoriser le résultat pour éviter de retaper le code à
// chaque page, et rediriger vers l'accueil si rien n'est mémorisé.

const RF_STORAGE_KEY = 'rf_espace_membre_access';

function rfGetAccess() {
  try {
    const raw = localStorage.getItem(RF_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

function rfGrantAccess(code, origin) {
  try {
    localStorage.setItem(RF_STORAGE_KEY, JSON.stringify({
      code,
      origin: origin || null,
      grantedAt: new Date().toISOString(),
    }));
  } catch (err) {
    // localStorage indisponible (navigation privée stricte, etc.) — tant pis,
    // l'utilisateur devra retaper son code à la prochaine visite.
  }
}

function rfClearAccess() {
  try {
    localStorage.removeItem(RF_STORAGE_KEY);
  } catch (err) {
    // rien à faire
  }
}

// Appelé en tout début de page sur espace.html et chaque page module —
// redirige immédiatement vers l'accueil si aucun accès n'est mémorisé.
function rfRequireAccess() {
  const access = rfGetAccess();
  if (!access || !access.code) {
    window.location.replace('index.html');
  }
  return access;
}
