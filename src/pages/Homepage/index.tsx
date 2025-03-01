import ContactUsCard from "@/common/ContactUsCard";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import FAQSection from "@/common/Faqs";

function Homepage() {
  return (
    <>
      <HeroSection />
      <Services />
      <FAQSection />
      <ContactUsCard />
    </>
  );
}

export default Homepage;
