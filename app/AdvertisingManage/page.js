"use client"

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { Link } from 'react-router-dom'
// import Ads from "../assets/website_Recuirment/"
import LetsTalk from '../LetsTalk'
import Image from 'next/image'
import Link from 'next/link'

const AdvertisingManage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div className="min-h-screen py-20 px-4 md:px-20 bg-white text-black">

      {/* Top Section */}
      <div className='flex flex-col md:flex-row h-auto md:h-[70vh]'>

        {/* Left */}
        <div className='w-full md:w-1/2 py-10 md:py-20' data-aos="fade-right">
          <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl font-inter'>
            Advertising <br />
            <span className='text-blue-900'>Management</span>
          </h1>
          <p className='font-semibold font-inter py-5 text-gray-600'>
            A strong advertising strategy starts with targeted campaigns that maximize reach and deliver real results.
          </p>

          <div className='flex flex-col md:flex-row gap-6 md:gap-16' data-aos="fade-up">
            <div className='w-full md:w-1/2 text-gray-800'>
              <p>Our ad management team identifies the key features of your products or services and creates ads that highlight what matters most helping you attract and convert the right customers.</p>
            </div>
            <div className='w-full md:w-1/3'>
              <p className='mb-5 font-semibold'>Want to learn more details and find how we can help?</p>
              <Link href="/Contact">
                <button className='bg-blue-500 text-white px-4 py-2 font-bold'>
                  LET'S GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='w-full md:w-[35%] flex justify-center items-start mt-10 md:mt-10 md:ml-20 ml-0' data-aos="fade-left">
          <Image
            src="/website_Recuirment/Advertising Management.png"
            alt="Advertising Management"
            width={450}
            height={500}
            className="rounded-xl shadow-lg"
        />
        </div>
      </div>

      {/* Paragraphs */}
      <div className='mt-16 space-y-10'>
        <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
          1. <span className="text-blue-600">Ad Management Services</span> every 
          <span className="text-blue-600"> small</span>, 
          <span className="text-blue-600"> medium</span>, or 
          <span className="text-blue-600"> large business</span> needs advertising to 
          <span className="text-blue-600"> boost brand visibility</span>, 
          <span className="text-blue-600"> generate leads</span>, and 
          <span className="text-blue-600"> increase conversions</span>. Running ads across different platforms helps you 
          <span className="text-blue-600"> promote your brand</span> and 
          <span className="text-blue-600"> reach the right audience</span>.
        </p>

        <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
          2. At Virtunests Solutions, we provide 
          <span className="text-blue-600"> complete ad management</span> and 
          <span className="text-blue-600"> monitoring services</span> tailored to your 
          <span className="text-blue-600"> goals</span>. Our 
          <span className="text-blue-600"> result-driven campaigns</span> are backed by 
          <span className="text-blue-600"> detailed brand management</span> and 
          <span className="text-blue-600"> market research</span> to ensure 
          <span className="text-blue-600"> maximum impact</span>.
        </p>
      </div>

      {/* HOW WE DO IT */}
      <div className='flex flex-col items-center my-20'>
        <h1 className='text-3xl font-semibold'>HOW WE DO IT!</h1>
        <p className='text-gray-700 mt-5 text-center max-w-2xl'>
          Here’s an overview of the different types of professional ads we create for our clients, tailored to their specific goals and business needs.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10'>
          {[
            "Display Ads",
            "Shopping Ads",
            "Video Ads",
            "Local Service Ads",
            "Application (App) Ads"
          ].map((ad, index) => (
            <div key={index} className='flex px-5 py-5 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 items-center' data-aos="fade-up">
              <span className='bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2'>{(index+1).toString().padStart(2,'0')}</span>
              <h2>{ad}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Paragraphs */}
      <div className='space-y-10 mt-10'>
        {[
          { title: "Display Ads:", text: "Display ads are a mix of images, text, and links shown on different websites and apps. They help attract your target audience from their favorite platforms and bring them directly to your website or app. At Virtunests Solutions, we create effective display ads that generate leads and boost conversions." },
          { title: "Shopping Ads:", text: "Shopping ads showcase your products at the top of search engine results with an image, price, and direct link. Since they appear when people are actively searching for products, they are highly effective in turning leads into customers. At Virtunests Solutions, we help businesses rank their shopping ads higher on SERPs to increase visibility and conversions." },
          { title: "Video Ads:", text: "Video ads are short and engaging videos shown on platforms like YouTube, where large audiences already exist. They are a powerful way to promote your products or services and drive traffic to your website or app. At Virtunests Solutions, our experts create result-driven video ads that expand your reach, generate leads, and improve conversions." },
          { title: "Local Service Ads:", text: "Local service ads appear on search engines when users look for products or services near your operating area. They include your business name, reviews, hours, and location pin. At Virtunests Solutions, we set up local service ads that help you attract nearby customers, generate more leads, and increase conversions." },
          { title: "Application (App) Ads:", text: "App ads are designed to promote your mobile application across websites and apps. They include app screenshots, a short description, and a call-to-action button to download or install the app. At Virtunests Solutions, we create tailored app ads that boost downloads, grow your user base, and help your business scale." }
        ].map((item, idx) => (
          <div key={idx} data-aos="fade-up">
            <h1 className='font-bold text-2xl mb-3 mt-10'>{item.title}</h1>
            <p className='text-gray-800'>{item.text}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
     <LetsTalk/>

    </div>
  )
}

export default AdvertisingManage
