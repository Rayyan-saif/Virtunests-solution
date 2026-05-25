"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BiEnvelope, BiMap, BiPhone, BiTimeFive } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const ContactPage = () => {
  // State handles for the custom interactive choice matrix
  const [purpose, setPurpose] = useState("Business");
  const [description, setDescription] = useState("Company");

  return (
    <section
      id="contact"
      className="py-24 pt-32 px-4 sm:px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#0b0f1a] via-[#0d1324] to-[#05070f] text-white font-inter min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Decorative Cyber Grid Background Element */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Modern Header Section */}
        <motion.div {...fadeUp} className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-4">
            Connection Terminal
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Let's Engineer <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              Something Epic
            </span>
          </h1>
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Have an idea or a complex problem to solve? Drop us a line. Our digital framework strategy is configured to scale systems globally.
          </p>
        </motion.div>

        {/* Core Architecture Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Premium Info Hub (Spans 5 Columns) */}
          <motion.div 
            {...fadeUp}
            className="lg:col-span-5 space-y-8 order-2 lg:order-1"
          >
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] space-y-8 backdrop-blur-xl relative group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
              
              <h3 className="text-xl font-bold tracking-wide text-white">Direct Desks</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover/item:bg-cyan-500 group-hover/item:text-black transition-all duration-300">
                    <BiEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Write To Us</p>
                    <a href="mailto:info@virtunests.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-base font-light">info@virtunests.com</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover/item:bg-cyan-500 group-hover/item:text-black transition-all duration-300">
                    <BiPhone />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Hotline Support</p>
                    <a href="https://wa.me/923248188272" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors text-base font-light">+92 324 8188272</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover/item:bg-cyan-500 group-hover/item:text-black transition-all duration-300">
                    <BiMap />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">HQ Base</p>
                    <p className="text-gray-300 text-base font-light">Nazimabad Block 2, Karachi, PK.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.05] flex items-center gap-3 text-xs text-gray-500 font-mono">
                <BiTimeFive className="text-cyan-400 text-base" />
                <span>Response configuration matrix: &lt; 4 Hours</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The High-End Dashboard Form System (Spans 7 Columns) */}
          <motion.div 
            {...fadeUp}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <form
              action="https://formspree.io/f/mvgbdowo"
              method="POST"
              className="space-y-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] backdrop-blur-2xl"
            >
              {/* HIDDEN INPUTS FOR FORMSPREE TO CAPTURE INTERACTIVE STATE VALUES */}
              <input type="hidden" name="purpose" value={purpose} />
              <input type="hidden" name="description" value={description} />

              {/* INTERACTIVE SELECTION CONTAINER 1: Inquiry Purpose */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 font-mono">
                  01. Inquiry Purpose
                </label>
                <div className="flex flex-wrap gap-2">
                  {["General Inquiry", "Support", "Business"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPurpose(item)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border ${
                        purpose === item
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-lg shadow-blue-500/10 scale-[1.02]"
                          : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* INTERACTIVE SELECTION CONTAINER 2: User Profile Tag */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 font-mono">
                  02. Description that fits you
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Student", "Professional", "Company"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setDescription(item)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border ${
                        description === item
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-lg shadow-blue-500/10 scale-[1.02]"
                          : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* TEXT FIELD METRICS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 pt-4">
                
                <InputField
                  label="Full Name*"
                  name="name"
                  placeholder="e.g. John Doe"
                  required
                />

                <InputField
                  label="Email Address*"
                  name="email"
                  type="email"
                  placeholder="e.g. john@company.com"
                  required
                />

                <InputField
                  label="Organization"
                  name="organization"
                  placeholder="e.g. VirtuNests Lab"
                />

                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +92 000 0000000"
                />

                {/* Big Message Text Box */}
                <div className="sm:col-span-2 relative group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">
                    03. Project Details or Message*
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your timeline, scope or general question..."
                    className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white placeholder-gray-600 focus:border-cyan-400 transition-all duration-300 outline-none resize-none font-light text-base"
                  />
                </div>

              </div>

              {/* Futuristic Interactive Submission Bar */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl shadow-xl transition-all duration-300 hover:bg-cyan-400 active:scale-[0.98] cursor-pointer group"
                >
                  <span>Transmit Form</span>
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;

/* Reusable Minimalist Input Field Sub-Component */
const InputField = ({ label, type = "text", name, placeholder, required }) => (
  <div className="relative group">
    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white placeholder-gray-600 focus:border-cyan-400 transition-all duration-300 outline-none font-light text-base"
    />
  </div>
);