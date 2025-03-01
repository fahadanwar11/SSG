import ContactUsCard from "@/common/ContactUsCard";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import IMAGES from "@/assets/images";

function Homepage() {
  return (
    <>
      <img src={IMAGES.SERVICES_IMG} />
      <HeroSection />
      <Services />
      <ContactUsCard />
    </>
  );
}

export default Homepage;
