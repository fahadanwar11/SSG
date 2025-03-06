"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Menu } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import IMAGES from "@/assets/images";

const ServicesSubmenu = [
  {
    title: "Security Guard Services",
    link: "/services/security-guard-services",
  },
  {
    title: "Mobile Patrols",
    link: "/services/mobile-patrols",
  },
  {
    title: "Event Security",
    link: "/services/event-security",
  },
  {
    title: "Retail & Loss Prevention Security",
    link: "/services/retail-loss-prevention",
  },
  {
    title: "Customer Service",
    link: "/services/customer-service",
  },
  {
    title: "Crowd Control",
    link: "/services/crowd-control",
  },
];

const SectorsSubmenu = [
  {
    title: "Corporate & Office Security",
    link: "/sectors/corporate-office-security",
  },
  {
    title: "Retail & Shopping Centres",
    link: "/sectors/retail-shopping-centres",
  },
  {
    title: "Residential Buildings",
    link: "/sectors/residential-buildings",
  },
  {
    title: "Events & Private Functions",
    link: "/sectors/events-private-functions",
  },
  {
    title: "Construction Sites",
    link: "/sectors/construction-sites",
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm">
      <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink
            to="/"
            // className="text-white text-2xl font-bold tracking-wider"
          >
            <img
              src={IMAGES.LOGO}
              alt="Security Service Group"
              className="h-18 w-18 object-cover object-center"
            />
          </NavLink>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-12 font-semibold">
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
                    to=""
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

          {/* Mobile Menu Button and Contact Button */}
          <div className="flex items-center space-x-4">
            {/* Contact Button - Desktop */}
            <div className="hidden md:block">
              <Button
                className="bg-secondary text-black hover:bg-secondary "
                size="lg"
                asChild
              >
                <NavLink to="/contact">CONTACT US</NavLink>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-black/95 text-white border-l border-gray-800 w-[300px] px-4"
                >
                  <div className="flex flex-col space-y-6 mt-8">
                    <NavLink
                      to="/about-us"
                      className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
                    >
                      ABOUT US
                    </NavLink>

                    <Collapsible
                      open={isServicesOpen}
                      onOpenChange={setIsServicesOpen}
                      className="w-full"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium">
                        <span>SERVICES</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            isServicesOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 space-y-2 pl-4">
                        {ServicesSubmenu.map((service, index) => (
                          <NavLink
                            key={index}
                            to={service.link}
                            className="block py-2 text-gray-300 hover:text-white transition-colors"
                          >
                            {service.title}
                          </NavLink>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible
                      open={isSectorsOpen}
                      onOpenChange={setIsSectorsOpen}
                      className="w-full"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium">
                        <span>SECTORS</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            isSectorsOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 space-y-2 pl-4">
                        {SectorsSubmenu.map((sector, index) => (
                          <NavLink
                            key={index}
                            to={sector.link}
                            className="block py-2 text-gray-300 hover:text-white transition-colors"
                          >
                            {sector.title}
                          </NavLink>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <div className="pt-4">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-full"
                        asChild
                      >
                        <NavLink to="/contact">CONTACT US</NavLink>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Contact Button - Mobile (outside drawer for visibility) */}
            {/* <div className="md:hidden">
              <Button variant="secondary" size="sm" asChild>
                <NavLink to="/contact">CONTACT</NavLink>
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
