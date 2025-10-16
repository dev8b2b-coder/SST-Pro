"use client";
import Image from "next/image";
import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";


import lightCard from ".././../../../public/images/lightblue.png"
import darkShadow from "../../../../public/images/darkbule.png"

import icReg   from ".././../../../public/icons/licenece.svg";
import icMulti from ".././../../../public/icons/market.svg";
import icUp    from ".././../../../public/icons/return.svg";
import icGlobe from ".././../../../public/icons/global.svg";

const items = [
  {
    icon: icReg,
    title: "Licensed &\nRegulated",
    desc:  "Certified by the Colorado\nSecretary of State.",
    rotate: "-rotate-3",
  },
  {
    icon: icMulti,
    title: "Multi-Market\nExpertise",
    desc:  "Forex, Real Estate, and\nmore.",
    rotate: "rotate-1",
  },
  {
    icon: icUp,
    title: "Consistent\nReturns",
    desc:  "Data-driven, steady\nperformance.",
    rotate: "-rotate-2",
  },
  {
    icon: icGlobe,
    title: "Global\nPresence",
    desc:  "Active in the USA and\nUK markets.",
    rotate: "rotate-2",
  },
];

const AboutChoose=()=> {
  return (
    <section className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div className="inn_container">
        {/* heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6">
          <div className="lg:col-span-8">
            <Title
              title={'Why Choose <span class="gradient_text">SST Pro?</span>'}
              color="text-white"
            />
            <div className="mt-3 h-[2px] w-24 bg-white/15 rounded-full" />
          </div>
          <div className="lg:col-span-4">
            <Description
              description={"The smarter, safer, and more transparent way to invest."}
              color="text-white"
              align="lg:text-end"
            />
          </div>
        </div>

        {/* cards — same images, staggered layout */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((c, i) => (
            <div
              key={i}
              className={`
                relative mx-auto w-[86%] sm:w-[90%] max-w-[320px]
                ${i===1 ? "sm:-mt-8" : ""} ${i===2 ? "lg:-mt-10" : ""} ${i===3 ? "sm:-mt-8 lg:-mt-14" : ""}
              `}
            >
              {/* dark shadow (same image for all) */}
              <div className={`absolute -right-2 top-2 w-full ${c.rotate} pointer-events-none`}>
                <Image
                  src={darkShadow}
                  alt="shadow"
                  className="w-full h-auto select-none"
                  priority
                />
              </div>

              {/* light card (same image for all) */}
              <div className={`relative ${c.rotate}`}>
                <Image
                  src={lightCard}
                  alt="card"
                  className="w-full h-auto drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                  priority
                />

                {/* content on image */}
                <div className="absolute inset-0 px-5 pt-5 pb-6 flex flex-col">
                  {c.icon && (
                    <div className="w-10 h-10 rounded-full bg-black/10 border border-white/15 backdrop-blur-[2px] flex items-center justify-center">
                      <Image src={c.icon} alt="" className="w-5 h-5" />
                    </div>
                  )}

                  <div className="mt-3 whitespace-pre-line">
                    <h4 className="text-black text-[18px] md:text-[20px] font-semibold leading-snug">
                      {c.title}
                    </h4>
                    <p className="text-black/70 text-[12.5px] md:text-[13.5px] leading-5 mt-1">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Button
            btn_name="Join as an Investor"
            btn_background="bg-primary"
            color="text-black"
          />
        </div>
      </div>
    </section>
  );
}
export default AboutChoose;