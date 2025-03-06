import IMAGES from "@/assets/images";
import { useParams } from "react-router-dom";

interface ServiceDetail {
  title: string;
  link: string;
  introduction: string;
  offerings: string[];
  whyChoose: string[];
  contactUs: string;
}

const servicesDetails: ServiceDetail[] = [
  {
    title: "Security Guard Services",
    link: "/services/security-guard-services",
    introduction:
      "At Security Service Group, we pride ourselves on providing premier security guard services in Melbourne, ensuring the utmost safety and security of your premises. Our trained guards are equipped to handle a variety of security situations with professionalism and effectiveness, making us the trusted choice for protecting businesses, residential complexes, and individual clients.",
    offerings: [
      "Commercial Security: Enhance the security of your business premises with our vigilant guards who expertly monitor and manage safety protocols.",
      "Residential Security: Ensure your home is always protected with our dedicated security guards, available around the clock to provide peace of mind.",
      "Personal Security: Benefit from our bespoke personal security services, designed to provide high-level protection for VIPs and individuals requiring specialized security attention.",
    ],
    whyChoose: [
      "Expertly Trained Guards: Each of our security guards undergoes comprehensive training to adeptly handle various security challenges and scenarios.",
      "Customized Security Solutions: We tailor our security services to meet the specific needs and preferences of each client, ensuring optimal safety and satisfaction.",
      "Commitment to Excellence: Our commitment to delivering the highest standard of security services is unwavering, using advanced security practices and technologies to ensure your safety.",
    ],
    contactUs:
      "To learn more about how Security Service Group can enhance the security of your property in Melbourne, please contact us today. Trust us to provide the protection you need, where professionalism and peace of mind come first.",
  },
  {
    title: "Mobile Patrols",
    link: "/services/mobile-patrols",
    introduction:
      "Security Service Group offers dynamic mobile patrol services across Melbourne, providing an efficient and effective way to monitor large properties. Our mobile patrols are ideal for deterring crime and ensuring rapid response times.",
    offerings: [
      "Routine and Random Patrols: We conduct both scheduled and surprise patrols to maintain a secure environment.",
      "Custom Patrol Routes: Tailored routes that focus on high-risk areas to maximize security coverage.",
      "Visible Security Presence: Our marked patrol cars serve as a strong deterrent to potential intruders.",
    ],
    whyChoose: [
      "Advanced Technology: We utilize the latest in GPS and real-time communication technology.",
      "Professional Patrol Officers: Our officers are trained to spot unusual activities and respond swiftly.",
      "24/7 Coverage: Security solutions that don't rest, ensuring your property is protected at all times.",
    ],
    contactUs:
      "Discover the benefits of our mobile patrols in Melbourne by contacting Security Service Group today.",
  },
  {
    title: "Event Security",
    link: "/services/event-security",
    introduction:
      "Ensure the safety of your events with Security Service Group's specialized event security services. We cater to all types of events in Melbourne, from corporate gatherings to large public celebrations.",
    offerings: [
      "Access Control: Manage guest entry and exit points efficiently.",
      "Crowd Management: Techniques to prevent overcrowding and ensure orderly conduct.",
      "Emergency Protocols: Well-practiced procedures to handle any incident swiftly.",
    ],
    whyChoose: [
      "Experienced Personnel: Our staff are skilled in all aspects of event security.",
      "Custom Security Strategies: Security plans developed specifically for your event's needs.",
      "Complete Event Coverage: From initial planning to final guest departure, we handle it all.",
    ],
    contactUs:
      "Plan your next Melbourne event with confidence by enlisting Security Service Group's expert security services.",
  },
  {
    title: "Retail & Loss Prevention Security",
    link: "/services/retail-loss-prevention",
    introduction:
      "Minimize theft and safeguard your assets with Security Service Group's retail loss prevention services in Melbourne. Our approach combines on-site security personnel with state-of-the-art surveillance technology.",
    offerings: [
      "On-Site Personnel: Guards trained to deter theft and ensure in-store security.",
      "Advanced Surveillance: Utilizing the latest in CCTV technology to oversee and protect your retail space.",
      "Inventory Management: Strategies to prevent inventory shrinkage and enhance profitability.",
    ],
    whyChoose: [
      "Focused Expertise: Our team specializes in the unique challenges faced by retailers.",
      "Proactive Measures: We emphasize prevention to minimize potential losses.",
      "Tailored Solutions: Customized plans to fit the specific needs of your retail environment.",
    ],
    contactUs:
      "Secure your retail business in Melbourne by partnering with Security Service Group.",
  },
  {
    title: "Customer Service",
    link: "/services/customer-service",
    introduction:
      "Elevate your customer experience with Security Service Group's customer service security solutions in Melbourne. Our approach combines security and hospitality to create a welcoming and secure environment for your patrons.",
    offerings: [
      "Professional Staff: Security personnel trained in customer service to provide a positive experience for your guests.",
      "Conflict Resolution: Techniques to handle disputes and maintain a safe environment.",
      "Emergency Response: Preparedness to handle any situation that may arise.",
    ],
    whyChoose: [
      "Customer-Centric Approach: We prioritize the safety and satisfaction of your guests.",
      "Trained Professionals: Our staff are equipped to handle a variety of customer interactions.",
      "Comprehensive Services: Security solutions that enhance your customer experience.",
    ],
    contactUs:
      "Enhance your Melbourne business with Security Service Group's customer service security solutions.",
  },
  {
    title: "Crowd Control",
    link: "/services/crowd-control",
    introduction:
      "Manage large crowds with Security Service Group's expert crowd control services in Melbourne. We provide comprehensive solutions for managing crowds at events, ensuring safety and order.",
    offerings: [
      "Effective Barrier Solutions: Use of barriers to guide and control crowd movements.",
      "Crowd Monitoring: Employing CCTV and on-site personnel to monitor and manage the crowd effectively.",
      "Emergency Preparedness: Strategies and personnel in place for quick and safe evacuations.",
    ],
    whyChoose: [
      "Experienced Planners: Our team is adept at handling both small and large-scale events.",
      "Professional Staff: Trained to maintain order and ensure safety.",
      "Strategic Approaches: Tailored crowd control strategies that suit the specific dynamics of your event.",
    ],
    contactUs:
      "Ensure your Melbourne event runs smoothly with Security Service Group's crowd control services.",
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
          src={IMAGES.SERVICES_IMG || "/placeholder.svg"}
          alt="Services"
          className="w-full h-96 object-cover inset-0 bg-black/50 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 max-w-7xl lg:w-10/12 w-11/12 mx-auto flex flex-col justify-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              {selectedService?.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="lg:py-20 py-10 max-w-7xl lg:w-10/12 w-11/12 mx-auto">
        <div className="lg:w-3/4 w-full">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg">{selectedService?.introduction}</p>
          </div>

          {/* Offerings */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Offerings</h3>
            <ul className="list-disc pl-6 space-y-3">
              {selectedService?.offerings.map((offering, index) => (
                <li key={index} className="text-base">
                  {offering}
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
              {selectedService?.whyChoose.map((reason, index) => (
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
            <p className="text-base">{selectedService?.contactUs}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
