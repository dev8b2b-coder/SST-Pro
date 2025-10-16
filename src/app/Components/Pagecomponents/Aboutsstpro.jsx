import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Image from "next/image";
import SecurityIcon from ".././../../../public/icons/securityicon.svg";
import EarthIcon from ".././../../../public/icons/earthicon.svg";
import Button from "../Uiux/Button";

const Aboutsstpro = () => {
  return (
    <div className="pt-12 md:pt-18 lg:pt-24 2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={
                'Trusted Growth for<br> <span class="gradient_text">Global Investors</span> '
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "Founded in 2025, SST Pro Ltd is a licensed global investment company <br/> specializing in Forex, Real Estate, and diversified financial markets.."
              }
              color={"text-white"}
              align={"text-end"}
            />
          </div>
        </div>
      </div>

      <div className="pt-18">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div className="flex items-center">
            <div className="w-full flex flex-col gap-4 sm:gap-6">
              <div
                className="bg-secondary max-w-5xl flex flex-col md:flex-row justify-center items-center
                    py-5 xl:py-8 mx-4 md:mx-0 rounded-2xl"
              >
                <div className="md:ps-6 xl:ps-0 md:pe-12 h-full">
                  <Image
                    src={EarthIcon}
                    alt="icon"
                    width={1000}
                    height={500}
                    className="max-w-[45px] lg:max-w-[55px]"
                  />
                </div>
                <div className="md:ps-12 text-center md:text-start px-4 md:px-0 md:border-s-[3px] border-dashed border-primary">
                  <span className="sub_description text-black">
                    With operations in the USA and the United Kingdom, we help
                    investors achieve consistent, secure, and sustainable
                    financial <br />
                    growth through data-driven strategies
                  </span>
                </div>
              </div>

              {/* mint strip */}
              <div
                className="bg-primary max-w-[650px] lg:max-w-[700px] xl:max-w-4xl flex flex-col md:flex-row
                    justify-center items-center py-5 xl:py-8 mx-4 md:mx-0 rounded-2xl"
              >
                <div className="md:ps-6 xl:ps-0 md:pe-12 xl:max-w-[103px] h-full">
                  <Image
                    src={SecurityIcon}
                    alt="icon"
                    width={1000}
                    height={500}
                    className="max-w-[58px] lg:max-w-[68px]"
                  />
                </div>
                <div className="md:ps-12 text-center md:text-start px-4 md:px-0 md:border-s-[3px] border-dashed border-secondary">
                  <span className="sub_description text-black">
                    SST Pro Ltd is officially registered under the laws of
                    Colorado and certified by the Secretary of State of
                    Colorado, maintaining full compliance and good standing.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative w-full flex justify-center md:justify-start px-4 md:px-0 mt-6 md:mt-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-[320px] sm:w-[420px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px]
                 max-w-none rounded-[12px]"
              >
                <source src="/video/earthvideo.mp4" type="video/mp4" />
              </video>

              {/* TOP badge */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-3
                md:left-auto md:translate-x-0 md:top-6 md:right-6"
              >
                <Button
                  btn_name={"Entity ID: 20258098855"}
                  btn_background={"bg-[#0B0B0B]/80"}
                  shadow={true}
                  color={"text-white"}
                  border_bottom={"border-b-0"}
                  custom_style="
      whitespace-nowrap
      px-3 py-[6px] text-[11px] rounded-full
      sm:px-4 sm:py-2 sm:text-[12.5px]
      md:px-5 md:py-2 md:text-sm
      lg:px-6 lg:py-2.5 lg:text-base
      border border-white/20 backdrop-blur-md
      hover:bg-[#0B0B0B]/90 transition-all
    "
                />
              </div>

              {/* BOTTOM badge */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-3
                md:left-auto md:translate-x-0 md:bottom-6 md:right-6"
              >
                <Button
                  btn_name={"Confirmation Number: 17752920"}
                  btn_background={"bg-[#0B0B0B]/80"}
                  shadow={true}
                  color={"text-white"}
                  border_bottom={"border-b-0"}
                  custom_style="
      whitespace-nowrap
      px-3 py-[6px] text-[5px] rounded-full
      sm:px-4 sm:py-2 sm:text-[12.5px]
      md:px-5 md:py-2 md:text-sm
      lg:px-6 lg:py-2.5 lg:text-base
      border border-white/20 backdrop-blur-md
      hover:bg-[#0B0B0B]/90 transition-all
    "
                />
              </div>
            </div>
          </div>

          {/* /RIGHT */}
        </div>

        <div className="max-w-[600px] md:pl-1 mx-auto md:mx-0 text-center md:text-left mt-6">
          <Description
            description={
              'SST Pro is also a <span class="gradient_text"> UK-registered and regulated company since 2025,</span><br> ensuring transparency, compliance, and investor protection as a key operation.'
            }
            color={"text-white"}
            align={"text-start md:text-start"}
          />
        </div>

        <div
          className="mt-2 md:pl-1 w-max mx-auto md:mx-0"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <Button
            btn_name={"Join as an Investor "}
            btn_background={"bg-transparent"}
            shadow={true}
            color={"text-white"}
            border_bottom={"border-b-0"}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutsstpro;
