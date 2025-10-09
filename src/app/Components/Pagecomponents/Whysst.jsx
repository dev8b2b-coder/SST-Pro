import React from "react";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Whysstslider from "./Whysstslider";

const Whysst = () => {
  return (
    <div>
      <div className="inn_container pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Title
              title={'<span class="gradient_text">Why SST Pro?</span> '}
              color={"text-white"}
            />
          </div>
          <div>
            <Description
              description={
                "Two years of excellence, transparent strategies, <br/> and client-focused solutions."
              }
              color={"text-white"}
              align={"text-end"}
            />
          </div>
        </div>
        <div className="pt-18">
          <Whysstslider />
        </div>
      </div>
    </div>
  );
};

export default Whysst;
