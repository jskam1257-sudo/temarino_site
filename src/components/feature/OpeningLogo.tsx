import { useState, useEffect } from "react";

export default function OpeningLogo() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("temari-opening-seen");
    if (hasSeen) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("temari-opening-seen", "true");
      }, 800);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.25) 0%, transparent 40%, rgba(255,255,255,0.08) 100%), #d9c2c6",
      }}
    >
      <div className="animate-rattle flex flex-col items-center gap-6">
        <img
          src="https://static.readdy.ai/image/2cebc512d64a2f8d08e9dc15852bf756/b295d29fe2f1be2c34825d375b970a62.png"
          alt="てまりの助産院"
          className="h-20 md:h-28 w-auto"
        />
        <p className="font-serif text-lg md:text-xl text-greige-dark/70 tracking-widest">
          てまりの助産院
        </p>
      </div>
    </div>
  );
}