import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import FloatingBookingButton from "@/components/feature/FloatingBookingButton";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ValuesSection from "./components/ValuesSection";
import ServiceSection from "./components/ServiceSection";
import FlowSection from "./components/FlowSection";
import OperatingHoursTable from "./components/OperatingHoursTable";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <ServiceSection />
        <FlowSection />
        <OperatingHoursTable />
        <FAQSection />
        <ContactSection />
      </main>
      <FloatingBookingButton />
      <Footer />
    </div>
  );
}