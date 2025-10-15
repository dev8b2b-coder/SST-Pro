import React from 'react'
import Forexbanner from '../Components/Pagecomponents/Forexbanner'
import TopForex from '../Components/Pagecomponents/TopForex'
import ForexData from '../Components/Pagecomponents/ForexData'
import ForexInvestement from '../Components/Pagecomponents/ForexInvestment'
import ForexWorks from '../Components/Pagecomponents/ForexWorks'
import Faqs from '../Components/Pagecomponents/Faqs'
// import ForexInvestement from '../Components/Pagecomponents/ForexInvestment'
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
const page = () => {
  return (
    <div>
        <Forexbanner/>
        <TopForex/>
        <ForexData/>
        <ForexInvestement/>
        <ForexWorks/>
         <Faqs faqData={faqData} />
    </div>
  )
}

export default page