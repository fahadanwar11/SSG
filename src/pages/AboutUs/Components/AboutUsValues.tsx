import { motion } from "framer-motion";

export default function AboutUsValues() {
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-16 md:py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3"
          >
            Why Choose Us?
          </motion.h2>

          <motion.ul className="space-y-4">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start"
            >
              <div className="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Highly Trained Security Personnel
                </span>{" "}
                – Licensed and professional guards.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start"
            >
              <div className="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Tailored Security Solutions
                </span>{" "}
                – Services designed to meet your specific needs.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start"
            >
              <div className="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">24/7 Protection</span> –
                Dependable security, day and night.
              </p>
            </motion.li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-gray-900 font-medium"
          >
            Contact us today for a free consultation!
          </motion.p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-gray-900 text-white p-8 rounded-lg shadow-sm"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold mb-4 border-b border-gray-700 pb-3"
          >
            Our Mission
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-full flex flex-col"
          >
            <p className="text-white/90 text-lg leading-relaxed flex-grow">
              To provide exceptional security services that protect people,
              property, and businesses with professionalism and integrity.
            </p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-auto pt-8"
            >
              <div className="w-16 h-1 bg-white/30 rounded"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3"
          >
            Our Values
          </motion.h2>

          <motion.ul className="space-y-6">
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professionalism
              </h3>
              <p className="text-gray-700">
                Committed to excellence in service delivery.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Reliability
              </h3>
              <p className="text-gray-700">
                Always available to protect what matters most.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Integrity
              </h3>
              <p className="text-gray-700">
                Ethical, transparent, and accountable.
              </p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
