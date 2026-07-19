import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: "ホーム", path: "/" },
    { label: "助産院について", path: "/about" },
    { label: "サービス内容", path: "/service-price" },
    { label: "予約について", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(212,132,122,0.1)]"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://static.readdy.ai/image/2cebc512d64a2f8d08e9dc15852bf756/a2967d67c336514c5b7c9b39946108f9.png"
                alt="てまりの助産院"
                className="h-10 md:h-12 w-auto"
              />
              <div className="hidden md:block">
                <p className="font-rounded text-sm text-text-main leading-none font-bold">てまりの助産院</p>
                <p className="font-sans text-[10px] text-text-muted tracking-wider mt-0.5 leading-none">Temari Midwife Care</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-rounded text-sm tracking-wide transition-all duration-300 whitespace-nowrap px-3 py-1.5 rounded-full ${
                    location.pathname === item.path
                      ? "text-coral font-bold bg-coral-pale/30"
                      : "text-text-sub hover:text-coral hover:bg-coral-pale/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href="https://timerex.net/s/temarinomariko_4d7f/9bb93125/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center bg-coral text-white font-rounded font-bold text-sm px-6 py-3 rounded-full hover:bg-coral-dark transition-all duration-300 whitespace-nowrap btn-cute"
            >
              <span className="w-4 h-4 flex items-center justify-center mr-1.5">
                <i className="ri-calendar-check-line text-sm" />
              </span>
              ご予約・お問い合わせ
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-coral-pale/20 transition-colors"
              aria-label="メニュー"
            >
              <span
                className={`w-5 h-0.5 bg-text-main rounded-full transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-text-main rounded-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-text-main rounded-full transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-20">
          {/* Cute decoration */}
          <div className="absolute top-24 left-8 opacity-20">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
            </svg>
          </div>
          <div className="absolute bottom-32 right-8 opacity-20">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" fill="#E8B0A8" />
              <circle cx="12" cy="6" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="18" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="12" cy="18" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="6" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
            </svg>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`font-rounded text-2xl tracking-widest transition-all duration-300 whitespace-nowrap px-6 py-3 rounded-full ${
                location.pathname === item.path
                  ? "text-coral font-bold bg-coral-pale/30"
                  : "text-text-main hover:text-coral hover:bg-coral-pale/20"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://timerex.net/s/temarinomariko_4d7f/9bb93125/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center bg-coral text-white font-rounded font-bold text-base px-8 py-4 rounded-full hover:bg-coral-dark transition-all duration-300 whitespace-nowrap btn-cute"
          >
            <span className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-calendar-check-line" />
            </span>
            ご予約・お問い合わせ
          </a>
        </div>
      )}
    </>
  );
}