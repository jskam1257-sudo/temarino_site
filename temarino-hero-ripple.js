document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".hero-photo-wrap");

  if (!wrap) return;

  wrap.querySelectorAll(".hero-wave").forEach((el) => el.remove());

  for (let i = 0; i < 4; i++) {
    const wave = document.createElement("span");

    wave.classList.add("hero-wave");

    wave.style.animationDelay = `${i * 4.5}s`;

    wrap.prepend(wave);
  }
});
