import React from "react";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const LandingPage = () => (
  <div className="landing-page">
    <HeroSection />
    <FeatureSection />
    <PricingSection />
    <ContactForm />
    <Footer />
  </div>
);
export default LandingPage;