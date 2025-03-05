import { lazy } from "react";

const Homepage = lazy(() => import("./Homepage"));
const AboutUs = lazy(() => import("./AboutUs"));
const Services = lazy(() => import("./Services"));
const ContactUs = lazy(() => import("./ContactUs"));
const Sectors = lazy(() => import("./Sectors"));

const WebPages = {
  Homepage,
  AboutUs,
  Services,
  ContactUs,
  Sectors,
};
export default WebPages;
