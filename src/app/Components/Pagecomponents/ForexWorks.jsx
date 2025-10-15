import Image from 'next/image';
import React from 'react'
import Title from '../Uiux/Title';
import Description from '../Uiux/Description';
import IconPool from '.././../../../public/images/Pool.webp'
import IconStrategy from '.././../../../public/images/Strategy.webp'
import IconDollar from '.././../../../public/images/dollar.webp'
import Hero from '.././../../../public/images/Hero.webp'
import DividerWave from '.././../../../public/images/wave.webp'

const cards = [
  {
    icon: IconPool,
    title: "Professionally Managed Investment Pool",
    desc:
      "We’re structured as an SST Pro Forex program, where your funds are added to a professionally managed investment pool. Our models are backed by research and data.",
  },
  {
    icon: IconStrategy,
    title: "Advanced Market Monitoring and Strategy",
    desc:
      "Our systems analyze global currency markets 24/7, guiding dynamic diversification with risk-managed decision-making.",
  },
  {
    icon: IconDollar,
    title: "Monthly Profit Distribution",
    desc:
      "Investors receive monthly profit distributions, driven by our core values of consistency, risk control, and transparency.",
  },
];


const ForexWorks = () => {
  return (
    <section className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      {/* Top: Heading + subcopy */}
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <div>
            <Title
              title={
                'How Forex Investment <br/>Works with <span class="gradient_text">SST Pro?</span>'
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "Check how your trading works — from account setup to managed strategies; we handle everything to ensure consistent, secure Forex growth."
              }
              color={"text-white"}
              align={"text-end"}
            />
          </div>
        </div>


{/* === Cards (tall, icon bottom) === */}
<div className="mt-8">
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-10">
    {cards.map((c, i) => (
      <div key={i} className="h-full">
        <div className="fx-card-tall relative h-full rounded-[22px] overflow-hidden">
          {/* content */}
          <div className="relative z-[1] px-6 pt-6 pb-24 md:px-7 md:pt-7 md:pb-28 min-h-[340px] md:min-h-[360px] lg:min-h-[380px] flex flex-col">
            <h3 className="text-white text-[18px] md:text-[19px] font-semibold">{c.title}</h3>
            <p className="text-white/70 text-[13.5px] md:text-[14.5px] leading-relaxed mt-2">{c.desc}</p>
            <div className="mt-4 border-t border-white/10" />
            <span className="pointer-events-none absolute inset-3 rounded-[16px] border border-white/10" />
          </div>

          {/* icon bottom-center */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1]">
            <Image src={c.icon} alt="" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain drop-shadow-[0_6px_20px_rgba(105,166,255,0.35)]" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

{/* === Single wave band OUTSIDE the cards (no overlap) === */}
{/* === Single full-width wave band (no overlap) === */}
<div className="-mt-3 sm:-mt-4 lg:-mt-6">
  <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
    <div className="relative h-[120px] sm:h-[150px] lg:h-[180px]">
      <Image
        src={DividerWave}
        alt="Wave separator"
        fill
        className="object-cover object-bottom"
        sizes="100vw"
        priority
      />
      {/* gentle top fade so it blends with the page */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-transparent" />
    </div>
  </div>
</div>






      </div>

      {/* Wave divider image (full width but bounded + responsive) */}
      {/* <div className="mt-10 sm:mt-12">
        <div className="mx-auto w-full max-w-[1400px] px-4">
          <div className="relative w-full rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="relative w-full aspect-[21/5] sm:aspect-[21/6] lg:aspect-[21/7]">
              <Image
                src={DividerWave}
                alt="Wave separator"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Risk Management block */}
      <div className="inn_container mt-10 sm:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
          <div>
            <Title
              title={
                'Our Risk Management <br/><span class="gradient_text">Philosophy</span>'
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "From account setup to managed strategies, we handle everything to ensure consistent, secure Forex growth."
              }
              color={"text-white"}
              align={"text-end"}
            />
          </div>
        </div>

        {/* Bottom hero image */}
        <div className="mt-6 p-3 sm:p-4 gradient_border rounded-[30px] sm:rounded-[40px]">
          <div className="relative mx-auto w-full max-w-[1200px] rounded-[22px] sm:rounded-[32px] border border-white/15 bg-white/[0.03] overflow-hidden">
            {/* inner subtle border */}
            <div className="pointer-events-none absolute inset-2 rounded-[18px] sm:rounded-[26px] border border-white/10" />
            <div className="relative w-full aspect-[21/8] sm:aspect-[21/9] lg:aspect-[21/10]">
              <Image
                src={Hero}
                alt="Risk management hero"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default ForexWorks