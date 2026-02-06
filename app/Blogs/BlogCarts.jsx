"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const BlogCarts = ({ id, image, title, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="group cursor-pointer rounded-xl shadow-md overflow-hidden bg-gray-50 hover:bg-blue-700"
      data-aos="zoom-in"
      data-aos-delay={150}
    >
     <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover p-2 rounded-2xl"
    />

      <div className="p-5">
        <div className="h-[30vh]">
          <h2 className="text-sm md:text-[15px] lg:text-lg font-inter font-bold text-black group-hover:text-white mb-2">
            {title}
          </h2>

          <p className="text-gray-800 group-hover:text-white font-roboto text-sm mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        <Link
          href={`/${id}`}
          className="text-blue-500 group-hover:bg-white bg-blue-100 rounded-full py-2 px-4 hover:underline font-semibold text-[12px]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCarts;
