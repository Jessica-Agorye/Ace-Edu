import { useParams } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import subServicesData from "../data/servicesData";

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = subServicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Service not found</h1>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HERO CONTENT */}
        <div className="max-w-4xl">
          <span className="inline-block text-amber-500 font-semibold uppercase tracking-[0.2em]">
            Our Services
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {service.title}
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-3xl">
            {service.description1}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="px-8 py-4 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition">
              Get Started
            </button>

            <button className="px-8 py-4 border border-gray-300 rounded-full font-semibold text-gray-800 hover:border-amber-500 hover:text-amber-500 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="mt-14">
          <img
            src={service.image}
            alt={service.title}
            className="
              w-full
              h-[250px]
              sm:h-[350px]
              md:h-[450px]
              lg:h-[500px]
              object-cover
              rounded-3xl
            "
          />
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-amber-500">500+</h3>
            <p className="mt-2 text-gray-600">Successful Clients</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-amber-500">20+</h3>
            <p className="mt-2 text-gray-600">Destinations</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-amber-500">10+</h3>
            <p className="mt-2 text-gray-600">Years Experience</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-amber-500">24/7</h3>
            <p className="mt-2 text-gray-600">Customer Support</p>
          </div>
        </div>

        {/* ABOUT */}
        <div className="mt-24 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About This Service
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            {service.description1}
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-9">
            {service.description2}
          </p>
        </div>

        {/* WHAT WE OFFER */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl">
            Our comprehensive service package is designed to guide you through
            every stage of your journey.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.offerings.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-gray-100
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
              >
                <CheckCircle size={24} className="text-amber-500" />

                <p className="mt-4 text-gray-700 leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="
                w-full
                h-[300px]
                md:h-[450px]
                object-cover
                rounded-3xl
              "
            />
          </div>

          <div>
            <span className="text-amber-500 font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Professional Guidance Every Step Of The Way
            </h2>

            <div className="space-y-5 mt-8">
              <div className="flex gap-4">
                <CheckCircle className="text-amber-500 shrink-0 mt-1" />
                <p className="text-gray-600">
                  Experienced travel professionals with industry expertise.
                </p>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-amber-500 shrink-0 mt-1" />
                <p className="text-gray-600">
                  Personalized solutions tailored to your travel goals.
                </p>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-amber-500 shrink-0 mt-1" />
                <p className="text-gray-600">
                  Transparent guidance and reliable support.
                </p>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-amber-500 shrink-0 mt-1" />
                <p className="text-gray-600">
                  End-to-end assistance from planning to departure.
                </p>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-amber-500 shrink-0 mt-1" />
                <p className="text-gray-600">
                  Dedicated customer support whenever you need assistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-amber-500 rounded-[32px] p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready To Start Your Journey?
            </h2>

            <p className="mt-6 text-white/90 text-lg leading-8">
              Let our team guide you through every step of the process and help
              you achieve your travel, study, or relocation goals.
            </p>

            <button className="mt-8 bg-white text-amber-500 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:gap-3 transition">
              Speak With An Expert
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
