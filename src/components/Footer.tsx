"use client";

import Image from 'next/image';
import { Plane, Globe, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="footer" alpha-section-id="footer" className="bg-black border-t border-amber-400/30">
      {/* Luxury background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Footer description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 border-b border-amber-400/30">
        <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
          <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
          <h3 className="text-amber-400 font-semibold text-base sm:text-lg">About Emperia Travels</h3>
        </div>
        <p className="text-slate-300 leading-relaxed max-w-4xl text-sm sm:text-base">
          Discover luxury tropical travel with Emperia Travels. We curate premium flight packages, cruise experiences, hotel accommodations, and tour packages with complete itineraries, local excursions, and 24/7 customer support for unforgettable adventures around the world.
        </p>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-amber-400 mb-3 sm:mb-4 flex items-center space-x-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Company</span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors text-sm sm:text-base">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors text-sm sm:text-base">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors text-sm sm:text-base">Travel Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors text-sm sm:text-base">Our Story</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center space-x-2">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Support</span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm sm:text-base">Help Center</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm sm:text-base">Press</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm sm:text-base">Travel Agents</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm sm:text-base">Hotel Partners</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm sm:text-base">Cruise Partners</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm sm:text-base">Advertise</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-yellow-400 mb-3 sm:mb-4 flex items-center space-x-2">
              <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Services</span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Luxury Packages</a></li>
              <li><a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Tropical Cruises</a></li>
              <li><a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Resort Bookings</a></li>
              <li><a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Travel Insurance</a></li>
              <li><a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Concierge Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-amber-400/30">
          {/* Legal links */}
          <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
            <a href="#" className="text-xs sm:text-sm text-slate-400 hover:text-slate-300 transition-colors">©2025 Emperia Travels</a>
            <a href="#" className="text-xs sm:text-sm text-slate-400 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-slate-400 hover:text-slate-300 transition-colors">Terms & Conditions</a>
            <a href="#" className="text-xs sm:text-sm text-slate-400 hover:text-slate-300 transition-colors">Booking Terms</a>
            <a href="#" className="text-xs sm:text-sm text-slate-400 hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>

          {/* Partner badges */}
          <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-8 mb-4 sm:mb-6">
            <div className="text-xs text-slate-500 font-medium">Luxury Resorts</div>
            <div className="text-xs text-slate-500 font-medium">Premium Airlines</div>
            <div className="text-xs text-slate-500 font-medium">Cruise Lines</div>
            <div className="text-xs text-slate-500 font-medium">Local Guides</div>
            <div className="text-xs text-slate-500 font-medium">Travel Insurance</div>
          </div>

          {/* Currency and social */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="text-xs sm:text-sm text-slate-400 hover:text-slate-300 transition-colors">🌍 Global</button>
              <button className="text-xs sm:text-sm text-slate-400 hover:text-slate-300 transition-colors">💲 USD</button>
            </div>
            <div className="flex items-center space-x-4">
              <motion.a 
                href="#" 
                className="text-slate-400 hover:text-slate-300 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="sr-only">Facebook</span>
                <Image
                  src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-social-logo-facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  crossOrigin="anonymous"
                  className="sm:w-6 sm:h-6 opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-slate-400 hover:text-slate-300 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="sr-only">Instagram</span>
                <Image
                  src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-social-logo-instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  crossOrigin="anonymous"
                  className="sm:w-6 sm:h-6 opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-slate-400 hover:text-slate-300 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="sr-only">Twitter</span>
                <Image
                  src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image//alpha-social-logo-twitter.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                  crossOrigin="anonymous"
                  className="sm:w-6 sm:h-6 opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.a>
            </div>
          </div>

          {/* Website design credit */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-amber-400/20 text-center">
            <p className="text-xs text-slate-500">
              Site Creds{' '}
              <a 
                href="#" 
                className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                FyreBrand Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}