"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Plane,
  Star,
  Clock,
  Bell,
  Mail,
  Heart,
  Globe,
  Award,
} from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { projectId } from "@/system-settings";

export default function ComingSoonSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("forms").insert({
        projectId: projectId,
        title: "services-waitlist",
        submission: { email },
      });

      if (error) {
        console.error("Error submitting form:", error);
      } else {
        setIsSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const upcomingServices = [
    {
      title: "Premium Concierge Services",
      description: "Personal paradise assistants available 24/7",
      icon: Bell,
      color: "from-amber-400 to-yellow-500",
      delay: 0.1,
    },
    {
      title: "Custom Paradise Packages",
      description: "Tailored tropical experiences just for you",
      icon: Star,
      color: "from-emerald-400 to-teal-500",
      delay: 0.2,
    },
    {
      title: "Luxury Transportation",
      description: "Premium transfers and private jets",
      icon: Plane,
      color: "from-cyan-400 to-blue-500",
      delay: 0.3,
    },
    {
      title: "VIP Experience Access",
      description: "Exclusive tropical perks and privileges",
      icon: Award,
      color: "from-teal-400 to-emerald-500",
      delay: 0.4,
    },
  ];

  return (
    <section
      id="coming-soon-section"
      alpha-section-id="coming-soon-section"
      className="relative bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 py-12 sm:py-20 overflow-hidden min-h-screen flex items-center"
    >
      {/* Tropical light background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-cyan-50/60 to-blue-100/80 opacity-80"></div>

        {/* Tropical pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(251, 191, 36, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
            `,
              backgroundSize: "80px 80px, 80px 80px, 160px 160px, 160px 160px",
            }}
          ></div>
        </div>

        {/* Floating tropical elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                i % 3 === 0
                  ? "bg-amber-400/50"
                  : i % 3 === 1
                    ? "bg-emerald-400/50"
                    : "bg-cyan-400/50"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -25, -10],
                x: [-8, 8, -8],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.3, 1],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        {/* Tropical wave pattern */}
        <svg
          className="absolute bottom-0 w-full h-32 sm:h-48"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="tropical-wave-services"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(251, 191, 36, 0.4)" />
              <stop offset="25%" stopColor="rgba(16, 185, 129, 0.3)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="75%" stopColor="rgba(16, 185, 129, 0.3)" />
              <stop offset="100%" stopColor="rgba(251, 191, 36, 0.4)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,80 C200,20 400,100 600,60 C800,20 1000,80 1200,50 L1200,120 L0,120 Z"
            fill="url(#tropical-wave-services)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          {/* Main coming soon content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tropical badges */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-amber-400/50 rounded-full px-3 sm:px-4 py-2 shadow-lg">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
                <span className="text-amber-600 text-xs sm:text-sm font-medium">
                  Coming Soon
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-emerald-400/50 rounded-full px-3 sm:px-4 py-2 shadow-lg">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                <span className="text-emerald-600 text-xs sm:text-sm font-medium">
                  Premium Services
                </span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                  Premium{" "}
                </span>
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                We're crafting extraordinary tropical luxury services that will
                elevate
                <br className="hidden sm:block" />
                your paradise experience to new heights of excellence.
              </p>
            </motion.div>

            {/* Coming soon image showcase */}
            <motion.div
              className="mb-8 sm:mb-12 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <motion.div
                    className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1760986526962-5lj379yotgc.png"
                      alt="Luxury Spa Services"
                      fill
                      crossOrigin="anonymous"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                      <h3 className="font-bold text-emerald-600 text-sm">
                        Luxury Spa Services
                      </h3>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1760986598562-ycy88sngon.jpg"
                      alt="Private Dining Services"
                      fill
                      crossOrigin="anonymous"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                      <h3 className="font-bold text-amber-600 text-sm">
                        Private Dining
                      </h3>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-xl sm:col-span-2 lg:col-span-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1760986644261-vho94lky01h.jpg"
                      alt="Luxury Transportation"
                      fill
                      crossOrigin="anonymous"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                      <h3 className="font-bold text-cyan-600 text-sm">
                        Luxury Transportation
                      </h3>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Upcoming services preview */}
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-6 sm:mb-8">
                What's Coming to Paradise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {upcomingServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: service.delay }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg mb-4 mx-auto`}
                    >
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-emerald-700 mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 text-center">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Email signup */}
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-700">
                  Be First in Paradise
                </h3>
              </div>

              <p className="text-slate-700 mb-6 sm:mb-8 text-sm sm:text-base">
                Join our exclusive waitlist to be the first to experience our
                premium tropical luxury services when they launch.
              </p>

              {isSubmitted ? (
                <div className="text-center py-4 sm:py-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 border border-emerald-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-emerald-600 mb-2">
                    Welcome to Paradise Priority!
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base">
                    You'll be among the first to know when our premium services
                    launch.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email for paradise updates"
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-emerald-50/50 text-slate-700 placeholder-slate-500 text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{isSubmitting ? "Joining..." : "Join Waitlist"}</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-8 sm:mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-amber-600">
                    Q2 2025
                  </div>
                  <div className="text-xs text-slate-600">Expected Launch</div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-slate-400"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-600">
                    5-Star
                  </div>
                  <div className="text-xs text-slate-600">Service Quality</div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-slate-400"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-600">
                    24/7
                  </div>
                  <div className="text-xs text-slate-600">Paradise Support</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="flex -space-x-2">
                  <Image
                    src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-21.jpg"
                    alt="Happy Customer"
                    width={28}
                    height={28}
                    crossOrigin="anonymous"
                    className="sm:w-8 sm:h-8 rounded-full border-2 border-amber-400 shadow-lg"
                  />
                  <Image
                    src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-18.jpg"
                    alt="Happy Customer"
                    width={28}
                    height={28}
                    crossOrigin="anonymous"
                    className="sm:w-8 sm:h-8 rounded-full border-2 border-amber-400 shadow-lg"
                  />
                  <Image
                    src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-face-5.jpg"
                    alt="Happy Customer"
                    width={28}
                    height={28}
                    crossOrigin="anonymous"
                    className="sm:w-8 sm:h-8 rounded-full border-2 border-amber-400 shadow-lg"
                  />
                </div>
                <span className="text-slate-600 text-xs sm:text-sm">
                  Join thousands waiting for paradise services
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
