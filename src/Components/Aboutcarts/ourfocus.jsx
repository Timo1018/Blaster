import { FaCloud } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineMobile } from "react-icons/ai";
import React from "react";
import Image from "../../Assets/Images/about-img.png";

const Ourfocus = () => {
  return (
    <div className="mt-20">
      <div className="grid md:flex lg:flex xl:flex xl:px-44 px-4 items-center gap-6">
        <div>
          <img src={Image} alt="" />
        </div>
        <div className="grid gap-10 xl:-mt-32">
          <div>
            <p className="text-[26px] font-bold pb-4"> Our Focus</p>
            <p className="font-extralight">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="grid gap-4">
            <div>
              <p className="flex items-center gap-4 pb-1">
                <AiOutlineMobile size={26} /> Mobile Apps
              </p>
              <div className="bg-[#F5F5F5] w-full relative h-1.5">
                <p className="bg-[#FFD321] absolute w-[80%] h-1.5"></p>
              </div>
            </div>
            <div>
              <p className="flex items-center gap-4 pb-1">
                <AiOutlineLink size={26} /> Web Development
              </p>
              <div className="bg-[#F5F5F5] w-full relative h-1.5">
                <p className="bg-[#FFD321] absolute w-[90%] h-1.5"></p>
              </div>
            </div>
            <div>
              <p className="flex items-center gap-4 pb-1">
                <FaCloud size={26} /> Cloud Computing
              </p>
              <div className="bg-[#F5F5F5] w-full relative h-1.5">
                <p className="bg-[#FFD321] absolute w-[76%] h-1.5"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourfocus;
