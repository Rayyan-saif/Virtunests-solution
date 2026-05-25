"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const BlogTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 lg:py-40 px-6 md:px-16 lg:px-24 overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Logo Design vs <br />
            <span className="text-blue-500">Branding</span>
          </h1>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            📅 July 15, 2024 • ✍️ Virtunest Solutions
          </p>
        </div>

        {/* Image */}
        <div
          className="relative w-full h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden shadow-xl mb-16"
          data-aos="zoom-in"
        >
          <Image
            src="/website_Recuirment/UI-UX2.jpg"
            alt="Blog Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-12">

          {/* Intro */}
          <p
            className="text-gray-400 text-base md:text-lg leading-relaxed"
            data-aos="fade-up"
          >
            Many people think a logo and a brand are the same thing.
            In reality, they are completely different.
            Understanding this difference helps you build a stronger,
            more memorable business identity.
          </p>

          {/* Sections */}
          {[
            {
              title: "What is Logo Design?",
              text: "A logo is a visual symbol, icon, or typography that represents your business. It is the first thing people notice but only one part of your complete brand identity.",
            },
            {
              title: "What is Branding?",
              text: "Branding is the full experience people have with your business. It includes your colors, typography, messaging, tone, and overall personality that shapes how people feel about your brand.",
            },
            {
              title: "Why Both Matter?",
              text: "A logo attracts attention and creates the first impression, while branding builds trust and long-term relationships with your audience.",
            },
            {
              title: "Logo Design for Modern Businesses",
              text: "A professionally designed logo ensures your business looks credible and stands out in competitive markets, especially for startups and growing brands.",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="border border-gray-800 p-8 md:p-10 rounded-2xl bg-[#0f0f0f]"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {item.title}
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

          {/* Quote */}
          <div
            className="border-l-4 border-blue-500 bg-[#0f0f0f] p-8 rounded-xl"
            data-aos="fade-up"
          >
            <p className="italic text-gray-300 text-lg leading-relaxed">
              Success in {new Date().getFullYear()} isn’t just about being online —
              it’s about being seen, trusted, and remembered.
            </p>
          </div>

          {/* CTA */}
          <div
            className="flex flex-wrap gap-6 pt-6"
            data-aos="fade-up"
          >
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Contact Us
            </a>

            <a
              href="/Blogs"
              className="border border-gray-700 text-gray-300 hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition"
            >
              ← Go Back
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogTwo;


// "use client";

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// // import blogImage from "../../assets";

// const BlogTwo = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="bg-gradient-to-b from-[#fdfefd] to-blue-400 py-20 px-6 md:px-24">
//       <div className="max-w-5xl mx-auto" data-aos="fade-up">

//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold text-black font-roboto pt-5 leading-snug text-center mb-4">
//           Logo Design vs. Branding — What’s the Real Difference?
//         </h1>

//         {/* Date + Author */}
//         <div className="flex items-center justify-center space-x-4 text-gray-700 text-sm mb-10">
//           <span>📅 July 15, 2024</span>
//           <span>•</span>
//           <span>✍️ By Virtunest Solutions</span>
//         </div>

//         <div
//         className="relative w-full h-[60vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-xl my-12"
//         data-aos="zoom-in"
//         >
//         <Image
//             src="/website_Recuirment/UI-UX2.jpg"
//             alt="UI UX Design"
//             fill
//             className="object-cover"
//         />
//         </div>

//           {/* Content Box */}
//           <div
//             className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 md:p-16 space-y-12 border border-blue-100"
//             data-aos="fade-up"
//           >

//             {/* Paragraph 1 */}
//             <p className="text-[1.05rem] text-gray-700">
//               Many people think a logo and a brand are the same thing.  
//               In reality, they are very different.  
//               Understanding this difference helps you build a stronger business identity.
//             </p>

//             {/* Section */}
//             <div className="space-y-3">
//               <h2 className="text-3xl font-semibold text-blue-800">
//                 What is Logo Design?
//               </h2>

//               <p className="text-[1.05rem] text-gray-700">
//                 A logo is a visual mark—symbol, icon, or text—that represents your business.  
//                 It’s just one part of your overall brand identity.
//               </p>
//             </div>

//             {/* Section */}
//             <div className="space-y-3">
//               <h2 className="text-3xl font-semibold text-blue-800">
//                 What is Branding?
//               </h2>

//               <p className="text-[1.05rem] text-gray-700">
//                 Branding is the complete experience people have with your business.  
//                 It includes:
//               </p>

//               <ul className="list-disc ml-6 text-[1.05rem] space-y-1 text-gray-700">
//                 <li>Brand colors</li>
//                 <li>Typography</li>
//                 <li>Messaging & tone</li>
//                 <li>Visual style</li>
//                 <li>Brand personality & values</li>
//               </ul>
//             </div>

//             {/* Section */}
//             <div className="space-y-3">
//               <h2 className="text-3xl font-semibold text-blue-800">
//                 Why Both Matter?
//               </h2>

//               <ul className="space-y-2 text-[1.05rem] text-gray-700">
//                 <li>✔ <strong>Logo attracts</strong> — It's the first impression.</li>
//                 <li>✔ <strong>Brand retains</strong> — It builds long-term trust.</li>
//               </ul>

//               <p className="text-[1.05rem] text-gray-700">
//                 For startups and small businesses, strong branding helps you stand out in crowded markets.
//               </p>
//             </div>

//             <div className="space-y-3">
//               <h2 className="text-3xl font-semibold text-blue-800">
//                 Logo Design for Small Business
//               </h2>

//               <p className="text-[1.05rem] text-gray-700">
//                 Looking for professional logo design?  
//                 We create logos that reflect your vision and grow with your brand.
//               </p>
//             </div>

//             {/* Quote */}
//             <blockquote className="border-l-4 border-blue-600 bg-blue-50 text-blue-900 italic p-6 rounded-xl text-[1.1rem] leading-relaxed">
//               “Success in {new Date().getFullYear()} is not about being online —
//               it’s about being seen, trusted, and remembered.”
//             </blockquote>

//             <p className="text-[1.05rem] text-gray-700">
//               Logo = First impression.  
//               Brand = Long-term identity.  
//               You need both.  
//               Let’s build your brand identity from the ground up.
//             </p>

//             {/* CTA */}
//             <div  className="pt-6 flex flex-wrap gap-6">
//               <a
//       href="/contact"
//       className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
//     >
//       Contact Us
//     </a>

//               <a
//       href="/Blogs"
//       className="border border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300"
//     >
//       ← Go Back
//     </a>

//             </div>

//           </div>
//         </div>
//     </section>
//   );
// };

// export default BlogTwo;
