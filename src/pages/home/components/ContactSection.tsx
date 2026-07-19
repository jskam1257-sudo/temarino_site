import { Link } from "react-router-dom";
import { contactInfo } from "@/mocks/content";

export default function ContactSection() {
  return (
    <section className="relative bg-cream py-24 md:py-36 px-6 overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-16 left-8 md:left-20 opacity-15">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 md:right-24 opacity-15">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#D4847A" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-puffy">
          {/* Cute badge */}
          <div className="inline-flex items-center gap-2 bg-coral-pale/50 rounded-full px-4 py-1.5 mb-5">
            <span className="w-3.5 h-3.5 flex items-center justify-center">
              <i className="ri-heart-fill text-coral text-xs" />
            </span>
            <span className="font-rounded text-xs text-coral-dark font-semibold">Contact</span>
          </div>

          <h2 className="font-rounded text-2xl md:text-3xl lg:text-4xl text-text-main tracking-wider font-bold">
            予約について
          </h2>
          <div className="w-12 h-1 bg-coral rounded-full mx-auto mt-4 mb-6" />

          <p className="font-sans text-sm md:text-base text-text-sub leading-[1.9] mb-10 max-w-lg mx-auto">
            ご予約・お問い合わせは、LINEまたはお問い合わせフォームからお気軽にご連絡ください。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href={contactInfo.line}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#06C755] text-white font-rounded font-bold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 whitespace-nowrap shadow-puffy hover:shadow-puffy-hover hover:-translate-y-0.5"
            >
              <span className="w-5 h-5 flex items-center justify-center mr-2">
                <i className="ri-line-fill text-lg" />
              </span>
              LINEで相談する
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-cream text-text-main font-rounded font-bold text-sm px-8 py-4 rounded-full border-2 border-coral-pale hover:bg-coral-pale/30 transition-all duration-300 whitespace-nowrap shadow-soft hover:shadow-puffy hover:-translate-y-0.5"
            >
              お問い合わせフォーム
              <span className="w-4 h-4 flex items-center justify-center ml-2">
                <i className="ri-arrow-right-line" />
              </span>
            </Link>
          </div>

          {/* Cute note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-text-muted">
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-time-line text-sm" />
            </span>
            <span className="font-sans text-xs">24時間受付中・お気軽にどうぞ</span>
          </div>
        </div>
      </div>
    </section>
  );
}