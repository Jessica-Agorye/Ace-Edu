import { useState } from "react";

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
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to selected countries worldwide.",
  },
];

export default function FAQ() {
  // ✅ Explicitly type `openIndex` to be `number | null`
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ✅ Define `index` as a `number`
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-4  mb-10 mt-10 bg-amber-100">
      <h2 className="text-3xl font-bold mb-4 pt-10 pl-4">FAQs</h2>
      <div className="space-y-4 pl-4">
        {faqs.map((faq, index) => (
          <div key={index} className=" pb-2">
            <button
              className="w-full flex justify-between items-center text-lg font-medium p-2 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
