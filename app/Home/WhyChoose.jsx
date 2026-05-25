"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaUserTie,
  FaCogs,
  FaDollarSign,
  FaClock,
  FaSmile,
  FaHeadset,
} from "react-icons/fa";

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const features = [
    {
      title: "Expert Team",
      desc: "Skilled experts in design, development & strategy delivering precision and creativity.",
      icon: <FaUserTie />,
    },
    {
      title: "Custom Solutions",
      desc: "We craft solutions tailored specifically for your business goals.",
      icon: <FaCogs />,
    },
    {
      title: "24/7 Support",
      desc: "Our support team is always available to help you anytime.",
      icon: <FaHeadset />,
    },
    {
      title: "On-Time Delivery",
      desc: "We ensure timely delivery without compromising quality.",
      icon: <FaClock />,
    },
    {
      title: "Client-Centric",
      desc: "Your satisfaction drives everything we build and deliver.",
      icon: <FaSmile />,
    },
    {
      title: "Affordable Pricing",
      desc: "Premium services at competitive pricing for growing businesses.",
      icon: <FaDollarSign />,
    },
  ];

  return (
    <section className="relative py-24 md:py-0 px-4 sm:px-6 md:px-12 overflow-hidden">

      {/* Glow Background (UNTOUCHED) */}
      <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-600/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-cyan-400/10 blur-[160px] rounded-full" />

      {/* Grid pattern (UNTOUCHED) */}
      <div className="absolute inset-0 opacity-[0.04]
      bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
      bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE CONTENT */}
        <div data-aos="fade-right" className="lg:col-span-5 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Core Value Matrix
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Why Businesses <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Choose Us
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            We combine high-end creativity, technical excellence, and digital strategy to build systems that scale your performance in competitive markets.
          </p>

          <div className="pt-2">
            <button className="relative group overflow-hidden px-8 py-3.5 rounded-xl bg-white text-black font-semibold shadow-xl transition-all duration-300 hover:bg-cyan-400 hover:text-black active:scale-95 cursor-pointer">
              Start Your Project
            </button>
          </div>

        </div>

        {/* RIGHT SIDE FEATURES */}
        {/* Mobile: 1 col list | Tablet/Desktop: Alternating grid alignment */}
        <div className="lg:col-span-7 py-0 md:py-20 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          {features.map((feature, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              // Desktop parity: shifting right column downward for asymmetry
              className={`relative group ${
                i % 2 !== 0 ? "sm:translate-y-8" : ""
              }`}
            >
              <div
                // Mobile layout: Horizontal row format | Desktop layout: Stacked vertical card structure
                className="relative h-full rounded-2xl md:rounded-3xl backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-cyan-500/20 p-5 sm:p-8 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_rgba(6,182,212,0.05)]"
              >
                
                {/* Micro Spotlight: Glows from center outwards on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon Container (Scales on hover) */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 text-cyan-400 text-lg sm:text-xl transition-all duration-300 group-hover:text-white group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] sm:mb-6">
                  {feature.icon}
                </div>

                {/* Content Area */}
                <div className="flex-grow">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2 tracking-wide transition-colors duration-300 group-hover:text-cyan-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

// "use client";

// import React, { useEffect } from "react";
// import Image from "next/image"; 
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { 
//   FaUserTie, 
//   FaCogs, 
//   FaDollarSign, 
//   FaClock, 
//   FaSmile, 
//   FaHeadset 
// } from "react-icons/fa";

// const WhyChoose = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const features = [
//     {
//       title: "Expert Team",
//       desc: "Skilled experts in design, development & strategy delivering with precision and creativity.",
//       icon: <FaUserTie className="text-blue-700 text-3xl" />,
//     },
//     {
//       title: "Custom Solutions",
//       desc: "We craft custom solutions tailored to your unique business goals.",
//       icon: <FaCogs className="text-blue-700 text-3xl" />,
//     },
//     {
//       title: "24/7 Support",
//       desc: "Day or night, our support team is ready when you need us.",
//       icon: <FaHeadset className="text-blue-700 text-3xl" />,
//     },
//     {
//       title: "On-Time Delivery",
//       desc: "We deliver on time every time with zero compromise on quality.",
//       icon: <FaClock className="text-blue-700 text-3xl" />,
//     },
//     {
//       title: "Client-Centric",
//       desc: "Your satisfaction is our priority — we deliver with precision.",
//       icon: <FaSmile className="text-blue-700 text-3xl" />,
//     },
//     {
//       title: "Affordable Pricing",
//       desc: "Premium services at competitive prices transparent, affordable, and high-quality.",
//       icon: <FaDollarSign className="text-blue-700 text-3xl" />,
//     },
//   ];

//   return (
//     <section className="bg-white py-10 px-4 sm:px-6 md:px-12" id="whyus">
//       <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-1 text-center">

//         {/* Heading */}
//         <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-inter text-black">
//           Your Success, Our Mission
//         </h1>

//         <p className="text-[15px] sm:text-[16px] md:text-lg leading-relaxed text-gray-700 font-roboto max-w-3xl mx-auto mb-5">
//           Committed to quality, innovation, and results every step of <br /> the way.
//         </p>

//         <div className="w-20 md:w-40 h-1 bg-blue-500 mx-auto rounded-full mb-5"></div>

//         {/* Main Layout */}
//         <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8">

//           {/* Left Column */}
//           <div className="flex flex-col gap-6 flex-1 order-2 md:order-1" data-aos="fade-right">
//             <FeatureCard {...features[0]} />
//             <FeatureCard {...features[1]} />
//             <FeatureCard {...features[3]} />
//           </div>

//           {/* Center Image */}
//           <div
//             className="w-44 h-44 sm:w-60 sm:h-60 md:w-60 md:h-[78vh] rounded-full overflow-hidden shadow-2xl shadow-black shrink-0 mx-auto order-1 md:order-2"
//             data-aos="zoom-in"
//           >
//             <Image
//               src="/website_Recuirment/MainRight2.jpeg"
//               alt="center-img"
//               width={500}
//               height={500}
//               className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//             />
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col gap-6 flex-1 order-3" data-aos="fade-up">
//             <FeatureCard {...features[5]} />
//             <FeatureCard {...features[2]} />
//             <FeatureCard {...features[4]} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Card Component
// const FeatureCard = ({ title, desc, icon }) => (
//   <div className="flex flex-col text-center items-center max-w-xs mx-auto bg-blue-200 rounded-2xl p-4 sm:p-5 transition-transform hover:scale-[1.02] duration-300">
//     <div className="w-12 h-12 flex items-center justify-center mb-2">
//       {icon}
//     </div>
//     <h3 className="text-base sm:text-lg font-bold font-inter capitalize text-black">{title}</h3>
//     <p className="text-xs sm:text-sm text-gray-700 font-poppins">{desc}</p>
//   </div>
// );

// export default WhyChoose;
