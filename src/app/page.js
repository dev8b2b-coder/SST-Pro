'use client'
import React, { useEffect } from 'react'
import Homewrap from './Components/Pagecomponents/Homewrap'
import AOS from "aos";
import "aos/dist/aos.css";
function page() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <Homewrap />
    </div>
  )
}

export default page
