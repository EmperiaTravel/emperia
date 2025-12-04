"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Bell, Shield, Star, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { projectId } from '@/system-settings';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('forms').insert({
        projectId: projectId,
        title: 'quote-request',
        submission: { email }
      });

      if (error) {
        console.error('Error submitting quote request:', error);
      } else {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter-section" alpha-section-id="newsletter-section" className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-black py-12 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                x: [-5, 5, -5],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        <svg className="absolute bottom-0 w-full h-24 sm:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            d="M0,80 C200,20 400,100 600,60 C800,20 1000,80 1200,50 L1200,120 L0,120 Z"
            fill="rgba(251, 191, 36, 0.1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
              <Bell className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Request a Quote
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed">
            Get personalized transportation solutions tailored to your needs. Our team will respond within 24 hours with a customized quote.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Safety First</h3>
              <p className="text-sm sm:text-base text-slate-300">DOD-certified, professional drivers</p>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Premium Fleet</h3>
              <p className="text-sm sm:text-base text-slate-300">Modern luxury vehicles with amenities</p>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">24/7 Service</h3>
              <p className="text-sm sm:text-base text-slate-300">Complete logistics management</p>
            </motion.div>
          </div>

          {isSubmitted ? (
            <motion.div
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 sm:p-8 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Quote Request Received!</h3>
              <p className="text-slate-300 text-sm sm:text-base">
                Thank you for your interest. Our team will contact you within 24 hours with a personalized quote.
              </p>
            </motion.div>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 sm:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for a quote"
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border border-white/50 rounded-xl text-slate-700 placeholder-slate-500 focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Get Quote'}</span>
                </button>
              </form>

              <p className="text-xs sm:text-sm text-slate-400 mt-4">
                Professional service for corporate, private, and group transportation. Response within 24 hours.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}