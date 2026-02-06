"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Folio = ({ text, image, title }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="group relative flex flex-col items-center cursor-pointer hover:border-blue-700 hover:border-2 border-2 rounded-xl"
      data-aos="zoom-in"
    >
      {/* Image */}
      <div className="relative w-36 h-44 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 overflow-hidden transition-all duration-500">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Name + Title */}
      <div className="text-center w-full py-2 px-1 group-hover:bg-blue-500 rounded-b-lg">
        <h1 className="text-[14px] sm:text-base font-semibold font-poppins text-black group-hover:text-white">
          {text}
        </h1>
        <p className="text-[12px] sm:text-sm capitalize text-gray-600 group-hover:text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Folio;
