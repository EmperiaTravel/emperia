"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      alpha-section-id="hero-section"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black py-20 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80"
          alt="Luxury Transportation"
          fill
          crossOrigin="anonymous"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-amber-400/20 backdrop-blur-sm border border-amber-400/50 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Plane className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">
              Charter Services
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Charter Services —{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Your Journey, Your Way
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
            For local or long-distance tours, corporate events, or special occasions, planning your next trip is seamless with Emperia. We provide safe, reliable, and luxurious transportation options, while our dedicated team ensures every detail — from vehicle selection to scheduling — is perfectly tailored to your needs.
          </p>

          <motion.button
            onClick={() => window.location.href = "/contact"}
            className="bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plane className="w-5 h-5" />
            <span>Request a Quote</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}