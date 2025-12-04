"use client";

import { Menu, X, Plane, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigation = (sectionId: string) => {
    // If we're on the contact page and trying to navigate to contact section
    if (pathname === "/contact" && sectionId === "contact-section") {
      // We're already on the contact page, so just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
      return;
    }

    // Check if we're on the home page
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If trying to navigate to contact section from another page
      if (sectionId === "contact-section") {
        window.location.href = "/contact";
      } else {
        // Navigate to home page with hash
        window.location.href = `/#${sectionId}`;
      }
    }
    setIsMenuOpen(false);
  };

  const navigateHome = () => {
    window.location.href = "/";
  };

  const navItems = [
    { id: "hero-section", label: "Home" },
    { id: "deals-section", label: "Deals", isDealsPage: true },
    {
      id: "destinations-section",
      label: "Destinations",
      isDestinationsPage: true,
    },
    { id: "tools-section", label: "Services", isServicesPage: true },
    { id: "contact-section", label: "Contact", isContactPage: true },
  ];

  return (
    <header
      id="header"
      alpha-section-id="header"
      className="bg-white/95 backdrop-blur-md border-b border-amber-200/50 shadow-sm sticky top-0 z-50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Left side - Menu button (mobile) */}
          <div className="flex items-center lg:hidden">
            <button
              className="p-3 -ml-3 rounded-lg hover:bg-amber-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-amber-500" />
              ) : (
                <Menu className="h-6 w-6 text-amber-500" />
              )}
            </button>
          </div>

          {/* Center - Logo and Brand Name */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div
              className="flex items-center space-x-3 sm:space-x-4 cursor-pointer group"
              onClick={navigateHome}
            >
              {/* Updated Logo Image - No circle wrapper */}
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
                <Image
                  src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1760984751101-8dc2blyz0ww.png"
                  alt="Emperia Travels Logo"
                  fill
                  crossOrigin="anonymous"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-600 bg-clip-text text-transparent leading-none tracking-tight group-hover:from-teal-600 group-hover:via-cyan-500 group-hover:to-teal-700 transition-all duration-300">
                  Emperia Travel
                </h1>
                <div className="flex items-center space-x-1 mt-0.5">
                  <div className="flex space-x-0.5">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-current" />
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-current" />
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-current" />
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-current" />
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={
                  item.isContactPage
                    ? "/contact"
                    : item.isDestinationsPage
                    ? "/destinations"
                    : item.isDealsPage
                      ? "/deals"
                        : item.isServicesPage
                          ? "/services"
                          : `#${item.id}`
                }
                onClick={(e) => {
                  if (item.isContactPage) {
                    // Let the href handle navigation to /contact
                    return;
                  }
                  e.preventDefault();
                  if (item.isServicesPage) {
                    window.location.href = "/services";
                  } else if (item.isDestinationsPage) {
                    window.location.href = "/destinations";
                  } else if (item.isDealsPage) {
                    window.location.href = "/deals";
                  } else {
                    handleNavigation(item.id);
                  }
                }}
                className={`text-slate-600 hover:text-amber-500 font-medium text-sm transition-colors relative group py-2 ${
                  item.isContactPage && pathname === "/contact"
                    ? "text-amber-500"
                    : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-amber-400 transition-all ${
                    item.isContactPage && pathname === "/contact"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Right side - CTA */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => {
                window.location.href = "/contact";
                setIsMenuOpen(false);
              }}
              className="bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <Plane className="w-4 h-4" />
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-amber-200/50 py-4 bg-white/95 backdrop-blur-md animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={
                    item.isDealsPage
                        ? "/deals"
                        : item.isDestinationsPage
                          ? "/destinations"
                          : item.isServicesPage
                            ? "/services"
                            : item.isContactPage
                              ? "/contact"
                            : `#${item.id}`
                  }
                  onClick={(e) => {
                    if (item.isContactPage) {
                      // Let the href handle navigation to /contact
                      setIsMenuOpen(false);
                      return;
                    }
                    e.preventDefault();
                    if (item.isServicesPage) {
                      window.location.href = "/services";
                    } else if (item.isDestinationsPage) {
                      window.location.href = "/destinations";
                    } else if (item.isDealsPage) {
                      window.location.href = "/deals";
                    } else {
                      handleNavigation(item.id);
                    }
                  }}
                  className={`text-slate-600 hover:text-amber-500 font-medium text-base px-4 py-3 transition-colors flex items-center space-x-3 hover:bg-amber-50/50 rounded-lg mx-2 ${
                    item.isContactPage && pathname === "/contact"
                      ? "text-amber-500 bg-amber-50/50"
                      : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 ${
                      item.isContactPage && pathname === "/contact"
                        ? "bg-amber-500"
                        : "bg-amber-400"
                    } rounded-full`}
                  ></div>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}