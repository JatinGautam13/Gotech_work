import React from "react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: "BASIC",
      price: "0$",
      originalPrice: null,
      discount: null,
      description: "Add a description of your offer and key benefits. What it is and how it helps your customer.",
    },
    {
      id: 2,
      name: "EXPERT",
      price: "40$",
      originalPrice: "50$",
      discount: "-20%",
      description: "Add a description of your offer and key benefits. What it is and how it helps your customer.",
    },
    {
      id: 3,
      name: "ADVANCED",
      price: "30$",
      originalPrice: null,
      discount: null,
      description: "Add a description of your offer and key benefits. What it is and how it helps your customer.",
    },
  ];

  return (
    <div className="pricing py-16 text-center text-white bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          CHOOSE A PLAN
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          className="text-lg text-gray-400 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A few words about your product/offer. Focus on the benefits, not the features. Explain how your product will
          improve your customer's life.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className="p-8 bg-gray-800 rounded-lg shadow-lg relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: plan.id * 0.2 }}
            >
              {/* Discount Badge */}
              {plan.discount && (
                <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  {plan.discount}
                </span>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-semibold text-white uppercase mb-2">{plan.name}</h3>

              {/* Original Price (if applicable) */}
              {plan.originalPrice && (
                <p className="text-gray-500 line-through">{plan.originalPrice}</p>
              )}

              {/* Current Price */}
              <p className="text-3xl font-bold text-white my-2">{plan.price}</p>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

              {/* Register Button */}
              <button className="mt-4 bg-purple-500 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition">
                REGISTER NOW
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;