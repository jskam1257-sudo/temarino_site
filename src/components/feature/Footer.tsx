import { Link } from "react-router-dom";
import { contactInfo, operatingHours } from "../../mocks/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "ホーム", path: "/" },
    { label: "助産院について", path: "/about" },
    { label: "サービス内容", path: "/service-price" },
    { label: "予約について", path: "/contact" },
  ];

  return (
    <footer className="relative bg-cream border-t border-border-soft/50 py-16 md:py-24 px-6 overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-10 left-10 md:left-20 opacity-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="#D4847A" />
          <circle cx="12" cy="6" r="3" fill="#D4847A" opacity="0.6" />
          <circle cx="18" cy="12" r="3" fill="#D4847A" opacity="0.6" />
          <circle cx="12" cy="18" r="3" fill="#D4847A" opacity="0.6" />
          <circle cx="6" cy="12" r="3" fill="#D4847A" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-10 md:right-24 opacity-10">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Top section: Info + Operating Hours */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Left: Clinic info */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start gap-6">
            <img
              src="https://static.readdy.ai/image/2cebc512d64a2f8d08e9dc15852bf756/a2967d67c336514c5b7c9b39946108f9.png"
              alt="てまりの助産院"
              className="h-14 md:h-16 w-auto"
            />

            <div className="text-center md:text-left">
              <p className="font-rounded text-lg text-text-main font-bold">
                てまりの助産院
              </p>
              <p className="font-sans text-xs text-text-muted mt-1">
                Temari Midwife Care
              </p>
            </div>

            <div className="text-center md:text-left space-y-2">
              <p className="font-sans text-sm text-text-sub">
                <span className="w-4 h-4 inline-flex items-center justify-center mr-1">
                  <i className="ri-map-pin-line text-coral text-sm" />
                </span>
                川崎市中原区・高津区、横浜市港北区
              </p>
              <p className="font-sans text-sm text-text-sub">
                <span className="w-4 h-4 inline-flex items-center justify-center mr-1">
                  <i className="ri-mail-line text-coral text-sm" />
                </span>
                {contactInfo.email}
              </p>
            </div>

            <nav className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-rounded text-sm text-text-sub hover:text-coral transition-all duration-300 whitespace-nowrap px-3 py-1.5 rounded-full hover:bg-coral-pale/20"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={contactInfo.line}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-puffy text-text-sub hover:text-[#06C755] hover:shadow-puffy-hover transition-all duration-300 hover:-translate-y-0.5"
                aria-label="LINE"
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-line-fill text-xl" />
                </span>
              </a>
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

          {/* Right: Operating Hours Table */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-[28px] p-5 md:p-6 shadow-puffy border border-coral-pale/20 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-time-fill text-coral" />
                </span>
                <h3 className="font-rounded text-base text-text-main font-bold">
                  診療時間
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr>
                      <th className="text-left font-sans text-xs text-text-muted pb-2 pr-2 w-24">
                        時間
                      </th>
                      {operatingHours.schedule.map((s, i) => (
                        <th
                          key={i}
                          className={`font-sans text-xs text-center pb-2 px-1 w-10 ${
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
                      <td className="font-sans text-xs text-text-sub py-2 pr-2">
                        9:00-12:00
                      </td>
                      {operatingHours.schedule.map((s, i) => (
                        <td key={i} className="text-center py-2 px-1">
                          {s.morning !== "休診" ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-coral-pale/40">
                              <span className="w-3.5 h-3.5 flex items-center justify-center">
                                <i className="ri-checkbox-circle-fill text-coral text-xs" />
                              </span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                              <span className="font-sans text-[10px] text-text-muted">-</span>
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-t border-coral-pale/20">
                      <td className="font-sans text-xs text-text-sub py-2 pr-2">
                        13:00-16:00
                      </td>
                      {operatingHours.schedule.map((s, i) => (
                        <td key={i} className="text-center py-2 px-1">
                          {s.afternoon !== "休診" ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-coral-pale/40">
                              <span className="w-3.5 h-3.5 flex items-center justify-center">
                                <i className="ri-checkbox-circle-fill text-coral text-xs" />
                              </span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                              <span className="font-sans text-[10px] text-text-muted">-</span>
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-3 pt-3 border-t border-coral-pale/20 space-y-1">
                {operatingHours.notes.map((note, i) => (
                  <p key={i} className="font-sans text-[10px] text-text-muted leading-relaxed">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border-soft mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <Link
            to="/privacy"
            className="font-rounded text-xs text-text-muted hover:text-text-sub transition-colors duration-300 whitespace-nowrap px-3 py-1 rounded-full hover:bg-coral-pale/10"
          >
            プライバシーポリシー
          </Link>
          <span className="hidden sm:inline text-text-muted">|</span>
          <p className="font-sans text-xs text-text-muted text-center">
            &copy; {currentYear} てまりの助産院 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}