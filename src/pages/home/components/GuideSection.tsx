import { guideInfo } from "@/mocks/content";
import { babyItemsImage } from "@/mocks/images";

export default function GuideSection() {
  return (
    <section className="bg-cream py-24 md:py-36 px-6 overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-20 left-6 md:left-16 opacity-10">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-8 md:right-20 opacity-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#D4847A" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-14 md:mb-20">
          {/* Cute badge */}
          <div className="inline-flex items-center gap-2 bg-coral-pale/50 rounded-full px-4 py-1.5 mb-5">
            <span className="w-3.5 h-3.5 flex items-center justify-center">
              <i className="ri-bookmark-fill text-coral text-xs" />
            </span>
            <span className="font-rounded text-xs text-coral-dark font-semibold">Guide</span>
          </div>

          <h2 className="font-rounded text-2xl md:text-3xl lg:text-4xl text-text-main tracking-wider font-bold">
            ご利用案内
          </h2>
          <div className="w-12 h-1 bg-coral rounded-full mx-auto mt-4" />
          <div className="rounded-[32px] overflow-hidden w-32 h-32 mx-auto mt-8 shadow-puffy border-4 border-coral-pale/30">
            <img
              src={babyItemsImage}
              alt="赤ちゃんの小物"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {guideInfo.map((info, index) => (
            <div
              key={info.title}
              className="bg-white rounded-[28px] p-7 md:p-8 flex flex-col items-center text-center shadow-puffy hover:shadow-puffy-hover transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-coral-pale/30"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-coral-pale/30 rounded-full mb-5 border-2 border-coral-pale/50 shadow-puffy">
                <i className={`${info.icon} text-2xl text-coral`} />
              </div>
              <h3 className="font-rounded text-lg md:text-xl text-text-main mb-3 font-bold">
                {info.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-text-sub leading-relaxed">
                {info.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-soft">
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-information-line text-coral-light text-sm" />
            </span>
            <p className="font-sans text-xs md:text-sm text-text-sub">
              川崎市の産後ケア事業に関する詳細は、川崎市の公式サイトをご確認ください
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}