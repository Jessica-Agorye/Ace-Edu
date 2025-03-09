import { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  // Set the default active service to 'security'
  const [activeService, setActiveService] = useState<string>("security");

  const servicesData = [
    {
      service: "security",
      image: "/images/travel1.jpg",
      title: "Security",
      description:
        "Over 55 years of experience. We have an unparalleled track record of keeping our participants safe. Whether you’re exploring one of our nation’s great cities or headed off the beaten path somewhere around the world, we’ve got your back. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      service: "integrity",
      image: "/images/travel2.jpg",
      title: "Integrity",
      description:
        "Over 55 years of experience. We have an unparalleled track record of keeping our participants safe. Whether you’re exploring one of our nation’s great cities or headed off the beaten path somewhere around the world, we’ve got your back. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      service: "results",
      image: "/images/travel1.jpg",
      title: "Results",
      description:
        "Over 55 years of experience. We have an unparalleled track record of keeping our participants safe. Whether you’re exploring one of our nation’s great cities or headed off the beaten path somewhere around the world, we’ve got your back. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
  ];

  // Handle button click to toggle between services
  const handleClick = (service: string) => {
    setActiveService(service); // Directly set the active service to the clicked one
  };

  // Find the active service data based on the clicked service
  const activeServiceData = servicesData.find(
    (service) => service.service === activeService
  );

  return (
    <section className="p-8 mt-16 lg:mx-8">
      {/* Adjusted text size for mobile, tablet, and desktop */}

      <motion.p
        className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-left font-semibold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {" "}
        <p>Why Consult Ace?</p>
      </motion.p>

      {/* Button Container: Aligned to the left */}
      <div className="flex flex-wrap gap-4 mt-16">
        {servicesData.map((service) => (
          <button
            key={service.service}
            onClick={() => handleClick(service.service)}
            className={`px-6 py-2 text-white rounded-md focus:outline-none transition-all duration-300 ${
              activeService === service.service
                ? "bg-gray-500" // Active button has gray color
                : service.service === "security"
                ? "bg-blue-500 hover:bg-blue-600" // Security button color
                : service.service === "integrity"
                ? "bg-green-500 hover:bg-green-600" // Integrity button color
                : "bg-red-500 hover:bg-red-600" // Results button color
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-8 space-y-8">
        {activeServiceData && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <div className="p-6 bg-white rounded-lg shadow-xl">
                {/* Responsive text size for title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  {activeServiceData.title}
                </h2>
                {/* Responsive text size for description */}
                <p className="text-sm sm:text-base md:text-lg leading-8 mt-4">
                  {activeServiceData.description}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={activeServiceData.image}
                alt={activeServiceData.title}
                className="w-full h-[60%] object-cover rounded-r-lg shadow-lg"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
