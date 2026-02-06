"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSecOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* Hero Image */}
      {/* <div data-aos="fade-down">
        <Image
          src="/website_Recuirment/Aboute-us.jpg"
          alt="About Hero"
          width={1920}
          height={1080}
          className="hidden w-full h-0 sm:h-[65vh] md:h-[80vh] lg:h-[80vh] mt-20 object-cover"
          priority
        />
      </div> */}

      {/* Main Section */}
      <div
        className="flex flex-col lg:flex-row items-center justify-center mt-0 px-5 md:px-10 lg:px-16 pt-32 pb-10 bg-white"
        data-aos="fade-up"
      >
        {/* Left Image */}
        <div
          className="w-full lg:w-[45%] flex justify-center mb-10 sm:mr-10 lg:mb-0"
          data-aos="zoom-in-right"
        >
          <Image
            src="/website_Recuirment/about.jpg"
            alt="About Section"
            width={700}
            height={700}
            className="w-full sm:w-[80%] md:w-[70%] lg:w-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div
          className="w-full lg:w-[55%] text-center lg:text-left"
          data-aos="fade-left"
        >
          {/* Sub Heading */}
          <div
            className="flex justify-center lg:justify-start items-center mb-3"
            data-aos="fade-right"
          >
            <div className="bg-linear-to-l from-blue-500 to-white h-3 w-8"></div>
            <h3 className="mx-2 text-blue-600 font-bold text-sm sm:text-base md:text-lg">
              ABOUT OUR COMPANY
            </h3>
          </div>

          {/* Main Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter mb-5 text-black"
            data-aos="fade-up"
          >
            Innovative Solutions,
            <br className="hidden sm:block" />
            Proven Success!
          </h1>

          {/* Paragraph 1 */}
          <p
            className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Virtunests Solution is a creative technology partner dedicated to
            helping you shape and scale the business you envision. From bespoke
            web platforms to immersive mobile solutions, we merge innovation
            with precision to bring your ideas to life.
          </p>

          {/* Paragraph 2 */}
          <p
            className="text-base sm:text-lg text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            In the modern digital era, having a website isn’t enough — your brand
            needs a voice that connects and converts. We collaborate with
            businesses to define their identity, build result-driven strategies,
            and strengthen their presence across digital landscapes with
            measurable impact.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSecOne;
