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
      className="group relative overflow-hidden rounded-3xl
      bg-white/5 backdrop-blur-xl border border-white/10
      transition duration-500
      hover:-translate-y-3 hover:border-cyan-400/40
      hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
    >

      {/* Image */}
      <div className="relative h-[220px] overflow-hidden">

        <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover p-2 rounded-2xl"
    />


        {/* Category Tag */}
        <span className="absolute top-4 left-4 text-xs bg-cyan-500/90 text-white px-3 py-1 rounded-full">
          Blog
        </span>

      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-[260px]">

        <div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">

          <span className="text-xs text-gray-500">
            5 min read
          </span>

          <Link
            href={`/${id}`}
            className="text-sm text-cyan-400 font-medium hover:text-white transition"
          >
            Read Article →
          </Link>

        </div>

      </div>

    </div>
  );
};

export default BlogCarts;

// "use client";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";


// const BlogCarts = ({ id, image, title, description }) => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       className="group cursor-pointer rounded-xl shadow-md overflow-hidden bg-gray-50 hover:bg-blue-700"
//       data-aos="zoom-in"
//       data-aos-delay={150}
//     >
//      <Image
//         src={image}
//         alt={title}
//         width={500}
//         height={300}
//         className="w-full h-48 object-cover p-2 rounded-2xl"
//     />

//       <div className="p-5">
//         <div className="h-[30vh]">
//           <h2 className="text-sm md:text-[15px] lg:text-lg font-inter font-bold text-black group-hover:text-white mb-2">
//             {title}
//           </h2>

//           <p className="text-gray-800 group-hover:text-white font-roboto text-sm mb-4 line-clamp-3">
//             {description}
//           </p>
//         </div>

//         <Link
//           href={`/${id}`}
//           className="text-blue-500 group-hover:bg-white bg-blue-100 rounded-full py-2 px-4 hover:underline font-semibold text-[12px]"
//         >
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogCarts;
