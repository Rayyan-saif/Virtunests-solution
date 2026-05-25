"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const LetsTalk = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <div
      className="relative z-10 max-w-4xl mx-auto my-12 p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent overflow-hidden group"
      data-aos="fade-up"
    >
      {/* Dynamic Background Grid Mesh inside CTA */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      
      {/* Hyper-Aura Ambient Backlight effect on hover */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-blue-500/[0.03] group-hover:bg-blue-500/[0.08] blur-[80px] rounded-full transition-all duration-700 pointer-events-none" />

      <div className="bg-[#191919] p-10 md:p-16 rounded-2xl text-center relative z-10 flex flex-col items-center justify-center border border-white/[0.03]">
        
        {/* Terminal Style Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/[0.03] mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-blue-400 font-bold">
            [ Pipeline Open // Elite Scale ]
          </span>
        </div>

        {/* Hero Title with Premium Editorial Typography */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-[1.05] text-white max-w-2xl mb-6">
          Have a project in mind? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">
            Let’s build something legendary.
          </span>
        </h2>

        {/* Sub-text explaining capabilities briefly */}
        <p className="text-gray-400 text-sm md:text-base font-light max-w-lg mb-10 leading-relaxed">
          Drop us a line to audit your current infrastructure, map custom architecture blueprints, or deploy high-velocity digital products.
        </p>

        {/* Magnetic High-End Interactive Action Button */}
        <Link
          href="/contact"
          className="relative px-8 py-4 text-sm font-mono tracking-wider font-bold uppercase rounded-xl overflow-hidden group/btn border border-blue-500/30 bg-blue-900/10 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-500 flex items-center gap-3 text-white"
        >
          {/* Shimmer Effect on Hover */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -skew-x-12 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_ease-in-out_infinite]" />
          
          <span>Execute Initial Brief</span>
          <span className="text-blue-400 transform group-hover/btn:translate-x-1.5 transition-transform duration-300">
            →
          </span>
        </Link>

      </div>

      {/* Global CSS Inject for Custom Shimmer Keyframe if not defined */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </div>
  );
};

export default LetsTalk;

// "use client";

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Link from "next/link";
// // import Image from "next/image";

// const LetsTalk = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <>
//       <div
//         className="relative z-10 max-w-2xl mt-10 mx-auto my-2 bg-blue-950 p-6 rounded-xl shadow-xl text-center font-poppins"
//         data-aos="fade-up"
//       >
//         <h3 className="text-1xl font-semibold mb-2 text-white">Let’s Talk</h3>

//         <p className="text-white mb-6 text-2xl text-center font-bold capitalize">
//           Have a project in mind? <br /> Contact Us!
//         </p>

//         <Link
//           href="/contact"
//           className="px-6 py-2 text-white font-bold rounded-full hover:bg-gray-100 hover:text-blue-950 transition border inline-block"
//         >
//           Let's Get Started →
//         </Link>
//       </div>
//     </>
//   );
// };

// export default LetsTalk;
