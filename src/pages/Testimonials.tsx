import { testimonials } from "../data/testimonials";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="relative min-h-screen px-5 py-20 md:px-10 bg-[#f8fafc] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-amber-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute top-96 right-0 w-72 h-72 bg-blue-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page introduction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold mb-4">
            Testimonials
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Kind Words from Our Clients
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Every journey is different. Explore the experiences our clients
            share as they take steps toward their study, work, and travel goals.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex flex-col bg-white/70 backdrop-blur-md border border-white/60 rounded-3xl p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Client information */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-lg">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {testimonial.destination} | {testimonial.service}
                  </p>
                </div>
              </div>

              <Quote
                size={30}
                className="mt-7 text-amber-400"
                aria-hidden="true"
              />

              <blockquote className="mt-3 text-gray-600 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-6 flex gap-1" aria-hidden="true">
                <span className="w-8 h-1 rounded-full bg-amber-400" />
                <span className="w-3 h-1 rounded-full bg-amber-200" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Consultation call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden mt-20 bg-white/70 backdrop-blur-md border border-white/60 rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-200/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold mb-4">
                Ready to Start Your Journey?
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Your Next Chapter Starts Here
              </h2>

              <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                Book a free consultation with our team and get guidance tailored
                to your study, work, or travel goals.
              </p>

              <a
                href="/book-call"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-400 transition duration-300 shadow-md"
              >
                Book a Consultation
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full bg-amber-100/70 flex items-center justify-center">
              <div className="flex flex-col items-center text-amber-500">
                <div className="w-14 h-14 rounded-2xl border-2 border-amber-400 flex items-center justify-center">
                  <span className="text-2xl font-bold">30</span>
                </div>

                <span className="mt-2 text-xs font-semibold uppercase tracking-widest">
                  Minutes
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
