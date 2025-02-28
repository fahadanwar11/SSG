import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          // Add a dynamic route for the services page
          <Route path="/services/:serviceId" element={<Services />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
