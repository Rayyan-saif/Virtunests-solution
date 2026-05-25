"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSecOne = () => {

useEffect(() => {
AOS.init({
duration:1000,
once:true
});
},[])

return (

<section className="relative py-28 px-6 md:px-12 lg:px-20 overflow-hidden">

{/* background glow */}

<div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-500/20 blur-[160px] rounded-full"></div>
<div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-blue-600/20 blur-[160px] rounded-full"></div>

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

{/* IMAGE SIDE */}

<div
className="relative flex justify-center"
data-aos="zoom-in"
>

<div className="relative">

<Image
src="/website_Recuirment/about.jpg"
alt="about"
width={650}
height={650}
className="rounded-3xl border border-white/10 shadow-2xl object-cover"
/>

{/* floating card */}

<div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">

<h4 className="text-white font-semibold text-lg">
3+ Years Experience
</h4>

<p className="text-gray-300 text-sm">
Delivering digital solutions
</p>

</div>

</div>

</div>


{/* CONTENT SIDE */}

<div
data-aos="fade-left"
className="text-center lg:text-left"
>

<span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">
About VirtuNests
</span>

<h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">

Building Digital Products
<br />

<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
That Drive Growth
</span>

</h2>

<p className="text-gray-300 mt-6 text-lg leading-relaxed">

VirtuNests Solutions helps businesses transform ideas into powerful
digital products. From modern websites to scalable platforms,
we combine design, technology and strategy to create
experiences that deliver measurable results.

</p>

<p className="text-gray-400 mt-4 text-lg leading-relaxed">

Our team collaborates with startups and growing businesses
to build strong digital identities, improve user experience
and create solutions that attract customers and increase conversions.

</p>


{/* stats */}

<div className="grid grid-cols-3 gap-6 mt-10">

<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center">

<h3 className="text-2xl font-bold text-white">
43+
</h3>

<p className="text-gray-400 text-sm">
Projects
</p>

</div>

<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center">

<h3 className="text-2xl font-bold text-white">
23+
</h3>

<p className="text-gray-400 text-sm">
Clients
</p>

</div>

<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center">

<h3 className="text-2xl font-bold text-white">
75%
</h3>

<p className="text-gray-400 text-sm">
Client Retention
</p>

</div>

</div>

</div>

</div>

</section>

);
};

export default AboutSecOne;