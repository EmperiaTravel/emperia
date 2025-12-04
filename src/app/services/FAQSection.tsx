"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          q: "How far in advance should I book my travel?",
          a: "We recommend booking at least three months in advance for charter services and private car reservations. However, we strive to accommodate last-minute or same-day bookings whenever possible, depending on vehicle availability."
        },
        {
          q: "Can Emperia Travel accommodate passengers with disabilities?",
          a: "Yes. Our fleet includes handicap-accessible vehicles, and our staff is trained to provide safe and comfortable service for all passengers."
        },
        {
          q: "Can I bring food or beverages on board?",
          a: "Yes. Passengers are welcome to bring snacks or drinks. For larger groups, events, or special requests, please let us know in advance."
        },
        {
          q: "How is luggage handled, and how much can I bring?",
          a: "Luggage is securely stored in designated compartments. The allowable luggage depends on the type of vehicle; our team will advise based on your group size and service selection."
        },
        {
          q: "Where can vehicles pick me up?",
          a: "Pick-up locations are flexible. We coordinate directly with you to ensure the most convenient and safe location for your departure."
        }
      ]
    },
    {
      category: "Shuttle & Group Travel",
      questions: [
        {
          q: "Do you operate regular city-to-city routes?",
          a: "Emperia Travel focuses on customized point-to-point services. For recurring or scheduled city-to-city travel, we can create tailored solutions based on your needs."
        },
        {
          q: "How many passengers can your shuttles and motorcoaches accommodate?",
          a: "Our fleet includes vehicles ranging from 20-passenger vans to 50+ passenger motorcoaches, suitable for corporate trips, school transport, or large group events."
        },
        {
          q: "Do your motorcoaches have restrooms?",
          a: "Yes. Our motorcoaches and select long-distance vehicles are equipped with onboard restrooms for your convenience."
        },
        {
          q: "Are your shuttle drivers experienced?",
          a: "Absolutely. Our drivers are professionally trained, insured, and safety-certified, with extensive experience navigating both urban and long-distance routes."
        }
      ]
    },
    {
      category: "Private Car & Executive Travel",
      questions: [
        {
          q: "Can I book a private car or luxury SUV for business travel?",
          a: "Yes. Our private car service is ideal for corporate travel, airport transfers, executive meetings, or multi-stop schedules. Vehicles are equipped with Wi-Fi, power outlets, and premium seating."
        },
        {
          q: "Can I make changes to my itinerary after booking?",
          a: "Yes. Emperia Travel offers flexible scheduling for last-minute adjustments, route changes, or additional stops."
        },
        {
          q: "Do your chauffeurs provide concierge services?",
          a: "Yes. Our chauffeurs can assist with luggage, reservations, and recommendations to ensure a smooth, stress-free experience."
        }
      ]
    },
    {
      category: "Airport & Travel Transfers",
      questions: [
        {
          q: "Do you provide airport transfers?",
          a: "Absolutely. We offer timely, reliable, and luxury airport transfers to and from any airport, private jet, or cruise terminal worldwide."
        },
        {
          q: "How do you handle flight delays?",
          a: "Our team monitors flights in real-time and adjusts pick-up times accordingly to ensure you are picked up promptly, even in case of delays."
        },
        {
          q: "Can you handle international airport transfers?",
          a: "Yes. Emperia Travel coordinates travel anywhere in the world, ensuring seamless service across borders."
        }
      ]
    },
    {
      category: "Luxury & Customized Experiences",
      questions: [
        {
          q: "Can I book a private city tour or sightseeing experience?",
          a: "Yes. We offer fully customized luxury tours, tailored to your interests, schedule, and group size."
        },
        {
          q: "Can I book transportation for special events or occasions?",
          a: "Yes. From weddings and anniversaries to corporate retreats and private parties, we provide professional, safe, and luxurious transportation for any occasion."
        },
        {
          q: "Can you create a full-day or multi-day itinerary?",
          a: "Absolutely. Emperia Travel specializes in bespoke travel experiences, including multi-stop routes, overnight trips, and curated itineraries designed around your preferences."
        }
      ]
    }
  ];

  return (
    <section
      id="faq-section"
      alpha-section-id="faq-section"
      className="relative bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-amber-400/20 backdrop-blur-sm border border-amber-400/50 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span className="text-amber-600 text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Questions? We're Here to Help
          </h2>
          <p className="text-lg text-slate-600">
            If you don't see what you need, please email us at{" "}
            <a href="mailto:Bookings@emperia.com" className="text-amber-500 hover:text-amber-600 font-semibold">
              Bookings@emperia.com
            </a>
          </p>
        </motion.div>

        <div className="space-y-12">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{catIndex + 1}</span>
                </div>
                <span>{category.category}</span>
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <div
                      key={qIndex}
                      className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-700 text-lg leading-relaxed">
            With Emperia Travel, every journey prioritizes safety, professionalism, and luxury, ensuring that you, your guests, or your employees arrive comfortably, on time, and in style.
          </p>
        </motion.div>
      </div>
    </section>
  );
}