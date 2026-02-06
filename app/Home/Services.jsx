"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carts from "./Carts";

// Change this import according to your file structure
// import Carts from "/Home/Carts";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const servicesData = [
    {
      key: "web",
      imgs: "/website_Recuirment/Icon/Web1-logo.png",
      text: "Web Development",
      pragraph:
        "Responsive, fast, and modern websites built to engage customers and scale with your business.",
    },
    {
      key: "UiUx",
      imgs: "/website_Recuirment/Icon/uiux-icon.png",
      text: "UI/UX Design",
      pragraph:
        "Robust, scalable, and user-friendly online store solutions to help your business thrive in the digital marketplace.",
    },
    {
      key: "app",
      imgs: "/website_Recuirment/Icon/Application-logo.png",
      text: "Mobile Applications",
      pragraph:
        "Custom, user-friendly mobile apps designed to enhance customer engagement and business efficiency.",
    },
    {
      key: "3D_Design",
      imgs: "/website_Recuirment/Icon/3D_icon.png",
      text: "3D Design & Visualization",
      pragraph:
        "We create immersive, high-fidelity 3D visuals that bring your brand’s vision to life and leave a lasting impression.",
    },
    {
      key: "graphic",
      imgs: "/website_Recuirment/Icon/Graph-logo2.png",
      text: "Graphic Design",
      pragraph:
        "We craft visually stunning and impactful designs that bring your brand's vision to life, leaving a lasting impression.",
    },
    {
      key: "content-writing",
      imgs: "/website_Recuirment/Icon/content-writing.png",
      text: "Content Writing & Copywriting",
      pragraph:
        "Craft compelling content and persuasive copy that captures attention, builds trust, and enhances your brand voice.",
    },
    {
      key: "email-marketing",
      imgs: "/website_Recuirment/Icon/Email_Marketing.png",
      text: "Email Marketing",
      pragraph:
        "Reach your customers directly with personalized, data-driven email campaigns that drive engagement and conversions.",
    },
    {
      key: "advertising",
      imgs: "/website_Recuirment/Icon/Ads Management.png",
      text: "Advertising Management",
      pragraph:
        "Build stronger brand visibility and higher conversions with strategic advertising campaigns across digital platforms.",
    },
    {
      key: "social-media",
      imgs:
        "/website_Recuirment/Icon/social-media-icon.jpg",
      text: "Social Media Management",
      pragraph:
        "Engage your audience, grow your community, and strengthen your brand presence with effective social media management.",
    },
    {
      key: "seo",
      imgs: "/website_Recuirment/Icon/SEO.png",
      text: "SEO",
      pragraph:
        "Optimizing your online presence with advanced SEO strategies to boost rankings and drive targeted traffic.",
    },
  ];

  return (
    <section className="bg-linear-to-b from-blue-100 via-white to-white 
    py-16 pt-20">
      <div className="text-center max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h1 className="font-inter font-extrabold text-3xl md:text-5xl tracking-tight relative inline-block pb-2 text-black">
          Our Services
        </h1>
        <p className="text-gray-600 font-poppins text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
          Empower your business with our{" "}
          <span className="text-blue-500 font-semibold">
            comprehensive IT solutions
          </span>{" "}
          from software development to network security, we deliver{" "}
          <span className="text-blue-500 font-semibold">
            tailored strategies
          </span>{" "}
          to drive your success with innovation and precision.
        </p>
      </div>

      {/* Desktop Animation */}
      <div className="mt-12">
       {/* Desktop Animation */}
        <div className="hidden lg:block overflow-hidden">
        <div
            className="flex w-max gap-6 px-6 animate-slide transition-transform duration-500 ease-in-out"
            style={{ animation: "scroll 30s linear infinite" }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
            {[...Array(2)].flatMap((_, loopIndex) =>
            servicesData.map((service, index) => (
                <div
                key={`${service.key}-${loopIndex}-${index}`}
                data-aos="zoom-in"
                data-aos-delay="150"
                className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] hover:scale-105 transition-transform duration-300 text-black"
                >
                <Carts
                    imgs={service.imgs}
                    text={service.text}
                    pragraph={service.pragraph}
                />
                </div>
            ))
            )}
        </div>
        </div>


        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 px-4 lg:hidden">
          {servicesData.map((service) => (
            <div key={service.key} className="w-full">
              <Carts
                imgs={service.imgs}
                text={service.text}
                pragraph={service.pragraph}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Services;
