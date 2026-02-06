"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Carts = ({ imgs, text, pragraph }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Mobile Version */}
      <div
        className="lg:hidden bg-blue-50 p-5 rounded-2xl shadow-sm flex flex-col items-center w-full"
        data-aos="fade-up"
      >
        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-3">
          <Image
            src={imgs}
            width={60}
            height={60}
            alt={text}
            className="object-contain"
          />
        </div>

        <h1 className="text-lg font-bold font-roboto text-center mb-2 text-black">{text}</h1>

        <p className="text-gray-600 font-poppins text-xs text-center">{pragraph}</p>

        <a href="/Packages">
          <button className="text-blue-600 bg-blue-100 px-4 py-1 rounded-full text-xs mt-3">
            Read More
          </button>
        </a>
      </div>

      {/* Desktop Version */}
      <div
        className="hidden lg:flex group bg-blue-50 h-80 p-6 rounded-3xl shadow-md 
        cursor-pointer flex-col w-72 transition-all duration-500 
        hover:scale-105 hover:shadow-xl hover:bg-linear-to-br 
        hover:from-blue-500 hover:to-blue-600 relative overflow-hidden"
        data-aos="zoom-in"
      >
        {/* Hover glass */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition duration-500 bg-white backdrop-blur-md"></div>

        {/* Icon */}
        <div className="h-5/6 relative z-10">
          <div
            className="w-16 h-16 flex items-center justify-center 
            bg-blue-100 rounded-full group-hover:bg-white transition duration-300"
          >
            <Image
              src={imgs}
              width={60}
              height={60}
              alt={text}
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h1
            className="text-2xl font-bold mt-3 mb-2 font-roboto text-left 
          group-hover:text-white transition-colors duration-300"
          >
            {text}
          </h1>

          {/* Paragraph */}
          <p
            className="text-gray-700 font-poppins text-sm capitalize 
          group-hover:text-white pb-4 transition-colors duration-300"
          >
            {pragraph}
          </p>
        </div>

        {/* Button */}
        <div className="mt-auto relative z-10 flex justify-end">
          <a href="/Packeges">
            <button
              className="text-blue-600 bg-blue-100 px-4 py-2 rounded-full 
              transition-all duration-300 group-hover:text-white 
              group-hover:bg-white/20 text-sm"
            >
              Read More
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Carts;
