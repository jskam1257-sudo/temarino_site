import { useEffect, useRef, useState } from "react";
import { serviceFaq } from "@/mocks/content";

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 md:py-36 px-6 overflow-hidden"
    >
      {/* Floating decorations */}
      <div className="absolute top-20 left-6 md:left-16 opacity-10">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-8 md:right-20 opacity-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
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
              <i className="ri-question-fill text-coral text-xs" />
            </span>
            <span className="font-rounded text-xs text-coral-dark font-semibold">FAQ</span>
          </div>

          <h2
            className={`font-rounded text-2xl md:text-3xl lg:text-4xl text-text-main tracking-wider font-bold transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            よくある質問
          </h2>
          <div
            className={`w-12 h-1 bg-coral rounded-full mx-auto mt-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4 md:space-y-5">
          {serviceFaq.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left bg-cream rounded-[24px] p-5 md:p-6 shadow-puffy hover:shadow-puffy-hover transition-all duration-300 border-2 ${
                  openIndex === index ? "border-coral-pale bg-coral-soft" : "border-transparent"
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Q Bubble */}
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-coral-pale shadow-puffy">
                    <span className="font-rounded text-coral-dark font-bold text-sm md:text-base">Q</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-rounded text-sm md:text-base text-text-main font-bold leading-relaxed">
                        {faq.q}
                      </h3>
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-puffy transition-transform duration-300">
                        <i
                          className={`ri-arrow-down-s-line text-coral text-lg transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              {/* A Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4 bg-white rounded-[24px] p-5 md:p-6 shadow-soft border-2 border-ash-green/30">
                  {/* A Bubble */}
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-ash-green-light shadow-puffy">
                    <span className="font-rounded text-cocoa font-bold text-sm md:text-base">A</span>
                  </div>
                  <p className="font-sans text-sm md:text-base text-text-sub leading-[1.8] pt-1 md:pt-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-cream rounded-full px-6 py-3 shadow-puffy">
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-chat-heart-line text-coral text-sm" />
            </span>
            <p className="font-sans text-sm text-text-sub">
              その他のご質問は
              <a
                href="https://page.line.me/686jrfch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral font-bold hover:text-coral-dark transition-colors duration-300"
              >
                公式LINE
              </a>
              へ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}