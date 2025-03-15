import { useParams } from "react-router-dom";

interface SectorsDetail {
  title: string;
  link: string;
  imgUrl: string;
  tagline: string;
  introduction: string;
  services: string[];
  whyChoose: string[];
  contactUs: string;
}

const sectorsDetails: SectorsDetail[] = [
  {
    title: "Corporate & Office Security",
    link: "/sectors/corporate-office-security",
    imgUrl: "/sectorImages/corparateOfficeSecurity.JPEG",
    tagline: "Ensuring the safety of corporate environments.",
    introduction:
      "At Security Service Group, we specialize in providing comprehensive security solutions for corporate offices in Melbourne. Our approach ensures a safe and secure working environment for businesses of all sizes.",
    services: [
      "Access Control: Manage and monitor access to ensure only authorized personnel enter your premises.",
      "Surveillance Systems: State-of-the-art cameras and monitoring equipment to oversee all activities within and around your offices.",
      "Emergency Response: Quick and efficient response to any security incidents, ensuring minimal disruption to your business operations.",
    ],
    whyChoose: [
      "Tailored Security Plans: Customized security strategies designed to meet the specific needs of your corporate environment.",
      "Professional Staff: Highly trained security personnel who maintain a professional demeanor while ensuring your office is secure.",
      "Advanced Technology: Utilizing the latest security technology to provide superior protection.",
    ],
    contactUs:
      "Secure your corporate office with Security Service Group. Contact us today to discuss your specific security needs in Melbourne.",
  },
  {
    title: "Retail & Shopping Centres",
    link: "/sectors/retail-shopping-centres",
    imgUrl: "/sectorImages/eventsAndPrivateSector.JPEG",
    tagline: "Protecting retail spaces and shopping centres.",
    introduction:
      "Security Service Group offers specialized security services for retail shopping centres in Melbourne, ensuring a safe shopping environment for customers and a secure setting for retailers.",
    services: [
      "Loss Prevention: Strategies and personnel focused on reducing theft and safeguarding merchandise.",
      "Customer Safety: Measures to ensure the safety of all visitors, including emergency response and crowd management.",
      "Continuous Monitoring: Constant surveillance to detect and respond to potential security threats promptly.",
    ],
    whyChoose: [
      "Experienced in Retail Security: Deep understanding of the unique challenges faced by retail environments.",
      "Customized Solutions: Security solutions tailored to the size and complexity of your shopping centre.",
      "Focus on Service: Not just security, but enhancing the overall customer experience through safety.",
    ],
    contactUs:
      "Enhance the security of your retail space with Security Service Group. Reach out to learn more about our services in Melbourne.",
  },
  {
    title: "Residential Buildings",
    link: "/sectors/residential-buildings",
    imgUrl: "/sectorImages/residentialBuildings.JPEG",
    tagline: "Securing residential properties.",
    introduction:
      "Security Service Group provides robust security solutions for residential buildings, ensuring the safety and peace of mind of residents in Melbourne.",
    services: [
      "24/7 On-Site Security: Dedicated guards to provide continuous protection.",
      "CCTV Surveillance: Comprehensive camera systems to monitor common areas and entry points.",
      "Access Management: Systems to control who can enter the building, enhancing resident security.",
    ],
    whyChoose: [
      "Resident-Centric Approach: Our services focus on the needs and safety of residents.",
      "Reliable and Efficient: Trusted security measures that provide effective coverage.",
      "Technology-Driven: Modern security technologies for enhanced protection.",
    ],
    contactUs:
      "Keep your residential building safe with Security Service Group. Contact us for a personalized security solution in Melbourne.",
  },
  {
    title: "Events & Private Functions",
    link: "/sectors/events-private-functions",
    imgUrl: "/sectorImages/eventsAndPrivateSector.JPEG",
    tagline: "Security for events and private functions.",
    introduction:
      "Ensure the success and safety of your events and private functions with Security Service Group's expert security services in Melbourne.",
    services: [
      "Event Guards: Professional guards trained to handle crowds and manage various event-related security tasks.",
      "Crowd Control: Effective strategies to manage crowd movements and prevent incidents.",
      "Emergency Plans: Comprehensive emergency response plans to address any situation promptly.",
    ],
    whyChoose: [
      "Event Security Specialists: Extensive experience in securing all types of events.",
      "Customized Security Detail: Plans tailored specifically for the nature and size of your event.",
      "Focus on Safety: Ensuring that your event runs smoothly with maximum safety for all attendees.",
    ],
    contactUs:
      "Make your next event a safe one with Security Service Group. Get in touch to find out how we can help secure your function in Melbourne.",
  },
  {
    title: "Construction Sites",
    link: "/sectors/construction-sites",
    imgUrl: "/sectorImages/constructionSite.JPEG",
    tagline: "Guarding construction sites.",
    introduction:
      "Protect your construction site in Melbourne with specialized security services from Security Service Group, designed to prevent theft and vandalism.",
    services: [
      "Site Surveillance: Monitoring equipment to oversee all activities on the site.",
      "Access Control: Ensuring that only authorized personnel can enter the site.",
      "Patrol Services: Regular patrols to deter criminal activity and ensure compliance with safety protocols.",
    ],
    whyChoose: [
      "Construction Security Expertise: Knowledgeable about the specific security needs of construction sites.",
      "Comprehensive Coverage: Full-service security solutions that cover every aspect of site safety.",
      "Proactive Measures: Preventative strategies to minimize risks and potential disruptions.",
    ],
    contactUs:
      "Secure your construction site with Security Service Group. Contact us today for a consultation on our security services in Melbourne.",
  },
];

function Sectors() {
  const { sectorId } = useParams<{ sectorId: string }>();

  // Look up the sector based on the last segment of the link
  const selectedSector: SectorsDetail | null = sectorId
    ? sectorsDetails.find(
        (sector) => sector.link.split("/").pop() === sectorId
      ) || null
    : null;

  return (
    <>
      <div className="relative inset-0 h-full">
        <img
          src={selectedSector?.imgUrl || "/placeholder.svg"}
          alt={selectedSector?.title || "Sector"}
          className="w-full h-[550px] object-cover object-center bg-black/50 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 max-w-7xl lg:w-10/12 w-11/12 mx-auto flex flex-col justify-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">{selectedSector?.title}</h2>
            <p className="text-lg max-w-xl">{selectedSector?.tagline}</p>
          </div>
        </div>
      </div>

      <div className="lg:py-20 py-10 max-w-7xl lg:w-10/12 w-11/12 mx-auto">
        <div className="lg:w-3/4 w-full">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg">{selectedSector?.introduction}</p>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="list-disc pl-6 space-y-3">
              {selectedSector?.services.map((service, index) => (
                <li key={index} className="text-base">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Security Service Group?
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              {selectedSector?.whyChoose.map((reason, index) => (
                <li key={index} className="text-base">
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div
            className="mt-8 p-6 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => (window.location.href = "/contact")}
          >
            <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>

            <p className="text-base cursor-pointer">
              {selectedSector?.contactUs}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectors;
