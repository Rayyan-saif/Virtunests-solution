"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
// import blogImage from "../../assets";

const BlogTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#fdfefd] to-blue-400 py-20 px-6 md:px-24">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-black font-roboto pt-5 leading-snug text-center mb-4">
          Logo Design vs. Branding — What’s the Real Difference?
        </h1>

        {/* Date + Author */}
        <div className="flex items-center justify-center space-x-4 text-gray-700 text-sm mb-10">
          <span>📅 July 15, 2024</span>
          <span>•</span>
          <span>✍️ By Virtunest Solutions</span>
        </div>

        <div
        className="relative w-full h-[60vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-xl my-12"
        data-aos="zoom-in"
        >
        <Image
            src="/website_Recuirment/UI-UX2.jpg"
            alt="UI UX Design"
            fill
            className="object-cover"
        />
        </div>

          {/* Content Box */}
          <div
            className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 md:p-16 space-y-12 border border-blue-100"
            data-aos="fade-up"
          >

            {/* Paragraph 1 */}
            <p className="text-[1.05rem] text-gray-700">
              Many people think a logo and a brand are the same thing.  
              In reality, they are very different.  
              Understanding this difference helps you build a stronger business identity.
            </p>

            {/* Section */}
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-blue-800">
                What is Logo Design?
              </h2>

              <p className="text-[1.05rem] text-gray-700">
                A logo is a visual mark—symbol, icon, or text—that represents your business.  
                It’s just one part of your overall brand identity.
              </p>
            </div>

            {/* Section */}
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-blue-800">
                What is Branding?
              </h2>

              <p className="text-[1.05rem] text-gray-700">
                Branding is the complete experience people have with your business.  
                It includes:
              </p>

              <ul className="list-disc ml-6 text-[1.05rem] space-y-1 text-gray-700">
                <li>Brand colors</li>
                <li>Typography</li>
                <li>Messaging & tone</li>
                <li>Visual style</li>
                <li>Brand personality & values</li>
              </ul>
            </div>

            {/* Section */}
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-blue-800">
                Why Both Matter?
              </h2>

              <ul className="space-y-2 text-[1.05rem] text-gray-700">
                <li>✔ <strong>Logo attracts</strong> — It's the first impression.</li>
                <li>✔ <strong>Brand retains</strong> — It builds long-term trust.</li>
              </ul>

              <p className="text-[1.05rem] text-gray-700">
                For startups and small businesses, strong branding helps you stand out in crowded markets.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-blue-800">
                Logo Design for Small Business
              </h2>

              <p className="text-[1.05rem] text-gray-700">
                Looking for professional logo design?  
                We create logos that reflect your vision and grow with your brand.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-blue-600 bg-blue-50 text-blue-900 italic p-6 rounded-xl text-[1.1rem] leading-relaxed">
              “Success in {new Date().getFullYear()} is not about being online —
              it’s about being seen, trusted, and remembered.”
            </blockquote>

            <p className="text-[1.05rem] text-gray-700">
              Logo = First impression.  
              Brand = Long-term identity.  
              You need both.  
              Let’s build your brand identity from the ground up.
            </p>

            {/* CTA */}
            <div  className="pt-6 flex flex-wrap gap-6">
              <a
      href="/contact"
      className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
    >
      Contact Us
    </a>

              <a
      href="/Blogs"
      className="border border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300"
    >
      ← Go Back
    </a>

            </div>

          </div>
        </div>
    </section>
  );
};

export default BlogTwo;
