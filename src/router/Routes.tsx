import WebPages from "@/pages";

const publicRoutes = [
  {
    path: "/",
    component: WebPages.Homepage,
    name: "Homepage",
  },
  {
    path: "/about-us",
    component: WebPages.AboutUs,
    name: "AboutUs",
  },
  {
    path: "/contact",
    component: WebPages.ContactUs,
    name: "ContactUs",
  },
  {
    path: "/services/:serviceId",
    component: WebPages.Services,
    name: "Services",
  },
  {
    path: "/sectors/:sectorId",
    component: WebPages.Sectors,
    name: "Sectors",
  },
  {
    path: "/request-a-quote",
    component: WebPages.RequestADemo,
    name: "RequestAQuote",
  },
  {
    path: "/careers",
    component: WebPages.Careers,
    name: "Careers",
  },
];

export default publicRoutes;
