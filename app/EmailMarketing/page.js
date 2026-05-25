"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function EmailMarketing() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const services = [
    {
      title: "Welcome Emails",
      desc: "Welcome emails greet new subscribers with brand messaging, incentives and clear next steps that build trust and improve retention."
    },
    {
      title: "Newsletter Emails",
      desc: "Newsletters keep your audience informed and engaged while combining valuable content and promotions to increase loyalty."
    },
    {
      title: "Lead Nurturing Emails",
      desc: "Automated email sequences designed to educate prospects, build authority and guide them toward conversion."
    },
    {
      title: "Dedicated Emails",
      desc: "Highly targeted campaigns focused on specific promotions, launches or re-engagement opportunities."
    },
    {
      title: "Invite Emails",
      desc: "Event and webinar invitations designed to maximize RSVPs through persuasive messaging and strong calls-to-action."
    },
    {
      title: "Seasonal Marketing Emails",
      desc: "Seasonal and holiday campaigns crafted to connect with audience sentiment and drive timely conversions."
    },
  ];

  const features = [
    "Audience Segmentation",
    "Conversion Focused Campaigns",
    "Email Automation Strategy",
    "Performance Tracking & Optimization",
  ];

  const process = [
    "Audience Research",
    "Campaign Planning",
    "Creative Email Design",
    "Automation Setup",
    "Performance Analysis",
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

      {/* HERO / HEADER SECTION WITH AUTOMATION ENGINE HUD */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ AUTOMATED RETENTION ARCHITECTURE ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              Email <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">Marketing</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              A strong email marketing strategy starts with personalized, impactful campaigns that connect with audiences and convert them into hyper-loyal recurring customers.
            </p>
          </div>

          {/* Right Column: Live Automation Workflow & Funnel Simulation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-[380px] aspect-[1.2/1] rounded-xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_60px_rgba(59,130,246,0.05)] p-5 group hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              
              {/* Control Bar Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500">
                  <span className="text-blue-500 animate-pulse">●</span> Flow_Trigger_Node
                </div>
                <div className="flex gap-2 text-[9px] font-mono text-neutral-600">
                  <span className="text-emerald-500/80 font-bold">CTR: 24.8%</span>
                  <span className="text-neutral-700">|</span>
                  <span>Live</span>
                </div>
              </div>

              {/* Automation Node Tree View Layout */}
              <div className="my-auto space-y-3 font-mono text-[10px] pl-2 relative">
                
                {/* Step 1: Trigger */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-[8px]">⚡</div>
                  <div className="p-2 bg-white/[0.02] border border-white/[0.05] rounded group-hover:border-blue-500/20 transition-all duration-500">
                    <span className="text-white block font-bold">Trigger: User Signed Up</span>
                    <span className="text-neutral-500 text-[8px]">Source: Landing Page API</span>
                  </div>
                </div>

                {/* Vertical Connector Line 1 */}
                <div className="w-[1px] h-3 bg-gradient-to-b from-blue-500/40 to-neutral-700 ml-2.5" />

                {/* Step 2: Conditional Delay */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 text-[8px]">⏳</div>
                  <div className="p-1.5 px-2 bg-neutral-900 border border-white/[0.03] rounded text-neutral-400">
                    Delay Node: <span className="text-neutral-200">Wait 2 Hours</span>
                  </div>
                </div>

                {/* Vertical Connector Line 2 */}
                <div className="w-[1px] h-3 bg-gradient-to-b from-neutral-700 to-blue-500/40 ml-2.5" />

                {/* Step 3: Action Deliverable */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/60 flex items-center justify-center text-blue-400 text-[8px]">✉️</div>
                  <div className="p-2 bg-white/[0.02] border border-blue-500/40 rounded shadow-sm">
                    <span className="text-white block font-bold">Deliver: Welcome_Seq_01.html</span>
                    <div className="flex gap-2 text-[8px] text-neutral-400 mt-0.5">
                      <span>Open: <span className="text-emerald-400">74.2%</span></span>
                      <span>Bounce: <span className="text-neutral-600">0.1%</span></span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Status Footer Meta */}
              <div className="pt-2.5 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">📊</span> Audience: Segmented_HighIntent
                </span>
                <span className="text-neutral-600">Active: 14,802 users</span>
              </div>

              {/* Accent Atmospheric Backdrop Layer */}
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
                  CAMPAIGN // 0{i + 1}
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
              // PERFORMANCE METRICS
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
              Why Our <br />Email Marketing <br />Works
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
                <span className="text-blue-500 font-mono text-xs font-bold">[PARAM_CORE_0{i + 1}]</span>
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
            Our Email Campaign Process
          </h3>
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// PIPELINE CORE v4.0</span>
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

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// // import { Link } from "react-router-dom";
// // import EmailM from "../assets/website_Recuirment/Email Marketing.jpg";
// import LetsTalk from "../LetsTalk";
// import Image from "next/image";
// import Link from "next/link";

// export default function EmailMarketing() {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
//   }, []);

//   return (
//     <main className="min-h-screen pt-20 bg-white text-black">
//       <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         {/* Hero / Intro */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           {/* Left - Text */}
//           <div data-aos="fade-up" className="space-y-6">
//             <h1 className="font-extrabold text-4xl sm:text-4xl md:text-6xl leading-tight text-slate-900">
//               Email {""}
//               <span className="text-blue-900">Marketing</span>
//             </h1>

//             <p className="text-base sm:text-lg text-gray-500 font-semibold">
//               A strong email marketing strategy starts with personalized, impactful campaigns that connect and convert.
//             </p>

//               <div className='flex flex-col md:flex-row gap-6 md:gap-16 mt-5' data-aos="fade-up">
//               <div className='w-full md:w-1/2 text-gray-800'>
//                 <p>Your emails are often the first impression of your brand. Crafting engaging, goal-driven campaigns gives you a competitive edge in today’s digital world. </p>
//               </div>
//               <div className='w-full md:w-1/3'>
//                 <p className='mb-5 font-semibold'>Want to learn more details and find how we can help?</p>
//                 <Link href="/contact">
//                   <button className='bg-blue-500 text-white px-4 py-2 font-bold'>
//                     LET'S GET IN TOUCH
//                   </button>
//                 </Link>
//               </div>
//             </div>

//           </div>

//       {/* Right */}
//       <div className='w-full md:w-[95%] flex justify-center items-start mt-10 md:mt-0' data-aos="fade-left">
//          <Image
//             src="/website_Recuirment/Email Marketing.jpg"
//             alt="Advertising Management"
//             width={900}
//             height={600}
//             className="rounded-xl shadow-lg w-full sm:w-[80%] lg:w-[50vw] object-cover"
//             />
//       </div>
//         </div>

//         {/* Key Points (with subtle AOS) */}
//         <div className="mt-12 space-y-8">
//           <article data-aos="fade-up" className="prose-sm sm:prose lg:prose-lg max-w-none text-slate-800">
//             <p className="font-semibold">
//               1. <span className="text-blue-600">Email marketing</span> is one of the most effective <span className="text-blue-600">digital channels</span> to build lasting connections.
//               By sending <span className="text-blue-600">professional promotional emails</span> you can showcase <span className="text-blue-600">products</span>, <span className="text-blue-600">services</span>, and <span className="text-blue-600">exclusive offers</span>, driving higher <span className="text-blue-600">engagement</span> and <span className="text-blue-600">conversions</span>.
//             </p>
//           </article>

//           <article data-aos="fade-up" data-aos-delay="120" className="prose-sm sm:prose lg:prose-lg max-w-none text-slate-800">
//             <p className="font-semibold">
//               2. At <b>Virtunests Solutions</b>, we deliver <span className="text-blue-600">conversion-focused email campaigns</span> backed by <span className="text-blue-600">brand strategy</span> and <span className="text-blue-600">market research</span>. Campaigns are designed to <span className="text-blue-600">grab attention</span>, <span className="text-blue-600">nurture trust</span>, and produce <span className="text-blue-600">measurable results</span>.
//             </p>
//           </article>

//           <article data-aos="fade-up" data-aos-delay="240" className="prose-sm sm:prose lg:prose-lg max-w-none text-slate-800">
//             <p className="font-semibold">
//               3. We design multiple campaign types <span className="text-blue-600">welcome</span>, <span className="text-blue-600">newsletter</span>, <span className="text-blue-600">lead-nurturing</span>, <span className="text-blue-600">dedicated</span>, and <span className="text-blue-600">seasonal</span> emails each tailored to your business goals and audience segments.
//             </p>
//           </article>
//         </div>

//         {/* How We Do It - Cards */}
//         <div className="mt-12">
//           <h2 className="text-2xl font-semibold text-slate-900 text-center">HOW WE DO IT!</h2>
//           <p className="text-slate-700 text-center max-w-2xl mx-auto mt-3">
//             Our team builds result-driven email programs from strategy and creative to automation and reporting.
//           </p>

//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               "Welcome Emails",
//               "Newsletter Emails",
//               "Lead Nurturing Emails",
//               "Dedicated Emails",
//               "Invite Emails",
//               "Seasonal Marketing Emails",
//             ].map((title, idx) => (
//               <div
//                 key={title}
//                 data-aos="zoom-in"
//                 data-aos-delay={idx * 80}
//                 className="bg-white rounded-lg shadow-sm p-5 border border-slate-100 hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
//                     {String(idx + 1).padStart(2, "0")}
//                   </div>
//                   <h3 className="font-semibold text-slate-900">{title}</h3>
//                 </div>
//                 <p className="text-sm text-slate-600 mt-3">
//                   {/* short descriptive sentence - keep concise for card */}
//                   We craft targeted content and automation to maximize opens, clicks and conversions.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Detailed sections */}
//         <div className="mt-12 space-y-10">
//           {[
//             {
//               title: "Welcome Emails",
//               text:
//                 "Welcome emails greet new subscribers and customers with brand messaging, incentives, and clear next steps. We design sequences that build trust and improve retention.",
//             },
//             {
//               title: "Newsletter Emails",
//               text:
//                 "Newsletters keep your audience informed and engaged. Our newsletters combine valuable content and promotions to grow loyalty and drive traffic.",
//             },
//             {
//               title: "Lead Nurturing Emails",
//               text:
//                 "Nurture prospects with automated sequences that educate, build authority, and guide users toward conversion.",
//             },
//             {
//               title: "Dedicated Emails",
//               text:
//                 "Targeted campaigns focused on specific segments or promotions — ideal for product launches, promotions, or re-engagement.",
//             },
//             {
//               title: "Invite Emails",
//               text:
//                 "Event or webinar invites designed to boost RSVPs and participation with clear CTAs and persuasive copy.",
//             },
//             {
//               title: "Seasonal Marketing Emails",
//               text:
//                 "Holiday and seasonal campaigns that resonate with audience sentiment and drive timely conversions.",
//             },
//           ].map((s) => (
//             <section key={s.title} data-aos="fade-up" className="bg-white p-6 rounded-lg">
//               <h3 className="font-bold text-2xl text-black mb-2">{s.title}:</h3>
//               <p className="text-slate-700">{s.text}</p>
//             </section>
//           ))}
//         </div>

//         {/* CTA */}
//         <LetsTalk/>
//       </section>
//     </main>
//   );
// }
