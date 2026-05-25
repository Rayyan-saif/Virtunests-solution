"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const RightImg = "/website_Recuirment/Strategy.jpg";

const OurProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const steps = [
    {
      title: "Discovery",
      desc: "We understand your goals, target audience, and vision.",
    },
    {
      title: "Strategy & Design",
      desc: "We plan and design a modern digital solution tailored to your business.",
    },
    {
      title: "Development",
      desc: "We develop your project using the latest technologies for optimal performance.",
    },
    {
      title: "Launch & Support",
      desc: "We launch your project and provide long-term support and improvements.",
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 md:py-32 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-[#0b0f1a] via-[#0d1324] to-[#05070f]"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-600/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[460px] h-[460px] bg-cyan-400/10 blur-[170px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 xl:gap-20">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2" data-aos="fade-up">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
            Tailored Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block mt-2">
              Strategies & Process
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-light">
            Our expert team researches your audience, competition, and market
            trends to craft data-driven strategies that strengthen your brand
            identity and align perfectly with your business goals.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 120}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl
                rounded-2xl p-6 hover:border-cyan-400/50 hover:bg-white/10 hover:-translate-y-1
                transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg group-hover:scale-110 transition" />
                  <h3 className="text-white text-lg font-semibold">
                    {step.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center"
          data-aos="zoom-in"
        >
          <div className="relative w-full max-w-lg">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative h-[320px] sm:h-[400px] md:h-[450px] lg:h-[700px] w-full rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image
                src={RightImg}
                alt="Digital strategy process"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Success Rate Badge */}
            <div className="absolute -bottom-8 -right-40 -translate-x-1/2
            bg-[#0b0f1a]/80 backdrop-blur-xl border border-white/10
            px-6 py-3.5 rounded-2xl flex items-center gap-4 shadow-2xl">
              <FaPeopleGroup className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-white font-extrabold text-xl leading-none">
                  96%
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Successful Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;