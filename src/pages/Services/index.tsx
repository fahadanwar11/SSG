import IMAGES from "@/assets/images";
import { useParams } from "react-router-dom";

interface ServiceDetail {
  title: string;
  link: string;
  tagline: string;
  description: string;
}

const servicesDetails: ServiceDetail[] = [
  {
    title: "Security Guard Services",
    link: "/services/security-guard-services",
    tagline:
      "Elevate your events with our Event Management Planning service, guaranteeing seamless execution and attendee safety.",
    description:
      "Our Event Management Planning service offers tailored solutions for seamless and secure event execution, from concept to completion. Specializing in security planning for diverse events, including corporate functions and private parties, we work closely with you to develop customized security plans. With expertise in crowd control, emergency response, and collaboration with law enforcement, we ensure a memorable and safe experience for all attendees, allowing you to focus on hosting an exceptional event.",
  },
  {
    title: "Mobile Patrols",
    tagline:
      "Our officers discreetly collect evidence of on-site offenders, facilitating successful prosecution and police notification upon apprehension.",
    link: "/services/mobile-patrols",
    description:
      "Our Facility Management service provides comprehensive security solutions for commercial and residential properties, ensuring the safety of occupants and assets. Our expert security officers conduct regular patrols and inspections, monitor security systems, and respond to emergencies promptly. We offer tailored security plans to meet your unique needs, providing peace of mind and protection for your property.",
  },
  {
    title: "Event Security",
    tagline:
      "Our expert security teams are trained to handle all aspects of event security, from access control to crowd management.",
    link: "/services/event-security",
    description:
      "Our Event Security service provides specialized security teams for private and corporate events, ensuring the safety of guests and the success of your event. Our expert security officers are trained to handle all aspects of event security, from access control to crowd management. With a proactive and strategic approach, we deliver reliable protection and a welcoming environment for all attendees.",
  },
  {
    title: "Retail & Loss Prevention Security",
    tagline:
      "Our Loss Prevention Officers are trained to identify and prevent theft, fraud, and vandalism, protecting your business and assets.",
    link: "/services/retail-loss-prevention",
    description:
      "Our Loss Prevention Officers are trained to identify and prevent theft, fraud, and vandalism, protecting your business and assets. With expertise in surveillance, investigation, and risk assessment, we provide tailored security solutions to minimize losses and maintain a safe shopping environment. Our proactive approach to loss prevention ensures the security of your business and the safety of your customers.",
  },
  {
    title: "Customer Service",
    tagline:
      "Our Customer Service Officers provide a welcoming and secure environment, enhancing the customer experience with a blend of security and hospitality.",
    link: "/services/customer-service",
    description:
      "Our Customer Service Officers provide a welcoming and secure environment, enhancing the customer experience with a blend of security and hospitality. With a focus on customer service excellence, our officers are trained to engage with customers, address inquiries, and provide assistance as needed. By combining security expertise with exceptional customer service, we create a positive and welcoming environment for your business.",
  },
  {
    title: "Crowd Control",
    tagline:
      "Our Crowd Control services ensure event safety and order, managing crowds effectively to prevent disturbances and maintain a secure environment.",
    link: "/services/crowd-control",
    description:
      "Our Crowd Control services ensure event safety and order, managing crowds effectively to prevent disturbances and maintain a secure environment. With expertise in crowd management, conflict resolution, and emergency response, our security officers provide a visible presence to deter unwanted behavior and ensure the safety of all attendees. By working closely with event organizers and stakeholders, we create a safe and enjoyable experience for guests.",
  },
];

function Services() {
  const { serviceId } = useParams<{ serviceId: string }>();

  // Look up the service based on the last segment of the link
  const selectedService: ServiceDetail | null = serviceId
    ? servicesDetails.find(
        (service) => service.link.split("/").pop() === serviceId
      ) || null
    : null;

  return (
    <>
      <div className="relative inset-0 h-full">
        <img
          src={IMAGES.SERVICES_IMG}
          alt="Services"
          className="w-full h-96 object-cover inset-0 bg-black/50 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 max-w-7xl lg:w-10/12 w-11/12  mx-auto flex flex-col justify-center">
          <div className=" text-white">
            <h2 className="text-4xl font-bold mb-4">
              {selectedService?.title}
            </h2>
            <p className="text-lg max-w-xl ">{selectedService?.tagline}</p>
          </div>
        </div>
      </div>

      <div className="lg:py-20 py-10 max-w-7xl lg:w-10/12 w-11/12 mx-auto">
        <p className="w-1/2">{selectedService?.description}</p>
      </div>
    </>
  );
}

export default Services;
