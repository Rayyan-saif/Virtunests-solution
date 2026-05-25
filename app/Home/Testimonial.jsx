"use client";

import { FaStar, FaPlay } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";


const Testimonial = () => {
  const testimonials_show = [
  {
    img: "/website_Recuirment/male_vector.png",
    name: "Ali Raza",
    position: "Founder",
    company: "AR Clothing",
    location: "Karachi, Pakistan",
    service: "Shopify Store Development",
    duration: "3 Weeks",
    text: "VirtuNests completely transformed our online store. The design looks premium and our conversion rate increased dramatically.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    img: "/website_Recuirment/Female_vector.png",
    name: "Ayesha Khan",
    position: "Brand Manager",
    company: "Glow Cosmetics",
    location: "Lahore, Pakistan",
    service: "Website Design & Branding",
    duration: "1 Month",
    text: "The UI/UX team perfectly understood our vision. The final website exceeded our expectations.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    img: "/website_Recuirment/male_vector.png",
    name: "Hassan Malik",
    position: "CEO",
    company: "NextGen Tech",
    location: "Dubai, UAE",
    service: "Web App Development",
    duration: "6 Weeks",
    text: "Extremely professional team. Communication and delivery were flawless throughout the project.",
    rating: 4,
    date: "1 month ago",
  },
  {
    img: "/website_Recuirment/Female_vector.png",
    name: "Emily Johnson",
    position: "Marketing Director",
    company: "Bloom Beauty",
    location: "London, UK",
    service: "Ecommerce Website",
    duration: "4 Weeks",
    text: "Their design team delivered a stunning ecommerce store. Our sales increased within the first month.",
    rating: 5,
    date: "1 month ago",
  },
  {
    img: "/website_Recuirment/male_vector.png",
    name: "Daniel Smith",
    position: "Founder",
    company: "Smith Tech",
    location: "New York, USA",
    service: "SaaS Website Development",
    duration: "5 Weeks",
    text: "Very reliable team. Communication was smooth and the final product matched exactly what we envisioned.",
    rating: 5,
    date: "2 months ago",
  },
  {
    img: "/website_Recuirment/male_vector.png",
    name: "Ahmed Nuaimi",
    position: "Operations Manager",
    company: "Desert Logistics",
    location: "Abu Dhabi, UAE",
    service: "Corporate Website",
    duration: "3 Weeks",
    text: "They delivered a professional corporate website that helped us build strong online credibility.",
    rating: 4,
    date: "1 month ago",
  },
  {
    img: "/website_Recuirment/Female_vector.png",
    name: "Sana Tariq",
    position: "Founder",
    company: "Sana Fashion House",
    location: "Islamabad, Pakistan",
    service: "Shopify Store Setup",
    duration: "2 Weeks",
    text: "Amazing experience working with VirtuNests. The store looks elegant and runs perfectly.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    img: "/website_Recuirment/male_vector.png",
    name: "Michael Brown",
    position: "CTO",
    company: "FinCore Group",
    location: "Toronto, Canada",
    service: "Web App Development",
    duration: "7 Weeks",
    text: "The development process was transparent and professional. Highly recommended for tech projects.",
    rating: 5,
    date: "2 months ago",
  },
  {
    img: "/website_Recuirment/Female_vector.png",
    name: "Olivia Taylor",
    position: "Product Manager",
    company: "Nova Apps",
    location: "Sydney, Australia",
    service: "UI/UX Design",
    duration: "3 Weeks",
    text: "Their UI/UX team is incredibly talented. The app interface looks modern and intuitive.",
    rating: 4,
    date: "1 month ago",
  },
  {
    img: "/website_Recuirment/male_vector.png",
    name: "Bilal Ahmed",
    position: "CEO",
    company: "Digital Wave",
    location: "Karachi, Pakistan",
    service: "Full Website Development",
    duration: "1 Month",
    text: "VirtuNests delivered our project ahead of schedule with excellent quality. Very impressed.",
    rating: 5,
    date: "2 weeks ago",
  },
];
  const sliderRef = useRef(null);

  return (
    <section className="relative py-28 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-600/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-cyan-400/10 blur-[160px] rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]
      bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
      bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Real feedback from businesses that trusted VirtuNests with their digital growth.
        </p>

        {/* Trust Line */}
        <p className="text-cyan-400 mt-4 font-medium">
          ⭐ 4.9 Average Rating • 40+ Client Reviews • 08+ Countries
        </p>

        {/* Slider */}
        <div className="relative mt-12 overflow-hidden">

          <div
            ref={sliderRef}
            className="flex gap-8 w-max pt-5 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]"
          >

            {[...testimonials_show, ...testimonials_show].map((item, index) => (
              <div
  key={index}
  className="w-[320px] md:w-[360px] h-[420px] flex-shrink-0
  bg-white/5 backdrop-blur-xl border border-white/10
  p-8 rounded-3xl shadow-lg transition duration-500
  hover:-translate-y-3 hover:border-cyan-400/40
  hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
  flex flex-col justify-between"
>

  {/* Top Content */}
  <div>

    {/* Client */}
    <div className="flex items-center gap-4 mb-4">

      <Image
        src={item.img}
        alt={item.name}
        width={60}
        height={60}
        className="rounded-full border-2 border-cyan-400"
      />

      <div className="text-left">

        <h4 className="text-white font-semibold">
          {item.name}
          <span className="text-green-400 text-sm ml-2">
            ✔ Verified
          </span>
        </h4>

        <p className="text-gray-400 text-sm">
          {item.position} • {item.company}
        </p>

        <p className="text-gray-500 text-xs">
          📍 {item.location}
        </p>

      </div>
    </div>

    {/* Rating */}
    <div className="flex text-yellow-400 mb-4">
      {[...Array(item.rating)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>

    {/* Review */}
    <p className="text-gray-300 text-sm leading-relaxed line-clamp-5">
      “{item.text}”
    </p>

  </div>

  {/* Bottom Content */}
  <div>

    {/* Project Info */}
    <div className="flex flex-wrap gap-2 mb-4 text-xs">

      <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full">
        💼 {item.service}
      </span>

      <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full">
        ⏱ {item.duration}
      </span>

    </div>

    {/* Footer */}
    <div className="flex justify-between items-center text-xs text-gray-500">

      <span>{item.date}</span>

      <button className="flex items-center gap-1 text-cyan-400 hover:text-white transition">
        <FaPlay className="text-xs" />
        Watch Review
      </button>

    </div>

  </div>

</div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonial;


// "use client";

// import { FaStar } from "react-icons/fa";
// import Image from "next/image";

// const testimonials = [
//   {
//     img: "/website_Recuirment/male_vector.png",
//     name: "John Carter",
//     position: "CEO, Techify Solutions",
//     text: "VirtuNests helped us launch on time with exceptional quality. The entire process was smooth, deadlines were met, and the final product exceeded our expectations.",
//     rating: 5,
//   },
//   {
//     img: "/website_Recuirment/Female_vector.png",
//     name: "Sophia Lee",
//     position: "Product Manager, AppNest Inc.",
//     text: "The UI/UX team truly understood our vision and turned it into a reality. Downloads doubled within two months!",
//     rating: 4,
//   },
//   {
//     img: "/website_Recuirment/male_vector.png",
//     name: "Michael Brown",
//     position: "CTO, FinCore Group",
//     text: "Highly professional and extremely responsive team. They delivered beyond expectations.",
//     rating: 5,
//   },
//   {
//     img: "/website_Recuirment/Female_vector.png",
//     name: "Emily Davis",
//     position: "Marketing Director, The Style Studio",
//     text: "We needed a complete online transformation, and they delivered beautifully.",
//     rating: 3,
//   },
//   {
//     img: "/website_Recuirment/Female_vector.png",
//     name: "Olivia Green",
//     position: "Founder, Purely Organic",
//     text: "They didn’t just build a product — they built an identity for us.",
//     rating: 4,
//   },
//   {
//     img: "/website_Recuirment/male_vector.png",
//     name: "Daniel Wilson",
//     position: "Operations Head, ByteBloom",
//     text: "The execution was flawless. Helped us scale faster than expected!",
//     rating: 5,
//   },
// ];

// const Testimonial = () => {
//   return (
//     <div className="w-full text-center py-16 overflow-hidden bg-white">

//       <h2 className="text-3xl md:text-5xl font-extrabold text-black">
//         Testimonials
//       </h2>

//       <p className="text-[15px] sm:text-[16px] md:text-lg leading-relaxed text-gray-700 mt-1 mb-6 max-w-3xl mx-auto">
//         Trusted by businesses worldwide — here’s what they say about working with us.
//       </p>

//       <div className="w-20 md:w-40 h-1 bg-blue-500 mx-auto rounded-full my-5"></div>

//       {/* Scrolling Animation Row */}
//       <div className="relative w-full overflow-hidden">
//         <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]"
//         style={{animation : "marquee 45s linear infinite"}}>
//           {[...testimonials, ...testimonials].map((item, index) => (
//             <div
//               key={index}
//               className="w-[350px] h-[420px] bg-white p-6 rounded-2xl 
//                          shadow-sm shadow-black hover:-translate-y-2 transition 
//                          border border-gray-200 flex flex-col justify-between cursor-pointer my-2"
//             >
//               <Image
//                 src={item.img}
//                 alt={item.name}
//                 width={80}
//                 height={80}
//                 className="rounded-full mx-auto mb-4 border-2 border-blue-500 object-cover"
//               />

//               <div>
//                 <h3 className="text-lg font-bold text-black">{item.name}</h3>
//                 <p className="text-sm text-gray-600 mb-2">{item.position}</p>
//               </div>

//               <div className="flex justify-center mb-3 text-yellow-500">
//                 {[...Array(item.rating)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>

//               <p className="text-gray-800 italic text-sm sm:text-base line-clamp-6">
//                 {item.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
