"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { HiOutlineLightBulb } from "react-icons/hi";
import { GiShakingHands, GiStoneCrafting } from "react-icons/gi";
import { FaRegFlag } from "react-icons/fa6";

export default function AboutSecTwo() {

useEffect(()=>{
AOS.init({
duration:1000,
once:true
})
},[])

const values = [
{
icon:HiOutlineLightBulb,
title:"Innovation Beyond Boundaries",
desc:"We push creative limits and explore new technologies to deliver impactful digital solutions."
},
{
icon:GiShakingHands,
title:"Empathy-Driven Excellence",
desc:"Understanding our clients' goals helps us craft meaningful and effective solutions."
},
{
icon:FaRegFlag,
title:"Collaborative Approach",
desc:"We believe great results come from strong collaboration with our clients."
},
{
icon:GiStoneCrafting,
title:"Craftsmanship With Care",
desc:"Every project is built with precision, creativity and attention to detail."
}
]

return (

<section className="relative py-28 px-6 md:px-12 lg:px-20 overflow-hidden">

{/* background glow */}

<div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-cyan-500/20 blur-[150px] rounded-full"></div>
<div className="absolute bottom-[-150px] right-[-120px] w-[350px] h-[350px] bg-blue-600/20 blur-[150px] rounded-full"></div>

<div className="max-w-7xl mx-auto text-center">

{/* heading */}

<span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">
Core Values
</span>

<h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
Our Working Principles
</h2>

<p className="text-gray-400 mt-4 max-w-2xl mx-auto">
The values that guide our work and define how we build meaningful
digital experiences for our clients.
</p>

{/* cards */}

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

{values.map((item,index)=>{

const Icon = item.icon

return(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*150}
className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8
hover:-translate-y-2 hover:border-cyan-400/40 transition-all duration-300
group"
>

<div className="flex justify-center mb-6">

<div className="bg-cyan-500/10 p-5 rounded-full border border-cyan-400/30
group-hover:bg-cyan-400 group-hover:text-black transition">

<Icon className="text-4xl text-cyan-400 group-hover:text-black"/>

</div>

</div>

<h3 className="text-xl font-semibold text-white mb-3">
{item.title}
</h3>

<p className="text-gray-400 text-sm leading-relaxed">
{item.desc}
</p>

</div>

)

})}

</div>

</div>

</section>

)

}