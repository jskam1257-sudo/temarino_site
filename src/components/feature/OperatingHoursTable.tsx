import { operatingHours } from "@/mocks/content";

const days = ["月", "火", "水", "木", "金", "土", "日・祝"];
const timeSlots = [
  { label: "午前", range: "9:00 - 12:00", key: "morning" as const },
  { label: "午後", range: "13:00 - 16:00", key: "afternoon" as const },
];

export default function OperatingHoursTable() {
  return (
    <section className="py-24 md:py-36 px-6 bg-flow-warm-to-dusty">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-greige-dark tracking-wider">
            {operatingHours.title}
          </h2>
          <div className="w-12 h-0.5 bg-dawn-pink mx-auto mt-5" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-[28px] border border-table-border/60 overflow-hidden bg-warm-white">
            {/* Header row - days */}
            <div className="grid grid-cols-[100px_repeat(7,_minmax(0,_1fr))] border-b border-table-border/40">
              <div className="p-3 md:p-4 bg-warm-white/80" />
              {days.map((day) => (
                <div
                  key={day}
                  className="p-3 md:p-4 text-center font-serif text-sm md:text-base text-greige-dark"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Time slot rows */}
            {timeSlots.map((slot) => (
              <div
                key={slot.key}
                className="grid grid-cols-[100px_repeat(7,_minmax(0,_1fr))] border-b border-table-border/30 last:border-b-0"
              >
                <div className="p-3 md:p-4 flex flex-col justify-center items-center text-center bg-warm-white/60 border-r border-table-border/20">
                  <span className="font-sans text-xs md:text-sm text-greige-dark font-medium">
                    {slot.label}
                  </span>
                  <span className="font-sans text-[10px] md:text-xs text-greige-dark mt-0.5">
                    {slot.range}
                  </span>
                </div>
                {operatingHours.schedule.map((row) => {
                  const isOpen = row[slot.key] !== "休診";
                  return (
                    <div
                      key={row.day + slot.key}
                      className="p-3 md:p-4 flex items-center justify-center"
                    >
                      <span
                        className={`font-sans text-base md:text-lg font-medium ${
                          isOpen
                            ? "text-greige-dark"
                            : "text-table-border/70"
                        }`}
                      >
                        {isOpen ? "〇" : "/"}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-4 space-y-2 px-2">
            {operatingHours.notes.map((note, index) => (
              <p
                key={index}
                className="font-sans text-xs md:text-sm text-greige-dark leading-[1.8]"
              >
                ※ {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}