import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  bulletPoints?: string[];
}

const services: Service[] = [
  {
    id: "01",
    number: "01",
    title: "Security Guard Services",
    description:
      "Our professional security guards provide visible protection and rapid response, ensuring safety at all times.",
    bulletPoints: [
      "Corporate & Commercial Security",
      "Retail & Shopping Centre Security",
      "Residential Building Security",
      "Construction Site Protection",
    ],
  },
  {
    id: "02",
    number: "02",
    title: "Mobile Patrols",
    description:
      "Ensure continuous surveillance and deterrence with our mobile patrol services.",
  },
  {
    id: "03",
    number: "03",
    title: "Event Security",
    description:
      "We provide specialized security teams for private and corporate events.",
  },
  {
    id: "04",
    number: "04",
    title: "Retail & Loss Prevention Security",
    description:
      "Protect your business from theft, vandalism, and fraud with our expert loss prevention officers.",
  },
  {
    id: "05",
    number: "05",
    title: "Customer Service",
    description:
      "Enhance your customer experience with our exceptional Customer Service, blending security and hospitality for a welcoming environment.",
  },
  {
    id: "06",
    number: "06",
    title: "Crowd Control",
    description:
      "Ensure event safety and order with our expert Crowd Control services, managing crowds effectively to prevent disturbances.",
  },
];

export default function Services() {
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl   mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-left lg:mb-12 md:mb-8 sm:mb-6 ">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.4 }}
          >
            <Card className="relative group h-full overflow-hidden border-t-1 border-gray-800 transition-all duration-500 ease-in-out rounded-t-lg rounded-md group-hover:rounded-none group-hover:border-none border-0 shadow-lg group-hover:shadow-none">
              {/* Hover Effect for the Top Border Falling Smoothly */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gray-800 group-hover:h-full group-hover:bg-gray-800 transition-all duration-500 ease-in-out rounded-t-lg group-hover:rounded-none" />

              <CardContent className="pt-8 relative z-10 transition-all duration-500 ease-in-out min-h-[200px] group-hover:text-white">
                <p className=" text-muted-foreground mb-2 font-semibold text-lg group-hover:text-white">
                  {service.number}
                </p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white">
                  {service.description}
                </p>
              </CardContent>

              <CardFooter className="z-10">
                <Button
                  variant="outline"
                  className="mt-4 group-hover: group-hover:text-black transition-all duration-500 ease-in-out cursor-pointer"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
