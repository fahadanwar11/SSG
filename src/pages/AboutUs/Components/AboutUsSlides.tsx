import { motion } from "framer-motion";

export default function AboutUsSlides() {
  return (
    <div className="flex flex-col w-full">
      {/* First Section - White Background */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Feel Confident That We&apos;ve Got You Covered
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-gray-700">
              At SSG, security meets crowd control excellence. We specialize in
              licensed venues and events, prioritizing professionalism,
              training, and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Second Section - Dark Background */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-white">
              At SSG, we excel in managing dynamic crowd environments. Our
              dedicated team of security professionals ensures safety for
              patrons, staff, and assets through tailored crowd control
              strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Third Section - White Background with Two Columns */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-700 mt-4">
              Our commitment to professionalism shines in every service aspect.
              Expect a skilled, dedicated team from SSG, upholding integrity,
              reliability, and accountability for seamless security management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-gray-700">
              Our approach to security isn&apos;t just about physical protocols,
              but also in communication. Effective crowd control demands nuance
              and understanding crowd dynamics, with the ability to de-escalate
              situations professionally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fourth Section - Dark Background */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-white">
              Furthermore, our emphasis on training ensures that our personnel
              are equipped with the latest industry knowledge and techniques. We
              invest in continuous training programs to keep our team at the
              forefront of security innovations, enabling us to adapt to
              evolving challenges and maintain a proactive approach to crowd
              control.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose SSG
            </h2>
            <p className="text-gray-700 mt-4">
              For a security solution that goes beyond the ordinary – where
              manpower, professionalism, training, and customer service converge
              to create a safe and secure environment for licensed venues and
              events.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
