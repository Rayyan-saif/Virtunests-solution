"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
// import blogImage from "@/assets";

export default function BlogThree() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      {/* -------- SEO META TAGS -------- */}
      <Head>
        <title>5 Signs Your Business Needs a Website Redesign | Virtunest Solutions</title>
        <meta
          name="description"
          content="Is your website outdated or not converting? Discover the 5 major signs your business needs a website redesign to boost conversions, speed, and user experience."
        />
        <meta
          name="keywords"
          content="website redesign, business website redesign, UI UX improvement, website speed optimization, responsive website, modern web design, website developer Pakistan, redesign services"
        />
        <meta property="og:title" content="5 Signs Your Business Needs a Website Redesign" />
        <meta property="og:description" content="Learn why redesigning your outdated business website can increase conversions, trust, and customer engagement." />
      </Head>

      {/* -------- MAIN SECTION -------- */}
      <section className="bg-white py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-black font-roboto pt-5 leading-snug text-center mb-4">
            5 Signs Your Business Needs a Website Redesign
          </h1>

          {/* Date + Author */}
          <div className="flex items-center justify-center space-x-4 text-gray-700 text-sm mb-10">
            <span>📅 July 15, 2024</span>
            <span>•</span>
            <span>✍️ By Virtunest Solutions</span>
          </div>

          <div className="">

            {/* Blog Image */}
            <div className="overflow-hidden mb-10 lg:w-[40vw] lg:mr-20">
              <Image
                src="/website_Recuirment/blog03.jpg"
                alt="UI-UX-Services"
                width={900}
                height={500}
                className="rounded-3xl object-cover hover:scale-105 transition duration-500"
            />
            </div>

            {/* Content */}
            <div className="text-gray-800 text-lg leading-relaxed space-y-6 font-roboto text-balance lg:w-[60vw]">

              <p>
                A website is more than a digital identity — it is your business’s sales engine, trust-builder, and first impression for potential customers. 
                If your website feels outdated or is failing to convert, it’s hurting your brand more than you think.
              </p>

              <h2 className="text-2xl font-bold">1. Your Website Is Not Mobile-Friendly</h2>
              <p>
                Over 60% of global traffic is now mobile. If your website is not fully responsive, loads poorly on phones,
                or forces users to zoom manually, then you're losing clients instantly.
                Google also ranks mobile-friendly websites higher — this is a major reason to redesign.
              </p>

              <h2 className="text-2xl font-bold">2. Slow Load Time Is Affecting Your Sales</h2>
              <p>
                Even a **2-second delay** can cause a 40% drop in conversions.  
                Slow websites frustrate visitors, reduce search ranking, and increase bounce rate.
                A redesign improves performance, caching, and Core Web Vitals.
              </p>

              <h2 className="text-2xl font-bold">3. Your Design Looks Outdated</h2>
              <p>
                Web design trends evolve fast. If your website still looks like it’s from 2016 — old colors, old layout, low-quality images —
                customers may assume your business is outdated too.
                A modern, clean, and premium UI/UX builds immediate trust.
              </p>

              <h2 className="text-2xl font-bold">4. Visitors Can’t Find What They Need</h2>
              <p>
                Bad navigation is a silent sales killer.  
                If your customers struggle to find your services, pricing, or contact info, they’ll leave within seconds.
                A redesign improves structure, clarity, and flow — increasing conversions.
              </p>

              <h2 className="text-2xl font-bold">5. Your Website Isn’t Generating Leads or Sales</h2>
              <p>
                If your traffic is high but conversions are low, your website experience is failing.
                A redesign improves CTAs, layout, trust signals, and overall user behavior.
                Conversion-focused design = more leads + more revenue.
              </p>

              <blockquote className="border-l-4 border-blue-700 pl-4 italic text-blue-900 bg-blue-50 py-2 px-4 rounded-xl">
                "Success in {new Date().getFullYear()} requires more than just being online — it requires being memorable."
              </blockquote>

              <p>
                Searching for <strong>business website design near me</strong>?  
                At Virtunest Solutions, we create high-performing, visually impressive, and conversion-focused websites that elevate your brand.
              </p>

              <h2 className="text-2xl font-bold mt-10">Ready for a Modern Redesign?</h2>
              <p>
                Whether you need a cleaner layout, faster performance, or a complete brand refresh —
                our UI/UX designers and developers can transform your online presence.
              </p>

              {/* CTA Buttons */}
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
        </div>
      </section>
    </>
  );
}
