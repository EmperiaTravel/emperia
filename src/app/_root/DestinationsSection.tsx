"use client";

import Image from 'next/image';
import { ChevronRight, Star, Clock, MapPin, Plane, Globe, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DestinationsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('featured');

  const featuredDestinations = [
    {
      id: 1,
      name: 'Maldives Overwater Paradise',
      image: 'https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758829840781-c485o42hnww.jpg',
      tag: 'Most Popular',
      tagColor: 'bg-amber-400/20 border-amber-400/40 text-amber-600',
      price: '4,999',
      duration: '7 Days',
      description: 'Overwater villas, private butler, world-class spa',
      region: 'Indian Ocean Paradise',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Santorini Tropical Luxury',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
      tag: 'Romantic Paradise',
      tagColor: 'bg-pink-400/20 border-pink-400/40 text-pink-600',
      price: '3,299',
      duration: '5 Days',
      description: 'Cliffside infinity pools, private terraces, sunset dining',
      region: 'Greek Islands',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Bali Tropical Retreat',
      image: 'https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758829840781-chppqvlapp5.jpg',
      tag: 'Cultural Paradise',
      tagColor: 'bg-emerald-400/20 border-emerald-400/40 text-emerald-600',
      price: '2,799',
      duration: '6 Days',
      description: 'Jungle villas, temple tours, luxury spa wellness',
      region: 'Indonesian Paradise',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Seychelles Private Paradise',
      image: 'https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758829840781-vjwi1udo3gp.jpg',
      tag: 'Exclusive Paradise',
      tagColor: 'bg-cyan-400/20 border-cyan-400/40 text-cyan-600',
      price: '5,499',
      duration: '8 Days',
      description: 'Private island villas, helicopter transfers, yacht excursions',
      region: 'Indian Ocean Luxury',
      rating: 5.0
    },
    {
      id: 5,
      name: 'Caribbean Tropical Dreams',
      image: 'https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758829840781-l4vlirp02a.jpg',
      tag: 'Adventure Paradise',
      tagColor: 'bg-teal-400/20 border-teal-400/40 text-teal-600',
      price: '3,799',
      duration: '7 Days',
      description: 'Beachfront suites, water sports, private beach access',
      region: 'Caribbean Paradise',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Dubai Tropical Luxury',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
      tag: 'Modern Paradise',
      tagColor: 'bg-orange-400/20 border-orange-400/40 text-orange-600',
      price: '4,299',
      duration: '5 Days',
      description: 'Luxury beach resorts, desert safaris, city tours',
      region: 'UAE Paradise',
      rating: 4.6
    }
  ];

  const regionDestinations = [
    {
      id: 1,
      name: 'Indian Ocean Paradise',
      destinations: ['Maldives', 'Seychelles', 'Mauritius', 'Sri Lanka'],
      image: 'https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758829840781-c485o42hnww.jpg',
      description: 'Crystal clear waters, overwater villas, pristine coral reefs',
      price: 'From $3,999',
      highlight: 'Overwater Luxury'
    },
    {
      id: 2,
      name: 'Caribbean Paradise',
      destinations: ['Barbados', 'St. Lucia', 'Turks & Caicos', 'Bahamas'],
      image: 'https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758829840781-l4vlirp02a.jpg',
      description: 'White sand beaches, turquoise waters, vibrant culture',
      price: 'From $2,799',
      highlight: 'Beach Paradise'
    },
    {
      id: 3,
      name: 'Southeast Asian Paradise',
      destinations: ['Bali', 'Phuket', 'Langkawi', 'Boracay'],
      image: 'https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758829840781-chppqvlapp5.jpg',
      description: 'Tropical jungles, ancient temples, luxury beach resorts',
      price: 'From $2,299',
      highlight: 'Cultural Paradise'
    },
    {
      id: 4,
      name: 'Pacific Paradise',
      destinations: ['Fiji', 'Bora Bora', 'Cook Islands', 'Tahiti'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Remote islands, volcanic landscapes, exclusive resorts',
      price: 'From $4,599',
      highlight: 'Remote Luxury'
    },
    {
      id: 5,
      name: 'Mediterranean Paradise',
      destinations: ['Santorini', 'Mykonos', 'Ibiza', 'Corsica'],
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
      description: 'Historic charm, azure seas, luxury coastal resorts',
      price: 'From $3,199',
      highlight: 'Historic Luxury'
    },
    {
      id: 6,
      name: 'Arabian Paradise',
      destinations: ['Dubai', 'Abu Dhabi', 'Oman', 'Qatar'],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
      description: 'Modern luxury, desert adventures, world-class hospitality',
      price: 'From $3,799',
      highlight: 'Modern Paradise'
    }
  ];

  const experienceDestinations = [
    {
      id: 1,
      name: 'Overwater Villa Experience',
      destinations: ['Maldives', 'Bora Bora', 'Seychelles'],
      image: 'https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758829840781-c485o42hnww.jpg',
      description: 'Wake up above crystal waters in luxury overwater accommodations',
      price: 'From $4,999',
      highlight: 'Water Villa Luxury',
      features: ['Private deck', 'Glass floor panels', 'Direct ocean access', 'Butler service']
    },
    {
      id: 2,
      name: 'Private Island Escape',
      destinations: ['Seychelles', 'Caribbean', 'Fiji'],
      image: 'https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758829840781-vjwi1udo3gp.jpg',
      description: 'Exclusive access to pristine private islands with personalized service',
      price: 'From $6,999',
      highlight: 'Ultimate Privacy',
      features: ['Helicopter transfers', 'Private beaches', 'Dedicated staff', 'Custom experiences']
    },
    {
      id: 3,
      name: 'Luxury Spa Wellness',
      destinations: ['Bali', 'Thailand', 'Maldives'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      description: 'Rejuvenate with world-class spa treatments in tropical settings',
      price: 'From $3,499',
      highlight: 'Wellness Paradise',
      features: ['Overwater spas', 'Traditional treatments', 'Yoga pavilions', 'Wellness cuisine']
    },
    {
      id: 4,
      name: 'Adventure & Luxury',
      destinations: ['Caribbean', 'Costa Rica', 'Hawaii'],
      image: 'https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1758829840781-l4vlirp02a.jpg',
      description: 'Combine thrilling adventures with luxury accommodations',
      price: 'From $3,999',
      highlight: 'Active Paradise',
      features: ['Water sports', 'Jungle excursions', 'Luxury lodges', 'Expert guides']
    },
    {
      id: 5,
      name: 'Culinary Paradise',
      destinations: ['Greece', 'Italy', 'Thailand'],
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      description: 'Indulge in world-class cuisine with beachfront dining experiences',
      price: 'From $4,299',
      highlight: 'Gourmet Paradise',
      features: ['Michelin dining', 'Cooking classes', 'Wine tastings', 'Private chefs']
    },
    {
      id: 6,
      name: 'Romantic Getaway',
      destinations: ['Santorini', 'Maldives', 'Bora Bora'],
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
      description: 'Perfect romantic escapes with sunset views and intimate settings',
      price: 'From $4,799',
      highlight: 'Romance Paradise',
      features: ['Sunset dinners', 'Couples spa', 'Private excursions', 'Champagne service']
    }
  ];

  const tabs = [
    { id: 'featured', label: 'Featured Paradise' },
    { id: 'regions', label: 'By Region' },
    { id: 'experiences', label: 'By Experience' }
  ];

  const getCurrentDestinations = () => {
    switch (activeTab) {
      case 'regions':
        return regionDestinations;
      case 'experiences':
        return experienceDestinations;
      default:
        return featuredDestinations;
    }
  };

  return (
    <section id="destinations-section" alpha-section-id="destinations-section" className="relative bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 py-12 sm:py-20 overflow-hidden">
      {/* Tropical light background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(251, 191, 36, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px, 120px 120px'
          }}></div>
        </div>

        {/* Floating tropical elements */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={i}
              cx={100 + (i % 5) * 250}
              cy={100 + Math.floor(i / 5) * 200}
              r="5"
              fill={i % 3 === 0 ? "rgba(251, 191, 36, 0.4)" : i % 3 === 1 ? "rgba(16, 185, 129, 0.3)" : "rgba(59, 130, 246, 0.3)"}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-4">Tropical Paradise Destinations</h2>
          <p className="text-lg sm:text-xl text-slate-700 mb-6 sm:mb-8">Discover the world's most luxurious tropical escapes</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-emerald-200/50 w-full max-w-2xl overflow-x-auto">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[100px] px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all text-xs sm:text-sm ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  <span className="block truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {getCurrentDestinations().map((destination, index) => (
              <motion.div
                key={destination.id}
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-emerald-200/50 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => setHoveredCard(destination.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Rating badge for featured, highlight badge for others */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                  {activeTab === 'featured' ? (
                    <div className="bg-white/90 backdrop-blur-sm border border-amber-300/50 rounded-lg px-2 py-1 shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-current" />
                        { 'rating' in destination && (
  <div className="flex items-center space-x-1">
    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-current" />
    <span className="text-xs sm:text-sm font-medium text-amber-600">{destination.rating}</span>
  </div>
)}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-emerald-400/20 border border-emerald-400/40 text-emerald-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {destination.highlight}
                    </div>
                  )}
                </div>

                {/* Category tag */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                  {activeTab === 'featured' ? (
                    <div className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${destination.tagColor}`}>
                      {destination.tag}
                    </div>
                  ) : (
                    <div className="bg-amber-400/20 border border-amber-400/40 text-amber-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {activeTab === 'regions' ? 'Region' : 'Experience'}
                    </div>
                  )}
                </div>
                
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    crossOrigin="anonymous"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  
                  {/* Light tropical gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-4 sm:p-6">
                  {/* Region/Destinations info */}
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      {activeTab === 'featured' 
                        ? destination.region 
                        : Array.isArray(destination.destinations) 
                          ? destination.destinations.slice(0, 2).join(', ') + (destination.destinations.length > 2 ? '...' : '')
                          : destination.destinations
                      }
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-700 mb-2 line-clamp-2">{destination.name}</h3>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-700 mb-3 line-clamp-2">{destination.description}</p>

                  {/* Features for experience tab */}
                  {activeTab === 'experiences' && destination.features && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {destination.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-emerald-400/20 text-emerald-600 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price and duration */}
                  <div className="flex items-center justify-between">
                    {activeTab === 'featured' ? (
                      <>
                        <span className="text-xs sm:text-sm text-slate-700">{destination.duration}</span>
                        <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">${destination.price}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-xs sm:text-sm text-slate-700">
                          {Array.isArray(destination.destinations) ? `${destination.destinations.length} Destinations` : 'Multiple Options'}
                        </span>
                        <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">{destination.price}</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all">
            <Plane className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
            Explore All Paradise Destinations
          </button>
        </motion.div>
      </div>
    </section>
  );
}