"use client";
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { Link } from 'react-router-dom'
// import LetsTalk from './LetsTalk'
import Image from 'next/image'
import LetsTalk from '../LetsTalk';
import Link from 'next/link';

const ThreeD_Design = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div className="min-h-screen py-24 px-4 md:px-20 bg-white text-black">

      {/* Top Section */}
      <div className='flex flex-col md:flex-row h-auto md:h-[70vh]'>

        {/* Left */}
        <div className='w-full md:w-1/2 py-10 md:py-20' data-aos="fade-right">
          <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl font-inter'>
            3D Design & <br />
            <span className='text-blue-900'>Visualization</span>
          </h1>
          <p className='font-semibold text-sm font-inter pt-5 text-gray-600'>
            Using industry-leading tools such as Blender, Maya, 3ds Max, and Cinema 4D, we craft high-quality, hyper-realistic 3D visuals that bring complex ideas to life with precision and creativity.
          </p>

          <div className='flex flex-col md:flex-row gap-6 md:gap-16 mt-5' data-aos="fade-up">
            <div className='w-full md:w-1/2 text-gray-800'>
              <p>
                At Virtunests Solutions, we transform concepts into stunning 3D experiences from product visualization to architectural design and full-scale animations ensuring every detail reflects excellence and impact.
              </p>
            </div>
            <div className='w-full md:w-1/3'>
              <p className='mb-5 font-semibold'>Want to explore how our 3D expertise can empower your business?</p>
              <Link href="/contact">
                <button className='bg-blue-500 text-white px-4 py-2 font-bold'>
                  LET'S GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='rounded-xl w-full md:w-[45%] flex justify-center items-start mt-10 md:mt-0 ml-0 md:ml-10' data-aos="fade-left">
          <Image 
          width={700}
          height={500}
          src="/website_Recuirment/3D_Design.Webp" 
          alt="3D Design" 
          className='max-w-full sm:h-[75vh] h-[40vh] sm:pl-10 pl-0 sm:pt-10' 
          />
        </div>
      </div>

      {/* Paragraphs */}
      <div className='mt-20 space-y-10'>

        <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
          1. We utilize platforms like <span className="text-blue-600">Blender</span>, <span className="text-blue-600">Autodesk Maya</span>, <span className="text-blue-600">3ds Max</span>, <span className="text-blue-600">Cinema 4D</span>, and <span className="text-blue-600">Unreal Engine</span> to craft immersive <span className="text-blue-600">3D models</span>, refined <span className="text-blue-600">textures</span>, optimized <span className="text-blue-600">lighting</span>, and high-definition <span className="text-blue-600">animations</span> perfectly aligned with your goals.
        </p>

        <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
          2. Our <span className="text-blue-600">3D design solutions</span> help businesses <span className="text-blue-600">visualize ideas</span> before production, <span className="text-blue-600">enhance marketing campaigns</span>, and deliver <span className="text-blue-600">high-impact visuals</span>. Whether in <span className="text-blue-600">architecture</span>, <span className="text-blue-600">gaming</span>, <span className="text-blue-600">e-commerce</span>, or <span className="text-blue-600">manufacturing</span> — we turn your vision into a <span className="text-blue-600">refined 3D masterpiece</span>.
        </p>

      </div>

      {/* HOW WE DO IT */}
      <div className='flex flex-col items-center my-20'>
        <h1 className='text-3xl font-semibold'>HOW WE DO IT!</h1>
        <p className='text-gray-700 mt-5 text-center max-w-2xl'>
          At Virtunests Solutions, we turn abstract ideas into visually captivating 3D experiences. We begin by understanding your concept, then craft detailed models with accurate lighting, realistic textures, and refined motion.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10'>
          {[
            "3D Design & Visualization",
            "3D Modeling",
            "3D Rendering",
            "3D Animation",
            "Architectural & Interior Visualization",
            "3D Product Visualization",
            "3D Motion Graphics",
          ].map((ad, index) => (
            <div key={index} className='flex px-5 py-5 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 items-center' data-aos="fade-up">
              <span className='bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2'>{(index + 1).toString().padStart(2, '0')}</span>
              <h2>{ad}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Sections */}
      <div className='space-y-10 mt-10'>
        {[
          {
            title: "3D Design & Visualization:",
            text: "3D design has become a core element of modern branding, product development, and digital storytelling. It empowers businesses to preview ideas with precision before execution. At Virtunests Solutions, we blend creativity with advanced technology to produce high-quality 3D visuals that captivate audiences and enhance brand value."
          },
          {
            title: "3D Modeling:",
            text: "We create highly accurate 3D models tailored to your product, architecture, character, or concept. Every model reflects precision and aesthetic quality while aligning with your brand’s goals."
          },
          {
            title: "3D Rendering:",
            text: "Our photorealistic rendering services bring your product or environment to life in stunning detail — ideal for marketing campaigns, presentations, advertising, and pre-production visualization."
          },
          {
            title: "3D Animation:",
            text: "We craft dynamic and engaging 3D animations that add movement and storytelling to your concept — perfect for product demos, explainer videos, brand intros, and promotional content."
          },
          {
            title: "Architectural & Interior Visualization:",
            text: "We deliver detailed and realistic architectural and interior 3D visualizations for designers, builders, and real estate developers, helping them present future projects with clarity and precision."
          },
          {
            title: "3D Product Visualization:",
            text: "Present your products with unmatched realism through high-definition 3D product visuals — ideal for eCommerce, advertising, packaging, and brand presentations."
          },
          {
            title: "3D Motion Graphics:",
            text: "We design visually captivating 3D motion graphics that combine creativity with storytelling — from logo animations to brand intros and digital ads."
          }
        ].map((item, idx) => (
          <div key={idx} data-aos="fade-up">
            <h1 className='font-bold text-2xl mb-3 mt-10'>{item.title}</h1>
            <p className='text-gray-800'>{item.text}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <LetsTalk />

    </div>
  )
}

export default ThreeD_Design;
