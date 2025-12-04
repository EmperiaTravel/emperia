import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import FleetSection from './FleetSection';
import FAQSection from './FAQSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <FAQSection />
      <Footer />
    </main>
  );
}