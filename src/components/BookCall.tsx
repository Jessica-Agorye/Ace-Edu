import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const BookCall = () => {
  const calendlyLink = "https://calendly.com/your-username/consultation";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 md:px-10 bg-[#f8fafc] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200/20 blur-3xl rounded-full"></div>

      <div className="max-w-3xl w-full text-center relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold mb-4">
            Book a Call
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Let’s Talk About Your Journey
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Schedule a free consultation with our team. We’ll guide you through
            study, work, or travel opportunities tailored to your goals.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            mt-12
            bg-white/70
            backdrop-blur-md
            border border-white/40
            rounded-3xl
            p-8 md:p-10
            shadow-lg
          "
        >
          <div className="flex items-center justify-center mb-6 text-amber-500">
            <Calendar size={40} />
          </div>

          <h2 className="text-2xl font-semibold text-gray-900">
            30-Minute Free Consultation
          </h2>

          <p className="mt-3 text-gray-600">
            Speak directly with our advisor and get clarity on your next steps.
          </p>

          <ul className="mt-6 text-gray-600 space-y-2 text-sm">
            <li>✔ Study Abroad Guidance</li>
            <li>✔ Work Visa Consultation</li>
            <li>✔ Travel Planning Advice</li>
          </ul>

          {/* CTA */}
          <a href={calendlyLink} target="_blank" rel="noreferrer">
            <button className="mt-8 w-full flex items-center justify-center gap-2 py-4 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-400 transition duration-300 shadow-md">
              Schedule on Calendly
              <ArrowRight size={18} />
            </button>
          </a>

          <p className="mt-4 text-xs text-gray-400">
            You’ll be redirected to our secure booking page
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
