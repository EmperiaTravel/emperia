"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Users, Award, Plane, Globe, Heart, Shield } from 'lucide-react';

export default function StatsSection() {
  return (
    <section id="stats-section" alpha-section-id="stats-section" className="relative bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-12 sm:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 via-teal-50/60 to-blue-100/80 opacity-80"></div>
        
        {/* Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px'
          }}></div>
        </div>

        {/* Floating elements */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400">
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              cx={100 + i * 100}
              cy={200}
              r="3"
              fill={i % 3 === 0 ? "rgba(20, 184, 166, 0.4)" : i % 3 === 1 ? "rgba(6, 182, 212, 0.3)" : "rgba(14, 165, 233, 0.3)"}
              animate={{
                cy: [200, 180, 200],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <motion.p
            className="text-base sm:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            At Emperia, we redefine group transportation with a commitment to excellence, safety, and personalized service. Whether for corporate events, sports teams, military operations, tours, or private charters, our mission is to deliver seamless travel experiences that exceed expectations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Safety First */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm border border-teal-300/50 rounded-2xl p-6 sm:p-8 shadow-xl h-auto sm:h-40 flex flex-col sm:flex-row items-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-teal-400/20 via-cyan-400/20 to-blue-400/20 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10 text-center sm:text-left w-full">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-400 via-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-teal-600 mb-1">Safety Certified</h3>
                <p className="text-slate-700 text-sm sm:text-base">Professional drivers &amp; modern fleet</p>
              </div>
            </div>
          </motion.div>

          {/* Reliable Service */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm border border-cyan-300/50 rounded-2xl p-6 sm:p-8 shadow-xl h-auto sm:h-40 flex flex-col sm:flex-row items-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-cyan-400/20 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10 text-center sm:text-left w-full">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-cyan-600 mb-1">Precision Service</h3>
                <p className="text-slate-700 text-sm sm:text-base">On-time, every time</p>
              </div>
            </div>
          </motion.div>

          {/* Premium Experience */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm border border-blue-300/50 rounded-2xl p-6 sm:p-8 shadow-xl h-auto sm:h-40 flex flex-col sm:flex-row items-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400/20 via-sky-400/20 to-blue-400/20 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10 text-center sm:text-left w-full">
              <div className="flex space-x-0.5 sm:space-x-1 justify-center sm:justify-start">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 fill-current" />
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 fill-current" />
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 fill-current" />
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 fill-current" />
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 fill-current" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-1">Premium Comfort</h3>
                <p className="text-slate-700 text-sm sm:text-base">Luxury fleet &amp; amenities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}