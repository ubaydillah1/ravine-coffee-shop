import Navbar from "@/components/Navbar";
import HeroSection from "@/features/landing/components/HeroSection";
import VariantSection from "@/features/landing/components/VariantSection";
import AboutSection from "@/features/landing/components/AboutSection";
import BottledDrinksSection from "@/features/landing/components/BottledDrinksSection";
import ContactSection from "@/features/landing/components/ContactSection";
import FooterSection from "@/components/Footer";
import TestimonialSection from "@/features/landing/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VariantSection />
        <AboutSection />
        <BottledDrinksSection />
        <ContactSection />
        <TestimonialSection />
      </main>
      <FooterSection />
    </>
  );
}
