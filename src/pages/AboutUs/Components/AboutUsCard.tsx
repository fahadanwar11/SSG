import { motion } from "framer-motion";
import IMAGES from "@/utils/images/index";

export default function AboutUsCard() {
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg"
        >
          <div className="w-full mb-4 min-h-[120px] flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Your First Line Of 
              Defence.
            </h1>
          </div>
          <img
            src={IMAGES.ABOUT_US_CAMERA_ONE}
            alt="Security camera on a building"
            className="object-cover"
          />
        </motion.div>

        <div className="spac-y-12 flex flex-col lg:mt-16 md:mt-0 justify-center">
          <motion.div
          className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-medium text-gray-700 mb-2">
              400+
            </h2>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Satisfied Clients
            </h3>
            <p className="text-gray-600">
              We take great pride in the relationships we have built.
            </p>
          </motion.div>

          <motion.div
          className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-medium text-gray-700 mb-2">
              100%
            </h2>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Secure and Safe
            </h3>
            <p className="text-gray-600">
              We are committed to ensuring the protection of your event, asset
              or property.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-medium text-gray-700 mb-2">
              12+
            </h2>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Years Experience
            </h3>
            <p className="text-gray-600">
              You can trust our extensive years of experience in the security
              industry.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg"
        >
          <div>
            <p className="text-lg text-gray-600 w-full min-h-[120px] rounded-lg mb-4">
              We specialise in expert security services for businesses and
              individuals, including Crowd Control, Events, Personal Protection
              and more.
            </p>
          </div>
          <img
            src={IMAGES.ABOUT_US_CAMERA_TWO}
            alt="Security camera on wall"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
