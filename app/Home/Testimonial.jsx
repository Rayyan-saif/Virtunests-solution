"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    img: "/website_Recuirment/male_vector.png",
    name: "John Carter",
    position: "CEO, Techify Solutions",
    text: "VirtuNests helped us launch on time with exceptional quality. The entire process was smooth, deadlines were met, and the final product exceeded our expectations.",
    rating: 5,
  },
  {
    img: "/website_Recuirment/Female_vector.png",
    name: "Sophia Lee",
    position: "Product Manager, AppNest Inc.",
    text: "The UI/UX team truly understood our vision and turned it into a reality. Downloads doubled within two months!",
    rating: 4,
  },
  {
    img: "/website_Recuirment/male_vector.png",
    name: "Michael Brown",
    position: "CTO, FinCore Group",
    text: "Highly professional and extremely responsive team. They delivered beyond expectations.",
    rating: 5,
  },
  {
    img: "/website_Recuirment/Female_vector.png",
    name: "Emily Davis",
    position: "Marketing Director, The Style Studio",
    text: "We needed a complete online transformation, and they delivered beautifully.",
    rating: 3,
  },
  {
    img: "/website_Recuirment/Female_vector.png",
    name: "Olivia Green",
    position: "Founder, Purely Organic",
    text: "They didn’t just build a product — they built an identity for us.",
    rating: 4,
  },
  {
    img: "/website_Recuirment/male_vector.png",
    name: "Daniel Wilson",
    position: "Operations Head, ByteBloom",
    text: "The execution was flawless. Helped us scale faster than expected!",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="w-full text-center py-16 overflow-hidden bg-white">

      <h2 className="text-3xl md:text-5xl font-extrabold text-black">
        Testimonials
      </h2>

      <p className="text-[15px] sm:text-[16px] md:text-lg leading-relaxed text-gray-700 mt-1 mb-6 max-w-3xl mx-auto">
        Trusted by businesses worldwide — here’s what they say about working with us.
      </p>

      <div className="w-20 md:w-40 h-1 bg-blue-500 mx-auto rounded-full my-5"></div>

      {/* Scrolling Animation Row */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]"
        style={{animation : "marquee 45s linear infinite"}}>
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[350px] h-[420px] bg-white p-6 rounded-2xl 
                         shadow-sm shadow-black hover:-translate-y-2 transition 
                         border border-gray-200 flex flex-col justify-between cursor-pointer my-2"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4 border-2 border-blue-500 object-cover"
              />

              <div>
                <h3 className="text-lg font-bold text-black">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.position}</p>
              </div>

              <div className="flex justify-center mb-3 text-yellow-500">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-800 italic text-sm sm:text-base line-clamp-6">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
