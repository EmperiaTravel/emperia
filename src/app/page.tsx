import HeroSection from './_root/HeroSection';
import StatsSection from './_root/StatsSection';
import DealsSection from './_root/DealsSection';
import ToolsSection from './_root/ToolsSection';
import FAQSection from './_root/FAQSection';
import ContactSection from './_root/ContactSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <DealsSection />
      <ToolsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}