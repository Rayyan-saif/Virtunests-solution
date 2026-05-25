"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const BlogFour = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#0a0f1c] via-[#0d1326] to-[#0a0f1c] text-white py-20 px-6 md:px-20">
      
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl mt-5 md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            Design + Marketing = <br /> Sales Growth
          </h1>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            📅 July 15, 2024 • ✍️ Virtunest Solutions
          </p>
        </div>

        {/* Featured Image */}
        <div
          className="relative w-full h-[55vh] md:h-[70vh] rounded-3xl overflow-hidden mb-16 shadow-2xl"
          data-aos="zoom-in"
        >
          <Image
            src="/website_Recuirment/blog04.jpg"
            alt="Design and Marketing"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        {/* Content Container */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 space-y-12 shadow-xl"
          data-aos="fade-up"
        >

          {/* Intro */}
          <p className="text-gray-300 text-lg leading-relaxed">
            Design grabs attention — but marketing turns that attention into action.  
            When both work together, your brand becomes powerful, memorable, and conversion-driven.
          </p>

          {/* Grid Sections */}
          <div className="grid md:grid-cols-2 gap-10">

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-blue-400">
                Why Design Alone Isn’t Enough
              </h2>
              <p className="text-gray-300">
                Even the best design fails if no one sees it. Without strategy,
                visibility, and targeting — design becomes invisible.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-blue-400">
                Website Redesign Services
              </h2>
              <p className="text-gray-300">
                We create modern, fast, and user-friendly websites that improve
                UX, speed, SEO, and conversions — turning visitors into customers.
              </p>
            </div>

          </div>

          {/* Marketing Support */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-cyan-300">
              How Marketing Powers Design
            </h2>

            <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
              <li>✔ Drives targeted traffic</li>
              <li>✔ Promotes your visuals</li>
              <li>✔ Uses data for optimization</li>
              <li>✔ Builds brand consistency</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-cyan-300">
              Social Media Growth for Brands
            </h2>

            <p className="text-gray-300">
              We combine eye-catching visuals with smart strategies to help
              your brand grow across all platforms — from organic content to paid ads.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-gray-400 text-sm">
              <p>• Website Development</p>
              <p>• Social Media Content</p>
              <p>• Paid Advertising</p>
              <p>• Branding & Design</p>
              <p>• Funnels & Automation</p>
              <p>• Lead Generation</p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="border-l-4 border-blue-500 bg-blue-500/10 p-6 rounded-xl italic text-blue-200 text-lg">
            Success in {new Date().getFullYear()} isn’t about being online —
            it’s about being remembered.
          </blockquote>

          {/* Final CTA Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Ready to Scale Your Brand?
            </h2>

            <p className="text-gray-400">
              Combine powerful design with smart marketing strategies and
              turn your business into a high-converting digital machine.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
              >
                Start Now →
              </a>

              <a
                href="/Blogs"
                className="border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                ← Back to Blogs
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogFour;