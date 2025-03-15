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
import { NavLink } from "react-router-dom";
import { useState } from "react";
import IMAGES from "@/assets/images";

const ServicesSubmenu = [
  {
    title: "Security Guard Services",
    link: "/services/security-guard-services",
  },
  {
    title: "Asset Protection",
    link: "/services/asset-protection",
  },

  // {
  //   title: "Mobile Patrols",
  //   link: "/services/mobile-patrols",
  // },
  {
    title: "Event Security",
    link: "/services/event-security",
  },
  {
    title: "Concierge Security Services",
    link: "/services/concierge-security-services",
  },
  // {
  //   title: "Retail & Loss Prevention Security",
  //   link: "/services/retail-loss-prevention",
  // },
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
  // const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm">
      <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink
            to=""
            onClick={() => (window.location.href = "/")}

            // className="text-white text-2xl font-bold tracking-wider"
          >
            <img
              src={IMAGES.LOGO}
              alt="Security Service Group"
              className="h-18 w-18 object-cover object-center"
            />
          </NavLink>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex lg:space-x-10 md:space-x-6 font-semibold text-sm lg:text-lg">
            <NavLink
              to=""
              onClick={() => (window.location.href = "/about-us")}
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
                        onClick={() => (window.location.href = service.link)}
                        //  onClick={() => navigate(service.link)}
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
                        <div
                          key={index}
                          onClick={() => (window.location.href = sector.link)}
                          //    onClick={() => navigate(sector.link)}
                          className="text-primary hover:font-semibold hover:underline transition-colors p-1 cursor-pointer"
                        >
                          {sector.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <NavLink
              to=""
              onClick={() => (window.location.href = "/careers")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              CAREERS
            </NavLink>
          </div>

          {/* Mobile Menu Button and Contact Button */}
          <div className="flex items-center space-x-3">
            {/* Contact Button - Desktop */}
            <div className="hidden md:block">
              <Button
                className="bg-secondary text-black hover:bg-secondary px-2.5 lg:px-4 text-base"
                size="lg"
                asChild
              >
                <NavLink
                  to=""
                  onClick={() => (window.location.href = "/request-a-quote")}
                >
                   REQUEST A QUOTE
                </NavLink>
              </Button>
            </div>

            <div className="hidden md:block">
              <Button
                className="bg-secondary text-black hover:bg-secondary px-2.5 lg:px-4 text-base"
                size="lg"
                asChild
              >
                <NavLink
                  to=""
                  onClick={() => (window.location.href = "/contact")}
                >
                  CONTACT US
                </NavLink>
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
                  className="bg-primary/95 text-white border-l border-gray-800 overflow-y-scroll w-[300px] px-4"
                >
                  <div className="flex flex-col space-y-6 mt-8">
                    <NavLink
                      to=""
                      onClick={() => (window.location.href = "/about-us")}
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
                          <div
                            key={index}
                            onClick={() =>
                              (window.location.href = service.link)
                            }
                            // to={service.link}
                            className="block py-2 text-gray-300 hover:text-white transition-colors"
                          >
                            {service.title}
                          </div>
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
                          <div
                            key={index}
                            onClick={() => (window.location.href = sector.link)}
                            //   to={sector.link}
                            className="block py-2 text-gray-300 hover:text-white transition-colors"
                          >
                            {sector.title}
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <NavLink
                      to=""
                      onClick={() => (window.location.href = "/careers")}
                      className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
                    >
                      CAREERS
                    </NavLink>

                    <div className="pt-2.5">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <NavLink
                          to=""
                          onClick={() =>
                            (window.location.href = "/request-a-quote")
                          }
                        >
                          REQUEST A QUOTE
                        </NavLink>
                      </Button>
                    </div>

                    <div className="pt-2.5 mb-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <NavLink
                          to=""
                          onClick={() => (window.location.href = "/contact")}
                          className="text-sm"
                        >
                          CONTACT US
                        </NavLink>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
