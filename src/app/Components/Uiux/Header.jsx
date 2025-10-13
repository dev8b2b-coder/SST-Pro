"use client";
import React from "react";
import Logo from "../../../../public/images/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Headerbg from "../../../../public/banners/Headerbg.webp";
const headerlinks = [
  {
    id: 1,
    pagename: "Home",
    pagelink: "/"
  },
  {
    id: 2,
    pagename: "About",
    pagelink: "/about"
  },
  {
    id: 3,
    pagename: "Services",
    pagelink: "/services"
  },
  {
    id: 4,
    pagename: "Markets",
    pagelink: "/markets"
  },
  {
    id: 5,
    pagename: "Security",
    pagelink: "/security"
  },
  {
    id: 6,
    pagename: "Contact",
    pagelink: "/contact"
  }
];

const Header = () => {
  const currentpath = usePathname();
  return (
    <div className="px-[3%]">
      <div
        className="max-w-[1600px] cus_header w-[88%] m-auto flex justify-between items-center bg-cover px-[35px] py-[13px] rounded-[60px] bg-no-repeat"
        style={{ backgroundImage: `url(${Headerbg.src})` }}
      >
        <div className="2xl:min-w-[185px]">
          <Image
            src={Logo}
            alt="Logo"
            width={1000}
            height={500}
            className="max-w-[62px]"
          />
        </div>
        <div className="flex justify-center">
          {headerlinks.map((data, index) =>
            <div
              key={index}
              className="border-r-2 border-[#4AA1FF4D]  cursor-pointer group py-2 relative z-[2]"
            >
              <Link href={data.pagelink}>
                <span
                  className={` text-xl 2xl:text-[22px] relative z-[2] font_light px-5 ${currentpath ===
                  data.pagelink
                    ? "text-secondary font-semibold"
                    : "text-white font-medium"}`}
                >
                  {data.pagename}
                </span>
                {currentpath === data.pagelink
                  ? null
                  : <span className="bg-secondary border-b-4 border-black rounded-[20px]  my-auto h-[90%] left-0 absolute top-[5%] scale-0 translate-y-[50px] transition-all duration-500 w-full z-[1] group-hover:scale-100 group-hover:translate-y-0" />}
              </Link>
            </div>
          )}
        </div>
        <div>
          <Button
            btn_name={"Sign Up"}
            btn_background={"gradient_bg"}
            btn_border={"border-transparent"}
            color={"text-black"}
            icon={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
