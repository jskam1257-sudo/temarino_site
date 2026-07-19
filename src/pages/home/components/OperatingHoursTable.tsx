import { operatingHours } from "@/mocks/content";

export default function OperatingHoursTable() {
  return (
    <section className="relative bg-white py-24 md:py-36 px-6 overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-16 right-10 md:right-24 opacity-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="#D4847A" />
          <circle cx="12" cy="6" r="3" fill="#D4847A" opacity="0.6" />
          <circle cx="18" cy="12" r="3" fill="#D4847A" opacity="0.6" />
          <circle cx="12" cy="18" r="3" fill="#D4847A" opacity="0.6" />
          <circle cx="6" cy="12" r="3" fill="#D4847A" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-8 md:left-20 opacity-10">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-14 md:mb-20">
          {/* Cute badge */}
          <div className="inline-flex items-center gap-2 bg-coral-pale/50 rounded-full px-4 py-1.5 mb-5">
            <span className="w-3.5 h-3.5 flex items-center justify-center">
              <i className="ri-time-fill text-coral text-xs" />
            </span>
            <span className="font-rounded text-xs text-coral-dark font-semibold">Schedule</span>
          </div>

          <h2 className="font-rounded text-2xl md:text-3xl lg:text-4xl text-text-main tracking-wider font-bold">
            診療時間
          </h2>
          <div className="w-12 h-1 bg-coral rounded-full mx-auto mt-4" />
        </div>

        <div className="bg-cream rounded-[32px] shadow-puffy overflow-hidden border-2 border-coral-pale/20">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-coral-pale/30">
                  <th className="py-5 px-3 text-center font-sans text-xs text-text-muted font-normal w-24"></th>
                  {operatingHours.schedule.map((item) => (
                    <th
                      key={item.day}
                      className="py-5 px-2 text-center font-rounded text-xs text-text-sub font-bold"
                    >
                      {item.day.replace("曜日", "").replace("日・祝", "日・祝")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-coral-pale/20">
                  <td className="py-5 px-3 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-rounded text-xs text-text-sub font-bold">午前</span>
                      <span className="font-sans text-[10px] text-text-muted mt-1">9:00 - 12:00</span>
                    </div>
                  </td>
                  {operatingHours.schedule.map((item, i) => (
                    <td key={i} className="py-5 px-2 text-center">
                      {item.morning === "休診" ? (
                        <span className="font-sans text-xs text-text-muted">ー</span>
                      ) : (
                        <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-coral-pale/50 border-2 border-coral-pale text-coral shadow-puffy">
                          <i className="ri-checkbox-blank-circle-fill text-[10px]" />
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-5 px-3 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-rounded text-xs text-text-sub font-bold">午後</span>
                      <span className="font-sans text-[10px] text-text-muted mt-1">13:00 - 16:00</span>
                    </div>
                  </td>
                  {operatingHours.schedule.map((item, i) => (
                    <td key={i} className="py-5 px-2 text-center">
                      {item.afternoon === "休診" ? (
                        <span className="font-sans text-xs text-text-muted">ー</span>
                      ) : (
                        <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-coral-pale/50 border-2 border-coral-pale text-coral shadow-puffy">
                          <i className="ri-checkbox-blank-circle-fill text-[10px]" />
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {operatingHours.notes.map((note, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                <i className="ri-information-line text-coral-light text-sm" />
              </span>
              <p className="font-sans text-xs text-text-muted text-center">
                {note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}