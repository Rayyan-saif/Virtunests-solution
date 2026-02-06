"use client";

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link';
import LetsTalk from '../LetsTalk'


export default function Graphic_Design() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <div className="min-h-screen py-24 px-5 md:px-20 pt-40 bg-white text-black">

      {/* ======= HERO SECTION ======= */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-10 space-y-10 md:space-y-0">
        
        {/* LEFT CONTENT */}
        <div className="w-full md:w-[55%]" data-aos="fade-right">
          <h1 className="font-extrabold text-4xl md:text-5xl font-inter leading-snug">
            Graphic Designing <br />
            <span className="text-blue-900">and Illustrations</span>
          </h1>

          <p className="font-semibold font-inter text-md py-5 text-gray-600">
            Creative & custom designs to make your brand stand out. Logos, brochures, social media content, and more.
          </p>

          <div className="md:flex items-start md:space-x-8 space-y-5 md:space-y-0" data-aos="fade-up">
            <div className="text-gray-800 md:w-[60%]">
              <p>
                Your brand’s visuals create the first impression of your business, and having creative, purpose-driven graphic design gives you a competitive edge in today’s digital world.
              </p>
            </div>

            <div className="md:w-[44%]">
              <p className="mb-5 font-semibold">
                Want to learn more details and find how we can help?
              </p>
              <Link href="/contact">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 font-bold transition-all duration-300">
                  LET'S GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[55%]" data-aos="fade-left">
        <Image
        src="/website_Recuirment/graphicdesign.png"
        alt="Graphic_Designing"
        width={900}
        height={600}
        className="rounded-xl shadow-lg w-full sm:w-[80%] lg:w-[50vw] object-cover"
        />
        </div>
      </div>

      {/* ======= PARAGRAPHS ======= */}
      <div className="text-gray-700 mt-18 space-y-8 leading-relaxed font-semibold">
        <p data-aos="fade-up">
          1. <span className="text-blue-600">Graphic design</span> and 
          <span className="text-blue-600"> illustration</span> are powerful media that capture attention and communicate your 
          <span className="text-blue-600"> brand’s message</span> clearly. Using creative tools and 
          <span className="text-blue-600"> techniques</span>, we craft 
          <span className="text-blue-600"> stunning visuals</span> that bring your ideas to life.
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          2. At Virtunests Solutions, we create 
          <span className="text-blue-600"> innovative</span> 2D & 3D artwork, 
          <span className="text-blue-600"> typography</span>, and 
          <span className="text-blue-600"> motion graphics</span> that enhance your 
          <span className="text-blue-600"> brand identity</span> and drive 
          <span className="text-blue-600"> meaningful engagement</span>.
        </p>
      </div>

      {/* ======= HOW WE DO IT ======= */}
      <div className="flex flex-col items-center my-20" data-aos="fade-up">
        <h1 className="text-3xl font-semibold">HOW WE DO IT!</h1>
        <p className="text-gray-700 mt-5 text-center max-w-3xl">
          Our team specializes in diverse visual styles from clip art to 3D motion designs. Here’s a glimpse of how we bring creativity and precision together in every project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full">
          {[
            "Logo Design",
            "Business Card Design",
            "Packaging & Label Design",
            "Social Media Creatives & Banners",
            "Digital Marketing Ads",
            "Brand Identity Design",
            "Stationery Design",
            "Brochures & Catalogs",
            "Posters & Flyers",
            "Illustrations & Custom Artwork",
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="flex items-center px-5 py-4 border border-gray-300 text-lg font-bold text-gray-800 bg-gray-100 rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              <span className="bg-blue-500 rounded-full px-2 py-1.5 text-white mr-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ======= DETAILED PARAGRAPHS ======= */}
      <div className="space-y-10 text-gray-800" data-aos="fade-up">
        {[
          {
            title: "Logo Design:",
            text: "Your logo is the face of your brand the first thing customers notice and remember. It represents your values, story, and identity. At Virtunests Solutions, we craft professional and custom logo designs that perfectly align with your brand’s personality through balanced typography, color psychology, and visual elements that leave a lasting impression."
          },
          {
            title: "Business Card Design:",
            text: "A business card is more than just contact information it’s a handshake in printed form. Our team designs elegant, creative, and professional business cards that strengthen your brand identity and help you make meaningful connections in every meeting."
          },
          {
            title: "Packaging & Label Design:",
            text: "Product packaging is a silent salesperson it speaks volumes before a word is said. We create unique, professional, and visually appealing packaging and label designs that make your products stand out, enhance customer appeal, and build trust through thoughtful aesthetics and structure."
          },
          {
            title: "Social Media Creatives & Banners:",
            text: "Social media is all about standing out in a sea of content. We design scroll-stopping social media posts, stories, and banners that capture attention instantly, communicate your brand message effectively, and boost engagement across all digital platforms."
          },
          {
            title: "Digital Marketing Ads:",
            text: "From Google and Meta ads to display campaigns, we create attention-grabbing, conversion-driven ad visuals that represent your brand authentically and increase visibility. At Virtunests Solutions, our focus is to make your digital presence unforgettable."
          },
          {
            title: "Brand Identity Design:",
            text: "A strong brand identity is the foundation of recognition and trust. We design complete brand identity kits, including color palettes, typography systems, and visual guidelines that ensure consistent and professional brand representation across all touchpoints."
          },
          {
            title: "Stationery Design:",
            text: "Professional stationery elevates your brand image. We design letterheads, envelopes, notepads, and folders that perfectly reflect your corporate identity helping your brand look polished, consistent, and memorable."
          },
          {
            title: "Brochures & Catalogs:",
            text: "Printed materials still hold power when designed right. We create high-quality brochures and catalogs that combine creative layouts, visuals, and persuasive copy to communicate your brand story and showcase your offerings effectively."
          },
          {
            title: "Posters & Flyers:",
            text: "Whether it’s a product launch, event, or campaign, our custom-designed posters and flyers are tailored to grab attention, spread your message, and drive engagement both online and offline."
          },
          {
            title: "Illustrations & Custom Artwork:",
            text: "We also specialize in custom illustrations, character art, and concept-based visuals that make your content unique and storytelling more engaging from editorial illustrations to creative digital artwork tailored to your brand style."
          }
        ].map((item, i) => (
          <div key={i}>
            <h1 className="font-bold text-2xl mb-3">{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* ======= CTA SECTION ======= */}
      <LetsTalk/>

    </div>
  )
}
