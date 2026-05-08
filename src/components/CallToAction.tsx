import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const CallToAction = () => {
  return (
    <section className="relative py-24 px-5 md:px-10 bg-[#f8fafc] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 w-72 h-72 bg-amber-200/20 blur-3xl rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Let’s Start Your Journey Today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          Get personalized guidance for study abroad, work opportunities,
          tourism, and global travel experiences tailored just for you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <MotionLink
            className="px-8 py-4 rounded-full bg-amber-500 text-white font-semibold shadow-lg hover:bg-amber-400 transition"
            to="/book-call"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Call
          </MotionLink>

          <a
            href="#about"
            className="px-8 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-black hover:text-white transition inline-block"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
