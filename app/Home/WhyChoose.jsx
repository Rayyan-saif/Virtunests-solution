"use client";

import React, { useEffect } from "react";
import Image from "next/image"; 
import AOS from "aos";
import "aos/dist/aos.css";

import { 
  FaUserTie, 
  FaCogs, 
  FaDollarSign, 
  FaClock, 
  FaSmile, 
  FaHeadset 
} from "react-icons/fa";

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      title: "Expert Team",
      desc: "Skilled experts in design, development & strategy delivering with precision and creativity.",
      icon: <FaUserTie className="text-blue-700 text-3xl" />,
    },
    {
      title: "Custom Solutions",
      desc: "We craft custom solutions tailored to your unique business goals.",
      icon: <FaCogs className="text-blue-700 text-3xl" />,
    },
    {
      title: "24/7 Support",
      desc: "Day or night, our support team is ready when you need us.",
      icon: <FaHeadset className="text-blue-700 text-3xl" />,
    },
    {
      title: "On-Time Delivery",
      desc: "We deliver on time every time with zero compromise on quality.",
      icon: <FaClock className="text-blue-700 text-3xl" />,
    },
    {
      title: "Client-Centric",
      desc: "Your satisfaction is our priority — we deliver with precision.",
      icon: <FaSmile className="text-blue-700 text-3xl" />,
    },
    {
      title: "Affordable Pricing",
      desc: "Premium services at competitive prices transparent, affordable, and high-quality.",
      icon: <FaDollarSign className="text-blue-700 text-3xl" />,
    },
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-12" id="whyus">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-1 text-center">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-inter text-black">
          Your Success, Our Mission
        </h1>

        <p className="text-[15px] sm:text-[16px] md:text-lg leading-relaxed text-gray-700 font-roboto max-w-3xl mx-auto mb-5">
          Committed to quality, innovation, and results every step of <br /> the way.
        </p>

        <div className="w-20 md:w-40 h-1 bg-blue-500 mx-auto rounded-full mb-5"></div>

        {/* Main Layout */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left Column */}
          <div className="flex flex-col gap-6 flex-1 order-2 md:order-1" data-aos="fade-right">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[1]} />
            <FeatureCard {...features[3]} />
          </div>

          {/* Center Image */}
          <div
            className="w-44 h-44 sm:w-60 sm:h-60 md:w-60 md:h-[78vh] rounded-full overflow-hidden shadow-2xl shadow-black shrink-0 mx-auto order-1 md:order-2"
            data-aos="zoom-in"
          >
            <Image
              src="/website_Recuirment/MainRight2.jpeg"
              alt="center-img"
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 flex-1 order-3" data-aos="fade-up">
            <FeatureCard {...features[5]} />
            <FeatureCard {...features[2]} />
            <FeatureCard {...features[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Card Component
const FeatureCard = ({ title, desc, icon }) => (
  <div className="flex flex-col text-center items-center max-w-xs mx-auto bg-blue-200 rounded-2xl p-4 sm:p-5 transition-transform hover:scale-[1.02] duration-300">
    <div className="w-12 h-12 flex items-center justify-center mb-2">
      {icon}
    </div>
    <h3 className="text-base sm:text-lg font-bold font-inter capitalize text-black">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-700 font-poppins">{desc}</p>
  </div>
);

export default WhyChoose;
