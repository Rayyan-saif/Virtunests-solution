"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const WhyVirtunests = () => {
  const points = [
    "We help you connect with your audience through modern, responsive websites and applications.",
    "We streamline processes, automate tasks, and improve customer experiences using smart solutions.",
    "We drive organic traffic and sales using proven SEO and performance marketing strategies.",
    "We build strong brand identities that earn trust and recognition in competitive markets.",
    "We help businesses stand out with better design and data-driven campaigns.",
  ];

  return (
    <section className="relative w-full overflow-hidden py-24 px-6 md:px-10 bg-gradient-to-b from-[#0b0f1a] via-[#0d1324] to-[#05070f]">
      {/* Background Glow Orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-cyan-400/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 tracking-widest text-sm font-semibold">
            WHY VIRTUNESTS
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            What Makes Us Different
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 hidden md:block" />

          <div className="space-y-10">
            {points.map((text, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  {/* Tilt Card */}
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    glareColor="#ffffff"
                    glarePosition="all"
                    glareBorderRadius="16px"
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    scale={1.01}
                    transitionSpeed={1500}
                    className="w-full md:w-[46%]"
                  >
                    <div className="group relative p-7 rounded-2xl backdrop-blur-xl bg-[#111727]/80 border border-white/5 overflow-hidden flex items-start gap-4 transition-all duration-300 min-h-[140px]">
                      
                      {/* Neon Border Animation on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-border-run-h"></div>
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-border-run-h delay-1000"></div>
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-border-run-v delay-500"></div>
                        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-border-run-v delay-1500"></div>
                      </div>

                      {/* Background Glow Animation on Hover */}
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                      {/* Icon with Animated Background */}
                      <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md opacity-20 group-hover:opacity-40 group-hover:animate-spin-slow transition-opacity"></div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-inner"></div>
                        <FaCheckCircle className="relative z-10 text-cyan-400 text-lg transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      <p className="text-gray-400 group-hover:text-white text-sm md:text-base leading-relaxed font-light transition-colors duration-300">
                        {text}
                      </p>
                    </div>
                  </Tilt>

                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Let’s Work Together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyVirtunests;