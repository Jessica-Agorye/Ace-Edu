import { motion } from "framer-motion";

const aboutUsText = [
  {
    img: "/images/book.png",
    title: "Study abroad advisory",
    description:
      "Discover the countless benefits of studying abroad and how it can shape your future. Gain a global perspective, expand your horizons, enhance your academic qualifications, and develop lifelong skills. At Ace, we believe in empowering individuals through international education.",
  },

  {
    img: "/images/job.png",
    title: "Visa Advisory & Processing Facilitation",
    description:
      "Connecting  Ace will be your reliable partner in obtaining the necessary visa for your chosen study destination. We will provide valuable insights, assist with the application process, and ensure you are well-prepared for your visa interview.individuals with international work experiences and career growth opportunities.",
  },

  {
    img: "/images/travel.png",
    title: "University/College Selection & Application Support",
    description:
      "We provide detailed information on universities and colleges in Europe, America, Asia, and Australia. Navigate the complex admission process with ease. Our team will guide you through application requirements, documentation, and submission to increase your chances of securing admission.",
  },

  {
    img: "/images/tour.png",
    title: "Immigration and Tourism",
    description:
      "Ace also offers expert guidance and support for those interested in immigration and exploring tourism opportunities. Whether you are considering permanent residency, work permits, or vacation experiences, our team will provide valuable insights and assistance throughout the process.",
  },
];

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-5 md:px-10 overflow-hidden bg-[#f8fafc]"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-amber-200/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold mb-5">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We Create Meaningful Global Experiences
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
            From international education and work opportunities to curated
            travel adventures, we help people explore the world through
            life-changing experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {aboutUsText.map((item, index) => (
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
                group
                relative
                bg-white/70
                backdrop-blur-sm
                border border-white/40
                p-8
                rounded-[32px]
                hover:-translate-y-2
                transition-all
                duration-500
                shadow-sm
                hover:shadow-2xl
              "
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-amber-100/0 to-amber-100/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-8">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
