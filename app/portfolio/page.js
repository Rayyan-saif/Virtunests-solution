"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Page = () => {
  const [active, setActive] = useState("Web");

  const categories = [
    { id: "Web", label: "Web Solutions" },
    { id: "App", label: "Mobile Apps" },
    { id: "Graphic", label: "Brand Design" },
  ];

  const portfolioData = {
    Web: [
      "/website_Recuirment/Web/Web1.png",
      "/website_Recuirment/Web/Web2.png",
      "/website_Recuirment/Web/Web3.png",
      "/website_Recuirment/Web/Web4.png",
      "/website_Recuirment/Web/Web5.png",
      "/website_Recuirment/Web/Web6.png",     
    ],
    App: [
      "/website_Recuirment/App/App1.jpg",
      "/website_Recuirment/App/App2.jpg",
      "/website_Recuirment/App/App3.jpeg",
      "/website_Recuirment/App/App4.jpg",
      "/website_Recuirment/App/App5.jpeg",
      "/website_Recuirment/App/App6.jpeg",
    ],
    Graphic: [
      "/website_Recuirment/Graphic/one.jpeg",
      "/website_Recuirment/Graphic/two.jpeg",
      "/website_Recuirment/Graphic/three.jpeg",
      "/website_Recuirment/Graphic/four.jpeg",
      "/website_Recuirment/Graphic/five.jpeg",
      "/website_Recuirment/Graphic/six.jpeg",
      "/website_Recuirment/Graphic/Premium-home.jpg",
      "/website_Recuirment/Graphic/Snakeeyes insurance-01.jpg",
      "/website_Recuirment/Graphic/Snakeeyes insurance-02.jpg",
      "/website_Recuirment/Graphic/Stay High Mobile.jpg",
      "/website_Recuirment/Graphic/Stay High Mobile2.jpg",
      "/website_Recuirment/Graphic/Truck logic.jpg",
      "/website_Recuirment/Graphic/T-Shirt-Design.jpg",
      "/website_Recuirment/Graphic/revox.jpeg",
      "/website_Recuirment/Graphic/revox2.jpeg",
      "/website_Recuirment/Graphic/Chill_logo.jpg",
      "/website_Recuirment/Graphic/Greenscape.jpg",
      "/website_Recuirment/Graphic/Wedding.jpeg",
      "/website_Recuirment/Graphic/Logo beef.jpg",
      "/website_Recuirment/Graphic/behancefd-01.jpg",
      "/website_Recuirment/Graphic/4-pic.jpg",
      "/website_Recuirment/Graphic/Food-Social-Banner.jpg",
      "/website_Recuirment/Graphic/final-logo-SB.png",
      "/website_Recuirment/Graphic/Cool_Logo.jpg",
      "/website_Recuirment/Graphic/Party-post.jpg",
      "/website_Recuirment/Graphic/Post2.jpg",
      "/website_Recuirment/Graphic/Post3.jpg",
      "/website_Recuirment/Graphic/Post4.jpg",
      "/website_Recuirment/Graphic/Post_1.jpg",
      "/website_Recuirment/Graphic/Post01.jpg",
      "/website_Recuirment/Graphic/Post02.jpg",
      "/website_Recuirment/Graphic/Black and Red Modern Food Menu1.jpg",
      "/website_Recuirment/Graphic/Black and Red Modern Food Menu.jpg",
      "/website_Recuirment/Graphic/cal.jpeg",
      "/website_Recuirment/Graphic/gym.jpg",
      // "/website_Recuirment/Graphic/LCD.jpg",
      "/website_Recuirment/Graphic/04.jpg",
    ],
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple & Elegant Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Selected Work
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-md mx-auto font-light">
            A showcase of systems, products, and visual identities crafted by our agency.
          </p>
        </div>

        {/* Minimal Luxury Tabs */}
        <div className="flex justify-center gap-2 mb-16 border-b border-white/[0.06] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 text-xs md:text-sm tracking-wide transition-all duration-300 relative ${
                active === cat.id
                  ? "text-white font-medium"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {cat.label}
              {active === cat.id && (
                <motion.div
                  layoutId="activeTabBorder"
                  className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Clean Minimalist Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {portfolioData[active].map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                key={img}
                className="group relative flex flex-col"
              >
                {/* Image Master Box Container */}
                <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden rounded-lg bg-neutral-900 border border-white/[0.04] transition-all duration-500 group-hover:border-white/10 shadow-md">
                  
                  {active === "Web" ? (
                    /* ─── SCROLL ENGINE FOR WEB INTERFACES ─── */
                    <div className="absolute inset-0 w-full h-full transition-transform duration-[4500ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-240px)] sm:group-hover:-translate-y-[calc(100%-260px)] md:group-hover:-translate-y-[calc(100%-280px)]">
                      <img
                        src={img}
                        alt={`Web Application Asset ${index + 1}`}
                        className="w-full h-auto object-top block"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </div>
                  ) : (
                    /* ─── STANDARD PREMIUM VIEW FOR APPS & GRAPHICS ─── */
                    <Image
                      src={img}
                      alt={`Project Framework ${index + 1}`}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      priority={index < 3}
                    />
                  )}
                  
                  {/* Web Category Specific Top & Bottom Vignette for Ultra-Premium Shadow Depth */}
                  {active === "Web" && (
                    <>
                      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent pointer-events-none z-10" />
                      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent pointer-events-none z-10" />
                    </>
                  )}

                  {/* Gentle Uniform Hover Darkness Shield */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
                </div>

                {/* Minimal Meta Label */}
                <div className="mt-3 flex items-center justify-between text-xs px-0.5">
                  <span className="text-neutral-200 font-medium group-hover:text-white transition-colors">
                    {active === "Web" ? `Platform Concept 0${index + 1}` : active === "App" ? `Mobile System 0${index + 1}` : `Visual Identity 0${index + 1}`}
                  </span>
                  <span className="text-neutral-500 text-[11px] font-light italic">
                    {active} Portfolio
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Page;

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// // Animation
// const fadeUp = {
//   initial: { opacity: 0, y: 40 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true },
// };

// const Page = () => {
//   const [active, setActive] = useState("Web");

//   const portfolioData = {
//     Web: [
//       "/website_Recuirment/Web/Web1.png",
//       "/website_Recuirment/Web/Web2.png",
//       "/website_Recuirment/Web/Web3.png",
//       "/website_Recuirment/Web/Web4.png",
//       "/website_Recuirment/Web/Web5.png",
//       "/website_Recuirment/Web/Web6.png",     
//     ],
//     App: [
//       "/website_Recuirment/App1.jpg",
//       "/website_Recuirment/App2.jpg",
//       "/website_Recuirment/App4.jpg",
//     ],
//     Graphic: [
//       "/website_Recuirment/Food-Social-Banner.jpg",
//       "/website_Recuirment/final-logo-SB.png",
//       "/website_Recuirment/Chill_logo.jpg",
//       "/website_Recuirment/Cool_Logo.jpg",
//       "/website_Recuirment/Logo beef.jpg",
//       "/website_Recuirment/Party-post.jpg",
//       "/website_Recuirment/Post2.jpg",
//       "/website_Recuirment/Post3.jpg",
//       "/website_Recuirment/Post4.jpg",
//       "/website_Recuirment/Post_1.jpg",
//       "/website_Recuirment/Post01.jpg",
//       "/website_Recuirment/Post02.jpg",
//       "/website_Recuirment/Black and Red Modern Food Menu1.jpg",
//       "/website_Recuirment/Black and Red Modern Food Menu.jpg",
//       "/website_Recuirment/Premium-home.jpg",
//       "/website_Recuirment/Snakeeyes insurance-01.jpg",
//       "/website_Recuirment/Snakeeyes insurance-02.jpg",
//       "/website_Recuirment/Stay High Mobile.jpg",
//       "/website_Recuirment/Stay High Mobile2.jpg",
//       "/website_Recuirment/Truck logic.jpg",
//       "/website_Recuirment/T-Shirt-Design.jpg",
//       "/website_Recuirment/revox.jpeg",
//       "/website_Recuirment/revox2.jpeg",
//       "/website_Recuirment/Wedding.jpeg",
//       "/website_Recuirment/cal.jpeg",
//       "/website_Recuirment/Greenscape.jpg",
//       "/website_Recuirment/gym.jpg",
//       "/website_Recuirment/LCD.jpg",
//       "/website_Recuirment/behancefd-01.jpg",
//       "/website_Recuirment/4-pic.jpg",
//       "/website_Recuirment/04.jpg",
//     ],
//   };

//   return (
//     <section
//       id="portfolio"
//       className="py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-500/10"
//     >
//       {/* Heading */}
//       <motion.div {...fadeUp} className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase mt-6">
//           Our Portfolio
//         </h2>
//         <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
//           Take a closer look at our recent work across multiple industries &
//           categories.
//         </p>
//       </motion.div>

//       {/* Buttons */}
//       <motion.div
//         {...fadeUp}
//         className="flex justify-center gap-4 mb-10 flex-wrap"
//       >
//         {["Web", "App", "Graphic"].map((category) => (
//           <button
//             key={category}
//             onClick={() => setActive(category)}
//             className={`px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
//               active === category
//                 ? "bg-white text-blue-800 shadow-lg"
//                 : "bg-blue-200 text-blue-800 hover:bg-white"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </motion.div>

//       {/* Grid */}
//       <motion.div
//         {...fadeUp}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
//       >
//         {portfolioData[active].map((img, index) => (
//           <div
//             key={index}
//             className="relative w-full h-72 overflow-hidden rounded-xl shadow-lg group"
//           >
//             <Image
//               src={img}
//               alt={`Project ${index + 1}`}
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />

//             {/* Overlay effect */}
//             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Page;