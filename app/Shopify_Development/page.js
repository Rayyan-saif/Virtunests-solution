"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function ShopifyDevelopment() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const solutions = [
    {
      title: "Custom Liquid Architecture",
      desc: "Bespoke Shopify theme engineering built from scratch using headless setups or native Liquid code to match exact design protocols."
    },
    {
      title: "Conversion (CRO) Engineering",
      desc: "Optimizing checkout funnels, cart hooks, and product pages to drive micro-actions and decrease drop-offs."
    },
    {
      title: "App & API Integrations",
      desc: "Seamless connection of custom ERPs, advanced inventory management pipelines, and payment processors to your store ecosystem."
    },
    {
      title: "Store Migration Engines",
      desc: "Zero-downtime database and asset relocation from platforms like WooCommerce, Magento, or custom legacy frameworks."
    },
    {
      title: "Speed & Performance Scaling",
      desc: "Drastically cutting Time-to-First-Byte (TTFB) and optimizing script execution for premium Core Web Vitals performance."
    },
  ];

  const features = [
    "Enterprise-Grade Scalability",
    "High-Conversion UI/UX Blueprints",
    "Tailwind & Clean Code Standards",
    "Database Sync Automation",
  ];

  const process = [
    "E-Com Architecture Plan",
    "Wireframing & UX Mockups",
    "Liquid Engine Coding",
    "Payment & App Rigging",
    "Load Testing & Deployment",
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

      {/* HERO / HEADER SECTION WITH ECOMMERCE ENGINE HUD */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ HIGH-VELOCITY MERCHANT DEPLOYMENT ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              Shopify <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">Development</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              Architecting secure, bulletproof Shopify ecosystems engineered for maximum transactional throughput, frictionless checkout velocity, and high-conversion brand scalability.
            </p>
          </div>

          {/* Right Column: Live E-Commerce Pipeline & Merchant HUD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-[380px] aspect-[1.2/1] rounded-xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_60px_rgba(59,130,246,0.05)] p-5 group hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              
              {/* Workspace Header Status */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500">
                  <span className="text-blue-500 animate-pulse">●</span> Checkout_Engine_Online
                </div>
                <div className="flex gap-2 text-[9px] font-mono text-neutral-600">
                  <span className="text-emerald-400 font-bold">AOV: +28% Lift</span>
                  <span className="text-neutral-700">|</span>
                  <span>v4.1.2</span>
                </div>
              </div>

              {/* Real-time E-Com Metrics Flow */}
              <div className="my-auto space-y-4 font-mono text-[10px]">
                
                {/* Core Live Analytics Row */}
                <div className="grid grid-cols-3 gap-2 text-[9px]">
                  <div className="p-2 border border-white/[0.03] bg-white/[0.01] rounded text-center">
                    <span className="text-neutral-500 block text-[7px] uppercase">Load Time</span>
                    <span className="text-emerald-400 text-xs font-bold font-sans">0.8s</span>
                  </div>
                  <div className="p-2 border border-white/[0.03] bg-white/[0.01] rounded text-center">
                    <span className="text-blue-400 block text-[7px] uppercase">Conv. Rate</span>
                    <span className="text-white text-xs font-bold font-sans">4.85%</span>
                  </div>
                  <div className="p-2 border border-white/[0.03] bg-white/[0.01] rounded text-center">
                    <span className="text-neutral-500 block text-[7px] uppercase">Cart Drop</span>
                    <span className="text-white text-xs font-bold font-sans">-14%</span>
                  </div>
                </div>

                {/* Simulated Checkout Funnel Health */}
                <div className="space-y-2 text-[8px]">
                  <div className="flex justify-between text-neutral-400">
                    <span>Edge API Server Hook Status</span>
                    <span className="text-white font-bold">100% Operational</span>
                  </div>
                  <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-full group-hover:bg-blue-400 transition-all duration-1000" />
                  </div>
                </div>

                <div className="space-y-1 text-[8px]">
                  <span className="text-neutral-500 text-[7px] uppercase tracking-wider block">Active System Logs</span>
                  <div className="p-1.5 bg-white/[0.01] border border-white/[0.03] rounded text-neutral-400 flex justify-between items-center">
                    <span>Liquid Engine Payload Compiler</span>
                    <span className="text-emerald-400">SUCCESS</span>
                  </div>
                </div>

              </div>

              {/* Status Footer Metadata */}
              <div className="pt-2.5 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">📦</span> Platform: Headless_Liquid_Core
                </span>
                <span className="text-neutral-600">Secure SSL Stack</span>
              </div>

              {/* Backlit Glowing Base Backdrop */}
              <div className="absolute inset-0 -z-10 bg-blue-500/[0.01] group-hover:bg-blue-500/[0.04] blur-[30px] rounded-xl transition-all duration-700" />
            </div>
          </div>

        </div>
      </div>

      {/* COMPONENT SERVICE METRIC GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 relative z-10 mb-40 md:mb-56">
        {solutions.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 50}
            className="group relative pt-8 border-t border-white/[0.07] hover:border-blue-500/50 transition-colors duration-500 flex flex-col justify-between min-h-[240px]"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-gray-500 tracking-widest">
                  SOLUTION CORE // 0{i + 1}
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
              // SCALABLE ENTERPRISE RETAIL
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
              Built For <br />High-Volume <br />Transactions
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
                <span className="text-blue-500 font-mono text-xs font-bold">[ECOMM_ENGINE_0{i + 1}]</span>
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
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// BUILD ENGINE PROTOCOLS v2.1</span>
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
                STAGE_0{i + 1}
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