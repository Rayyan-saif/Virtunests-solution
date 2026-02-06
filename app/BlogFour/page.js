"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import blogImage from "../assets"; // Replace with your image path
import Image from "next/image";

const BlogFour = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-black font-roboto pt-5 leading-snug text-center mb-4">
        How Design + Marketing Together Boost Your Online Sales
        </h1>

        {/* Date + Author */}
        <div className="flex items-center justify-center space-x-4 text-gray-700 text-sm mb-10">
          <span>📅 July 15, 2024</span>
          <span>•</span>
          <span>✍️ By Virtunest Solutions</span>
        </div>

        {/* Image */}
        <div className="">
        <div className="overflow-hidden mb-10 lg:w-[40vw] lg:mr-20">
          <Image
            src="/website_Recuirment/blog04.jpg"
            alt="UI-UX-Services"
            width={900}
            height={500}
            className="rounded-3xl object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
       <div className="text-gray-800 text-lg leading-relaxed space-y-6 font-roboto text-balance lg:w-[60vw]">

  <p>
    Design catches attention, but marketing creates direction. A visually appealing design can stop someone from scrolling, 
    but it’s the power of marketing that convinces them to take action. When both work together, your brand becomes 
    memorable, trusted, and truly unstoppable — creating a complete digital experience for your audience.
  </p>

  <p>
    <h2 className="font-semibold text-xl">Why Design Alone Isn’t Enough</h2>
    Even the most outstanding design fails if no one sees it. A beautiful website, logo, or social media post needs the 
    right visibility, the right message, and the right audience. Without marketing, great design becomes a hidden gem — 
    present, but unnoticed. Today, brands need a balance of creativity and strategy to grow effectively.
  </p>

  <p>
    <h2 className="font-semibold text-xl">Website Redesign Services</h2>
    Your website is the digital face of your business. Our website redesign services focus on improving UI, speed, 
    mobile responsiveness, SEO structure, and user flow. With a modern interface and optimized user journey, your 
    website becomes more engaging, trustworthy, and conversion-ready. Whether you are rebranding or updating an old site, 
    we help you create a fast, modern, and impactful digital presence.
  </p>

  <p>
    <h2 className="font-semibold text-xl">How Marketing Supports Design</h2>
    Marketing and design are not separate—marketing enhances design and design strengthens marketing. Together they:
    <br />• Bring targeted traffic to the pages created by your design team
    <br />• Promote visuals on platforms where your audience is most active
    <br />• Use data and analytics to refine visuals for better engagement
    <br />• Improve brand recognition through consistent messaging and aesthetics
    <br /><br />
    In short, design builds perception and marketing builds momentum.
  </p>

  <p>
    <h2 className="font-semibold text-xl">Social Media Marketing for Small Brands</h2>
    Small businesses thrive when design and strategy combine. Our social media marketing services help your brand grow 
    by pairing eye-catching visuals with powerful content strategies. From daily posts to paid ads, we ensure your 
    brand not only looks good — but also performs well.
    <br /><br />
    <strong>Complete Online Presence for Small Business</strong> <br />
    We help small businesses establish a strong and consistent online presence through:
    <br />• Website development  
    <br />• Social media content  
    <br />• Paid ads  
    <br />• Branding & design  
    <br />• Marketing funnels  
    <br />• Lead generation strategies  
    <br />
    When everything works as one system, your brand grows faster and smarter.
  </p>

  <blockquote className="border-l-4 border-blue-700 pl-4 italic text-blue-900 bg-blue-50 py-2 px-4 rounded-xl">
    "Success in {new Date().getFullYear()} is no longer about simply being online — it's about being seen, trusted, and remembered."
  </blockquote>

  <p>
    <h2 className="font-semibold text-xl">UI/UX + Social Media Growth Package</h2>
    If you want complete growth, our UI/UX + social media package brings both design and strategy together. From website 
    layouts to Instagram content, from landing pages to ad creatives — everything is aligned to create a powerful brand 
    identity that attracts, engages, and converts.
    <br /><br />
    Ready to grow with meaningful design and smart marketing? <strong>Start with us today and transform your brand into 
    a digital powerhouse.</strong>
  </p>

  {/* CTA */}
  <div  className="pt-6 flex flex-wrap gap-6">
                <a
                href="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                >
                Contact Us
                </a>

                <a
                href="/Blogs"
                className="border border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300"
                >
                ← Go Back
                </a>

              </div>

    </div>


        </div>
      </div>
    </section>
  )
}

export default BlogFour