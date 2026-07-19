import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-dawn-pink/80 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white shadow-lg hover:bg-dawn-pink-dark hover:scale-110 transition-all duration-300 cursor-pointer"
      aria-label="トップに戻る"
    >
      <span className="w-6 h-6 flex items-center justify-center">
        <i className="ri-arrow-up-line text-xl" />
      </span>
    </button>
  );
}