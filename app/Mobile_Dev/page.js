"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";

export default function Mobile_Dev() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const services = [
    {
      title: "E-Commerce Apps",
      desc: "Scalable mobile commerce applications designed to improve product discovery, user engagement and seamless checkout experiences."
    },
    {
      title: "Booking Applications",
      desc: "Smart booking platforms for travel, healthcare and services with real-time availability and secure payments."
    },
    {
      title: "Employee Management Apps",
      desc: "Powerful workforce management applications that streamline communication, task tracking and productivity."
    },
    {
      title: "Inventory Management Apps",
      desc: "Real-time inventory tracking systems that help businesses manage stock, reduce errors and improve operations."
    },
    {
      title: "On-Demand Service Apps",
      desc: "Mobile platforms for on-demand services like ride sharing, food delivery and service booking."
    },
    {
      title: "Custom Business Apps",
      desc: "Tailored mobile solutions built to automate workflows and solve unique business challenges."
    },
  ];

  const features = [
    "High Performance Applications",
    "Cross Platform Compatibility",
    "User Friendly Interfaces",
    "Secure Payment Integrations",
  ];

  const process = [
    "Requirement Analysis",
    "UI/UX Design",
    "Development",
    "Testing",
    "Deployment",
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

      {/* Atmospheric Ambient Aura */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.03] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-blue-500/[0.04] blur-[180px] rounded-full pointer-events-none" />

      {/* EDITORIAL SWISS HEADER WITH INTERACTIVE MOBILE BLUEPRINT */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-6">
              [ NATIVE & CROSS-PLATFORM ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-8">
              Mobile Applications <br />
              That Drive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">Business Growth</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6 max-w-xl">
              We engineer high-performance iOS and Android architectures that ensure premium performance, fluid interactivity, and cross-platform reliability for modern scales.
            </p>
          </div>

          {/* Right Live Device Showcase (Pure Code Art) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-[280px] h-[560px] sm:w-[300px] sm:h-[600px] rounded-[45px] border-[4px] border-white/10 bg-[#0e0e0e] shadow-[0_0_50px_rgba(59,130,246,0.1)] p-3 group hover:border-blue-500/40 transition-all duration-700 hover:-translate-y-2">
              
              {/* Speaker & Camera Notch */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
              </div>

              {/* Internal Screen UI Mockup */}
              <div className="w-full h-full rounded-[36px] bg-[#050505] overflow-hidden p-4 relative flex flex-col justify-between border border-white/[0.03]">
                
                {/* Simulated Top Bar */}
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-600 px-2 pt-2">
                  <span>9:41</span>
                  <div className="flex gap-1.5">
                    <span>5G</span>
                    <div className="w-4 h-2 border border-gray-600 rounded-sm p-[1px]"><div className="w-full h-full bg-gray-600 rounded-2xs" /></div>
                  </div>
                </div>

                {/* Simulated App Content Grid */}
                <div className="my-auto space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-500 animate-pulse">
                    ⚡
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="h-4 w-3/4 bg-white/10 rounded-full mx-auto" />
                    <div className="h-2 w-1/2 bg-white/5 rounded-full mx-auto" />
                  </div>
                  
                  {/* Dynamic Floating Cards inside Device */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <div className="h-2 w-1/3 bg-white/20 rounded-full" />
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full" />
                    <div className="h-2 w-5/6 bg-white/5 rounded-full" />
                  </div>

                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/10 space-y-2 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-500">
                    <div className="h-2 w-1/2 bg-blue-400/30 rounded-full" />
                    <div className="h-2 w-full bg-white/5 rounded-full" />
                  </div>
                </div>

                {/* Simulated Core Action Button */}
                <div className="w-full py-2.5 rounded-xl bg-blue-600 text-center text-xs font-mono font-bold tracking-wider shadow-[0_4px_15px_rgba(37,99,235,0.3)] group-hover:bg-blue-500 transition-colors">
                  INITIALIZE APP
                </div>
              </div>
              
              {/* External Ambient Glow Behind Phone */}
              <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-[40px] rounded-[45px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

        </div>
      </div>

      {/* SERVICES MATRICES */}
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
                  PRODUCT // 0{i + 1}
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
              // STACK INTEGRITY
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-none">
              Why Our <br />Mobile Apps <br />Stand Out
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
            Our Development Process
          </h3>
          <span className="text-xs font-mono text-gray-500 tracking-widest mt-2 sm:mt-0">// FLOW SEQUENCE v3.0</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group p-6 rounded-xl border border-white/[0.10] bg-[#191919]hover:bg-white/[0.01] transition-all duration-300"
            >
              <div className="text-xs font-mono text-blue-500/50 group-hover:text-blue-400 mb-6 transition-colors duration-300">
                INTEGRATE_0{i + 1}
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


// const Mobile_Dev = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="min-h-screen py-24 px-5 md:px-20 bg-white text-black">
//       {/* ============================
//         HERO SECTION
//       ============================= */}
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between md:h-[70vh]">
        
//         {/* LEFT TEXT */}
//         <div className="md:w-1/2 w-full mt-10 md:mt-10" data-aos="fade-right">
//           <h1 className="font-extrabold text-4xl md:text-6xl font-inter leading-tight">
//             Application <br />
//             <span className="text-blue-900">Development</span>
//           </h1>

//           <p className="font-semibold text-gray-600 mt-5 text-base md:text-lg">
//             We craft high-performance, user-friendly Android and iOS apps that deliver seamless experiences and boost engagement.
//           </p>

//           <div className="flex flex-col md:flex-row md:items-start mt-6" data-aos="fade-up">
//             <div className="md:w-1/2 text-gray-800">
//               <p>
//                 In today’s digital world, mobile applications have become essential for every business. They help strengthen brand loyalty,
//                 improve customer engagement, and boost lead generation and conversions.
//               </p>
//             </div>

//             <div className="mt-6 md:mt-0 md:ml-16 w-full md:w-1/3">
//               <p className="mb-4 font-semibold">
//                 Want to learn more details and find how we can help?
//               </p>
//               <Link href="/contact">
//                 <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 font-bold rounded-md">
//                   LET'S GET IN TOUCH
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="md:w-1/2 w-full flex justify-center" data-aos="fade-left">
//           <Image
//             className="rounded-xl mt-10"
//             src="/website_Recuirment/mobile-development-services.png"
//             alt="Mobile App Development - Virtunests Solutions"
//             width={700}
//             height={600}
//             priority
//           />
//         </div>
//       </div>

//       {/* ============================
//         PARAGRAPHS
//       ============================= */}
//       <div className="mt-20 space-y-6 text-gray-700 font-semibold leading-relaxed">
//         <p>
//           1. At <span className="text-blue-600">Virtunests Solutions</span>, we provide{" "}
//           <span className="text-blue-600">custom mobile app development</span> services tailored to your{" "}
//           <span className="text-blue-600">goals</span> and{" "}
//           <span className="text-blue-600">market challenges</span>. Our expert team builds{" "}
//           <span className="text-blue-600">native</span> and{" "}
//           <span className="text-blue-600">web-based Android & iOS apps</span> with seamless{" "}
//           <span className="text-blue-600">API</span> and{" "}
//           <span className="text-blue-600">payment integrations</span>.
//         </p>

//         <p>
//           2. Whether your business operates on a <span className="text-blue-600">B2B</span> or{" "}
//           <span className="text-blue-600">B2C</span> model, we deliver{" "}
//           <span className="text-blue-600">mobile apps that drive results</span> and help your business{" "}
//           <span className="text-blue-600">grow</span>.
//         </p>
//       </div>
 
//       {/* ============================
//         HOW WE DO IT
//       ============================= */}
//       <div className="flex flex-col items-center my-20 text-center">
//         <h1 className="text-3xl font-semibold" data-aos="fade-up">
//           HOW WE DO IT!
//         </h1>

//         <p className="text-gray-700 mt-4 max-w-3xl" data-aos="fade-up">
//           Our skilled team of professionals transforms your ideas into reality.
//           Here’s an overview of the professional applications we develop for clients across industries.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-10 w-full justify-items-center">
//           {[
//             "E-Commerce App",
//             "Booking App",
//             "Employee Management App",
//             "Inventory Management App",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="w-[85vw] sm:w-[40vw] lg:w-[30vw] px-5 py-4 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 flex items-center justify-start rounded-md shadow-sm"
//               data-aos="zoom-in"
//             >
//               <span className="bg-blue-500 rounded-full px-3 py-1 text-white mr-3">
//                 {`0${index + 1}`}
//               </span>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ============================
//         DETAILS SECTIONS
//       ============================= */}
//       <div className="space-y-10 text-gray-800">

//         <Section title="E-Commerce App">
//           An e-commerce app allows your business to expand reach and increase conversions. At{" "}
//           <b className="text-black/80">Virtunests Solutions</b>, we design secure, fast, and user-friendly shopping apps for maximum impact.
//         </Section>

//         <Section title="Booking App">
//           Whether for travel, education, or wellness — a booking app offers 24/7 accessibility.
//           Our team builds intuitive booking apps with secure payments to help grow your business.
//         </Section>

//         <Section title="Employee Management App">
//           Manage your workforce efficiently with powerful employee management systems.
//           We create apps that boost productivity and ensure smooth communication.
//         </Section>

//         <Section title="Inventory Management App">
//           Streamline supply-chain operations with real-time inventory tracking and insights.
//           Our apps help reduce waste and improve stock management efficiency.
//         </Section>

//       </div>

//       {/* CTA */}
//       <LetsTalk />
//     </div>
//   );
// };

// // ==============================
// // REUSABLE SECTION COMPONENT
// // ==============================
// const Section = ({ title, children }) => (
//   <div>
//     <h2 className="font-bold text-2xl mb-3 text-black">{title}:</h2>
//     <p>{children}</p>
//   </div>
// );

// export default Mobile_Dev;
