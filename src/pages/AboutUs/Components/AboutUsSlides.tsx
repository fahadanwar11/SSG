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
              What Sets Us Apart?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-gray-700">
              At Security Service Group, we go beyond just providing security—we
              deliver peace of mind, reliability, and professionalism. Here's
              what makes us stand out in the industry:
            </p>
          </motion.div>
        </div>
      </section>

      {/* Second Section - Dark Background */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. Highly Trained Security Guards
                </h3>
                <p className="text-white">
                  Our security personnel undergo rigorous training to handle
                  various security challenges with confidence. We ensure that
                  every guard is licensed, professional, and capable of
                  maintaining a secure environment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. 24/7 Reliable Security Services
                </h3>
                <p className="text-white">
                  We provide round-the-clock security solutions, ensuring that
                  businesses and properties remain protected at all times.
                  Whether it's daytime operations or overnight surveillance, we
                  are always on duty.
                </p>
              </div>
            </div>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Tailored Security Solutions
            </h3>
            <p className="text-gray-700">
              Every client has unique security needs. We customize our security
              plans to suit specific requirements, ensuring maximum protection
              for commercial properties, residential buildings, construction
              sites, retail spaces, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4. Strong Customer Focus
            </h3>
            <p className="text-gray-700">
              Our approach is built on professionalism, courtesy, and strong
              client relationships. We prioritize clear communication and a
              proactive mindset to provide the best security service experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fourth Section - Dark Background */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  5. Competitive & Transparent Pricing
                </h3>
                <p className="text-white">
                  We offer fair and straightforward pricing with no hidden fees.
                  Our clients receive high-quality security services at
                  competitive rates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  6. Commitment to Excellence
                </h3>
                <p className="text-white">
                  We adhere to the highest industry standards, staying updated
                  with the latest security practices and technologies. Our
                  commitment to excellence ensures that our clients receive
                  top-tier security solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              7. Rapid Response & Problem-Solving
            </h3>
            <p className="text-gray-700 mt-2">
              Our security team is trained to act quickly and efficiently in any
              situation, ensuring threats are handled professionally and
              effectively. We pride ourselves on our ability to anticipate
              potential security issues and address them before they escalate.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 font-medium">
                Choose Security Service Group for a security solution that goes
                beyond the ordinary – where expertise, reliability, and
                exceptional service converge to create a safe and secure
                environment for your business, property, or event.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
