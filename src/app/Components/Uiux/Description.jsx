"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Description = ({
  description,
  color,
  align,
  items_start,
  border_none
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);
  return (
    <div
      className={`flex flex-col ${items_start ? " " : "items-end"} `}
      data-aos="fade-up"
    >
      <p
        className={` ${color} ${align} main_description pb-4 font_light`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {border_none
        ? null
        : <div
            className="border-b-2 mt-[-8px] border-[#FFFFFF80]"
            style={{ width: "170px" }}
          />}
    </div>
  );
};

export default Description;
