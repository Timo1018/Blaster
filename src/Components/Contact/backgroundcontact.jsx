import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { AiOutlineBehance } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";

const Backgroundcontact = () => {
  return (
    <div className="backgroundfooter flex items-center justify-center">
      <div className="grid grid-cols-3 xl:flex lg:flex md:flex gap-10">
        <p className="w-20 h-20 rounded-full hover:bg-[#FFD321] flex items-center justify-center duration-500">
          <CgFacebook size={38} color="#303030"/>
        </p>
        <p className="w-20 h-20 rounded-full hover:bg-[#FFD321] flex items-center justify-center duration-500">
          <AiOutlineTwitter size={38} color="#303030"/>
        </p>
        <p className="w-20 h-20 rounded-full hover:bg-[#FFD321] flex items-center justify-center duration-500">
          <AiOutlineBehance size={38} color="#303030"/>
        </p>
        <p className="w-20 h-20 rounded-full hover:bg-[#FFD321] flex items-center justify-center duration-500">
          <BsDribbble size={38} color="#303030"/>
        </p>
        <p className="w-20 h-20 rounded-full hover:bg-[#FFD321] flex items-center justify-center duration-500">
          <BsGithub size={38} color="#303030"/>
        </p>
      </div>
    </div>
  );
};

export default Backgroundcontact;
