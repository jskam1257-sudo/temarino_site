document.addEventListener("DOMContentLoaded", () => {
  // タブ
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

  // PCスクロールメニュー
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

  // 本のページめくり
  document.querySelectorAll(".flip-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const book = button.closest("[data-book]");
      if (book) {
        book.classList.toggle("is-flipped");
      }
    });
  });

  // ヒーロー
  if (hero) {
    setTimeout(() => {
      hero.classList.add("is-active");
    }, 300);
  }

  // セクションタイトル
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
        threshold: 0.4,
      },
    );

    titles.forEach((title) => {
      titleObserver.observe(title);
    });
  }, 300);

  // フッター付近で固定予約ボタンを非表示
  const reserveButtons = document.querySelectorAll(".floating-reserve-button");
  const footer = document.querySelector(".temari-footer");

  if (reserveButtons.length && footer) {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        reserveButtons.forEach((button) => {
          button.classList.toggle("is-hidden", entry.isIntersecting);
        });
      });
    });

    footerObserver.observe(footer);
  }

  // ハンバーガーメニュー：リンククリック後に閉じる
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

  // スマホ・タブレット：モデルコースを下に表示
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
        backPage.style.display = book.classList.contains(
          "is-mobile-course-open",
        )
          ? "block"
          : "none";
      }

      button.textContent = book.classList.contains("is-mobile-course-open")
        ? "モデルコースを閉じる"
        : "モデルコースを見る";
    });
  });

  // About page fade animation
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

  const scrollToTopSlowly = () => {
    const start = window.scrollY || document.documentElement.scrollTop;
    const duration = Math.min(1800, Math.max(950, start * 0.55));
    const startedAt = performance.now();

    const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      window.scrollTo(0, start * (1 - easeOutCubic(progress)));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  pageTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToTopSlowly();
  });
});
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".hero-ripple").forEach((ripple) => {
      ripple.style.animation = "none";
    });
  }, 7000);
});


// Menu3 pages: desktop book flip for data-flip buttons.
document.addEventListener(
  "click",
  (event) => {
    const button = event.target.closest(".tm-button.flip[data-flip]");
    if (!button) return;

    // On phones and tablets, keep the existing details/accordion design.
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
