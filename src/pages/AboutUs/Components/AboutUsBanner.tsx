// import IMAGES from "@/assets/images";
import { motion } from "framer-motion";

function AboutUsBanner() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 h-full">
        <img
          src={"/aboutUsBanner.JPEG"}
          alt="Security team in front of city skyline"
          className="object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative w-11/12 lg:w-10/12 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="pt-40 md:pt-48 lg:pt-56 max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Your Trusted Security Partner in Melbourne
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "easeInOut",
              duration: 0.6,
              delay: 0.4,
            }}
            className="text-md md:text-lg text-white/90 max-w-3xl"
          >
            Security Service Group is a professional security company dedicated
            to delivering high-quality security services across Melbourne. Our
            team of highly trained security guards provides a strong and
            reliable presence to safeguard businesses, properties, and people.
            With a commitment to professionalism and excellence, we ensure that
            our clients receive top-tier security solutions tailored to their
            specific needs.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUsBanner;
