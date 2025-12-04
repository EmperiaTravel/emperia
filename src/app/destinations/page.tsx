import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedSection';
import RegionsSection from './RegionsSection';
import ExperiencesSection from './ExperiencesSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Destinations() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturedSection />
      <RegionsSection />
      <ExperiencesSection />
      <Footer />
    </main>
  );
}