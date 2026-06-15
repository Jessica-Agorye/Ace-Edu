import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Services = ({ preview = false }) => {
  const [activeService, setActiveService] = useState("security");
  const [showMore, setShowMore] = useState(false);

  const servicesData = [
    {
      service: "security",
      image: "/images/travel1.jpg",
      title: "Security",
      description:
        "We prioritize your safety throughout every journey, ensuring secure and seamless global experiences wherever you go.",
      more: "Our safety network includes verified partners, real-time travel monitoring, and emergency support in multiple countries.",
    },
    {
      service: "integrity",
      image: "/images/travel2.jpg",
      title: "Integrity",
      description:
        "We operate with transparency, trust, and professionalism to provide reliable international opportunities and services.",
      more: "Every process is handled with honesty, clear communication, and ethical global standards across all services.",
    },
    {
      service: "results",
      image: "/images/travel3.jpg",
      title: "Results",
      description:
        "From study opportunities to unforgettable travel experiences, we focus on delivering impactful and life-changing outcomes.",
      more: "We ensure successful applications, visa approvals, and real-world outcomes that help you achieve your goals.",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Study Abroad",
      slug: "study-abroad",
      image: "/images/travel1.jpg",
      description:
        "Get expert support with university admissions, applications, and international student opportunities.",
    },
    {
      id: 2,
      title: "Visa Assistance",
      slug: "visa-assistance",
      image: "/images/travel2.jpg",
      description:
        "Professional guidance to help you prepare and submit successful visa applications.",
    },
    {
      id: 3,
      title: "Tour Packages",
      slug: "tour-packages",
      image: "/images/travel3.jpg",
      description:
        "Discover exciting local and international destinations through curated travel experiences.",
    },
    {
      id: 4,
      title: "Flight Reservations",
      slug: "flight-reservations",
      image: "/images/travel1.jpg",
      description:
        "Find convenient and affordable flight options for business, study, or leisure travel.",
    },
    {
      id: 5,
      title: "Hotel Booking",
      slug: "hotel-booking",
      image: "/images/travel2.jpg",
      description:
        "Access quality accommodations that suit your comfort, schedule, and budget.",
    },
    {
      id: 6,
      title: "Travel Consultation",
      slug: "travel-consultation",
      image: "/images/travel3.jpg",
      description:
        "Receive personalized travel advice and planning support from experienced consultants.",
    },
  ];
  const activeServiceData = servicesData.find(
    (service) => service.service === activeService,
  );

  return (
    <>
      <section className="py-24 px-5 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-amber-500 font-semibold uppercase tracking-widest">
              Our Services
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Services Designed For Every Journey
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              From study opportunities abroad to visa processing and vacation
              planning, we provide comprehensive travel solutions tailored to
              your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-amber-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>

                    <span className="text-amber-500 text-2xl">↗</span>
                  </div>

                  <p className="mt-4 text-gray-600 leading-7">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
              unforgettable experiences to help you confidently explore the
              world.
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

              <div>
                {/* Decorative Dots */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-300 rounded-full"></div>
                <div className="absolute left-20 top-[60%] w-4 h-4 bg-amber-300 rounded-full"></div>
                <div className="absolute left-5 top-[70%] w-2 h-2 bg-amber-300 rounded-full"></div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
