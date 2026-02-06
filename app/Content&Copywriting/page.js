"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LetsTalk from "../LetsTalk";
import Image from "next/image";
import Link from "next/link";

export default function ContentCopywriting() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen py-28 px-5 md:px-20 pt-40 bg-white text-black">
      {/* Top Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-5" data-aos="fade-right">
          <h1 className="font-extrabold text-4xl md:text-5xl font-inter">
            Content Writing & <br />
            <span className="text-blue-900">Copywriting</span>
          </h1>

          <p className="font-semibold font-inter text-sm md:text-base text-gray-600">
            Deliver powerful words that engage, persuade, and convert. From blogs to sales copy,
            we craft content that drives results.
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up">
            <div className="md:w-[60%] text-gray-800 text-sm md:text-base">
              <p>
                Our team at Virtunests Solutions crafts impactful content and persuasive sales copy
                backed by in-depth research and strategic brand management.
              </p>
            </div>

            <div className="md:w-[37%]">
              <p className="mb-4 font-semibold">Want to learn more details and find how we can help?</p>
              <Link href="/contact">
                <button className="bg-blue-500 text-white px-5 py-2 font-bold hover:bg-blue-600 transition-all duration-300">
                  LET'S GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <Image
            src="/website_Recuirment/Content.png"
            alt="Content Writing & Copywriting"
            width={900}
            height={500}
            className="rounded-xl shadow-lg w-full"
        />
        </div>
      </div>

      {/* Info Paragraphs */}
      <div className="space-y-8 mt-16 text-gray-700 text-sm md:text-base leading-relaxed">
        <p data-aos="fade-up">
          1. Writing is a powerful tool that helps brands build a
          <span className="text-blue-600"> strong online presence</span>, connect emotionally, and reach a
          <span className="text-blue-600"> wider audience</span>. It should
          <span className="text-blue-600"> deliver a clear message</span>,
          <span className="text-blue-600"> engage readers</span>, and turn leads into
          <span className="text-blue-600"> loyal customers</span>.
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          2. At Virtunests Solutions, we create
          <span className="text-blue-600"> high-quality content writing</span> and
          <span className="text-blue-600"> copywriting</span> to
          <span className="text-blue-600"> strengthen your digital presence</span> and
          <span className="text-blue-600"> boost conversions</span>.
        </p>
      </div>

      {/* HOW WE DO IT */}
      <div className="text-center my-20" data-aos="fade-up">
        <h1 className="text-3xl font-bold">HOW WE DO IT!</h1>
        <p className="text-gray-700 mt-3 text-sm md:text-base">
          Our professionals handle SEO-focused content writing & copywriting needs content that not only ranks but converts.
        </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 justify-items-center">
        {[
          "Website Content",
          "Business Blogs",
          "Blog Posts & Articles",
          "Guest Posting",
          "Product Descriptions",
        ].map((item, i) => (
          <div
            key={i}
            className="w-full sm:w-[80%] flex items-center gap-3 px-6 py-5 border border-gray-300 text-lg font-bold text-gray-800 bg-gray-100 rounded-lg hover:bg-blue-50 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <span className="bg-blue-500 flex items-center justify-center rounded-full w-8 h-8 text-white text-sm font-semibold shrink-0">
              {`0${i + 1}`}
            </span>
            <p className="text-base md:text-lg text-gray-800">{item}</p>
          </div>
        ))}
      </div>

      </div>

      {/* Bottom Details */}
      <div className="space-y-10 text-gray-800 text-sm md:text-base leading-relaxed">
        <section data-aos="fade-up">
          <h1 className="font-bold text-2xl my-3">Website Content:</h1>
          <p>
            Your website content shapes your brand’s online presence and drives conversions. We craft content that informs, educates,
            and builds trust while supporting SEO success.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="100">
          <h1 className="font-bold text-2xl my-3">Social Media Content:</h1>
          <p>
            We design content strategies that boost awareness, generate leads, and convert prospects into loyal customers with engaging visuals and messages.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="200">
          <h1 className="font-bold text-2xl my-3">Blog Posts & Articles:</h1>
          <p>
            Regular blogs enhance your visibility, boost SEO, and position your brand as an authority. We deliver engaging, optimized, and impactful content.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="300">
          <h1 className="font-bold text-2xl my-3">Guest Posting:</h1>
          <p>
            Expand your reach and credibility through strategic guest posts on top platforms — driving authority and backlinks to your site.
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="400">
          <h1 className="font-bold text-2xl my-3">Product Descriptions:</h1>
          <p>
            Persuasive, customer-focused product descriptions that highlight value and drive conversions effectively.
          </p>
        </section>
      </div>

      {/* CTA Section */}
      <LetsTalk/>
    </div>
  );
}
