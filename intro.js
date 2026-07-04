const FADE_START_MS = 5000;
const REDIRECT_MS = 6500;
const HOME_URL = "index.html";
const INTRO_SEEN_KEY = "temarinoIntroSeen";

setTimeout(() => {
  const intro = document.querySelector(".intro-page");

  if (intro) {
    intro.classList.add("fadeout");
  }
}, FADE_START_MS);

setTimeout(() => {
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch (error) {
    // Continue to home even if browser storage is unavailable.
  }

  window.location.replace(HOME_URL);
}, REDIRECT_MS);
