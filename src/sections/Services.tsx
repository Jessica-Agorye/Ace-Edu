import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const Services = ({ preview = false }) => {
  const [activeService, setActiveService] = useState("security");
  const [showMore, setShowMore] = useState(false);

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
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Experiences Built On Trust & Excellence
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            We combine global opportunities, personalized support, and
            unforgettable experiences to help you confidently explore the world.
          </p>

          {/* ONLY BUTTON IN PREVIEW MODE */}
          {preview && (
            <Link
              to="/services"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-amber-500 text-white font-semibold"
            >
              Explore all services
            </Link>
          )}
        </div>

        {/* EVERYTHING BELOW IS HIDDEN IN PREVIEW MODE */}
        {!preview && (
          <>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-14">
              {servicesData.map((service) => (
                <button
                  key={service.service}
                  onClick={() => {
                    setActiveService(service.service);
                    setShowMore(false);
                  }}
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
                  className="grid lg:grid-cols-2 gap-14 items-start mt-16"
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl  font-bold text-gray-900 leading-tight">
                      Delivering Reliable Global Experiences
                    </h3>

                    <p className="mt-6 text-gray-600 text-lg leading-8">
                      {activeServiceData.description}
                    </p>

                    <AnimatePresence>
                      {showMore && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-4 text-gray-600 text-lg leading-8 overflow-hidden"
                        >
                          {activeServiceData.more}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="mt-10 px-8 py-3 rounded-full bg-amber-500 text-white font-semibold"
                    >
                      {showMore ? "Show Less" : "Learn More"}
                    </button>
                  </div>

                  {/* RIGHT */}
                  <div className="relative flex justify-center">
                    <div className="absolute w-[70%] h-[70%] bg-amber-200/30 blur-3xl rounded-full"></div>

                    <img
                      src={activeServiceData.image}
                      alt={activeServiceData.title}
                      className="relative z-10 w-full md:w-[95%] h-[350px] md:h-[550px] object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
