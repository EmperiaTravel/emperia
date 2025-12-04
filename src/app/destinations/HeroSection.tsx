"use client";

import Image from "next/image";
import { Globe, Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

export default function HeroSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const services = [
    {
      id: 1,
      name: "Event Transportation",
      category: "events",
      type: "events",
      description: "Seamless mobility solutions for unforgettable events",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      rating: 4.9,
      features: [
        "Airport & Hotel Transfers",
        "Venue Shuttles",
        "VIP Movements",
      ],
      capacity: "10-20,000 guests",
    },
    {
      id: 2,
      name: "Shuttle Services",
      category: "shuttle",
      type: "shuttle",
      description:
        "Professional shuttle solutions for corporations and universities",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      rating: 4.8,
      features: [
        "Campus Shuttles",
        "Corporate Transit",
        "Last-Mile Connections",
      ],
      capacity: "Custom routes",
    },
    {
      id: 3,
      name: "Private Car Service",
      category: "private",
      type: "private",
      description: "Luxury point-to-point transportation",
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764548312287-5cfr6359446.jpg",
      rating: 4.9,
      features: ["Business Travel", "Date Night", "Airport Transfers"],
      capacity: "1-6 passengers",
    },
    {
      id: 4,
      name: "Customized Luxury",
      category: "luxury",
      type: "luxury",
      description: "Travel your way with bespoke experiences",
      image:
        "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=600&h=400&fit=crop",
      rating: 4.9,
      features: ["City Tours", "Special Occasions", "Private Retreats"],
      capacity: "Fully customized",
    },
    {
      id: 5,
      name: "Flight Packages",
      category: "flights",
      type: "flights",
      description: "Premium flight bookings to destinations worldwide",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      rating: 4.9,
      features: ["Business Class", "First Class", "Group Bookings"],
      capacity: "Worldwide destinations",
    },
    {
      id: 6,
      name: "Cruise Experiences",
      category: "cruises",
      type: "cruises",
      description: "Luxury cruise packages across the globe",
      image:
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=400&fit=crop",
      rating: 4.9,
      features: ["Ocean Cruises", "River Cruises", "Expedition Cruises"],
      capacity: "Global itineraries",
    },
  ];

  const quickFilters = [
    {
      label: "All Services",
      value: "all",
      icon: "🚗",
      color: "from-slate-400 to-slate-500",
    },
    {
      label: "Event Transportation",
      value: "events",
      icon: "🎪",
      color: "from-emerald-400 to-teal-500",
    },
    {
      label: "Shuttle Services",
      value: "shuttle",
      icon: "🚌",
      color: "from-amber-400 to-yellow-500",
    },
    {
      label: "Private Car Service",
      value: "private",
      icon: "🚙",
      color: "from-cyan-400 to-blue-500",
    },
    {
      label: "Customized Luxury",
      value: "luxury",
      icon: "💎",
      color: "from-purple-400 to-indigo-500",
    },
    {
      label: "Flight Packages",
      value: "flights",
      icon: "✈️",
      color: "from-blue-400 to-sky-500",
    },
    {
      label: "Cruise Experiences",
      value: "cruises",
      icon: "🚢",
      color: "from-teal-400 to-cyan-500",
    },
  ];

  const filteredServices = useMemo(() => {
    if (selectedFilter === "all") {
      return services;
    }
    return services.filter((service) => service.type === selectedFilter);
  }, [selectedFilter, services]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <section
      id="hero-section"
      alpha-section-id="hero-section"
      className="relative bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-cyan-50/60 to-blue-100/80 opacity-80"></div>

        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
            `,
              backgroundSize: "120px 120px",
            }}
          ></div>
        </div>

        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -25, -10],
                x: [-8, 8, -8],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            >
              <div
                className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full ${
                  i % 4 === 0
                    ? "bg-gradient-to-br from-amber-400 to-yellow-500"
                    : i % 4 === 1
                      ? "bg-gradient-to-br from-emerald-400 to-green-500"
                      : i % 4 === 2
                        ? "bg-gradient-to-br from-cyan-400 to-blue-500"
                        : "bg-gradient-to-br from-teal-400 to-emerald-500"
                } opacity-60 shadow-lg`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Globe className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-500" />
              <span className="text-emerald-600 font-medium text-sm sm:text-base lg:text-lg">
                Premium Transportation Services Worldwide
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent block sm:inline">
                Seamless Mobility Solutions
              </span>
              <span className="hidden sm:inline"> </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent block sm:inline">
                Around the World
              </span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              At Emperia, we go beyond transportation, from ground services to
              flights and cruises, we create seamless, data-driven mobility
              solutions that elevate your travel experience worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-emerald-300/50 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {quickFilters.map((filter, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleFilterChange(filter.value)}
                  className={`border rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 sm:py-3 text-center transition-all hover:scale-105 shadow-lg group ${
                    selectedFilter === filter.value
                      ? `bg-gradient-to-r ${filter.color} text-white border-transparent shadow-xl`
                      : "bg-white/80 backdrop-blur-sm border-emerald-300/40 hover:border-emerald-400/60 hover:bg-white/90"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-lg sm:text-xl mb-1">{filter.icon}</div>
                  <div
                    className={`text-xs font-medium transition-colors ${
                      selectedFilter === filter.value
                        ? "text-white"
                        : "text-slate-700 group-hover:text-emerald-600"
                    }`}
                  >
                    {filter.label}
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="border-t border-emerald-200/50 pt-4 sm:pt-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                <div className="text-xs sm:text-sm text-slate-600">
                  <span className="font-semibold text-emerald-600">
                    {filteredServices.length}
                  </span>{" "}
                  service{filteredServices.length !== 1 ? "s" : ""}
                </div>
                {selectedFilter !== "all" && (
                  <button
                    onClick={() => handleFilterChange("all")}
                    className="text-xs sm:text-sm text-slate-500 hover:text-slate-700 underline"
                  >
                    Clear filter
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-emerald-200/50 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative h-48 sm:h-36 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        crossOrigin="anonymous"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 sm:py-1 flex items-center space-x-1">
                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-current" />
                        <span className="text-xs font-medium text-slate-700">
                          {service.rating}
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-2 right-2">
                        <h3 className="font-bold text-white text-base sm:text-sm">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-4 sm:p-4 flex flex-col flex-grow text-left">
                      <p className="text-sm sm:text-xs text-slate-600 mb-3 sm:mb-3 line-clamp-2">
                        {service.description}
                      </p>

                      <div className="mb-3 sm:mb-3">
                        <div className="text-sm sm:text-xs text-slate-500 mb-1 font-medium sm:font-normal">
                          Capacity: {service.capacity}
                        </div>
                      </div>

                      <div className="text-sm sm:text-xs text-slate-500 mb-4 sm:mb-3">
                        {service.features.slice(0, 2).join(" • ")}
                        {service.features.length > 2 && " • +more"}
                      </div>

                      <button
                        className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold py-3 sm:py-2 px-3 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-1 text-sm sm:text-xs mt-auto"
                        onClick={() => (window.location.href = "/contact")}
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4 sm:w-3 sm:h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center sm:space-x-6 md:space-x-8 space-y-6 sm:space-y-0 text-center"
          >
            <div>
              <div className="text-3xl sm:text-3xl font-bold text-emerald-600">
                Worldwide
              </div>
              <div className="text-sm sm:text-sm text-slate-600">
                Global Coverage
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
            <div>
              <div className="text-3xl sm:text-3xl font-bold text-amber-600">
                24/7
              </div>
              <div className="text-sm sm:text-sm text-slate-600">
                Professional Service
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
            <div>
              <div className="text-3xl sm:text-3xl font-bold text-cyan-600">
                Premium
              </div>
              <div className="text-sm sm:text-sm text-slate-600">
                Fleet & Amenities
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}