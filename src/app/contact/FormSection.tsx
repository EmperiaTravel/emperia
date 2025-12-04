"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  Ship,
  Plane,
  Car,
  Briefcase,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { projectId } from "@/system-settings";

export default function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Flights",
    destination: "",
    travelDates: "",
    passengers: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("forms").insert({
        projectId: projectId,
        title: "general-travel-inquiry",
        submission: formData,
      });

      if (error) {
        console.error("Error submitting form:", error);
      } else {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "Flights",
          destination: "",
          travelDates: "",
          passengers: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const serviceTypes = [
    "Flights",
    "Cruises",
    "Ground Transportation",
    "Hotel Booking",
    "Full Vacation Package",
    "Other",
  ];

  return (
    <section
      id="form-section"
      alpha-section-id="form-section"
      className="relative bg-slate-50 py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-16">
          {/* Left side - Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Start Your Booking
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Complete the form with your travel details, and our agents will provide you with options and quotes within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plane className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Flights</h3>
                  <p className="text-slate-600 text-sm">Domestic and international flight bookings.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Ship className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Cruises</h3>
                  <p className="text-slate-600 text-sm">Luxury cruises and river boat expeditions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Transportation</h3>
                  <p className="text-slate-600 text-sm">Private transfers, car rentals, and rail.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Corporate</h3>
                  <p className="text-slate-600 text-sm">Business travel management services.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 p-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <span className="mr-2">Travel Inquiry Form</span>
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Inquiry Received
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-md mx-auto">
                      Thank you for contacting Emperia Travel. One of our agents will review your request and get back to you shortly with more information.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="serviceType"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Service Interest
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        >
                          {serviceTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div>
                        <label
                          htmlFor="destination"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Destination / Route
                        </label>
                        <input
                          type="text"
                          id="destination"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="e.g. London to Paris, or Caribbean"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="travelDates"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Approximate Dates
                        </label>
                        <input
                          type="text"
                          id="travelDates"
                          name="travelDates"
                          value={formData.travelDates}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="e.g. June 2024"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="passengers"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Number of Passengers
                      </label>
                      <input
                        type="text"
                        id="passengers"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="e.g. 2 Adults, 1 Child"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Additional Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="Please provide any specific requirements, preferred airlines/cruise lines, budget constraints, or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}