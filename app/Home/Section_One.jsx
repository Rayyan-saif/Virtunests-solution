"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const SectionOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-100">
      
      {/* BACKGROUND SHAPES */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

      {/* CONTAINER */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 py-16 md:py-24 lg:py-20 relative z-10">
        
        {/* TEXT CONTENT */}
        <div
          data-aos="fade-right"
          data-aos-delay={200}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-block text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wide mb-2">
            Welcome to Virtunests
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-inter leading text-gray-900 capitalize">
            Accelerating your business growth
            <span className="text-blue-600"> through innovation</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 font-roboto max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We merge creativity, strategy, and technology to deliver digital marketing 
            solutions that actually move the needle for your business.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="px-7 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              Get Started
            </Link>

            <Link
              href="/portfolio"
              className="px-7 py-3 bg-white/40 backdrop-blur-lg text-blue-700 border border-blue-200 rounded-full font-semibold hover:bg-white/60 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div
          data-aos="fade-up"
          data-aos-delay={100}
          className="flex-1 flex justify-center relative"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-8 -left-6 w-64 h-64 sm:w-80 sm:h-80 
          lg:w-md lg:h-112 bg-blue-100 rounded-full blur-2xl opacity-50 z-0"></div>

          <Image
            src="/website_Recuirment/Main2-short.png"
            alt="Business Growth"
            width={700}
            height={600}
            className="relative top-4 z-10 w-72 sm:w-96 md:w-md lg:w-lg object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
