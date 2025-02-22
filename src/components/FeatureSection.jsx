import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBolt, FaExchangeAlt, FaCog } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaRocket className="text-4xl text-purple-500" />,
    title: "AI-Based Keyword Grouping",
    description: "We have trained our models by using the power of deep learning to find the most relevant keywords.",
  },
  {
    id: 2,
    icon: <FaBolt className="text-4xl text-purple-500" />,
    title: "Fully-Automated Keyword Grouping",
    description: "You don't need to group keywords. Our smart algorithms classify keywords by their categories.",
  },
  {
    id: 3,
    icon: <FaCog className="text-4xl text-purple-500" />,
    title: "Faster Than The Fastest Competitor",
    description: "Performance is our core value. We are tired of years of experience on slow rank trackers.",
  },
  {
    id: 4,
    icon: <FaExchangeAlt className="text-4xl text-purple-500" />,
    title: "Free Migration from 40+ Tools",
    description: "Losing data is not acceptable. Even without API access, we will migrate your data.",
  },
];

const FeatureSection = () => {
  return (
    <div className="features py-16 text-white bg-gray-900 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
        <p className="text-lg text-gray-500 mb-10">
          You found us! Why spend your valuable hours to understand yet another rank tracker?
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full shadow-md">
            Industry Features
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full shadow-md">
            Our Differences
          </button>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="p-6 bg-gray-800 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.6, delay: feature.id * 0.2 }} // Staggered delay
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white-900 mb-2">{feature.title}</h3>
              <p className="text-white-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;