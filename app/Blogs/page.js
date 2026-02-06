"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BlogCarts from "./BlogCarts";

const blogs = [
  {
    id: "BlogOne",
    image: "/website_Recuirment/UI-UX-Services.png",
    title: "Why Great UI/UX Design is the Backbone of Any Successful Website",
    description:
      "In today’s digital world, your website is often the first impression of your brand. A clean, functional, and intuitive design can be the difference between a new customer and a lost opportunity. This is where great UI/UX design becomes essential.",
  },
  {
    id: "BlogTwo",
    image: "/website_Recuirment/blog02.jpg",
    title: "Logo Design vs. Branding What’s the Real Difference?",
    description:
      "Many people think a logo and a brand are the same thing. In reality, they’re not. If you’re launching a business, understanding the difference can help you build a stronger identity.",
  },
  {
    id: "BlogThree",
    image: "/website_Recuirment/blog03.jpg",
    title: "5 Signs Your Business Needs a Website Redesign",
    description:
      "Your website is your online storefront. If it looks outdated or feels clunky, you might be losing customers. Here are five clear signs it's time to consider a redesign.",
  },
  {
    id: "BlogFour",
    image: "/website_Recuirment/Blog04.jpg",
    title: "How Design + Marketing Together Boost Your Online Sales",
    description:
      "Design catches the eye. Marketing drives action. When both work together, your brand becomes unstoppable.",
  },
];

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 pt-28 px-6 md:px-10 bg-white">
      <h2
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-inter text-center text-black mb-2"
        data-aos="fade-up"
      >
        Explore Our Blogs
      </h2>

      <p className="text-[15px] sm:text-[16px] md:text-lg leading-relaxed text-center text-gray-700 font-roboto mt-2 mb-6 max-w-3xl mx-auto">
        Discover valuable insights, practical tips, and inspiring stories designed 
        <br/> to help your business grow.
      </p>

      <div
        className="w-20 md:w-40 h-1 bg-blue-500 mx-auto rounded-full mb-5"
        data-aos="fade-up"
      ></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <BlogCarts
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
