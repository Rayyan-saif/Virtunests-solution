"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {
  FaBullhorn,
  FaCode,
  FaCube,
  FaMobileAlt,
  FaPaintBrush,
  FaPen,
  FaSearch,
  FaShareAlt,
  FaWordpress
} from "react-icons/fa";
import { PiFigmaLogo } from "react-icons/pi";
import { BiEnvelope } from "react-icons/bi";
import { SiShopify } from "react-icons/si";

const Header = () => {
  const pathname = usePathname();

  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showServicesDesktop = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpenDesktop(true);
  };

  const hideServicesDesktop = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpenDesktop(false);
    }, 250);
  };

  const serviceLinks = [
    { Icon: FaCode, label: "Website Designing Services", path: "/Website_Des" },
    { Icon: SiShopify, label: "Shopify Development", path: "/Shopify_Development" },
    { Icon: FaWordpress, label: "Wordpress Solution", path: "/WordPress_Solutions" },
    { Icon: PiFigmaLogo, label: "UI/UX Design", path: "/Figma" },
    { Icon: FaMobileAlt, label: "Mobile App Development", path: "/Mobile_Dev" },
    { Icon: FaCube, label: "3D Design & Visualization", path: "/ThreeD_Design" },
    { Icon: FaPaintBrush, label: "Graphic Designing", path: "/Graphic_Design" },
    { Icon: FaPen, label: "Content Writing", path: "/Content&Copywriting" },
    { Icon: BiEnvelope, label: "Email Marketing", path: "/EmailMarketing" },
    { Icon: FaShareAlt, label: "Social Media Management", path: "/SocialMediaManage" },
    { Icon: FaBullhorn, label: "Advertising Management", path: "/AdvertisingManage" },
    { Icon: FaSearch, label: "SEO-(Search Engine Optimization)", path: "/SEO" },
  ];

  const mainLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about-us" },
    { label: "Blogs", path: "/Blogs" },
    { label: "Pricing", path: "/packages" },
    { label: "Contact", path: "/contact" },
  ];

  const getLinkStyle = (route) =>
    pathname === route
      ? "text-white font-semibold relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-blue-500"
      : "text-gray-400 font-light hover:text-white transition-colors duration-300";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060606]/90 backdrop-blur-xl border-b border-white/[0.05] py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative">
        
        {/* Brand Core Logo */}
        <Link href="/" className="w-36 sm:w-40 lg:w-44 transition-opacity hover:opacity-90 flex-shrink-0">
          <Image
            src="/website_Recuirment/Fotter_logo.png"
            alt="Logo"
            width={200}
            height={80}
            className="w-full h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Structural Navigation (Shifted to lg breakpoint to fix scaling) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-[12px] xl:text-[15px] tracking-wider uppercase">
          <Link href="/" className={getLinkStyle("/")}>Home</Link>
          <Link href="/about-us" className={getLinkStyle("/about-us")}>About</Link>

          {/* Dynamic Services Mega Dropsystem */}
          <div
            className="relative py-2"
            onMouseEnter={showServicesDesktop}
            onMouseLeave={hideServicesDesktop}
          >
            <span className="flex items-center gap-1.5 cursor-pointer text-gray-400 hover:text-white transition-colors duration-300">
              Services
              <svg
                className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${
                  servicesOpenDesktop ? "rotate-180 text-blue-500" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21l4.77 5 4.77-5z" />
              </svg>
            </span>

            {/* High-End Double Column Mega Panel */}
            {servicesOpenDesktop && (
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[580px] xl:w-[620px] rounded-xl bg-[#090909]/95 backdrop-blur-2xl border border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-4 grid grid-cols-2 gap-2 z-50">
                <div className="absolute top-0 left-1/4 w-[200px] h-[100px] bg-blue-500/[0.02] blur-[40px] pointer-events-none rounded-full" />
                
                {serviceLinks.map(({ Icon, label, path }, i) => (
                  <Link
                    key={i}
                    href={path}
                    className="group flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-white/[0.03] hover:bg-white/[0.02] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-md bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.03] transition-all duration-300 flex-shrink-0">
                      <Icon className="text-gray-400 group-hover:text-blue-400 text-xs transition-colors" />
                    </div>
                    <span className="text-[13px] font-sans font-medium tracking-normal normal-case text-gray-400 group-hover:text-white transition-colors truncated">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/Blogs" className={getLinkStyle("/Blogs")}>Blogs</Link>
          <Link href="/packages" className={getLinkStyle("/packages")}>Pricing</Link>
          <Link href="/contact" className={getLinkStyle("/contact")}>Contact</Link>
        </div>

        {/* Action Call Hub Button (Shifted to lg breakpoint to prevent overlapping) */}
        <Link
          href="/portfolio"
          className="hidden lg:inline-flex px-5 py-2.5 text-xs font-mono tracking-widest uppercase rounded-full border border-blue-500/30 bg-blue-950/10 hover:bg-blue-500 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 flex-shrink-0"
        >
          Our Work →
        </Link>

        {/* Mobile Control Activation (Visible on everything below lg) */}
        <button
          onClick={() => setMenu(true)}
          className="lg:hidden text-2xl text-gray-400 hover:text-white transition-colors p-1 flex-shrink-0"
        >
          <HiMenu />
        </button>
      </nav>

      {/* MOBILE HUD LAYER MATRIX */}
      <div
        className={`fixed top-0 right-0 w-full max-w-[300px] h-screen bg-[#070707]/98 backdrop-blur-2xl border-l border-white/[0.05] p-6 shadow-2xl transform transition-transform duration-500 ease-out z-50 flex flex-col justify-between ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/[0.05]">
            <span className="font-mono text-[9px] text-neutral-500 tracking-widest">[ ENGINE_MENU ]</span>
            <IoClose
              className="text-2xl text-gray-400 hover:text-white cursor-pointer transition-colors"
              onClick={() => setMenu(false)}
            />
          </div>

          <ul className="flex flex-col gap-4 font-mono text-[13px] tracking-wider uppercase">
            <Link href="/" className={getLinkStyle("/")} onClick={() => setMenu(false)}>Home</Link>
            <Link href="/about-us" className={getLinkStyle("/about-us")} onClick={() => setMenu(false)}>About</Link>

            {/* Mobile Expandable Engine Matrix */}
            <li className="border-y border-white/[0.03] py-2">
              <button
                onClick={() => setServicesOpenMobile(!servicesOpenMobile)}
                className="flex justify-between items-center w-full text-gray-400 font-light text-left tracking-wider py-1"
              >
                SERVICES
                <span className="text-blue-500 text-xs font-bold font-sans">{servicesOpenMobile ? "[-]" : "[+]"}</span>
              </button>

              {servicesOpenMobile && (
                <ul className="mt-3 flex flex-col gap-2 font-sans font-light normal-case tracking-normal text-[12px] text-neutral-400 pl-2 max-h-[220px] overflow-y-auto custom-scrollbar">
                  {serviceLinks.map(({ label, path }, i) => (
                    <Link
                      key={i}
                      href={path}
                      className="hover:text-blue-400 transition-colors py-1 flex items-center gap-2"
                      onClick={() => setMenu(false)}
                    >
                      <span className="text-[9px] text-blue-500/40"> </span> {label}
                    </Link>
                  ))}
                </ul>
              )}
            </li>

            <Link href="/Blogs" className={getLinkStyle("/Blogs")} onClick={() => setMenu(false)}>Blogs</Link>
            <Link href="/packages" className={getLinkStyle("/packages")} onClick={() => setMenu(false)}>Pricing</Link>
            <Link href="/contact" className={getLinkStyle("/contact")} onClick={() => setMenu(false)}>Contact</Link>
          </ul>
        </div>

        {/* Mobile Work Terminal Button Footer - Absolute Fixed Mobile Link */}
        <div className="pt-4 border-t border-white/[0.05]">
          <Link
            href="/portfolio"
            className="w-full text-center block py-3 text-xs font-mono tracking-widest uppercase rounded-xl border border-blue-500/30 bg-blue-900/10 text-white font-bold transition-colors hover:bg-blue-500"
            onClick={() => setMenu(false)}
          >
            Our Work →
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState, useRef, useEffect } from "react";
// import { HiMenu } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";
// import {
//   FaBullhorn,
//   FaCode,
//   FaCube,
//   FaMobileAlt,
//   FaPaintBrush,
//   FaPen,
//   FaSearch,
//   FaShareAlt,
//   FaWordpress
// } from "react-icons/fa";
// import { PiFigmaLogo } from "react-icons/pi";
// import { BiEnvelope } from "react-icons/bi";
// import { SiShopify } from "react-icons/si";

// const Header = () => {
//   const pathname = usePathname();

//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);
//   const [servicesOpenMobile, setServicesOpenMobile] = useState(false);

//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const showServicesDesktop = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setServicesOpenDesktop(true);
//   };

//   const hideServicesDesktop = () => {
//     timeoutRef.current = setTimeout(() => {
//       setServicesOpenDesktop(false);
//     }, 200);
//   };

//   const serviceLinks = [
//     { Icon: FaCode, label: "Website Designing Services", path: "/Website_Des" },
//     { Icon: SiShopify, label: "Shopify Development", path: "/Shopify_Development" },
//     { Icon: FaWordpress, label: "Wordpress Solution", path: "/WordPress_Solutions" },
//     { Icon: PiFigmaLogo, label: "UI/UX Design", path: "/Figma" },
//     { Icon: FaMobileAlt, label: "Mobile App Development", path: "/Mobile_Dev" },
//     { Icon: FaCube, label: "3D Design & Visualization", path: "/ThreeD_Design" },
//     { Icon: FaPaintBrush, label: "Graphic Designing", path: "/Graphic_Design" },
//     { Icon: FaPen, label: "Content Writing", path: "/Content&Copywriting" },
//     { Icon: BiEnvelope, label: "Email Marketing", path: "/EmailMarketing" },
//     { Icon: FaShareAlt, label: "Social Media Management", path: "/SocialMediaManage" },
//     { Icon: FaBullhorn, label: "Advertising Management", path: "/AdvertisingManage" },
//     { Icon: FaSearch, label: "SEO", path: "/SEO" },
//   ];

//   const isActive = (route) =>
//     pathname === route ? "text-white" : "text-gray-300";

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
//           : "bg-black/40 backdrop-blur-lg"
//       }`}
//     >
//       <nav className="w-full h-20 flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto">
//         {/* Logo */}
//         <Link href="/" className="w-40 lg:w-48">
//           <Image
//             src="/website_Recuirment/Fotter_logo.png"
//             alt="Logo"
//             width={200}
//             height={80}
//             className="w-full h-auto"
//             priority
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="
//         hidden md:flex items-center 
//         gap-5 lg:gap-7 xl:gap-10 
//         text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]
//         font-medium
//         ">
//           <Link
//             href="/"
//             className={`${isActive("/")} hover:text-white transition`}
//           >
//             Home
//           </Link>

//           <Link
//             href="/about-us"
//             className={`${isActive("/about-us")} hover:text-white transition`}
//           >
//             About
//           </Link>

//           {/* Services */}
//           <li
//             className="relative"
//             onMouseEnter={showServicesDesktop}
//             onMouseLeave={hideServicesDesktop}
//           >
//             <span className="flex items-center gap-1 cursor-pointer text-gray-300 hover:text-white transition">
//               Services
//               <svg
//                 className={`w-4 h-4 transition ${
//                   servicesOpenDesktop ? "rotate-180" : ""
//                 }`}
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M5.23 7.21l4.77 5 4.77-5z" />
//               </svg>
//             </span>

//             {servicesOpenDesktop && (
//               <ul className="
//               absolute top-12 
//               w-[280px] lg:w-[320px] xl:w-[360px]
//               rounded-2xl bg-black/90 backdrop-blur-xl
//               border border-white/10 shadow-2xl overflow-hidden
//               ">
//                 {serviceLinks.map(({ Icon, label, path }, i) => (
//                   <li key={i} className="group">
//                     <Link
//                       href={path}
//                       className="
//                       flex items-center gap-3 
//                       px-5 lg:px-6 
//                       py-2 
//                       text-[14px] lg:text-[15px]
//                       text-gray-300 hover:text-white 
//                       hover:bg-white/5 transition
//                       "
//                     >
//                       <Icon className="text-blue-400 group-hover:scale-110 transition text-lg" />
//                       {label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <Link
//             href="/Blogs"
//             className={`${isActive("/Blogs")} hover:text-white transition`}
//           >
//             Blogs
//           </Link>

//           <Link
//             href="/packages"
//             className={`${isActive("/packages")} hover:text-white transition`}
//           >
//             Pricing
//           </Link>

//           <Link
//             href="/contact"
//             className={`${isActive("/contact")} hover:text-white transition`}
//           >
//             Contact
//           </Link>
//         </ul>

//         {/* CTA */}
//         <Link
//           href="/portfolio"
//           className="
//           hidden md:block
//           px-5 lg:px-6 xl:px-7
//           py-2 lg:py-2.5
//           text-[14px] lg:text-[15px] xl:text-[16px]
//           rounded-full 
//           bg-gradient-to-r from-blue-500 to-cyan-400 
//           text-white font-semibold 
//           hover:scale-105 transition
//           "
//         >
//           Our Work
//         </Link>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setMenu(true)}
//           className="md:hidden text-3xl text-white"
//         >
//           <HiMenu />
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-black/95 backdrop-blur-xl p-6 transform transition-transform duration-300 ${
//           menu ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-end mb-8">
//           <IoClose
//             className="text-3xl text-white cursor-pointer"
//             onClick={() => setMenu(false)}
//           />
//         </div>

//         <ul className="flex flex-col gap-6 text-white text-lg">
//           <Link href="/" onClick={() => setMenu(false)}>
//             Home
//           </Link>

//           <Link href="/about-us" onClick={() => setMenu(false)}>
//             About
//           </Link>

//           {/* Mobile Services */}
//           <li>
//             <button
//               onClick={() => setServicesOpenMobile(!servicesOpenMobile)}
//               className="flex justify-between w-full"
//             >
//               Services
//               <span>{servicesOpenMobile ? "-" : "+"}</span>
//             </button>

//             {servicesOpenMobile && (
//               <ul className="mt-4 flex flex-col gap-3 text-gray-300">
//                 {serviceLinks.map(({ label, path }, i) => (
//                   <Link key={i} href={path} onClick={() => setMenu(false)}>
//                     {label}
//                   </Link>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <Link href="/Blogs" onClick={() => setMenu(false)}>
//             Blogs
//           </Link>

//           <Link href="/packages" onClick={() => setMenu(false)}>
//             Pricing
//           </Link>

//           <Link href="/contact" onClick={() => setMenu(false)}>
//             Contact
//           </Link>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;