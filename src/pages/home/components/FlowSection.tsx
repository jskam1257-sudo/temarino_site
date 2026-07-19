import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: 1,
    title: "オンライン申請",
    icon: "ri-smartphone-line",
    desc: "川崎市じもと応援プラットフォーム「E-KAWASAKI」より申請し、",
    highlight: "承認番号",
    descAfter: "を取得してください。",
    bgColor: "bg-coral-pale/40",
    iconBg: "bg-coral",
    accentColor: "border-coral-pale",
    cardBg: "bg-white",
  },
  {
    number: 2,
    title: "当院へのお問い合わせ",
    icon: "ri-chat-smile-2-line",
    desc: "承認番号が届きましたら、まずは当院の",
    highlight: "公式LINE",
    descAfter: "へお気軽に空き状況をお問い合わせください。",
    note: "スケジュールをスムーズに確保いたします",
    bgColor: "bg-pastel-yellow-light/50",
    iconBg: "bg-coral-dark",
    accentColor: "border-pastel-yellow",
    cardBg: "bg-white",
  },
  {
    number: 3,
    title: "助産師会へのご連絡",
    icon: "ri-heart-pulse-line",
    desc: "その後、川崎市助産師会へご連絡いただき、希望施設として",
    highlight: "てまりの助産院",
    descAfter: "をご指定ください。",
    bgColor: "bg-mint-cream/50",
    iconBg: "bg-cocoa",
    accentColor: "border-ash-green",
    cardBg: "bg-white",
  },
];

function StepCard({
  step,
  index,
  isVisible,
}: {
  step: (typeof steps)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`relative flex items-start gap-4 md:gap-6 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline dot & number */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        {/* Step number circle */}
        <div
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${step.iconBg} flex items-center justify-center shadow-puffy z-10`}
        >
          <span className="font-rounded text-white text-xl md:text-2xl font-bold">
            {step.number}
          </span>
        </div>
        {/* Icon below number */}
        <div
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${step.bgColor} flex items-center justify-center mt-3 border-2 ${step.accentColor}`}
        >
          <span className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
            <i className={`${step.icon} text-coral text-lg md:text-xl`} />
          </span>
        </div>
      </div>

      {/* Card */}
      <div
        className={`flex-1 ${step.cardBg} rounded-[28px] p-6 md:p-7 shadow-puffy border-2 border-coral-pale/20`}
      >
        <h3 className="font-rounded text-lg md:text-xl text-text-main mb-3 font-bold">
          {step.title}
        </h3>
        <p className="font-sans text-sm md:text-base text-text-sub leading-[1.8]">
          {step.desc}
          <span className="inline-block bg-coral-pale text-coral-dark font-bold px-2.5 py-1 rounded-full text-sm mx-1">
            {step.highlight}
          </span>
          {step.descAfter}
        </p>
        {step.note && (
          <p className="font-sans text-xs text-text-muted mt-3 leading-relaxed flex items-center gap-1.5">
            <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
              <i className="ri-information-line text-coral-light" />
            </span>
            {step.note}
          </p>
        )}
      </div>
    </div>
  );
}

export default function FlowSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream py-24 md:py-36 px-6 overflow-hidden"
    >
      {/* Floating decorations */}
      <div className="absolute top-16 left-8 md:left-20 opacity-15">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-20 opacity-15">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#D4847A" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-4 md:right-12 opacity-10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="#E8B0A8" />
          <circle cx="12" cy="6" r="3" fill="#E8B0A8" opacity="0.6" />
          <circle cx="18" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
          <circle cx="12" cy="18" r="3" fill="#E8B0A8" opacity="0.6" />
          <circle cx="6" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-coral-pale/50 rounded-full px-4 py-1.5 mb-5">
            <span className="w-3.5 h-3.5 flex items-center justify-center">
              <i className="ri-route-fill text-coral text-xs" />
            </span>
            <span className="font-rounded text-xs text-coral-dark font-semibold">Flow</span>
          </div>

          <h2
            className={`font-rounded text-2xl md:text-3xl lg:text-4xl text-text-main tracking-wider font-bold transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            ご利用の流れ
          </h2>
          <div
            className={`w-12 h-1 bg-coral rounded-full mx-auto mt-4 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`font-sans text-sm text-text-muted mt-4 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            川崎市産後ケアをご利用いただくまでの3ステップ
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical dotted line */}
          <div
            className="absolute left-7 md:left-8 top-8 bottom-8 w-px border-l-2 border-dashed border-coral-pale"
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="relative space-y-10 md:space-y-12">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className={`mt-14 md:mt-20 text-center transition-all duration-700 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3.5 shadow-puffy border-2 border-coral-pale/20">
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-sparkling-line text-coral text-sm" />
            </span>
            <p className="font-sans text-xs md:text-sm text-text-sub">
              わからないことは、お気軽に
              <a
                href="https://page.line.me/686jrfch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral font-bold hover:text-coral-dark transition-colors duration-300"
              >
                公式LINE
              </a>
              へご相談ください
            </p>
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-chat-heart-line text-coral text-sm" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}