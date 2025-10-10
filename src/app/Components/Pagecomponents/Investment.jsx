import React from "react";
import investmentbanner from "../../../../public/images/investmentbanner.webp";
import investperson from "../../../../public/images/investperson.webp";
import investlightanimation from "../../../../public/images/investlightanimation.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";
const Investment = () => {
  return (
    <div className="py-32">
      <div className="inn_container overflow-hidden relative">
        <div className="pt-24">
          <Image
            src={investmentbanner}
            alt=""
            width={5000}
            height={500}
            className="w-full"
          />
        </div>
        <div className="absolute bottom-0 left-[5%]">
          <Image
            src={investperson}
            alt=""
            width={2000}
            height={500}
            className="max-w-[660px]"
          />
        </div>
        <div className="absolute bottom-[-22%] left-[5%]">
          <Image
            src={investlightanimation}
            alt=""
            width={2000}
            height={500}
            className="max-w-[660px]"
          />
        </div>
        <div className="absolute bottom-0 h-full max-h-[483px] w-full grid grid-cols-2">
          <div />
          <div className="flex items-center">
            <div className="">
              <Title
                title={"Start Your Investment <br/> Journey Today"}
                color={"text-black"}
                font_medium={true}
              />
              <Description
                description={
                  "Sign up, request a demo, or explore our training resources."
                }
                color={"text-black"}
                align={'text-start'}
                items_start={true}
              />
              <div className="flex gap-5 pt-8">
                <Button
                 btn_name={'Create Account'}
                 btn_background={'bg-[#63818D]'}
                 color={'text-white'}
                 shadow={true}
                />
                <Button
                 btn_name={'Request Demo'}
                 btn_background={'bg-secondary'}
                 color={'text-black'}
                 btn_border={'border-secondary'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
