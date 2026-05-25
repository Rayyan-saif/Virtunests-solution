"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
  FaCode,
  FaMobileAlt,
  FaCube,
  FaPaintBrush,
  FaPen,
  FaShareAlt,
  FaBullhorn,
  FaSearch,
  FaWordpress
} from "react-icons/fa";

import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { PiFigmaLogo } from "react-icons/pi";
import { SiShopify } from "react-icons/si";

const services = [
  [FaCode, "Website Designing", "/Website_Des"],
  [SiShopify, "Shopify Development", "/Shopify_Development"],
  [FaWordpress, "Wordpress Solution", "/WordPress_Solutions"],
  [PiFigmaLogo, "UI/UX Design", "/Figma"],
  [FaMobileAlt, "Mobile App Development", "/Mobile_Dev"],
  [FaCube, "3D Design", "/ThreeD_Design"],
  [FaPaintBrush, "Graphic Designing", "/Graphic_Design"],
  [FaPen, "Content Writing", "/Content&Copywriting"],
  [BiEnvelope, "Email Marketing", "/EmailMarketing"],
  [FaShareAlt, "Social Media Management", "/SocialMediaManage"],
  [FaBullhorn, "Advertising", "/AdvertisingManage"],
  [FaSearch, "SEO Optimization", "/SEO"],
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-[#05070f] text-white pt-24 pb-12 px-6 md:px-10 overflow-hidden border-t border-white/5">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Overlay Line Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:70px_70px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Modern Bento-Style Footer Main Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16">
          
          {/* Main Brand Block */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <Image
                src="/website_Recuirment/Fotter_logo.png"
                width={200}
                height={200}
                alt="logo"
                className="w-48 mb-6 object-contain"
                priority
              />
              <p className="text-gray-400 text-base font-light leading-relaxed max-w-sm">
                We design and engineer elite marketing systems, conversion-driven websites, and striking brand systems that scale digital ecosystems.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 pt-4 border-t border-white/5 max-w-sm">
              <p className="flex items-center gap-3 text-sm text-gray-400">
                <BiMap className="text-cyan-400 text-xl flex-shrink-0" />
                <span className="font-light">Nazimabad Block 2, Karachi</span>
              </p>
              <a href="mailto:info@virtunests.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <BiEnvelope className="text-cyan-400 text-xl flex-shrink-0" />
                <span className="font-light">info@virtunests.com</span>
              </a>
              <a href="https://wa.me/923248188272" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <BiPhone className="text-cyan-400 text-xl flex-shrink-0" />
                <span className="font-light">+92 324 8188272</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Block */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-white">
              Company
            </h3>
            <ul className="space-y-3 text-gray-400 text-[15px]">
              {[
                ["Home", "/"],
                ["About Us", "/about-us"],
                ["Packages", "/packages"],
                ["Portfolio", "/portfolio"],
                ["Blogs", "/Blogs"],
                ["Contact", "/contact"]
              ].map(([name, link], i) => (
                <li key={i}>
                  <Link href={link} className="hover:text-cyan-400 transition-all duration-300 font-light flex items-center gap-1 group">
                    <span className="w-0 h-[1px] bg-cyan-400 group-hover:w-2 transition-all duration-300"></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Block */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-white">
              Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3 text-gray-400 text-[14px]">
              {services.map(([Icon, label, path], i) => (
                <li key={i}>
                  <Link href={path} className="flex items-center gap-2.5 hover:text-white transition-all duration-300 group font-light">
                    <div className="p-1 rounded bg-white/5 border border-white/5 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 transition-colors">
                      <Icon className="text-cyan-400 text-sm group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="truncate">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrated Modern Newsletter Block (With Neon Border Animations) */}
          <div className="lg:col-span-3">
            <div className="relative group p-6 rounded-3xl backdrop-blur-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/5 overflow-hidden flex flex-col justify-between min-h-[260px]">
              
              {/* Static Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
              
              {/* FIXED & ADDED: Rotating Lights Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-border-run-h"></div>
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-border-run-h delay-1000"></div>
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-border-run-v delay-500"></div>
                <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-border-run-v delay-1500"></div>
              </div>

              {/* Card Glow Background */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                  Stay Updated
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">
                  Get tech insights, design updates & conversion strategies directly.
                </p>
              </div>

              <div className="space-y-3 relative z-10">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/60 border border-white/10 px-4 py-3 text-sm rounded-xl w-full outline-none text-white focus:border-cyan-500/50 focus:bg-black/80 transition-all duration-300 shadow-inner"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium text-sm px-5 py-3 rounded-xl transition-all duration-300 w-full shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/20 active:scale-[0.98] cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="relative border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="text-gray-500 text-xs font-light tracking-wide order-2 sm:order-1">
            © {new Date().getFullYear()} VirtuNests Solutions. Crafted for high performance.
          </div>

          {/* Social Handles with Hover Gradient Effects */}
          <div className="flex gap-3 order-1 sm:order-2">
            {[
              [FaFacebook, "https://www.facebook.com/profile.php?id=61569306387156"],
              [FaTwitter, "https://twitter.com"],
              [FaLinkedin, "https://www.linkedin.com/company/virtunests-solutions/posts/?feedView=all"],
              [FaInstagram, "https://instagram.com"]
            ].map(([SocialIcon, linkUrl], index) => {
              const IconComponent = SocialIcon;
              return (
                <a
                  key={index}
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/5 hover:border-cyan-400/40 text-gray-400 hover:text-black transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                  <IconComponent className="relative z-10 text-[15px] group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </div>

        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-xl bg-[#111727]/80 backdrop-blur-md border border-white/10 text-cyan-400 hover:text-white shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-all duration-500 group active:scale-95 cursor-pointer"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>

    </footer>
  );
};

export default Footer;

// "use client";

// import Link from "next/link";
// import Image from "next/image";

// import { 
//   FaFacebook, FaInstagram, FaLinkedin, FaPen, FaTwitter, 
//   FaCode, FaMobileAlt, FaCube, FaPaintBrush, 
//   FaShareAlt, FaBullhorn, FaSearch 
// } from "react-icons/fa";

// import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
// import { PiFigmaLogo } from "react-icons/pi";

// const services = [
//   [FaCode, "Website Designing Services", "/Website_Des"],
//   [PiFigmaLogo, "UI/UX Design", "/Figma"],
//   [FaMobileAlt, "Mobile App Development Services", "/Mobile_Dev"],
//   [FaCube, "3D Design & Visualization", "/ThreeD_Design"],
//   [FaPaintBrush, "Graphic Designing", "/Graphic_Design"],
//   [FaPen, "Content Writing and Copywriting", "/Content&Copywriting"],
//   [BiEnvelope, "Email Marketing", "/EmailMarketing"],
//   [FaShareAlt, "Social Media Management", "/SocialMediaManage"],
//   [FaBullhorn, "Advertising Management", "/AdvertisingManage"],
//   [FaSearch, "Search Engine Optimization", "/SEO"],
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-[#171a31] pt-10 px-6 md:px-10 relative">

//       <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      
//         {/* Brand + Description */}
//         <div className="flex flex-col items-center lg:items-start">
//           <Image 
//             src="/website_Recuirment/Fotter_logo.png"
//             width={200}
//             height={200}
//             alt="logo"
//             className="w-48 lg:w-60"
//           />
//           <p className="text-sm font-inter text-white leading-relaxed text-center lg:text-left max-w-sm">
//             At Virtunests Solutions, we help businesses grow smarter with stunning websites, engaging UI/UX, creative branding, SEO, and marketing. Whether you’re a startup or an established brand, we make sure your digital presence stands out, attracts customers, and builds trust.
//           </p>
//         </div>

//         {/* Company Links */}
//         <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 justify-center md:justify-start lg:ml-20 ml-0">
//           <div>
//             <h3 className="text-[#4cb6f0] text-[20px] lg:text-[22px] font-extrabold font-poppins mb-4">
//               Company
//             </h3>
//             <ul className="font-inter text-white space-y-1">
//               {[
//                 { name: "Home", link: "/" },
//                 { name: "About-Us", link: "/about-us" },
//                 { name: "Packages", link: "/packages" },
//                 { name: "Portfolio", link: "/portfolio" },
//                 { name: "Blogs", link: "/Blogs" },
//                 { name: "Contact", link: "/contact" },
//               ].map((item, i) => (
//                 <li key={i}>
//                   <Link
//                     href={item.link}
//                     className="hover:text-white transition-colors duration-300 hover:pl-2 inline-block"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-[20px] lg:text-[22px] font-extrabold font-poppins text-[#4cb6f0] mb-4">
//             Services
//           </h3>
//           <ul className="text-base font-inter text-white">
//             {services.map(([Icon, label, path], i) => (
//               <li key={i}>
//                 <Link href={path} className="block py-1 hover:ml-2">
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact + Social */}
//         <div>
//           <h3 className="text-xl font-semibold font-mono text-[#4cb6f0] mb-4">Stay Connected</h3>
//           <div className="flex space-x-3 mb-5">
//             <a href="https://www.facebook.com/profile.php?id=61569306387156" target="_blank" className="p-2 border hover:border-white border-[#4cb6f0] text-white rounded-full bg-[#4cb6f0] transition"><FaFacebook /></a>

//             <a href="#" className="p-2 border hover:border-white border-[#4cb6f0] text-white rounded-full bg-[#4cb6f0] transition"><FaTwitter /></a>

//             <a href="https://www.linkedin.com/company/virtunests-solutions/posts/?feedView=all" target="_blank" className="p-2 border hover:border-white border-[#4cb6f0] text-white rounded-full bg-[#4cb6f0] transition"><FaLinkedin /></a>

//             <a href="#" className="p-2 border hover:border-white border-[#4cb6f0] text-white rounded-full bg-[#4cb6f0] transition"><FaInstagram /></a>
//           </div>

//           <p className="text-md flex items-start text-white">
//             <BiMap className='mr-2 text-[#4cb6f0] text-[22px]'/>
//             Near Bank AL Habib Block 2, <br/> Nazimabad Karachi Pakistan.
//           </p>

//           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@virtunests.com" target="_blank">
//             <p className="text-md flex items-center text-white py-2 group cursor-pointer">
//               <BiEnvelope className='mr-2 text-[#4cb6f0] text-[22px] group-hover:rotate-180 transition-transform'/>
//               Info@virtunests.com
//             </p>
//           </a>

//           <a href="https://wa.me/923248188272" target="_blank">
//             <p className="text-md flex items-center text-white group cursor-pointer">
//               <BiPhone className='mr-2 text-[#4cb6f0] text-[22px] group-hover:rotate-45 transition-transform'/>
//               +92 324 8188272
//             </p>
//           </a>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="pt-6 mt-10 border-t border-blue-200 text-center text-white text-sm font-mono">

//         <div className="relative z-10 max-w-xl mx-auto my-2 bg-white p-6 rounded-xl shadow-xl text-center font-poppins">
//           <h3 className="text-2xl font-bold mb-2 text-blue-950">Let’s Build Together</h3>
//           <p className="text-blue-950 mb-6 text-sm">
//             We’re always open to exciting collaborations. Let’s work together <br /> and bring your ideas to life.
//           </p>
//           <Link
//             href="/Contact"
//             className="px-6 py-2 bg-blue-950 text-white font-bold rounded-full hover:bg-white hover:text-blue-950 border transition"
//           >
//             Say Hello →
//           </Link>
//         </div>

//         <div className="relative z-10 flex flex-wrap justify-center gap-5 my-6 text-lg cursor-pointer text-white">
//           {services.map(([Icon, label, path], idx) => (
//             <Link
//               key={idx}
//               href={path}
//               className="flex flex-col items-center gap-1 hover:text-blue-500 transition"
//             >
//               <Icon />
//             </Link>
//           ))}
//         </div>

//         <p className='text-lg pb-2 font-inter'>
//           Copyright © 2020 - {new Date().getFullYear()}.   
//           All Rights Reserved By
//           <Link className="pl-1" href="/">VirtuNests.</Link>
//         </p>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
