import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useNavigate, NavLink } from "react-router-dom";

const ServicesSubmenu = [
  {
    title: "Security Services",
    link: "/services/security-services",
  },
  {
    title: "Facility Management",
    link: "/services/facility-management",
  },
];
const SectorsSubmenu = [
  {
    title: "Commercial",
    link: "/sectors",
  },
  {
    title: "Residential",
    link: "/sectors",
  },
];
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm ">
      <div className="w-11/12 lg:w-10/12 max-w-7xl   mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-white text-2xl font-bold tracking-wider"
          >
            ON GUARD
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-12">
            <NavLink
              to="/about-us"
              className="text-white hover:text-gray-300 transition-colors"
            >
              ABOUT US
            </NavLink>
            <HoverCard>
              <HoverCardTrigger asChild>
                <NavLink
                  to=""
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  SERVICES
                </NavLink>
              </HoverCardTrigger>
              <HoverCardContent className="w-60">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-4 flex flex-col">
                    {ServicesSubmenu.map((service, index) => (
                      <div
                        onClick={() => navigate(service.link)}
                        key={index}
                        className="text-primary hover:font-semibold hover:underline transition-colors p-1 cursor-pointer"
                      >
                        {service.title}
                      </div>
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <div className="relative z-20">
              <HoverCard>
                <HoverCardTrigger asChild className="relative z-20">
                  <NavLink
                    to="/sectors"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    SECTORS
                  </NavLink>
                </HoverCardTrigger>
                <HoverCardContent className="w-60 z-20">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1 flex flex-col">
                      {SectorsSubmenu.map((sector, index) => (
                        <NavLink
                          key={index}
                          to={sector.link}
                          className="text-primary hover:font-semibold hover:underline transition-colors p-1"
                        >
                          {sector.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
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
