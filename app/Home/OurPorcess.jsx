"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

// Image path from public folder
const RightImg = "/website_Recuirment/Services.webp";

const OurProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      title: "Discovery",
      desc: "We understand your goals, target audience, and vision.",
    },
    {
      title: "Strategy & Design",
      desc: "We plan and design a modern digital solution tailored to your business.",
    },
    {
      title: "Development",
      desc: "We develop your project using the latest technologies for optimal performance.",
    },
    {
      title: "Launch & Support",
      desc: "We launch your project and provide long-term support and improvements.",
    },
  ];

  return (
    <section
      id="process"
      className="py-16 px-6 md:px-12 lg:px-20 bg-linear-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 text-left"
        data-aos="fade-up">
          <h2
            className="relative inline-block text-3xl md:text-4xl lg:text-5xl font-inter font-bold capitalize leading-snug tracking-tight pb-2 text-blue-500"
          >
            Tailored Digital Strategies
            <span className="absolute -bottom-2 left-0 w-16 md:w-40 h-[3px] bg-blue-500 rounded-full"></span>
          </h2>

          <p className="pb-8 pt-5 text-gray-600 text-base md:text-lg">
            Our expert team researches your audience, competition, and market
            trends to craft data-driven strategies that strengthen your brand
            identity and align perfectly with your business goals.
          </p>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="bg-white border border-blue-100 shadow-md p-5 rounded-xl hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-500 text-lg" />
                  <h3 className="text-lg md:text-xl font-semibold text-blue-700 font-poppins">
                    {step.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm md:text-[14px] font-inter mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className="relative lg:w-1/2 flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <div className="relative">
            <Image
              src={RightImg}
              alt="Professional digital services and client process workflow."
              width={600}
              height={600}
              priority={false}
              className="h-72 w-72 md:h-[70vh] md:w-[70vw] lg:w-[28vw] lg:h-[65vh] rounded-full object-cover shadow-lg"
            />

            {/* Badge */}
            <span className="absolute bottom-1 left-10 -translate-x-1/2 font-bold text-white bg-blue-500 px-4 py-3 rounded-lg flex flex-col items-center shadow-lg">
              <span className="flex gap-2 items-center text-lg">
                <FaPeopleGroup className="text-white text-2xl" />
                96%
              </span>
              <span className="text-white text-sm">Successful clients</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
