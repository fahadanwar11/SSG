import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm ">
      <div className="w-10/12 mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-white text-2xl font-bold tracking-wider"
          >
            ON GUARD
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/services"
              className="text-white hover:text-gray-300 transition-colors"
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/sectors"
              className="text-white hover:text-gray-300 transition-colors"
            >
              SECTORS
            </NavLink>
          </div>

          {/* Contact Button */}
          <Button variant="secondary" size="lg" asChild>
            <NavLink to="/contact">CONTACT US</NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
}
