import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-16 grid md:grid-cols-2 items-center gap-14">
        {/* LEFT CONTENT */}
        <div className="relative">
          {/* Floating Plane */}
          <motion.img
            src="/images/plane1.png"
            alt="Plane"
            className="hidden md:block absolute w-32 lg:w-40 -top-20 left-10"
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Small Heading */}
          <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold mb-5">
            Discover • Travel • Explore
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 max-w-xl">
            Explore The World Through Unique Experiences
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Tailored experiences for work, study, tourism, and unforgettable
            adventures across the world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="px-8 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-400 transition duration-300 shadow-lg">
              Start Your Journey
            </button>

            <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-black hover:text-white transition duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">10K+</h2>
              <p className="text-gray-500 text-sm">Happy Travelers</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">50+</h2>
              <p className="text-gray-500 text-sm">Destinations</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">24/7</h2>
              <p className="text-gray-500 text-sm">Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Soft Glow */}
          <div className="absolute w-[70%] h-[70%] bg-amber-200/30 blur-3xl rounded-full"></div>

          <img
            src="/images/travel5.jpg"
            alt="Travel"
            className="
      relative z-10
      w-full md:w-[95%]
      h-[350px] md:h-[550px]
      object-cover
    "
            style={{
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.4) 85%, transparent 100%)",
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.4) 85%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
