import React from "react";
// import fotterbackground from "../../../../public/banners/fotterbackground.webp";
// import fottercardph from "../../../../public/images/fottercardph.webp";
import logo from "../../../../public/images/Logo.webp";
import Image from "next/image";
import facebookicon from "../../../../public/icons/facebook.svg";
import Instaicon from "../../../../public/icons/Insta.svg";
import x from "../../../../public/icons/X.svg";
import Link from "next/link";
// import Worldbroker from "../Pagecomponents/Worldbroker";
import Fotterlinks from "../Pagecomponents/Footerlinks";
import Investment from "../Pagecomponents/Investment";
const footerdata = {
  linkingdata: [
    {
      title: "Products & Solutions",
      pagelinks: [
        // { pagelink: "/", pagename: "About us" },
        { pagelink: "/contact-us", pagename: "Strategy Workshops" },
        { pagelink: "/forex", pagename: "AI Analysis Tools Us" },
        { pagelink: "/indices", pagename: "Personal Mentorship" },
        { pagelink: "/commodities", pagename: "Portfolio Review" }
      ]
    },
    {
      title: "Resources",
      pagelinks: [
        { pagelink: "/economic-calendar", pagename: "Training Modules" },
        { pagelink: "/pip-calculator", pagename: "Market Insights" }
      ]
    },
    {
      title: "Contact",
      pagelinks: [
        { pagelink: "/platform", pagename: "info@sst.pro" },
        { pagelink: "/platform", pagename: "(555) 123-4567" },
    ]
    }
  ],
  carddata: [
    {
      title: "Physical Address",
      discription:
        "Giorgi Leonid Ze Street, Tbilisi 0105, <br/> Georgia Office 38.",
      link: false
    },
    {
      title: "Registered Address",
      discription:
        "Ground Floor, The Sotheby <br/> Building, Rodney  Village, Rodney <br/> Bay, Saint Lucia",
      link: false
    },
    {
      title: "Registration No.",
      discription: "2025-00621",
      link: false
    },
    {
      title: "Contact No.",
      discription: "+41 2650 06818",
      link: "tel:+41265006818"
    },
    {
      title: "Email",
      discription: "support@fliptradegroup.com",
      link: "mailto:support@fliptradegroup.com"
    }
  ],
  social_links: [
    {
      alt: "Facebook",
      pagelink: "https://www.facebook.com/profile.php?id=61580314210503",
      icon: facebookicon
    },
    {
      alt: "Instagram",
      pagelink: "https://www.instagram.com/fliptradegroup/",
      icon: Instaicon
    },
    {
      alt: "You Tube",
      pagelink: "https://www.youtube.com/@fliptradegroup",
      icon: x
    }
  ]
};
const Footer = () => {
  return (
    <div>
        <Investment />
      <div className=" pt-12 ">
        <div className="bg-cover bg-no-repeat">
          <div className="inn_container py-18 px-24 shadow-[inset_0px_20px_20px_-20px_#0074f2] rounded-tl-[150px] rounded-tr-[150px]">
            <div className="2xl:px-[3%]">
              <div className="hidden md:grid grid-cols-4">
                <div>
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="Logo"
                      width={1000}
                      height={500}
                      className="max-w-[84px]"
                    />
                  </Link>
                  <p className="text-xl text-white pt-4">
                    Smarter Growth. Financial <br /> Freedom.
                  </p>
                </div>
                {footerdata.linkingdata.map((data, index) =>
                  <div
                    className={`${index === 2
                      ? null
                      : "border-r-[3px] border-dashed border-[#72727250]"}`}
                    key={index}
                  >
                    <Fotterlinks title={data.title} linklist={data.pagelinks} />
                  </div>
                )}
              </div>

              <div className="flex md:hidden flex-col-reverse">
                <div className="grid grid-cols-2 lg:grid-cols-1 py-6">
                  {footerdata.linkingdata.slice(0,1).map((data, index) =>
                    <div
                      className={`${index === 2
                        ? null
                        : "border-r-[3px] w-full border-dashed"}`}
                      key={index}
                    >
                      <Fotterlinks
                        title={data.title}
                        linklist={data.pagelinks}
                        border={true}
                      />
                    </div>
                  )}
                  <div className="flex items-start flex-col gap-4">
                    {footerdata.linkingdata.slice(1, 3).map((data, index) =>
                      <div
                        className={`${index === 2
                          ? null
                          : "border-r-[3px] w-full border-dashed"}`}
                        key={index}
                      >
                        <Fotterlinks
                          title={data.title}
                          linklist={data.pagelinks}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center py-6">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="Logo"
                      width={1000}
                      height={500}
                      className="max-w-[180px]"
                    />
                  </Link>
                </div>
              </div>

              {/* <div className="pt-10 md:pt-16">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 bg-primary p-8 md:p-12 rounded-3xl">
                  {footerdata.carddata.map((data, index) =>
                    <div
                      className={`font_secondary ${index === 4
                        ? null
                        : " md:border-r-[3px] border-dashed md:border-[#C5C6FF80]"}`}
                      key={index}
                    >
                      <div className="w-auto xl:w-max md:m-auto pt-3 md:px-2">
                        <p className="text-lg 2xl:text-2xl font-semibold w-max text-white">
                          {data.title}
                        </p>
                        {data.link !== false
                          ? <Link href={data.link}>
                              <p
                                className="text-[15px] md:text-[13px] 2xl:text-base pt-1 md:pt-3 2xl:pt-4 font-light text-white leading-6"
                                dangerouslySetInnerHTML={{
                                  __html: data.discription
                                }}
                              />
                            </Link>
                          : <p
                              className="text-[15px] md:text-[13px] 2xl:text-base pt-1 md:pt-3 2xl:pt-4 font-light text-white leading-6 max-w-[90%] lg:max-w-max"
                              dangerouslySetInnerHTML={{
                                __html: data.discription
                              }}
                            />}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="grid md:hidden grid-cols-1 bg-no-repeat bg-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 bg-cover md:p-12 rounded-3xl"
                //   style={{ backgroundImage: `url(${fottercardph.src})` }}
                >
                  <div className="p-6">
                    {footerdata.carddata.map((data, index) =>
                      <div
                        className={`font_secondary ${index === 4
                          ? null
                          : " md:border-r-[3px] border-dashed md:border-[#C5C6FF80]"}`}
                        key={index}
                      >
                        <div className="w-auto xl:w-max md:m-auto pt-3 md:px-2">
                          <p className="text-lg 2xl:text-2xl font-semibold w-max text-white">
                            {data.title}
                          </p>
                          {data.link !== false
                            ? <Link href={data.link}>
                                <p
                                  className="text-[15px] md:text-[13px] 2xl:text-base pt-1 md:pt-3 2xl:pt-4 font-light text-white leading-6"
                                  dangerouslySetInnerHTML={{
                                    __html: data.discription
                                  }}
                                />
                              </Link>
                            : <p
                                className="text-[15px] md:text-[13px] 2xl:text-base pt-1 md:pt-3 2xl:pt-4 font-light text-white leading-6 max-w-[90%] lg:max-w-max"
                                dangerouslySetInnerHTML={{
                                  __html: data.discription
                                }}
                              />}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="pt-12">
                <div className="text-base 2xl:text-lg text-[#AAAAAA] leading-[32px] 2xl:leading-[40px] font-light font_secondary">
                  <span className="text-white font-medium">
                    Risk statement :{" "}
                  </span>{" "}
                  An investment in derivatives and financial markets involves
                  high risk and may result in losses greater than your initial
                  investment. Trading in securities, forex, commodities,
                  options, and futures is not suitable for everyone, and you
                  should only invest money you can afford to lose. Before
                  investing, ensure such activities are permitted in your
                  country and seek independent financial, legal, or tax advice.
                  FlipTrade Trade Limited does not provide services to residents
                  of the United States, Cuba, Iraq, Myanmar, North Korea, or
                  Sudan, and its services are not intended for jurisdictions
                  where they would contravene local laws or regulations. Nothing
                  on this site should be considered financial advice.
                </div>
              </div> */}
              <div className="pt-12">
                <div className="border-t-[1px] py-6 border-solid border-[#ffffff57] font_secondary flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row items-center lg:justify-between">
                  <div className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-5">
                    <p className="text-[14px] 2xl:text-base font-light text-[#AAAAAA] font_light">
                     © 2025 SST Pro. All rights reserved. <span className="gradient_text"> SST Pro </span> 
                    </p>
                  </div>

                  <div className="flex gap-2">
                    {footerdata.social_links.map((data, index) =>
                      <Link href={data.pagelink} target="_blank" key={index}>
                        <div className="w-[33px] h-[33px] flex rounded-[50%] items-center justify-center bg-primary">
                          <Image
                            src={data.icon}
                            alt={data.icon}
                            width={1000}
                            height={500}
                            className="w-[18px]"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
