"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation Presets
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const page = () => {
  const [active, setActive] = useState("Web");

  // 🔥 No imports — all public paths
  const portfolioData = {
    Web: [
      "/website_Recuirment/Web1.png",
      "/website_Recuirment/Web2.jpg",
      "/website_Recuirment/Web3.png",
      "/website_Recuirment/Web4.jpg",
      "/website_Recuirment/Web5.jpg",
      "/website_Recuirment/Web6.png",
      "/website_Recuirment/Web7.jpg",
      "/website_Recuirment/Web8.jpeg",
      "/website_Recuirment/Web9.png",
    ],

    App: [
      "/website_Recuirment/App1.jpg",
      "/website_Recuirment/App2.jpg",
      "/website_Recuirment/App4.jpg",
    ],

    Graphic: [
      "/website_Recuirment/Food-Social-Banner.jpg",
      "/website_Recuirment/final-logo-SB.png",
      "/website_Recuirment/Chill_logo.jpg",
      "/website_Recuirment/Cool_Logo.jpg",
      "/website_Recuirment/Logo beef.jpg",
      "/website_Recuirment/Party-post.jpg",
      "/website_Recuirment/Post2.jpg",
      "/website_Recuirment/Post3.jpg",
      "/website_Recuirment/Post4.jpg",
      "/website_Recuirment/Post_1.jpg",
      "/website_Recuirment/Post01.jpg",
      "/website_Recuirment/Post02.jpg",
      "/website_Recuirment/Black and Red Modern Food Menu1.jpg",
      "/website_Recuirment/Black and Red Modern Food Menu.jpg",
      "/website_Recuirment/Premium-home.jpg",
      "/website_Recuirment/Snakeeyes insurance-01.jpg",
      "/website_Recuirment/Snakeeyes insurance-02.jpg",
      "/website_Recuirment/Stay High Mobile.jpg",
      "/website_Recuirment/Stay High Mobile2.jpg",
      "/website_Recuirment/Truck logic.jpg",
      "/website_Recuirment/T-Shirt-Design.jpg",
      "/website_Recuirment/revox.jpeg",
      "/website_Recuirment/revox2.jpeg",
      "/website_Recuirment/Wedding.jpeg",
      "/website_Recuirment/cal.jpeg",
      "/website_Recuirment/Greenscape.jpg",
      "/website_Recuirment/gym.jpg",
      "/website_Recuirment/LCD.jpg",
      "/website_Recuirment/behancefd-01.jpg",
      "/website_Recuirment/4-pic.jpg",
      "/website_Recuirment/04.jpg",
    ],
  };

  return (
    <section
      id="portfolio"
      className="py-24 px-6 md:px-20 bg-linear-to-br from-blue-100 to-white"
    >
      {/* Heading */}
      <motion.div {...fadeUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-blue-500 font-inter uppercase">
          Our Portfolio
        </h2>
        <p className="text-gray-600 text-base mt-2 font-poppins">
          Take a closer look at our recent work and see how we deliver excellence
          across multiple industries & project categories.
        </p>
      </motion.div>

      {/* Category Buttons */}
      <motion.div
        {...fadeUp}
        className="flex justify-center space-x-6 mb-10"
      >
        {["Web", "App", "Graphic"].map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition ${
              active === category
                ? "bg-blue-800 text-white"
                : "bg-blue-200 text-blue-800 hover:bg-blue-300"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div
        {...fadeUp}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto"
      >
        {portfolioData[active].map((img, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-lg"
          >
           <Image
            src={img}
            alt={`Project ${index + 1}`}
            width={800}
            height={800}
            className="w-full h-[80vh] object-cover hover:scale-105 transition-transform duration-500 border-2 border-black"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default page;
