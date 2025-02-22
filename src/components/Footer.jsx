import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Your brand. Your products. Always in sync.</h2>
          <button className="bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-full transition">
            Book a demo
          </button>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Column 1: Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {["Specific", "Resources", "Documentation", "Templates"].map((link, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["Community", "Press kit", "Changelog", "Climate"].map((link, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Guide", "Pricing", "Blog", "Jobs"].map((link, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {["Feedback", "Help Center", "Contact us"].map((link, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy policy", "Terms of use", "Security"].map((link, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              {["Twitter", "GitHub", "Dribbble", "Notion"].map((link, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="text-center text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>© 2023 Gotech. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;