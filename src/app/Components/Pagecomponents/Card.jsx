"use client";
import Image from "next/image";

const Card = ({ img, icon, title, desc, className = "" }) => {
  return (
    <div
      className={`relative max-w-[308px]   ${className}`}
      style={{ perspective: "1200px" }}
    >
      <div className="relative">
        <Image
          src={img}
          alt=""
          width={1000}
          height={500}
          className="object-contain select-none pointer-events-none"
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center">
          <div className="w-[70%] m-auto">
            <div className="bg-secondary flex justify-center items-center w-[50px] xl:w-[66px] h-[50px] xl:h-[66px] rounded-[50%]">
              <Image
                src={icon}
                alt="icon"
                width={1000}
                height={500}
                className="max-w-[30px] md:max-w-[42px] max-h-[30px] md:max-h-[42px] object-contain"
              />
            </div>
            <div className="pt-5">
              <p
                className="text-xl md:text-[30px] text-black pb-2 w-max"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <span className="sub_description text-black">
                {desc}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
