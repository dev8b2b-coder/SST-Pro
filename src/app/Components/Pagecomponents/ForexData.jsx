"use client";
import React from "react";
import Image from "next/image";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Arrowbtn from "../Uiux/Arrowbtn";
import Graph from '.././../../../public/images/forexgraph.webp'

const TopFloatStyle = {
  animation: "floatY 6s ease-in-out infinite, driftX 18s ease-in-out infinite",
  willChange: "transform",
};

const ForexData = () => {
  return (
<section className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={
                'Your Gateway to <br/><span class="gradient_text">Global Forex Growth</span>'
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description description={""} color={"text-white"} align={"text-end"} />
          </div>
        </div>
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-12 items-stretch">
          <div className="p-4 gradient_border group rounded-[50px] hover:shadow-[-4px_4px_4px_#ffffff99] hover:scale-[1.02] transition-all duration-700">
            <div className="relative rounded-[30px] border border-white/15 overflow-hidden bg-white/[0.03] h-full lg:min-h-[360px] xl:min-h-[400px]">
              <div className="h-full aspect-[16/9] lg:aspect-auto">
                <div className="h-full w-full" style={TopFloatStyle}>
                  <Image
                    src={Graph}
                    alt="Global forex growth"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-4 gradient_border group rounded-[50px] hover:shadow-[-4px_4px_4px_#ffffff99] hover:scale-[1.02] transition-all duration-700">
  <div className="relative rounded-[30px] border border-white/15 bg-white/[0.05] px-5 md:px-7 h-full lg:min-h-[360px] xl:min-h-[400px] flex flex-col justify-center">
    <div className="pointer-events-none absolute inset-2 rounded-[24px] border border-white/10" />
    <p className="relative z-[1] text-white/80 leading-relaxed text-2xl md:text-xl h-full flex items-center">
      The Foreign Exchange (Forex) market processes more than $7 trillion in daily
      transactions, making it the most liquid and dynamic market in the world. At SST Pro,
      we transform this volatility into opportunity. Through data-backed strategies,
      algorithmic models, and professional fund management, we offer our investors monthly
      returns between 10% and 12%—securely and transparently.
    </p>
    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#0B0D10] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-[2]">
      <Arrowbtn width_height={"w-[44px] h-[44px] md:w-[56px] md:h-[56px]"} />
    </div>
  </div>
</div>

        </div>
      </div>
      <style jsx global>{`
        @keyframes floatY {
          0%   { transform: translate3d(0, 0px, 0) scale(1); }
          50%  { transform: translate3d(0, -18px, 0) scale(1.01); }
          100% { transform: translate3d(0, 0px, 0) scale(1); }
        }
        @keyframes driftX {
          0%   { transform: translate3d(0, 0, 0); }
          25%  { transform: translate3d(-6px, 0, 0); }
          50%  { transform: translate3d(0, 0, 0); }
          75%  { transform: translate3d(6px, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        /* When combining both animations via inline style,
           the transforms stack automatically across keyframes. */
      `}</style>
    </section>
  );
};

export default ForexData;
