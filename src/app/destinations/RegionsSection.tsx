"use client";

import Image from "next/image";
import { Shield, Heart, Car, Gift, ChevronRight, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function RegionsSection() {
  const fleetCategories = [
    {
      id: 1,
      name: "1 – 6 Passengers",
      subtitle: "Executive & Luxury Vehicles",
      description:
        "Perfect for executive airport transfers, business meetings, private city tours, and date nights.",
      vehicles: [
        "Executive Sedan (Mercedes-Benz S-Class, Bentley, Maserati)",
        "SUV (Suburban)",
        "Luxury SUV (Escalade ESV, Hummer)",
      ],
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764548158093-102x8u2hlwm.jpg",
      icon: Car,
      color: "from-blue-400 to-indigo-500",
      cta: "View Executive Fleet",
    },
    {
      id: 2,
      name: "7 – 29 Passengers",
      subtitle: "Vans & Mini Buses",
      description:
        "Perfect for small group tours, corporate team outings, family events, and airport group transfers.",
      vehicles: ["Transit Van", "Sprinter Limovan", "Mini Bus"],
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764548249906-tdd705rn33q.jpg",
      icon: Users,
      color: "from-amber-400 to-yellow-500",
      cta: "View Group Fleet",
    },
    {
      id: 3,
      name: "28 – 52 Passengers",
      subtitle: "Buses & Minicoaches",
      description:
        "Perfect for church groups, university athletics, corporate events, and medium-sized conferences.",
      vehicles: ["Transit Bus", "Minicoach", "School Bus"],
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=400&fit=crop",
      icon: Users,
      color: "from-emerald-400 to-teal-500",
      cta: "View Bus Fleet",
    },
    {
      id: 4,
      name: "56 Passengers",
      subtitle: "Full-Size Motorcoach",
      description:
        "Perfect for large corporate events, sports teams, long-distance charters, and convention shuttles.",
      vehicles: ["Motorcoach"],
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      icon: Users,
      color: "from-purple-400 to-pink-500",
      cta: "View Motorcoach",
    },
  ];

  const amenities = [
    "Wi-Fi connectivity",
    "Power outlets and USB charging",
    "Premium leather seating",
    "Climate control",
    "PA systems",
    "Onboard restrooms (select vehicles)",
    "A/V systems and large screens (select vehicles)",
  ];

  return (
    <section
      id="regions-section"
      alpha-section-id="regions-section"
      className="relative bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="regions-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="1.5"
                  fill="rgba(16, 185, 129, 0.3)"
                />
                <circle cx="5" cy="5" r="0.8" fill="rgba(251, 191, 36, 0.3)" />
                <circle
                  cx="15"
                  cy="15"
                  r="0.8"
                  fill="rgba(59, 130, 246, 0.3)"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#regions-pattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <Car className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-500" />
            <span className="text-emerald-600 font-medium text-base sm:text-lg">
              Our Fleet
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-700 mb-3 sm:mb-4 px-2">
            Modern Vehicles for Every Group Size
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto px-2">
            From intimate executive sedans to full-size motorcoaches, Emperia's
            diverse fleet is meticulously maintained and equipped with premium
            amenities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
          {fleetCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-emerald-200/50 hover:shadow-2xl transition-all duration-500 group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-48 sm:h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  crossOrigin="anonymous"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div
                    className={`bg-gradient-to-r ${category.color} text-white p-2 sm:p-3 rounded-xl shadow-lg`}
                  >
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                  {category.description}
                </p>

                <div className="mb-6 sm:mb-6">
                  <h4 className="text-sm sm:text-sm font-semibold text-slate-800 mb-2">
                    Vehicle Options:
                  </h4>
                  <ul className="space-y-2 sm:space-y-2">
                    {category.vehicles.map((vehicle, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-slate-700"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm">{vehicle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold py-3 sm:py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group text-sm sm:text-base mt-auto"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <span>{category.cta}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-emerald-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4 sm:mb-6 text-center">
            Premium Amenities Across Our Fleet
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 sm:space-x-2 bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-3 border border-emerald-200/50"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-700 text-sm sm:text-sm">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-8 text-center">
            <button
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              onClick={() => (window.location.href = "/contact")}
            >
              Request a Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}