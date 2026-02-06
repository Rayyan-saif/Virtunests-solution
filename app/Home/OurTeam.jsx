"use client";
import Image from "next/image";
import Folio from "./Folio";

const OurTeam = () => {
  const Teame = [
    { id: "Box1", image: "/website_Recuirment/Pictures/Ukasha.jpg", text: "Ukasha", title: "Founder & Creative Director" },
    { id: "Box2", image: "/website_Recuirment/Pictures/Fahad-removebg.png", text: "Fahad", title: "Ops Lead & Client Manager" },
    { id: "Box3", image: "/website_Recuirment/Pictures/CTO-Ahmad.png", text: "Ahmad", title: "CTO" },
    { id: "Box4", image: "/website_Recuirment/Pictures/Alizeh.png", text: "Alizeh", title: "Social Media Manager" },
    { id: "Box5", image: "/website_Recuirment/Pictures/Saad1.png", text: "Saad", title: "SEO Specialist" },
    { id: "Box6", image: "/website_Recuirment/Pictures/Ahmad1.png", text: "Ahmad", title: "Senior Visual Designer" },
    { id: "Box7", image: "/website_Recuirment/Pictures/SMART-removebg.png", text: "Rayyan", title: "Front-end Developer" },
    { id: "Box8", image: "/website_Recuirment/Pictures/Shahrukh-removebg.png", text: "Shahrukh", title: "Graphic Designer" },
    { id: "Box9", image: "/website_Recuirment/Pictures/Arbad-removebg.png", text: "Arbab", title: "Full-Stack Developer" },
    { id: "Box10", image: "/website_Recuirment/Pictures/Bisma2.png", text: "Bisma", title: "Content Creator & Copywriter" },
    { id: "Box11", image: "/website_Recuirment/Pictures/Tayyab_Saif.png", text: "Tayyab", title: "Marketing & Sales Manager" },
  ];

  return (
    <section className="relative w-full pt-10 lg:pt-14 px-4 sm:px-6 lg:px-10 bg-white">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center text-black tracking-tight">
        Meet Our Team
      </h1>

      <p className="text-[15px] sm:text-[16px] md:text-lg leading-relaxed text-center text-gray-700 font-roboto mt-2 mb-6 max-w-3xl mx-auto">
        Our team is made up of skilled professionals passionate about design, development, 
        and innovation dedicated to delivering excellence.
      </p>

      <div className="w-20 md:w-40 h-1 bg-blue-500 mx-auto rounded-full my-5"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 place-items-center max-w-7xl mx-auto py-5">
        {Teame.map((member) => (
          <Folio
            key={member.id}
            image={member.image}
            text={member.text}
            title={member.title}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
