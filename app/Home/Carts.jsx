"use client";

import React from "react";
import Image from "next/image";

const Carts = ({ imgs, text, pragraph, delay }) => {

  return (

    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group relative rounded-3xl border border-white/10 
      bg-white/5 backdrop-blur-xl p-8 transition duration-500
      hover:-translate-y-3 hover:border-cyan-400/40
      hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
    >

      {/* Icon */}
      <div
        className="w-16 h-16 flex items-center justify-center 
        rounded-2xl bg-white/10 mb-6
        group-hover:bg-cyan-400/10 transition duration-300"
      >

        <Image
          src={imgs}
          alt={text}
          width={40}
          height={40}
          className="object-contain"
        />

      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">
        {text}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {pragraph}
      </p>

      {/* Button */}
      <a href="/Packages">

        <button
          className="text-sm font-medium text-cyan-400 
          border border-cyan-400/30 px-4 py-2 rounded-full
          hover:bg-cyan-400 hover:text-black transition"
        >
          Learn More
        </button>

      </a>

    </div>

  );
};

export default Carts;