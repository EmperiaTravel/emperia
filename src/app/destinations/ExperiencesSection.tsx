"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperiencesSection() {
  return (
    <section
      id="experiences-section"
      alpha-section-id="experiences-section"
      className="relative bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
            `,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                i % 3 === 0
                  ? "bg-amber-400/40"
                  : i % 3 === 1
                    ? "bg-emerald-400/40"
                    : "bg-cyan-400/40"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-700 mb-3 sm:mb-4 px-2">
            Ready to Experience the Emperia Difference?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto px-2">
            Let's plan your next journey with comfort, precision, and care from
            departure to destination — anywhere in the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-10 sm:mb-12 max-w-md mx-auto">
          {[
            {
              icon: Mail,
              title: "Contact Us",
              description: "Get a detailed quote",
              action: "Contact Us",
              color: "from-emerald-400 to-teal-500",
            },
          ].map((contact, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-200/50 hover:shadow-2xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <contact.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-700 mb-2">
                {contact.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-4">
                {contact.description}
              </p>
              <a
                href="/contact"
                className={`bg-gradient-to-r ${contact.color} hover:opacity-90 text-white font-semibold py-3 sm:py-3 px-4 sm:px-6 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base w-full inline-block`}
              >
                {contact.action}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-6">
            Why Choose Emperia Travel?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                Worldwide
              </div>
              <div className="text-sm sm:text-base opacity-90">
                Global Coverage
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm sm:text-base opacity-90">
                Professional Service
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">Premium</div>
              <div className="text-sm sm:text-base opacity-90">
                Fleet & Amenities
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}