"use client";

import Image from 'next/image';
import { Calendar, Clock, MapPin, Users, Star, Download, Share2, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function EventSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="event-section" alpha-section-id="event-section" className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 py-12 sm:py-20 overflow-hidden">
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

        {/* Floating event elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
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
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4">Tropical Paradise Event</h2>
          <p className="text-lg sm:text-xl text-slate-700">Join us for an unforgettable luxury travel showcase</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Event Flyer */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-amber-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl p-6 sm:p-8 h-full relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
                    `,
                    backgroundSize: '200px 200px'
                  }}></div>
                </div>

                {/* Event Header */}
                <div className="relative z-10 text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-purple-600 text-sm font-medium">EXCLUSIVE EVENT</span>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent mb-2">
                    Tropical Luxury Showcase
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Discover Paradise Destinations &amp; Win Amazing Prizes
                  </p>
                </div>

                {/* Event Image */}
                <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                    alt="Tropical Paradise Event"
                    fill
                    crossOrigin="anonymous"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"></div>
                  
                  {/* Event badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-amber-300/50 rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-amber-500 fill-current" />
                      <span className="text-sm font-medium text-amber-600">VIP Event</span>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 bg-purple-50/80 rounded-xl p-3">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    <div>
                      <span className="font-semibold text-purple-700">Saturday, February 15, 2025</span>
                      <p className="text-xs text-slate-600">Mark your calendar</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-pink-50/80 rounded-xl p-3">
                    <Clock className="w-5 h-5 text-pink-500" />
                    <div>
                      <span className="font-semibold text-pink-700">6:00 PM - 10:00 PM</span>
                      <p className="text-xs text-slate-600">4 hours of luxury</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-amber-50/80 rounded-xl p-3">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <div>
                      <span className="font-semibold text-amber-700">Dallas Convention Center</span>
                      <p className="text-xs text-slate-600">650 S Griffin St, Dallas, TX</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-emerald-50/80 rounded-xl p-3">
                    <Users className="w-5 h-5 text-emerald-500" />
                    <div>
                      <span className="font-semibold text-emerald-700">Limited to 200 Guests</span>
                      <p className="text-xs text-slate-600">Exclusive luxury experience</p>
                    </div>
                  </div>
                </div>

                {/* Event Highlights */}
                <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 rounded-2xl p-4 mb-6">
                  <h4 className="font-bold text-purple-700 mb-3 text-center">Event Highlights</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-700">Luxury Travel Showcase</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-slate-700">VIP Networking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-slate-700">Prize Giveaways</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">Tropical Cuisine</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Ticket className="w-4 h-4" />
                    <span>RSVP Now</span>
                  </motion.button>
                  
                  <motion.button
                    className="bg-white border-2 border-purple-300 hover:border-purple-400 text-purple-600 px-4 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Floating elements around flyer */}
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
          </motion.div>

          {/* Event Information */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">About This Exclusive Event</h3>
              <p className="text-slate-700 mb-4 text-sm sm:text-base leading-relaxed">
                Join Emperia Travels for an extraordinary evening showcasing the world's most luxurious tropical destinations. 
                Experience virtual tours of overwater villas, meet our paradise experts, and discover exclusive travel packages 
                available only to event attendees.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                This VIP event features gourmet tropical cuisine, premium beverages, live entertainment, and the chance to win 
                incredible prizes including a 7-day luxury vacation to the Maldives!
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-pink-200/50 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-pink-700 mb-4">What to Expect</h3>
              <div className="space-y-3">
                {[
                  { icon: '🏝️', title: 'Virtual Paradise Tours', desc: 'Immersive 360° destination experiences' },
                  { icon: '🥂', title: 'Premium Reception', desc: 'Tropical cocktails &amp; gourmet appetizers' },
                  { icon: '🎁', title: 'Exclusive Prizes', desc: 'Win luxury vacations &amp; travel vouchers' },
                  { icon: '✈️', title: 'Travel Experts', desc: 'One-on-one consultations with paradise specialists' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-pink-50/50 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-pink-700 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Special Event Offers</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm sm:text-base">30% off all bookings made at the event</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm sm:text-base">Complimentary room upgrades for first 50 bookings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm sm:text-base">Free airport transfers &amp; concierge service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm sm:text-base">Exclusive access to private island experiences</span>
                </div>
              </div>
            </div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.02 }}
            >
              <button className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 mx-auto">
                <Download className="w-5 h-5" />
                <span>Download Event Flyer</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}