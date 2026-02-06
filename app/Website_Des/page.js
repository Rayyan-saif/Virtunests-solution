"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import LetsTalk from "../LetsTalk";


const Website_Des = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen md:py-36 py-24 px-4 sm:px-8 md:px-14 lg:px-20 bg-white text-black">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Left Side */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl font-inter leading-tight">
            Website <br />
            <span className="text-blue-900">Development</span>
          </h1>
          <p className="font-semibold font-inter text-base py-5 text-gray-600">
            Every successful brand starts with a powerful website built to engage,
            perform, and grow your digital presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6" data-aos="fade-up">
            <p className="text-gray-800 sm:w-[50%]">
              Your website is often the first impression of your business, and
              having a well-built, goal-oriented site gives you a competitive edge
              in today’s digital world.
            </p>

            <div className="sm:w-[35%] sm:ml-10">
              <p className="mb-4 font-semibold">
                Want to learn more details and find how we can help?
              </p>

              <Link href="/contact">
                <button className="bg-blue-500 text-white px-5 py-2 font-bold hover:bg-blue-600 transition">
                  LET'S GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="w-full lg:w-[45vw] lg:h-[63vh] h-full flex justify-center"
          data-aos="fade-left"
        >
          <Image
            src="/website_Recuirment/Website_img.jpeg"
            alt="Website Development"
            width={900}
            height={600}
            className="rounded-xl shadow-lg w-full sm:w-[80%] lg:w-[50vw] object-cover"
          />
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="mt-20 space-y-10 text-gray-700">
        <p className="font-semibold leading-relaxed" data-aos="fade-up">
          1. At <b>Virtunests Solutions</b>, our development team consists of dedicated
          front-end, back-end, and full-stack developers with expertise in
          multiple programming languages and frameworks. From{" "}
          <span className="text-blue-600">HTML</span>,{" "}
          <span className="text-blue-600">CSS</span>,{" "}
          <span className="text-blue-600">JavaScript</span>, and{" "}
          <span className="text-blue-600">React</span> to{" "}
          <span className="text-blue-600">Node.js</span> and{" "}
          <span className="text-blue-600">WordPress</span>, we cover every layer of web
          development.
        </p>

        <p className="font-semibold leading-relaxed" data-aos="fade-up">
          2. Whether you run a <span className="text-blue-600">B2B</span> or{" "}
          <span className="text-blue-600">B2C</span> business, regardless of your
          industry, we create <span className="text-blue-600">tailored solutions</span>{" "}
          that drive measurable results through{" "}
          <span className="text-blue-600">research</span> and{" "}
          <span className="text-blue-600">brand-focused strategies</span>.  
        </p>
      </div>

      {/* HOW WE DO IT Section */}
      <div className="flex flex-col items-center my-20" data-aos="fade-up">
        <h1 className="text-3xl sm:text-4xl font-semibold">HOW WE DO IT!</h1>
        <p className="text-gray-700 mt-5 text-center text-sm sm:text-base px-4">
          Here’s an overview of the different types of professional websites...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full max-w-5xl">
          {[
            "E-Commerce",
            "Business Blogs",
            "Portfolio Websites",
            "Online Booking Websites",
            "Educational Websites",
            "Non-Profit Organization Websites",
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="px-5 py-5 border border-gray-300 text-lg font-bold text-gray-800 bg-gray-100 flex items-center rounded-lg shadow-sm hover:bg-blue-50 transition"
            >
              <span className="bg-blue-500 rounded-full px-2 py-1.5 text-white mr-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Info Paragraphs */}
      <div className="mt-10 space-y-10">
        {[
            {
                title: "E-Commerce Websites:",
                text: "An e-commerce website allows your business to reach a wider audience and operate 24/7 with lower costs. At Virtunests Solutions, we design secure, user-friendly e-commerce websites for smooth shopping experiences."
            },
            {
                title: "Business Blogs:",
                text: "Blogs are key to building credibility and SEO growth. Our experts craft content that increases engagement, improves visibility, and builds customer trust."
            },
            {
                title: "Portfolio Websites:",
                text: "A professional portfolio builds trust and showcases your expertise. Virtunests Solutions designs elegant, high-converting portfolios to highlight your work."
            },
            {
                title: "Online Booking Websites:",
                text: "We create efficient booking platforms with secure payment integration and automation to help you manage appointments and leads with ease."
            },
            {
                title: "Educational Websites:",
                text: "From online classes to assessments, our educational websites make learning interactive, accessible, and engaging for students and educators alike."
            },
            {
                title: "Non-Profit Organization Websites:",
                text: "We help nonprofits connect with donors, share their mission, and grow their impact through compelling website design and storytelling."
            }
        ].map((item, i) => (
          <div key={i} data-aos="fade-up">
            <h1 className="font-bold text-2xl mb-3">{item.title}</h1>
            <p className="text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <LetsTalk />
    </div>
  );
};

export default Website_Des;
