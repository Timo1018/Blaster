import React from "react";
import Navbar from "../Navbar";

const HomeBanner = () => {
  return (
    <div>
      <div className="backgroundimage text-[#333333] font-[Montserrat sans-serif] px-4">
        <Navbar />
        <div className="grid justify-items-center text-center">
          <div className="grid xl:mt-44 mt-20 text-center">
            <div className="flex justify-center">
              <hr className="my-5 w-[100px] border-2 border-black flex" />
            </div>
            <p className="text-[24px] tracking-[2px] font-bold">
              WE ARE a DIGITAL STUDIO
            </p>
            <p className="xl:text-[60px] lg:text-[50px] text-[44px] font-bold"> from California</p>
            <div className="flex justify-center">
              <button className="border-2 border-black py-4 font-bold hover:text-white hover:bg-[#333333] duration-300 w-[45%] flex justify-center my-5">
                Our Procces
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
