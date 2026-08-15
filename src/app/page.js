import HeroSlider from '@/components/home/HeroSlider';
import TrustBar from '@/components/home/TrustBar';
import ServicesGrid from '@/components/home/ServicesGrid';
import ProcessSteps from '@/components/home/ProcessSteps';
import PricingCards from '@/components/home/PricingCards';
import Calculator from '@/components/home/Calculator';
import WhyUs from '@/components/home/WhyUs';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <TrustBar />
      <ServicesGrid />
      <ProcessSteps />
      <PricingCards />
      <Calculator />
      <WhyUs />
      <FAQ />
      <CTASection />
    </main>
  );
}
