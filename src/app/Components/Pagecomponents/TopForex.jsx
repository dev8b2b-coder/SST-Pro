import Image from 'next/image'
import React from 'react'
import Title from '../Uiux/Title'
import Description from '../Uiux/Description'
import Forexbitcoin from '.././../../../public/images/forexbitcoin.webp'
import Arrowbtn from '../Uiux/Arrowbtn'
import Vector from '.././../../../public/images/Vector.png'

const TopForex = () => {
  return (
 <section className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      {/* Heading row */}
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={
                'Monthly returns between <br/><span class="gradient_text">10% and 12%</span>'
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "Stay ahead with real-time market insights and <br/> trending stocks curated for you."
              }
              color={"text-white"}
              align={"text-end"}
            />
          </div>
        </div>
      </div>

      {/* Main card */}
      <div className="inn_container mt-10">
        <div className="p-4 gradient_border rounded-[40px]">
          <div className="rounded-[32px] border border-white/15 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(29,30,32,0.7)_0%,rgba(14,16,18,0.9)_60%,rgba(10,12,14,1)_100%)] px-4 py-4 2xl:px-6 2xl:py-6">
            {/* smaller left, wider right */}
            <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] xl:grid-cols-[460px_1fr] gap-6 items-stretch">
              {/* LEFT: smaller illustration card */}
              <div>
                <div className="h-full lg:min-h-[380px] rounded-[28px] border border-white/20 bg-white/[0.03] overflow-hidden p-3">
                  <div className="rounded-[22px] overflow-hidden h-full aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={Forexbitcoin}
                      alt="Monthly returns illustration"
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: wide rectangular panel */}
              <div>
                <div className="h-full lg:min-h-[380px] flex flex-col">
                  {/* profit + chart panel */}
                  <div className="rounded-[28px] border border-white/20 bg-white/[0.03] p-4 md:p-6 relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-2 rounded-[20px] border border-white/15" />
                    <div className="relative z-[1] flex items-start justify-between">
                      <div>
                        <p className="text-[13px] text-[#78A6FF] font-medium">Your Profit</p>
                        <div className="text-white text-[32px] md:text-[40px] font-semibold leading-none mt-1">
                          $254.70
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[#75E0A7] font-medium">
                        <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                          <path d="M5 15l6-6 4 4 4-6" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        +1.43%
                      </div>
                    </div>

                    <div className="mt-4 h-[118px] md:h-[140px] rounded-2xl overflow-hidden relative">
                      <Image
                        src={Vector}
                        alt="Performance chart"
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* divider */}
                  <div className="my-6 border-t border-white/10" />

                  {/* copy + arrow aligned to bottom */}
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4 mt-auto">
                    <p className="text-white/70 leading-relaxed">
                      At SST Pro Ltd, we make Forex investing simple, smart, and sustainable.
                      Offering investors in the USA and the United Kingdom the opportunity to earn
                      consistent monthly returns from the world’s largest financial market.
                    </p>
                    <Arrowbtn width_height={"w-[50px] md:w-[75px] h-[50px] md:h-[75px]"} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* subtle outer stroke */}
          <div className="mt-4 rounded-[32px] border border-white/15" />
        </div>
      </div>
    </section>
  )
}

export default TopForex