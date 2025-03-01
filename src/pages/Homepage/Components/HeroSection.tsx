// import IMAGES from "@/assets/images";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 h-full">
        <img
          // src={IMAGES?.HOMEPAGE_BANNER_IMG}
          src="./bannerImg.JPEG"
          alt="Security team in front of city skyline"
          className="object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative lg:w-10/12 max-w-7xl w-11/12 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="pt-40 md:pt-48 lg:pt-56 max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Professional Security Services in Melbourne
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.6,
              delay: 0.4,
            }}
            className="text-md md:text-lg text-white/90 max-w-xl"
          >
            At Security Service Group, we are committed to providing top-tier
            security solutions that ensure the safety of businesses, properties,
            and communities. Our expert security professionals deliver reliable
            protection with a proactive and strategic approach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className="mt-8 space-x-4"
          >
            <Button
              size="lg"
              className="text-lg font-medium px-8 py-7 cursor-pointer"
            >
              Learn More
            </Button>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="text-lg font-medium px-8 py-7 cursor-pointer"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
