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

// Mobile typography: shape Japanese copy into intentional readable lines.
document.addEventListener("DOMContentLoaded", () => {
  const mobileQuery = window.matchMedia("(max-width: 767px)");
  const targets = [
    "main h1",
    "main h2",
    "main h3",
    "main p",
    "main li",
    "main dd",
    "main summary",
    "footer h2",
    "footer h3",
    "footer p",
    "footer li",
  ].join(",");

  const skipSelector = [
    ".nav",
    ".tm-nav-links",
    ".footer-contact-links",
    ".flower-hours-table",
    ".btn",
    ".tm-button",
    ".page-top-button",
    ".floating-reserve-button",
    "script",
    "style",
  ].join(",");

  const hasInteractiveContent = (element) =>
    element.querySelector("a, button, input, textarea, select, img, svg, table");

  const isReadableTarget = (element) => {
    if (element.closest(skipSelector)) return false;
    if (hasInteractiveContent(element)) return false;
    const text = element.textContent.replace(/\s+/g, "");
    return text.length >= 9 && /[\u3040-\u30ff\u3400-\u9fff]/.test(text);
  };

  const normalizeText = (text) =>
    text
      .replace(/\s+/g, " ")
      .replace(/\s+([、。，．！？])/g, "$1")
      .replace(/([（「『])\s+/g, "$1")
      .replace(/\s+([）」』])/g, "$1")
      .trim();

  const splitPhrases = (text) => {
    const normalized = normalizeText(text);
    if (!normalized) return [];

    return normalized
      .replace(/([。！？])\s*/g, "$1|")
      .replace(/(、)\s*/g, "$1|")
      .replace(/(けれども|けれど|ですが|また|なお|など|ため|とき|あとも|準備、|相談など、)/g, "$1|")
      .split("|")
      .map((part) => part.trim())
      .filter(Boolean);
  };

  const preferredLength = (element) => {
    const width = window.innerWidth;
    if (element.matches("h1, h2, .section-title")) return width <= 390 ? 8 : 10;
    if (element.matches("h3")) return width <= 390 ? 10 : 12;
    if (element.matches("li, dd, summary")) return width <= 390 ? 17 : 20;
    return width <= 390 ? 16 : 19;
  };

  const composeLines = (phrases, maxLength) => {
    const lines = [];
    let current = "";

    phrases.forEach((phrase) => {
      if (!current) {
        current = phrase;
        return;
      }

      const next = current + phrase;
      if (next.length <= maxLength || current.length < maxLength * 0.58) {
        current = next;
      } else {
        lines.push(current);
        current = phrase;
      }
    });

    if (current) lines.push(current);
    return lines;
  };

  const escapeHtml = (text) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const shapeElement = (element) => {
    if (!element.dataset.originalHtml) {
      element.dataset.originalHtml = element.innerHTML;
    } else {
      element.innerHTML = element.dataset.originalHtml;
    }

    const text = normalizeText(element.textContent);
    const lines = composeLines(splitPhrases(text), preferredLength(element));
    if (lines.length <= 1) return;

    element.classList.add("mobile-intended-copy");
    element.innerHTML = lines
      .map((line) => `<span class="mobile-intended-line">${escapeHtml(line)}</span>`)
      .join("");
  };

  const restoreElement = (element) => {
    if (!element.dataset.originalHtml) return;
    element.innerHTML = element.dataset.originalHtml;
    element.classList.remove("mobile-intended-copy");
  };

  const applyMobileTypography = () => {
    document.querySelectorAll(targets).forEach((element) => {
      if (!isReadableTarget(element)) return;

      if (mobileQuery.matches) {
        shapeElement(element);
      } else {
        restoreElement(element);
      }
    });
  };

  applyMobileTypography();
  window.addEventListener("resize", applyMobileTypography);
});
