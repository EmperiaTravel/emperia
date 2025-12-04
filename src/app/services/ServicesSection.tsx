"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Plane,
  Users,
  Building,
  Shield,
  Trophy,
  Globe,
  Bus,
  Star,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Bus,
      title: "Basic Charter",
      description:
        "Premium charter services for every occasion. No matter the group size or event type, our team delivers personalized service with an unwavering commitment to safety, comfort, and professionalism.",
      features: [
        "Flexible scheduling for single-day or multi-day trips",
        "Modern, luxury fleet accommodating 1 to 56+ passengers",
        "Professional, safety-certified drivers",
        "Customized routes and itineraries",
        "Complete logistics management",
      ],
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    },
    {
      icon: Plane,
      title: "Airport Transportation",
      description:
        "Reliable and efficient airport charter services. Our modern fleet — including luxury motorcoaches, minibuses, and sprinter vans — accommodates groups of all sizes, from 12 passengers to large corporate delegations.",
      features: [
        "Daily crew transfers for pilots and flight attendants",
        "Corporate and employee shuttles",
        "Travel groups and vacation tours",
        "Family reunions and special events",
        "Hotel guest airport transfers",
        "Private jet and FBO ground transportation",
      ],
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
    {
      icon: Users,
      title: "Church & Faith Group Travel",
      description:
        "Trusted transportation for faith communities. Our experienced team ensures every journey — whether it's a local outing, mission trip, or multi-day retreat — is comfortable, secure, and worry-free.",
      features: [
        "Mission and outreach trips",
        "Youth and camp transportation",
        "Airport and event transfers",
        "Church outings and conferences",
        "Community and fellowship events",
      ],
      image:
        "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&q=80",
    },
    {
      icon: Trophy,
      title: "Colleges & Universities",
      description:
        "Keeping students, athletes, faculty, and fans on the move with safe, efficient, and professional transportation. From daily campus shuttle programs to sports and academic travel.",
      features: [
        "University and campus loop shuttle programs",
        "Athletic team and club travel",
        "Band, booster, and fan transportation",
        "Academic event and conference transfers",
      ],
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764545058500-puo8lw1br3.jpg",
    },
    {
      icon: Building,
      title: "Corporate",
      description:
        "Premium corporate ground transportation designed for efficiency, comfort, and professionalism. Our travel planners work closely with business owners, HR teams, and event coordinators.",
      features: [
        "Convention and event group shuttles",
        "Executive airport transfers",
        "Mobile meeting spaces for business travelers",
        "Corporate campus and parking lot shuttles",
        "Team-building excursions and retreats",
        "Private sightseeing or client tours",
        "Employee and VIP transportation",
        "Last-mile connector services",
      ],
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      icon: Shield,
      title: "Military",
      description:
        "DOD-certified transportation for the U.S. military. We understand the importance of precision, confidentiality, and reliability in every mission. Serving all branches of the U.S. Armed Forces.",
      features: [
        "Secure, DOD-certified transportation",
        "Service member relocations",
        "Training transfers",
        "Airport or rail commutes",
        "Strict adherence to Department of Defense standards",
      ],
      image:
        "https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-image/1764547651684-yewwisizzy.png",
    },
    {
      icon: Trophy,
      title: "Sports",
      description:
        "First-class transportation for professional and collegiate sports teams. We understand that timing, comfort, and privacy are critical to performance.",
      features: [
        "Spacious, luxury interiors with premium seating",
        "Professional, discreet, and courteous drivers",
        "On-board amenities including Wi-Fi, power outlets, A/V systems",
        "Large screens for team meetings",
      ],
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    },
    {
      icon: Globe,
      title: "Tours & Travel Agents",
      description:
        "Bespoke ground transportation for travel agents, tour operators, and event planners. Our expert travel coordinators handle all logistics — from fleet selection to route management.",
      features: [
        "Custom group and sightseeing tours",
        "Seamless airport, hotel, and rail transfers",
        "Private executive meeting transfers",
        "Event and venue shuttles",
        "Corporate retreat and incentive travel logistics",
        "Nationwide business travel coordination",
        "Campus and resort shuttle programs",
        "Last-mile and local travel solutions",
      ],
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    },
  ];

  const handleRequestQuote = () => {
    window.location.href = "/contact";
  };

  return (
    <section
      id="services-section"
      alpha-section-id="services-section"
      className="relative bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Charter Services
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive transportation solutions tailored to your needs
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div
                  className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    crossOrigin="anonymous"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div
                  className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleRequestQuote}
                    className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center space-x-2 w-fit"
                  >
                    <Star className="w-5 h-5" />
                    <span>Request a Quote</span>
                  </button>
                </div>
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
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            At Emperia, we move business forward — safely, smoothly, and in
            style. Contact us today to discuss your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleRequestQuote}
              className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <Plane className="w-5 h-5" />
              <span>Request a Quote</span>
            </button>
            <a
              href="mailto:Bookings@emperiatravel.com"
              rel="noopener noreferrer"
              target="_blank"
              className="text-amber-600 hover:text-amber-700 font-semibold flex items-center space-x-2"
            >
              <span>Email: Bookings@emperiatravel.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
