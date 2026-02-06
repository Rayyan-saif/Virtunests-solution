"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="bg-linear-to-b from-white to-blue-100/40 py-20 px-6 md:px-20 lg:px-32">

      {/* Main Container */}
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl mt-5 font-extrabold text-blue-900 leading-tight mb-4">
            Why Great UI/UX Design is the Backbone of a Successful Website
          </h1>

          {/* Meta Info */}
          <p className="text-gray-600 text-sm mt-2">
            📅 July 15, 2024 • ✍️ Virtunest Solutions
          </p>
        </div>

        {/* Featured Image */}
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

  {/* Intro Paragraph */}
  <p className="text-gray-700 leading-relaxed text-[1.1rem] md:text-lg">
    In today’s digital world, your website is the first impression of your brand.
    A clean and modern interface powered by strong
    <strong> UI/UX design services </strong> helps businesses increase conversions,
    build trust, and offer a smooth, memorable user experience.
  </p>

  {/* Section */}
  <div className="space-y-3">
    <h2 className="text-3xl font-semibold text-blue-800">
      What is UI/UX Design?
    </h2>

    <p className="text-gray-700 leading-relaxed text-[1.05rem]">
      <strong>UI (User Interface)</strong> focuses on the presentation — colors, typography,
      button styles, spacing, and layout.
      <br />
      <strong>UX (User Experience)</strong> determines how users interact with your website,
      how smooth their journey is, and how easily they find what they need.
      <br />
      Together, UI and UX create a polished digital experience that users enjoy and trust.
    </p>
  </div>

  {/* Section */}
  <div className="space-y-3">
    <h2 className="text-3xl font-semibold text-blue-800">
      Why UI/UX Matters for Your Business
    </h2>

    <ul className="space-y-3 text-gray-700 leading-relaxed text-[1.05rem]">
      <li className="flex items-start gap-2">
        <span className="text-blue-700 text-lg">✔</span>
        <span><strong>First Impressions Count</strong> — Users judge your brand within seconds.</span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-blue-700 text-lg">✔</span>
        <span><strong>Boosted Conversions</strong> — Smooth navigation increases inquiries and sales.</span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-blue-700 text-lg">✔</span>
        <span><strong>Better SEO & Engagement</strong> — Good UX increases time on site and reduces bounce rate.</span>
      </li>
    </ul>

    <p className="text-gray-700 leading-relaxed text-[1.05rem]">
      Brands investing in <strong>professional UI/UX design</strong> gain more trust,
      credibility, and long-term loyal customers.
    </p>
  </div>

  {/* Section */}
  <div className="space-y-3">
    <h2 className="text-3xl font-semibold text-blue-800">
      UI/UX Design for Modern Businesses
    </h2>

    <p className="text-gray-700 leading-relaxed text-[1.05rem]">
      Whether you’re building a new website, redesigning an old one, or launching
      a SaaS product, effective UI/UX ensures your digital presence is modern,
      user-friendly, and conversion-ready.
    </p>
  </div>

  {/* Quote */}
  <blockquote className="border-l-4 border-blue-600 bg-blue-50 text-blue-900 italic p-6 rounded-xl text-[1.1rem] leading-relaxed">
    Success in {new Date().getFullYear()} isn’t just about going online —  
    it’s about being trusted, remembered, and chosen.
  </blockquote>

  <p className="text-gray-700 text-[1.1rem] leading-relaxed">
    Investing in <strong>affordable UI/UX design services</strong> today can transform
    your brand’s digital identity and improve overall engagement.
  </p>

  {/* CTA Buttons */}
  <div className="pt-6 flex flex-wrap gap-6">

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

export default Page;
