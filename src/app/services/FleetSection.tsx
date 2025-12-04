"use client";

import { motion } from "framer-motion";
import { Users, Car } from "lucide-react";

export default function FleetSection() {
  const fleetCategories = [
    {
      passengers: "1 – 6 Passengers",
      vehicles: [
        "Executive Sedan (e.g., Mercedes-Benz S-Class, Bentley, Maserati)",
        "SUV (e.g., Suburban)",
        "Luxury SUV (e.g., Escalade ESV, Hummer)"
      ]
    },
    {
      passengers: "7 – 29 Passengers",
      vehicles: [
        "Transit Van",
        "Sprinter Limovan",
        "Mini Bus"
      ]
    },
    {
      passengers: "28 – 52 Passengers",
      vehicles: [
        "Transit Bus",
        "Minicoach",
        "School Bus"
      ]
    },
    {
      passengers: "56 Passengers",
      vehicles: [
        "Motorcoach"
      ]
    }
  ];

  return (
    <section
      id="fleet-section"
      alpha-section-id="fleet-section"
      className="relative bg-white py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Fleet</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Modern, meticulously maintained vehicles for every group size
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fleetCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center">
                  {index < 2 ? <Car className="w-6 h-6 text-white" /> : <Users className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{category.passengers}</h3>
              </div>
              <ul className="space-y-3">
                {category.vehicles.map((vehicle, vIndex) => (
                  <li key={vIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{vehicle}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}