import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  country: string;
  message: string;
};

const GetStarted = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    country: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Request submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        country: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition";

  return (
    <>
      <ToastContainer />

      <section className="relative py-24 px-5 md:px-10 bg-[#f8fafc] overflow-hidden">
        <div className="absolute right-0 top-20 w-72 h-72 bg-amber-200/20 blur-3xl rounded-full"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold mb-4">
              Get Started
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Start Your Journey With Us
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              Fill out the form and we’ll guide you through study, work, or
              travel opportunities.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              mt-14
              bg-white/70
              backdrop-blur-md
              border border-white/40
              rounded-3xl
              p-8 md:p-10
              shadow-sm
              space-y-6
            "
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="fullName"
                value={formData.fullName}
                placeholder="Full Name"
                onChange={handleChange}
                className={inputClass}
                required
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                placeholder="Email Address"
                onChange={handleChange}
                className={inputClass}
                required
              />

              <input
                name="phone"
                value={formData.phone}
                placeholder="Phone Number"
                onChange={handleChange}
                className={inputClass}
                required
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="">Select Service</option>
                <option value="education">Education</option>
                <option value="work">Work Visa</option>
                <option value="tourism">Tourism</option>
                <option value="residency">Permanent Residency</option>
              </select>

              <input
                name="country"
                value={formData.country}
                placeholder="Preferred Country"
                onChange={handleChange}
                className={`${inputClass} md:col-span-2`}
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              placeholder="Tell us about your goals..."
              rows={4}
              onChange={handleChange}
              className={inputClass}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full
                py-4
                rounded-full
                bg-amber-500
                text-white
                font-semibold
                hover:bg-amber-400
                transition
                shadow-md
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
