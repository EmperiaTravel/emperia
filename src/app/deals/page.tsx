import HeroSection from './HeroSection';
import FeaturedDealsSection from './FeaturedDealsSection';
import CategoryDealsSection from './CategoryDealsSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DealsPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturedDealsSection />
      <CategoryDealsSection />
      <Footer />
    </main>
  );
}