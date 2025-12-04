"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Shield, Clock, Star, Plane, MapPin } from "lucide-react";
import { useState } from "react";

export default function CategoryDealsSection() {
  const [activeCategory, setActiveCategory] = useState("charter");

  const categories = [
    { id: "charter", label: "Charter Services", icon: Plane },
    { id: "corporate", label: "Corporate", icon: Shield },
    { id: "shuttle", label: "Shuttle Services", icon: Users },
    { id: "private", label: "Private Car", icon: Star },
  ];

  const categoryServices = {
    charter: [
      {
        id: 1,
        title: "Basic Charter",
        teaser:
          "Premium charter services for every occasion with personalized service and unwavering commitment to safety",
        image:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
        features: [
          "All group sizes",
          "Event planning",
          "Professional drivers",
          "Modern fleet",
          "Flexible routes",
          "Safety certified",
        ],
        ctaLabel: "Request Charter Quote",
      },
      {
        id: 2,
        title: "Airport Transportation",
        teaser:
          "Reliable airport charter services with luxury motorcoaches, minibuses, and sprinter vans for all group sizes",
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
        features: [
          "12-50+ passengers",
          "Hotel pickups",
          "Crew transfers",
          "Corporate shuttles",
          "Private jet service",
          "Real-time monitoring",
        ],
        ctaLabel: "Book Airport Transfer",
      },
      {
        id: 3,
        title: "Church & Faith Groups",
        teaser:
          "Trusted transportation for mission trips, youth camps, and church outings with comfort and security",
        image:
          "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=400&fit=crop",
        features: [
          "Mission trips",
          "Youth transport",
          "Event transfers",
          "Church outings",
          "Conferences",
          "Community events",
        ],
        ctaLabel: "Get Faith Group Quote",
      },
      {
        id: 4,
        title: "Colleges & Universities",
        teaser:
          "Safe, efficient transportation for students, athletes, faculty, and fans with campus shuttle programs",
        image:
          "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764549938389-ynselmt34v.jpg",
        features: [
          "Campus shuttles",
          "Athletic travel",
          "Band transport",
          "Academic events",
          "Conference transfers",
          "Fan transportation",
        ],
        ctaLabel: "Request Campus Quote",
      },
    ],
    corporate: [
      {
        id: 1,
        title: "Corporate Events",
        teaser:
          "Premium corporate ground transportation with customized charter packages for business needs",
        image:
          "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
        features: [
          "Convention shuttles",
          "Executive transfers",
          "Mobile meetings",
          "Campus shuttles",
          "Team building",
          "VIP transport",
        ],
        ctaLabel: "Get Corporate Quote",
      },
      {
        id: 2,
        title: "Military Transport",
        teaser:
          "DOD-certified transportation with secure, reliable service for military personnel and operations",
        image:
          "https://images.unsplash.com/photo-1541544181051-e46607bc22a4?w=600&h=400&fit=crop",
        features: [
          "DOD certified",
          "Secure transport",
          "Relocations",
          "Training transfers",
          "Airport commutes",
          "All branches",
        ],
        ctaLabel: "Contact for Military",
      },
    ],
    shuttle: [
      {
        id: 1,
        title: "Corporate Shuttles",
        teaser:
          "Safe, seamless shuttle services with flexible routes for employees, students, and visitors",
        image:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
        features: [
          "Last-mile transit",
          "Campus routes",
          "Parking shuttles",
          "Wi-Fi equipped",
          "Leather seating",
          "Onboard restrooms",
        ],
        ctaLabel: "Request Shuttle Quote",
      },
      {
        id: 2,
        title: "Event Shuttles",
        teaser:
          "Group shuttles to conventions, venues, and special events with professional service",
        image:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
        features: [
          "Convention centers",
          "Venue transfers",
          "Private tours",
          "Team excursions",
          "Mobile meetings",
          "Flexible scheduling",
        ],
        ctaLabel: "Book Event Shuttle",
      },
    ],
    private: [
      {
        id: 1,
        title: "Executive Car Service",
        teaser:
          "Luxury sedans and SUVs with professional chauffeurs for business and personal travel",
        image:
          "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
        features: [
          "Point-to-point",
          "Business travel",
          "Event service",
          "Airport transfers",
          "Date night",
          "Worldwide service",
        ],
        ctaLabel: "Book Private Car",
      },
      {
        id: 2,
        title: "Customized Luxury",
        teaser:
          "Bespoke travel experiences with tailored itineraries for business or leisure",
        image:
          "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop",
        features: [
          "City tours",
          "Event access",
          "Private retreats",
          "Special occasions",
          "Multi-stop routes",
          "On-demand service",
        ],
        ctaLabel: "Create Experience",
      },
    ],
  };

  return (
    <section
      id="category-deals-section"
      alpha-section-id="category-deals-section"
      className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 py-12 sm:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(148, 163, 184, 0.2) 0%, transparent 50%)
            `,
              backgroundSize: "60px 60px, 60px 60px, 120px 120px, 120px 120px",
            }}
          ></div>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Services by Category
          </h2>
          <p className="text-lg sm:text-xl text-slate-700">
            Find the perfect transportation solution for your needs
          </p>
        </motion.div>

        <div className="mb-8 sm:mb-12">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:justify-center sm:gap-2 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-3 sm:px-6 sm:py-4 rounded-xl font-medium transition-all text-xs sm:text-base flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-1 sm:space-y-0 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg"
                    : "bg-white text-slate-700 hover:text-amber-600 hover:bg-amber-50 border border-slate-200"
                }`}
              >
                <category.icon className="w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-center leading-tight">
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categoryServices[
              activeCategory as keyof typeof categoryServices
            ].map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    crossOrigin="anonymous"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />

                  <div className="absolute top-3 right-3 z-20">
                    <div className="bg-white/90 backdrop-blur-sm border border-amber-300/50 rounded-lg px-2 py-1 shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-amber-500 fill-current" />
                        <span className="text-xs font-medium text-amber-600">
                          Premium
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 line-clamp-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 mb-3 line-clamp-2">
                    {service.teaser}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-slate-700 mb-1">
                      Features:
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-1">
                          <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                          <span className="text-xs text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    {service.features.length > 3 && (
                      <div className="text-xs text-amber-600 mt-1">
                        +{service.features.length - 3} more
                      </div>
                    )}
                  </div>

                  <a
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold py-2 px-3 rounded-lg transition-all shadow-lg hover:shadow-xl text-sm text-center"
                  >
                    {service.ctaLabel}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
