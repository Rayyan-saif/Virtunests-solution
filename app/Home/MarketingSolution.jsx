"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

// Public folder image path
const MainL = "/website_Recuirment/picture-short.png";

const MarketingSolution = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    "SEO techniques to increase organic search visibility",
    "Precision-targeted PPC campaigns that maximize ad spend",
    "Social media strategies to build stronger customer engagement",
    "Advanced analytics to track campaign success and growth opportunities",
  ];

  return (
    <section className="w-full bg-linear-to-bl from-blue-100 via-white to-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 px-6">
        
        {/* LEFT: Image */}
        <div
          id="Left"
          data-aos="fade-up"
          data-aos-delay={100}
          className="relative lg:flex items-center justify-center lg:w-1/2 w-full hidden"
        >
          {/* Background Shape */}
          <div className="absolute w-72 h-80 sm:w-80 sm:h-112 md:w-88 md:h-100 bg-blue-100 rounded-3xl shadow-lg -z-10"></div>

          {/* Main Image */}
          <Image
            src={MainL}
            width={500}
            height={500}
            alt="Digital marketing solutions to grow your online presence"
            className="relative z-10 w-full sm:w-[95%] md:w-[110%] max-w-lg object-contain drop-shadow-2xl"
            priority={false}
          />
        </div>

        {/* RIGHT: Content */}
        <div
          id="Right"
          data-aos="fade-right"
          data-aos-delay={200}
          className="lg:w-1/2 w-full"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold leading-snug pb-1 text-blue-500">
            Comprehensive Digital Marketing Solutions
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed font-roboto text-base md:text-lg">
            Our digital marketing services elevate your online visibility, increase engagement,
            and help your business achieve measurable growth. From SEO optimization to PPC
            management, we provide data-driven marketing strategies that deliver real results.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition rounded-full px-4 py-2 shadow-sm"
              >
                <FaCheckCircle className="text-blue-600 text-lg shrink-0" />
                <span className="text-gray-800 text-sm md:text-base font-inter">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <a href="/Digital_marketing">
            <button className="mt-6 font-inter text-sm md:text-base py-2 px-5 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketingSolution;
