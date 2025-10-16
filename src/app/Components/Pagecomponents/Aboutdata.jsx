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
import Description from "../Uiux/Description";

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
  <section
      className="relative overflow-hidden pt-12 md:pt-18 lg:pt-24 2xl:pt-32"
      style={{ backgroundColor: "#0B0D10" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(100% 70% at 20% 0%, rgba(92,168,255,0.10) 0%, rgba(92,168,255,0.04) 40%, rgba(255,255,255,0.00) 70%)," +
            "radial-gradient(80% 70% at 85% 20%, rgba(120,166,255,0.08) 0%, rgba(120,166,255,0.03) 55%, rgba(255,255,255,0.00) 80%)",
        }}
      />

      <div className="inn_container">

<div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6">

  <div className="lg:col-span-8 text-center lg:text-left">
    <Title
      title={'Our <span class="gradient_text">Mission</span>'}
      color={"text-white"}
    />
    <p className="text-white/75 mt-3 max-w-3xl leading-relaxed mx-auto lg:mx-0 text-center lg:text-left">
      At SST Pro, we combine innovation, technology, and professional
      insight to deliver measurable returns. Our goal is to provide every
      investor with sustainable growth backed by strong risk management
      and complete transparency.
    </p>
  </div>

  {/* Right description -> center on mobile, right on lg */}
  <div className="lg:col-span-4">
    <Description
      description="Empowering investors through secure and profitable global opportunities."
      color="text-white/70"
      align="text-center lg:text-end"
      border={true}
      items_start={false}
    />
  </div>
</div>


        {/* ✅ Mission Cards (Glassy Design) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 2xl:gap-6 justify-items-center lg:justify-items-stretch">
          {missionCards.map((c, i) => (
            <div key={i} className="group">
              {/* Outer gradient frame */}
              <div
                className="rounded-[28px] p-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                }}
              >
                {/* Card content */}
                <div
                            className="
              relative h-full rounded-[26px] px-6 py-6 overflow-hidden border border-white/10 text-white
              transition-all duration-500 ease-out shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_40px_rgba(0,0,0,0.45)]
              group-hover:-translate-y-1.5 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_56px_rgba(0,0,0,0.55)]
              flex flex-col items-center lg:items-start text-center lg:text-left
            "
            style={{
              background:
                "radial-gradient(120% 140% at 20% 0%, rgba(92,168,255,0.10) 0%, rgba(92,168,255,0.03) 40%, rgba(255,255,255,0.02) 100%), rgba(12,15,20,0.75)",
            }}
                >
                  {/* Inner border ring */}
                  <span className="pointer-events-none absolute inset-[12px] rounded-[20px] border border-white/10" />


                  {/* Blue glow */}
                  <span
                    className="pointer-events-none absolute -bottom-10 -right-10 w-36 h-36 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 50% 50%, rgba(120,166,255,0.28) 0%, rgba(120,166,255,0.10) 60%, transparent 100%)",
                      transformOrigin: "100% 100%",
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_18px_rgba(0,0,0,0.35)]"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 20% 0%, rgba(120,166,255,0.25) 0%, rgba(120,166,255,0.12) 55%, rgba(120,166,255,0.06) 100%), rgba(255,255,255,0.06)",
                    }}
                  >
                    <Image src={c.icon} alt="" width={28} height={28} />
                    {c.innerIcon && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Image src={c.innerIcon} alt="" width={16} height={16} className="opacity-90" />
                      </span>
                    )}
                  </div>

                  <h4 className="text-white text-[20px] font-semibold mt-4 tracking-tight">
                    {c.title}
                  </h4>
                  <p className="text-white/70 text-[14px] leading-relaxed mt-1 max-w-[260px]">
                    {c.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6">

  <div className="lg:col-span-8 text-center lg:text-left">
    <Title
      title={'Our <span class="gradient_text">Vision</span>'}
      color={"text-white"}
    />
  </div>

  {/* Right description -> center on mobile, right on lg */}
  <div className="lg:col-span-4">
    <Description
      description="Building a bridge between financial ambition and <br>lasting achievement"
      color="text-white/70"
      align="text-center lg:text-end"
      border={true}
      items_start={false}
    />
  </div>
</div>
      </div>

      {/* ✅ Vision Banner */}
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
      <div className="px-6 md:px-10 max-w-4xl mx-auto text-center lg:text-left">
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
