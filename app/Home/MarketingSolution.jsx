"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const MainL = "/website_Recuirment/picture-short.png";

const MarketingSolution = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const features = [
  "Advanced Search Engine Optimization (SEO) strategies designed to dominate organic rankings and capture high-intent search traffic.",
  "Data-driven, precision-targeted PPC and paid media campaigns structured to eliminate ad waste and maximize conversion value.",
  "Omnichannel social media architectures that foster deep community engagement, brand loyalty, and viral growth.",
  "Predictive analytics and comprehensive attribution models to track campaign velocity, ROI metrics, and untapped revenue streams."
];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0b0f1a] via-[#0d1324] to-[#05070f]">
      {/* Background Glow Orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-cyan-400/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Grid Pattern
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" /> */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2
            data-aos="fade-up"
            className="font-extrabold text-white leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
          >
            Performance Driven
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block mt-2">
              Digital Marketing
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-400 mt-6 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            We design marketing systems that generate leads, scale businesses, 
            and build a strong digital presence.
          </p>
        </div>

        {/* Center Visual */}
        <div className="relative flex justify-center mt-16">
          <div className="relative w-full max-w-md md:max-w-lg">
            <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full scale-110 pointer-events-none"></div>

            {/* <div className="relative w-full aspect-square max-h-[420px] md:max-h-[500px]">
              <Image
                src={MainL}
                fill
                sizes="(max-width: 768px) 85vw, 500px"
                alt="Marketing growth"
                className="object-contain pointer-events-none animate-pulse"
                priority
              />
            </div> */}
          </div>
        </div>

        {/* Features Layout with Tilt Cards */}
        {/* Asymmetric Bento Grid Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6">
        {features.map((feature, index) => {
          // Dynamic Bento Grid Spanning
          let spanClass = "md:col-span-2";
          if (index === 0 || index === 3 || index === 6) spanClass = "md:col-span-3";
          if (index === 7) spanClass = "md:col-span-6"; // Final wide card

          return (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="24px"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.01}
              transitionSpeed={1200}
              className={`relative group ${spanClass}`}
            >
              <div
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="relative h-full p-8 rounded-3xl backdrop-blur-2xl bg-black/50 border border-white/5 overflow-hidden flex flex-col justify-between transition-all duration-500 min-h-[220px]"
              >
                {/* Neon Top Border Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

                {/* ADDED: Lights Animation on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-border-run-h"></div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-border-run-h delay-1000"></div>
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-border-run-v delay-500"></div>
                  <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-border-run-v delay-1500"></div>
                </div>

                {/* Background Glow Animation on Hover */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Header Part: Number & Icon */}
                <div className="flex justify-between items-start">
                  {/* Animated Icon Box */}
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-lg group-hover:border-cyan-500/30 transition-colors">
                    <FaCheckCircle className="relative z-10 text-cyan-400 text-xl group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Numeric Watermark */}
                  <span className="text-3xl font-black text-white group-hover:text-cyan-400/20 transition-colors duration-500 font-mono tracking-tighter select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Main Content */}
                <div className="mt-2">
                  <p className="text-gray-400 group-hover:text-white text-sm md:text-base leading-relaxed font-light tracking-wide transition-colors duration-300 max-w-[95%]">
                    {feature}
                  </p>
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <Link href="/Digital_marketing">
            <button
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Start Growing Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketingSolution;


// "use client";

// import Tilt from "react-parallax-tilt"; // Top par import zaroor karna
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import Link from "next/link";
// import { FaCheckCircle } from "react-icons/fa";

// const MainL = "/website_Recuirment/picture-short.png";

// const MarketingSolution = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 900,
//       once: true,
//     });
//   }, []);

//   const features = [
//     "SEO techniques to increase organic search visibility",
//     "Precision-targeted PPC campaigns that maximize ad spend",
//     "Social media strategies to build stronger customer engagement",
//     "Advanced analytics to track campaign success and growth opportunities",
//   ];

//   return (
//     <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0b0f1a] via-[#0d1324] to-[#05070f]">
//       {/* Background Glow Orbs */}
//       <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-cyan-400/10 blur-[160px] rounded-full pointer-events-none" />

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

//       <div className="relative max-w-7xl mx-auto px-6 md:px-10">

//         {/* Heading */}
//         <div className="text-center max-w-4xl mx-auto">
//           <h2
//             data-aos="fade-up"
//             className="font-extrabold text-white leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
//           >
//             Performance Driven
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block mt-2">
//               Digital Marketing
//             </span>
//           </h2>

//           <p
//             data-aos="fade-up"
//             data-aos-delay="150"
//             className="text-gray-400 mt-6 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
//           >
//             We design marketing systems that generate leads, scale businesses, 
//             and build a strong digital presence.
//           </p>
//         </div>

//         {/* Center Visual */}
//         <div className="relative flex justify-center mt-16">
//           <div className="relative w-full max-w-md md:max-w-lg">
//             <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full scale-110 pointer-events-none"></div>

//             <div className="relative w-full aspect-square max-h-[420px] md:max-h-[500px]">
//               <Image
//                 src={MainL}
//                 fill
//                 sizes="(max-width: 768px) 85vw, 500px"
//                 alt="Marketing growth"
//                 className="object-contain pointer-events-none animate-pulse"
//                 priority
//               />
//             </div>
//           </div>
//         </div>

//         {/* Features Layout (Staggered Modern Cards) */}
//         <div className="relative mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {features.map((feature, index) => (
//             <div
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={index * 120}
//               className={`group p-6 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${
//                 index === 1
//                   ? "lg:mt-10"
//                   : index === 2
//                   ? "lg:-mt-10"
//                   : ""
//               }`}
//             >
//               {/* Glow border */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-blue-500/10 blur-xl"></div>

//               <div>
//                 <FaCheckCircle className="text-cyan-400 text-2xl mb-5 group-hover:scale-110 transition-all duration-300" />

//                 <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light group-hover:text-gray-200 transition-colors">
//                   {feature}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="flex justify-center mt-20">
//           <Link href="/Digital_marketing">
//             <button
//               className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
//             >
//               Start Growing Today
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketingSolution;