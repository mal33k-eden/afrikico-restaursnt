import HeroSection from "./Sections/HeroSection";
import WhyChooseSection from "./Sections/WhyChooseSection";
import AboutSection from "./Sections/AboutSection";
import MenuSection from "./Sections/MenuSection";
import TestimonialSection from "./Sections/TestimonialSection";
import FaqSection from "./Sections/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <WhyChooseSection />
      <TestimonialSection />
      <FaqSection/>
    </>
  );
}
