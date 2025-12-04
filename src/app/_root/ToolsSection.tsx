"use client";

import { motion } from 'framer-motion';
import { Headphones, Settings, Car, Star, Shield, Globe, Heart, Award, Users, Plane, Calendar, MapPin, Ship, Anchor } from 'lucide-react';

export default function ToolsSection() {
  const services = [
    {
      title: 'Flight Bookings',
      description: 'Expert flight booking assistance worldwide',
      icon: Plane,
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-teal-300/50',
      hoverColor: 'hover:border-teal-400/70'
    },
    {
      title: 'Cruise Bookings',
      description: 'Luxury cruise packages and reservations',
      icon: Ship,
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-cyan-300/50',
      hoverColor: 'hover:border-cyan-400/70'
    },
    {
      title: 'Charter Services',
      description: 'Customized transportation for any occasion',
      icon: Car,
      color: 'from-blue-400 to-sky-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-blue-300/50',
      hoverColor: 'hover:border-blue-400/70'
    },
    {
      title: 'Airport Transportation',
      description: 'Reliable transfers to any airport',
      icon: MapPin,
      color: 'from-sky-400 to-cyan-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-sky-300/50',
      hoverColor: 'hover:border-sky-400/70'
    },
    {
      title: 'Corporate Travel',
      description: 'Professional business transportation',
      icon: Settings,
      color: 'from-teal-400 to-blue-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-teal-300/50',
      hoverColor: 'hover:border-teal-400/70'
    },
    {
      title: 'Sports Teams',
      description: 'Dedicated team transportation',
      icon: Star,
      color: 'from-cyan-400 to-teal-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-cyan-300/50',
      hoverColor: 'hover:border-cyan-400/70'
    },
    {
      title: 'Military Services',
      description: 'DOD-certified secure transport',
      icon: Shield,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-blue-300/50',
      hoverColor: 'hover:border-blue-400/70'
    },
    {
      title: 'Tours & Travel',
      description: 'Bespoke group travel experiences',
      icon: Globe,
      color: 'from-sky-400 to-blue-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-sky-300/50',
      hoverColor: 'hover:border-sky-400/70'
    },
    {
      title: 'Shuttle Services',
      description: 'Campus & corporate shuttles',
      icon: Users,
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-teal-300/50',
      hoverColor: 'hover:border-teal-400/70'
    },
    {
      title: 'Private Car Service',
      description: 'Luxury point-to-point travel',
      icon: Headphones,
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-cyan-300/50',
      hoverColor: 'hover:border-cyan-400/70'
    },
    {
      title: 'Port Transfers',
      description: 'Seamless cruise port transportation',
      icon: Anchor,
      color: 'from-blue-400 to-sky-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-blue-300/50',
      hoverColor: 'hover:border-blue-400/70'
    },
    {
      title: 'Travel Planning',
      description: 'Complete itinerary coordination',
      icon: Calendar,
      color: 'from-sky-400 to-teal-500',
      bgColor: 'bg-white/80',
      borderColor: 'border-sky-300/50',
      hoverColor: 'hover:border-sky-400/70'
    }
  ];

  const getMailtoLink = (serviceTitle: string) => {
    const subject = encodeURIComponent('Travel Booking Inquiry');
    const body = encodeURIComponent(`Hello,\\n\\nI'd like to inquire about ${serviceTitle}.\\n\\nPlease provide more information about availability and pricing.\\n\\nThank you!`);
    return `mailto:bookings@emperiatravel.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="tools-section" alpha-section-id="tools-section" className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-teal-50/60 to-blue-100/80 opacity-80"></div>
        
        {/* Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="service-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="rgba(20, 184, 166, 0.2)"/>
                <circle cx="5" cy="5" r="1" fill="rgba(6, 182, 212, 0.2)"/>
                <circle cx="15" cy="15" r="1" fill="rgba(14, 165, 233, 0.2)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#service-pattern)"/>
          </svg>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                i % 3 === 0 ? 'bg-teal-400/50' : 
                i % 3 === 1 ? 'bg-cyan-400/50' : 
                'bg-blue-400/50'
              }`}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [-10, -25, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-slate-700">Comprehensive travel solutions including flights, cruises, and transportation</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={getMailtoLink(service.title)}
              className={`${service.bgColor} border ${service.borderColor} ${service.hoverColor} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-auto sm:h-72 flex flex-col relative overflow-hidden backdrop-blur-sm cursor-pointer`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-teal-400/10 rounded-full -translate-y-8 translate-x-8"></div>

              <div className="flex-1 relative z-10 text-center sm:text-left mb-6 sm:mb-0">
                <h3 className="text-xl sm:text-xl font-bold text-cyan-700 mb-3">{service.title}</h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </div>
              
              <div className="flex justify-center relative z-10 sm:mt-auto">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg relative`}>
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute bottom-4 left-4 w-6 h-6">
                <div className="absolute bottom-0 left-0 w-4 h-px bg-cyan-400/50"></div>
                <div className="absolute bottom-0 left-0 w-px h-4 bg-cyan-400/50"></div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-teal-500 mb-2" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 text-center">Worldwide Coverage</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mb-2" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 text-center">Trusted by Thousands</span>
            </div>
            <div className="flex flex-col items-center hidden sm:flex">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-sky-500 mb-2" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 text-center">Award Winning Service</span>
            </div>
            <div className="flex flex-col items-center sm:hidden col-span-2">
              <Award className="w-6 h-6 text-sky-500 mb-2" />
              <span className="text-xs font-medium text-slate-700 text-center">Award Winning Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}