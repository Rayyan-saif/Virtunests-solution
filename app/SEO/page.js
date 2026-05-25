"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function Search_Engine_Optimization() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const onPage = [
    "Keyword Research & Smart Integration",
    "Title Tag Optimization",
    "Header Optimization (H2–H6)",
    "SEO-Friendly URL Structures",
    "Image Optimization with Alt Text",
    "Internal Linking Strategy",
    "Meta Description Writing",
  ];

  const offPage = [
    "XML Sitemap Setup",
    "HTML Sitemap Creation",
    "Redirect Management (301, 302 & 307)",
    "Fixing 404 Errors",
    "301 Redirects for Migration & Security",
    "HTML Markup Optimization",
    "Website Speed Optimization",
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

      {/* HERO / HEADER SECTION WITH SERP INDEXING HUD */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ ENGINE INDEX ALGORITHMIC RANKINGS ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              Search Engine <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">Optimization</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              Improve your website visibility, rank higher on global search indexes, and attract raw organic traffic structures that map natively into high-converting revenue channels.
            </p>
          </div>

          {/* Right Column: Live SERP Optimization Index & Core Crawler HUD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-[380px] aspect-[1.2/1] rounded-xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_60px_rgba(59,130,246,0.05)] p-5 group hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              
              {/* Workspace Header Status */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500">
                  <span className="text-blue-500 animate-pulse">●</span> Crawl_Engine_Syncing
                </div>
                <div className="flex gap-2 text-[9px] font-mono text-neutral-600">
                  <span className="text-emerald-400 font-bold">Health: 98% Score</span>
                  <span className="text-neutral-700">|</span>
                  <span>v1.0.8</span>
                </div>
              </div>

              {/* Data Visualization Streams */}
              <div className="my-auto space-y-4 font-mono text-[10px]">
                
                {/* Micro Metric Node Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 border border-white/[0.03] bg-white/[0.01] rounded">
                    <span className="text-neutral-500 block text-[8px] uppercase tracking-wider">Organic Impressions</span>
                    <span className="text-white text-xs font-bold font-sans">842.5K</span>
                  </div>
                  <div className="p-2.5 border border-white/[0.03] bg-white/[0.01] rounded">
                    <span className="text-neutral-500 block text-[8px] uppercase tracking-wider">Core Web Vitals</span>
                    <span className="text-emerald-400 text-xs font-bold font-sans">PASS (0.4s)</span>
                  </div>
                </div>

                {/* Simulated Keyword SERP Positioning Tracker */}
                <div className="space-y-1.5">
                  <span className="text-[8px] tracking-wider text-neutral-500 uppercase block">Active Target Index Ranks</span>
                  <div className="space-y-1 text-[9px]">
                    <div className="flex justify-between items-center bg-white/[0.02] border border-white/[0.04] p-1.5 rounded">
                      <span className="text-neutral-400">/enterprise-solutions</span>
                      <span className="text-emerald-400 font-bold font-sans">Pos: #1</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/[0.01] border border-white/[0.02] p-1.5 rounded opacity-80">
                      <span className="text-neutral-400">/scalability-architecture</span>
                      <span className="text-blue-400 font-bold font-sans">Pos: #3</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Operational Controller Meta */}
              <div className="pt-2.5 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">⚙️</span> Indexing: Sitemap_XML_Live
                </span>
                <span className="text-neutral-600">No Errors Found</span>
              </div>

              {/* Glowing Backlit Base Ambient */}
              <div className="absolute inset-0 -z-10 bg-blue-500/[0.01] group-hover:bg-blue-500/[0.04] blur-[30px] rounded-xl transition-all duration-700" />
            </div>
          </div>

        </div>
      </div>

      {/* CORE OPERATIONAL STRATEGY PARAGRAPHS */}
      <div className="max-w-4xl mx-auto text-gray-400 space-y-8 relative z-10 mb-36 border-l-2 border-white/[0.05] pl-6 md:pl-10">
        <p className="text-base md:text-lg font-light leading-relaxed" data-aos="fade-up">
          At Virtunests Solutions we apply powerful <span className="text-white font-normal underline decoration-blue-500/50 underline-offset-4">on-page</span> and <span className="text-white font-normal underline decoration-blue-500/50 underline-offset-4">off-page SEO techniques</span> tailored specifically to your macro scaling goals and cross-industry challenges. Whether your enterprise operates natively in high-velocity <span className="text-blue-400 font-mono text-sm">[B2B]</span> or consumer-driven <span className="text-blue-400 font-mono text-sm">[B2C]</span> markets, we architect clear, sustainable, long-term technical growth.
        </p>

        <p className="text-base md:text-lg font-light leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          SEO is the analytical process of optimizing digital real estate to secure maximum priority visibility on <span className="text-white font-normal">Search Engine Result Pages (SERPs)</span>. With the intentional alignment of structural engineering optimization, technical sitemap deployment, authority velocity matrices, and content orchestration, businesses secure organic growth models that stay resilient against algorithmic variance.
        </p>
      </div>

      {/* SECTION HEADER: ON PAGE */}
      <div className="max-w-7xl mx-auto mb-16 border-b border-white/[0.05] pb-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h3 className="text-3xl font-extrabold uppercase tracking-tight" data-aos="fade-up">
            On-Page Optimization
          </h3>
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// RENDERING LAYER MATRIX</span>
        </div>
      </div>

      {/* ON PAGE METRIC GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 relative z-10 mb-40 md:mb-56">
        {onPage.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 50}
            className="group relative pt-8 border-t border-white/[0.07] hover:border-blue-500/50 transition-colors duration-500 flex flex-col justify-between min-h-[160px]"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-gray-500 tracking-widest">
                  ON_PAGE // 0{i + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/10 group-hover:bg-blue-500 transition-colors duration-300" />
              </div>

              <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                {item}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION HEADER: TECHNICAL & OFF PAGE */}
      <div className="max-w-7xl mx-auto mb-16 border-b border-white/[0.05] pb-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h3 className="text-3xl font-extrabold uppercase tracking-tight" data-aos="fade-up">
            Technical & Off-Page Optimization
          </h3>
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// CORE SYSTEMS ARCHITECTURE</span>
        </div>
      </div>

      {/* TECHNICAL & OFF PAGE METRIC GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 relative z-10 mb-40 md:mb-52">
        {offPage.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 50}
            className="group relative pt-8 border-t border-white/[0.07] hover:border-blue-500/50 transition-colors duration-500 flex flex-col justify-between min-h-[160px]"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-gray-500 tracking-widest">
                  TECHNICAL_NODE // 0{i + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/10 group-hover:bg-blue-500 transition-colors duration-300" />
              </div>

              <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                {item}
              </h4>
            </div>
          </div>
        ))}
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
// import LetsTalk from '../LetsTalk';
// import Image from 'next/image';
// import Link from 'next/link';

// const Search_Engine_Optimization = () => {
//  useEffect(() => {
//      AOS.init({ duration: 1000, once: true })
//    }, [])
 

//   return (
//     <div className="min-h-screen py-24 px-6 md:px-20 bg-white text-black">
    
//     <div className='flex flex-col md:flex-row h-auto md:h-[70vh]'>
//       {/* Left */}
//         <div className='w-full md:w-1/2 py-10 md:pt-12' data-aos="fade-right">
//           <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl font-inter'>
//             Search Engine <br />
//             <span className='text-blue-900'>Optimization</span>
//           </h1>
//           <p className='font-semibold font-inter py-5 text-gray-600'>
//             Boost your website’s visibility, rank higher on search engines, and attract <br /> organic traffic that converts into leads and customers.
//           </p>

//           <div className='flex flex-col md:flex-row gap-6 md:gap-16 mt-5' data-aos="fade-up">
//             <div className='w-full md:w-1/2 text-gray-800'>
//               <p>Our team delivers measurable results, helping you rank higher, generate more leads, increase conversions, and improve customer retention through extensive brand management and market research.</p>
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
//         <div className='w-full md:w-[47%] flex justify-center items-start mt-10 md:mt-5' data-aos="fade-left">
//          <Image
//             src="/website_Recuirment/SEO.jpg"
//             alt="SEO"
//             width={900}
//             height={600}
//             className="rounded-xl shadow-lg w-full sm:w-[80%] lg:w-[50vw] object-cover"
//         />
//         </div>
//     </div>

//       {/* Paragraphs */}
//       <div className='mt-16 space-y-10'>
//         <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
//         1. At Virtunests Solutions, we apply a wide range of 
//         <span className="text-blue-600"> on-page optimization</span> and 
//         <span className="text-blue-600"> off-page optimization</span> techniques tailored to your goals and challenges. 
//         Whether you are a 
//         <span className="text-blue-600"> B2B</span> or 
//         <span className="text-blue-600"> B2C</span> business, regardless of your size or industry, we provide the   right 
//         <span className="text-blue-600"> SEO solution</span> for you.
//       </p>

//         <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
//           2. <span className="text-blue-600">Search Engine Optimization (SEO)</span> is the practice of using proven techniques to improve your website’s 
//           <span className="text-blue-600"> visibility on search engines</span>. In today’s 
//           <span className="text-blue-600"> competitive digital world</span>, SEO is essential for every brand. It requires both 
//           <span className="text-blue-600"> content and technical expertise</span> to rank higher on 
//           <span className="text-blue-600"> Search Engine Result Pages (SERPs)</span>.
//         </p>
//     </div>

//     <div className='flex flex-col items-center my-20'>
//       <h1 className='text-3xl font-semibold'>HOW WE DO IT!</h1>
//       <p className='text-gray-700 mt-5 text-center'>Our team of skilled professionals knows how to deliver effective SEO results. Here’s a quick look at how we handle both on-page <br /> and off-page optimization for your business.</p>

//       <h1 className='font-bold text-center text-3xl mt-5'>ON-PAGE OPTIMIZATION</h1>

//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10'>
//           {[
//             "Keyword Research & Smart Integration",
//             "Title Tag Optimization",
//             "Header Optimization (H2–H6)",
//             "SEO-Friendly URL Structures",
//             "Image Optimization with Alt Text",
//             "Internal Linking Strategy",
//             "Meta Description Writing",
//           ].map((ad, index) => (
//             <div key={index} className='flex px-5 py-5 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 items-center' data-aos="fade-up">
//               <span className='bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2'>{(index+1).toString().padStart(2,'0')}</span>
//               <h2>{ad}</h2>
//             </div>
//           ))}
//         </div>

//     </div>

//     <div className='Pragraphs mt-10'>
      

//       <h1 className='font-bold text-2xl my-3'>Keyword Research & Smart Integration:</h1>
//       <p className='text-gray-800'>Keyword research and integration help search engines understand the content of your web page. Our team identifies high-volume, relevant keywords and seamlessly integrates them into your content to enhance search rankings.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>Title Tag Optimization:</h1>
//       <p className='text-gray-800'>Title tags tell both search engines and users that your page is relevant to their query. We create optimized title tags that include targeted keywords and encourage users to click.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>Header Optimization (H2–H6):</h1>
//       <p className='text-gray-800'>Well-structured headers make content easy to read and more engaging. We optimize your headers with primary and secondary keywords, improving both readability and SEO performance.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>SEO-Friendly URL Structures:</h1>
//       <p className='text-gray-800'>Clean, keyword-rich URLs are favored by search engines and help users easily navigate. Our experts structure and optimize your URLs to boost visibility in search results.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>Image Optimization with Alt Text:</h1>
//       <p className='text-gray-800'>Images also play a big role in SEO. We add keyword-focused Alt Text descriptions to your images so search engines clearly understand the context, helping your visuals rank better.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>Internal Linking Strategy:</h1>
//       <p className='text-gray-800'>Internal links connect your pages and guide both users and search engines to explore more of your website. We build a strong internal linking structure to improve crawling, navigation, and visibility.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>Meta Description Writing:</h1>
//       <p className='text-gray-800'>Meta descriptions summarize your web page for both users and search engines. Our team writes compelling, keyword-rich descriptions that improve click-through rates and search performance.</p>


//     </div>

//     <div className='flex flex-col items-center my-20'>
//       <h1 className='font-bold text-center text-3xl mt-5'>OFF-PAGE OPTIMIZATION</h1>

//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10'>
//           {[
//             "XML Sitemap Setup",
//             "HTML Sitemap Creation",
//             "Redirect Management (301, 302 & 307)",
//             "Fixing 404 Errors",
//             "301 Redirects for Migration & Security",
//             "HTML Markup Optimization",
//             "Website Speed Optimization",
//           ].map((ad, index) => (
//             <div key={index} className='flex px-5 py-5 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 items-center' data-aos="fade-up">
//               <span className='bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2'>{(index+1).toString().padStart(2,'0')}</span>
//               <h2>{ad}</h2>
//             </div>
//           ))}
//         </div>
//     </div>

//     <div className='Pragraphs mt-10'>
      

//       <h1 className='font-bold text-2xl my-3'>XML Sitemap Setup:</h1>
//       <p className='text-gray-800'>Search engines crawl your website using sitemaps, which highlight the most important pages. At Virtunests Solutions, we create XML sitemaps with canonical URLs so your key pages are always discovered and indexed.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>HTML Sitemap Creation:</h1>
//       <p className='text-gray-800'>Unlike XML, HTML sitemaps serve both users and search engines. They provide a clear, organized structure, helping visitors quickly find pages that might be harder to navigate otherwise. We design optimized HTML sitemaps that make browsing smooth and simple.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>Redirect Management (301, 302 & 307):</h1>
//       <p className='text-gray-800'>Redirects ensure users and search engines are guided to the right pages when URLs change. Whether it’s updates, maintenance, or content migration, our team sets up redirects that preserve SEO value and provide a seamless experience.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>Fixing 404 Errors:</h1>
//       <p className='text-gray-800'>Broken links can frustrate visitors and hurt your rankings. We regularly monitor and fix 404 errors on your website to ensure smooth navigation and a reliable user experience.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>301 Redirects for Migration & Security:</h1>
//       <p className='text-gray-800'>If you’re moving to a new domain, deleting pages, or upgrading from HTTP to HTTPS, 301 redirects are essential. We set up SEO-friendly redirects that protect your rankings and keep users engaged.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>HTML Markup Optimization:</h1>
//       <p className='text-gray-800'>Clean, optimized HTML improves both user experience and search engine performance. We enhance your site’s structure by minimizing file sizes, limiting unnecessary redirects, validating HTML codes, and adding effective meta descriptions.</p>
      
//       <h1 className='font-bold text-2xl mb-3 mt-10'>Website Speed Optimization:</h1>
//       <p className='text-gray-800'>ast websites rank higher and convert better. Our experts optimize page loading speed and mobile performance to improve your SERP ranking, generate leads, and boost retention rates.</p>


//     </div>


//       {/* CTA Section */}
//       <LetsTalk/>

//     </div>
//   );
// };

// export default Search_Engine_Optimization;