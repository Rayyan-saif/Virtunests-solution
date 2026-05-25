"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AboutJourney() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full">

      {/* Background */}
      <div className="relative w-full h-[70vh]">
        <Image
          src="/website_Recuirment/meeting.jpg"
          alt="Team work"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col justify-center">

        {/* Heading */}
        <div className="text-center mb-14 px-6">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Our Journey & Achievements
          </h2>

          <p
            data-aos="fade-up"
            className="text-gray-400 mt-3 max-w-xl mx-auto"
          >
            From a passionate startup to a growing digital agency,
            our journey is defined by innovation, creativity,
            and delivering impactful solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 px-6">

          {/* Box */}
          <div
            data-aos="fade-up"
            className="text-center"
          >
            <h3 className="text-5xl font-bold text-blue-600">3+</h3>
            <p className="text-gray-300 mt-2 text-sm tracking-wide">
              Years of Experience
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center"
          >
            <h3 className="text-5xl font-bold text-blue-600">120+</h3>
            <p className="text-gray-300 mt-2 text-sm tracking-wide">
              Projects Delivered
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center"
          >
            <h3 className="text-5xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-300 mt-2 text-sm tracking-wide">
              Global Clients
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center"
          >
            <h3 className="text-5xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-300 mt-2 text-sm tracking-wide">
              Client Satisfaction
            </p>
          </div>

        </div>

        {/* Culture Line */}
        <div
          data-aos="fade-up"
          className="text-center mt-14 px-6"
        >
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            At VirtuNests we believe in creativity, collaboration and
            continuous innovation. Our culture is built on teamwork,
            learning and delivering real value to our clients.
          </p>
        </div>

      </div>
    </section>
  );
}