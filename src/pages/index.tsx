import { lazy } from "react";

const Homepage = lazy(() => import("./Homepage"));
const AboutUs = lazy(() => import("./AboutUs"));
const Services = lazy(() => import("./Services"));
const ContactUs = lazy(() => import("./ContactUs"));
const Sectors = lazy(() => import("./Sectors"));
const RequestADemo = lazy(() => import("./RequestDemo"));
const Careers = lazy(() => import("./Careers"));

const WebPages = {
  Homepage,
  AboutUs,
  Services,
  ContactUs,
  Sectors,
  RequestADemo,
  Careers,
};
export default WebPages;
