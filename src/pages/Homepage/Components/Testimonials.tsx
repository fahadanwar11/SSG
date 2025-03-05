import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Security Service Group has transformed the safety of our business. Their team is professional, proactive, and always reliable.",
      author: "John M.",
      position: "Business Owner",
    },
    {
      quote:
        "Their mobile patrol service has significantly reduced incidents at our site. Highly recommended!",
      author: "Sarah L.",
      position: "Property Manager",
    },
    {
      quote:
        "Excellent security team for our corporate event. Everything was handled smoothly.",
      author: "David R.",
      position: "Event Organizer",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* <h3 className="text-lg font-medium text-gray-700 mb-2">
            Testimonials
          </h3> */}
          <h2 className="text-3xl md:text-4xl text-left font-bold text-gray-900">
            What Our Clients Say About Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-sm p-8 relative"
            >
              {/* Quote mark decoration */}
              <div className="absolute -top-4 left-8 text-6xl text-gray-200 font-serif">
                "
              </div>

              <div className="relative z-10">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="text-gray-700 mb-6 relative z-10"
                >
                  {testimonial.quote}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-1 bg-gray-900 mr-3"></div>
                    <div>
                      <p className="font-bold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center bg-gray-900 text-white py-8 px-6 rounded-lg shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Phone className="h-8 w-8 text-white/80" />
            <p className="text-xl font-medium">
              Let us provide the same outstanding security for you!
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
