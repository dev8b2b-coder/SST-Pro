"use client";
import React from "react";
import Image from "next/image";
import Title from "../Uiux/Title";
import icoInnovation from '.././../../../public/icons/bulb.svg'
import icoSecurity from '.././../../../public/icons/lock.svg'
import icoGrowth from '.././../../../public/icons/graph.svg'
import icoTransparency from '.././../../../public/icons/neweye.svg'
import icoPartnership from '.././../../../public/icons/newsecurity.svg'
import visionImg from '.././../../../public/images/eyebg.png'
import innerbulb from '.././../../../public/icons/Vectorinner.svg'
import InnerLock from '.././../../../public/icons/lockinner.svg'
import InnerGrowth from '.././../../../public/icons/graphinner.svg'
import InnerTrans from '.././../../../public/icons/neweyeinner.svg'
import InnerPartnership from '.././../../../public/icons/newsecuritinner.svg'

const missionCards = [
  {
    icon: icoInnovation,
    innerIcon: innerbulb,  
    title: "Innovation",
    desc: "Driving returns with cutting-edge strategies.",
  },
  {
    icon: icoSecurity,
    innerIcon: InnerLock,  
    title: "Security",
    desc: "Robust risk management and compliance.",
  },
  {
    icon: icoGrowth,
    innerIcon: InnerGrowth,  
    title: "Growth",
    desc: "Sustainable and measurable financial gains.",
  },
  {
    icon: icoTransparency,
    innerIcon: InnerTrans,  
    title: "Transparency",
    desc: "Complete clarity in all operations.",
  },
  {
    icon: icoPartnership,
    innerIcon: InnerPartnership,  
    title: "Partnership",
    desc: "Building trust and shared success with every client.",
  },
];

const  Aboutdata=() =>{
  return (
    <section className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6">
          <div className="lg:col-span-8">
            <Title
              title={'Our <span class="gradient_text">Mission</span>'}
              color={"text-white"}
            />
            <p className="text-white/75 mt-3 max-w-3xl leading-relaxed">
              At SST Pro, we combine innovation, technology, and professional
              insight to deliver measurable returns. Our goal is to provide every
              investor with sustainable growth backed by strong risk management
              and complete transparency.
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-white/70 text-sm md:text-[15px] lg:text-right">
              Empowering investors through secure and profitable global
              opportunities.
            </p>
            <div className="ml-0 lg:ml-auto mt-2 h-[2px] w-20 bg-white/15 rounded-full" />
          </div>
        </div>

       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 2xl:gap-6">
  {missionCards.map((c, i) => (
    <div
      key={i}
      className="rounded-[22px] p-[1px] bg-gradient-to-br from-white/10 to-white/5 group"
    >
      <div
        className="
          about-card rounded-[20px] px-5 py-5 h-full relative overflow-hidden
          transition-transform duration-500 ease-out
          group-hover:-translate-y-1.5 group-hover:shadow-[0_14px_36px_rgba(0,0,0,0.42)]
        "
      >
        {/* inner ring */}
        <span className="pointer-events-none absolute inset-[10px] rounded-[16px] border border-white/10" />

        {/* shine sweep */}
        <span className="shine pointer-events-none" />

        {/* icon */}
       <div
  className="
    relative
    w-12 h-12 rounded-xl bg-white/10 border border-white/15
    flex items-center justify-center
    transition-transform duration-500 ease-out
    group-hover:-translate-y-1 group-hover:scale-110
  "
>
  {/* main icon */}
  <Image src={c.icon} alt="" className="w-7 h-7 object-contain" />

  {/* inner icon (center overlay) — optional */}
  {c.innerIcon && (
    <span className="absolute inset-0 flex items-center justify-center">
      <Image
        src={c.innerIcon}
        alt=""
        className="w-4 h-4 opacity-90"
      />
    </span>
  )}

  {/* small badge (corner) — optional */}
  {c.badgeIcon && (
    <span
      className="
        absolute -right-1 -bottom-1 w-5 h-5 rounded-md
        bg-white/15 border border-white/20
        flex items-center justify-center
        backdrop-blur-[2px]
      "
    >
      <Image src={c.badgeIcon} alt="" className="w-3 h-3" />
    </span>
  )}
</div>

        <h4 className="text-white text-lg font-semibold mt-4">{c.title}</h4>
        <p className="text-white/70 text-sm leading-relaxed mt-1">{c.desc}</p>

        {/* blue glow (expands on hover) */}
        <div
          className="
            glow pointer-events-none absolute -bottom-10 -right-10 w-28 h-28
            rounded-full blur-3xl bg-[#5CA8FF1f]
            transition-all duration-500 ease-out
            group-hover:w-36 group-hover:h-36 group-hover:bg-[#5CA8FF2b]
          "
        />
      </div>
    </div>
  ))}
</div>

      </div>

      <div className="inn_container mt-14 md:mt-18">
    
<div className="mt-8 relative h-[320px] md:h-[380px] lg:h-[440px] overflow-hidden rounded-[26px] border border-white/12">


  <Image
    src={visionImg}              
    alt="Vision"
    fill
    priority
    className="object-cover object-right"
  />


  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10cc] to-transparent" />


  <div className="relative z-[1] h-full flex items-center">
    <div className="px-6 md:px-10 max-w-4xl">
      <p className="text-white/85 text-[16px] md:text-[18px] leading-8">
        We aim to become a globally recognized investment
        <span className="text-[#78A6FF]"> leader</span> — known for reliability,
        growth, and ethical excellence. <span className="text-[#78A6FF]">SST Pro</span>
        makes professional investment opportunities accessible worldwide,
        helping investors turn <span className="text-[#78A6FF]">ambition</span> into achievement.
      </p>
    </div>
  </div>
</div>

      </div>

      
    </section>
  );
}
export default Aboutdata;
