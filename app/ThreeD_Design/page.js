"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function ThreeD_Design() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const services = [
    {
      title: "3D Modeling",
      desc: "High precision 3D models designed for products, characters, architecture and complex digital environments."
    },
    {
      title: "3D Rendering",
      desc: "Photorealistic rendering that transforms concepts into highly detailed and visually stunning visuals."
    },
    {
      title: "3D Animation",
      desc: "Dynamic animations designed for product demos, marketing campaigns and storytelling experiences."
    },
    {
      title: "Architectural Visualization",
      desc: "Realistic architectural and interior visualizations for real estate developers and designers."
    },
    {
      title: "3D Product Visualization",
      desc: "High definition product visuals for eCommerce, marketing and brand presentations."
    },
    {
      title: "3D Motion Graphics",
      desc: "Creative 3D motion graphics used for digital ads, brand intros and engaging video content."
    },
  ];

  const features = [
    "Photorealistic Visual Quality",
    "Advanced 3D Software Expertise",
    "Creative Visual Storytelling",
    "High Impact Marketing Visuals",
  ];

  const process = [
    "Concept Research",
    "3D Modeling",
    "Texturing & Lighting",
    "Rendering",
    "Final Optimization",
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
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.03] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-blue-500/[0.04] blur-[180px] rounded-full pointer-events-none" />

      {/* HERO / HEADER SECTION WITH LIVE 3D VIEWPORT */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ DIMENSIONAL CGI ARCHITECTURE ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              3D Design & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">Visualization</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              We translate conceptual mechanics into high-fidelity photorealistic renders and fluid cinematic sequences designed to maximize engagement and product authority.
            </p>
          </div>

          {/* Right Column: Live 3D Viewport Render Engine Simulation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-[380px] aspect-[1.2/1] rounded-xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_60px_rgba(59,130,246,0.05)] p-4 group hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              
              {/* Viewport Control Strip */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500">
                  <span className="text-blue-500">●</span> Camera_Perspective_Top
                </div>
                <div className="flex gap-2 text-[9px] font-mono text-neutral-600">
                  <span>FPS: 60</span>
                  <span className="text-neutral-700">|</span>
                  <span>Cycles</span>
                </div>
              </div>

              {/* Live Wireframe Spatial Display */}
              <div className="my-auto py-6 relative flex items-center justify-center">
                
                {/* Simulated Mesh Network Box */}
                <div className="w-32 h-32 border border-dashed border-blue-500/30 relative flex items-center justify-center transform rotate-12 group-hover:rotate-45 transition-transform duration-1000 ease-out bg-blue-500/[0.01]">
                  
                  {/* Corner Vertex Indicators */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform" />
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white/40 rounded-full" />
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/40 rounded-full" />
                  
                  {/* Internal Core Mesh Nodes */}
                  <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/30 rounded-full animate-ping" />
                  </div>

                  {/* Axis Dimension Lines */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                </div>

                {/* Spatial Cartesian UI Labels */}
                <span className="absolute left-4 top-4 text-[8px] font-mono text-neutral-600">X: +244.12</span>
                <span className="absolute right-4 bottom-4 text-[8px] font-mono text-neutral-600">Y: -108.90</span>
                <span className="absolute right-4 top-4 text-[8px] font-mono text-blue-500/40 font-bold">[Z_AXIS]</span>
              </div>

              {/* Viewport Operational Status */}
              <div className="pt-2.5 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">⚙️</span> SubD Surface: Level 2
                </span>
                <span className="text-neutral-600">Polys: 42,810</span>
              </div>

              {/* Subtle Back Glow */}
              <div className="absolute inset-0 -z-10 bg-blue-500/[0.02] group-hover:bg-blue-500/[0.05] blur-[40px] rounded-xl transition-all duration-700" />
            </div>
          </div>

        </div>
      </div>

      {/* SERVICES METRIC GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 relative z-10 mb-40 md:mb-56">
        {services.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 50}
            className="group relative pt-8 border-t border-white/[0.07] hover:border-blue-500/50 transition-colors duration-500 flex flex-col justify-between min-h-[240px]"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-gray-500 tracking-widest">
                  RENDER // 0{i + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/10 group-hover:bg-blue-500 transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 text-sm font-light leading-relaxed pr-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MERIT MATRIX / FEATURES */}
      <div className="max-w-7xl mx-auto relative z-10 mb-40 md:mb-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-10" data-aos="fade-right">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-4">
              // PRODUCTION TRUTH
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
              Why Our <br />3D Designs <br />Stand Out
            </h3>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="p-8 rounded-2xl bg-[#191919] border border-white/[0.10] hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between h-[180px]"
              >
                <span className="text-blue-500 font-mono text-xs font-bold">[ENGINE_0{i + 1}]</span>
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
            Our 3D Design Process
          </h3>
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// PIPELINE STEPPER v4.0</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group p-6 rounded-xl border border-white/[0.10] bg-[#191919] hover:bg-white/[0.01] transition-all duration-300"
            >
              <div className="text-xs font-mono text-blue-500/50 group-hover:text-blue-400 mb-6 transition-colors duration-300">
                ⚡ MATRIX_0{i + 1}
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
// import React, { useEffect } from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import Image from 'next/image'
// import LetsTalk from '../LetsTalk';
// import Link from 'next/link';

// const ThreeD_Design = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true })
//   }, [])

//   return (
//     <div className="min-h-screen py-24 px-4 md:px-20 bg-white text-black">

//       {/* Top Section */}
//       <div className='flex flex-col md:flex-row h-auto md:h-[70vh]'>

//         {/* Left */}
//         <div className='w-full md:w-1/2 py-10 md:py-20' data-aos="fade-right">
//           <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl font-inter'>
//             3D Design & <br />
//             <span className='text-blue-900'>Visualization</span>
//           </h1>
//           <p className='font-semibold text-sm font-inter pt-5 text-gray-600'>
//             Using industry-leading tools such as Blender, Maya, 3ds Max, and Cinema 4D, we craft high-quality, hyper-realistic 3D visuals that bring complex ideas to life with precision and creativity.
//           </p>

//           <div className='flex flex-col md:flex-row gap-6 md:gap-16 mt-5' data-aos="fade-up">
//             <div className='w-full md:w-1/2 text-gray-800'>
//               <p>
//                 At Virtunests Solutions, we transform concepts into stunning 3D experiences from product visualization to architectural design and full-scale animations ensuring every detail reflects excellence and impact.
//               </p>
//             </div>
//             <div className='w-full md:w-1/3'>
//               <p className='mb-5 font-semibold'>Want to explore how our 3D expertise can empower your business?</p>
//               <Link href="/contact">
//                 <button className='bg-blue-500 text-white px-4 py-2 font-bold'>
//                   LET'S GET IN TOUCH
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right */}
//         <div className='rounded-xl w-full md:w-[45%] flex justify-center items-start mt-10 md:mt-0 ml-0 md:ml-10' data-aos="fade-left">
//           <Image 
//           width={700}
//           height={500}
//           src="/website_Recuirment/3D_Design.Webp" 
//           alt="3D Design" 
//           className='max-w-full sm:h-[75vh] h-[40vh] sm:pl-10 pl-0 sm:pt-10' 
//           />
//         </div>
//       </div>

//       {/* Paragraphs */}
//       <div className='mt-20 space-y-10'>

//         <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
//           1. We utilize platforms like <span className="text-blue-600">Blender</span>, <span className="text-blue-600">Autodesk Maya</span>, <span className="text-blue-600">3ds Max</span>, <span className="text-blue-600">Cinema 4D</span>, and <span className="text-blue-600">Unreal Engine</span> to craft immersive <span className="text-blue-600">3D models</span>, refined <span className="text-blue-600">textures</span>, optimized <span className="text-blue-600">lighting</span>, and high-definition <span className="text-blue-600">animations</span> perfectly aligned with your goals.
//         </p>

//         <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
//           2. Our <span className="text-blue-600">3D design solutions</span> help businesses <span className="text-blue-600">visualize ideas</span> before production, <span className="text-blue-600">enhance marketing campaigns</span>, and deliver <span className="text-blue-600">high-impact visuals</span>. Whether in <span className="text-blue-600">architecture</span>, <span className="text-blue-600">gaming</span>, <span className="text-blue-600">e-commerce</span>, or <span className="text-blue-600">manufacturing</span> — we turn your vision into a <span className="text-blue-600">refined 3D masterpiece</span>.
//         </p>

//       </div>

//       {/* HOW WE DO IT */}
//       <div className='flex flex-col items-center my-20'>
//         <h1 className='text-3xl font-semibold'>HOW WE DO IT!</h1>
//         <p className='text-gray-700 mt-5 text-center max-w-2xl'>
//           At Virtunests Solutions, we turn abstract ideas into visually captivating 3D experiences. We begin by understanding your concept, then craft detailed models with accurate lighting, realistic textures, and refined motion.
//         </p>

//         <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10'>
//           {[
//             "3D Design & Visualization",
//             "3D Modeling",
//             "3D Rendering",
//             "3D Animation",
//             "Architectural & Interior Visualization",
//             "3D Product Visualization",
//             "3D Motion Graphics",
//           ].map((ad, index) => (
//             <div key={index} className='flex px-5 py-5 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 items-center' data-aos="fade-up">
//               <span className='bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2'>{(index + 1).toString().padStart(2, '0')}</span>
//               <h2>{ad}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Detailed Sections */}
//       <div className='space-y-10 mt-10'>
//         {[
//           {
//             title: "3D Design & Visualization:",
//             text: "3D design has become a core element of modern branding, product development, and digital storytelling. It empowers businesses to preview ideas with precision before execution. At Virtunests Solutions, we blend creativity with advanced technology to produce high-quality 3D visuals that captivate audiences and enhance brand value."
//           },
//           {
//             title: "3D Modeling:",
//             text: "We create highly accurate 3D models tailored to your product, architecture, character, or concept. Every model reflects precision and aesthetic quality while aligning with your brand’s goals."
//           },
//           {
//             title: "3D Rendering:",
//             text: "Our photorealistic rendering services bring your product or environment to life in stunning detail — ideal for marketing campaigns, presentations, advertising, and pre-production visualization."
//           },
//           {
//             title: "3D Animation:",
//             text: "We craft dynamic and engaging 3D animations that add movement and storytelling to your concept — perfect for product demos, explainer videos, brand intros, and promotional content."
//           },
//           {
//             title: "Architectural & Interior Visualization:",
//             text: "We deliver detailed and realistic architectural and interior 3D visualizations for designers, builders, and real estate developers, helping them present future projects with clarity and precision."
//           },
//           {
//             title: "3D Product Visualization:",
//             text: "Present your products with unmatched realism through high-definition 3D product visuals — ideal for eCommerce, advertising, packaging, and brand presentations."
//           },
//           {
//             title: "3D Motion Graphics:",
//             text: "We design visually captivating 3D motion graphics that combine creativity with storytelling — from logo animations to brand intros and digital ads."
//           }
//         ].map((item, idx) => (
//           <div key={idx} data-aos="fade-up">
//             <h1 className='font-bold text-2xl mb-3 mt-10'>{item.title}</h1>
//             <p className='text-gray-800'>{item.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* CTA Section */}
//       <LetsTalk />

//     </div>
//   )
// }

// export default ThreeD_Design;
