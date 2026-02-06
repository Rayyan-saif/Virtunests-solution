"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AboutSecThree() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full p-5">
      {/* Background Image */}
      <div className="w-full h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] relative">
        <Image
          src="/website_Recuirment/meeting.jpg"
          alt="Team meeting"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-wrap justify-around items-center px-2 sm:px-8 md:px-10 py-6 sm:py-0 space-y-6 sm:space-y-0">

        {/* 1️⃣ Box */}
        <span
          data-aos="fade-right"
          className="flex flex-col sm:flex-row items-center text-center sm:text-left"
        >
          <h1 className="text-3xl mt-1 sm:text-6xl md:text-6xl font-bold text-blue-600">
            5+
          </h1>
          <p className="text-white sm:ml-2 font-semibold text-[14px] sm:text-lg">
            Years of <br /> Experience
          </p>
        </span>

        {/* 2️⃣ Box */}
        <span
          data-aos="fade-up"
          className="flex flex-col sm:flex-row items-center text-center sm:text-left"
        >
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-blue-600">
            183
          </h1>
          <p className="text-white sm:ml-2 font-semibold text-[14px] sm:text-lg">
            Projects <br /> Delivered
          </p>
        </span>

        {/* 3️⃣ Box */}
        <span
          data-aos="fade-down"
          className="flex flex-col sm:flex-row items-center text-center sm:text-left"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-600">
            25+
          </h1>
          <p className="text-white sm:ml-2 font-semibold text-[14px] sm:text-lg">
            Clients <br /> Project Process
          </p>
        </span>

        {/* 4️⃣ Box */}
        <span
          data-aos="fade-left"
          className="flex flex-col sm:flex-row items-center text-center sm:text-left"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-600">
            93%
          </h1>
          <p className="text-white sm:ml-2 font-semibold text-[14px] sm:text-lg">
            Client <br /> Retention
          </p>
        </span>

      </div>
    </div>
  );
}
