import { Link } from "react-router-dom";
import { midwifePortrait } from "@/mocks/images";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-24 md:py-36 px-6 overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-12 right-8 md:right-20 opacity-20">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-6 md:left-16 opacity-15">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="#E8B0A8" />
          <circle cx="12" cy="6" r="3" fill="#E8B0A8" opacity="0.6" />
          <circle cx="18" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
          <circle cx="12" cy="18" r="3" fill="#E8B0A8" opacity="0.6" />
          <circle cx="6" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            {/* Cute badge */}
            <div className="inline-flex items-center gap-2 bg-coral-pale/50 rounded-full px-4 py-1.5 mb-5">
              <span className="w-3.5 h-3.5 flex items-center justify-center">
                <i className="ri-heart-fill text-coral text-xs" />
              </span>
              <span className="font-rounded text-xs text-coral-dark font-semibold">About Us</span>
            </div>

            <h2 className="font-rounded text-2xl md:text-3xl lg:text-4xl text-text-main tracking-wider font-bold">
              助産院について
            </h2>
            <div className="w-12 h-1 bg-coral rounded-full mx-auto md:mx-0 mt-4" />
            <p className="font-sans text-sm md:text-base text-text-sub mt-6 leading-[1.9]">
              てまりの助産院は、川崎市を拠点に活動する助産院です。
              <br />
              産後のママと赤ちゃんを中心に、一人ひとりに寄り添ったケアを提供しています。
              <br />
              自宅での訪問型産後ケアや、ベビーシッターサービスを通じて、
              ママの休息と赤ちゃんの健やかな成長をサポートしています。
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center bg-coral text-white font-rounded font-bold text-sm px-8 py-4 rounded-full hover:bg-coral-dark transition-all duration-300 whitespace-nowrap btn-cute"
              >
                詳しく見る
                <span className="w-4 h-4 flex items-center justify-center ml-2">
                  <i className="ri-arrow-right-line" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="flex-shrink-0 relative">
            {/* Decorative ring behind */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-coral-pale/50 animate-spin-slow" style={{ animationDuration: '25s' }} />

            <div className="portrait-feather w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shadow-puffy relative">
              <img
                src={midwifePortrait}
                alt="大角真梨子"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>

            {/* Cute floating badge */}
            <div className="absolute -bottom-3 -right-4 bg-coral rounded-full px-4 py-2 shadow-puffy animate-float">
              <span className="font-rounded text-xs text-white font-bold">助産師・大角真梨子</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}