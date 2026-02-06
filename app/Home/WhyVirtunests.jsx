"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const WhyVirtunests = () => {
  return (
    <section className="min-h-screen bg-blue-900 flex flex-col items-center px-4 sm:px-6 lg:px-10 py-10">
      
      {/* Sub-Heading */}
      <div className="flex items-center mt-4 mb-6">
        <div className="bg-linear-to-l from-blue-500 to-blue-900 h-1.5 w-10 sm:w-14"></div>
        <h3 className="mx-2 text-blue-200 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
          WHY VIRTUNESTS SOLUTIONS?
        </h3>
        <div className="bg-linear-to-r from-blue-500 to-blue-900 h-1.5 w-10 sm:w-14"></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1100px] flex flex-col items-center text-center">
        <h1 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter">
          What Makes Us Different
        </h1>

<div className="mt-8 w-full space-y-6 text-left">
  {[
    "We help you connect with your audience online through custom websites and applications that are responsive, user-friendly, and optimized for your business needs.",
    "We help streamline processes, automate tasks, and improve customer service with the right digital tools for your business.",
    "We help you gain more organic traffic and sales through proven SEO techniques, optimized marketing strategies, and targeted ads.",
    "We help you build a strong brand identity to achieve recognition, win trust, and grow your market share.",
    "We help you stand out through better designs, data-backed campaigns, and a deeper understanding of your target audience."
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-start gap-3"
      data-aos="fade-left"
      data-aos-delay={index * 150} // staggered animation
    >
      <FaCheckCircle className="text-blue-500 text-2xl sm:text-3xl md:text-4xl shrink-0 mt-1" />
      <p className="text-gray-200 text-[16px] sm:text-[18px] md:text-[20px]">
        {`${index + 1}. ${item}`}
      </p>
    </div>
  ))}
</div>


        {/* Button */}
        <Link
          href="/Contact"
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-3 px-6 text-white mt-10 rounded-lg text-sm sm:text-base md:text-lg font-medium"
        >
          Lets Get Started
        </Link>
      </div>
    </section>
  );
};

export default WhyVirtunests;
