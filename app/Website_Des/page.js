"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function Website_Des() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const services = [
    {
      title: "E-Commerce Websites",
      desc: "An e-commerce website allows your business to reach a wider audience and operate 24/7 with lower costs. At Virtunests Solutions, we design secure, user-friendly e-commerce websites for smooth shopping experiences.",
    },
    {
      title: "Business Blogs",
      desc: "Blogs are key to building credibility and SEO growth. Our experts craft content that increases engagement, improves visibility, and builds customer trust.",
    },
    {
      title: "Portfolio Websites",
      desc: "A professional portfolio builds trust and showcases your expertise. Virtunests Solutions designs elegant, high-converting portfolios to highlight your work.",
    },
    {
      title: "Online Booking Websites",
      desc: "We create efficient booking platforms with secure payment integration and automation to help you manage appointments and leads with ease.",
    },
    {
      title: "Educational Websites",
      desc: "From online classes to assessments, our educational websites make learning interactive, accessible, and engaging for students and educators alike.",
    },
    {
      title: "Non-Profit Organization Websites",
      desc: "We help nonprofits connect with donors, share their mission, and grow their impact through compelling website design and storytelling.",
    },
  ];

  const features = [
    "Fast Loading Speed",
    "SEO Optimized Structure",
    "Mobile Responsive Design",
    "Secure & Scalable Architecture",
  ];

  const process = [
    "Research & Planning",
    "UI/UX Design",
    "Development",
    "Testing & Optimization",
    "Launch & Support",
  ];

  return (
    <section className="relative bg-[#0a0a0a] text-white py-28 md:py-40 lg:py-52 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 overflow-hidden">
      
      {/* Editorial Structural Gridlines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-[0.02] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <div className="w-[1px] bg-white h-full" />
        <div className="w-[1px] bg-white h-full hidden md:block" />
        <div className="w-[1px] bg-white h-full hidden lg:block" />
        <div className="w-[1px] bg-white h-full" />
      </div>

      {/* Deep Ambient Aura */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.04] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-blue-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      {/* HERO / HEADER SECTION WITH LIVE BROWSER BLUEPRINT */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ EXPERT CAPABILITIES ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              We Build Websites <br />
              That Help Businesses <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">Grow Online</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              From enterprise infrastructure to immersive consumer experiences, we develop hyper-optimized digital ecosystems designed to dominate organic search and amplify brand power.
            </p>
          </div>

          {/* Right Column: Hyper-Upgraded Live Browser Framework */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-[420px] aspect-[1.25/1] rounded-xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_60px_rgba(59,130,246,0.05)] p-4 group hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              
              {/* Browser Header Controls */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 group-hover:bg-red-500/50 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/40 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500/40 transition-colors" />
                </div>
                <div className="w-48 h-5 bg-white/[0.02] rounded-md border border-white/[0.04] flex items-center justify-between px-3 text-[9px] font-mono text-neutral-500 tracking-tight">
                  <span className="text-blue-500/60">🔐</span>
                  <span className="truncate">virtunests.com/production</span>
                  <span className="text-neutral-700 text-[8px]">⚡</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                </div>
              </div>

              {/* Engine Canvas Layer */}
              <div className="my-auto py-4 relative space-y-3.5">
                
                {/* Simulated Terminal Stats Overlay */}
                <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500 px-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    SSR // ACTIVE
                  </span>
                  <span className="text-blue-400 group-hover:text-blue-300 transition-colors">TTFB: 8ms</span>
                </div>

                {/* Core Component Tree Module */}
                <div className="border border-white/[0.05] group-hover:border-blue-500/20 rounded-lg p-3 bg-white/[0.01] relative space-y-2.5 transition-colors duration-500">
                  <div className="flex justify-between items-center text-[8px] font-mono text-neutral-600">
                    <span>&lt;app_container&gt;</span>
                    <span className="text-blue-500/40 group-hover:text-blue-500/70 transition-colors">[98% Performance]</span>
                  </div>

                  {/* Simulated DOM Micro Elements */}
                  <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                  <div className="h-1.5 w-full bg-white/5 rounded-full" />
                  
                  {/* Grid System Engineering Mapping */}
                  <div className="grid grid-cols-4 gap-2 pt-1.5">
                    {[100, 200, 300, 400].map((delay, index) => (
                      <div 
                        key={index}
                        className={`h-7 rounded border flex flex-col justify-between p-1 font-mono transition-all duration-500 ${
                          index === 3 
                            ? "bg-blue-500/[0.03] border-blue-500/30 text-blue-400 scale-105" 
                            : "bg-white/[0.01] border-white/[0.04] text-neutral-600"
                        }`}
                      >
                        <span className="text-[6px] opacity-4xl">0{index + 1}</span>
                        <span className="text-[8px] text-right font-bold">
                          {index === 3 ? "DOM" : "DIV"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Source Micro Line */}
                <div className="text-[8px] font-mono text-neutral-600 bg-black/40 p-1.5 rounded border border-white/[0.03] truncate">
                  <span className="text-blue-400">export default async function</span> <span className="text-yellow-200">RenderEngine()</span> {"{ ... }"}
                </div>
              </div>

              {/* Status Operational Bar */}
              <div className="pt-2.5 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">⚡</span> Vercel Pipeline Online
                </span>
                <span className="text-neutral-600">v14.2.0</span>
              </div>

              {/* Decorative Blur Backing */}
              <div className="absolute inset-0 -z-10 bg-blue-500/[0.02] group-hover:bg-blue-500/[0.05] blur-[40px] rounded-xl transition-all duration-700" />
            </div>
          </div>

        </div>
      </div>

      {/* AGENCY-GRADE CAPABILITIES LAYER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 relative z-10 mb-40 md:mb-56">
        {services.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 50}
            className="group relative pt-8 border-t border-white/[0.07] hover:border-blue-500/50 transition-colors duration-500 flex flex-col justify-between min-h-[250px]"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-gray-500 tracking-widest">
                  PHASE // 0{i + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/10 group-hover:bg-blue-500 transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 text-sm font-light leading-relaxed pr-4">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* WHY WE STAND OUT */}
      <div className="max-w-7xl mx-auto relative z-10 mb-40 md:mb-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-10" data-aos="fade-right">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-4">
              // MERIT MATRIX
            </span>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase leading-none">
              Why Our <br />Websites <br />Stand Out
            </h3>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="p-8 rounded-2xl bg-[#191919] border border-white/[0.20] hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between h-[180px]"
              >
                <span className="text-blue-500 font-mono text-xs font-bold">[0{i + 1}]</span>
                <h4 className="text-xl font-bold tracking-wide text-gray-200">
                  {item}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PIPELINE ARCHITECTURE */}
      <div className="max-w-7xl mx-auto relative z-10 mb-40 md:mb-52">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.05] pb-6">
          <h3 className="text-3xl font-extrabold uppercase tracking-tight" data-aos="fade-up">
            Our Development Process
          </h3>
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// PIPELINE SYNC v1.0</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group p-6 rounded-xl border border-white/[0.20] bg-[#191919] hover:bg-white/[0.01] transition-all duration-300"
            >
              <div className="text-xs font-mono text-blue-500/50 group-hover:text-blue-400 mb-6 transition-colors duration-300">
                WORKFLOW_0{i + 1}
              </div>
              <p className="text-base font-bold tracking-wide text-gray-300 group-hover:text-white transition-colors">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CONVERSION PANEL */}
      <div 
        className="max-w-7xl mx-auto relative z-10"
        suppressHydrationWarning={true}
      >
        <LetsTalk />
      </div>

    </section>
  );
}

// "use client";

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import Link from "next/link";
// import LetsTalk from "../LetsTalk";


// const Website_Des = () => {

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="min-h-screen md:py-36 py-24 px-4 sm:px-8 md:px-14 lg:px-20 bg-white text-black">

//       {/* Top Section */}
//       <div className="flex flex-col lg:flex-row items-center gap-10">

//         {/* Left Side */}
//         <div className="w-full lg:w-1/2" data-aos="fade-right">
//           <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl font-inter leading-tight">
//             Website <br />
//             <span className="text-blue-900">Development</span>
//           </h1>
//           <p className="font-semibold font-inter text-base py-5 text-gray-600">
//             Every successful brand starts with a powerful website built to engage,
//             perform, and grow your digital presence.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6" data-aos="fade-up">
//             <p className="text-gray-800 sm:w-[50%]">
//               Your website is often the first impression of your business, and
//               having a well-built, goal-oriented site gives you a competitive edge
//               in today’s digital world.
//             </p>

//             <div className="sm:w-[35%] sm:ml-10">
//               <p className="mb-4 font-semibold">
//                 Want to learn more details and find how we can help?
//               </p>

//               <Link href="/contact">
//                 <button className="bg-blue-500 text-white px-5 py-2 font-bold hover:bg-blue-600 transition">
//                   LETS GET IN TOUCH
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div
//           className="w-full lg:w-[45vw] lg:h-[63vh] h-full flex justify-center"
//           data-aos="fade-left"
//         >
//           <Image
//             src="/website_Recuirment/Website_img.jpeg"
//             alt="Website Development"
//             width={900}
//             height={600}
//             className="rounded-xl shadow-lg w-full sm:w-[80%] lg:w-[50vw] object-cover"
//           />
//         </div>
//       </div>

//       {/* Paragraph Section */}
//       <div className="mt-20 space-y-10 text-gray-700">
//         <p className="font-semibold leading-relaxed" data-aos="fade-up">
//           1. At <b>Virtunests Solutions</b>, our development team consists of dedicated
//           front-end, back-end, and full-stack developers with expertise in
//           multiple programming languages and frameworks. From{" "}
//           <span className="text-blue-600">HTML</span>,{" "}
//           <span className="text-blue-600">CSS</span>,{" "}
//           <span className="text-blue-600">JavaScript</span>, and{" "}
//           <span className="text-blue-600">React</span> to{" "}
//           <span className="text-blue-600">Node.js</span> and{" "}
//           <span className="text-blue-600">WordPress</span>, we cover every layer of web
//           development.
//         </p>

//         <p className="font-semibold leading-relaxed" data-aos="fade-up">
//           2. Whether you run a <span className="text-blue-600">B2B</span> or{" "}
//           <span className="text-blue-600">B2C</span> business, regardless of your
//           industry, we create <span className="text-blue-600">tailored solutions</span>{" "}
//           that drive measurable results through{" "}
//           <span className="text-blue-600">research</span> and{" "}
//           <span className="text-blue-600">brand-focused strategies</span>.  
//         </p>
//       </div>

//       {/* HOW WE DO IT Section */}
//       <div className="flex flex-col items-center my-20" data-aos="fade-up">
//         <h1 className="text-3xl sm:text-4xl font-semibold">HOW WE DO IT!</h1>
//         <p className="text-gray-700 mt-5 text-center text-sm sm:text-base px-4">
//           Here’s an overview of the different types of professional websites...
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full max-w-5xl">
//           {[
//             "E-Commerce",
//             "Business Blogs",
//             "Portfolio Websites",
//             "Online Booking Websites",
//             "Educational Websites",
//             "Non-Profit Organization Websites",
//           ].map((item, i) => (
//             <div
//               key={i}
//               data-aos="zoom-in"
//               className="px-5 py-5 border border-gray-300 text-lg font-bold text-gray-800 bg-gray-100 flex items-center rounded-lg shadow-sm hover:bg-blue-50 transition"
//             >
//               <span className="bg-blue-500 rounded-full px-2 py-1.5 text-white mr-2">
//                 {String(i + 1).padStart(2, "0")}
//               </span>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Info Paragraphs */}
//       <div className="mt-10 space-y-10">
//         {[
//             {
//                 title: "E-Commerce Websites:",
//                 text: "An e-commerce website allows your business to reach a wider audience and operate 24/7 with lower costs. At Virtunests Solutions, we design secure, user-friendly e-commerce websites for smooth shopping experiences."
//             },
//             {
//                 title: "Business Blogs:",
//                 text: "Blogs are key to building credibility and SEO growth. Our experts craft content that increases engagement, improves visibility, and builds customer trust."
//             },
//             {
//                 title: "Portfolio Websites:",
//                 text: "A professional portfolio builds trust and showcases your expertise. Virtunests Solutions designs elegant, high-converting portfolios to highlight your work."
//             },
//             {
//                 title: "Online Booking Websites:",
//                 text: "We create efficient booking platforms with secure payment integration and automation to help you manage appointments and leads with ease."
//             },
//             {
//                 title: "Educational Websites:",
//                 text: "From online classes to assessments, our educational websites make learning interactive, accessible, and engaging for students and educators alike."
//             },
//             {
//                 title: "Non-Profit Organization Websites:",
//                 text: "We help nonprofits connect with donors, share their mission, and grow their impact through compelling website design and storytelling."
//             }
//         ].map((item, i) => (
//           <div key={i} data-aos="fade-up">
//             <h1 className="font-bold text-2xl mb-3">{item.title}</h1>
//             <p className="text-gray-800">{item.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* CTA Section */}
//       <LetsTalk />
//     </div>
//   );
// };

// export default Website_Des;
