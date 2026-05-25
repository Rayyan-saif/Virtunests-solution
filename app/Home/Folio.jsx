"use client";

import Image from "next/image";

const Folio = ({ text, image, title }) => {

  return (

    <div className="group relative min-w-[260px] h-[360px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

      <Image
        src={image}
        alt={text}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-0 p-6 text-center w-full">

        <h3 className="text-white text-lg font-semibold">
          {text}
        </h3>

        <p className="text-gray-300 text-sm">
          {title}
        </p>

      </div>

    </div>

  );
};

export default Folio;