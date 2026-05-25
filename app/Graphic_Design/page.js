"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function Graphic_Design() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const services = [
    {
      title: "Logo Design",
      desc: "Custom logo designs that represent your brand identity through strategic typography, color psychology and memorable visual elements."
    },
    {
      title: "Business Card Design",
      desc: "Professional and elegant business cards designed to strengthen your brand identity and leave a lasting impression."
    },
    {
      title: "Packaging & Label Design",
      desc: "Creative packaging and label designs that make your product stand out and increase customer attraction."
    },
    {
      title: "Social Media Creatives",
      desc: "Scroll-stopping social media posts, banners and creatives designed to boost engagement and brand visibility."
    },
    {
      title: "Brand Identity Design",
      desc: "Complete brand identity systems including color palettes, typography and visual guidelines."
    },
    {
      title: "Illustrations & Artwork",
      desc: "Custom illustrations, character art and creative digital artwork tailored to your brand story."
    },
  ];

  const features = [
    "Creative Brand Storytelling",
    "Modern Visual Design",
    "High Impact Marketing Graphics",
    "Consistent Brand Identity",
  ];

  const process = [
    "Brand Research",
    "Concept Design",
    "Creative Development",
    "Design Refinement",
    "Final Delivery",
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

      {/* HERO / HEADER SECTION WITH DYNAMIC VECTOR CANVAS */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ BRAND VISUAL ARCHITECTURE ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              Graphic Design <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">That Builds Brands</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              We engineer functional artwork, visual assets, and unified design ecosystems that communicate value cleanly, making your enterprise unmistakable across the entire landscape.
            </p>
          </div>

          {/* Right Column: Live Vector Handle/Bezier Curve Simulation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-[380px] aspect-[1.2/1] rounded-xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_60px_rgba(59,130,246,0.05)] p-4 group hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              
              {/* Canvas Controls header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500">
                  <span className="text-blue-500 animate-pulse">●</span> Vector_Canvas_01
                </div>
                <div className="flex gap-2 text-[9px] font-mono text-neutral-600">
                  <span>Zoom: 400%</span>
                  <span className="text-neutral-700">|</span>
                  <span>Grid: On</span>
                </div>
              </div>

              {/* Central Bezier/Anchor simulation */}
              <div className="my-auto py-8 relative flex items-center justify-center">
                
                {/* Mathematical Curve lines using CSS shapes */}
                <div className="absolute w-48 h-24 border-t-2 border-l-2 border-dashed border-blue-500/20 rounded-tl-[80px] group-hover:border-blue-400/50 group-hover:rounded-tl-[40px] transition-all duration-1000 ease-in-out transform -translate-x-4 -translate-y-2" />
                
                {/* Central Primary Anchor Point */}
                <div className="w-3 h-3 bg-blue-500 border-2 border-white relative z-10 shadow-md cursor-pointer group-hover:scale-125 transition-transform duration-500">
                  {/* Pull Handles Line */}
                  <div className="absolute w-36 h-[1px] bg-blue-500/60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 group-hover:rotate-12 transition-transform duration-1000 ease-in-out">
                    
                    {/* Left Handle Node */}
                    <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-[#0a0a0a] border border-blue-500 rounded-full" />
                    {/* Right Handle Node */}
                    <div className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-[#0a0a0a] border border-blue-500 rounded-full" />
                  </div>
                </div>

                {/* Sub Anchor Point */}
                <div className="absolute right-12 top-6 w-2 h-2 bg-[#0a0a0a] border border-blue-500/60" />
                <div className="absolute left-12 bottom-6 w-2 h-2 bg-[#0a0a0a] border border-blue-500/60" />

                {/* Dimensions HUD overlays */}
                <span className="absolute left-4 top-4 text-[8px] font-mono text-neutral-600">P1: (124.5 , 310.2)</span>
                <span className="absolute right-4 bottom-4 text-[8px] font-mono text-neutral-600">Angle: 14.82°</span>
              </div>

              {/* Canvas Meta status line */}
              <div className="pt-2.5 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">✦</span> Tool: Pen_Path
                </span>
                <span className="text-neutral-600">Nodes: 08 (Closed)</span>
              </div>

              {/* Subtle Ambient Layer */}
              <div className="absolute inset-0 -z-10 bg-blue-500/[0.01] group-hover:bg-blue-500/[0.04] blur-[30px] rounded-xl transition-all duration-700" />
            </div>
          </div>

        </div>
      </div>

      {/* SERVICES MATRIC GRID */}
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
                  ASSET // 0{i + 1}
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
              // DESIGN INTELLIGENCE
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
              Why Our <br />Graphic Designs <br />Stand Out
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
                <span className="text-blue-500 font-mono text-xs font-bold">[METRIC_0{i + 1}]</span>
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
            Our Design Process
          </h3>
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// SYSTEM PIPELINE v2.1</span>
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
                ⚡ STAGE_0{i + 1}
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
// import Link from 'next/link';
// import LetsTalk from '../LetsTalk'


// export default function Graphic_Design() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);
  
//   return (
//     <div className="min-h-screen py-24 px-5 md:px-20 pt-40 bg-white text-black">

//       {/* ======= HERO SECTION ======= */}
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-10 space-y-10 md:space-y-0">
        
//         {/* LEFT CONTENT */}
//         <div className="w-full md:w-[55%]" data-aos="fade-right">
//           <h1 className="font-extrabold text-4xl md:text-5xl font-inter leading-snug">
//             Graphic Designing <br />
//             <span className="text-blue-900">and Illustrations</span>
//           </h1>

//           <p className="font-semibold font-inter text-md py-5 text-gray-600">
//             Creative & custom designs to make your brand stand out. Logos, brochures, social media content, and more.
//           </p>

//           <div className="md:flex items-start md:space-x-8 space-y-5 md:space-y-0" data-aos="fade-up">
//             <div className="text-gray-800 md:w-[60%]">
//               <p>
//                 Your brand’s visuals create the first impression of your business, and having creative, purpose-driven graphic design gives you a competitive edge in today’s digital world.
//               </p>
//             </div>

//             <div className="md:w-[44%]">
//               <p className="mb-5 font-semibold">
//                 Want to learn more details and find how we can help?
//               </p>
//               <Link href="/contact">
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 font-bold transition-all duration-300">
//                   LET'S GET IN TOUCH
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="w-full md:w-[55%]" data-aos="fade-left">
//         <Image
//         src="/website_Recuirment/graphicdesign.png"
//         alt="Graphic_Designing"
//         width={900}
//         height={600}
//         className="rounded-xl shadow-lg w-full sm:w-[80%] lg:w-[50vw] object-cover"
//         />
//         </div>
//       </div>

//       {/* ======= PARAGRAPHS ======= */}
//       <div className="text-gray-700 mt-18 space-y-8 leading-relaxed font-semibold">
//         <p data-aos="fade-up">
//           1. <span className="text-blue-600">Graphic design</span> and 
//           <span className="text-blue-600"> illustration</span> are powerful media that capture attention and communicate your 
//           <span className="text-blue-600"> brand’s message</span> clearly. Using creative tools and 
//           <span className="text-blue-600"> techniques</span>, we craft 
//           <span className="text-blue-600"> stunning visuals</span> that bring your ideas to life.
//         </p>

//         <p data-aos="fade-up" data-aos-delay="200">
//           2. At Virtunests Solutions, we create 
//           <span className="text-blue-600"> innovative</span> 2D & 3D artwork, 
//           <span className="text-blue-600"> typography</span>, and 
//           <span className="text-blue-600"> motion graphics</span> that enhance your 
//           <span className="text-blue-600"> brand identity</span> and drive 
//           <span className="text-blue-600"> meaningful engagement</span>.
//         </p>
//       </div>

//       {/* ======= HOW WE DO IT ======= */}
//       <div className="flex flex-col items-center my-20" data-aos="fade-up">
//         <h1 className="text-3xl font-semibold">HOW WE DO IT!</h1>
//         <p className="text-gray-700 mt-5 text-center max-w-3xl">
//           Our team specializes in diverse visual styles from clip art to 3D motion designs. Here’s a glimpse of how we bring creativity and precision together in every project.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full">
//           {[
//             "Logo Design",
//             "Business Card Design",
//             "Packaging & Label Design",
//             "Social Media Creatives & Banners",
//             "Digital Marketing Ads",
//             "Brand Identity Design",
//             "Stationery Design",
//             "Brochures & Catalogs",
//             "Posters & Flyers",
//             "Illustrations & Custom Artwork",
//           ].map((item, i) => (
//             <div
//               key={i}
//               data-aos="zoom-in"
//               data-aos-delay={i * 100}
//               className="flex items-center px-5 py-4 border border-gray-300 text-lg font-bold text-gray-800 bg-gray-100 rounded-lg hover:bg-blue-50 transition-all duration-300"
//             >
//               <span className="bg-blue-500 rounded-full px-2 py-1.5 text-white mr-3">
//                 {String(i + 1).padStart(2, '0')}
//               </span>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ======= DETAILED PARAGRAPHS ======= */}
//       <div className="space-y-10 text-gray-800" data-aos="fade-up">
//         {[
//           {
//             title: "Logo Design:",
//             text: "Your logo is the face of your brand the first thing customers notice and remember. It represents your values, story, and identity. At Virtunests Solutions, we craft professional and custom logo designs that perfectly align with your brand’s personality through balanced typography, color psychology, and visual elements that leave a lasting impression."
//           },
//           {
//             title: "Business Card Design:",
//             text: "A business card is more than just contact information it’s a handshake in printed form. Our team designs elegant, creative, and professional business cards that strengthen your brand identity and help you make meaningful connections in every meeting."
//           },
//           {
//             title: "Packaging & Label Design:",
//             text: "Product packaging is a silent salesperson it speaks volumes before a word is said. We create unique, professional, and visually appealing packaging and label designs that make your products stand out, enhance customer appeal, and build trust through thoughtful aesthetics and structure."
//           },
//           {
//             title: "Social Media Creatives & Banners:",
//             text: "Social media is all about standing out in a sea of content. We design scroll-stopping social media posts, stories, and banners that capture attention instantly, communicate your brand message effectively, and boost engagement across all digital platforms."
//           },
//           {
//             title: "Digital Marketing Ads:",
//             text: "From Google and Meta ads to display campaigns, we create attention-grabbing, conversion-driven ad visuals that represent your brand authentically and increase visibility. At Virtunests Solutions, our focus is to make your digital presence unforgettable."
//           },
//           {
//             title: "Brand Identity Design:",
//             text: "A strong brand identity is the foundation of recognition and trust. We design complete brand identity kits, including color palettes, typography systems, and visual guidelines that ensure consistent and professional brand representation across all touchpoints."
//           },
//           {
//             title: "Stationery Design:",
//             text: "Professional stationery elevates your brand image. We design letterheads, envelopes, notepads, and folders that perfectly reflect your corporate identity helping your brand look polished, consistent, and memorable."
//           },
//           {
//             title: "Brochures & Catalogs:",
//             text: "Printed materials still hold power when designed right. We create high-quality brochures and catalogs that combine creative layouts, visuals, and persuasive copy to communicate your brand story and showcase your offerings effectively."
//           },
//           {
//             title: "Posters & Flyers:",
//             text: "Whether it’s a product launch, event, or campaign, our custom-designed posters and flyers are tailored to grab attention, spread your message, and drive engagement both online and offline."
//           },
//           {
//             title: "Illustrations & Custom Artwork:",
//             text: "We also specialize in custom illustrations, character art, and concept-based visuals that make your content unique and storytelling more engaging from editorial illustrations to creative digital artwork tailored to your brand style."
//           }
//         ].map((item, i) => (
//           <div key={i}>
//             <h1 className="font-bold text-2xl mb-3">{item.title}</h1>
//             <p>{item.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* ======= CTA SECTION ======= */}
//       <LetsTalk/>

//     </div>
//   )
// }
