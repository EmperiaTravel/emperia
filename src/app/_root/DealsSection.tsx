"use client";

import Image from "next/image";
import { Users, Car } from "lucide-react";
import { motion } from "framer-motion";

export default function DealsSection() {
  const fleet = [
    {
      id: 1,
      name: "Executive Sedan",
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764539873877-43fe2r345re.jpg",
      capacity: "1-6 Passengers",
      type: "Luxury Sedan",
      features: "Mercedes-Benz S-Class, Bentley, Maserati",
      description: "Premium executive transportation",
    },
    {
      id: 2,
      name: "Luxury SUV",
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764541886667-5qo4rc9uw8w.jpg",
      capacity: "1-6 Passengers",
      type: "Premium SUV",
      features: "Escalade ESV, Suburban, Hummer",
      description: "Spacious luxury transportation",
    },
    {
      id: 3,
      name: "Sprinter Van",
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764541967409-amyjx418s3r.jpg",
      capacity: "7-29 Passengers",
      type: "Executive Van",
      features: "Transit Van, Sprinter Limovan, Mini Bus",
      description: "Group executive travel",
    },
    {
      id: 4,
      name: "Motorcoach",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop",
      capacity: "28-56 Passengers",
      type: "Luxury Coach",
      features: "Wi-Fi, Restrooms, Premium Seating",
      description: "Large group luxury travel",
    },
  ];

  return (
    <section
      id="deals-section"
      alpha-section-id="deals-section"
      className="relative bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-12 sm:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)
            `,
              backgroundSize: "80px 80px, 80px 80px, 160px 160px, 160px 160px",
            }}
          ></div>
        </div>

        {/* Floating elements */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600">
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={i}
              cx={80 + i * 80}
              cy={100 + Math.sin(i) * 100}
              r="4"
              fill={
                i % 3 === 0
                  ? "rgba(20, 184, 166, 0.4)"
                  : i % 3 === 1
                    ? "rgba(6, 182, 212, 0.3)"
                    : "rgba(14, 165, 233, 0.3)"
              }
              animate={{
                cy: [
                  100 + Math.sin(i) * 100,
                  80 + Math.sin(i) * 100,
                  100 + Math.sin(i) * 100,
                ],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-4">
              Our Premium Fleet
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 mb-6 sm:mb-8">
              Modern, meticulously maintained vehicles for every occasion
            </p>
          </motion.div>
        </div>

        {/* Fleet grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {fleet.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-cyan-200/50 hover:shadow-2xl transition-all duration-300 h-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Capacity badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{vehicle.capacity}</span>
                </div>
              </div>

              {/* Type badge */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                <div className="bg-white/90 backdrop-blur-sm border border-cyan-300/50 rounded-lg px-2 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Car className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500" />
                    <span className="text-xs sm:text-sm font-medium text-cyan-600">
                      {vehicle.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative h-48 sm:h-48 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  crossOrigin="anonymous"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 via-transparent to-transparent"></div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-lg font-bold text-cyan-700 mb-2 line-clamp-2">
                  {vehicle.name}
                </h3>

                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm sm:text-sm text-slate-700 font-medium">
                    {vehicle.features}
                  </span>
                </div>

                <p className="text-sm sm:text-sm text-slate-600">
                  {vehicle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}