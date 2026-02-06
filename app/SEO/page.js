"use client"

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import LetsTalk from '../LetsTalk';
import Image from 'next/image';
import Link from 'next/link';

const Search_Engine_Optimization = () => {
 useEffect(() => {
     AOS.init({ duration: 1000, once: true })
   }, [])
 

  return (
    <div className="min-h-screen py-24 px-6 md:px-20 bg-white text-black">
    
    <div className='flex flex-col md:flex-row h-auto md:h-[70vh]'>
      {/* Left */}
        <div className='w-full md:w-1/2 py-10 md:pt-12' data-aos="fade-right">
          <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl font-inter'>
            Search Engine <br />
            <span className='text-blue-900'>Optimization</span>
          </h1>
          <p className='font-semibold font-inter py-5 text-gray-600'>
            Boost your website’s visibility, rank higher on search engines, and attract <br /> organic traffic that converts into leads and customers.
          </p>

          <div className='flex flex-col md:flex-row gap-6 md:gap-16 mt-5' data-aos="fade-up">
            <div className='w-full md:w-1/2 text-gray-800'>
              <p>Our team delivers measurable results, helping you rank higher, generate more leads, increase conversions, and improve customer retention through extensive brand management and market research.</p>
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
        <div className='w-full md:w-[47%] flex justify-center items-start mt-10 md:mt-5' data-aos="fade-left">
         <Image
            src="/website_Recuirment/SEO.jpg"
            alt="SEO"
            width={900}
            height={600}
            className="rounded-xl shadow-lg w-full sm:w-[80%] lg:w-[50vw] object-cover"
        />
        </div>
    </div>

      {/* Paragraphs */}
      <div className='mt-16 space-y-10'>
        <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
        1. At Virtunests Solutions, we apply a wide range of 
        <span className="text-blue-600"> on-page optimization</span> and 
        <span className="text-blue-600"> off-page optimization</span> techniques tailored to your goals and challenges. 
        Whether you are a 
        <span className="text-blue-600"> B2B</span> or 
        <span className="text-blue-600"> B2C</span> business, regardless of your size or industry, we provide the   right 
        <span className="text-blue-600"> SEO solution</span> for you.
      </p>

        <p className="font-semibold text-gray-700 leading-relaxed" data-aos="fade-up">
          2. <span className="text-blue-600">Search Engine Optimization (SEO)</span> is the practice of using proven techniques to improve your website’s 
          <span className="text-blue-600"> visibility on search engines</span>. In today’s 
          <span className="text-blue-600"> competitive digital world</span>, SEO is essential for every brand. It requires both 
          <span className="text-blue-600"> content and technical expertise</span> to rank higher on 
          <span className="text-blue-600"> Search Engine Result Pages (SERPs)</span>.
        </p>
    </div>

    <div className='flex flex-col items-center my-20'>
      <h1 className='text-3xl font-semibold'>HOW WE DO IT!</h1>
      <p className='text-gray-700 mt-5 text-center'>Our team of skilled professionals knows how to deliver effective SEO results. Here’s a quick look at how we handle both on-page <br /> and off-page optimization for your business.</p>

      <h1 className='font-bold text-center text-3xl mt-5'>ON-PAGE OPTIMIZATION</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10'>
          {[
            "Keyword Research & Smart Integration",
            "Title Tag Optimization",
            "Header Optimization (H2–H6)",
            "SEO-Friendly URL Structures",
            "Image Optimization with Alt Text",
            "Internal Linking Strategy",
            "Meta Description Writing",
          ].map((ad, index) => (
            <div key={index} className='flex px-5 py-5 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 items-center' data-aos="fade-up">
              <span className='bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2'>{(index+1).toString().padStart(2,'0')}</span>
              <h2>{ad}</h2>
            </div>
          ))}
        </div>

    </div>

    <div className='Pragraphs mt-10'>
      

      <h1 className='font-bold text-2xl my-3'>Keyword Research & Smart Integration:</h1>
      <p className='text-gray-800'>Keyword research and integration help search engines understand the content of your web page. Our team identifies high-volume, relevant keywords and seamlessly integrates them into your content to enhance search rankings.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>Title Tag Optimization:</h1>
      <p className='text-gray-800'>Title tags tell both search engines and users that your page is relevant to their query. We create optimized title tags that include targeted keywords and encourage users to click.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>Header Optimization (H2–H6):</h1>
      <p className='text-gray-800'>Well-structured headers make content easy to read and more engaging. We optimize your headers with primary and secondary keywords, improving both readability and SEO performance.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>SEO-Friendly URL Structures:</h1>
      <p className='text-gray-800'>Clean, keyword-rich URLs are favored by search engines and help users easily navigate. Our experts structure and optimize your URLs to boost visibility in search results.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>Image Optimization with Alt Text:</h1>
      <p className='text-gray-800'>Images also play a big role in SEO. We add keyword-focused Alt Text descriptions to your images so search engines clearly understand the context, helping your visuals rank better.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>Internal Linking Strategy:</h1>
      <p className='text-gray-800'>Internal links connect your pages and guide both users and search engines to explore more of your website. We build a strong internal linking structure to improve crawling, navigation, and visibility.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>Meta Description Writing:</h1>
      <p className='text-gray-800'>Meta descriptions summarize your web page for both users and search engines. Our team writes compelling, keyword-rich descriptions that improve click-through rates and search performance.</p>


    </div>

    <div className='flex flex-col items-center my-20'>
      <h1 className='font-bold text-center text-3xl mt-5'>OFF-PAGE OPTIMIZATION</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10'>
          {[
            "XML Sitemap Setup",
            "HTML Sitemap Creation",
            "Redirect Management (301, 302 & 307)",
            "Fixing 404 Errors",
            "301 Redirects for Migration & Security",
            "HTML Markup Optimization",
            "Website Speed Optimization",
          ].map((ad, index) => (
            <div key={index} className='flex px-5 py-5 border border-gray-300 text-xl font-bold text-gray-800 bg-gray-100 items-center' data-aos="fade-up">
              <span className='bg-blue-500 rounded-full px-2 py-1.5 h-10 text-white mr-2'>{(index+1).toString().padStart(2,'0')}</span>
              <h2>{ad}</h2>
            </div>
          ))}
        </div>
    </div>

    <div className='Pragraphs mt-10'>
      

      <h1 className='font-bold text-2xl my-3'>XML Sitemap Setup:</h1>
      <p className='text-gray-800'>Search engines crawl your website using sitemaps, which highlight the most important pages. At Virtunests Solutions, we create XML sitemaps with canonical URLs so your key pages are always discovered and indexed.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>HTML Sitemap Creation:</h1>
      <p className='text-gray-800'>Unlike XML, HTML sitemaps serve both users and search engines. They provide a clear, organized structure, helping visitors quickly find pages that might be harder to navigate otherwise. We design optimized HTML sitemaps that make browsing smooth and simple.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>Redirect Management (301, 302 & 307):</h1>
      <p className='text-gray-800'>Redirects ensure users and search engines are guided to the right pages when URLs change. Whether it’s updates, maintenance, or content migration, our team sets up redirects that preserve SEO value and provide a seamless experience.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>Fixing 404 Errors:</h1>
      <p className='text-gray-800'>Broken links can frustrate visitors and hurt your rankings. We regularly monitor and fix 404 errors on your website to ensure smooth navigation and a reliable user experience.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>301 Redirects for Migration & Security:</h1>
      <p className='text-gray-800'>If you’re moving to a new domain, deleting pages, or upgrading from HTTP to HTTPS, 301 redirects are essential. We set up SEO-friendly redirects that protect your rankings and keep users engaged.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>HTML Markup Optimization:</h1>
      <p className='text-gray-800'>Clean, optimized HTML improves both user experience and search engine performance. We enhance your site’s structure by minimizing file sizes, limiting unnecessary redirects, validating HTML codes, and adding effective meta descriptions.</p>
      
      <h1 className='font-bold text-2xl mb-3 mt-10'>Website Speed Optimization:</h1>
      <p className='text-gray-800'>ast websites rank higher and convert better. Our experts optimize page loading speed and mobile performance to improve your SERP ranking, generate leads, and boost retention rates.</p>


    </div>


      {/* CTA Section */}
      <LetsTalk/>

    </div>
  );
};

export default Search_Engine_Optimization;