import IMAGES from "@/utils/images/index";
import { useParams } from "react-router-dom";

interface ServiceDetail {
  title: string;
  link: string;
  tagline: string;
  description: string;
}

const servicesDetails: ServiceDetail[] = [
  {
    title: "Security Services",
    link: "/services/security-services",
    tagline:
      "Elevate your events with our Event Management Planning service, guaranteeing seamless execution and attendee safety.",
    description:
      "Our Event Management Planning service offers tailored solutions for seamless and secure event execution, from concept to completion. Specializing in security planning for diverse events, including corporate functions and private parties, we work closely with you to develop customized security plans. With expertise in crowd control, emergency response, and collaboration with law enforcement, we ensure a memorable and safe experience for all attendees, allowing you to focus on hosting an exceptional event.",
  },
  {
    title: "Facility Management",
    tagline:
      "Our officers discreetly collect evidence of on-site offenders, facilitating successful prosecution and police notification upon apprehension.",
    link: "/services/facility-management",
    description:
      "Our Facility Management service provides comprehensive security solutions for commercial and residential properties, ensuring the safety of occupants and assets. Our expert security officers conduct regular patrols and inspections, monitor security systems, and respond to emergencies promptly. We offer tailored security plans to meet your unique needs, providing peace of mind and protection for your property.",
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
