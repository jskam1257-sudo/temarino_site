import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <section className="pt-24 md:pt-32 pb-20 md:pb-28 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-main tracking-wider">
                プライバシーポリシー
              </h1>
              <div className="w-10 h-0.5 bg-coral mx-auto mt-4" />
            </div>

            <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-soft space-y-10">
              <div>
                <h2 className="font-serif text-xl md:text-2xl text-text-main mb-4">
                  1. 個人情報の取得について
                </h2>
                <p className="font-sans text-base text-text-sub leading-[1.9]">
                  てまりの助産院（以下「当院」といいます）は、お客様からのお問い合わせ、ご予約、サービス提供にあたり、必要な範囲で個人情報を取得いたします。取得する個人情報の項目は、お名前、ご住所、電話番号、メールアドレス、分娩に関する情報、健康状態等です。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-text-main mb-4">
                  2. 個人情報の利用目的
                </h2>
                <p className="font-sans text-base text-text-sub leading-[1.9]">
                  当院が取得した個人情報は、以下の目的のために利用いたします。
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside font-sans text-base text-text-sub leading-[1.9]">
                  <li>産後ケアサービス、ベビーシッターサービスの提供</li>
                  <li>ご予約の確認、変更、キャンセルの連絡</li>
                  <li>サービスに関するお知らせや資料の送付</li>
                  <li>お問い合わせへの対応</li>
                  <li>法令等に基づく対応</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-text-main mb-4">
                  3. 個人情報の第三者提供について
                </h2>
                <p className="font-sans text-base text-text-sub leading-[1.9]">
                  当院は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。ただし、産後ケア事業として川崎市に対して、必要な範囲で情報を提供する場合があります。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-text-main mb-4">
                  4. 個人情報の管理について
                </h2>
                <p className="font-sans text-base text-text-sub leading-[1.9]">
                  当院は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。また、従業員に対して個人情報保護の教育を実施し、適切な取り扱いを徹底いたします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-text-main mb-4">
                  5. 個人情報の開示・訂正・削除について
                </h2>
                <p className="font-sans text-base text-text-sub leading-[1.9]">
                  お客様ご本人からの個人情報の開示、訂正、削除、利用停止のご請求には、速やかに対応いたします。ご請求の際は、お問い合わせフォームよりご連絡ください。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-text-main mb-4">
                  6. Cookieの使用について
                </h2>
                <p className="font-sans text-base text-text-sub leading-[1.9]">
                  当院のウェブサイトでは、サイトの利便性向上のためCookieを使用する場合があります。Cookieは個人を特定する情報を含んでいません。ブラウザの設定でCookieを無効にすることも可能です。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-text-main mb-4">
                  7. お問い合わせ先
                </h2>
                <p className="font-sans text-base text-text-sub leading-[1.9]">
                  個人情報の取り扱いに関するお問い合わせは、以下の連絡先までお願いいたします。
                </p>
                <div className="mt-4 bg-cream rounded-[16px] p-6">
                  <p className="font-sans text-sm text-text-sub">
                    てまりの助産院
                    <br />
                    メール：temarinomariko@gmail.com
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-text-main mb-4">
                  8. プライバシーポリシーの変更について
                </h2>
                <p className="font-sans text-base text-text-sub leading-[1.9]">
                  当院は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイト上で告知いたします。
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-sans text-sm text-text-muted mb-6">
                制定日：2024年1月1日
              </p>
              <Link
                to="/"
                className="inline-flex items-center bg-coral text-white font-sans font-medium text-sm px-8 py-3.5 rounded-full hover:bg-coral-dark transition-all duration-300 whitespace-nowrap shadow-soft"
              >
                <span className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-arrow-left-line" />
                </span>
                ホームへ戻る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}