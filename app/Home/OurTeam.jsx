// "use client";

// import Image from "next/image";

// const OurTeam = () => {

//   const team = [
//     { name: "Ukasha", role: "Founder", img: "/website_Recuirment/Pictures/Ukasha.jpg" },
//     { name: "Fahad", role: "Client Manager", img: "/website_Recuirment/Pictures/Fahad-removebg.png" },
//     { name: "Ahmad", role: "CTO", img: "/website_Recuirment/Pictures/CTO-Ahmad.png" },
//     { name: "Alizeh", role: "Social Media Manager", img: "/website_Recuirment/Pictures/Alizeh.png" },
//     { name: "Saad", role: "SEO Specialist", img: "/website_Recuirment/Pictures/Saad1.png" },
//     { name: "Rayyan", role: "Frontend Dev", img: "/website_Recuirment/Pictures/SMART-removebg.png" },
//   ];

//   return (
//     <section className="relative py-28 overflow-hidden">

//       {/* Background glow */}
//       <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-600/20 blur-[140px] rounded-full animate-pulse"/>
//       <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-cyan-400/10 blur-[160px] rounded-full"/>

//       <div className="max-w-7xl mx-auto text-center px-6">

//         <h2 className="text-3xl md:text-5xl font-bold text-white">
//           Meet Our Team
//         </h2>

//         <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//           Creative minds working together to build powerful digital experiences.
//         </p>

//         {/* Orbit container */}
//         <div className="relative mt-20 flex items-center justify-center">

//           {/* Center logo */}
//           <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center z-10">
//             <span className="text-white text-xl font-semibold">Our Team</span>
//           </div>

//           {/* Orbit ring */}
//           <div className="absolute w-[420px] h-[420px] border border-white/10 rounded-full animate-spin-slow">

//             {team.map((member, i) => (
//               <div
//                 key={i}
//                 className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   top: `${50 + 45 * Math.sin((i / team.length) * 2 * Math.PI)}%`,
//                   left: `${50 + 45 * Math.cos((i / team.length) * 2 * Math.PI)}%`,
//                 }}
//               >
//                 <div className="group relative w-full h-full rounded-full overflow-hidden border border-white/20 hover:scale-110 transition">

//                   <Image
//                     src={member.img}
//                     alt={member.name}
//                     fill
//                     className="object-cover"
//                   />

//                   {/* Hover info */}
//                   <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition text-center px-2">
//                     <p className="text-white text-sm font-semibold">{member.name}</p>
//                     <p className="text-gray-300 text-xs">{member.role}</p>
//                   </div>

//                 </div>
//               </div>
//             ))}

//           </div>

//         </div>

//       </div>

//       <style jsx>{`
//         .animate-spin-slow {
//           animation: spin 25s linear infinite;
//         }

//         @keyframes spin {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>

//     </section>
//   );
// };

// export default OurTeam;

"use client";

import { useRef } from "react";
import Folio from "./Folio";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OurTeam = () => {

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const Teame = [
  { 
    id: 1, 
    image: "/website_Recuirment/Pictures/ukasha-real.png", 
    text: "Ukasha", 
    title: "Chief Executive Officer & Founder" 
  },
  { 
    id: 3, 
    image: "/website_Recuirment/Pictures/CTO-Ahmad-2.png", 
    text: "Ahmad", 
    title: "Chief Technology Officer & Co-Founder" 
  },
  { 
    id: 2, 
    image: "/website_Recuirment/Pictures/Fahad-removebg.png", 
    text: "Fahad", 
    title: "Head of Operations & Client Experience" 
  },
  { 
    id: 4, 
    image: "/website_Recuirment/Pictures/Alizeh1.png", 
    text: "Alizeh", 
    title: "Social Media Strategist & Content Lead" 
  },
  { 
    id: 5, 
    image: "/website_Recuirment/Pictures/Saad.png", 
    text: "Saad", 
    title: "SEO & Performance Marketing Lead" 
  },
  { 
    id: 6, 
    image: "/website_Recuirment/Pictures/Ahmad1.png", 
    text: "Ahmad", 
    title: "Lead Art Strategist & Visual Designer" 
  },
  { 
    id: 7, 
    image: "/website_Recuirment/Pictures/Rayyan1.png", 
    text: "Rayyan", 
    title: "Frontend UI Engineer" 
  },
  { 
    id: 8, 
    image: "/website_Recuirment/Pictures/Shahrukh-removebg.png", 
    text: "Shahrukh", 
    title: "Brand Identity Designer" 
  },
  { 
    id: 9, 
    image: "/website_Recuirment/Pictures/Arbad-removebg.png", 
    text: "Arbab", 
    title: "Engineering Lead & Solution Architect" 
  },
  { 
    id: 10, 
    image: "/website_Recuirment/Pictures/Bisma1.png", 
    text: "Bisma", 
    title: "Lead Brand Storyteller & Copywriter" 
  },
  ];

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Glow background */}
      <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-600/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-cyan-400/10 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto text-center px-6 relative">

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Meet Our Team
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A passionate team of designers, developers, and strategists
          building digital experiences that drive results.
        </p>

        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-[55%] -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-cyan-500 transition p-3 rounded-full text-white"
        >
          <FaChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-[55%] -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-cyan-500 transition p-3 rounded-full text-white"
        >
          <FaChevronRight />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-10 mt-16 overflow-x-scroll scroll-smooth pb-10 no-scrollbar"
        >
          {Teame.map((member) => (
            <Folio
              key={member.id}
              image={member.image}
              text={member.text}
              title={member.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;