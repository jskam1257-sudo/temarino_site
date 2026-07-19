import React from 'react';

const ServicePricePage = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
import { useState } from "react";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import WaveDivider from "@/components/feature/WaveDivider";
import {
  postpartumCareData,
  babysitterData,
  visitCareData,
  contactInfo,
} from "@/mocks/content";

interface ModelCourseDetail {
  title: string;
  subtitle: string;
  schedule: {
    time: string;
    title: string;
    desc: string;
  }[];
}

interface ServiceData {
  id: string;
  title: string;
  badge?: string;
  description: string;
  target: string;
  area: string;
  price: string[];
  canDo: string[];
  cannotDo?: string[];
  image: string;
  modelCourseDetail?: ModelCourseDetail;
  cityLink?: string;
}

export default function ServicePrice() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const services: { data: ServiceData; color: string }[] = [
    { data: postpartumCareData as ServiceData, color: "coral" },
    { data: babysitterData as ServiceData, color: "coral" },
    { data: visitCareData as ServiceData, color: "coral" },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="relative pt-24 md:pt-32 pb-0">
        {/* Page Title */}
        <section className="relative text-center px-6 mb-16 md:mb-24">
          {/* Flower decoration top-left */}
          <div className="absolute top-0 left-0 w-32 h-48 md:w-48 md:h-64 pointer-events-none opacity-30">
            <svg viewBox="0 0 100 150" fill="none" className="w-full h-full">
              <path d="M20 140 Q30 100 25 70 Q22 45 40 30" stroke="#D4847A" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
              <circle cx="40" cy="30" r="4" fill="#D4847A" opacity="0.5"/>
              <circle cx="35" cy="42" r="3" fill="#D4847A" opacity="0.35"/>
              <circle cx="28" cy="55" r="2.5" fill="#D4847A" opacity="0.4"/>
              <path d="M25 70 Q40 65 50 72" stroke="#D4847A" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
              <circle cx="50" cy="72" r="3" fill="#D4847A" opacity="0.45"/>
              <path d="M25 100 Q42 95 55 102" stroke="#D4847A" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
              <circle cx="55" cy="102" r="2.5" fill="#D4847A" opacity="0.35"/>
            </svg>
          </div>

          {/* Flower decoration top-right */}
          <div className="absolute top-0 right-0 w-24 h-36 md:w-36 md:h-52 pointer-events-none opacity-20">
            <svg viewBox="0 0 100 150" fill="none" className="w-full h-full" style={{ transform: "scaleX(-1)" }}>
              <path d="M20 140 Q30 100 25 70 Q22 45 40 30" stroke="#D4847A" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
              <circle cx="40" cy="30" r="4" fill="#D4847A" opacity="0.5"/>
              <circle cx="35" cy="42" r="3" fill="#D4847A" opacity="0.35"/>
              <circle cx="28" cy="55" r="2.5" fill="#D4847A" opacity="0.4"/>
              <path d="M25 70 Q40 65 50 72" stroke="#D4847A" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
              <circle cx="50" cy="72" r="3" fill="#D4847A" opacity="0.45"/>
              <path d="M25 100 Q42 95 55 102" stroke="#D4847A" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
              <circle cx="55" cy="102" r="2.5" fill="#D4847A" opacity="0.35"/>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-main tracking-wider mb-3">
              サービス内容
            </h1>
            <p className="font-sans text-sm text-text-muted mb-4">Service</p>
            <div className="w-10 h-0.5 bg-coral mx-auto mb-6" />
            <p className="font-sans text-base text-text-sub leading-[1.8] max-w-xl mx-auto">
              てまりの助産院では、ママと赤ちゃんのその時のニーズに合わせて、3つのサポートをご用意しています。
            </p>
          </div>
        </section>

        {/* Service Cards - Open Book Design */}
        <div className="max-w-5xl mx-auto px-6">
          {services.map((service, index) => (
            <div key={service.data.id}>
              <section className="relative mb-4">
                {/* Service Number */}
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-12 rounded-full bg-coral-pale flex items-center justify-center">
                    <span className="font-serif text-lg text-coral">{index + 1}</span>
                  </div>
                  <div>
                    <h2 className="font-serif text-xl md:text-2xl text-text-main">
                      {service.data.title}
                    </h2>
                  </div>
                </div>

                {/* Open Book Card */}
                <div className="relative bg-white rounded-[20px] shadow-soft overflow-hidden">
                  {/* Book spine shadow effect */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-4 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/5 to-transparent pointer-events-none z-10 hidden md:block" />

                  <div className="flex flex-col md:flex-row">
                    {/* Left Page - Text Content */}
                    <div className="w-full md:w-[55%] p-6 md:p-8 lg:p-10 relative">
                      {/* Subtle page gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cream/40 via-transparent to-transparent pointer-events-none" />

                      <div className="relative z-10">
                        {/* Badge */}
                        {service.data.badge && (
                          <span className="inline-block bg-coral text-white font-sans text-xs font-medium px-3 py-1 rounded-full mb-4">
                            {service.data.badge}
                          </span>
                        )}

                        <p className="font-sans text-sm text-text-sub leading-[1.9] mb-6">
                          {service.data.description}
                        </p>

                        {/* Price Box */}
                        <div className="bg-cream rounded-[16px] p-5 mb-6 border border-coral-pale/30">
                          <h3 className="font-serif text-base text-text-main mb-3 flex items-center gap-2">
                            <span className="w-5 h-5 flex items-center justify-center text-coral">
                              <i className="ri-price-tag-3-line" />
                            </span>
                            料金
                          </h3>
                          {service.data.price.map((p, i) => (
                            <p key={i} className="font-sans text-sm text-text-sub leading-[1.8]">{p}</p>
                          ))}
                        </div>

                        {/* Target & Area */}
                        <div className="space-y-2 mb-6">
                          <p className="font-sans text-sm text-text-sub">
                            <span className="font-medium text-text-main">対象：</span>
                            {service.data.target.split("\n").map((t, i, arr) => (
                              <span key={i}>{t}{i < arr.length - 1 && <br />}</span>
                            ))}
                          </p>
                          <p className="font-sans text-sm text-text-sub">
                            <span className="font-medium text-text-main">対応エリア：</span>
                            {service.data.area.split("\n").map((t, i, arr) => (
                              <span key={i}>{t}{i < arr.length - 1 && <br />}</span>
                            ))}
                          </p>
                        </div>

                        {/* Can Do */}
                        <div className="mb-5">
                          <h3 className="font-serif text-base text-text-main mb-3 flex items-center gap-2">
                            <span className="w-5 h-5 flex items-center justify-center text-coral">
                              <i className="ri-check-line" />
                            </span>
                            できること
                          </h3>
                          <ul className="space-y-2">
                            {service.data.canDo.map((item, i) => (
                              <li key={i} className="font-sans text-sm text-text-sub leading-[1.8] flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-2" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cannot Do */}
                        {service.data.cannotDo && (
                          <div>
                            <h3 className="font-serif text-base text-text-main mb-3 flex items-center gap-2">
                              <span className="w-5 h-5 flex items-center justify-center text-text-muted">
                                <i className="ri-close-line" />
                              </span>
                              できないこと
                            </h3>
                            <ul className="space-y-2">
                              {service.data.cannotDo.map((item, i) => (
                                <li key={i} className="font-sans text-sm text-text-sub leading-[1.8] flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted flex-shrink-0 mt-2" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Page - Image */}
                    <div className="w-full md:w-[45%] relative bg-cream">
                      <div className="h-64 md:h-full">
                        <img
                          src={service.data.image}
                          alt={service.data.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      {/* Soft gradient overlay on image edge */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cream/30 via-transparent to-transparent pointer-events-none hidden md:block" />
                    </div>
                  </div>
                </div>

                {/* Model Course Accordion */}
                <div className="mt-4">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="w-full flex items-center justify-center gap-2 bg-white rounded-[16px] px-6 py-4 shadow-soft hover:shadow-soft-hover transition-all duration-300 border border-coral-pale/20"
                  >
                    <span className="w-5 h-5 flex items-center justify-center text-coral">
                      <i className="ri-book-open-line" />
                    </span>
                    <span className="font-sans text-sm font-medium text-text-main">
                      モデルコースを見る
                    </span>
                    <span className={`w- 5 h-5 flex items-center justify-center text-coral transition-transform duration-300 ${openAccordion === index ? "rotate-180" : ""}`}>
                      <i className="ri-arrow-down-s-line" />
                    </span>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow - hidden transition - all duration - 500 ease -in -out ${
    openAccordion === index ? "max-h-[1200px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
  } `}
                  >
                    {service.data.modelCourseDetail && (
                      <div className="bg-white rounded-[20px] shadow-soft border border-coral-pale/20 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-cream to-white p-6 md:p-8 border-b border-coral-pale/20">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-coral-pale text-coral">
                              <i className="ri-calendar-schedule-line text-sm" />
                            </span>
                            <h3 className="font-serif text-lg md:text-xl text-text-main">
                              {service.data.modelCourseDetail.title}
                            </h3>
                          </div>
                          <p className="font-sans text-sm text-text-muted ml-11">
                            {service.data.modelCourseDetail.subtitle}
                          </p>
                        </div>

                        {/* Schedule */}
                        <div className="p-6 md:p-8">
                          <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-[22px] top-2 bottom-2 w-0.5 bg-coral-pale/50" />

                            <div className="space-y-0">
                              {service.data.modelCourseDetail.schedule.map((item, idx) => (
                                <div key={idx} className="relative flex items-start gap-4 pb-6 last:pb-0">
                                  {/* Time dot */}
                                  <div className="relative z-10 w-11 h-11 rounded-full bg-coral-pale flex items-center justify-center flex-shrink-0">
                                    <span className="font-sans text-xs font-medium text-coral">
                                      {item.time.split(":")[0]}
                                    </span>
                                  </div>

                                  {/* Content */}
                                  <div className="flex-1 pt-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="font-sans text-xs font-medium text-coral bg-coral-pale/40 px-2 py-0.5 rounded-full">
                                        {item.time}
                                      </span>
                                      <h4 className="font-sans text-sm font-medium text-text-main">
                                        {item.title}
                                      </h4>
                                    </div>
                                    <p className="font-sans text-xs text-text-muted leading-[1.7]">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Note */}
                          <div className="mt-6 pt-4 border-t border-coral-pale/20">
                            <p className="font-sans text-xs text-text-muted text-center leading-[1.8]">
                              ※上記は一例です。ご家庭の状況に合わせて柔軟に対応いたします。
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* City Link */}
                {service.data.cityLink && (
                  <div className="text-center mt-4">
                    <a
                      href={service.data.cityLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-coral font-sans text-sm font-medium hover:text-coral-dark transition-colors duration-300 whitespace-nowrap"
                    >
                      川崎市産後ケア事業の詳細はこちら
                      <span className="w-4 h-4 flex items-center justify-center ml-1">
                        <i className="ri-external-link-line" />
                      </span>
                    </a>
                  </div>
                )}
              </section>

              {/* Wave Divider between services */}
              {index < services.length - 1 && (
                <div className="py-8 md:py-12">
                  <WaveDivider
                    fromColor="transparent"
                    toColor={index % 2 === 0 ? "#FDF8F6" : "#FFFFFF"}
                    flip={index % 2 !== 0}
                  />
                  {/* Flower decoration between sections */}
                  <div className="flex justify-center py-4">
                    <div className="w-16 h-16 opacity-20">
                      <svg viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="4" fill="#D4847A" opacity="0.5"/>
                        <circle cx="30" cy="18" r="3" fill="#D4847A" opacity="0.4"/>
                        <circle cx="30" cy="42" r="3" fill="#D4847A" opacity="0.4"/>
                        <circle cx="18" cy="30" r="3" fill="#D4847A" opacity="0.4"/>
                        <circle cx="42" cy="30" r="3" fill="#D4847A" opacity="0.4"/>
                        <path d="M30 22 L30 26" stroke="#D4847A" strokeWidth="0.8" strokeLinecap="round"/>
                        <path d="M30 34 L30 38" stroke="#D4847A" strokeWidth="0.8" strokeLinecap="round"/>
                        <path d="M22 30 L26 30" stroke="#D4847A" strokeWidth="0.8" strokeLinecap="round"/>
                        <path d="M34 30 L38 30" stroke="#D4847A" strokeWidth="0.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <WaveDivider
                    fromColor={index % 2 === 0 ? "#FDF8F6" : "#FFFFFF"}
                    toColor="transparent"
                    flip={index % 2 === 0}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <section className="relative mt-20 md:mt-32 px-6 pb-20 md:pb-28">
          {/* Flower decoration bottom-left */}
          <div className="absolute bottom-20 left-0 w-32 h-48 md:w-48 md:h-64 pointer-events-none opacity-25">
            <svg viewBox="0 0 100 150" fill="none" className="w-full h-full">
              <path d="M20 140 Q30 100 25 70 Q22 45 40 30" stroke="#D4847A" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
              <circle cx="40" cy="30" r="4" fill="#D4847A" opacity="0.5"/>
              <circle cx="35" cy="42" r="3" fill="#D4847A" opacity="0.35"/>
              <circle cx="28" cy="55" r="2.5" fill="#D4847A" opacity="0.4"/>
              <path d="M25 70 Q40 65 50 72" stroke="#D4847A" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
              <circle cx="50" cy="72" r="3" fill="#D4847A" opacity="0.45"/>
              <path d="M25 100 Q42 95 55 102" stroke="#D4847A" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
              <circle cx="55" cy="102" r="2.5" fill="#D4847A" opacity="0.35"/>
            </svg>
          </div>

          {/* Flower decoration bottom-right */}
          <div className="absolute bottom-20 right-0 w-32 h-48 md:w-48 md:h-64 pointer-events-none opacity-20 rotate-180">
            <svg viewBox="0 0 100 150" fill="none" className="w-full h-full">
              <path d="M20 140 Q30 100 25 70 Q22 45 40 30" stroke="#D4847A" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
              <circle cx="40" cy="30" r="4" fill="#D4847A" opacity="0.5"/>
              <circle cx="35" cy="42" r="3" fill="#D4847A" opacity="0.35"/>
              <circle cx="28" cy="55" r="2.5" fill="#D4847A" opacity="0.4"/>
              <path d="M25 70 Q40 65 50 72" stroke="#D4847A" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
              <circle cx="50" cy="72" r="3" fill="#D4847A" opacity="0.45"/>
              <path d="M25 100 Q42 95 55 102" stroke="#D4847A" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
              <circle cx="55" cy="102" r="2.5" fill="#D4847A" opacity="0.35"/>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            {/* CTA Card with gradient background */}
            <div className="relative bg-gradient-to-br from-white via-cream to-white rounded-[24px] shadow-soft p-8 md:p-12 text-center border border-coral-pale/20 overflow-hidden">
              {/* Decorative gradient circles */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-coral-pale/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-coral-pale/15 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h2 className="font-serif text-2xl md:text-3xl text-text-main mb-4">
                  ご予約・お問い合わせ
                </h2>
                <div className="w-10 h-0.5 bg-coral mx-auto mb-4" />
                <p className="font-sans text-sm text-text-sub leading-[1.8] max-w-lg mx-auto mb-8">
                  ご予約の空き状況や、サービスの詳細についてのご相談など、どうぞお気軽にお問い合わせください。
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={contactInfo.line}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#06C755] text-white font-sans font-medium text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity duration-300 whitespace-nowrap shadow-sm"
                  >
                    <span className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-line-fill text-lg" />
                    </span>
                    ご予約はこちら
                  </a>
                  <a
                    href={contactInfo.timerex}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-coral text-white font-sans font-medium text-sm px-8 py-3.5 rounded-full hover:bg-coral-dark transition-colors duration-300 whitespace-nowrap shadow-sm"
                  >
                    お問い合わせはこちら
                    <span className="w-4 h-4 flex items-center justify-center ml-1.5">
                      <i className="ri-arrow-right-line" />
                    </span>
                  </a>
                </div>
                <div className="flex items-center justify-center gap-6 mt-8">
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-cream text-text-sub hover:text-coral hover:bg-coral-pale/30 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <span className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-instagram-fill text-xl" />
                    </span>
                  </a>
                  <a
                    href={`mailto:${ contactInfo.email } `}
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-cream text-text-sub hover:text-coral hover:bg-coral-pale/30 transition-all duration-300"
                    aria-label="Email"
                  >
                    <span className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-mail-fill text-xl" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
        `
}}
    />
  );
};

export default ServicePricePage;
