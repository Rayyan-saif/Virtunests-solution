"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carts from "./Carts";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const servicesData = [
    {
      key: "web",
      imgs: "/website_Recuirment/Icon/Web.png",
      text: "Web Development",
      pragraph:
        "Responsive, fast, and modern websites built to engage customers and scale with your business.",
    },
    {
      key: "UiUx",
      imgs: "/website_Recuirment/Icon/Ui-Ux1.png",
      text: "UI/UX Design",
      pragraph:
        "Robust, scalable, and user-friendly online store solutions to help your business thrive.",
    },
    {
      key: "app",
      imgs: "/website_Recuirment/Icon/App.png",
      text: "Mobile Applications",
      pragraph:
        "Custom, user-friendly mobile apps designed to enhance engagement and efficiency.",
    },
    {
      key: "3D_Design",
      imgs: "/website_Recuirment/Icon/3d.png",
      text: "3D Design & Visualization",
      pragraph:
        "Immersive, high-fidelity 3D visuals that bring your brand’s vision to life.",
    },
    {
      key: "graphic",
      imgs: "/website_Recuirment/Icon/Graphic1.png",
      text: "Graphic Design",
      pragraph:
        "Visually stunning and impactful designs that strengthen your brand identity.",
    },
    {
      key: "content-writing",
      imgs: "/website_Recuirment/Icon/content-writing1.png",
      text: "Content Writing",
      pragraph:
        "Compelling content that captures attention and builds trust.",
    },
    {
      key: "email-marketing",
      imgs: "/website_Recuirment/Icon/digital1.png",
      text: "Email Marketing",
      pragraph:
        "Personalized email campaigns that drive engagement and conversions.",
    },
    {
      key: "advertising",
      imgs: "/website_Recuirment/Icon/Ads2.png",
      text: "Advertising Management",
      pragraph:
        "Strategic advertising campaigns that maximize reach and ROI.",
    },
    {
      key: "social-media",
      imgs: "/website_Recuirment/Icon/social1.png",
      text: "Social Media Management",
      pragraph:
        "Grow your brand presence and connect with your audience.",
    },
    {
      key: "seo",
      imgs: "/website_Recuirment/Icon/seo1.png",
      text: "SEO Optimization",
      pragraph:
        "Advanced SEO strategies to boost rankings and drive targeted traffic.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-600/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-cyan-400/10 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our <span className="text-cyan-400">Services</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            We deliver powerful digital solutions that help businesses grow,
            scale and dominate their industry with innovation and strategy.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {servicesData.map((service, index) => (
            <Carts
              key={service.key}
              imgs={service.imgs}
              text={service.text}
              pragraph={service.pragraph}
              delay={index * 100}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;