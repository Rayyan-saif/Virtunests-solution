"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
// import EmailM from "../assets/website_Recuirment/Email Marketing.jpg";
import LetsTalk from "../LetsTalk";
import Image from "next/image";
import Link from "next/link";

export default function EmailMarketing() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <main className="min-h-screen pt-20 bg-white text-black">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero / Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Text */}
          <div data-aos="fade-up" className="space-y-6">
            <h1 className="font-extrabold text-4xl sm:text-4xl md:text-6xl leading-tight text-slate-900">
              Email {""}
              <span className="text-blue-900">Marketing</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-500 font-semibold">
              A strong email marketing strategy starts with personalized, impactful campaigns that connect and convert.
            </p>

              <div className='flex flex-col md:flex-row gap-6 md:gap-16 mt-5' data-aos="fade-up">
              <div className='w-full md:w-1/2 text-gray-800'>
                <p>Your emails are often the first impression of your brand. Crafting engaging, goal-driven campaigns gives you a competitive edge in today’s digital world. </p>
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
      <div className='w-full md:w-[95%] flex justify-center items-start mt-10 md:mt-0' data-aos="fade-left">
         <Image
            src="/website_Recuirment/Email Marketing.jpg"
            alt="Advertising Management"
            width={900}
            height={600}
            className="rounded-xl shadow-lg w-full sm:w-[80%] lg:w-[50vw] object-cover"
            />
      </div>
        </div>

        {/* Key Points (with subtle AOS) */}
        <div className="mt-12 space-y-8">
          <article data-aos="fade-up" className="prose-sm sm:prose lg:prose-lg max-w-none text-slate-800">
            <p className="font-semibold">
              1. <span className="text-blue-600">Email marketing</span> is one of the most effective <span className="text-blue-600">digital channels</span> to build lasting connections.
              By sending <span className="text-blue-600">professional promotional emails</span> you can showcase <span className="text-blue-600">products</span>, <span className="text-blue-600">services</span>, and <span className="text-blue-600">exclusive offers</span>, driving higher <span className="text-blue-600">engagement</span> and <span className="text-blue-600">conversions</span>.
            </p>
          </article>

          <article data-aos="fade-up" data-aos-delay="120" className="prose-sm sm:prose lg:prose-lg max-w-none text-slate-800">
            <p className="font-semibold">
              2. At <b>Virtunests Solutions</b>, we deliver <span className="text-blue-600">conversion-focused email campaigns</span> backed by <span className="text-blue-600">brand strategy</span> and <span className="text-blue-600">market research</span>. Campaigns are designed to <span className="text-blue-600">grab attention</span>, <span className="text-blue-600">nurture trust</span>, and produce <span className="text-blue-600">measurable results</span>.
            </p>
          </article>

          <article data-aos="fade-up" data-aos-delay="240" className="prose-sm sm:prose lg:prose-lg max-w-none text-slate-800">
            <p className="font-semibold">
              3. We design multiple campaign types <span className="text-blue-600">welcome</span>, <span className="text-blue-600">newsletter</span>, <span className="text-blue-600">lead-nurturing</span>, <span className="text-blue-600">dedicated</span>, and <span className="text-blue-600">seasonal</span> emails each tailored to your business goals and audience segments.
            </p>
          </article>
        </div>

        {/* How We Do It - Cards */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900 text-center">HOW WE DO IT!</h2>
          <p className="text-slate-700 text-center max-w-2xl mx-auto mt-3">
            Our team builds result-driven email programs from strategy and creative to automation and reporting.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Welcome Emails",
              "Newsletter Emails",
              "Lead Nurturing Emails",
              "Dedicated Emails",
              "Invite Emails",
              "Seasonal Marketing Emails",
            ].map((title, idx) => (
              <div
                key={title}
                data-aos="zoom-in"
                data-aos-delay={idx * 80}
                className="bg-white rounded-lg shadow-sm p-5 border border-slate-100 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="text-sm text-slate-600 mt-3">
                  {/* short descriptive sentence - keep concise for card */}
                  We craft targeted content and automation to maximize opens, clicks and conversions.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed sections */}
        <div className="mt-12 space-y-10">
          {[
            {
              title: "Welcome Emails",
              text:
                "Welcome emails greet new subscribers and customers with brand messaging, incentives, and clear next steps. We design sequences that build trust and improve retention.",
            },
            {
              title: "Newsletter Emails",
              text:
                "Newsletters keep your audience informed and engaged. Our newsletters combine valuable content and promotions to grow loyalty and drive traffic.",
            },
            {
              title: "Lead Nurturing Emails",
              text:
                "Nurture prospects with automated sequences that educate, build authority, and guide users toward conversion.",
            },
            {
              title: "Dedicated Emails",
              text:
                "Targeted campaigns focused on specific segments or promotions — ideal for product launches, promotions, or re-engagement.",
            },
            {
              title: "Invite Emails",
              text:
                "Event or webinar invites designed to boost RSVPs and participation with clear CTAs and persuasive copy.",
            },
            {
              title: "Seasonal Marketing Emails",
              text:
                "Holiday and seasonal campaigns that resonate with audience sentiment and drive timely conversions.",
            },
          ].map((s) => (
            <section key={s.title} data-aos="fade-up" className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-2xl text-black mb-2">{s.title}:</h3>
              <p className="text-slate-700">{s.text}</p>
            </section>
          ))}
        </div>

        {/* CTA */}
        <LetsTalk/>
      </section>
    </main>
  );
}
