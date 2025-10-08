import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import cardbanner1 from "../../../../public/images/trackcard1.webp";
import cardbanner2 from "../../../../public/images/trackcard2.webp";
import cardbanner3 from "../../../../public/images/trackcard3.webp";
import cardbanner4 from "../../../../public/images/trackcard4.webp";
import cardbanner5 from "../../../../public/images/trackcard5.webp";
import cardbanner6 from "../../../../public/images/trackcard6.webp";
import btnarrow from "../../../../public/icons/btnarrow.svg";
import Image from "next/image";
const industries = [
  {
    image: cardbanner1,
    title: "Forex Trading",
    description:
      "Navigate global currencies with precision and smart strategies.",
    cardvalue1: "$7.5T+",
    cardvaluetype1: "Daily Volume",
    cardvalue2: "150+",
    cardvaluetype2: "Pairs",
    cardvalue3: "24/7",
    cardvaluetype3: "Market",
  },
  {
    image: cardbanner2,
    title: "Real Estate",
    description:
      "Invest in properties that build long-term value and stability.",
    cardvalue1: "$280B",
    cardvaluetype1: "Investments",
    cardvalue2: "8%",
    cardvaluetype2: "Avg ROI",
    cardvalue3: "5%",
    cardvaluetype3: "Yearly Growth",
  },
  {
    image: cardbanner3,
    title: "Mining",
    description:
      "Harness opportunities in natural resources and global demand.",
    cardvalue1: "$700B+",
    cardvaluetype1: "Industry",
    cardvalue2: "5",
    cardvaluetype2: "Top Commodities",
    cardvalue3: "6%",
    cardvaluetype3: "Annual Growth",
  },
  {
    image: cardbanner4,
    title: "Sugar Plant",
    description:
      "Fueling industries with quality and sustainable production.",
    cardvalue1: "$55B+",
    cardvaluetype1: "Global Market",
    cardvalue2: "4%",
    cardvaluetype2: "Annual Growth",
    cardvalue3: "180M",
    cardvaluetype3: "Produced Yearly",
  },
  {
    image: cardbanner5,
    title: "Hotel Chains",
    description:
      "Expanding hospitality with innovation and global reach.",
    cardvalue1: "$400B+",
    cardvaluetype1: "Industry",
    cardvalue2: "70%",
    cardvaluetype2: "Avg Occupancy",
    cardvalue3: "12%",
    cardvaluetype3: "Yearly Revenue Rise",
  },
  {
    image: cardbanner6,
    title: "Bio Chemical",
    description:
      "Advancing industries with eco-friendly chemical solutions.",
    cardvalue1: "$820B+",
    cardvaluetype1: "Market",
    cardvalue2: "9%",
    cardvaluetype2: "CAGR",
    cardvalue3: "60%",
    cardvaluetype3: "Eco-based Demand",
  },
];


const Trackgroth = () => {
  return (
    <div>
      <div className="inn_container pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={
                'Track Your  <span class="gradient_text"> Groth <br/> With Ease & Market </span> '
              }
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "Monitor your expenses, track profits, and make <br/> informed investment decisions."
              }
              color={"text-white"}
              align={"text-end"}
            />
          </div>
        </div>
        <div className="pt-18">
          <div className="grid grid-cols-3 gap-12 ">
            {industries.map((data, index) =>
              <div className="p-4 gradient_border rounded-[50px]" key={index}>
                <div className="relative max-w-[510px] m-auto">
                  <Image
                    src={data.image}
                    alt="banner"
                    width={1000}
                    height={500}
                    className=""
                  />
                  <div className="absolute bottom-0 right-0 cursor-pointer bg-primary w-[80px] h-[80px] flex justify-center items-center rounded-[50%]">
                    <Image
                      src={btnarrow}
                      alt="arrow"
                      width={1000}
                      height={500}
                      className="max-w-[38px]"
                    />
                  </div>
                </div>
                <div className="max-w-[510px] m-auto pt-8">
                  <h4 className="text-[30px] gradient_text w-max">
                    {data.title}
                  </h4>
                  <p className="sub_description text-white pt-3 min-h-[66px]"
                   dangerouslySetInnerHTML={{__html:data.description}}
                  />
                  <div className="pt-10 flex gap-8">
                    <div >
                      <p className="w-max text-[21px] gradient_text font_light">
                        {data.cardvalue1}
                      </p>
                      <p className="text-white font_light">
                        {data.cardvaluetype1}
                      </p>
                    </div>
                    <div>
                      <p className="w-max text-[21px] gradient_text font_light">
                        {data.cardvalue2}
                      </p>
                      <p className="text-white font_light">
                        {data.cardvaluetype2}
                      </p>
                    </div>
                    <div>
                      <p className="w-max text-[21px] gradient_text font_light">
                        {data.cardvalue3}
                      </p>
                      <p className="text-white font_light">
                        {data.cardvaluetype3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trackgroth;
