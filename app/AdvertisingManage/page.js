"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function AdvertisingManage() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const services = [
    {
      title: "Display Ads",
      desc: "Display ads combine images, text and links shown across websites and apps to attract the right audience and drive traffic to your business."
    },
    {
      title: "Shopping Ads",
      desc: "Shopping ads showcase products directly on search engine results with images, pricing and links to boost conversions."
    },
    {
      title: "Video Ads",
      desc: "Short engaging video ads designed for platforms like YouTube to increase brand awareness and attract new customers."
    },
    {
      title: "Local Service Ads",
      desc: "Local service ads help nearby customers discover your business through location-based targeting."
    },
    {
      title: "Application (App) Ads",
      desc: "App advertising campaigns designed to increase downloads and expand your mobile user base."
    },
  ];

  const features = [
    "Targeted Advertising Strategy",
    "Multi-Platform Campaign Management",
    "Creative Ad Development",
    "Conversion Focused Optimization",
  ];

  const process = [
    "Market Research",
    "Campaign Strategy",
    "Ad Creation",
    "Campaign Launch",
    "Performance Optimization",
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

      {/* HERO / HEADER SECTION WITH AD CAMPAIGN HUD */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ COMPUTE BUILT PERFORMANCE ENGINES ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              Advertising <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">Management</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              A strong advertising strategy starts with targeted campaigns designed to maximize reach, generate enterprise leads, and deliver high-impact scalable business results.
            </p>
          </div>

          {/* Right Column: Live ROAS Tracker & Campaign Node HUD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-[380px] aspect-[1.2/1] rounded-xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_60px_rgba(59,130,246,0.05)] p-5 group hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              
              {/* Workspace Header Strip */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500">
                  <span className="text-blue-500 animate-pulse">●</span> Performance_Node_Active
                </div>
                <div className="flex gap-2 text-[9px] font-mono text-neutral-600">
                  <span className="text-emerald-400 font-bold">ROAS: 4.8x Target</span>
                  <span className="text-neutral-700">|</span>
                  <span>Live Bidding</span>
                </div>
              </div>

              {/* Performance Graphics Matrix */}
              <div className="my-auto space-y-4 font-mono">
                
                {/* Core Live Analytics Row */}
                <div className="grid grid-cols-3 gap-2 text-[9px]">
                  <div className="p-2 border border-white/[0.03] bg-white/[0.01] rounded text-center">
                    <span className="text-neutral-500 block text-[7px] uppercase">CPC</span>
                    <span className="text-white text-xs font-bold font-sans">$0.42</span>
                  </div>
                  <div className="p-2 border border-white/[0.03] bg-white/[0.01] rounded text-center">
                    <span className="text-blue-400 block text-[7px] uppercase">CTR</span>
                    <span className="text-white text-xs font-bold font-sans">6.12%</span>
                  </div>
                  <div className="p-2 border border-white/[0.03] bg-white/[0.01] rounded text-center">
                    <span className="text-emerald-400 block text-[7px] uppercase">Conversions</span>
                    <span className="text-emerald-400 text-xs font-bold font-sans">+1.2K</span>
                  </div>
                </div>

                {/* Simulated Multichannel Budget Vector Tracks */}
                <div className="space-y-2 text-[8px]">
                  <div className="flex justify-between text-neutral-400">
                    <span>Search Platform Stream</span>
                    <span className="text-white font-bold">65% Allocated</span>
                  </div>
                  <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[65%] group-hover:bg-blue-400 transition-all duration-1000" />
                  </div>
                </div>

                <div className="space-y-2 text-[8px] opacity-70">
                  <div className="flex justify-between text-neutral-400">
                    <span>Social Display Matrix</span>
                    <span className="text-white font-bold">35% Allocated</span>
                  </div>
                  <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-neutral-700 w-[35%]" />
                  </div>
                </div>

              </div>

              {/* Status Footer Metrics Info */}
              <div className="pt-2.5 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">📈</span> System: Multi-Engine Optimization
                </span>
                <span className="text-neutral-600">A/B Testing Active</span>
              </div>

              {/* Backlit Ambient Aura Layer */}
              <div className="absolute inset-0 -z-10 bg-blue-500/[0.01] group-hover:bg-blue-500/[0.04] blur-[30px] rounded-xl transition-all duration-700" />
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
                  CAMPAIGN TYPE // 0{i + 1}
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
              // SCALABLE ARPU CONVERSIONS
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
              Why Our <br />Advertising <br />Campaigns Work
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
                <span className="text-blue-500 font-mono text-xs font-bold">[NODE_STRATEGY_0{i + 1}]</span>
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
            Our Advertising Process
          </h3>
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// PIPELINE CORE v6.5</span>
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

// "use client"

// import React, { useEffect } from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import LetsTalk from '../LetsTalk'
// import Image from 'next/image'
// import Link from 'next/link'

// const AdvertisingManage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true })
//   }, [])

//   return (
//     <div className="min-h-screen py-20 px-4 md:px-20 bg-white text-black">

//       {/* Top Section */}
//       <div className='flex flex-col md:flex-row h-auto md:h-[70vh]'>

//         {/* Left */}
//         <div className='w-full md:w-1/2 py-10 md:py-20' data-aos="fade-right">
//           <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl font-inter'>
//             Advertising <br />
//             <span className='text-blue-900'>Management</span>
//           </h1>
//           <p className='font-semibold font-inter py-5 text-gray-600'>
//             A strong advertising strategy starts with targeted campaigns that maximize reach and deliver real results.
//           </p>

//           <div className='flex flex-col md:flex-row gap-6 md:gap-16' data-aos="fade-up">
//             <div className='w-full md:w-1/2 text-gray-800'>
//               <p>Our ad management team identifies the key features of your products or services and creates ads that highlight what matters most helping you attract and convert the right customers.</p>
//             </div>
//             <div className='w-full md:w-1/3'>
//               <p className='mb-5 font-semibold'>Want to learn more details and find how we can help?</p>
//               <Link href="/Contact">
//                 <button className='bg-blue-500 text-white px-4 py-2 font-bold'>
//                   LET'S GET IN TOUCH
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right */}
//         <div className='w-full md:w-[35%] flex justify-center items-start mt-10 md:mt-10 md:ml-20 ml-0' data-aos="fade-left">
//           <Image
//             src="/website_Recuirment/Advertising Management.png"
//             alt="Advertising Management"
//             width={450}
//             height={500}
//             className="rounded-xl shadow-lg"
//         />
//         </div>
//       </div>

//       {/* Paragraphs */}
//       <div className='mt-16 space-y-10'>
//         <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
//           1. <span className="text-blue-600">Ad Management Services</span> every 
//           <span className="text-blue-600"> small</span>, 
//           <span className="text-blue-600"> medium</span>, or 
//           <span className="text-blue-600"> large business</span> needs advertising to 
//           <span className="text-blue-600"> boost brand visibility</span>, 
//           <span className="text-blue-600"> generate leads</span>, and 
//           <span className="text-blue-600"> increase conversions</span>. Running ads across different platforms helps you 
//           <span className="text-blue-600"> promote your brand</span> and 
//           <span className="text-blue-600"> reach the right audience</span>.
//         </p>

//         <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
//           2. At Virtunests Solutions, we provide 
//           <span className="text-blue-600"> complete ad management</span> and 
//           <span className="text-blue-600"> monitoring services</span> tailored to your 
//           <span className="text-blue-600"> goals</span>. Our 
//           <span className="text-blue-600"> result-driven campaigns</span> are backed by 
//           <span className="text-blue-600"> detailed brand management</span> and 
//           <span className="text-blue-600"> market research</span> to ensure 
//           <span className="text-blue-600"> maximum impact</span>.
//         </p>
//       </div>

//       {/* HOW WE DO IT */}
//       <div className='flex flex-col items-center my-20'>
//         <h1 className='text-3xl font-semibold'>HOW WE DO IT!</h1>
//         <p className='text-gray-700 mt-5 text-center max-w-2xl'>
//           Here’s an overview of the different types of professional ads we create for our clients, tailored to their specific goals and business needs.
//         </p>

//         <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10'>
//           {[
//             "Display Ads",
//             "Shopping Ads",
//             "Video Ads",
//             "Local Service Ads",
//             "Application (App) Ads"
//           ].map((ad, index) => (
//             <div key={index} className='flex px-5 py-5 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 items-center' data-aos="fade-up">
//               <span className='bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2'>{(index+1).toString().padStart(2,'0')}</span>
//               <h2>{ad}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Detailed Paragraphs */}
//       <div className='space-y-10 mt-10'>
//         {[
//           { title: "Display Ads:", text: "Display ads are a mix of images, text, and links shown on different websites and apps. They help attract your target audience from their favorite platforms and bring them directly to your website or app. At Virtunests Solutions, we create effective display ads that generate leads and boost conversions." },
//           { title: "Shopping Ads:", text: "Shopping ads showcase your products at the top of search engine results with an image, price, and direct link. Since they appear when people are actively searching for products, they are highly effective in turning leads into customers. At Virtunests Solutions, we help businesses rank their shopping ads higher on SERPs to increase visibility and conversions." },
//           { title: "Video Ads:", text: "Video ads are short and engaging videos shown on platforms like YouTube, where large audiences already exist. They are a powerful way to promote your products or services and drive traffic to your website or app. At Virtunests Solutions, our experts create result-driven video ads that expand your reach, generate leads, and improve conversions." },
//           { title: "Local Service Ads:", text: "Local service ads appear on search engines when users look for products or services near your operating area. They include your business name, reviews, hours, and location pin. At Virtunests Solutions, we set up local service ads that help you attract nearby customers, generate more leads, and increase conversions." },
//           { title: "Application (App) Ads:", text: "App ads are designed to promote your mobile application across websites and apps. They include app screenshots, a short description, and a call-to-action button to download or install the app. At Virtunests Solutions, we create tailored app ads that boost downloads, grow your user base, and help your business scale." }
//         ].map((item, idx) => (
//           <div key={idx} data-aos="fade-up">
//             <h1 className='font-bold text-2xl mb-3 mt-10'>{item.title}</h1>
//             <p className='text-gray-800'>{item.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* CTA Section */}
//      <LetsTalk/>

//     </div>
//   )
// }

// export default AdvertisingManage
