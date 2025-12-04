"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award, Clock } from "lucide-react";

export default function MissionSection() {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Professional, safety-certified drivers and meticulously maintained fleet"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Tailored solutions for every group size and event type"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to exceeding expectations on every journey"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Punctual, efficient service from planning to arrival"
    }
  ];

  return (
    <section
      id="mission-section"
      alpha-section-id="mission-section"
      className="relative bg-white py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Redefining Group Transportation
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            At Emperia, we redefine group transportation with a commitment to excellence, safety, and personalized service. Whether for corporate events, sports teams, military operations, tours, or private charters, our mission is to deliver seamless travel experiences that exceed expectations. With a modern, meticulously maintained fleet and a team of professional, safety-certified drivers, Emperia ensures every journey is efficient, comfortable, and stress-free. From planning to arrival, we handle every detail with precision — because at Emperia, your passengers' comfort and safety always come first.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}