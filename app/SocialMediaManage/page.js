"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { Link } from 'react-router-dom'
// import Social from "../assets/website_Recuirment/"
import LetsTalk from '../LetsTalk'
import Image from 'next/image'
import Link from 'next/link'

const SocialMediaManage = () => {
 useEffect(() => {
    AOS.init({ duration: 1000, once: true })
 }, [])

 return (
    <div className="min-h-screen py-28 px-4 md:px-20 bg-white text-black">
      
      {/* Top Section */}
      <div className='flex flex-col md:flex-row h-auto md:h-[70vh]'>
        
        {/* Left */}
        <div className='w-full md:w-1/2 py-10 md:py-20' data-aos="fade-right">
          <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl font-inter'>
            Social Media<br />
            <span className='text-blue-900'>Management</span>
          </h1>
          <p className='font-semibold font-inter py-5 text-gray-600'>
            Strong social media starts with engaging content that connects and converts.
          </p>

          <div className='flex flex-col md:flex-row gap-6 md:gap-16 mt-5' data-aos="fade-up">
            <div className='w-full md:w-1/2 text-gray-800'>
              <p>With all the daily operations of your business, managing social media accounts and keeping up with a content calendar can be challenging.</p>
            </div>
            <div className='w-full md:w-1/3'>
              <p className='mb-5 font-semibold'>Want to learn more details and find how we can help?</p>
              <Link href="/contact">
                <button className='bg-blue-500 text-white px-4 py-2 font-bold'>
                  LET'S GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='w-full md:w-1/2 h-full flex justify-center items-start mt-10 md:mt-5' data-aos="fade-left">
          <Image
            src="/website_Recuirment/social-media-manager.jpg"
            alt="Website Development"
            width={900}
            height={600}
            className="rounded-xl shadow-lg w-full sm:w-[80%] lg:w-[50vw] object-cover"
        />
        </div>
      </div>

      {/* Paragraphs */}
      <div className='mt-16 space-y-10'>
        <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
          1. At Virtunests Solutions, we create 
          <span className="text-blue-600"> tailored social media strategies</span> aligned with your 
          <span className="text-blue-600"> business goals</span> and 
          <span className="text-blue-600"> market challenges</span>. Through 
          <span className="text-blue-600"> effective campaigns</span>, we help you build a 
          <span className="text-blue-600"> strong online presence</span>, 
          <span className="text-blue-600"> generate leads</span>, and 
          <span className="text-blue-600"> increase conversions</span>, all while maintaining your 
          <span className="text-blue-600"> brand’s digital reputation</span> at its best.
        </p>

        <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
          2. Whether you run a 
          <span className="text-blue-600"> B2B</span> or 
          <span className="text-blue-600"> B2C</span> business, regardless of your size or industry, we offer 
          <span className="text-blue-600"> customized solutions</span> for everyone. 
          Backed by 
          <span className="text-blue-600"> extensive brand management</span> and 
          <span className="text-blue-600"> market research</span>, our approach ensures 
          <span className="text-blue-600"> measurable results</span>.
        </p>
      </div>

      {/* HOW WE DO IT */}
      <div className='flex flex-col items-center my-20'>
        <h1 className='text-3xl font-semibold'>HOW WE DO IT!</h1>
        <p className='text-gray-700 mt-5 text-center max-w-2xl'>Our team of experts takes the hassle out of social media management for you. Here’s a quick look at how we make it happen.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10'>
          {[
            "Analysis of Your Current Social Media Strategy",
            "Understanding Your Target Audience",
            "Selecting the Right Social Platforms",
            "Building Your Social Media Strategy",
            "Designing Your Social Media Profiles",
            "Developing Social Media Ads",
            "Creating Platform-Specific Content",
            "Monitoring and Optimizing Performance"
          ].map((step, index) => (
            <div key={index} className='flex px-5 py-5 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 items-center' data-aos="fade-up">
              <span className='bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2'>{(index+1).toString().padStart(2,'0')}</span>
              <h2>{step}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Paragraphs */}
      <div className='space-y-10 mt-10'>
        {[
          { title: "Analysis of Your Current Social Media Strategy:", text: "We start by analyzing your existing social media strategy (if you have one). What’s working, what’s not, and why isn’t it delivering results? We dive deep into your stats to identify gaps and optimize them according to your goals." },
          { title: "Understanding Your Target Audience:", text: "Knowing your audience is the foundation of success. We research their demographics, interests, goals, and pain points to build a clear picture of who they are and how best to engage them." },
          { title: "Selecting the Right Social Platforms:", text: "Posting everywhere doesn’t guarantee results. Once we know your audience, we identify where they spend most of their time online and select the platforms that will give your brand the best reach and impact." },
          { title: "Building Your Social Media Strategy:", text: "With clear goals and the right platforms, we create a tailored social media strategy and content calendar designed specifically around your business needs and audience." },
          { title: "Designing Your Social Media Profiles:", text: "Your social media accounts reflect your brand’s identity. We ensure everything from visuals, fonts, and colors to overall branding is consistent and aligned with your brand voice." },
          { title: "Developing Social Media Ads:", text: "We design and run targeted ad campaigns based on your goals and market challenges. These ads are distributed strategically to maximize reach, engagement, and conversions." },
          { title: "Creating Platform-Specific Content:", text: "Every platform has a unique audience. We create content tailored to each platform’s users and intent, ensuring higher engagement and stronger connections." },
          { title: "Monitoring and Optimizing Performance:", text: "Our job doesn’t end with posting. We continuously monitor performance with advanced tools, analyze feedback and data, and optimize strategies to give you a competitive edge." }
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

export default SocialMediaManage
