import { BsGlobeAmericas } from "react-icons/bs";
import { IoIosLaptop } from "react-icons/io";
import { AiFillCloud } from "react-icons/ai";
import React from "react";

const Yellowcarts = () => {
  return (
    <div className="mt-14">
      <div className="grid xl:flex lg:flex md:flex justify-center xl:gap-4 xl:px-44 lg:px-14 md:px-10 px-6 gap-10">
        <div className="">
          <p className="w-20 h-20 rounded-full bg-[#FFD321] flex justify-center items-center">
            <AiFillCloud color="white" size={38} />
          </p>
          <p className="text-[24px] font-bold mt-4"> Planning</p>
          <p>
            Blaster is free responsive layout from templatemo. Credit goes to
            Pixabay for images. You can change icons by looking at FontAwesome
            icons. Thank you for visiting our website.
          </p>
        </div>
        <div className="">
          <p className="w-20 h-20 rounded-full bg-[#FFD321] flex justify-center items-center">
            <IoIosLaptop color="white" size={38} />
          </p>
          <p className="text-[24px] font-bold mt-4"> Developing</p>
          <p>
            Example:
            <a href="#about" className="text-blue-300">&lt;i class="fa fa-phone"&gt;&lt;/i&gt;</a> for
            phone icon.
            <a href="#about" className="text-blue-300">&lt;i class="fa fa-mobile"&gt;&lt;/i&gt;</a> for
            mobile icon. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="">
          <p className="w-20 h-20 rounded-full bg-[#FFD321] flex justify-center items-center">
            <BsGlobeAmericas color="white" size={38} />
          </p>
          <p className="text-[24px] font-bold mt-4"> Launching</p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteu sunt in culpa qui
            officia deserunt mollit anim id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yellowcarts;
