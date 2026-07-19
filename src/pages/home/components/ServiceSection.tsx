import { serviceData } from "@/mocks/content";
import { Link } from "react-router-dom";

export default function ServiceSection() {
  return (
    <section className="relative bg-white py-24 md:py-36 px-6 overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-20 left-4 md:left-12 opacity-10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="#D4847A" />
          <circle cx="12" cy="6" r="3" fill="#D4847A" opacity="0.6" />
          <circle cx="18" cy="12" r="3" fill="#D4847A" opacity="0.6" />
          <circle cx="12" cy="18" r="3" fill="#D4847A" opacity="0.6" />
          <circle cx="6" cy="12" r="3" fill="#D4847A" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-32 right-6 md:right-16 opacity-10">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#D4847A" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-14 md:mb-20">
          {/* Cute badge */}
          <div className="inline-flex items-center gap-2 bg-coral-pale/50 rounded-full px-4 py-1.5 mb-5">
            <span className="w-3.5 h-3.5 flex items-center justify-center">
              <i className="ri-heart-fill text-coral text-xs" />
            </span>
            <span className="font-rounded text-xs text-coral-dark font-semibold">Services</span>
          </div>

          <h2 className="font-rounded text-2xl md:text-3xl lg:text-4xl text-text-main tracking-wider font-bold">
            サービス内容
          </h2>
          <div className="w-12 h-1 bg-coral rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {serviceData.map((service, index) => (
            <div
              key={service.id}
              className="bg-cream rounded-[28px] overflow-hidden shadow-puffy hover:shadow-puffy-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Rounded rectangle image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {service.subtitle.includes("川崎市") && (
                  <span className="absolute top-4 right-4 bg-coral text-white font-rounded text-xs font-bold px-4 py-1.5 rounded-full shadow-puffy">
                    川崎市委託事業
                  </span>
                )}
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream/80 to-transparent" />
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-coral-pale shadow-puffy">
                    <span className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-heart-pulse-line text-coral text-base" />
                    </span>
                  </div>
                  <h3 className="font-rounded text-lg md:text-xl text-text-main font-bold">
                    {service.title}
                  </h3>
                </div>
                <p className="font-sans text-xs text-text-muted mb-3">
                  {service.subtitle}
                </p>
                <p className="font-sans text-sm text-text-sub leading-[1.8] mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-coral-pale/50">
                    <i className="ri-price-tag-3-line text-coral text-xs" />
                  </span>
                  <p className="font-rounded text-sm font-bold text-coral-dark">
                    {service.price}
                  </p>
                </div>

                {service.id === "postpartum" ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-coral font-rounded text-sm font-bold hover:text-coral-dark transition-colors duration-300 whitespace-nowrap"
                  >
                    詳しく見る
                    <span className="w-4 h-4 flex items-center justify-center ml-1">
                      <i className="ri-arrow-right-line" />
                    </span>
                  </a>
                ) : (
                  <Link
                    to="/service-price"
                    className="inline-flex items-center text-coral font-rounded text-sm font-bold hover:text-coral-dark transition-colors duration-300 whitespace-nowrap"
                  >
                    詳しく見る
                    <span className="w-4 h-4 flex items-center justify-center ml-1">
                      <i className="ri-arrow-right-line" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}