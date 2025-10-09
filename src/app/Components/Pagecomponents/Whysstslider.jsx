"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Slider images
import sstslider1 from "../../../../public/images/sstslider2.webp";
import sstslider2 from "../../../../public/images/sstslider1.webp";

//Slider icons
import currencycheck from "../../../../public/icons/currencycheck.svg";
import shield from "../../../../public/icons/shield.svg";
import Image from "next/image";
import btnarrow from "../../../../public/icons/btnarrow.svg";

const data = [
  {
    id: 1,
    image: sstslider1,
    icon: shield,
    title: "Trusted Expertise",
    description: "Experienced market analysts guiding every decision.",
    link: ""
  },
  {
    id: 2,
    image: sstslider2,
    icon: currencycheck,
    title: "Fund Safety",
    description: "Your investments, securely protected.",
    link: ""
  },
  {
    id: 3,
    image: sstslider1,
    icon: shield,
    title: "Trusted Expertise",
    description: "Experienced market analysts guiding every decision.",
    link: ""
  },
  {
    id: 4,
    image: sstslider2,
    icon: currencycheck,
    title: "Fund Safety",
    description: "Your investments, securely protected.",
    link: ""
  }
];

const Whysstslider = () => {
  const [slideitem, setSlideItem] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setSlideItem(1);
      else setSlideItem(2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="max-w-[1490px] m-auto">
      <Swiper
        loop
        autoplay={{ delay: 2000}}
        speed={1000}
        slidesPerView={slideitem}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[475px]"
      >
        {data.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={1000}
                  height={500}
                  className="max-w-[700px] m-auto"
                />
                <div className="absolute top-0  w-full h-full flex items-center z-[1]">
                  <div className="flex flex-col justify-between h-[90%] w-full max-w-[650px] m-auto">
                    <div className="w-[64px] h-[64px] flex items-center justify-center bg-secondary rounded-[50%]">
                      <Image
                        src={data.icon}
                        alt="icon"
                        width={1000}
                        height={500}
                        className="max-w-[34px]"
                      />
                    </div>
                    <div className="">
                      <p className="text-[25px] gradient_text pb-2">
                        {data.title}
                      </p>
                      <span className="sub_description text-white ">
                        {data.description}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 cursor-pointer right-[25px] bg-primary w-[75px] h-[75px] flex justify-center items-center rounded-[50%] z-[2]">
                  <Image
                    src={btnarrow}
                    alt="arrow"
                    width={1000}
                    height={500}
                    className="max-w-[38px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Whysstslider;
