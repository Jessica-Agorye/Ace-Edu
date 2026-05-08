import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [activeService, setActiveService] = useState("security");

  const servicesData = [
    {
      service: "security",
      image: "/images/travel1.jpg",
      title: "Security",
      description:
        "We prioritize your safety throughout every journey, ensuring secure and seamless global experiences wherever you go.",
    },

    {
      service: "integrity",
      image: "/images/travel2.jpg",
      title: "Integrity",
      description:
        "We operate with transparency, trust, and professionalism to provide reliable international opportunities and services.",
    },

    {
      service: "results",
      image: "/images/travel3.jpg",
      title: "Results",
      description:
        "From study opportunities to unforgettable travel experiences, we focus on delivering impactful and life-changing outcomes.",
    },
  ];

  const activeServiceData = servicesData.find(
    (service) => service.service === activeService,
  );

  return (
    <section
      id="services"
      className="relative py-24 px-5 md:px-10 bg-[#f8fafc] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-20 w-72 h-72 bg-amber-200/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold mb-5">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Experiences Built On Trust & Excellence
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We combine global opportunities, personalized support, and
            unforgettable experiences to help you confidently explore the world.
          </p>
        </motion.div>

        {/* Service Buttons */}
        <div className="flex flex-wrap gap-4 mt-14">
          {servicesData.map((service) => (
            <button
              key={service.service}
              onClick={() => setActiveService(service.service)}
              className={`
                px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  activeService === service.service
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-amber-300 hover:text-amber-500"
                }
              `}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeServiceData && (
            <motion.div
              key={activeServiceData.service}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-14 items-center mt-16"
            >
              {/* LEFT CONTENT */}
              <div>
                <div className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-600 text-sm font-medium mb-6">
                  {activeServiceData.title}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Delivering Reliable Global Experiences
                </h3>

                <p className="mt-6 text-gray-600 text-lg leading-8">
                  {activeServiceData.description}
                </p>

                <button className="mt-10 px-8 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-400 transition duration-300 shadow-lg">
                  Learn More
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative flex justify-center">
                {/* Glow */}
                <div className="absolute w-[70%] h-[70%] bg-amber-200/30 blur-3xl rounded-full"></div>

                <img
                  src={activeServiceData.image}
                  alt={activeServiceData.title}
                  className="
                    relative z-10
                    w-full md:w-[95%]
                    h-[350px] md:h-[550px]
                    object-cover
                  "
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.5) 85%, transparent 100%)",
                    maskImage:
                      "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.5) 85%, transparent 100%)",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
