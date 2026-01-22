import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import BusinessSection from "@/components/BusinessSection";
import CharitySection from "@/components/CharitySection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <BusinessSection />
      <CharitySection />
      <GallerySection />
      <ContactSection />
    </main>
  );
};

export default Index;
