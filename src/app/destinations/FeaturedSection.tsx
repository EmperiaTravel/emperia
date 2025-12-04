"use client";

import Image from "next/image";
import {
  Star,
  MapPin,
  Calendar,
  ChevronRight,
  Briefcase,
  Users,
  Plane,
  Car,
  Sparkles,
  Ship,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedSection() {
  const services = [
    {
      id: 1,
      name: "Event Transportation",
      subtitle: "Seamless Mobility Solutions for Unforgettable Events",
      description:
        "From international conferences to local celebrations, destination managers and event planners trust Emperia for safe, reliable, and perfectly coordinated transportation. Whether you're moving 10 or 20,000 guests, we deliver the same commitment to excellence.",
      features: [
        "Airport and hotel transfers",
        "Venue and convention shuttles",
        "Corporate and VIP movements",
        "Day trips, sightseeing, and photo tours",
        "Full-service event and attendee transportation management",
      ],
      note: "Your Ground Transportation Partner — Across States and Beyond",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      icon: Briefcase,
      color: "from-blue-400 to-indigo-500",
      cta: "Request a Quote",
    },
    {
      id: 2,
      name: "Shuttle Services",
      subtitle:
        "Professional Shuttle Solutions for Corporations and Universities",
      description:
        "Corporations and universities trust Emperia Travel for safe, seamless, and professional shuttle services. We design flexible routes tailored to students, faculty, staff, and visitors — from last-mile connections to full campus programs.",
      features: [
        "Campus shuttle programs",
        "Corporate parking lot transit",
        "Last-mile connector services",
        "Convention center and venue shuttles",
        "Custom route planning and scheduling",
      ],
      note: "Premium amenities include Wi-Fi, leather seating, PA systems, and onboard restrooms.",
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764650323826-wudebyfy0ik.jpg",
      icon: Users,
      color: "from-purple-400 to-pink-500",
      cta: "Request a Quote",
    },
    {
      id: 3,
      name: "Private Car Service",
      subtitle: "Luxury Point-to-Point Transportation",
      description:
        "Travel in style, comfort, and safety with Emperia Travel's Private Car Service. Our professional chauffeurs handle the traffic so you can focus on business, leisure, or special occasions. Fully customized point-to-point service packages available.",
      features: [
        "Around-Town: Reserve point-to-point rides in advance",
        "Business: Black car or luxury SUV for corporate travel",
        "Events: Reliable, stylish car service for any occasion",
        "Date Night: Relax while your chauffeur handles everything",
        "Airport Transfers: Worldwide transportation management",
      ],
      note: "Professional, city-savvy chauffeurs with years of experience.",
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764548068006-7pbl5qifcvc.jpg",
      icon: Car,
      color: "from-cyan-400 to-blue-500",
      cta: "Request a Quote",
    },
    {
      id: 4,
      name: "Customized Luxury Experiences",
      subtitle: "Travel Your Way with Emperia Travel",
      description:
        "Turn every journey into an unforgettable experience. Whether it's a private city tour, a weekend getaway, or a fully tailored itinerary for business or leisure, we design every detail around your preferences, comfort, and schedule.",
      features: [
        "Tailored City & Sightseeing Tours",
        "Exclusive Events & Nightlife access",
        "Private Retreats & Getaways",
        "Special Occasions (anniversaries, birthdays, milestones)",
        "Flexible, On-Demand Service with same-day changes",
      ],
      note: "Your Journey, Your Rules — combining elegance, convenience, and safety.",
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764548111656-8r7i41nwnbg.jpg",
      icon: Sparkles,
      color: "from-green-400 to-emerald-500",
      cta: "Request a Quote",
    },
    {
      id: 5,
      name: "Premium Flight Packages",
      subtitle: "Worldwide Flight Bookings with Luxury Service",
      description:
        "Experience seamless air travel with Emperia's premium flight booking services. From business class to first class, we curate the perfect flight experience to destinations around the globe, ensuring comfort and convenience from departure to arrival.",
      features: [
        "Business & First Class bookings",
        "Group flight arrangements",
        "Multi-city itineraries",
        "Airport lounge access coordination",
        "Worldwide destination coverage",
      ],
      note: "Fly in comfort with our curated flight packages to any destination worldwide.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      icon: Plane,
      color: "from-sky-400 to-blue-500",
      cta: "Request a Quote",
    },
    {
      id: 6,
      name: "Luxury Cruise Experiences",
      subtitle: "Unforgettable Cruise Journeys Across the Globe",
      description:
        "Discover the world's most breathtaking destinations aboard luxury cruise lines. From ocean voyages to river cruises and expedition adventures, Emperia curates exceptional cruise experiences with premium amenities, exclusive excursions, and personalized service.",
      features: [
        "Ocean & River Cruises",
        "Expedition & Adventure Cruises",
        "All-inclusive packages",
        "Shore excursions & guided tours",
        "Global cruise itineraries",
      ],
      note: "Sail the world in luxury with our handpicked cruise experiences.",
      image:
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=400&fit=crop",
      icon: Ship,
      color: "from-teal-400 to-cyan-500",
      cta: "Request a Quote",
    },
  ];

  return (
    <section
      id="featured-section"
      alpha-section-id="featured-section"
      className="relative bg-gradient-to-br from-white via-emerald-50/30 to-cyan-50/50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),\n
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-700 mb-3 sm:mb-4 px-2">
            Our Premium Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto px-2">
            Professional transportation solutions designed to elevate your
            experience worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-emerald-200/50 hover:shadow-3xl transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  crossOrigin="anonymous"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div
                    className={`bg-gradient-to-r ${service.color} text-white p-2 sm:p-3 rounded-xl shadow-lg`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {service.name}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-sm">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 sm:mb-3">
                    Services Include:
                  </h4>
                  <ul className="space-y-2 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-slate-700"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 sm:mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-4">
                  <p className="text-slate-700 text-sm sm:text-sm leading-relaxed">
                    {service.note}
                  </p>
                </div>

                <button
                  className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold py-3 sm:py-3 px-4 sm:px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base mt-auto"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <span>{service.cta}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-emerald-200">
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3 sm:mb-4">
              The Emperia Difference
            </h3>
            <p className="text-slate-700 mb-6 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              With Emperia, your travel experience becomes more than just
              transportation — it becomes a journey defined by reliability,
              sophistication, and care across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base inline-block text-center w-full sm:w-auto"
              >
                Request a Quote
              </a>
              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="bg-white/80 backdrop-blur-sm border-2 border-emerald-300 hover:border-emerald-400 text-emerald-600 hover:text-emerald-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}