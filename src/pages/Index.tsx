import { HeroSection } from '@/components/home/HeroSection';
import { EventsSection } from '@/components/home/EventsSection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { ClubsSection } from '@/components/home/ClubsSection';
import { CTASection } from '@/components/home/CTASection';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <EventsSection />
        <ProgramsSection />
        <ClubsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
