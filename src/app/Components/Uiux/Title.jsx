import React from "react";

const Title = ({ title, color ,font_medium }) => {
  return (
    <>
      <h2
        className={`main_title ${font_medium ? '' : 'font_light'}  pb-4 relative ${color}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="border-b-2 mt-[-8px] border-[#FFFFFF80]" style={{ width: "170px"}}></div>
    </>
  );
};

export default Title;
