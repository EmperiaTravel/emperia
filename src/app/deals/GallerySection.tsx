"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const fleetImages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      title: "Mercedes-Benz S-Class",
      capacity: "1-3 Passengers",
      description: "Ultimate luxury sedan with premium amenities",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&h=600&fit=crop",
      title: "BMW 7 Series",
      capacity: "1-3 Passengers",
      description: "Executive comfort with cutting-edge technology",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
      title: "Cadillac Escalade ESV",
      capacity: "1-6 Passengers",
      description: "Spacious luxury SUV for premium group travel",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
      title: "Range Rover",
      capacity: "1-6 Passengers",
      description: "Refined elegance meets powerful performance",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      title: "Mercedes Sprinter Van",
      capacity: "7-14 Passengers",
      description: "Luxury group transport with premium seating",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop",
      title: "Executive Mini Bus",
      capacity: "15-29 Passengers",
      description: "Comfortable mid-size group transportation",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      title: "Transit Bus",
      capacity: "30-52 Passengers",
      description: "Full-size buses for large group events",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
      title: "Luxury Motorcoach",
      capacity: "56 Passengers",
      description: "Premium long-distance travel with onboard amenities",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === fleetImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, fleetImages.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === 0 ? fleetImages.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === fleetImages.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="gallery-section"
      alpha-section-id="gallery-section"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-amber-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                x: [-5, 5, -5],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Fleet
          </h2>
          <p className="text-lg sm:text-xl text-slate-300">
            Luxury cars and premium buses for every occasion
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={fleetImages[currentIndex].image}
                  alt={fleetImages[currentIndex].title}
                  fill
                  crossOrigin="anonymous"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 text-sm font-medium">
                        {fleetImages[currentIndex].capacity}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {fleetImages[currentIndex].title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      {fleetImages[currentIndex].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-lg z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-lg z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex justify-center space-x-2 mt-6">
            {fleetImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-amber-400 scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {fleetImages.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all ${
                  index === currentIndex
                    ? "ring-2 ring-amber-400 scale-110"
                    : "opacity-70 hover:opacity-100"
                }`}
                whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  crossOrigin="anonymous"
                  className="object-cover"
                />
                {index !== currentIndex && (
                  <div className="absolute inset-0 bg-black/30"></div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white text-sm hover:bg-white/30 transition-all"
          >
            {isAutoPlaying ? "Pause Slideshow" : "Play Slideshow"}
          </button>
        </div>
      </div>
    </section>
  );
}