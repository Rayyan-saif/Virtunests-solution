"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import LetsTalk from "../LetsTalk"; 
// 👆 Ensure the path matches your project structure

export default function Figma() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen py-24 px-6 md:px-20 bg-white text-black">

      {/* -------------------- Hero Section -------------------- */}
      <div className="flex flex-col md:flex-row h-auto md:h-[70vh]">
        
        {/* Left */}
        <div className="w-full md:w-1/2 py-10 md:py-20" data-aos="fade-right">
          
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl font-inter">
            UI/UX Design <br />
            <span className="text-blue-900">Services</span>
          </h1>

          <p className="font-semibold font-inter py-5 text-gray-600">
            Elevate user experiences through intuitive interfaces and visually 
            captivating designs that engage, inspire, and drive meaningful results.
            {/* SEO Keywords included */}
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-16 mt-5" data-aos="fade-up">
            <div className="w-full md:w-1/2 text-gray-800">
              <p>
                First impressions begin with design — intuitive and engaging 
                UI/UX experiences that guide users effortlessly, boost engagement, 
                and build lasting trust.
              </p>
            </div>

            <div className="w-full md:w-1/3">
              <p className="mb-5 font-semibold">
                Want to learn more details and discover how we can help?
              </p>
              <Link href="/contact">
                <button className="bg-blue-500 text-white px-4 py-2 font-bold rounded-md hover:bg-blue-600 transition">
                  LET'S GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>

        </div>

        {/* Right */}
        <div
          className="w-full md:w-[45%] flex justify-center items-start mt-10 md:mt-0"
          data-aos="fade-left"
        >
          <Image
            src="/website_Recuirment/UI-UX-Services.png"
            alt="UI UX Design Services - Virtunests Solutions"
            width={900}
            height={600}
            className="rounded-xl max-w-full h-auto sm:pl-10 pl-0 pt-10"
            priority
          />
        </div>

      </div>


      {/* -------------------- Paragraphs Section -------------------- */}
      <div className="mt-16 space-y-10">

        <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
          1.<span className="text-blue-600">UI (User Interface)</span> and{" "}
          <span className="text-blue-600">UX (User Experience)</span> play a crucial 
          role in determining how long your customers stay connected with your brand. 
          For any{" "}
          <span className="text-blue-600">website, mobile app, SaaS dashboard, or digital platform</span>, 
          a{" "}
          <span className="text-blue-600">creative</span>,{" "}
          <span className="text-blue-600">engaging</span>,{" "}
          <span className="text-blue-600">user-friendly</span>, and{" "}
          <span className="text-blue-600">intuitive design</span> is essential for achieving higher 
          engagement and stronger brand loyalty.
        </p>

        <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
          2.At <b>Virtunests Solutions</b>, we apply{" "}
          <span className="text-blue-600">modern design principles</span>,{" "}
          <span className="text-blue-600">proven UX strategies</span>, and{" "}
          <span className="text-blue-600">in-depth market research</span> to craft{" "}
          <span className="text-blue-600">high-conversion digital experiences</span>. 
          Whether you run a{" "}
          <span className="text-blue-600">B2B</span> or{" "}
          <span className="text-blue-600">B2C</span> business, our tailor-made solutions 
          help boost engagement, retention, and user satisfaction.
        </p>

      </div>


      {/* -------------------- Categories Section -------------------- */}
      <div className="flex flex-col items-center my-20">
        
        <h1 className="text-3xl font-semibold">HOW WE DO IT!</h1>

        <p className="text-gray-700 mt-5 text-center">
          Our team of UI/UX experts delivers user-focused, visually powerful, and 
          high-performing designs crafted specifically for your industry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

          {[
            "Finance",
            "Real Estate",
            "Travel & Hospitality",
            "Media & Entertainment",
            "Non-Profit Organizations",
            "Healthcare",
            "Transportation",
            "E-Commerce",
            "SaaS (Software as a Service)",
            "Education",
          ].map((item, index) => (
            <div
              key={index}
              className="flex px-5 py-5 border border-gray-300 text-xl font-bold 
              text-gray-800 bg-gray-100 items-center rounded-lg shadow-sm"
              data-aos="fade-up"
            >
              <span className="bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <h2>{item}</h2>
            </div>
          ))}

        </div>
      </div>


      {/* -------------------- Industry Detailed Paragraphs -------------------- */}
      <div className="Pragraphs mt-10">

        {[
          {
            title: "Finance:",
            text:
              "We design secure, clear, and easy-to-navigate financial interfaces ideal for banking apps, digital wallets, investment platforms, and fintech solutions. Our UI/UX helps simplify complex actions and build trust."
          },
          {
            title: "Real Estate:",
            text:
             "Real estate platforms should offer an easy and interactive way for users to explore properties. From map-based listings to virtual tours, every element should be clear, responsive, and user-friendly. We create engaging and visually appealing real estate designs that make property browsing and management simpler for both buyers and sellers, helping clients strengthen brand credibility and increase conversions."
          },
          {
            title: "Travel & Hospitality:",
            text:
              "Travel platforms should provide an effortless and enjoyable experience for users while exploring destinations, booking trips, or checking itineraries. Every touchpoint, from flight selection to payment confirmation, must be fast and smooth. Virtunests Solutions designs engaging, visually appealing, and responsive travel and hospitality interfaces that deliver exceptional user experiences and drive higher engagement."
          },
          {
            title: "Media & Entertainment:",
            text:
              "Media and entertainment platforms must keep users hooked through intuitive navigation, seamless streaming, and engaging visuals. Whether it’s a movie streaming site, a music app, or an online magazine, the design must ensure uninterrupted enjoyment. Our team designs visually dynamic and interactive interfaces that improve engagement and ensure a smooth experience across all devices."
          },
          {
            title: "Non-Profit Organizations:",
            text:
              "Non-profit platforms need to inspire trust and convey purpose clearly. The interface should make it simple for donors to contribute, volunteers to register, and communities to stay informed. We help non-profit organizations design clean, meaningful, and emotionally engaging experiences that strengthen their online presence and connect them with a wider audience."
          },
          {
            title: "Healthcare:",
            text:
              "A healthcare platform should be intuitive, reliable, and time-efficient for both patients and doctors. Whether it’s an appointment scheduling system or a telemedicine platform, it must simplify processes like record updates, diagnosis, and prescription. At Virtunests Solutions, we design custom, user-friendly interfaces that make medical interactions seamless and help clients stand out in the healthcare industry."
          },
          {
            title: "Transportation:",
            text:
              "Transportation apps and websites should deliver a smooth and effortless experience for travelers. Whether it’s airlines, cabs, railways, or metro systems, the interface should include interactive maps, live updates, and responsive navigation. Our team at Virtunests Solutions designs engaging and functional experiences that enhance fleet management and provide travelers with a seamless journey on both web and mobile platforms."
          },
          {
            title: "E-Commerce:",
            text:
              "An e-commerce platform must visually attract visitors and make navigation effortless to increase retention and drive purchases. From product exploration to checkout, every step should feel seamless and engaging. At Virtunests Solutions, we craft interactive and conversion-focused designs that boost user engagement, strengthen brand recognition, and help clients maximize their sales potential."
          },
          {
            title: "SaaS (Software as a Service):",
            text:
              "SaaS platforms should be designed for clarity, usability, and retention. A clean interface and intuitive navigation encourage users to stay longer and explore more. Our experts at Virtunests Solutions create smooth, user-centric dashboards and workflows that improve usability, enhance customer loyalty, and help clients achieve better lead conversion."
          },
          {
            title: "Education:",
            text:
              "EdTech platforms should inspire curiosity and make learning interactive. Students engage better when learning through intuitive layouts, visuals, and multimedia. At Virtunests Solutions, we design engaging, easy-to-use educational platforms that make online learning creative, accessible, and impactful — improving both audience engagement and client retention."
          }
        ].map((item, index) => (
          <div key={index} className="mt-10" data-aos="fade-up">
            <h1 className="font-bold text-2xl mb-3">{item.title}</h1>
            <p className="text-gray-800">{item.text}</p>
          </div>
        ))}

      </div>

      {/* -------------------- CTA Section -------------------- */}
      <LetsTalk />

    </div>
  );
}
