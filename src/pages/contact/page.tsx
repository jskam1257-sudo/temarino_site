import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import { contactInfo } from "@/mocks/content";

const momConsultations = ["授乳について", "育児について", "沐浴指導"];
const babyConsultations = ["体重増加について", "睡眠について", "スキンケアについて"];

interface FormState {
  name: string;
  email: string;
  phone: string;
  momChecks: string[];
  babyChecks: string[];
  otherSelected: boolean;
  otherText: string;
  message: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    momChecks: [],
    babyChecks: [],
    otherSelected: false,
    otherText: "",
    message: "",
  });
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleMomCheck = (value: string) => {
    setFormState((prev) => ({
      ...prev,
      momChecks: prev.momChecks.includes(value)
        ? prev.momChecks.filter((v) => v !== value)
        : [...prev.momChecks, value],
    }));
  };

  const handleBabyCheck = (value: string) => {
    setFormState((prev) => ({
      ...prev,
      babyChecks: prev.babyChecks.includes(value)
        ? prev.babyChecks.filter((v) => v !== value)
        : [...prev.babyChecks, value],
    }));
  };

  const handleOtherToggle = () => {
    setFormState((prev) => ({ ...prev, otherSelected: !prev.otherSelected }));
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setShowConfirm(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const allCategories = [
      ...formState.momChecks.map((c) => `ママの相談：${c}`),
      ...formState.babyChecks.map((c) => `赤ちゃんの相談：${c}`),
      ...(formState.otherSelected ? ["その他"] : []),
    ].join(" / ");

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("phone", formState.phone || "");
      formData.append("categories", allCategories);
      formData.append("message", formState.message);

      const response = await fetch(
        "https://readdy.ai/api/form/d81bv5vakvd8lionva90",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream">
        <Header />
        <main className="relative">
          <section className="relative z-10 pt-24 md:pt-32 pb-20 md:pb-28 px-6 min-h-[70vh] flex items-center justify-center">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
                <span className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-check-line text-3xl text-coral" />
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-text-main mb-4">
                お問い合わせありがとうございました
              </h2>
              <p className="font-sans text-base text-text-sub leading-[1.9] mb-10">
                内容を確認し、3営業日以内にご返信いたします。
              </p>
              <Link
                to="/"
                className="inline-flex items-center bg-coral text-white font-sans font-medium text-base px-10 py-4 rounded-full hover:bg-coral-dark transition-all duration-300 whitespace-nowrap shadow-soft"
              >
                <span className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-home-line" />
                </span>
                ホームへ戻る
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="relative">
        <section className="relative z-10 pt-24 md:pt-32 pb-20 md:pb-28 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-main tracking-wider">
                予約について
              </h1>
              <p className="font-sans text-base md:text-lg text-text-sub mt-4">
                お気軽にお問い合わせください
              </p>
              <div className="w-10 h-0.5 bg-coral mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <a
                href={contactInfo.timerex}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-coral text-white font-sans font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-coral-dark transition-all duration-300 whitespace-nowrap shadow-soft"
              >
                <span className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-calendar-check-line" />
                </span>
                ご予約・ご相談はこちら
              </a>
              <a
                href={contactInfo.line}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#06C755] text-white font-sans font-semibold text-sm px-6 py-3.5 rounded-full hover:opacity-90 transition-all duration-300 whitespace-nowrap"
              >
                <span className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-line-fill" />
                </span>
                公式LINE
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-text-main font-sans font-semibold text-sm px-6 py-3.5 rounded-full border border-border-soft hover:bg-cream transition-all duration-300 whitespace-nowrap"
              >
                <span className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-instagram-fill text-coral" />
                </span>
                公式Instagram
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center bg-white text-text-main font-sans font-semibold text-sm px-6 py-3.5 rounded-full border border-border-soft hover:bg-cream transition-all duration-300 whitespace-nowrap"
              >
                <span className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line text-text-sub" />
                </span>
                {contactInfo.email}
              </a>
            </div>

            {/* Confirmation Modal */}
            {showConfirm && (
              <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-[20px] p-6 md:p-10 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
                  <h2 className="font-serif text-xl md:text-2xl text-text-main mb-6 text-center">
                    入力内容の確認
                  </h2>
                  <div className="space-y-4 mb-8">
                    <div className="bg-cream rounded-[16px] p-4">
                      <p className="font-sans text-xs text-text-muted mb-1">お名前</p>
                      <p className="font-sans text-sm text-text-main font-medium">{formState.name}</p>
                    </div>
                    <div className="bg-cream rounded-[16px] p-4">
                      <p className="font-sans text-xs text-text-muted mb-1">メールアドレス</p>
                      <p className="font-sans text-sm text-text-main font-medium">{formState.email}</p>
                    </div>
                    {formState.phone && (
                      <div className="bg-cream rounded-[16px] p-4">
                        <p className="font-sans text-xs text-text-muted mb-1">電話番号</p>
                        <p className="font-sans text-sm text-text-main font-medium">{formState.phone}</p>
                      </div>
                    )}
                    <div className="bg-cream rounded-[16px] p-4">
                      <p className="font-sans text-xs text-text-muted mb-1">お問い合わせ種別</p>
                      <div className="font-sans text-sm text-text-main">
                        {formState.momChecks.length > 0 && (
                          <p className="mb-1">【ママの相談】{formState.momChecks.join("、")}</p>
                        )}
                        {formState.babyChecks.length > 0 && (
                          <p className="mb-1">【赤ちゃんの相談】{formState.babyChecks.join("、")}</p>
                        )}
                        {formState.otherSelected && <p>【その他】</p>}
                        {formState.momChecks.length === 0 && formState.babyChecks.length === 0 && !formState.otherSelected && (
                          <p className="text-text-muted">選択なし</p>
                        )}
                      </div>
                    </div>
                    <div className="bg-cream rounded-[16px] p-4">
                      <p className="font-sans text-xs text-text-muted mb-1">お問い合わせ内容</p>
                      <p className="font-sans text-sm text-text-main whitespace-pre-wrap">{formState.message}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleBack}
                      className="flex-1 inline-flex items-center justify-center bg-white text-text-main font-sans font-medium text-sm px-6 py-3.5 rounded-full border border-border-soft hover:bg-cream transition-all duration-300 whitespace-nowrap"
                    >
                      <span className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-arrow-left-line" />
                      </span>
                      戻る
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center bg-coral text-white font-sans font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-coral-dark transition-all duration-300 disabled:opacity-50 whitespace-nowrap shadow-soft"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 flex items-center justify-center mr-2">
                            <i className="ri-loader-4-line animate-spin" />
                          </span>
                          送信中...
                        </>
                      ) : (
                        <>
                          送信する
                          <span className="w-5 h-5 flex items-center justify-center ml-2">
                            <i className="ri-send-plane-line" />
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-[20px] p-7 md:p-10 shadow-soft">
              <h2 className="font-serif text-xl md:text-2xl text-text-main mb-8 text-center">
                お問い合わせフォーム
              </h2>

              <form
                onSubmit={handleConfirm}
                data-readdy-form
                id="contact-form"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-sm font-medium text-text-main mb-2"
                  >
                    お名前 <span className="text-coral">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-[16px] border border-border-soft bg-cream font-sans text-base text-text-main focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-transparent transition-all"
                    placeholder="山田 花子"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-sm font-medium text-text-main mb-2"
                  >
                    メールアドレス{" "}
                    <span className="text-coral">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-[16px] border border-border-soft bg-cream font-sans text-base text-text-main focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-transparent transition-all"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-sm font-medium text-text-main mb-2"
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-[16px] border border-border-soft bg-cream font-sans text-base text-text-main focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-transparent transition-all"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <p className="block font-sans text-sm font-medium text-text-main mb-3">
                    お問い合わせ種別
                  </p>

                  <div className="mb-4">
                    <p className="font-sans text-xs text-text-muted mb-2 font-medium">ママの相談</p>
                    <div className="flex flex-wrap gap-3">
                      {momConsultations.map((item) => (
                        <label
                          key={item}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${
                            formState.momChecks.includes(item)
                              ? "bg-coral-pale/30 border-coral text-text-main"
                              : "bg-cream border-border-soft text-text-sub hover:border-coral/30"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formState.momChecks.includes(item)}
                            onChange={() => handleMomCheck(item)}
                            className="hidden"
                          />
                          <span className="font-sans text-sm">{item}</span>
                          {formState.momChecks.includes(item) && (
                            <span className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-check-line text-coral text-xs" />
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-sans text-xs text-text-muted mb-2 font-medium">赤ちゃんの相談</p>
                    <div className="flex flex-wrap gap-3">
                      {babyConsultations.map((item) => (
                        <label
                          key={item}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${
                            formState.babyChecks.includes(item)
                              ? "bg-coral-pale/30 border-coral text-text-main"
                              : "bg-cream border-border-soft text-text-sub hover:border-coral/30"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formState.babyChecks.includes(item)}
                            onChange={() => handleBabyCheck(item)}
                            className="hidden"
                          />
                          <span className="font-sans text-sm">{item}</span>
                          {formState.babyChecks.includes(item) && (
                            <span className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-check-line text-coral text-xs" />
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${
                        formState.otherSelected
                          ? "bg-coral-pale/30 border-coral text-text-main"
                          : "bg-cream border-border-soft text-text-sub hover:border-coral/30"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formState.otherSelected}
                        onChange={handleOtherToggle}
                        className="hidden"
                      />
                      <span className="font-sans text-sm">その他</span>
                      {formState.otherSelected && (
                        <span className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-check-line text-coral text-xs" />
                        </span>
                      )}
                    </label>
                    <p className="font-sans text-[11px] text-text-muted mt-1.5 ml-1">
                      ※その他の場合は、以下のお問い合わせ内容欄に具体的な内容を必ずご記載ください
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-sm font-medium text-text-main mb-2"
                  >
                    お問い合わせ内容{" "}
                    <span className="text-coral">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-[16px] border border-border-soft bg-cream font-sans text-base text-text-main focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-transparent transition-all resize-none"
                    placeholder="お問い合わせ内容をご記入ください（500文字以内）"
                  />
                  <p className="font-sans text-xs text-text-muted mt-1.5 text-right">
                    {formState.message.length}/500文字
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-coral text-white font-sans font-semibold text-base px-8 py-4 rounded-full hover:bg-coral-dark transition-all duration-300 whitespace-nowrap shadow-soft"
                >
                  確認する
                  <span className="w-5 h-5 flex items-center justify-center ml-2">
                    <i className="ri-arrow-right-line" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}