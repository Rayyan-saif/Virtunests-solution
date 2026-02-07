"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
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
} from "react-icons/fa";
import { PiFigmaLogo } from "react-icons/pi";
import { BiEnvelope } from "react-icons/bi";

const Header = () => {
  const pathname = usePathname();

  const [menu, setMenu] = useState(false);

  // SEPARATE STATES
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);

  const timeoutRef = useRef(null);

  const showServicesDesktop = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpenDesktop(true);
  };

  const hideServicesDesktop = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpenDesktop(false);
    }, 300);
  };

  const serviceLinks = [
    { Icon: FaCode, label: "Website Designing Services", path: "/Website_Des" },
    { Icon: PiFigmaLogo, label: "UI/UX Design", path: "/Figma" },
    { Icon: FaMobileAlt, label: "Mobile App Development Services", path: "/Mobile_Dev" },
    { Icon: FaCube, label: "3D Design & Visualization", path: "/ThreeD_Design" },
    { Icon: FaPaintBrush, label: "Graphic Designing", path: "/Graphic_Design" },
    { Icon: FaPen, label: "Content Writing and Copywriting", path: "/Content&Copywriting" },
    { Icon: BiEnvelope, label: "Email Marketing", path: "/EmailMarketing" },
    { Icon: FaShareAlt, label: "Social Media Management", path: "/SocialMediaManage" },
    { Icon: FaBullhorn, label: "Advertising Management", path: "/AdvertisingManage" },
    { Icon: FaSearch, label: "Search Engine Optimization", path: "/SEO" },
  ];

  const isActive = (route) =>
    pathname === route
      ? "text-white bg-blue-600 px-4 py-2 rounded-full"
      : "text-gray-700";

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-poppins">
      <nav className="w-full h-20 flex items-center justify-between px-4 sm:px-6 lg:px-10 bg-white/70 backdrop-blur-md shadow-sm">
        
        {/* Logo */}
        <Link href="/" className="w-36 sm:w-36 lg:w-48">
          <Image
            src="/website_Recuirment/Logo.png"
            alt="Logo"
            width={200}
            height={80}
            className="w-full h-auto"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-[14px] lg:text-[16px] font-semibold">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/about-us" className={isActive("/about-us")}>About-Us</Link>

          {/* DESKTOP DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={showServicesDesktop}
            onMouseLeave={hideServicesDesktop}
          >
            <span className="flex items-center gap-1 cursor-pointer text-gray-700 hover:font-semibold">
              Services
              <svg
                className={`w-4 h-4 transition-transform ${
                  servicesOpenDesktop ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </span>

            {servicesOpenDesktop && (
              <ul className="absolute w-80 rounded-xl bg-white shadow-xl border border-blue-200 z-50">
                {serviceLinks.map(({ Icon, label, path }, i) => (
                  <li key={i} className="group relative flex items-center">
                    <Link
                      href={path}
                      className="flex items-center gap-3 w-full px-6 py-3 text-blue-900 font-medium transition duration-300 group-hover:text-blue-700"
                    >
                      <Icon className="text-xl text-blue-700 group-hover:scale-110 transition" />
                      {label}
                    </Link>

                    <span className="absolute left-0 top-0 h-full w-[3px] bg-linear-to-b from-blue-400 to-blue-700 scale-y-0 group-hover:scale-y-100 transition duration-300 origin-top"></span>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <Link href="/Blogs" className={isActive("/Blogs")}>Blogs</Link>
          <Link href="/packages" className={isActive("/packages")}>Packages</Link>
          <Link href="/contact" className={isActive("/contact")}>Contact</Link>
        </ul>

        {/* Desktop Portfolio Button */}
        <Link
          href="/portfolio"
          className="hidden md:block bg-blue-700 px-5 py-2 rounded-full text-white font-bold hover:scale-105 transition"
        >
          Portfolio
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenu(true)}
          className="md:hidden text-3xl text-gray-700"
        >
          <HiMenu />
        </button>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-white/90 backdrop-blur-xl text-blue-900 p-6 overflow-y-auto shadow-xl transform transition-transform duration-300 z-50 ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <IoClose
            className="text-3xl cursor-pointer"
            onClick={() => setMenu(false)}
          />
        </div>

        <ul className="flex flex-col gap-4 text-lg font-semibold">
          <Link href="/" onClick={() => setMenu(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setMenu(false)}>About-Us</Link>

          {/* MOBILE DROPDOWN */}
          <li>
            <button
              onClick={() => setServicesOpenMobile(!servicesOpenMobile)}
              className="flex items-center justify-between w-full"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${
                  servicesOpenMobile ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </button>

            {servicesOpenMobile && (
              <ul className="mt-3 pl-3 flex flex-col gap-3">
                {serviceLinks.map(({ Icon, label, path }, i) => (
                  <li key={i}>
                    <Link
                      href={path}
                      onClick={() => setMenu(false)}
                      className="flex items-center gap-3 text-blue-700"
                    >
                      <Icon className="text-lg" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <Link href="/Blogs" onClick={() => setMenu(false)}>Blogs</Link>
          <Link href="/packages" onClick={() => setMenu(false)}>Packages</Link>
          <Link href="/contact" onClick={() => setMenu(false)}>Contact</Link>
          <Link href="/portfolio" onClick={() => setMenu(false)}>Portfolio</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
