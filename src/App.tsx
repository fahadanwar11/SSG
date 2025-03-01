import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Sectors from "./pages/Sectors";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/sectors/:sectorId" element={<Sectors />} />
        </Routes>
        <Footer />
        <Routes>
          <Route
            path="*"
            element={
              <div className="text-center text-4xl font-bold text-red-500 w-full h-screen flex items-center justify-center">
                PAGE NOT FOUND ERROR:404
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
