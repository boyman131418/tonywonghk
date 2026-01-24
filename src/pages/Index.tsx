import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import BusinessSection from "@/components/BusinessSection";
import CharitySection from "@/components/CharitySection";
import GallerySection from "@/components/GallerySection";
import AnnouncementSection from "@/components/AnnouncementSection";
import FooterSection from "@/components/FooterSection";

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
      <AnnouncementSection />
      <FooterSection />
    </main>
  );
};

export default Index;
