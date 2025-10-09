import React from "react";
import Topstock from "./Components/Pagecomponents/Topstock";
import Trackgroth from "./Components/Pagecomponents/Trackgroth";
import Investsmartly from "./Components/Pagecomponents/Investsmartly";
import Whysst from "./Components/Pagecomponents/Whysst";
import Aboutsst from "./Components/Pagecomponents/Aboutsst";
import Corevalue from "./Components/Pagecomponents/Corevalue";
import Faqs from "./Components/Pagecomponents/Faqs";
import Image from "next/image";
import demibanner from "../.././public/images/demibanner.webp"
const faqData = [
  {
    question: "What is SST?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  },
  {
    question: "Are my funds safe?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  },
  {
    question: "What services do you offer?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  },
  {
    question: "How do I open an account?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  },
  {
    question: "Is SST beginner-friendly?",
    answer:
      "Register online, verify your details, and start trading in minutes."
  }
];

function page() {
  return (
    <div className="bg-black">
      <div>
        <Image
         src={demibanner}
         alt=""
         width={5000}
         height={500}
         className="w-full"
         />
      </div>
      <Topstock />
      <Trackgroth />
      <Investsmartly />
      <Whysst />
      <Aboutsst />
      <Corevalue />
      <Faqs faqData={faqData} />
      
    </div>
  );
}

export default page;
