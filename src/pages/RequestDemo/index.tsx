import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const formFieldVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" },
  tap: { scale: 0.95 },
};

export default function RequestADemo() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    serviceType: "",
    otherService: "",
    location: "",
    dateTime: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your request! We'll get back to you shortly.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <motion.div
        className="relative bg-primary/90 text-white py-16"
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
            Request a Quote
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Need a tailored security solution? Security Service Group offers
            reliable and professional security services to protect your
            business, property, and assets. Get in touch with us today to
            receive a customized quote that fits your specific needs.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-grow bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-12">
            {/* Left Column - How to Request */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="rounded-xl shadow-lg md:p-8 p-4 w-full text-wrap"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center"
              >
                How to Request a Quote
              </motion.h2>

              <div className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-start"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 text-primary font-bold text-lg md:text-xl mr-4 mb-2">
                    1
                  </div>
                  <div className="w-full md:w-auto">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">
                      Fill Out the Form
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Provide the details about your security requirements, and
                      our team will get back to you with a personalized quote.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-start"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 text-primary font-bold text-lg md:text-xl mr-4 mb-2">
                    2
                  </div>
                  <div className="w-full md:w-auto">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">
                      Call Us Directly
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Prefer to speak with someone? Call us directly to discuss
                      your security needs and get an instant quote.
                    </p>

                    <div className="mt-3 space-y-1">
                      <p className="flex items-center text-primary text-sm md:text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        Phone:
                        <a
                          href="tel:0480247436"
                          className="ml-1 text-sm underline"
                        >
                          0480 247 436
                        </a>
                      </p>

                      <p className="flex items-center text-primary text-sm md:text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Email:
                        <a
                          className="ml-1 text-sm underline"
                          href="mailto:info@securityservicegroup.com.au"
                        >
                          info@securityservicegroup.com.au
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-start"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 text-primary font-bold text-lg md:text-xl mr-4 mb-2">
                    3
                  </div>
                  <div className="w-full md:w-auto">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">
                      We'll Customize a Solution for You
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Once we receive your request, we'll assess your needs and
                      provide a competitive, tailored quote that fits your
                      security requirements.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Request a Quote Form
                </h2>
                <p className="text-gray-600 mb-8">
                  Please fill out the form below, and one of our team members
                  will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    custom={0}
                    variants={formFieldVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company (if applicable)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={formFieldVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                  >
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={formFieldVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Type of Service Needed
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="Unarmed Security Guards">
                        Unarmed Security Guards
                      </option>
                      <option value="Asset Protection">Asset Protection</option>
                      <option value="Concierge Security">
                        Concierge Security
                      </option>
                      <option value="Mobile Patrols">Mobile Patrols</option>
                      <option value="Other">Other (Please specify)</option>
                    </select>

                    {formData.serviceType === "Other" && (
                      <div className="mt-3">
                        <input
                          type="text"
                          id="otherService"
                          name="otherService"
                          value={formData.otherService}
                          onChange={handleChange}
                          placeholder="Please specify"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    )}
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={formFieldVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                  >
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="dateTime"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Date & Time of Service
                      </label>
                      <input
                        type="text"
                        id="dateTime"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        placeholder="e.g., 01/01/2023, 9:00 AM"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    custom={4}
                    variants={formFieldVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <label
                      htmlFor="details"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Additional Details/Specific Requirements
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium text-lg transition-all duration-300"
                  >
                    Submit Request
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
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
