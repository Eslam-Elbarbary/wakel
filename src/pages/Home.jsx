import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import FeaturedLawyersSection from '../components/FeaturedLawyersSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';

function Home() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[68px] items-center w-full pt-4 sm:pt-5 lg:pt-[20px] pb-8 sm:pb-10 lg:pb-[40px] px-4 sm:px-6 lg:px-0">
      <HeroSection />
      <StatisticsSection />
      <FeaturedLawyersSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}

export default Home;
