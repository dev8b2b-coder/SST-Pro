import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Earth from '.././../../../public/images/earth.webp'
import Image from "next/image";
import SecurityIcon from '.././../../../public/icons/securityicon.svg'
import EarthIcon from '.././../../../public/icons/earthicon.svg'
import Button from "../Uiux/Button";
const Aboutsstpro = () => {
  return (
   <div className=" pt-12 md:pt-18 lg:pt-24  2xl:pt-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={'Trusted Growth for<br> <span class="gradient_text">Global Investors</span> '}
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
          {/* LEFT STACK */}
          <div className="flex items-center">
            <div className="w-full">
              {/* blue strip */}
              <div className="bg-secondary max-w-5xl flex flex-col md:flex-row justify-center items-center py-4 xl:py-8">
                <div className="md:ps-6 xl:ps-0 md:pe-12 h-full">
                  <Image
                    src={EarthIcon}
                    alt="icon"
                    width={1000}
                    height={500}
                    className="max-w-[45px] lg:max-w-[55px]"
                  />
                </div>
                <div className="md:ps-12 text-center md:text-start px-3 md:px-0 md:border-s-[3px] border-dashed border-primary">
                  <span className="sub_description text-black">
                    With operations in the USA and the United Kingdom, we help
                    investors achieve consistent, secure, and sustainable financial <br />
                    growth through data-driven strategies
                  </span>
                </div>
              </div>

              <div className="bg-primary max-w-[650px] lg:max-w-[700px] xl:max-w-4xl flex flex-col md:flex-row justify-center items-center py-4 xl:py-8">
                <div className="md:ps-6 xl:ps-0 md:pe-12 xl:max-w-[103px]  h-full">
                  <Image
                    src={SecurityIcon}
                    alt="icon"
                    width={1000}
                    height={500}
                    className="max-w-[58px] lg:max-w-[68px]"
                  />
                </div>
                <div className="md:ps-12 text-center md:text-start px-3 md:px-0 md:border-s-[3px] border-dashed border-secondary">
                  <span className="sub_description text-black">
                    SST Pro Ltd is officially registered under the laws of Colorado and
                    certified by the Secretary of State of Colorado, maintaining full
                    compliance and good standing.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
              <Image
                src={Earth}
                alt="Earth"
                priority
                className="
                  w-[280px] sm:w-[340px] lg:w-[460px] xl:w-[560px] 2xl:w-[640px]
                  max-w-none
                  m-auto md:m-[unset] md:mr-auto
                "
              />

             
            </div>
          </div>
          {/* /RIGHT */}
        </div>
         <div className="max-w-[600px] md:pl-1">
                <Description
                  description={
                    'SST Pro is also a <span class="gradient_text"> UK-registered and regulated company since 2025,</span><br> ensuring transparency, compliance, and investor protection as a key operation.'
                  }
                  color={"text-white"}
                  align={"text-start"}
                />
              </div>

              {/* button (your provided props) */}
              <div
                className="mt-1 md:pl-1 w-max"
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
