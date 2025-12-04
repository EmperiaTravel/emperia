"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Globe, Heart } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { projectId } from "@/system-settings";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("forms").insert({
        projectId: projectId,
        title: "contact-form",
        submission: formData,
      });

      if (error) {
        console.error("Error submitting form:", error);
      } else {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact-section"
      alpha-section-id="contact-section"
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
              backgroundSize: "50px 50px, 50px 50px, 100px 100px, 100px 100px",
            }}
          ></div>
        </div>

        {/* Floating contact elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                i % 3 === 0
                  ? "bg-teal-400/50"
                  : i % 3 === 1
                    ? "bg-cyan-400/50"
                    : "bg-blue-400/50"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                x: [-5, 5, -5],
                opacity: [0.3, 0.8, 0.3],
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          {/* Left side - Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-4 sm:mb-6">
              Let's Plan Your Journey
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 mb-6 sm:mb-8">
              Ready to embark on your next adventure? Our transportation experts
              are here to create unforgettable travel experiences tailored just
              for you.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 bg-white/90 backdrop-blur-sm border border-cyan-300/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-600">
                    Email Us
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base break-all">
                    bookings@emperiatravel.com
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Response within 2 hours
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 bg-white/90 backdrop-blur-sm border border-blue-300/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-blue-600">
                    Visit Our Dallas Office
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base">
                    713 Gatewood Road, Suit E, Garland TX 75043
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Mon-Fri 9AM-6PM (Central Time)
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <motion.div
              className="mt-8 sm:mt-12 bg-white/90 backdrop-blur-sm border border-cyan-300/50 rounded-2xl p-4 sm:p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-600">
                    Why Choose Emperia?
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-700">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-slate-700">Expert Curation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-700">Luxury Focus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-slate-700">Personalized Service</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-cyan-200/50 overflow-hidden">
              {/* Form header */}
              <div className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Start Planning Your Journey
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      Tell us about your dream travel experience
                    </p>
                  </div>
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                </div>
              </div>

              <div className="p-4 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-6 sm:py-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-100 border border-cyan-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600"
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
                    <h3 className="text-xl sm:text-2xl font-bold text-cyan-600 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-slate-700 mb-4 text-sm sm:text-base">
                      Your message has been received. Our transportation experts
                      will contact you within 24 hours to start planning your
                      perfect journey.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-slate-600">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>
                        Expected response: Within 24 hours (Central Time)
                      </span>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs sm:text-sm font-medium text-slate-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-3 border border-cyan-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-cyan-50/50 text-slate-700 placeholder-slate-500 text-base"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-medium text-slate-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-3 border border-cyan-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-cyan-50/50 text-slate-700 placeholder-slate-500 text-base"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs sm:text-sm font-medium text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 border border-cyan-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-cyan-50/50 text-slate-700 placeholder-slate-500 text-base"
                        placeholder="+1 (214) 555-1234"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-medium text-slate-700 mb-2"
                      >
                        Tell us about your travel needs
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-3 border border-cyan-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-cyan-50/50 text-slate-700 placeholder-slate-500 text-base"
                        placeholder="Where would you like to go? What travel experiences are you looking for? Any special occasions or preferences?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 hover:from-teal-500 hover:via-cyan-500 hover:to-blue-500 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-base"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>
                        {isSubmitting ? "Sending..." : "Send Emperia a Message"}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
