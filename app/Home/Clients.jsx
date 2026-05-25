"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const ClientsRowOne = [
  "/website_Recuirment/ClientsLogo/ClientLogo1-removebg-preview.png",
  "/website_Recuirment/ClientsLogo/ClientLogo2-removebg-preview.png",
  "/website_Recuirment/ClientsLogo/ClientLogo3-removebg-preview.png",
  "/website_Recuirment/ClientsLogo/ClientLogo4-removebg-preview.png",
  "/website_Recuirment/ClientsLogo/ClientLogo5-removebg-preview.jpeg",
  "/website_Recuirment/ClientsLogo/ClientLogo6(2).png",
  "/website_Recuirment/ClientsLogo/ClientLogo7-removebg-preview.png",
  "/website_Recuirment/ClientsLogo/ClientLogo8-removebg-preview.png",
  "/website_Recuirment/ClientsLogo/ClientLogo25-removebg-preview.png",
  "/website_Recuirment/ClientsLogo/ClientLogo10-removebg-preview.png",
  "/website_Recuirment/ClientsLogo/ClientLogo11-removebg.png",
  "/website_Recuirment/ClientsLogo/ClientLogo12-removebg-preview.png",
];

const ClientsRowTwo = [
  "/website_Recuirment/ClientsLogo/ClientLogo13-romeve.png",
  "/website_Recuirment/ClientsLogo/ClientLogo14-romeve.png",
  "/website_Recuirment/ClientsLogo/ClientLogo15-romeve.png",
  "/website_Recuirment/ClientsLogo/ClientLogo16(2).png",
  "/website_Recuirment/ClientsLogo/ClientLogo17-romeve.png",
  "/website_Recuirment/ClientsLogo/ClientLogo18-romeve.png",
  "/website_Recuirment/ClientsLogo/ClientLogo19-romeve.png",
  "/website_Recuirment/ClientsLogo/ClientLogo20.png",
  "/website_Recuirment/ClientsLogo/ClientLogo21-romeve.png",
  "/website_Recuirment/ClientsLogo/ClientLogo22-romeve.png",
  "/website_Recuirment/ClientsLogo/ClientLogo24-romeve.png",
];

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0B0F19] py-24">

      {/* Background effects */}
      {/* Background base (same theme as hero but softer) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0B0F19] via-[#0B0F19] to-[#0E1424]" />

      {/* Gradient glow layer */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/15 via-transparent to-cyan-500/10" />

      {/* Grid pattern */}
      {/* <div className="absolute inset-0 opacity-[0.05] 
      bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] 
      bg-size-[80px_80px]" /> */}

      {/* Subtle diagonal tech lines */}
      {/* <div className="absolute inset-0 opacity-[0.03] 
      bg-[repeating-linear-gradient(135deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_80px)]" /> */}

      {/* Glow orbs (different placement so sections feel different) */}
      <div className="absolute top-[20%] right-[-120px] w-[380px] h-[380px] bg-blue-600/15 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[420px] h-[420px] bg-cyan-400/10 blur-[170px] rounded-full" />

      {/* Soft light beam */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-lightMove" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
        >
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 
          rounded-full border border-white/10 bg-white/5 backdrop-blur-md 
          text-sm md:text-base text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
        >
          Trusted By Brands
        </div>

          <h2 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
            Companies That Trust
            <span className="text-cyan-400 md:text-[45px]"> VirtuNests Solutions</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            We partner with growing businesses and global brands to build
            high-performing digital experiences.
          </p>
        </div>

        {/* LOGO SLIDER */}
        <div
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl py-8 space-y-6"
          data-aos="fade-up"
        >
          {/* Row 1 */}
          <div className="flex w-max animate-slide gap-6 px-6 hover:[animation-play-state:paused]">
            {[...ClientsRowOne, ...ClientsRowOne].map((img, index) => (
              <div
                key={index}
                className="group shrink-0 w-[150px] h-[70px] md:w-[170px] md:h-20
                flex items-center justify-center 
                bg-white border border-white/10 rounded-xl
                hover:border-blue-500 transition
                px-4"
              >
                <Image
                src={img}
                alt="client logo"
                width={140}
                height={60}
                className="max-h-10 md:max-h-[68px] w-auto h-auto object-contain
                grayscale-0 opacity-100
                group-hover:scale-90
                transition duration-300"
              />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex w-max animate-slideTwo gap-6 px-6 hover:[animation-play-state:paused]">
            {[...ClientsRowTwo, ...ClientsRowTwo].map((img, index) => (
              <div
                key={index}
                className="group shrink-0 w-[150px] h-[70px] md:w-[170px] md:h-20
                flex items-center justify-center
                bg-white border border-white/10 rounded-xl
                hover:border-blue-500 transition
                px-4"
              >
               <Image
                src={img}
                alt="client logo"
                width={140}
                height={60}
                className="max-h-10 md:max-h-[68px] w-auto h-auto object-contain
                grayscale-0 opacity-100
                group-hover:scale-90
                transition duration-300"
              />
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-4 
          lg:grid-cols-4 
          gap-4 sm:gap-6 lg:gap-8 
          mt-16
        ">

      {[
        { num: "03+", label: "Years Experience" },
        { num: "43+", label: "Projects Delivered" },
        { num: "05+", label: "Global Clients" },
        { num: "75%", label: "Client Retention" },
      ].map((item, i) => (
        <div
          key={i}
          data-aos="zoom-in"
          data-aos-delay={i * 100}
          className="
          bg-white/5 border border-white/10 backdrop-blur-lg
          rounded-2xl
          py-6 sm:py-7 lg:py-8
          text-center
          hover:scale-105
          hover:border-blue-400
          transition-all duration-300
          "
        >
          <h3 className="
          text-2xl 
          sm:text-3xl 
          md:text-3xl 
          lg:text-4xl 
          xl:text-5xl 
          font-bold text-white
          ">
            {item.num}
          </h3>

          <p className="
          text-gray-400 
          text-xs 
          sm:text-sm 
          md:text-base 
          lg:text-lg 
          mt-1
          ">
            {item.label}
          </p>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
};

export default Clients;

// "use client";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";

// // Array of image paths from /public
// const ClientsRowOne = [
//   "/website_Recuirment/ClientsLogo/ClientLogo1.jpg",
//   "/website_Recuirment/ClientsLogo/ClientLogo2.jpg",
//   "/website_Recuirment/ClientsLogo/ClientLogo3.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo4.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo5.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo6.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo7.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo8.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo9.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo10.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo11.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo12.png",
// ];

// const ClientsRowTwo = [
//   "/website_Recuirment/ClientsLogo/ClientLogo13.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo14.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo15.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo16.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo17.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo18.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo19.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo20.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo21.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo22.png",
//   // "/website_Recuirment/ClientsLogo/ClientLogo23.png",
//   "/website_Recuirment/ClientsLogo/ClientLogo24.png",
// ];

// const Clients = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <div className="w-full text-center bg-white py-20">
//       {/* LOGOS SLIDER */}
//       <div
//         className="overflow-hidden w-[95vw] mx-auto rounded-3xl bg-blue-700 py-5 space-y-6"
//         data-aos="fade-up"
//       >
//         {/* Row 1 */}
//         <div className="flex w-max animate-slide whitespace-nowrap gap-4 px-4 hover:[animation-play-state:paused]">
//           {[...ClientsRowOne, ...ClientsRowOne].map((img, index) => (
//             <div
//               key={index}
//               className="shrink-0 w-40 h-24 lg:h-28 bg-white p-3 rounded-lg shadow-md"
//             >
//               <Image
//                 src={img}
//                 alt={`Client Logo ${index + 1}`}
//                 width={200}
//                 height={100}
//                 className="w-full h-full object-contain"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Row 2 */}
//         <div className="flex w-max animate-slideTwo whitespace-nowrap gap-4 px-4 hover:[animation-play-state:paused]">
//           {[...ClientsRowTwo, ...ClientsRowTwo].map((img, index) => (
//             <div
//               key={index}
//               className="shrink-0 w-40 h-24 lg:h-28 bg-white p-3 rounded-lg shadow-md"
//             >
//               <Image
//                 src={img}
//                 alt={`Partner Brand ${index + 13}`}
//                 width={200}
//                 height={100}
//                 className="w-full h-full object-contain"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* TEXT SECTION */}
//       <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-16">
//         <div
//           data-aos="fade-up"
//           data-aos-delay="300"
//           className="text-center max-w-4xl mx-auto"
//         >
//           <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-bold">
//             Your Trusted Partner in
//             <span className="text-blue-600"> Digital Transformation</span>
//             <br className="hidden sm:block" /> Driving Business Success
//           </h1>

//           <p className="text-gray-600 text-base sm:text-lg pt-4 leading-relaxed font-poppins">
//             We help brands grow through innovative technologies, strategic
//             marketing, and digital transformation solutions tailored to their needs.
//           </p>
//         </div>

//         {/* STATS GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//           {[
//             { num: "5+ Years", label: "Experience" },
//             { num: "183 Projects", label: "Delivered" },
//             { num: "25+ Clients", label: "Project Process" },
//             { num: "95%", label: "Client Retention" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               data-aos="zoom-in"
//               data-aos-delay={i * 100}
//               className="bg-linear-to-b from-blue-50 to-blue-100 rounded-xl shadow-md p-6 text-center border-t-4 border-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300"
//             >
//               <h3 className="text-2xl sm:text-3xl font-bold text-black/80">
//                 {item.num}
//               </h3>
//               <p className="text-gray-700 text-sm sm:text-md mt-1">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Clients;
