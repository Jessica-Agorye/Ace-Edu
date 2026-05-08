import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Admission Facilitation",
    description: [
      "University application support",
      "Document guidance",
      "Offer letter assistance",
      "Pre-departure support",
    ],
    price: "$100",
  },
  {
    title: "Tourist Visa Facilitation",
    description: [
      "Visa consultation",
      "Document preparation",
      "Application filing",
    ],
    price: "$200",
  },
  {
    title: "Permanent Visa Facilitation",
    description: [
      "Eligibility assessment",
      "Full application support",
      "Documentation review",
    ],
    price: "$300",
  },
  {
    title: "Work Visa Facilitation",
    description: [
      "Job pathway guidance",
      "Visa processing support",
      "Interview preparation",
      "Relocation assistance",
    ],
    price: "$150",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative py-24 px-5 md:px-10 bg-[#f8fafc] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-32 w-72 h-72 bg-amber-200/20 blur-3xl rounded-full"></div>

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
            Pricing
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Simple & Transparent Pricing
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Choose a plan that fits your journey. We offer flexible facilitation
            packages designed to support your global goals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                relative
                bg-white/70
                backdrop-blur-sm
                border border-white/40
                rounded-[28px]
                p-6
                hover:-translate-y-2
                transition-all
                duration-500
                shadow-sm
                hover:shadow-2xl
              "
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-amber-100/0 to-amber-100/40 opacity-0 hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                {/* Price */}
                <div className="text-3xl font-bold text-amber-500 mb-6">
                  {item.price}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-gray-600 text-sm flex gap-2">
                      <span className="text-amber-400">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link to="/get-started">
                  <button className="w-full py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-400 transition duration-300">
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
