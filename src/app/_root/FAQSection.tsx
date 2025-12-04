"use client";

import { ChevronDown, ChevronUp, HelpCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How far in advance should I book my travel?",
      answer: "We recommend booking at least three months in advance for charter services and private car reservations. However, we strive to accommodate last-minute or same-day bookings whenever possible, depending on vehicle availability."
    },
    {
      question: "Can Emperia Travel accommodate passengers with disabilities?",
      answer: "Yes. Our fleet includes handicap-accessible vehicles, and our staff is trained to provide safe and comfortable service for all passengers."
    },
    {
      question: "Do your motorcoaches have restrooms?",
      answer: "Yes. Our motorcoaches and select long-distance vehicles are equipped with onboard restrooms for your convenience."
    },
    {
      question: "How do you handle flight delays?",
      answer: "Our team monitors flights in real-time and adjusts pick-up times accordingly to ensure you are picked up promptly, even in case of delays."
    },
    {
      question: "Can I make changes to my itinerary after booking?",
      answer: "Yes. Emperia Travel offers flexible scheduling for last-minute adjustments, route changes, or additional stops."
    },
    {
      question: "Do you provide airport transfers?",
      answer: "Absolutely. We offer timely, reliable, and luxury airport transfers to and from any airport, private jet, or cruise terminal worldwide."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq-section" alpha-section-id="faq-section" className="relative bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-12 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-teal-50/60 to-blue-100/80 opacity-80"></div>
        
        {/* Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)
            `,
            backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px'
          }}></div>
        </div>

        {/* Floating question marks */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute text-lg sm:text-2xl ${
                i % 3 === 0 ? 'text-teal-400/40' : 
                i % 3 === 1 ? 'text-cyan-400/40' : 
                'text-blue-400/40'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 15, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              ?
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg sm:text-xl text-slate-700">Everything you need to know about Emperia Travel</p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="flex items-center justify-between w-full text-left bg-white/90 backdrop-blur-sm border border-cyan-200/50 hover:border-cyan-300/70 transition-all rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
                onClick={() => toggleFAQ(index)}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 opacity-0 hover:opacity-100 transition-opacity"></div>

                <div className="flex items-start space-x-3 sm:space-x-4 flex-1 pr-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 mt-1">
                    <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 flex-shrink-0" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-cyan-700 leading-relaxed">{faq.question}</span>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${openFAQ === index ? 'bg-blue-400' : 'bg-cyan-400'} animate-pulse`}></div>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                  )}
                </div>
              </motion.button>
              
              {openFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 sm:mt-4"
                >
                  <div className="bg-cyan-50/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-cyan-200/50 relative">
                    {/* Decorative elements */}
                    <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500" />
                      <span className="text-cyan-600 text-xs sm:text-sm font-medium">Answer</span>
                    </div>
                    
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional help section */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">Our team is here to help you plan your perfect transportation experience.</p>
            <a 
              href="mailto:bookings@emperiatravel.com?subject=Travel Booking&body=Hello, I'd like to inquire about..."
              className="inline-block bg-white text-cyan-600 px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold hover:bg-cyan-50 transition-colors shadow-lg text-sm sm:text-base"
            >
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}