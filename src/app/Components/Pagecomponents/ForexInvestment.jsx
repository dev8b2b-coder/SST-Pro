"use client";
import React from "react";
import Image from "next/image";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import ForexInvestImg from '.././../../../public/images/Forexinvestment.webp'

const ForexInvestement = () => {
  return (
    <section className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <div>
            <Title
              title={'<span class="gradient_text">SST Pro Forex</span><br/>Investment Highlights'}
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={"Check out our achievements to trust our expertise: proven performance, reliable growth, transparent management."}
              color={"text-white"}
              align={"text-end"}
            />
          </div>
        </div>
        <div className="mt-8 p-3 sm:p-4 gradient_border rounded-[30px] sm:rounded-[50px]">
          <div className="relative mx-auto w-full max-w-[1000px] md:max-w-[1100px] xl:max-w-[1280px] 2xl:max-w-[1400px] rounded-[24px] sm:rounded-[40px] border border-white/15 bg-white/[0.03] overflow-hidden">

            <div className="pointer-events-none absolute inset-2 rounded-[20px] sm:rounded-[32px] border border-white/10" />
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] lg:aspect-[16/9] 2xl:aspect-[21/10]">
              <Image
                src={ForexInvestImg}
                alt="SST Pro Forex — Investment Highlights"
                fill
                className="object-contain"   
                priority
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 95vw,
                       (max-width: 1536px) 1280px,
                       1400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexInvestement;
