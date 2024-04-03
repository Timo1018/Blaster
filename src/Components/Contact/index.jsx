import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import React from "react";
import Backgroundcontact from "./backgroundcontact";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#F9F9F9] pt-20 px-4 xl:px-0 lg:px-0">
        <div className="text-center justify-center mt-20 pb-20">
          <p className="xl:text-[60px] lg:text-[50px] text-[40px] font-bold uppercase text-[#333333]">
            CONTACT US
          </p>
          <p className="font-bold text-[#333333]">
            WE LOVE PRETTY MUCH TO HEAR FROM YOU
          </p>
        </div>
        <div className="xl:flex lg:flex md:flex xl:justify-center justify-center px-2 grid grid-cols-2 gap-6 xl:gap-56 pb-20">
          <div>
            <p className="flex justify-center">
              <FaPhoneAlt size={26} />
            </p>
            <p className="text-[18px] font-semibold xl:w-full lg:w-[100%] md:w-full w-[100%] text-center">
              060-040-0640
            </p>
          </div>
          <div>
            <p className="flex justify-center">
              <AiOutlineMail size={26} />
            </p>
            <p className="text-[18px] font-semibold flex xl:w-full lg:w-[100%] md:w-full w-[100%] text-center">
              <span className="hidden xl:flex"> info</span>@company.com
            </p>
          </div>
          <div>
            <p className="flex justify-center">
              <ImLocation size={26} />
            </p>
            <p className="text-[18px] font-semibold xl:w-full lg:w-[100%] md:w-full w-[100%] text-center">
              San Francisco, California
            </p>
          </div>
        </div>
        <div className="pb-20">
          <div className="grid xl:grid xl:grid-cols-2 gap-10 px-4 xl:px-44">
            <div className="grid gap-[10px]">
              <input
                type="text"
                className="py-3 pl-2 border"
                placeholder="Name"
              />
              <input
                type="text"
                className="py-3 pl-2 border"
                placeholder="Email"
              />
              <input
                type="text"
                className="py-3 pl-2 border"
                placeholder="Subject"
              />
            </div>
            <div className="grid">
              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Message"
                className="border pl-2"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center py-6">
            <button className="xl:w-[24%] bg-white text-[#555555] border-black py-3 hover:bg-[#333333] hover:text-white duration-500 flex justify-center border">
              SEND EMAIL
            </button>
          </div>
        </div>
      </div>
      <Backgroundcontact />
    </div>
  );
};

export default Contact;
