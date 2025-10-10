import React from "react";
import whitearrow from "../../../../public/icons/whitearrow.svg";
import btnarrow from "../../../../public/icons/btnarrow.svg";
import Image from "next/image";

const Arrowbtn = ({width_height}) => {
  return (
    <div>
      <div className={`absolute overflow-hidden bottom-0 transition-all duration-500 group-hover:scale-[1.2] group-hover:bg-[var(--secondary)] cursor-pointer right-[0px] bg-[var(--primary)] ${width_height} flex justify-center items-center rounded-[50%] z-[3]`}>
        <div className="relative flex  w-full h-full justify-center items-center">
          <div className="absolute w-full h-full flex justify-center items-center  right-[0px] top-[0px] group-hover:top-[-200px]   group-hover:right-[-200px] transition-all duration-500">
            <Image
              src={btnarrow}
              alt="arrow"
              width={1000}
              height={500}
              className="max-w-[38px]"
            />
          </div>
          <div className="absolute w-full h-full flex justify-center items-center left-[-200px] bottom-[-200px] group-hover:bottom-[0px]   group-hover:left-[0px] transition-all duration-500">
            <Image
              src={whitearrow}
              alt="arrow"
              width={1000}
              height={500}
              className="max-w-[38px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrowbtn;
