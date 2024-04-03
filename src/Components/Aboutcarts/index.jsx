import React from "react";
import Yellowcarts from "./Yellowcarts";
import Ourfocus from "./ourfocus";

const Aboutcarts = () => {
  return (
    <div className="text-[#333333] mt-24">
      <div>
        <div className="grid justify-center text-center">
          <p className="xl:text-[58px] lg:text-[50px] text-[40px] font-bold">
            ABOUT US
          </p>
          <p className="font-bold"> WE ARE TALANTED DESIGNERS & DEVELOPERS</p>
        </div>
        <div>
          <Yellowcarts />
          <Ourfocus />
        </div>
      </div>
    </div>
  );
};

export default Aboutcarts;
