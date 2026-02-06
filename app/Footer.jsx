"use client";

import Link from "next/link";
import Image from "next/image";

import { 
  FaFacebook, FaInstagram, FaLinkedin, FaPen, FaTwitter, 
  FaCode, FaMobileAlt, FaCube, FaPaintBrush, 
  FaShareAlt, FaBullhorn, FaSearch 
} from "react-icons/fa";

import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { PiFigmaLogo } from "react-icons/pi";

const services = [
  [FaCode, "Website Designing Services", "/Website_Des"],
  [PiFigmaLogo, "UI/UX Design", "/Figma"],
  [FaMobileAlt, "Mobile App Development Services", "/Mobile_Dev"],
  [FaCube, "3D Design & Visualization", "/ThreeD_Design"],
  [FaPaintBrush, "Graphic Designing", "/Graphic_Design"],
  [FaPen, "Content Writing and Copywriting", "/Content&Copywriting"],
  [BiEnvelope, "Email Marketing", "/EmailMarketing"],
  [FaShareAlt, "Social Media Management", "/SocialMediaManage"],
  [FaBullhorn, "Advertising Management", "/AdvertisingManage"],
  [FaSearch, "Search Engine Optimization", "/SEO"],
];

const Footer = () => {
  return (
    <footer className="bg-[#171a31] pt-10 px-6 md:px-10 relative">

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      
        {/* Brand + Description */}
        <div className="flex flex-col items-center lg:items-start">
          <Image 
            src="/website_Recuirment/Fotter_logo.png"
            width={200}
            height={200}
            alt="logo"
            className="w-48 lg:w-60"
          />
          <p className="text-sm font-inter text-white leading-relaxed text-center lg:text-left max-w-sm">
            At Virtunests Solutions, we help businesses grow smarter with stunning websites, engaging UI/UX, creative branding, SEO, and marketing. Whether you’re a startup or an established brand, we make sure your digital presence stands out, attracts customers, and builds trust.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 justify-center md:justify-start lg:ml-20 ml-0">
          <div>
            <h3 className="text-[#4cb6f0] text-[20px] lg:text-[22px] font-extrabold font-poppins mb-4">
              Company
            </h3>
            <ul className="font-inter text-white space-y-1">
              {[
                { name: "Home", link: "/" },
                { name: "About-Us", link: "/about-us" },
                { name: "Packages", link: "/packages" },
                { name: "Portfolio", link: "/portfolio" },
                { name: "Blogs", link: "/Blogs" },
                { name: "Contact", link: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="hover:text-white transition-colors duration-300 hover:pl-2 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[20px] lg:text-[22px] font-extrabold font-poppins text-[#4cb6f0] mb-4">
            Services
          </h3>
          <ul className="text-base font-inter text-white">
            {services.map(([Icon, label, path], i) => (
              <li key={i}>
                <Link href={path} className="block py-1 hover:ml-2">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold font-mono text-[#4cb6f0] mb-4">Stay Connected</h3>
          <div className="flex space-x-3 mb-5">
            <a href="https://www.facebook.com/profile.php?id=61569306387156" target="_blank" className="p-2 border hover:border-white border-[#4cb6f0] text-white rounded-full bg-[#4cb6f0] transition"><FaFacebook /></a>

            <a href="#" className="p-2 border hover:border-white border-[#4cb6f0] text-white rounded-full bg-[#4cb6f0] transition"><FaTwitter /></a>

            <a href="https://www.linkedin.com/company/virtunests-solutions/posts/?feedView=all" target="_blank" className="p-2 border hover:border-white border-[#4cb6f0] text-white rounded-full bg-[#4cb6f0] transition"><FaLinkedin /></a>

            <a href="#" className="p-2 border hover:border-white border-[#4cb6f0] text-white rounded-full bg-[#4cb6f0] transition"><FaInstagram /></a>
          </div>

          <p className="text-md flex items-start text-white">
            <BiMap className='mr-2 text-[#4cb6f0] text-[22px]'/>
            Near Bank AL Habib Block 2, <br/> Nazimabad Karachi Pakistan.
          </p>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@virtunests.com" target="_blank">
            <p className="text-md flex items-center text-white py-2 group cursor-pointer">
              <BiEnvelope className='mr-2 text-[#4cb6f0] text-[22px] group-hover:rotate-180 transition-transform'/>
              Info@virtunests.com
            </p>
          </a>

          <a href="https://wa.me/923248188272" target="_blank">
            <p className="text-md flex items-center text-white group cursor-pointer">
              <BiPhone className='mr-2 text-[#4cb6f0] text-[22px] group-hover:rotate-45 transition-transform'/>
              +92 324 8188272
            </p>
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-6 mt-10 border-t border-blue-200 text-center text-white text-sm font-mono">

        <div className="relative z-10 max-w-xl mx-auto my-2 bg-white p-6 rounded-xl shadow-xl text-center font-poppins">
          <h3 className="text-2xl font-bold mb-2 text-blue-950">Let’s Build Together</h3>
          <p className="text-blue-950 mb-6 text-sm">
            We’re always open to exciting collaborations. Let’s work together <br /> and bring your ideas to life.
          </p>
          <Link
            href="/Contact"
            className="px-6 py-2 bg-blue-950 text-white font-bold rounded-full hover:bg-white hover:text-blue-950 border transition"
          >
            Say Hello →
          </Link>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-5 my-6 text-lg cursor-pointer text-white">
          {services.map(([Icon, label, path], idx) => (
            <Link
              key={idx}
              href={path}
              className="flex flex-col items-center gap-1 hover:text-blue-500 transition"
            >
              <Icon />
            </Link>
          ))}
        </div>

        <p className='text-lg pb-2 font-inter'>
          Copyright © 2020 - {new Date().getFullYear()}.   
          All Rights Reserved By
          <Link className="pl-1" href="/">VirtuNests.</Link>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
