"use client";

import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="map-section" alpha-section-id="map-section" className="relative bg-white border-t border-slate-100 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Connect With Our Team</h2>
          <p className="text-lg sm:text-xl text-slate-600">We are available to assist with all your travel arrangements</p>
        </motion.div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20 max-w-4xl mx-auto">
          <motion.div
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">General Inquiries</h3>
            </div>
            <div className="space-y-2">
              <p className="text-slate-600 font-medium">bookings@emperiatravel.com</p>
              <p className="text-sm text-slate-500">For new and existing bookings</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Office Hours</h3>
            </div>
            <div className="space-y-2">
              <p className="text-slate-600 font-medium">Mon-Fri, 9am - 6pm CST</p>
              <p className="text-sm text-slate-500">Response within 24 hours</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Book?</h3>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Skip the hassle of planning. Let our experts handle your flights, cruises, and transportation.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href={`mailto:bookings@emperiatravel.com?subject=Travel Booking&body=Hello, I'd like to inquire about...`}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all w-full sm:w-auto"
                >
                  Start Booking
                </a>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}