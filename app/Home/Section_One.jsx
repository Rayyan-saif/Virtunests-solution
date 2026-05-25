"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const SectionOne = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;

    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 50;
    const moveY = (clientY - window.innerHeight / 2) / 50;

    heroRef.current.querySelectorAll(".parallax").forEach((el) => {
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b0f1a] via-[#0d1324] to-[#05070f] py-24 md:py-32"
    >
      {/* Floating Glow Orbs */}
      <div className="parallax absolute top-[-10%] left-[-5%] w-[350px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="parallax absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-cyan-400/10 blur-[140px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute top-[35%] left-[25%] w-[180px] h-[180px] bg-blue-400/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Diagonal Lines Layer */}
      <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(135deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_40px)]" />

      {/* Animated Light Beam */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse" />

      {/* Noise texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Premium Badge */}
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 
          rounded-full border border-white/10 bg-white/5 backdrop-blur-md 
          text-sm md:text-base text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
          Welcome to Virtunests
        </div>

        {/* Headline */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-extrabold capitalize text-white leading-tight tracking-tight 
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
        >
          <span className="block md:text-nowrap drop-shadow-sm">
            Accelerating your business
          </span>
          <span className="block text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 md:h-18 to-blue-400 mt-2 md:text-nowrap">
            growth through innovation
          </span>
        </h1>

        {/* Subtext */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
        >
          VirtuNests helps businesses grow with modern websites, ecommerce
          development, and performance-driven strategies designed to scale
          revenue and conversions.
        </p>

        {/* CTA Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 w-full sm:w-auto rounded-xl font-semibold text-white 
            bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400
            shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]
            transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            Get Free Consultation
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 
            bg-white/5 backdrop-blur-md text-gray-200 font-semibold 
            hover:border-blue-400/50 hover:bg-white/10 
            transition-all duration-300 text-center"
          >
            View Our Work
          </Link>
        </div>

        {/* Trust Indicators */}
        {/* <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm md:text-base text-gray-400"
        >
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 text-base">✔</span>
            <span>43+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 text-base">✔</span>
            <span>Ecommerce Specialists</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 text-base">✔</span>
            <span>Global Clients</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SectionOne;

// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import Link from "next/link";

// const SectionOne = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-100">
      
//       {/* BACKGROUND SHAPES */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

//       {/* CONTAINER */}
//       <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 py-16 md:py-24 lg:py-20 relative z-10">
        
//         {/* TEXT CONTENT */}
//         <div
//           data-aos="fade-right"
//           data-aos-delay={200}
//           className="flex-1 text-center lg:text-left"
//         >
//           <span className="inline-block text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wide mb-2">
//             elcome to Virtunests
//           </span>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-inter leading text-gray-900 capitalize">
//             Accelerating your business growth
//             <span className="text-blue-600"> through innovation</span>
//           </h1>

//           <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 font-roboto max-w-xl mx-auto lg:mx-0 leading-relaxed">
//             We merge creativity, strategy, and technology to deliver digital marketing 
//             solutions that actually move the needle for your business.
//           </p>

//           {/* CTA BUTTONS */}
//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <Link
//               href="/contact"
//               className="px-7 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
//             >
//               Get Started
//             </Link>

//             <Link
//               href="/portfolio"
//               className="px-7 py-3 bg-white/40 backdrop-blur-lg text-blue-700 border border-blue-200 rounded-full font-semibold hover:bg-white/60 transition-all"
//             >
//               View Portfolio
//             </Link>
//           </div>
//         </div>

//         {/* IMAGE SECTION */}
//         <div
//           data-aos="fade-up"
//           data-aos-delay={100}
//           className="flex-1 flex justify-center relative"
//         >
//           {/* Decorative Glow */}
//           <div className="absolute -top-8 -left-6 w-64 h-64 sm:w-80 sm:h-80 
//           lg:w-md lg:h-112 bg-blue-100 rounded-full blur-2xl opacity-50 z-0"></div>

//           <Image
//             src="/website_Recuirment/Main2-short.png"
//             alt="Business Growth"
//             width={700}
//             height={600}
//             className="relative top-4 z-10 w-72 sm:w-96 md:w-md lg:w-lg object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionOne;
