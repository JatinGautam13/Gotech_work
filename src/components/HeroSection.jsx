import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navigation Bar */}
      <motion.nav
        className="w-full text-white max-w-7xl mx-auto flex justify-between items-center py-6 px-4 sm:px-6 lg:px-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex items-center space-x-4 sm:space-x-8">
          <span className="text-lg font-semibold">Gotech</span>
          <ul className="hidden sm:flex space-x-4 sm:space-x-6">
            {["Does", "Templates", "Guide", "Blog", "Pricing"].map((item, index) => (
              <li key={index} className="text-gray-400 hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">Sign in</button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Book a demo
          </button>
        </div>
      </motion.nav>

      {/* Main Hero Content */}
      <motion.div
        className="mt-16 px-4 sm:px-6 lg:px-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.div
          className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-block mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          New - Try our Notion Integration
        </motion.div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Design system infrastructure for modern teams
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          With Specify's versatility, product teams release better experiences faster while staying
          in-line with their company standards.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Book a demo
          </button>
          <button className="bg-transparent text-gray-300 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-800">
            Read our vision
          </button>
        </div>
      </motion.div>

      {/* Trusted By Section */}
      <motion.div
        className="mt-24 px-4 sm:px-6 lg:px-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="text-gray-400 mb-6">Already loved and trusted by product teams</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
          {["Pitch", "Dashlane", "Medium", "Star Atlas", "Census", "Ruter#", "Comcast"].map(
            (company, index) => (
              <motion.div
                key={index}
                className="text-gray-400 font-semibold underline"
                whileHover={{ scale: 1.1 }}
              >
                {company}
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;