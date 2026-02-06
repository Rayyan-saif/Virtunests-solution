"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { HiOutlineLightBulb } from "react-icons/hi";
import { GiShakingHands, GiStoneCrafting } from "react-icons/gi";
import { FaRegFlag } from "react-icons/fa6";

export default function AboutSecTwo() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-12 py-16 bg-white text-black"
      data-aos="fade-up"
    >
      {/* Sub-Heading */}
      <div
        className="Sub-Heading flex items-center mb-4"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div className="bg-linear-to-l from-blue-500 to-blue-100 h-3 w-8"></div>
        <h3 className="mx-2 text-blue-600 font-bold uppercase text-sm sm:text-base">
          Core Values
        </h3>
        <div className="bg-linear-to-r from-blue-500 to-blue-100 h-3 w-8"></div>
      </div>

      {/* Main Heading */}
      <h1
        className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Our Working Principles
      </h1>

      {/* Boxes */}
      <div
        className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-6 mt-10 w-full max-w-7xl"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* 1️⃣ Innovation */}
        <div
          className="border border-black/20 hover:bg-blue-500 transition-all py-10 px-6 sm:px-8 
          flex-1 flex flex-col items-center group cursor-pointer rounded-2xl"
          data-aos="fade-right"
        >
          <div className="flex justify-center mb-6">
            <HiOutlineLightBulb className="text-7xl bg-gray-100 text-blue-500 p-5 border border-white rounded-full transition-all" />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold group-hover:text-white text-center mb-4">
            Innovation Beyond <br /> Boundaries
          </h1>
          <p className="text-center text-[16px] sm:text-[17px] text-black/60 px-2 group-hover:text-white/70 leading-relaxed">
            We push boundaries and embrace the unconventional to adapt and deliver.
          </p>
        </div>

        {/* 2️⃣ Empathy */}
        <div
          className="border border-black/20 hover:bg-blue-500 transition-all py-10 px-6 sm:px-8 
          flex-1 flex flex-col items-center group cursor-pointer rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex justify-center mb-6">
            <GiShakingHands className="text-7xl bg-gray-100 text-blue-500 p-5 border border-white rounded-full transition-all" />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold group-hover:text-white text-center mb-4">
            Empathy-Driven <br /> Excellence
          </h1>
          <p className="text-center text-[16px] sm:text-[17px] text-black/60 px-2 group-hover:text-white/70 leading-relaxed">
            We understand your pain points and craft solutions that make a difference.
          </p>
        </div>

        {/* 3️⃣ Collaboration */}
        <div
          className="border border-black/20 hover:bg-blue-500 transition-all py-10 px-6 sm:px-8 
          flex-1 flex flex-col items-center group cursor-pointer rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex justify-center mb-6">
            <FaRegFlag className="text-7xl bg-gray-100 text-blue-500 p-4 border border-white rounded-full transition-all" />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold group-hover:text-white text-center mb-4">
            Collaborative <br /> Approach
          </h1>
          <p className="text-center text-[16px] sm:text-[17px] text-black/60 px-2 group-hover:text-white/70 leading-relaxed">
            We encourage collaboration to provide game-changing results for you.
          </p>
        </div>

        {/* 4️⃣ Craftsmanship */}
        <div
          className="border border-black/20 hover:bg-blue-500 transition-all py-10 px-6 sm:px-8 
          flex-1 flex flex-col items-center group cursor-pointer rounded-2xl"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <div className="flex justify-center mb-6">
            <GiStoneCrafting className="text-7xl bg-gray-100 text-blue-500 p-5 border border-white rounded-full transition-all" />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold group-hover:text-white text-center mb-4">
            Craftsmanship <br /> With Care
          </h1>
          <p className="text-center text-[16px] sm:text-[17px] text-black/60 px-2 group-hover:text-white/70 leading-relaxed">
            We take pride in premium craftsmanship, paying attention to every detail.
          </p>
        </div>
      </div>
    </div>
  );
}
