"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function ContentCopywriting() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const services = [
    {
      title: "Website Content",
      desc: "SEO-optimized website content that builds trust, communicates your brand message clearly and drives conversions."
    },
    {
      title: "Business Blogs",
      desc: "Professional business blogs designed to increase organic traffic, improve SEO rankings and build authority."
    },
    {
      title: "Blog Posts & Articles",
      desc: "Engaging and informative blog posts crafted to educate readers while strengthening your brand presence."
    },
    {
      title: "Guest Posting",
      desc: "Strategic guest posts published on high-authority platforms to improve brand credibility and backlinks."
    },
    {
      title: "Product Descriptions",
      desc: "Persuasive product descriptions that highlight product benefits and convert visitors into customers."
    },
    {
      title: "SEO Content Writing",
      desc: "High-quality SEO content that ranks on search engines while delivering value to your audience."
    },
  ];

  const features = [
    "SEO Optimized Content",
    "Clear Brand Messaging",
    "Audience Focused Writing",
    "Conversion Driven Copy",
  ];

  const process = [
    "Research & Strategy",
    "Content Planning",
    "Writing & Optimization",
    "Editing & Review",
    "Publishing",
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

      {/* HERO / HEADER SECTION WITH LIVE TEXT RUNTIME HUD */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ ALGORITHMIC NARRATIVE ARCHITECTURE ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              Content Writing & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">Copywriting</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              Deliver powerful words that engage, persuade and convert. From long-form thought leadership to high-intent conversion copy, we engineer language that builds absolute market authority.
            </p>
          </div>

          {/* Right Column: Live Text Editor & SEO Metrics Engine Simulation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-[380px] aspect-[1.2/1] rounded-xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_60px_rgba(59,130,246,0.05)] p-4 group hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              
              {/* Workspace Meta Control Strip */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500">
                  <span className="text-blue-500 animate-pulse">●</span> Copy_Optimizer.md
                </div>
                <div className="flex gap-2 text-[9px] font-mono text-neutral-600">
                  <span className="text-emerald-500/80 font-bold">SEO: 98%</span>
                  <span className="text-neutral-700">|</span>
                  <span>UTF-8</span>
                </div>
              </div>

              {/* Live Interactive Markdown Copy Fields */}
              <div className="my-auto space-y-3 font-mono text-xs text-neutral-400 pl-2">
                <div className="flex gap-1.5 items-center">
                  <span className="text-blue-500 font-bold text-[10px]">H1</span>
                  <span className="text-white font-sans font-bold text-sm tracking-tight border-r border-blue-500 animate-pulse pr-1">Scale Your Performance Growth</span>
                </div>
                
                <div className="space-y-1.5 pt-1 opacity-70">
                  <div className="h-[2px] bg-gradient-to-r from-neutral-500 to-neutral-800 w-[90%] rounded" />
                  <div className="h-[2px] bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-800 w-[95%] rounded" />
                  <div className="h-[2px] bg-gradient-to-r from-neutral-500 to-neutral-800 w-[60%] rounded" />
                </div>

                {/* Live Keywords Counter HUD */}
                <div className="pt-3 grid grid-cols-3 gap-2 text-[8px] tracking-wide text-neutral-500">
                  <div className="p-1.5 border border-white/[0.03] bg-white/[0.01] rounded">
                    <span className="text-blue-400 block font-bold">#conversion</span>
                    <span className="text-[10px] text-neutral-300 font-sans font-bold">5.2% density</span>
                  </div>
                  <div className="p-1.5 border border-white/[0.03] bg-white/[0.01] rounded">
                    <span className="text-blue-400 block font-bold">#authority</span>
                    <span className="text-[10px] text-neutral-300 font-sans font-bold">4/4 used</span>
                  </div>
                  <div className="p-1.5 border border-white/[0.03] bg-white/[0.01] rounded">
                    <span className="text-neutral-500 block font-bold">Readability</span>
                    <span className="text-[10px] text-emerald-400 font-sans font-bold">Grade A</span>
                  </div>
                </div>
              </div>

              {/* Operational Status Panel */}
              <div className="pt-2.5 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">✍️</span> Words: 1,420
                </span>
                <span className="text-neutral-600">Plagiarism: 0% Unique</span>
              </div>

              {/* Subtle Layer Ambient Backdrop */}
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
                  MODULE // 0{i + 1}
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
              // REVENUE DRIVEN COPY
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
              Why Our <br />Content Writing <br />Stand Out
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
                <span className="text-blue-500 font-mono text-xs font-bold">[MATRIX_INDEX_0{i + 1}]</span>
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
            Our Content Creation Process
          </h3>
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// SYSTEM PIPELINE v3.0</span>
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
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import LetsTalk from "../LetsTalk";
// import Image from "next/image";
// import Link from "next/link";

// export default function ContentCopywriting() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="min-h-screen py-28 px-5 md:px-20 pt-40 bg-white text-black">
//       {/* Top Section */}
//       <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
//         {/* Left Text Section */}
//         <div className="w-full lg:w-1/2 space-y-5" data-aos="fade-right">
//           <h1 className="font-extrabold text-4xl md:text-5xl font-inter">
//             Content Writing & <br />
//             <span className="text-blue-900">Copywriting</span>
//           </h1>

//           <p className="font-semibold font-inter text-sm md:text-base text-gray-600">
//             Deliver powerful words that engage, persuade, and convert. From blogs to sales copy,
//             we craft content that drives results.
//           </p>

//           <div className="flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up">
//             <div className="md:w-[60%] text-gray-800 text-sm md:text-base">
//               <p>
//                 Our team at Virtunests Solutions crafts impactful content and persuasive sales copy
//                 backed by in-depth research and strategic brand management.
//               </p>
//             </div>

//             <div className="md:w-[37%]">
//               <p className="mb-4 font-semibold">Want to learn more details and find how we can help?</p>
//               <Link href="/contact">
//                 <button className="bg-blue-500 text-white px-5 py-2 font-bold hover:bg-blue-600 transition-all duration-300">
//                   LET'S GET IN TOUCH
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div className="w-full lg:w-1/2" data-aos="fade-left">
//           <Image
//             src="/website_Recuirment/Content.png"
//             alt="Content Writing & Copywriting"
//             width={900}
//             height={500}
//             className="rounded-xl shadow-lg w-full"
//         />
//         </div>
//       </div>

//       {/* Info Paragraphs */}
//       <div className="space-y-8 mt-16 text-gray-700 text-sm md:text-base leading-relaxed">
//         <p data-aos="fade-up">
//           1. Writing is a powerful tool that helps brands build a
//           <span className="text-blue-600"> strong online presence</span>, connect emotionally, and reach a
//           <span className="text-blue-600"> wider audience</span>. It should
//           <span className="text-blue-600"> deliver a clear message</span>,
//           <span className="text-blue-600"> engage readers</span>, and turn leads into
//           <span className="text-blue-600"> loyal customers</span>.
//         </p>

//         <p data-aos="fade-up" data-aos-delay="200">
//           2. At Virtunests Solutions, we create
//           <span className="text-blue-600"> high-quality content writing</span> and
//           <span className="text-blue-600"> copywriting</span> to
//           <span className="text-blue-600"> strengthen your digital presence</span> and
//           <span className="text-blue-600"> boost conversions</span>.
//         </p>
//       </div>

//       {/* HOW WE DO IT */}
//       <div className="text-center my-20" data-aos="fade-up">
//         <h1 className="text-3xl font-bold">HOW WE DO IT!</h1>
//         <p className="text-gray-700 mt-3 text-sm md:text-base">
//           Our professionals handle SEO-focused content writing & copywriting needs content that not only ranks but converts.
//         </p>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 justify-items-center">
//         {[
//           "Website Content",
//           "Business Blogs",
//           "Blog Posts & Articles",
//           "Guest Posting",
//           "Product Descriptions",
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="w-full sm:w-[80%] flex items-center gap-3 px-6 py-5 border border-gray-300 text-lg font-bold text-gray-800 bg-gray-100 rounded-lg hover:bg-blue-50 transition-all duration-300"
//             data-aos="zoom-in"
//             data-aos-delay={i * 100}
//           >
//             <span className="bg-blue-500 flex items-center justify-center rounded-full w-8 h-8 text-white text-sm font-semibold shrink-0">
//               {`0${i + 1}`}
//             </span>
//             <p className="text-base md:text-lg text-gray-800">{item}</p>
//           </div>
//         ))}
//       </div>

//       </div>

//       {/* Bottom Details */}
//       <div className="space-y-10 text-gray-800 text-sm md:text-base leading-relaxed">
//         <section data-aos="fade-up">
//           <h1 className="font-bold text-2xl my-3">Website Content:</h1>
//           <p>
//             Your website content shapes your brand’s online presence and drives conversions. We craft content that informs, educates,
//             and builds trust while supporting SEO success.
//           </p>
//         </section>

//         <section data-aos="fade-up" data-aos-delay="100">
//           <h1 className="font-bold text-2xl my-3">Social Media Content:</h1>
//           <p>
//             We design content strategies that boost awareness, generate leads, and convert prospects into loyal customers with engaging visuals and messages.
//           </p>
//         </section>

//         <section data-aos="fade-up" data-aos-delay="200">
//           <h1 className="font-bold text-2xl my-3">Blog Posts & Articles:</h1>
//           <p>
//             Regular blogs enhance your visibility, boost SEO, and position your brand as an authority. We deliver engaging, optimized, and impactful content.
//           </p>
//         </section>

//         <section data-aos="fade-up" data-aos-delay="300">
//           <h1 className="font-bold text-2xl my-3">Guest Posting:</h1>
//           <p>
//             Expand your reach and credibility through strategic guest posts on top platforms — driving authority and backlinks to your site.
//           </p>
//         </section>

//         <section data-aos="fade-up" data-aos-delay="400">
//           <h1 className="font-bold text-2xl my-3">Product Descriptions:</h1>
//           <p>
//             Persuasive, customer-focused product descriptions that highlight value and drive conversions effectively.
//           </p>
//         </section>
//       </div>

//       {/* CTA Section */}
//       <LetsTalk/>
//     </div>
//   );
// }
