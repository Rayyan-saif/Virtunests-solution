"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true },
};

const  page = () => {
  return (
    <section
      id="contact"
      className="py-20 pt-32 px-6 md:px-20 bg-blue-500 text-white font-inter"
    >
      {/* Heading */}
      <motion.div
        {...fadeUp}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Let’s Get In Touch
        </h1>

        <p className="mt-2 text-white/80 text-lg">
          Contact us for business inquiries, support, or general consultation.
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        {...fadeUp}
        className="max-w-5xl mx-auto bg-white text-black shadow-2xl p-10 border border-blue-300 rounded-xl"
      >
        <p className="text-[25px] font-semibold uppercase mb-6 text-[#0A1A2F]">
          Or fill out the form below
        </p>

        <form
          action="https://formspree.io/f/mvgbdowo"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Inquiry Purpose */}
          <div>
            <label className="block text-lg font-medium mb-2 text-[#0A1A2F]">
              Inquiry Purpose*
            </label>
            <select
              name="purpose"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option>Choose one option...</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Business</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-medium mb-2 text-[#0A1A2F]">
              Description that fits you*
            </label>
            <select
              name="description"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option>Choose one option...</option>
              <option>Student</option>
              <option>Professional</option>
              <option>Company</option>
            </select>
          </div>

          {/* Name */}
          <InputField
            label="Full Name"
            name="name"
            placeholder="Enter your fullname..."
            required
          />

          {/* Email */}
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email..."
            required
          />

          {/* Organization */}
          <InputField
            label="Organization"
            name="organization"
            placeholder="Enter your organization..."
          />

          {/* Phone */}
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter your phone number..."
          />

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-lg font-medium mb-2 text-[#0A1A2F]">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Enter your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="px-10 py-3 bg-blue-500 text-white rounded-lg font-semibold 
              border border-blue-500 hover:bg-[#11243B] hover:shadow-lg transition-all"
            >
              Submit Form →
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default page;

/* Reusable Input Field Component */
const InputField = ({ label, type = "text", name, placeholder, required }) => (
  <div>
    <label className="block text-lg font-medium mb-2 text-[#0A1A2F]">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white 
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>
);


