"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// Array of image paths from /public
const ClientsRowOne = [
  "/website_Recuirment/ClientsLogo/ClientLogo1.jpg",
  "/website_Recuirment/ClientsLogo/ClientLogo2.jpg",
  "/website_Recuirment/ClientsLogo/ClientLogo3.png",
  "/website_Recuirment/ClientsLogo/ClientLogo4.png",
  "/website_Recuirment/ClientsLogo/ClientLogo5.png",
  "/website_Recuirment/ClientsLogo/ClientLogo6.png",
  "/website_Recuirment/ClientsLogo/ClientLogo7.png",
  "/website_Recuirment/ClientsLogo/ClientLogo8.png",
  "/website_Recuirment/ClientsLogo/ClientLogo9.png",
  "/website_Recuirment/ClientsLogo/ClientLogo10.png",
  "/website_Recuirment/ClientsLogo/ClientLogo11.png",
  "/website_Recuirment/ClientsLogo/ClientLogo12.png",
];

const ClientsRowTwo = [
  "/website_Recuirment/ClientsLogo/ClientLogo13.png",
  "/website_Recuirment/ClientsLogo/ClientLogo14.png",
  "/website_Recuirment/ClientsLogo/ClientLogo15.png",
  "/website_Recuirment/ClientsLogo/ClientLogo16.png",
  "/website_Recuirment/ClientsLogo/ClientLogo17.png",
  "/website_Recuirment/ClientsLogo/ClientLogo18.png",
  "/website_Recuirment/ClientsLogo/ClientLogo19.png",
  "/website_Recuirment/ClientsLogo/ClientLogo20.png",
  "/website_Recuirment/ClientsLogo/ClientLogo21.png",
  "/website_Recuirment/ClientsLogo/ClientLogo22.png",
  "/website_Recuirment/ClientsLogo/ClientLogo23.png",
  "/website_Recuirment/ClientsLogo/ClientLogo24.png",
];

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full text-center bg-white py-20">
      {/* LOGOS SLIDER */}
      <div
        className="overflow-hidden w-[95vw] mx-auto rounded-3xl bg-blue-700 py-5 space-y-6"
        data-aos="fade-up"
      >
        {/* Row 1 */}
        <div className="flex w-max animate-slide whitespace-nowrap gap-4 px-4 hover:[animation-play-state:paused]">
          {[...ClientsRowOne, ...ClientsRowOne].map((img, index) => (
            <div
              key={index}
              className="shrink-0 w-40 h-24 lg:h-28 bg-white p-3 rounded-lg shadow-md"
            >
              <Image
                src={img}
                alt={`Client Logo ${index + 1}`}
                width={200}
                height={100}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max animate-slideTwo whitespace-nowrap gap-4 px-4 hover:[animation-play-state:paused]">
          {[...ClientsRowTwo, ...ClientsRowTwo].map((img, index) => (
            <div
              key={index}
              className="shrink-0 w-40 h-24 lg:h-28 bg-white p-3 rounded-lg shadow-md"
            >
              <Image
                src={img}
                alt={`Partner Brand ${index + 13}`}
                width={200}
                height={100}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-16">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-bold">
            Your Trusted Partner in
            <span className="text-blue-600"> Digital Transformation</span>
            <br className="hidden sm:block" /> Driving Business Success
          </h1>

          <p className="text-gray-600 text-base sm:text-lg pt-4 leading-relaxed font-poppins">
            We help brands grow through innovative technologies, strategic
            marketing, and digital transformation solutions tailored to their needs.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { num: "5+ Years", label: "Experience" },
            { num: "183 Projects", label: "Delivered" },
            { num: "25+ Clients", label: "Project Process" },
            { num: "95%", label: "Client Retention" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="bg-linear-to-b from-blue-50 to-blue-100 rounded-xl shadow-md p-6 text-center border-t-4 border-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-black/80">
                {item.num}
              </h3>
              <p className="text-gray-700 text-sm sm:text-md mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
