"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Globe,
  Briefcase,
  Plane,
  Ship,
  Car,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      alpha-section-id="hero-section"
      className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16 sm:py-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Service badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
              <Plane className="w-4 h-4 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">Flights</span>
            </div>
            <div className="flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
              <Ship className="w-4 h-4 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">Cruises</span>
            </div>
            <div className="flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
              <Car className="w-4 h-4 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">Transportation</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900">
              Contact Emperia
              <br />
              <span className="text-blue-600">Travel Experts</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ready to book your next journey? Whether it's a flight, a luxury cruise, or ground transportation, our team is here to handle every detail.
            </p>
          </motion.div>

          {/* Quick contact options */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                subtitle: "bookings@emperiatravel.com",
                color: "bg-blue-100 text-blue-600",
                borderColor: "border-blue-100",
              },
              {
                icon: MapPin,
                title: "Visit Our Office",
                subtitle: "Dallas, Texas",
                color: "bg-amber-100 text-amber-600",
                borderColor: "border-amber-100",
              },
              {
                icon: Clock,
                title: "Office Hours",
                subtitle: "Mon-Fri: 9am - 6pm",
                color: "bg-slate-100 text-slate-600",
                borderColor: "border-slate-100",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`bg-white border ${item.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-slate-400" />
              <span className="text-slate-600 font-medium">
                Professional Service
              </span>
            </div>
            <div className="w-px h-6 bg-slate-300 hidden sm:block"></div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-slate-400" />
              <span className="text-slate-600 font-medium">
                Global Connections
              </span>
            </div>
            <div className="w-px h-6 bg-slate-300 hidden sm:block"></div>
            <div className="flex items-center space-x-3">
              <Plane className="w-5 h-5 text-slate-400" />
              <span className="text-slate-600 font-medium">
                IATA Accredited
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}