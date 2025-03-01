import ContactUsCard from "@/common/ContactUsCard";
import AboutUsBanner from "./Components/AboutUsBanner";
import AboutUsCard from "./Components/AboutUsCard";
import AboutUsSlides from "./Components/AboutUsSlides";
import FAQSection from "@/common/Faqs";

function AboutUs() {
  return (
    <>
      <AboutUsBanner />
      <AboutUsCard />
      <AboutUsSlides />
      <FAQSection />
      <ContactUsCard />
    </>
  );
}

export default AboutUs;
