import Navbar from "@/common/Navbar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Footer from "@/common/Footer";
import ContactUsCard from "./Components/ContactUsCard";

function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <ContactUsCard />
      <Footer />
    </div>
  );
}

export default Homepage;
