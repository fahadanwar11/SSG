import { motion } from "framer-motion";

const ourServices = [
  {
    id: 1,
    service: "Commercial & Residential Buildings",
  },
  {
    id: 2,
    service: "Shopping Centers & Retail Stores",
  },
  {
    id: 3,
    service: "Construction Sites",
  },
  {
    id: 4,
    service: "Warehouses & Industrial Sites",
  },
  {
    id: 5,
    service: "Corporate Offices",
  },
];
export default function AboutUsValues() {
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-16 md:py-16 bg-white">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
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
                  Professional & Experienced Security Guards
                </span>{" "}
                – Our licensed security professionals are trained to handle a
                wide range of security challenges with confidence and
                efficiency.
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
                <span className="font-semibold">24/7 Security Solutions</span> –
                We provide round-the-clock security coverage, ensuring
                continuous protection for businesses and properties.
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
                <span className="font-semibold">Custom Security Plans </span> –
                We tailor our security services to meet the unique requirements
                of each client, offering personalized and effective security
                solutions.
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
                <span className="font-semibold">
                  Competitive & Transparent Pricing{" "}
                </span>{" "}
                – We offer fair and straightforward pricing with no hidden
                costs.
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
                <span className="font-semibold">Commitment to Excellence </span>{" "}
                – Our company upholds the highest standards of integrity,
                professionalism, and reliability in every security assignment.
              </p>
            </motion.li>
          </motion.ul>
        </motion.div>
        {/* Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-lg shadow-sm"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-4 border-b border-gray-200 pb-3"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/90 mb-8"
            >
            We specialize in providing unarmed security guard services for:
          </motion.p>
          <motion.ul className="space-y-4">
            {ourServices.map((service) => (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start md:mb-6 mb-2"
              >
                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-primary bg-white text-xs">✓</span>
                </div>
                <p className="text-white">{service.service}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className=" bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-lg shadow-sm"
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
            className="h-full flex flex-col "
          >
            <p className="text-white/90 text-lg leading-relaxed flex-grow py-12">
              At Security Service Group, our mission is to provide safe, secure,
              and reliable security services that create a protected environment
              for our clients. We take a proactive approach to security,
              preventing risks before they arise and ensuring peace of mind at
              all times.
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
      <div className="p-4 mt-8">
        <motion.div
          className="max-w-2xl mx-auto bg-gradient-to-br from-primary to-blue-900 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 md:p-8 text-white">
            {/* Title */}
            <motion.h2
              className="text-2xl font-bold text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Commitment to Excellence
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-white/90 text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Security Service Group is built on the principles of trust,
              professionalism, and reliability. Our security guards are
              carefully selected and rigorously trained to ensure they meet the
              highest industry standards. By continuously adapting to the latest
              security protocols and best practices, we provide our clients with
              effective, proactive, and dependable security solutions.
            </motion.p>

            {/* Divider */}
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-white/30" />
            </div>

            {/* Contact section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-center mb-3">
                Get in Touch
              </h3>
              <p className="text-white/90 text-center mb-4">
                Looking for professional security services in Melbourne? Contact
                Security Service Group today to discuss your security needs.
              </p>

              <div className="space-y-3 mb-6">
                {/* Phone */}
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:0480247436"
                    className="text-white hover:underline"
                  >
                    Phone: 0480 247 436
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@securityservicegroup.com.au"
                    className="text-white hover:underline"
                  >
                    Email: info@securityservicegroup.com.au
                  </a>
                </div>

                {/* Website */}
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <a
                    href="https://securityservicegroup.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    Website: securityservicegroup.com.au
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <motion.a
                  href="mailto:info@securityservicegroup.com.au"
                  className="inline-flex items-center px-5 py-2 bg-white text-blue-900 rounded-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us Today
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
