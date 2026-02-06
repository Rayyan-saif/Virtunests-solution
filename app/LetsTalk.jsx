"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
// import Image from "next/image";

const LetsTalk = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div
        className="relative z-10 max-w-2xl mt-10 mx-auto my-2 bg-blue-950 p-6 rounded-xl shadow-xl text-center font-poppins"
        data-aos="fade-up"
      >
        <h3 className="text-1xl font-semibold mb-2 text-white">Let’s Talk</h3>

        <p className="text-white mb-6 text-2xl text-center font-bold capitalize">
          Have a project in mind? <br /> Contact Us!
        </p>

        <Link
          href="/contact"
          className="px-6 py-2 text-white font-bold rounded-full hover:bg-gray-100 hover:text-blue-950 transition border inline-block"
        >
          Let's Get Started →
        </Link>
      </div>
    </>
  );
};

export default LetsTalk;
