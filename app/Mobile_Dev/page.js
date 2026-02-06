"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import LetsTalk from "../LetsTalk";


const Mobile_Dev = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen py-24 px-5 md:px-20 bg-white text-black">
      {/* ============================
        HERO SECTION
      ============================= */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:h-[70vh]">
        
        {/* LEFT TEXT */}
        <div className="md:w-1/2 w-full mt-10 md:mt-10" data-aos="fade-right">
          <h1 className="font-extrabold text-4xl md:text-6xl font-inter leading-tight">
            Application <br />
            <span className="text-blue-900">Development</span>
          </h1>

          <p className="font-semibold text-gray-600 mt-5 text-base md:text-lg">
            We craft high-performance, user-friendly Android and iOS apps that deliver seamless experiences and boost engagement.
          </p>

          <div className="flex flex-col md:flex-row md:items-start mt-6" data-aos="fade-up">
            <div className="md:w-1/2 text-gray-800">
              <p>
                In today’s digital world, mobile applications have become essential for every business. They help strengthen brand loyalty,
                improve customer engagement, and boost lead generation and conversions.
              </p>
            </div>

            <div className="mt-6 md:mt-0 md:ml-16 w-full md:w-1/3">
              <p className="mb-4 font-semibold">
                Want to learn more details and find how we can help?
              </p>
              <Link href="/contact">
                <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 font-bold rounded-md">
                  LET'S GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 w-full flex justify-center" data-aos="fade-left">
          <Image
            className="rounded-xl mt-10"
            src="/website_Recuirment/mobile-development-services.png"
            alt="Mobile App Development - Virtunests Solutions"
            width={700}
            height={600}
            priority
          />
        </div>
      </div>

      {/* ============================
        PARAGRAPHS
      ============================= */}
      <div className="mt-20 space-y-6 text-gray-700 font-semibold leading-relaxed">
        <p>
          1. At <span className="text-blue-600">Virtunests Solutions</span>, we provide{" "}
          <span className="text-blue-600">custom mobile app development</span> services tailored to your{" "}
          <span className="text-blue-600">goals</span> and{" "}
          <span className="text-blue-600">market challenges</span>. Our expert team builds{" "}
          <span className="text-blue-600">native</span> and{" "}
          <span className="text-blue-600">web-based Android & iOS apps</span> with seamless{" "}
          <span className="text-blue-600">API</span> and{" "}
          <span className="text-blue-600">payment integrations</span>.
        </p>

        <p>
          2. Whether your business operates on a <span className="text-blue-600">B2B</span> or{" "}
          <span className="text-blue-600">B2C</span> model, we deliver{" "}
          <span className="text-blue-600">mobile apps that drive results</span> and help your business{" "}
          <span className="text-blue-600">grow</span>.
        </p>
      </div>
 
      {/* ============================
        HOW WE DO IT
      ============================= */}
      <div className="flex flex-col items-center my-20 text-center">
        <h1 className="text-3xl font-semibold" data-aos="fade-up">
          HOW WE DO IT!
        </h1>

        <p className="text-gray-700 mt-4 max-w-3xl" data-aos="fade-up">
          Our skilled team of professionals transforms your ideas into reality.
          Here’s an overview of the professional applications we develop for clients across industries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-10 w-full justify-items-center">
          {[
            "E-Commerce App",
            "Booking App",
            "Employee Management App",
            "Inventory Management App",
          ].map((item, index) => (
            <div
              key={index}
              className="w-[85vw] sm:w-[40vw] lg:w-[30vw] px-5 py-4 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 flex items-center justify-start rounded-md shadow-sm"
              data-aos="zoom-in"
            >
              <span className="bg-blue-500 rounded-full px-3 py-1 text-white mr-3">
                {`0${index + 1}`}
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ============================
        DETAILS SECTIONS
      ============================= */}
      <div className="space-y-10 text-gray-800">

        <Section title="E-Commerce App">
          An e-commerce app allows your business to expand reach and increase conversions. At{" "}
          <b className="text-black/80">Virtunests Solutions</b>, we design secure, fast, and user-friendly shopping apps for maximum impact.
        </Section>

        <Section title="Booking App">
          Whether for travel, education, or wellness — a booking app offers 24/7 accessibility.
          Our team builds intuitive booking apps with secure payments to help grow your business.
        </Section>

        <Section title="Employee Management App">
          Manage your workforce efficiently with powerful employee management systems.
          We create apps that boost productivity and ensure smooth communication.
        </Section>

        <Section title="Inventory Management App">
          Streamline supply-chain operations with real-time inventory tracking and insights.
          Our apps help reduce waste and improve stock management efficiency.
        </Section>

      </div>

      {/* CTA */}
      <LetsTalk />
    </div>
  );
};

// ==============================
// REUSABLE SECTION COMPONENT
// ==============================
const Section = ({ title, children }) => (
  <div>
    <h2 className="font-bold text-2xl mb-3 text-black">{title}:</h2>
    <p>{children}</p>
  </div>
);

export default Mobile_Dev;
