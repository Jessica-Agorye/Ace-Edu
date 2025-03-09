import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return items within 30 days of purchase.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping takes 5-7 business days, depending on your location.",
  },
  {
    question: "Do you offer international?",
    answer: "Yes, we ship to selected countries worldwide.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-4 md:mx-8 lg:mx-18 mb-10 pb-4 mt-16 bg-amber-100">
      <motion.h2
        className="text-3xl font-bold mb-4 pt-10 pl-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <p>FAQs</p>
      </motion.h2>
      <div className="space-y-4 p-2 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" pb-2 px-4 border-b-2 border-b-neutral-300  mb-8"
          >
            <button
              className="w-full flex justify-between items-center text-lg font-medium p-2 focus:outline-none "
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 p-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
