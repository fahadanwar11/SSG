import { useParams } from "react-router-dom";

interface SectorsDetail {
  title: string;
  link: string;
  tagline: string;
  description: string;
}

const sectorsDetails: SectorsDetail[] = [
  {
    title: "Corporate & Office Security",
    link: "/sectors/corporate-office-security",
    tagline: "Ensuring the safety of corporate environments.",
    description:
      "We provide top-notch security services for corporate offices and business environments.",
  },
  {
    title: "Retail & Shopping Centres",
    link: "/sectors/retail-shopping-centres",
    tagline: "Protecting retail spaces and shopping centres.",
    description:
      "Our security solutions are tailored for retail stores and shopping centres to prevent theft and ensure customer safety.",
  },
  {
    title: "Residential Buildings",
    link: "/sectors/residential-buildings",
    tagline: "Securing residential properties.",
    description:
      "We offer comprehensive security services for residential buildings to keep residents safe.",
  },
  {
    title: "Events & Private Functions",
    link: "/sectors/events-private-functions",
    tagline: "Security for events and private functions.",
    description:
      "Our team is experienced in providing security for various events and private functions.",
  },
  {
    title: "Construction Sites",
    link: "/sectors/construction-sites",
    tagline: "Guarding construction sites.",
    description:
      "We ensure the safety and security of construction sites with our specialized services.",
  },
];

function Sectors() {
  const { sectorId } = useParams<{ sectorId: string }>();

  // Look up the sector based on the last segment of the link
  const selectedService: SectorsDetail | null = sectorId
    ? sectorsDetails.find(
        (sector) => sector.link.split("/").pop() === sectorId
      ) || null
    : null;

  return (
    <>
      <div className="relative inset-0 h-full">
        <img
          src="/sectorsImg.JPEG"
          alt="Sectors"
          className="w-full h-[550px] object-cover object-top bg-black/50 mix-blend-multiply"
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

export default Sectors;
