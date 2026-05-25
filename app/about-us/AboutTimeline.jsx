"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutTimeline() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const timeline = [
    {
    year: "2023",
    title: "Inception & Core Service Architecture",
    desc: "VirtuNests was founded with a singular vision: to unify high-fidelity UI/UX design, cutting-edge Web Development, and performance-driven Digital Marketing into a single powerhouse."
  },
  {
    year: "2024",
    title: "Global Scaling & Cross-Border Ventures",
    desc: "We expanded our operational footprint globally, partnering with fast-growing startups and international enterprises across multiple industries to deliver scalable digital ecosystems."
  },
  {
    year: "2025",
    title: "43+ Enterprise Ecosystems & Industry Impact",
    desc: "Achieved a milestone of delivering over 100 high-performance digital products, establishing VirtuNests as a premium digital agency trusted for elite craftsmanship and measurable business ROI."
  }
  ];

  return (
    <section className="bg-[#0b0b0b] py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Our Journey
        </h2>

        <p
          data-aos="fade-up"
          className="text-gray-400 mt-3 max-w-xl mx-auto"
        >
          Our journey is built on passion, innovation and helping
          businesses grow through powerful digital solutions.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-blue-600 h-full"></div>

        {timeline.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >

            {/* Content */}
            <div
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              className="w-[45%] bg-[#111] border border-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-blue-500 text-xl font-bold">
                {item.year}
              </h3>

              <h4 className="text-white text-lg font-semibold mt-1">
                {item.title}
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>
            </div>

            {/* Dot */}
            <div className="relative z-10 w-5 h-5 bg-blue-600 rounded-full border-4 border-[#0b0b0b]"></div>

            <div className="w-[45%]"></div>

          </div>
        ))}
      </div>
    </section>
  );
}