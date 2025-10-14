"use client";
import React from "react";
import Image from "next/image";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";
import aboutbanner from ".././../../../public/banners/Banner.webp";
import aboutImg from ".././../../../public/banners/aboutusbg.jpg";
import bannerImg from ".././../../../public/banners/aboutudbg1.jpg"



const skills = [
  { label: "Video Editing", value: 85 },
  { label: "Videography", value: 90 },
  { label: "Branding", value: 77 },
];

const stats = [
  { value: "20+", label: "Year Of Experience" },
  { value: "1,000+", label: "Project Done" },
  { value: "300+", label: "Satisfied Client" },
  { value: "64", label: "Certified Award" },
];

 const AboutCardSection=()=> {
  return (
    <section className="inn_container pt-24 2xl:pt-32">
      {/* Top Card */}
      <div className="p-4 gradient_border rounded-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-12">
          {/* LEFT: Image */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5">
            <Image
              src={aboutImg}
              alt="studio"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
            {/* theme glow */}
            <div className="pointer-events-none absolute -top-10 -left-10 w-56 h-56 rounded-full blur-3xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20" />
          </div>

          {/* RIGHT: Content */}
          <div className="relative rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 2xl:p-10">
            <div className="pointer-events-none absolute inset-2 rounded-[32px] border border-white/10" />
            <div className="relative z-[1] space-y-4">
              <p className="text-white/60 text-sm">About Us</p>

              <Title
                title={
                  'We Always <span class="gradient_text"> Make The Best </span>'
                }
                color={"text-white"}
              />

              <Description
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id odio placerat, convallis mauris pulvinar non. Mauris blandit lorem sit amet, sagittis velit mattis non. Duis ut varius nunc. Donec tincidunt lacus a quam, fermentum est tincidunt ac."
                }
                color={"text-white/80"}
              />

              <div className="pt-4">
                <Button
                  btn_name="Contact Us"
                //   icon={firebtn.src}
                  border_color={"border-primary"}
                 color="text-black" 
            btn_background="bg-primary" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills + Stats */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-12">
          {/* Skills block */}
          <div className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
            <h4 className="text-2xl text-white font-semibold">Our Skills</h4>
            <p className="text-white/70 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="mt-6 space-y-5">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <span>{s.label}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((st, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 text-center"
                >
                  <div className="text-3xl md:text-4xl font-semibold gradient_text">
                    {st.value}
                  </div>
                  <div className="text-white/70 text-sm mt-1">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 relative overflow-hidden rounded-[40px] border border-white/10">
          <Image
            src={bannerImg}
            alt="cta"
            width={1600}
            height={700}
            className="w-full h-[260px] md:h-[340px] object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl xl:text-4xl text-white font-semibold">
              We Are Always Ready To <span className="gradient_text">Take A Perfect Shot</span>
            </h3>
            <Button
              btn_name="Get Started"
            //   icon={firebtn.src}
              border_color={"border-primary"}
              color="text-black" 
            btn_background="bg-primary" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutCardSection;