import { heroImage } from "@/mocks/images";
import { Link } from "react-router-dom";

// Floating decoration SVG component
function FloatingHeart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
    </svg>
  );
}

function FloatingStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
    </svg>
  );
}

function FloatingFlower({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <circle cx="12" cy="6" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="18" cy="12" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="18" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="6" cy="12" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 md:pt-24 bg-cream">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top left heart */}
        <FloatingHeart className="absolute top-[15%] left-[8%] w-6 h-6 md:w-8 md:h-8 text-coral-pale animate-float-heart opacity-60" />
        {/* Top right star */}
        <FloatingStar className="absolute top-[20%] right-[12%] w-5 h-5 md:w-7 md:h-7 text-pastel-yellow animate-float-slow opacity-50" />
        {/* Bottom left flower */}
        <FloatingFlower className="absolute bottom-[25%] left-[15%] w-7 h-7 md:w-10 md:h-10 text-coral-light/40 animate-float-slow opacity-40" />
        {/* Bottom right heart */}
        <FloatingHeart className="absolute bottom-[30%] right-[10%] w-5 h-5 md:w-6 md:h-6 text-soft-pink animate-float-heart opacity-50" style={{ animationDelay: '1s' }} />
        {/* Middle left star */}
        <FloatingStar className="absolute top-[45%] left-[5%] w-4 h-4 md:w-5 md:h-5 text-milk-tea animate-float opacity-40" />
        {/* Middle right flower */}
        <FloatingFlower className="absolute top-[55%] right-[8%] w-6 h-6 md:w-8 md:h-8 text-coral-pale/50 animate-float-slow opacity-30" style={{ animationDelay: '2s' }} />

        {/* Soft gradient blobs */}
        <div className="absolute top-[10%] left-[0%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-coral-pale/20 blur-3xl" />
        <div className="absolute bottom-[10%] right-[0%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-pastel-yellow/15 blur-3xl" />
        <div className="absolute top-[40%] right-[20%] w-[200px] h-[200px] rounded-full bg-soft-pink/15 blur-3xl" />
      </div>

      {/* Decorative curved shapes at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 pointer-events-none z-0">
        <svg viewBox="0 0 1440 120" fill="none" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0 120V60C240 100 480 20 720 50C960 80 1200 30 1440 60V120H0Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center md:text-left">
            {/* Cute subtitle tag */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-puffy">
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-heart-fill text-coral text-sm" />
              </span>
              <span className="font-rounded text-sm text-coral-dark font-semibold">
                川崎市の産後ケア・ベビーシッター
              </span>
            </div>

            <h1 className="font-rounded text-3xl md:text-4xl lg:text-5xl text-text-main leading-relaxed tracking-wider font-bold">
              ママと赤ちゃんに、
              <br />
              やさしい時間を。
            </h1>
            <p className="font-sans text-sm md:text-base text-text-sub mt-6 leading-[1.9] max-w-md mx-auto md:mx-0">
              てまりの助産院は、川崎市を拠点に活動する助産院です。
              <br />
              産後のママと赤ちゃんに寄り添い、
              <br />
              安心できるケアとサポートをお届けします。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link
                to="/about"
                className="inline-flex items-center bg-coral text-white font-rounded font-bold text-sm px-8 py-4 rounded-full hover:bg-coral-dark transition-all duration-300 whitespace-nowrap btn-cute"
              >
                助産院について
                <span className="w-4 h-4 flex items-center justify-center ml-2">
                  <i className="ri-arrow-right-line" />
                </span>
              </Link>
              <Link
                to="/service-price"
                className="inline-flex items-center bg-white text-coral-dark font-rounded font-bold text-sm px-8 py-4 rounded-full border-2 border-coral-pale hover:bg-coral-pale/30 transition-all duration-300 whitespace-nowrap shadow-soft"
              >
                <span className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-service-line" />
                </span>
                サービスを見る
              </Link>
            </div>
          </div>

          {/* Right: Hero image - large circle with feather */}
          <div className="flex-shrink-0 relative">
            {/* Decorative ring */}
            <div className="absolute -inset-3 md:-inset-4 rounded-full border-2 border-dashed border-coral-pale/60 animate-spin-slow" />
            <div className="absolute -inset-6 md:-inset-8 rounded-full border border-coral-pale/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

            <div className="hero-circle-feather w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] shadow-puffy relative">
              <img
                src={heroImage}
                alt="赤ちゃんの足"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-2 -left-4 md:-left-8 bg-white rounded-full px-4 py-2 md:px-5 md:py-2.5 shadow-puffy animate-float">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center bg-coral-pale rounded-full">
                  <i className="ri-heart-fill text-coral text-xs" />
                </span>
                <span className="font-rounded text-xs text-text-main font-bold">3児のママ助産師</span>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -top-2 -right-4 md:-right-6 bg-coral rounded-full px-4 py-2 md:px-5 md:py-2.5 shadow-puffy animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center bg-white/30 rounded-full">
                  <i className="ri-home-heart-fill text-white text-xs" />
                </span>
                <span className="font-rounded text-xs text-white font-bold">訪問型ケア</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}