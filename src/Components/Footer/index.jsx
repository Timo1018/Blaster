import { AiOutlineUp } from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#404040] h-24 flex justify-start xl:pl-44 items-center">
      <div className="flex items-center text-white">
        <p> Copyright © 2084 Blaster Studio | Design: templatemo</p>
        <a href="#">
          <div className="w-16 h-16 bg-[#383838] text-white flex justify-center items-center xl:ml-[420px]">
            <AiOutlineUp />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
