"use client";

import { motion } from "framer-motion";
import { Clock, Star, Plane, Globe, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      alpha-section-id="hero-section"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-black/90"></div>

        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(148, 163, 184, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)
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
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                  i % 3 === 0
                    ? "bg-gradient-to-br from-amber-400 to-yellow-500"
                    : i % 3 === 1
                      ? "bg-gradient-to-br from-slate-400 to-slate-500"
                      : "bg-gradient-to-br from-amber-300 to-amber-400"
                } opacity-60 shadow-lg`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-amber-400/50 rounded-full px-3 sm:px-4 py-2 shadow-lg">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-400 text-xs sm:text-sm font-medium">
                Premium Transportation
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-slate-400/50 rounded-full px-3 sm:px-4 py-2 shadow-lg">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-slate-300" />
              <span className="text-slate-300 text-xs sm:text-sm font-medium">
                World-Class Service
              </span>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              <span className="block text-white mb-2">
                Premium Transportation
              </span>
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Flight &amp; Cruise Deals
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Experience the ultimate in comfort, reliability, and world-class
              service.From corporate events to special occasions, seamless
              logistics, exceptional journeys.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-amber-300/50 rounded-2xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-amber-400 mb-2">
                Luxury Fleet
              </h3>
              <p className="text-slate-300 text-sm">
                Modern vehicles with premium amenities
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-slate-300/50 rounded-2xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-300 mb-2">
                Professional Drivers
              </h3>
              <p className="text-slate-300 text-sm">
                Safety-certified, experienced chauffeurs
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-amber-300/50 rounded-2xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-amber-400 mb-2">
                24/7 Service
              </h3>
              <p className="text-slate-300 text-sm">
                Complete logistics management, anytime
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Request a Quote</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
