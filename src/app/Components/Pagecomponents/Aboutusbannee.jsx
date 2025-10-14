"use client";
import Image from "next/image";
import React from "react";
import Bannerposter from ".././../../../public/banners/Banner.webp";
import bannersignleft from "../../../../public/images/bannersignleft.webp";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";

const AboutUsBanner = () => {
  return (
    <div className="banner_container">
      <div className="relative pt-[30px] xl:pt-[26px] 2xl:pt-4">
        {/* Background Banner Image */}
        <Image
          src={Bannerposter}
          alt="About Us Banner"
          width={10000}
          height={500}
          className="w-full object-cover"
        />

        {/* Content Block (Left-aligned now) */}
        <div className="absolute top-[35%] left-[8%] w-[85%] md:w-[60%] xl:w-[50%]">
          <div className="text-left">
            <h1
              className="text-[48px] xl:text-[65px] 2xl:text-[80px] font-semibold gradient_text"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              About Us
            </h1>

            <Description
              description={
                "With a strong foundation in data and strategy, <br/>our trading team empowers investors to thrive in dynamic markets. <br/>Explore our mission and what sets us apart."
              }
              color="text-[#D0D0D0]"
              align="text-left"
              items_start={true}
              border={false}
            />

            <div className="pt-6" data-aos="fade-up" data-aos-duration="1400">
              <Button
                btn_name={"Explore Our Story"}
                btn_background={"bg-white"}
                shadow={true}
                color={"text-black"}
                border_bottom={"border-b-0"}
              />
            </div>
          </div>
        </div>

        {/* Decorative Icon on Bottom Left */}
        <div
          className="absolute bottom-[-5%] left-[5%]"
          data-aos="zoom-in"
          data-aos-duration="1600"
        >
          <Image
            src={bannersignleft}
            alt="Left Decor"
            width={2000}
            height={500}
            className="max-w-[90px] xl:max-w-[130px] 2xl:max-w-[160px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
