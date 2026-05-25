"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogThree() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      {/* SEO */}
      <Head>
        <title>5 Signs Your Business Needs a Website Redesign | Virtunest Solutions</title>
        <meta
          name="description"
          content="Discover the 5 signs your website needs redesign to boost conversions and user experience."
        />
      </Head>

      {/* MAIN */}
      <section className="relative bg-gradient-to-br from-[#0b0f1a] via-[#0d1324] to-[#05070f] text-white py-20 px-6 md:px-20 overflow-hidden">

        {/* Glow Background */}
        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-600/20 blur-[120px] bottom-[-120px] right-[-120px]" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Title */}
          <div className="text-center mb-14" data-aos="fade-up">
            <h1 className="text-4xl mt-5 md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              5 Signs Your Business Needs a Website Redesign
            </h1>

            <p className="text-gray-400 mt-4 text-sm">
              📅 July 15, 2024 • ✍️ Virtunest Solutions
            </p>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT - IMAGE */}
            <div data-aos="zoom-in">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                <Image
                  src="/website_Recuirment/blog03.jpg"
                  alt="Website Redesign"
                  width={900}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-700"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>

            {/* RIGHT - CONTENT */}
            <div
              className="space-y-8 text-gray-300 text-[1.05rem] leading-relaxed"
              data-aos="fade-up"
            >

              <p>
                Your website isn’t just a page — it’s your digital salesman.
                If it’s outdated or slow, it’s silently killing your conversions.
              </p>

              {/* Sections */}
              {[
                {
                  title: "1. Not Mobile-Friendly",
                  text: "More than 60% users browse on mobile. If your site isn’t responsive, you're losing traffic and ranking."
                },
                {
                  title: "2. Slow Load Time",
                  text: "Even a 2-second delay can drop conversions drastically. Speed directly impacts revenue."
                },
                {
                  title: "3. Outdated Design",
                  text: "Old UI makes your brand look unprofessional. Modern design builds instant trust."
                },
                {
                  title: "4. Poor Navigation",
                  text: "If users can’t find info quickly, they leave. Simple UX = more conversions."
                },
                {
                  title: "5. Low Conversions",
                  text: "Traffic without sales means design failure. A redesign fixes structure & CTAs."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition"
                >
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h2>
                  <p>{item.text}</p>
                </div>
              ))}

              {/* Quote */}
              <div className="border border-blue-500/30 bg-blue-500/10 p-6 rounded-2xl italic text-blue-300">
                "Success in {new Date().getFullYear()} is not about being online —
                its about being unforgettable."
              </div>

              <p>
                A high-performing website is the backbone of your business growth.
                If your site isn’t converting — it’s time to upgrade.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-5 pt-4">

                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg"
                >
                  🚀 Start Your Redesign
                </a>

                <a
                  href="/Blogs"
                  className="border border-white/20 px-8 py-3 rounded-full hover:bg-white/10 transition"
                >
                  ← Back to Blogs
                </a>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}