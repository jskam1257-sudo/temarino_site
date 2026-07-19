document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;

      document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      document.querySelectorAll(".book").forEach((book) => {
        book.classList.remove("is-flipped");
      });

      document.querySelectorAll(".book-card").forEach((card) => {
        card.classList.remove("active");
      });

      const targetCard = document.getElementById(target);
      if (targetCard) {
        targetCard.classList.add("active");
      }
    });
  });

  const scrollMenuButton = document.querySelector(".scroll-menu-button");
  const hero = document.querySelector(".hero");

  const toggleScrollMenu = () => {
    if (!hero) return;

    const heroEnd = hero.offsetTop + hero.offsetHeight - 160;

    if (window.scrollY > heroEnd) {
      document.body.classList.add("is-scrolled");
    } else {
      document.body.classList.remove("is-scrolled");
      document.body.classList.remove("scroll-menu-open");
    }
  };

  toggleScrollMenu();

  window.addEventListener("scroll", toggleScrollMenu);
  window.addEventListener("resize", toggleScrollMenu);

  if (scrollMenuButton) {
    scrollMenuButton.addEventListener("click", () => {
      document.body.classList.toggle("scroll-menu-open");
    });
  }

  document.querySelectorAll(".flip-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const book = button.closest("[data-book]");
      if (book) {
        book.classList.toggle("is-flipped");
      }
    });
  });

  if (hero) {
    setTimeout(() => {
      hero.classList.add("is-active");
    }, 300);
  }

  const titles = document.querySelectorAll(
    [
      ".section-title",
      ".faq-page-body .tm-hero-copy h1",
      ".contact-page-body .contact-hero__text h1",
      ".voice-page-body .contact-hero__text h1",
      ".postpartum-care-page-body .tm-hero-copy h1",
      ".babysitter-page-body .tm-hero-copy h1",
      ".homecare-page-body .tm-hero-copy h1",
    ].join(","),
  );

  setTimeout(() => {
    titles.forEach((title) => {
      title.classList.add("is-ready");
    });

    if (!("IntersectionObserver" in window)) {
      titles.forEach((title) => {
        title.classList.add("is-show");
      });
      return;
    }

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-show");
            titleObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    titles.forEach((title) => {
      titleObserver.observe(title);
    });

    requestAnimationFrame(() => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      titles.forEach((title) => {
        const rect = title.getBoundingClientRect();

        if (rect.top < viewportHeight && rect.bottom > 0) {
          title.classList.add("is-show");
          titleObserver.unobserve(title);
        }
      });
    });
  }, 300);

  const reserveButtons = document.querySelectorAll(".floating-reserve-button");
  const flowerFooter = document.querySelector(".temari-footer");

  if (reserveButtons.length && flowerFooter) {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        reserveButtons.forEach((button) => {
          button.classList.toggle("is-hidden", entry.isIntersecting);
        });
      });
    });

    footerObserver.observe(flowerFooter);
  }

  const menuCheck = document.querySelector("#menu");
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuCheck) {
        menuCheck.checked = false;
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!menuCheck || !menuCheck.checked) return;

    const isMenuControl = event.target.closest(".menu-btn, .menu-check, .nav");
    if (!isMenuControl) {
      menuCheck.checked = false;
    }
  });

  document.querySelectorAll(".tm-button.flip").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (button.matches("[data-flip]")) return;
      if (window.innerWidth > 1024) return;

      e.preventDefault();

      const book = button.closest(".tm-book");
      if (!book) return;

      book.classList.toggle("is-mobile-course-open");

      const backPage = book.querySelector(".tm-back");
      if (backPage) {
        backPage.style.display = book.classList.contains("is-mobile-course-open")
          ? "block"
          : "none";
      }

      button.textContent = book.classList.contains("is-mobile-course-open")
        ? "モデルコースを閉じる"
        : "モデルコースを見る";
    });
  });

  const aboutFadeItems = document.querySelectorAll(".about-fade");

  if (aboutFadeItems.length) {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-show");
            aboutObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      },
    );

    aboutFadeItems.forEach((item) => {
      aboutObserver.observe(item);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const reserveButton = document.querySelector(".floating-reserve-button");
  const pageTopButton = document.querySelector(".page-top-button");
  const footer = document.querySelector("footer");

  if (!reserveButton || !pageTopButton || !footer) return;

  const handleFloatingButtons = () => {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const isFooterNear = footerRect.top < windowHeight - 80;

    if (isFooterNear) {
      reserveButton.classList.add("is-hide");
      pageTopButton.classList.add("is-show");
    } else {
      reserveButton.classList.remove("is-hide");
      pageTopButton.classList.remove("is-show");
    }
  };

  window.addEventListener("scroll", handleFloatingButtons);
  window.addEventListener("resize", handleFloatingButtons);
  handleFloatingButtons();

  pageTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".hero-ripple").forEach((ripple) => {
      ripple.style.animation = "none";
    });
  }, 7000);
});

document.addEventListener(
  "click",
  (event) => {
    const button = event.target.closest(".tm-button.flip[data-flip]");
    if (!button) return;

    if (window.innerWidth <= 1024) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const book = button.closest("[data-book]");
    if (!book) return;

    if (button.dataset.flip === "prev") {
      book.classList.remove("is-flipped");
    } else {
      book.classList.add("is-flipped");
    }
  },
  true,
);
