import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import { midwifePortrait } from "@/mocks/images";
import { midwifeProfile, operatingHours, contactInfo } from "@/mocks/content";
import { Link } from "react-router-dom";

const attachedIllustration = "https://static.readdy.ai/image/2cebc512d64a2f8d08e9dc15852bf756/60de1bbc716c96b405ff2bcce9051738.png";

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="relative">
        {/* ===== Hero Section ===== */}
        <section className="relative bg-cream overflow-hidden">
          {/* Floating decorations */}
          <div className="absolute top-8 left-6 md:left-16 opacity-20 animate-float-slow">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
            </svg>
          </div>
          <div className="absolute top-20 right-8 md:right-24 opacity-15 animate-float-heart">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" fill="#E8B0A8" />
              <circle cx="12" cy="6" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="18" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="12" cy="18" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="6" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
            </svg>
          </div>
          <div className="absolute bottom-16 left-12 md:left-28 opacity-15 animate-float">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#E8B0A8" opacity="0.5" />
            </svg>
          </div>

          <div className="max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-16 md:pb-24 text-center relative z-10">
            {/* Cute badge */}
            <div className="inline-flex items-center gap-2 bg-coral-pale/40 rounded-full px-5 py-2 mb-8">
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-heart-fill text-coral text-sm" />
              </span>
              <span className="font-rounded text-sm text-coral-dark font-semibold">About Us</span>
            </div>

            <h1 className="font-rounded text-3xl md:text-4xl lg:text-5xl text-text-main tracking-wider font-bold leading-tight">
              助産院について
            </h1>
            <div className="w-14 h-1.5 bg-coral rounded-full mx-auto mt-5" />

            <p className="font-rounded text-lg md:text-xl text-text-sub mt-8 leading-relaxed max-w-2xl mx-auto">
              正解よりも、あなたらしい育児を。
              <br />
              心をほどいて、前を向ける日のために。
            </p>
            <p className="font-sans text-sm text-text-muted mt-4">
              川崎市・武蔵小杉エリアの訪問型助産院
            </p>

            {/* Attached illustration */}
            <div className="mt-10 md:mt-14 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Decorative ring behind */}
                <div className="absolute -inset-3 rounded-full border-2 border-dashed border-coral-pale/40 animate-spin-slow" style={{ animationDuration: '30s' }} />
                <div className="w-full h-full rounded-full overflow-hidden shadow-puffy bg-white">
                  <img
                    src={attachedIllustration}
                    alt="てまりの助産院イラスト"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-coral rounded-full px-4 py-2 shadow-puffy animate-float">
                  <span className="font-rounded text-xs text-white font-bold">Temari Midwife</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wave down */}
        <div className="bg-cream">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0 0h1440v60c-120 15-240 20-360 20s-240-5-360-20c-120-15-240-15-360 0s-240 20-360 20V0z" fill="white" />
          </svg>
        </div>

        {/* ===== Profile Card ===== */}
        <section className="bg-white py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-puffy border border-coral-pale/20">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Portrait */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute -inset-3 rounded-full border-2 border-dashed border-coral-pale/50 animate-spin-slow" style={{ animationDuration: '25s' }} />
                  <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-puffy relative">
                    <img
                      src={midwifePortrait}
                      alt={midwifeProfile.name}
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                  </div>
                  {/* Cute badge */}
                  <div className="absolute -bottom-2 -right-2 bg-coral rounded-full px-4 py-2 shadow-puffy">
                    <span className="font-rounded text-xs text-white font-bold">院長</span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left flex-1">
                  <h2 className="font-rounded text-2xl md:text-3xl text-text-main font-bold">
                    {midwifeProfile.name}
                  </h2>
                  <p className="font-sans text-base text-text-muted mt-2">
                    {midwifeProfile.title}
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
                    {midwifeProfile.achievements.map((q, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-coral-pale/30 rounded-full px-3 py-1.5"
                      >
                        <span className="w-3.5 h-3.5 flex items-center justify-center">
                          <i className="ri-verified-badge-fill text-coral text-xs" />
                        </span>
                        <span className="font-rounded text-xs text-coral-dark font-semibold">{q}</span>
                      </span>
                    ))}
                  </div>
                  {/* Note */}
                  <p className="font-sans text-xs text-text-muted mt-3">
                    ※川崎市 認可外保育施設開設届出済
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wave up */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0 80h1440V20c-120-15-240-20-360-20s-240 5-360 20c120 15 240 15 360 0s240-20 360-20v60z" fill="#FDF8F5" />
          </svg>
        </div>

        {/* ===== Greeting Section ===== */}
        <section className="bg-cream py-16 md:py-24 px-6 relative overflow-hidden">
          {/* Decorations */}
          <div className="absolute top-12 right-8 md:right-20 opacity-10">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
            </svg>
          </div>
          <div className="absolute bottom-16 left-6 md:left-16 opacity-10">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" fill="#E8B0A8" />
              <circle cx="12" cy="6" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="18" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="12" cy="18" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="6" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
            </svg>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-coral-pale/40 rounded-full px-5 py-2 mb-6">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-heart-3-fill text-coral text-sm" />
                </span>
                <span className="font-rounded text-sm text-coral-dark font-semibold">Message</span>
              </div>
              <h2 className="font-rounded text-2xl md:text-3xl lg:text-4xl text-text-main font-bold tracking-wider">
                ご挨拶
              </h2>
              <div className="w-12 h-1.5 bg-coral rounded-full mx-auto mt-4" />
            </div>

            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-puffy border border-coral-pale/20">
              <div className="space-y-6">
                {midwifeProfile.introduction.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-sans text-base md:text-lg text-text-sub leading-[1.9]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-10 pt-8 border-t border-coral-pale/20 text-center">
                <p className="font-rounded text-lg text-text-main font-bold">
                  てまりの助産院 院長
                </p>
                <p className="font-rounded text-xl text-coral mt-1 font-bold">
                  大角真梨子
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wave down */}
        <div className="bg-cream">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0 0h1440v60c-120 15-240 20-360 20s-240-5-360-20c-120-15-240-15-360 0s-240 20-360 20V0z" fill="white" />
          </svg>
        </div>

        {/* ===== Career & Qualifications ===== */}
        <section className="bg-white py-16 md:py-24 px-6 relative overflow-hidden">
          {/* Decorations */}
          <div className="absolute top-16 left-8 md:left-20 opacity-10">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#E8B0A8" opacity="0.5" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 md:right-24 opacity-10">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-coral-pale/40 rounded-full px-5 py-2 mb-6">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-award-fill text-coral text-sm" />
                </span>
                <span className="font-rounded text-sm text-coral-dark font-semibold">Career</span>
              </div>
              <h2 className="font-rounded text-2xl md:text-3xl lg:text-4xl text-text-main font-bold tracking-wider">
                略歴・活動実績
              </h2>
              <div className="w-12 h-1.5 bg-coral rounded-full mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Career Timeline */}
              <div className="bg-cream rounded-[28px] p-6 md:p-8 border border-coral-pale/20">
                <h3 className="font-rounded text-lg md:text-xl text-text-main font-bold mb-6 text-center">
                  経歴
                </h3>
                <div className="space-y-5">
                  {midwifeProfile.career.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral-pale/40 flex items-center justify-center mt-0.5">
                        <span className="font-rounded text-xs text-coral-dark font-bold">{index + 1}</span>
                      </div>
                      <p className="font-sans text-sm md:text-base text-text-sub leading-[1.8] pt-0.5">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div className="bg-cream rounded-[28px] p-6 md:p-8 border border-coral-pale/20">
                <h3 className="font-rounded text-lg md:text-xl text-text-main font-bold mb-6 text-center">
                  資格
                </h3>
                <div className="space-y-4">
                  {midwifeProfile.achievements.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white rounded-[20px] p-4 shadow-soft"
                    >
                      <div className="w-10 h-10 rounded-full bg-coral-pale/40 flex items-center justify-center flex-shrink-0">
                        <span className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-verified-badge-fill text-coral" />
                        </span>
                      </div>
                      <p className="font-rounded text-base text-text-main font-bold">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Additional note */}
                <div className="mt-6 bg-white rounded-[20px] p-4 border border-coral-pale/20">
                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    ※川崎市 認可外保育施設開設届出済
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wave up */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0 80h1440V20c-120-15-240-20-360-20s-240 5-360 20c120 15 240 15 360 0s240-20 360-20v60z" fill="#FDF8F5" />
          </svg>
        </div>

        {/* ===== Operating Hours ===== */}
        <section className="bg-cream py-16 md:py-24 px-6 relative overflow-hidden">
          <div className="absolute top-12 right-8 md:right-20 opacity-10">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" fill="#D4847A" />
              <circle cx="12" cy="6" r="3" fill="#D4847A" opacity="0.6" />
              <circle cx="18" cy="12" r="3" fill="#D4847A" opacity="0.6" />
              <circle cx="12" cy="18" r="3" fill="#D4847A" opacity="0.6" />
              <circle cx="6" cy="12" r="3" fill="#D4847A" opacity="0.6" />
            </svg>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-coral-pale/40 rounded-full px-5 py-2 mb-6">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-time-fill text-coral text-sm" />
                </span>
                <span className="font-rounded text-sm text-coral-dark font-semibold">Schedule</span>
              </div>
              <h2 className="font-rounded text-2xl md:text-3xl lg:text-4xl text-text-main font-bold tracking-wider">
                {operatingHours.title}
              </h2>
              <div className="w-12 h-1.5 bg-coral rounded-full mx-auto mt-4" />
            </div>

            <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-puffy border border-coral-pale/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr>
                      <th className="text-left font-rounded text-sm text-text-muted pb-4 pr-4 w-28">
                        診療時間
                      </th>
                      {operatingHours.schedule.map((s, i) => (
                        <th
                          key={i}
                          className={`font-rounded text-sm text-center pb-4 px-2 w-16 ${
                            s.day === "日・祝" ? "text-text-muted" : "text-text-main"
                          }`}
                        >
                          {s.day.replace("曜日", "").replace("日・祝", "日祝")}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-coral-pale/20">
                      <td className="font-sans text-sm text-text-sub py-3 pr-4">
                        午前 9:00-12:00
                      </td>
                      {operatingHours.schedule.map((s, i) => (
                        <td key={i} className="text-center py-3 px-2">
                          {s.morning !== "休診" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-coral-pale/40">
                              <span className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-checkbox-circle-fill text-coral text-sm" />
                              </span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                              <span className="font-sans text-xs text-text-muted">-</span>
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-t border-coral-pale/20">
                      <td className="font-sans text-sm text-text-sub py-3 pr-4">
                        午後 13:00-16:00
                      </td>
                      {operatingHours.schedule.map((s, i) => (
                        <td key={i} className="text-center py-3 px-2">
                          {s.afternoon !== "休診" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-coral-pale/40">
                              <span className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-checkbox-circle-fill text-coral text-sm" />
                              </span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                              <span className="font-sans text-xs text-text-muted">-</span>
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 pt-5 border-t border-coral-pale/20 space-y-2">
                {operatingHours.notes.map((note, i) => (
                  <p key={i} className="font-sans text-xs text-text-muted leading-relaxed">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wave down */}
        <div className="bg-cream">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0 0h1440v60c-120 15-240 20-360 20s-240-5-360-20c-120-15-240-15-360 0s-240 20-360 20V0z" fill="white" />
          </svg>
        </div>

        {/* ===== CTA Section ===== */}
        <section className="bg-white py-16 md:py-24 px-6 relative overflow-hidden">
          <div className="absolute top-8 right-8 md:right-20 opacity-10">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
            </svg>
          </div>
          <div className="absolute bottom-8 left-8 md:left-20 opacity-10">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" fill="#E8B0A8" />
              <circle cx="12" cy="6" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="18" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="12" cy="18" r="3" fill="#E8B0A8" opacity="0.6" />
              <circle cx="6" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
            </svg>
          </div>

          <div className="max-w-3xl mx-auto text-center relative">
            <div className="bg-gradient-to-b from-white via-cream to-white rounded-[32px] p-8 md:p-12 shadow-puffy border border-coral-pale/20">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-coral/20" />
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-coral/15" />

              <div className="inline-flex items-center gap-2 bg-coral-pale/40 rounded-full px-5 py-2 mb-6">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-chat-heart-fill text-coral text-sm" />
                </span>
                <span className="font-rounded text-sm text-coral-dark font-semibold">Contact</span>
              </div>

              <h2 className="font-rounded text-2xl md:text-3xl text-text-main font-bold tracking-wider">
                ご予約・お問い合わせ
              </h2>
              <div className="w-12 h-1.5 bg-coral rounded-full mx-auto mt-4 mb-6" />

              <p className="font-sans text-base text-text-sub leading-relaxed mb-8">
                ご予約の空き状況や、「私の場合はどのメニューが合っている？」というご相談など、どうぞお気軽にお問い合わせください。
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={contactInfo.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#06C755] text-white font-rounded font-bold text-sm px-8 py-4 rounded-full hover:bg-[#05B34C] transition-all duration-300 whitespace-nowrap btn-cute w-full sm:w-auto"
                >
                  <span className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-line-fill text-lg" />
                  </span>
                  公式LINEで相談
                </a>
                <a
                  href={contactInfo.timerex}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-coral text-white font-rounded font-bold text-sm px-8 py-4 rounded-full hover:bg-coral-dark transition-all duration-300 whitespace-nowrap btn-cute w-full sm:w-auto"
                >
                  <span className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-calendar-check-line" />
                  </span>
                  予約はこちら
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center gap-5">
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-puffy text-text-sub hover:text-coral hover:shadow-puffy-hover transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="Instagram"
                >
                  <span className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-instagram-fill text-xl" />
                  </span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-puffy text-text-sub hover:text-coral hover:shadow-puffy-hover transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="Email"
                >
                  <span className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-mail-fill text-xl" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Wave to footer */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0 0h1440v60c-120 15-240 20-360 20s-240-5-360-20c-120-15-240-15-360 0s-240 20-360 20V0z" fill="#FDF8F5" />
          </svg>
        </div>
      </main>
      <Footer />
    </div>
  );
}