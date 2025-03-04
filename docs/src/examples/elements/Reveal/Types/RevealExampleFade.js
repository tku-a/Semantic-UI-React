import React from 'react';
import { Leaf, Globe, Flask, Users, Target, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const CompanyProfile = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      title: "Sustainable Solutions",
      description: "Developing eco-friendly fertilizers that promote soil health and biodiversity"
    },
    {
      icon: <Flask className="w-6 h-6 text-green-500" />,
      title: "Scientific Excellence",
      description: "Research-backed products developed by agricultural specialists"
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Community Engagement",
      description: "Educational workshops and field demonstrations for farming communities"
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: "African Focus",
      description: "Solutions tailored for African agricultural challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        className="bg-green-900 text-white py-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Kukura Pakuru</h1>
          <p className="text-xl text-green-100">To Grow and Prosper</p>
          <p className="mt-4 text-green-100 max-w-2xl">
            A pioneering agricultural solutions company transforming farming across Africa
          </p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission</h2>
            <p className="text-gray-600">
              We revolutionize African agriculture by delivering sustainable and effective fertilizer solutions, 
              prioritizing soil health and increasing crop yields while promoting environmental stewardship.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Vision</h2>
            <p className="text-gray-600">
              To become Africa's leading provider of innovative agricultural solutions, 
              contributing to food security and sustainable farming practices.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial="initial"
                animate="animate"
                variants={fadeIn}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-green-800 mb-8">Our Product Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Premium Fertilizers</h3>
            <p className="text-gray-600">High-quality fertilizers designed for optimal crop nutrition</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Bio-stimulants</h3>
            <p className="text-gray-600">Enhanced products for improved soil and plant health</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Custom Blends</h3>
            <p className="text-gray-600">Tailored solutions for specific crops and soil types</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyProfile;
