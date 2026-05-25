"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function Figma() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const services = [
    {
      title: "Finance Platforms",
      desc: "Secure fintech interfaces designed for banking apps, digital wallets and investment dashboards that simplify complex financial operations."
    },
    {
      title: "Real Estate Platforms",
      desc: "Interactive real estate experiences with property filters, map listings and intuitive navigation to improve property discovery."
    },
    {
      title: "Travel & Hospitality",
      desc: "Seamless travel interfaces designed for booking systems, itinerary management and smooth customer journeys."
    },
    {
      title: "Media & Entertainment",
      desc: "Dynamic UI experiences for streaming platforms, online magazines and media portals to keep users engaged."
    },
    {
      title: "Healthcare Platforms",
      desc: "User-friendly healthcare dashboards and appointment systems designed for patients, doctors and clinics."
    },
    {
      title: "E-Commerce Interfaces",
      desc: "Conversion-focused shopping experiences that improve product discovery and create frictionless checkout flows."
    },
  ];

  const features = [
    "User-Centered Design",
    "Modern Interface Design",
    "Conversion Focused Layouts",
    "Mobile First Experience",
  ];

  const process = [
    "Research & User Analysis",
    "Wireframing",
    "UI Design",
    "Prototyping",
    "Testing & Optimization",
  ];

  return (
    <section className="relative bg-[#0a0a0a] text-white py-28 md:py-40 lg:py-52 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 overflow-hidden">
      
      {/* Structural Editorial Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-[0.02] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <div className="w-[1px] bg-white h-full" />
        <div className="w-[1px] bg-white h-full hidden md:block" />
        <div className="w-[1px] bg-white h-full hidden lg:block" />
        <div className="w-[1px] bg-white h-full" />
      </div>

      {/* Atmospheric Ambient Gloom */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.03] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-500/[0.04] blur-[180px] rounded-full pointer-events-none" />

      {/* EDITORIAL SWISS HEADER WITH FIGMA CANVAS SHOWCASE */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Typography */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ UX/UI ARCHITECTURE ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              UI/UX Designs <br />
              That Create <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">Better Experiences</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              We engineer intuitive, behavioral, and high-fidelity product blueprints designed to turn complex application mechanics into zero-friction user systems.
            </p>
          </div>

          {/* Right Side: Interactive Live Figma Canvas Blueprint */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl border border-white/10 bg-[#0e0e0e] shadow-[0_0_50px_rgba(59,130,246,0.08)] p-4 group hover:border-blue-500/40 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              
              {/* Figma Top-Bar Simulator */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider">canvas_v2.0.fig</span>
                <div className="w-4 h-4 rounded bg-white/5 flex items-center justify-center text-[9px] text-neutral-400">⌘</div>
              </div>

              {/* Working Interface Design Simulation */}
              <div className="my-auto space-y-4 relative py-4">
                
                {/* Simulated Wireframe Frame Container */}
                <div className="border border-blue-500/30 rounded-xl p-3 bg-blue-500/[0.01] relative space-y-3">
                  <span className="absolute -top-2.5 left-3 px-1.5 py-0.5 bg-blue-600 text-[8px] font-mono text-white rounded font-bold tracking-wide">
                    # Main_Viewport
                  </span>

                  {/* Header Strip */}
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-2 bg-white/20 rounded-full" />
                    <div className="w-6 h-2 bg-blue-500/30 rounded-full" />
                  </div>

                  {/* Hero Box Vector */}
                  <div className="w-full aspect-[2.5/1] rounded-lg border border-dashed border-white/10 flex items-center justify-center text-white/5 text-xs font-mono">
                    Vector_Asset
                  </div>

                  {/* Interactive Dynamic Grid Blocks */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                      <div className="w-1/2 h-1.5 bg-white/20 rounded-full" />
                      <div className="w-full h-1 bg-white/5 rounded-full" />
                      <div className="w-4/5 h-1 bg-white/5 rounded-full" />
                    </div>
                    <div className="p-2 rounded-lg bg-blue-500/[0.03] border border-blue-500/20 space-y-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-1/2 h-1.5 bg-blue-400/40 rounded-full" />
                      <div className="w-full h-1 bg-white/5 rounded-full" />
                      <div className="w-3/4 h-1 bg-white/5 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Simulated Anchor Floating Vector Nodes */}
                <div className="absolute top-2 right-4 w-2 h-2 border border-blue-500 bg-white shadow-sm rounded-2xs hidden group-hover:block" />
                <div className="absolute bottom-6 left-2 w-2 h-2 border border-blue-500 bg-white shadow-sm rounded-2xs hidden group-hover:block" />
              </div>

              {/* Figma Layers Status Line */}
              <div className="pt-3 border-t border-white/[0.05] flex justify-between items-center text-[10px] font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">❖</span> AutoLayout Active
                </span>
                <span className="text-right text-[9px] text-neutral-600">Scale: 100%</span>
              </div>

              {/* Ambient Shadow Overlay behind component */}
              <div className="absolute inset-0 -z-10 bg-blue-500/[0.04] blur-[30px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

        </div>
      </div>

      {/* SERVICES METRIC LAYER */}
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
                  SECTOR // 0{i + 1}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/10 group-hover:bg-blue-500 transition-colors duration-300" />
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
              Why Our <br />UI/UX Designs <br />Stand Out
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
                <span className="text-blue-500 font-mono text-xs font-bold">[V_0{i + 1}]</span>
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
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// ENGINE STEPPER v2.0</span>
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
                DISCIPLINE_0{i + 1}
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

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import Link from "next/link";
// import LetsTalk from "../LetsTalk"; 
// // 👆 Ensure the path matches your project structure

// export default function Figma() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="min-h-screen py-24 px-6 md:px-20 bg-white text-black">

//       {/* -------------------- Hero Section -------------------- */}
//       <div className="flex flex-col md:flex-row h-auto md:h-[70vh]">
        
//         {/* Left */}
//         <div className="w-full md:w-1/2 py-10 md:py-20" data-aos="fade-right">
          
//           <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl font-inter">
//             UI/UX Design <br />
//             <span className="text-blue-900">Services</span>
//           </h1>

//           <p className="font-semibold font-inter py-5 text-gray-600">
//             Elevate user experiences through intuitive interfaces and visually 
//             captivating designs that engage, inspire, and drive meaningful results.
//             {/* SEO Keywords included */}
//           </p>

//           <div className="flex flex-col md:flex-row gap-6 md:gap-16 mt-5" data-aos="fade-up">
//             <div className="w-full md:w-1/2 text-gray-800">
//               <p>
//                 First impressions begin with design — intuitive and engaging 
//                 UI/UX experiences that guide users effortlessly, boost engagement, 
//                 and build lasting trust.
//               </p>
//             </div>

//             <div className="w-full md:w-1/3">
//               <p className="mb-5 font-semibold">
//                 Want to learn more details and discover how we can help?
//               </p>
//               <Link href="/contact">
//                 <button className="bg-blue-500 text-white px-4 py-2 font-bold rounded-md hover:bg-blue-600 transition">
//                   LET'S GET IN TOUCH
//                 </button>
//               </Link>
//             </div>
//           </div>

//         </div>

//         {/* Right */}
//         <div
//           className="w-full md:w-[45%] flex justify-center items-start mt-10 md:mt-0"
//           data-aos="fade-left"
//         >
//           <Image
//             src="/website_Recuirment/UI-UX-Services.png"
//             alt="UI UX Design Services - Virtunests Solutions"
//             width={900}
//             height={600}
//             className="rounded-xl max-w-full h-auto sm:pl-10 pl-0 pt-10"
//             priority
//           />
//         </div>

//       </div>


//       {/* -------------------- Paragraphs Section -------------------- */}
//       <div className="mt-16 space-y-10">

//         <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
//           1.<span className="text-blue-600">UI (User Interface)</span> and{" "}
//           <span className="text-blue-600">UX (User Experience)</span> play a crucial 
//           role in determining how long your customers stay connected with your brand. 
//           For any{" "}
//           <span className="text-blue-600">website, mobile app, SaaS dashboard, or digital platform</span>, 
//           a{" "}
//           <span className="text-blue-600">creative</span>,{" "}
//           <span className="text-blue-600">engaging</span>,{" "}
//           <span className="text-blue-600">user-friendly</span>, and{" "}
//           <span className="text-blue-600">intuitive design</span> is essential for achieving higher 
//           engagement and stronger brand loyalty.
//         </p>

//         <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
//           2.At <b>Virtunests Solutions</b>, we apply{" "}
//           <span className="text-blue-600">modern design principles</span>,{" "}
//           <span className="text-blue-600">proven UX strategies</span>, and{" "}
//           <span className="text-blue-600">in-depth market research</span> to craft{" "}
//           <span className="text-blue-600">high-conversion digital experiences</span>. 
//           Whether you run a{" "}
//           <span className="text-blue-600">B2B</span> or{" "}
//           <span className="text-blue-600">B2C</span> business, our tailor-made solutions 
//           help boost engagement, retention, and user satisfaction.
//         </p>

//       </div>


//       {/* -------------------- Categories Section -------------------- */}
//       <div className="flex flex-col items-center my-20">
        
//         <h1 className="text-3xl font-semibold">HOW WE DO IT!</h1>

//         <p className="text-gray-700 mt-5 text-center">
//           Our team of UI/UX experts delivers user-focused, visually powerful, and 
//           high-performing designs crafted specifically for your industry.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

//           {[
//             "Finance",
//             "Real Estate",
//             "Travel & Hospitality",
//             "Media & Entertainment",
//             "Non-Profit Organizations",
//             "Healthcare",
//             "Transportation",
//             "E-Commerce",
//             "SaaS (Software as a Service)",
//             "Education",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex px-5 py-5 border border-gray-300 text-xl font-bold 
//               text-gray-800 bg-gray-100 items-center rounded-lg shadow-sm"
//               data-aos="fade-up"
//             >
//               <span className="bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2">
//                 {(index + 1).toString().padStart(2, "0")}
//               </span>

//               <h2>{item}</h2>
//             </div>
//           ))}

//         </div>
//       </div>


//       {/* -------------------- Industry Detailed Paragraphs -------------------- */}
//       <div className="Pragraphs mt-10">

//         {[
//           {
//             title: "Finance:",
//             text:
//               "We design secure, clear, and easy-to-navigate financial interfaces ideal for banking apps, digital wallets, investment platforms, and fintech solutions. Our UI/UX helps simplify complex actions and build trust."
//           },
//           {
//             title: "Real Estate:",
//             text:
//              "Real estate platforms should offer an easy and interactive way for users to explore properties. From map-based listings to virtual tours, every element should be clear, responsive, and user-friendly. We create engaging and visually appealing real estate designs that make property browsing and management simpler for both buyers and sellers, helping clients strengthen brand credibility and increase conversions."
//           },
//           {
//             title: "Travel & Hospitality:",
//             text:
//               "Travel platforms should provide an effortless and enjoyable experience for users while exploring destinations, booking trips, or checking itineraries. Every touchpoint, from flight selection to payment confirmation, must be fast and smooth. Virtunests Solutions designs engaging, visually appealing, and responsive travel and hospitality interfaces that deliver exceptional user experiences and drive higher engagement."
//           },
//           {
//             title: "Media & Entertainment:",
//             text:
//               "Media and entertainment platforms must keep users hooked through intuitive navigation, seamless streaming, and engaging visuals. Whether it’s a movie streaming site, a music app, or an online magazine, the design must ensure uninterrupted enjoyment. Our team designs visually dynamic and interactive interfaces that improve engagement and ensure a smooth experience across all devices."
//           },
//           {
//             title: "Non-Profit Organizations:",
//             text:
//               "Non-profit platforms need to inspire trust and convey purpose clearly. The interface should make it simple for donors to contribute, volunteers to register, and communities to stay informed. We help non-profit organizations design clean, meaningful, and emotionally engaging experiences that strengthen their online presence and connect them with a wider audience."
//           },
//           {
//             title: "Healthcare:",
//             text:
//               "A healthcare platform should be intuitive, reliable, and time-efficient for both patients and doctors. Whether it’s an appointment scheduling system or a telemedicine platform, it must simplify processes like record updates, diagnosis, and prescription. At Virtunests Solutions, we design custom, user-friendly interfaces that make medical interactions seamless and help clients stand out in the healthcare industry."
//           },
//           {
//             title: "Transportation:",
//             text:
//               "Transportation apps and websites should deliver a smooth and effortless experience for travelers. Whether it’s airlines, cabs, railways, or metro systems, the interface should include interactive maps, live updates, and responsive navigation. Our team at Virtunests Solutions designs engaging and functional experiences that enhance fleet management and provide travelers with a seamless journey on both web and mobile platforms."
//           },
//           {
//             title: "E-Commerce:",
//             text:
//               "An e-commerce platform must visually attract visitors and make navigation effortless to increase retention and drive purchases. From product exploration to checkout, every step should feel seamless and engaging. At Virtunests Solutions, we craft interactive and conversion-focused designs that boost user engagement, strengthen brand recognition, and help clients maximize their sales potential."
//           },
//           {
//             title: "SaaS (Software as a Service):",
//             text:
//               "SaaS platforms should be designed for clarity, usability, and retention. A clean interface and intuitive navigation encourage users to stay longer and explore more. Our experts at Virtunests Solutions create smooth, user-centric dashboards and workflows that improve usability, enhance customer loyalty, and help clients achieve better lead conversion."
//           },
//           {
//             title: "Education:",
//             text:
//               "EdTech platforms should inspire curiosity and make learning interactive. Students engage better when learning through intuitive layouts, visuals, and multimedia. At Virtunests Solutions, we design engaging, easy-to-use educational platforms that make online learning creative, accessible, and impactful — improving both audience engagement and client retention."
//           }
//         ].map((item, index) => (
//           <div key={index} className="mt-10" data-aos="fade-up">
//             <h1 className="font-bold text-2xl mb-3">{item.title}</h1>
//             <p className="text-gray-800">{item.text}</p>
//           </div>
//         ))}

//       </div>

//       {/* -------------------- CTA Section -------------------- */}
//       <LetsTalk />

//     </div>
//   );
// }
