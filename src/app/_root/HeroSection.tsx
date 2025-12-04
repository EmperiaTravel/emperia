"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  X,
  Plane,
  Globe,
  ChevronDown,
  Ship,
  Car,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero-section"
      alpha-section-id="hero-section"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-20 overflow-hidden min-h-screen flex items-center"
    >
      {/* Dark elegant background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Dark gradient overlay with teal/blue accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-black/95"></div>

        {/* Elegant pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)
            `,
              backgroundSize: "120px 120px",
            }}
          ></div>
        </div>

        {/* Floating elegant elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
                opacity: [0.2, 0.5, 0.2],
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
                  i % 4 === 0
                    ? "bg-gradient-to-br from-teal-400 to-teal-500"
                    : i % 4 === 1
                      ? "bg-gradient-to-br from-cyan-400 to-cyan-500"
                      : i % 4 === 2
                        ? "bg-gradient-to-br from-blue-400 to-blue-500"
                        : "bg-gradient-to-br from-sky-400 to-sky-500"
                } opacity-40 shadow-lg`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Elegant wave pattern with teal/blue highlights */}
        <svg
          className="absolute bottom-0 w-full h-24 sm:h-48"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="elegant-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(20, 184, 166, 0.2)" />
              <stop offset="25%" stopColor="rgba(6, 182, 212, 0.15)" />
              <stop offset="50%" stopColor="rgba(14, 165, 233, 0.15)" />
              <stop offset="75%" stopColor="rgba(6, 182, 212, 0.15)" />
              <stop offset="100%" stopColor="rgba(20, 184, 166, 0.2)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,80 C200,20 400,100 600,60 C800,20 1000,80 1200,50 L1200,120 L0,120 Z"
            fill="url(#elegant-wave)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>

        {/* Mouse follower effect - hidden on mobile */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none hidden lg:block"
          style={{
            background:
              "radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, rgba(6, 182, 212, 0.03) 50%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col items-center">
          {/* Centered content */}
          <motion.div
            className="flex-1 max-w-4xl text-center w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Premium badges */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm border border-teal-400/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <span className="text-teal-400 text-xs sm:text-sm font-medium">
                  Premium Transportation
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm border border-cyan-400/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="text-cyan-400 text-xs sm:text-sm font-medium">
                  World-Class Service
                </span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Emperia Travel
                </span>
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                Experience the ultimate in luxury transportation, where comfort,
                reliability, and world-class service meet. From booking flights
                and cruises to corporate conferences and sports events to
                special occasions, we provide seamless logistics and complete
                travel solutions, ensuring every journey is effortless and
                exceptional from start to finish.
              </p>
            </motion.div>

            {/* Service categories */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                {
                  label: "Book a Flight",
                  icon: Plane,
                  color: "from-cyan-400 to-blue-500",
                },
                {
                  label: "Book a Cruise",
                  icon: Ship,
                  color: "from-teal-400 to-cyan-500",
                },
                {
                  label: "Transportation",
                  icon: Car,
                  color: "from-sky-400 to-blue-500",
                },
                {
                  label: "Corporate Events",
                  icon: Users,
                  color: "from-blue-400 to-cyan-500",
                },
              ].map((category, i) => (
                <motion.button
                  key={i}
                  className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-slate-300 hover:border-cyan-400/60 transition-all hover:bg-slate-700/80 hover:scale-105 shadow-lg h-full flex flex-col items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
                  <span className="text-center leading-tight">{category.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 border border-slate-700/50 mx-2 sm:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 gap-3 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-semibold text-teal-400">
                  Book Your Flight, Cruise, or Transportation
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <div className="text-teal-400 text-xs sm:text-sm font-medium">
                    24/7 Available
                  </div>
                </div>
              </div>

              <motion.a
                href="mailto:bookings@emperiatravel.com?subject=Travel Booking&body=Hello, I'd like to inquire about..."
                className="w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 hover:from-teal-500 hover:via-cyan-500 hover:to-blue-500 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-sm sm:text-lg border border-teal-300 block text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Quote
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-6 sm:mt-8 text-center px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">
                    100%
                  </div>
                  <div className="text-xs text-slate-400">Safety Certified</div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-slate-600"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">
                    24/7
                  </div>
                  <div className="text-xs text-slate-400">Support</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <span className="text-slate-400 text-xs sm:text-sm">
                  Trusted by leading corporations and organizations
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}