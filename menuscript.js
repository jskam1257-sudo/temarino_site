document.addEventListener("DOMContentLoaded", () => {
  const books = document.querySelectorAll("[data-book]");

  books.forEach((book) => {
    const front = book.querySelector(".tm-front");
    const nextButton = book.querySelector('[data-flip="next"]');
    const backButton = book.querySelector('[data-flip="back"]');

    let progress = book.classList.contains("is-flipped") ? 1 : 0;
    let target = progress;
    let dragging = false;
    let startX = 0;
    let startProgress = 0;
    let animationId = null;

    const setProgress = (value) => {
      progress = Math.max(0, Math.min(1, value));
      book.style.setProperty("--flip-progress", progress);
    };

    const animateTo = (value) => {
      target = value;
      cancelAnimationFrame(animationId);

      const step = () => {
        const diff = target - progress;
        setProgress(progress + diff * 0.12);

        if (Math.abs(diff) > 0.002) {
          animationId = requestAnimationFrame(step);
        } else {
          setProgress(target);

          if (target === 1) {
            book.classList.add("is-flipped");
          } else {
            book.classList.remove("is-flipped");
          }
        }
      };

      step();
    };

    nextButton?.addEventListener("click", (e) => {
      e.preventDefault();
      animateTo(1);
    });

    backButton?.addEventListener("click", (e) => {
      e.preventDefault();
      animateTo(0);
    });

    front?.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button, a")) return;

      dragging = true;
      startX = e.clientX;
      startProgress = progress;
      front.setPointerCapture(e.pointerId);
      cancelAnimationFrame(animationId);
    });

    front?.addEventListener("pointermove", (e) => {
      if (!dragging) return;

      const distance = startX - e.clientX;
      const width = front.offsetWidth || 1;
      const nextProgress = startProgress + distance / width;

      setProgress(nextProgress);
    });

    front?.addEventListener("pointerup", () => {
      if (!dragging) return;

      dragging = false;

      if (progress > 0.45) {
        animateTo(1);
      } else {
        animateTo(0);
      }
    });

    front?.addEventListener("pointercancel", () => {
      dragging = false;
      animateTo(progress > 0.45 ? 1 : 0);
    });

    setProgress(progress);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tm-book").forEach((book) => {
    book.querySelectorAll("[data-flip]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.flip === "next") {
          book.classList.add("is-flipped");
        }

        if (button.dataset.flip === "prev") {
          book.classList.remove("is-flipped");
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tm-book").forEach((book) => {
    book.querySelectorAll("[data-flip]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.flip === "next") {
          book.classList.add("is-flipped");
        }

        if (button.dataset.flip === "prev") {
          book.classList.remove("is-flipped");
        }
      });
    });
  });
});
