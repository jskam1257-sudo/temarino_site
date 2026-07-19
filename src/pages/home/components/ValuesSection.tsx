export default function ValuesSection() {
  const values = [
    {
      icon: "ri-hand-heart-line",
      title: "寄り添うケア",
      description:
        "一人ひとりの気持ちに寄り添い、\n安心できる時間を大切にします。",
      bgColor: "bg-coral-pale/30",
      accentColor: "border-coral-pale",
    },
    {
      icon: "ri-shield-check-line",
      title: "安心・安全",
      description:
        "医療の専門知識をもとに、\n安全で質の高いケアを提供します。",
      bgColor: "bg-mint-cream/50",
      accentColor: "border-ash-green",
    },
    {
      icon: "ri-home-heart-line",
      title: "その人らしい暮らしを応援",
      description:
        "ママと赤ちゃんが、自分らしく、心地よく\n過ごせる毎日をサポートします。",
      bgColor: "bg-pastel-yellow-light/50",
      accentColor: "border-pastel-yellow",
    },
  ];

  return (
    <section className="relative bg-cream py-24 md:py-36 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-16 left-8 md:left-20 opacity-10">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#D4847A" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-8 md:right-20 opacity-10">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="#E8B0A8" />
          <circle cx="12" cy="6" r="3" fill="#E8B0A8" opacity="0.6" />
          <circle cx="18" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
          <circle cx="12" cy="18" r="3" fill="#E8B0A8" opacity="0.6" />
          <circle cx="6" cy="12" r="3" fill="#E8B0A8" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-14 md:mb-20">
          {/* Cute badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-5 shadow-puffy">
            <span className="w-3.5 h-3.5 flex items-center justify-center">
              <i className="ri-sparkling-fill text-coral text-xs" />
            </span>
            <span className="font-rounded text-xs text-coral-dark font-semibold">Our Values</span>
          </div>

          <h2 className="font-rounded text-xl md:text-2xl lg:text-3xl text-text-main tracking-wider font-bold">
            てまりの助産院が
            <br className="md:hidden" />
            大切にしていること
          </h2>
          <div className="w-12 h-1 bg-coral rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="flex flex-col items-center text-center bg-white rounded-[28px] p-7 md:p-8 shadow-puffy hover:shadow-puffy-hover transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-coral-pale/30"
            >
              <div className={`w-20 h-20 flex items-center justify-center rounded-full ${value.bgColor} mb-5 border-2 ${value.accentColor}`}>
                <span className="w-10 h-10 flex items-center justify-center">
                  <i className={`${value.icon} text-3xl text-coral`} />
                </span>
              </div>
              <h3 className="font-rounded text-lg md:text-xl text-text-main mb-3 font-bold">
                {value.title}
              </h3>
              <p className="font-sans text-sm text-text-sub leading-[1.9] whitespace-pre-line">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}