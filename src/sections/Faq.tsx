import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is your return policy?",
    answer: "You can return items within 30 days of purchase.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping takes 5-7 business days depending on your location.",
  },
  {
    question: "Do you offer international services?",
    answer: "Yes, we provide services across selected countries worldwide.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 px-5 md:px-10 bg-[#f8fafc] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
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

          <p className="mt-6 text-gray-600 text-lg">
            Everything you need to know before starting your journey with us.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq: FAQItem, index: number) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-5 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span className="text-2xl text-amber-500 font-light">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-600 leading-7"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
