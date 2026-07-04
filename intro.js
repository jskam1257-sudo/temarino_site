const FADE_START_MS = 5000;
const REDIRECT_MS = 6500;
const HOME_URL = "index.html";
const INTRO_SEEN_KEY = "temarinoIntroSeen";
const MOBILE_QUERY = "(max-width: 767px)";

const introCopy = document.querySelector(".intro-copy span");
const mobileMedia = window.matchMedia(MOBILE_QUERY);

if (introCopy) {
  const originalCopy = introCopy.textContent.trim();

  const renderIntroCopy = () => {
    if (!mobileMedia.matches) {
      introCopy.textContent = originalCopy;
      return;
    }

    introCopy.replaceChildren(
      ...originalCopy.split(/(?<=[、。])/u).flatMap((part, index, parts) => {
        if (!part) {
          return [];
        }

        const nodes = [document.createTextNode(part)];
        if (index < parts.length - 1) {
          nodes.push(document.createElement("br"));
        }
        return nodes;
      }),
    );
  };

  renderIntroCopy();
  mobileMedia.addEventListener("change", renderIntroCopy);
}

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
