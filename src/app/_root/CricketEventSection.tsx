"use client";

import Image from 'next/image';
import { Calendar, Clock, MapPin, Users, Star, Mail, Ticket, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { projectId } from '@/system-settings';

export default function CricketEventSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('forms').insert({
        projectId: projectId,
        title: 'cricket-event-rsvp',
        submission: formData
      });

      if (error) {
        console.error('Error submitting RSVP:', error);
      } else {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', guests: '1' });
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="cricket-event-section" alpha-section-id="cricket-event-section" className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 py-8 sm:py-16 lg:py-20 overflow-hidden">
      {/* Event background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
            `,
            backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px'
          }}></div>
        </div>

        {/* Floating cricket elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full ${
                i % 4 === 0 ? 'bg-purple-400/50' : 
                i % 4 === 1 ? 'bg-pink-400/50' : 
                i % 4 === 2 ? 'bg-amber-400/50' : 
                'bg-emerald-400/50'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -25, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700 mb-2 sm:mb-4">Special Cricket Legend Event</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700">An Evening with Cricket Legend Sachin Tendulkar</p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Event Flyer - Enhanced for better display */}
          <motion.div
            className="relative order-1 xl:order-1 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-amber-500 rounded-3xl p-2 shadow-2xl max-w-lg w-full">
              <div className="bg-white rounded-3xl overflow-hidden relative shadow-inner">
                {/* Event Flyer Image - Better aspect ratio and sizing */}
                <div className="relative w-full aspect-[3/4] max-h-[700px]">
                  <Image
                    src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1759518351435-rcepzn8uoo.jpg"
                    alt="An Evening with Cricket Legend Sachin Tendulkar"
                    fill
                    crossOrigin="anonymous"
                    className="object-contain bg-white"
                    priority
                  />
                </div>

                {/* Event highlights overlay - Positioned better */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6">
                  <div className="text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                      <span className="text-sm font-medium">Cricket Legend Event</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">Sachin Tendulkar</h3>
                    <p className="text-sm opacity-90">Hilton Anatole, Dallas • October 2, 2025</p>
                  </div>
                </div>

                {/* Premium event badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-3 py-2 rounded-full shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">Premium Event</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements around flyer - Enhanced */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg"
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg"
              animate={{
                y: [5, -5, 5],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            />
            <motion.div
              className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg"
              animate={{
                x: [-5, 5, -5],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity
              }}
            />
          </motion.div>

          {/* RSVP Form and Event Details */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-2 xl:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* RSVP Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-200/50 overflow-hidden">
              {/* Form header */}
              <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      RSVP for Cricket Legend Event
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      Reserve your seat for this exclusive evening
                    </p>
                  </div>
                  <Ticket className="w-6 h-6 sm:w-8 sm:h-8 text-pink-200" />
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                {isSubmitted ? (
                  <div className="text-center py-6 sm:py-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 border border-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600"
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
                    <h3 className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">
                      RSVP Confirmed!
                    </h3>
                    <p className="text-slate-700 mb-4 text-sm sm:text-base">
                      Thank you for your RSVP. You will receive event details and confirmation via email shortly.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span>
                        Event: October 2, 2025 at Hilton Anatole, Dallas
                      </span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-purple-50/50 text-slate-700 placeholder-slate-500 text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-purple-50/50 text-slate-700 placeholder-slate-500 text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-purple-50/50 text-slate-700 placeholder-slate-500 text-sm sm:text-base"
                        placeholder="+1 (214) 555-1234"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="guests"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-purple-50/50 text-slate-700 text-sm sm:text-base"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>
                            {num} Guest{num !== 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>
                        {isSubmitting ? 'Sending RSVP...' : 'RSVP Now'}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-white/90 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-700 mb-4">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 bg-purple-50/80 rounded-xl p-3">
                  <Calendar className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="font-semibold text-purple-700 text-base block">Thursday, October 2, 2025</span>
                    <p className="text-sm text-slate-600">Reception 6:00 PM | Dinner 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-pink-50/80 rounded-xl p-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="font-semibold text-pink-700 text-base block">Hilton Anatole, Dallas</span>
                    <p className="text-sm text-slate-600">Formal Attire Required</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-amber-50/80 rounded-xl p-3">
                  <Star className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="font-semibold text-amber-700 text-base block">Keynote: Dale Hansen</span>
                    <p className="text-sm text-slate-600">Legendary Sportscaster &amp; Advocate</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-emerald-50/80 rounded-xl p-3">
                  <Users className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="font-semibold text-emerald-700 text-base block">Charity Partner: Chetna</span>
                    <p className="text-sm text-slate-600">Peace Begins at Home - 20 Years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Important Information</h3>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="break-words">Tickets: www.chetna-dfw.org</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="break-words">Table &amp; Sponsorship: www.nclcricket.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Age restriction: 16+ only due to advocacy nature</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Organizers reserve right to deny entry</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}