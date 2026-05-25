"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function SocialMediaManage() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const services = [
    {
      title: "Analysis of Your Current Social Media Strategy",
      desc: "We analyze your existing strategy to understand what works, what doesn’t, and how it can be optimized for better engagement and results."
    },
    {
      title: "Understanding Your Target Audience",
      desc: "We research audience demographics, interests, goals and pain points to build a clear engagement strategy."
    },
    {
      title: "Selecting the Right Social Platforms",
      desc: "Instead of posting everywhere, we focus on platforms where your audience is most active."
    },
    {
      title: "Building Your Social Media Strategy",
      desc: "We design a complete strategy and content calendar tailored to your business goals."
    },
    {
      title: "Designing Your Social Media Profiles",
      desc: "We align visuals, branding elements and messaging to ensure strong brand identity."
    },
    {
      title: "Developing Social Media Ads",
      desc: "Targeted advertising campaigns designed to increase reach, engagement and conversions."
    },
    {
      title: "Creating Platform-Specific Content",
      desc: "Content tailored for each platform’s audience and algorithm for maximum engagement."
    },
    {
      title: "Monitoring and Optimizing Performance",
      desc: "Continuous analysis and optimization ensure campaigns deliver measurable results."
    },
  ];

  const features = [
    "Strategic Social Media Planning",
    "Creative Content Creation",
    "Targeted Advertising Campaigns",
    "Performance Tracking & Optimization",
  ];

  const process = [
    "Research & Analysis",
    "Strategy Development",
    "Content Creation",
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

      {/* HERO / HEADER SECTION WITH ANALYTICS FEED HUD */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ GLOBAL CONTENT DISTRIBUTION MATRIX ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              Social Media <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">Management</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              Strong social media architectures require engaging assets and computational campaigns that connect natively with platform algorithms to map visitors into brand loyalty.
            </p>
          </div>

          {/* Right Column: Analytics Interface & Engagement Engine HUD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-[380px] aspect-[1.2/1] rounded-xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_60px_rgba(59,130,246,0.05)] p-4 group hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              
              {/* Top Meta Status Strip */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500">
                  <span className="text-blue-500 animate-pulse">●</span> Algorithmic_Feed_Live
                </div>
                <div className="flex gap-2 text-[9px] font-mono text-neutral-600">
                  <span className="text-emerald-400 font-bold">Eng: +14.6%</span>
                  <span className="text-neutral-700">|</span>
                  <span>v4.2</span>
                </div>
              </div>

              {/* Grid Simulator & Performance Visual Block */}
              <div className="my-auto space-y-4">
                
                {/* Micro Metric Blocks */}
                <div className="grid grid-cols-2 gap-3 font-mono text-[10px]">
                  <div className="p-2 border border-white/[0.03] bg-white/[0.01] rounded">
                    <span className="text-neutral-500 block text-[8px] uppercase tracking-wider">Impressions</span>
                    <span className="text-white text-xs font-bold font-sans">142.8K</span>
                  </div>
                  <div className="p-2 border border-white/[0.03] bg-white/[0.01] rounded">
                    <span className="text-neutral-500 block text-[8px] uppercase tracking-wider">Conversion rate</span>
                    <span className="text-blue-400 text-xs font-bold font-sans">4.82%</span>
                  </div>
                </div>

                {/* Simulated Grid Post Matrix Elements */}
                <div className="space-y-2">
                  <span className="text-[8px] font-mono tracking-wider text-neutral-500 uppercase block">Campaign Content Pipeline</span>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-gradient-to-tr from-neutral-900 to-neutral-800 border border-white/[0.05] rounded flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/20 transition-all duration-500">
                      <div className="absolute bottom-1 left-1 font-mono text-[7px] text-blue-400">#01</div>
                      <span className="text-[10px] opacity-20">📊</span>
                    </div>
                    <div className="aspect-square bg-gradient-to-tr from-neutral-900 to-neutral-800 border border-white/[0.05] rounded flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/20 transition-all duration-500">
                      <div className="absolute bottom-1 left-1 font-mono text-[7px] text-blue-400">#02</div>
                      <span className="text-[10px] opacity-20">🎥</span>
                    </div>
                    <div className="aspect-square bg-gradient-to-tr from-neutral-900 to-blue-950/20 border border-blue-500/30 rounded flex items-center justify-center relative overflow-hidden transition-all duration-500">
                      <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-blue-400 animate-ping" />
                      <div className="absolute bottom-1 left-1 font-mono text-[7px] text-blue-400">#03</div>
                      <span className="text-[10px] text-blue-500 opacity-60">✨</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Operational Interface Control Meta */}
              <div className="pt-2.5 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">🎯</span> Reach: Cross_Platform_Unified
                </span>
                <span className="text-neutral-600">Optimized 2m ago</span>
              </div>

              {/* Soft Atmospheric Blur Backdrop */}
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
                  OPERATION // 0{i + 1}
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
              // ALGORITHMIC GROWTH ENGINE
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
              Why Our <br />Social Media <br />Management Works
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
                <span className="text-blue-500 font-mono text-xs font-bold">[METRIC_NODE_0{i + 1}]</span>
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
            Our Social Media Process
          </h3>
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// PIPELINE CORE v5.2</span>
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
// // import { Link } from 'react-router-dom'
// // import Social from "../assets/website_Recuirment/"
// import LetsTalk from '../LetsTalk'
// import Image from 'next/image'
// import Link from 'next/link'

// const SocialMediaManage = () => {
//  useEffect(() => {
//     AOS.init({ duration: 1000, once: true })
//  }, [])

//  return (
//     <div className="min-h-screen py-28 px-4 md:px-20 bg-white text-black">
      
//       {/* Top Section */}
//       <div className='flex flex-col md:flex-row h-auto md:h-[70vh]'>
        
//         {/* Left */}
//         <div className='w-full md:w-1/2 py-10 md:py-20' data-aos="fade-right">
//           <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl font-inter'>
//             Social Media<br />
//             <span className='text-blue-900'>Management</span>
//           </h1>
//           <p className='font-semibold font-inter py-5 text-gray-600'>
//             Strong social media starts with engaging content that connects and converts.
//           </p>

//           <div className='flex flex-col md:flex-row gap-6 md:gap-16 mt-5' data-aos="fade-up">
//             <div className='w-full md:w-1/2 text-gray-800'>
//               <p>With all the daily operations of your business, managing social media accounts and keeping up with a content calendar can be challenging.</p>
//             </div>
//             <div className='w-full md:w-1/3'>
//               <p className='mb-5 font-semibold'>Want to learn more details and find how we can help?</p>
//               <Link href="/contact">
//                 <button className='bg-blue-500 text-white px-4 py-2 font-bold'>
//                   LET'S GET IN TOUCH
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right */}
//         <div className='w-full md:w-1/2 h-full flex justify-center items-start mt-10 md:mt-5' data-aos="fade-left">
//           <Image
//             src="/website_Recuirment/social-media-manager.jpg"
//             alt="Website Development"
//             width={900}
//             height={600}
//             className="rounded-xl shadow-lg w-full sm:w-[80%] lg:w-[50vw] object-cover"
//         />
//         </div>
//       </div>

//       {/* Paragraphs */}
//       <div className='mt-16 space-y-10'>
//         <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
//           1. At Virtunests Solutions, we create 
//           <span className="text-blue-600"> tailored social media strategies</span> aligned with your 
//           <span className="text-blue-600"> business goals</span> and 
//           <span className="text-blue-600"> market challenges</span>. Through 
//           <span className="text-blue-600"> effective campaigns</span>, we help you build a 
//           <span className="text-blue-600"> strong online presence</span>, 
//           <span className="text-blue-600"> generate leads</span>, and 
//           <span className="text-blue-600"> increase conversions</span>, all while maintaining your 
//           <span className="text-blue-600"> brand’s digital reputation</span> at its best.
//         </p>

//         <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
//           2. Whether you run a 
//           <span className="text-blue-600"> B2B</span> or 
//           <span className="text-blue-600"> B2C</span> business, regardless of your size or industry, we offer 
//           <span className="text-blue-600"> customized solutions</span> for everyone. 
//           Backed by 
//           <span className="text-blue-600"> extensive brand management</span> and 
//           <span className="text-blue-600"> market research</span>, our approach ensures 
//           <span className="text-blue-600"> measurable results</span>.
//         </p>
//       </div>

//       {/* HOW WE DO IT */}
//       <div className='flex flex-col items-center my-20'>
//         <h1 className='text-3xl font-semibold'>HOW WE DO IT!</h1>
//         <p className='text-gray-700 mt-5 text-center max-w-2xl'>Our team of experts takes the hassle out of social media management for you. Here’s a quick look at how we make it happen.</p>

//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10'>
//           {[
//             "Analysis of Your Current Social Media Strategy",
//             "Understanding Your Target Audience",
//             "Selecting the Right Social Platforms",
//             "Building Your Social Media Strategy",
//             "Designing Your Social Media Profiles",
//             "Developing Social Media Ads",
//             "Creating Platform-Specific Content",
//             "Monitoring and Optimizing Performance"
//           ].map((step, index) => (
//             <div key={index} className='flex px-5 py-5 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 items-center' data-aos="fade-up">
//               <span className='bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2'>{(index+1).toString().padStart(2,'0')}</span>
//               <h2>{step}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Detailed Paragraphs */}
//       <div className='space-y-10 mt-10'>
//         {[
//           { title: "Analysis of Your Current Social Media Strategy:", text: "We start by analyzing your existing social media strategy (if you have one). What’s working, what’s not, and why isn’t it delivering results? We dive deep into your stats to identify gaps and optimize them according to your goals." },
//           { title: "Understanding Your Target Audience:", text: "Knowing your audience is the foundation of success. We research their demographics, interests, goals, and pain points to build a clear picture of who they are and how best to engage them." },
//           { title: "Selecting the Right Social Platforms:", text: "Posting everywhere doesn’t guarantee results. Once we know your audience, we identify where they spend most of their time online and select the platforms that will give your brand the best reach and impact." },
//           { title: "Building Your Social Media Strategy:", text: "With clear goals and the right platforms, we create a tailored social media strategy and content calendar designed specifically around your business needs and audience." },
//           { title: "Designing Your Social Media Profiles:", text: "Your social media accounts reflect your brand’s identity. We ensure everything from visuals, fonts, and colors to overall branding is consistent and aligned with your brand voice." },
//           { title: "Developing Social Media Ads:", text: "We design and run targeted ad campaigns based on your goals and market challenges. These ads are distributed strategically to maximize reach, engagement, and conversions." },
//           { title: "Creating Platform-Specific Content:", text: "Every platform has a unique audience. We create content tailored to each platform’s users and intent, ensuring higher engagement and stronger connections." },
//           { title: "Monitoring and Optimizing Performance:", text: "Our job doesn’t end with posting. We continuously monitor performance with advanced tools, analyze feedback and data, and optimize strategies to give you a competitive edge." }
//         ].map((item, idx) => (
//           <div key={idx} data-aos="fade-up">
//             <h1 className='font-bold text-2xl mb-3 mt-10'>{item.title}</h1>
//             <p className='text-gray-800'>{item.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* CTA Section */}
//       <LetsTalk/>

//     </div>
//  )
// }

// export default SocialMediaManage
