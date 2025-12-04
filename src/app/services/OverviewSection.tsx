"use client";

import { motion } from "framer-motion";
import { Bus, Users, Car, Star, ArrowRight } from "lucide-react";

export default function OverviewSection() {
  const services = [
    {
      icon: Bus,
      title: "Charter Services",
      description: "Customized charter solutions for groups of all sizes, from local tours to nationwide travel.",
      color: "from-amber-400 to-yellow-500"
    },
    {
      icon: Users,
      title: "Shuttle Services",
      description: "Reliable campus, corporate, and event shuttles with flexible routes and professional drivers.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: Car,
      title: "Private Car Service",
      description: "Luxury point-to-point transportation for business, leisure, and special occasions.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Star,
      title: "Customized Experiences",
      description: "Bespoke travel itineraries designed entirely around your preferences and schedule.",
      color: "from-teal-400 to-emerald-500"
    }
  ];

  const handleLearnMore = () => {
    window.location.href = "/contact";
  };

  return (
    <section
      id="overview-section"
      alpha-section-id="overview-section"
      className="relative bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <button
                onClick={handleLearnMore}
                className="text-amber-500 hover:text-amber-600 font-semibold flex items-center space-x-2 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}