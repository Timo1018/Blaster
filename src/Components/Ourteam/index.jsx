import React from "react";
import Image from "../../Assets/Images/team1.jpg";
import Image2 from "../../Assets/Images/team2.jpg";
import Image3 from "../../Assets/Images/team3.jpg";

const Ourteam = () => {
  return (
    <div className="xl:pb-24 grid justify-items-center" id="Team">
      <div className="text-center justify-center mt-20 pb-20">
        <p className="xl:text-[60px] lg:text-[50px] text-[40px] font-bold uppercase text-[#333333]">
          Our Team
        </p>
        <p className="font-bold text-[#333333]">
          CREATIVE TALENTS FROM WEST COAST
        </p>
      </div>
      <div className="grid grid-cols-2 md:flex lg:flex xl:flex xl:px-44 gap-8 px-6 lg:px-10">
        <div className="grid justify-center text-center">
          <img src={Image} className="w-full" alt="" />
          <p className="text-[19px] text-[#333333] font-bold mt-6"> Tracy</p>
          <p className="text-[25px] text-[#333333] font-bold font-sans"> Designer</p> 
        </div>
        <div className="grid justify-center text-center">
          <img src={Image2} className="w-full" alt="" />
          <p className="text-[19px] text-[#333333] font-bold mt-6"> Linda</p>
          <p className="text-[25px] text-[#333333] font-bold font-sans"> Manager</p> 
        </div>
        <div className="grid justify-center text-center">
          <img src={Image} alt="" />
          <p className="text-[19px] text-[#333333] font-bold mt-6"> Mary</p>
          <p className="text-[25px] text-[#333333] font-bold font-sans"> Developer</p> 
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
