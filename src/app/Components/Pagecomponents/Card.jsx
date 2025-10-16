"use client";
import Image from "next/image";

const Card = ({
  img,
  icon,
  title,
  desc,
  angle = -5,
  inset = { top: 26, right: 26, bottom: 26, left: 26 },
  className = "",
}) => {
  return (
    <div
      className={`relative w-[220px] h-[280px] md:w-[230px] md:h-[290px] lg:w-[240px] lg:h-[300px] ${className}
                  transition-transform duration-500 ease-out hover:-translate-y-2`}
      style={{ perspective: "1200px" }}
    >
      <Image
        src={img}
        alt=""
        fill
        priority
        className="object-contain select-none pointer-events-none"
      />

      <div
        className="absolute rounded-[18px] overflow-hidden [transform-origin:16%_18%]"
        style={{
          top: inset.top,
          right: inset.right,
          bottom: inset.bottom,
          left: inset.left,
          transform: `rotate(${angle}deg)`,
        }}
      >
        <div
          className="relative h-full w-full p-4 md:p-5"
          style={{ transform: `rotate(${-angle}deg)` }}
        >
          {icon && (
            <div className="w-10 h-10 rounded-full bg-[#E7F0FF] border border-white/50 shadow flex items-center justify-center mb-3">
              <Image src={icon} alt="" width={20} height={20} />
            </div>
          )}

          <h4 className="text-black text-[18px] md:text-[20px] font-semibold leading-tight">
            {title}
          </h4>
          <p className="text-black/70 text-[13px] leading-6 mt-2">{desc}</p>
        </div>
      </div>

      <div className="pointer-events-none absolute left-6 right-6 -bottom-2 h-6 bg-[#1B4BFF]/45 blur-[14px] rounded-full opacity-75" />
    </div>
  );
};
export default Card;
