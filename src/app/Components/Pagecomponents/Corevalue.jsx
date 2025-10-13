import React from "react";
import handshake from "../../../../public/icons/handshake.svg";
import corevalue from "../../../../public/images/corevalue.webp";
import Image from "next/image";
const Corevalue = () => {
  return (
    <div>
      <div className="inn_container pt-18">
        <div className="flex items-center gap-3 w-max m-auto shadow-[inset_0px_0px_20px_20px_#4aa1ff54] py-[32px] px-[60px] rounded-[70px] cursor-pointer">
          <Image
            src={handshake}
            alt=""
            width={1000}
            height={500}
            className="max-w-[60px]"
          />
          <p className="text-[40px] gradient_text">CORE VALUES</p>
        </div>

        <div className="pb-24">
          <div className="relative">
            <Image
              src={corevalue}
              alt="corevalue"
              width={1000}
              height={500}
              className="max-w-[400px] m-auto"
            />

            <div className="absolute top-[13%] left-[6%] 2xl:left-[10%] max-w-[430px] w-full text-center">
              <p className="text-[25px] gradient_text pb-2 w-max m-auto">Integrity</p>
              <span className="sub_description text-white ">
                We believe in honesty, transparency, and ethical <br />{" "}
                practices in every decision.
              </span>
            </div>
            <div className="absolute bottom-[30%] left-[6%] 2xl:left-[10%]  max-w-[430px] w-full text-center">
              <p className="text-[25px] gradient_text pb-2 w-max m-auto">
                Client-Centricity
              </p>
              <span className="sub_description text-white ">
                Every solution is built around our clients <br /> goals and
                needs.
              </span>
            </div>
            <div className="absolute top-[35%] right-[10%] max-w-[430px] w-full text-center">
              <p className="text-[25px] gradient_text pb-2 w-max m-auto">Innovation</p>
              <span className="sub_description text-white ">
                We leverage data, technology, and AI to stay <br /> ahead of
                market trends.
              </span>
            </div>
            <div className="absolute bottom-[10%] right-[10%] max-w-[430px] w-full text-center">
              <p className="text-[25px] gradient_text pb-2 w-max m-auto">Excellence</p>
              <span className="sub_description text-white ">
                We strive for quality, precision, and <br /> professionalism in
                all we do.
              </span>
            </div>
            <div className="absolute bottom-[-130px] left-[0px] w-full flex justify-center">
              <div className=" max-w-[430px] w-full text-center">
                <p className="text-[25px] gradient_text pb-2 w-max m-auto">Growth Mindset</p>
                <span className="sub_description text-white ">
                  We focus on creating long-term value for our <br /> clients
                  and stakeholders.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corevalue;
