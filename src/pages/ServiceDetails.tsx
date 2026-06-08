import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion } from "framer-motion";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const service = servicesData.find((s) => s.service === serviceId);

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <Link to="/services" className="text-amber-500">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24 px-5 md:px-10 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold">{service.title}</h1>

          <p className="mt-6 text-gray-600">{service.description}</p>

          <p className="mt-4 text-gray-600">{service.more}</p>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">What we offer</h3>

            <ul className="space-y-3">
              {service.points.map((point, i) => (
                <li key={i} className="flex gap-2 text-gray-700">
                  <span className="text-amber-500">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/services"
            className="inline-block mt-10 px-6 py-3 bg-amber-500 text-white rounded-full"
          >
            Back to Services
          </Link>
        </motion.div>

        <div className="relative">
          <div className="absolute w-[70%] h-[70%] bg-amber-200/30 blur-3xl rounded-full" />

          <img
            src={service.image}
            alt={service.title}
            className="relative z-10 w-full h-[400px] md:h-[600px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
