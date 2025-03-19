import ContactUsCard from "@/common/ContactUsCard";
import AboutUsBanner from "./Components/AboutUsBanner";
// import AboutUsCard from "./Components/AboutUsCard";
import AboutUsSlides from "./Components/AboutUsSlides";
import FAQSection from "@/common/Faqs";
import AboutUsValues from "./Components/AboutUsValues";

function AboutUs() {
  return (
    <>
      <AboutUsBanner />
      <AboutUsValues />
      {/* <AboutUsCard /> */}
      <AboutUsSlides />
      <FAQSection />
      <ContactUsCard />
    </>
  );
}

export default AboutUs;
