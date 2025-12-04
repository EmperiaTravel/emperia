"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users, MapPin, Plane, Shield, Clock } from "lucide-react";

export default function FeaturedDealsSection() {
  const services = [
    {
      id: 1,
      title: "Charter Services",
      teaser:
        "Safe, reliable, and luxurious transportation for local or long-distance tours, corporate events, and special occasions",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      features: [
        "Basic Charter",
        "Airport Transportation",
        "Church & Faith Groups",
        "Colleges & Universities",
        "Corporate Events",
        "Military Transport",
      ],
      highlights: [
        "Modern fleet",
        "Professional drivers",
        "Flexible scheduling",
      ],
      ctaLabel: "Request Charter Quote",
    },
    {
      id: 2,
      title: "Corporate Transportation",
      teaser:
        "Premium ground transportation designed for efficiency, comfort, and professionalism for business needs",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
      features: [
        "Convention shuttles",
        "Executive transfers",
        "Mobile meetings",
        "Campus shuttles",
        "Team-building trips",
        "VIP transport",
      ],
      highlights: ["Luxury vehicles", "DOD-certified", "Complete logistics"],
      ctaLabel: "Get Corporate Quote",
    },
    {
      id: 3,
      title: "Private Car Service",
      teaser:
        "Travel in style with professional chauffeurs handling traffic while you focus on business, leisure, or special occasions",
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764544003285-01se6knzguwz.jpg",
      features: [
        "Point-to-point service",
        "Business travel",
        "Event transportation",
        "Date night service",
        "Airport transfers",
        "Customized experiences",
      ],
      highlights: [
        "Luxury sedans & SUVs",
        "City-savvy drivers",
        "Worldwide service",
      ],
      ctaLabel: "Book Private Car",
    },
  ];

  return (
    <section
      id="featured-deals-section"
      alpha-section-id="featured-deals-section"
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
              backgroundSize: "80px 80px, 80px 80px, 160px 160px, 160px 160px",
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
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-slate-700">
            Premium transportation solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 hover:shadow-3xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  crossOrigin="anonymous"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />

                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm border border-amber-300/50 rounded-lg px-2 py-1 shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-amber-500 fill-current" />
                      <span className="text-sm font-medium text-amber-600">
                        Premium
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-700 mb-4">{service.teaser}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">
                    Services Include:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                        <span className="text-xs text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  {service.features.length > 4 && (
                    <div className="text-xs text-amber-600 mt-1">
                      +{service.features.length - 4} more services
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center">
                    <Shield className="w-4 h-4 text-amber-500 mr-1" />
                    Key Features:
                  </h4>
                  <div className="space-y-1">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                        <span className="text-xs text-slate-700">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-center"
                >
                  {service.ctaLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}