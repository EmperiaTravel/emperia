"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Globe,
  Headphones,
  Shield,
  Award,
  Calendar,
} from "lucide-react";

export default function InfoSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Booking Inquiries",
      description: "Request a quote for flights, cruises, or transportation.",
      details: ["bookings@emperiatravel.com"],
      availability: "Response within 24 hours",
      iconColor: "text-blue-600",
      bgClass: "bg-blue-50/50",
      borderClass: "border-blue-100",
    },
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a time to discuss complex travel itineraries.",
      details: [
        "Video calls available",
        "In-person meetings (Dallas)",
      ],
      availability: "By appointment only",
      iconColor: "text-amber-600",
      bgClass: "bg-amber-50/50",
      borderClass: "border-amber-100",
    },
  ];

  const supportFeatures = [
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Professional assistance for all your travel needs",
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Your data and payments are always protected",
    },
    {
      icon: Award,
      title: "Licensed Agents",
      description: "Certified professionals managing your trip",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to worldwide travel inventory",
    },
  ];

  return (
    <section
      id="info-section"
      alpha-section-id="info-section"
      className="relative bg-white py-16 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How Can We Help You?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Reach out to our team for personalized travel services
          </p>
        </motion.div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className={`${method.bgClass} border ${method.borderClass} rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100`}
                >
                  <method.icon className={`w-7 h-7 ${method.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-slate-600 mb-6">{method.description}</p>

                <div className="space-y-3 mb-6">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-amber-500'}`}></div>
                      <span className="text-sm text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-3 inline-block">
                  <span className="text-sm font-medium text-slate-500">
                    {method.availability}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support features */}
        <motion.div
          className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm border border-slate-200 mx-auto sm:mx-0">
                  <feature.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}