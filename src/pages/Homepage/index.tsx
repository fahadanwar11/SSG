import ContactUsCard from "@/common/ContactUsCard";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import FAQSection from "@/common/Faqs";
import TestimonialsSection from "./Components/Testimonials";

function Homepage() {
  return (
    <>
      <HeroSection />
      <Services />
      <TestimonialsSection />
      <FAQSection />
      <ContactUsCard />
    </>
  );
}

export default Homepage;
