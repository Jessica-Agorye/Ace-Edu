import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqCategories } from "../data/faq";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const currentCategory = faqCategories[activeCategory];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (index: number): void => {
    setActiveCategory(index);
    setOpenIndex(null);
  };

  return (
    <section
      id="faq"
      className="relative py-24 px-5 md:px-10 bg-[#f8fafc] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold mb-5">
            FAQs
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl">
            Find answers to common questions about studying, travelling, working
            and relocating abroad.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="mt-12 flex flex-wrap gap-3">
          {faqCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => handleCategoryChange(index)}
              className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === index
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {currentCategory.title}
          </h3>

          <p className="mt-3 text-gray-600">{currentCategory.description}</p>

          {/* FAQ Questions */}
          <div className="mt-8 space-y-4">
            {currentCategory.questions.map((faq, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-5 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left gap-6"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-amber-500 font-light shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600 leading-7 max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
