import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const checkmarkVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <motion.div
        className="relative bg-primary/90 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            Join Our Team
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We are looking for dedicated professionals to join our growing
            security team. If you have a strong work ethic and a passion for
            security, apply today!
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-grow bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="md:p-10 p-4">
              <div className="space-y-6 mb-10">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Why Work With Us?
                </h2>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" fill="#EBF5FF" />
                      <motion.path
                        d="M8 12L11 15L16 9"
                        stroke="#2563EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={checkmarkVariants}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Competitive Pay & Flexible Hours
                    </h3>
                    <p className="text-gray-600 mt-1">
                      We offer industry-leading compensation and scheduling
                      options that work with your lifestyle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" fill="#EBF5FF" />
                      <motion.path
                        d="M8 12L11 15L16 9"
                        stroke="#2563EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={checkmarkVariants}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Career Growth Opportunities
                    </h3>
                    <p className="text-gray-600 mt-1">
                      We believe in promoting from within and providing clear
                      pathways for advancement in your security career.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" fill="#EBF5FF" />
                      <motion.path
                        d="M8 12L11 15L16 9"
                        stroke="#2563EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={checkmarkVariants}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Ongoing Training & Development
                    </h3>
                    <p className="text-gray-600 mt-1">
                      We invest in our team with continuous professional
                      development and specialized security training.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                className="bg-blue-50 lg:p-6 md:p-4 p-2 rounded-lg border border-blue-100"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-start md:items-center flex-col md:flex-row">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      Ready to Apply?
                    </h3>
                    <div className="flex items-center">
                      <span className="text-primary font-medium">
                        Send your resume to:
                        <div className="flex items-center mt-2">
                          <svg
                            className="h-5 w-5 text-blue-700 mr-2"
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
                            href="mailto:recruitment@securityservicegroup.com.au"
                            className="underline text-wrap overflow-clip text-xs md:text-md lg:text-lg"
                          >
                            recruitment@securityservicegroup.com.au
                          </a>
                        </div>
                      </span>
                    </div>
                  </div>
                  <motion.div
                    className="mt-4 md:mt-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="mailto:careers@securityservicegroup.com.au"
                      className="inline-block bg-primary/90 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
                    >
                      Apply Now
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer with License Info */}
      {/* <motion.div
        className="bg-gray-800 text-white py-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 text-sm">LICENCE NUMBER Z46-120-60S</p>
          <p className="text-gray-300 text-sm">ABN 36 675 127 670</p>
        </div>
      </motion.div> */}
    </div>
  );
}
