import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="contact py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          CONTACT
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          className="text-lg text-gray-400 text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover your bigger picture.
        </motion.p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Things to Know */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">THINGS TO KNOW</h3>

            {/* Pricing & Timeline */}
            <div>
              <h4 className="text-xl font-semibold mb-2">PRICING & TIMELINE</h4>
              <p className="text-gray-400">
                We request budgets that allow for custom, demand work on all projects. Your project is completely unique,
                and our space determines the price and the timeline.
              </p>
            </div>

            {/* Preferred Project Type */}
            <div>
              <h4 className="text-xl font-semibold mb-2">PREFERRED PROJECT TYPE</h4>
              <p className="text-gray-400">
                We're small on purpose, which makes us particular about the projects we take. Get in touch, and we'll
                send a questionnaire to determine if we're the right fit for each other. Assuming we are, we'll provide a
                ballpark estimate and go from there.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">GET IN TOUCH</h3>
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;