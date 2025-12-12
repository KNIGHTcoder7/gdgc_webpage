import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { InstagramSection } from '@/components/InstagramSection';
import { AboutSection } from '@/components/AboutSection';
import { TeamSection } from '@/components/TeamSection';
import { EventsSection } from '@/components/EventsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <InstagramSection />
        <AboutSection />
        <TeamSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
