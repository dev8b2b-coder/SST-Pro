import React from "react";
import btnarrow from "../../../../public/icons/arrow.svg";
import Image from "next/image";
const Button = ({ color, btn_background, btn_name, btn_border, shadow,icon,border_bottom}) => {
  return (
    <button
      className={`text-[23px] px-[28px] cursor-pointer py-[12px] border-[3px] ${border_bottom} flex items-center gap-2 ${btn_border
        ? btn_border
        : "border-primary"} rounded-[50px] ${btn_background} ${color} ${shadow
        ? "shadow-[1px_3px_0px_#3A3A3A]"
        : ""}`}
    >
      {btn_name}
      {icon
        ? <div>
            <Image
              src={btnarrow}
              alt="arrow"
              width={1000}
              height={500}
              className="max-w-[24px]"
            />
          </div>
        : null}
    </button>
  );
};

export default Button;
