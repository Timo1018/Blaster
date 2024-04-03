import React from "react";
import jQuery from "jquery";

const Navbar = () => {
  jQuery(function ($) {
    var $navbar = $(".navbar");
    $(window).scroll(function (event) {
      var $current = $(this).scrollTop();
      if ($current > 0) {
        $navbar.addClass("navbar-color");
      } else {
        $navbar.removeClass("navbar-color");
      }
    });
  });
  return (
    <div>
      <div className="navbar flex xl:justify-between lg:justify-between lg:px-10 px-10 items-center py-4 xl:px-44">
        <div>
          <a
            href="#"
            className="font-bold xl:text-[40px] lg:text-[38px] text-[24px] text-[#303030] font-[Montserrat sans-serif]"
          >
            Blaster
          </a>
        </div>
        <div className="xl:flex lg:flex hidden justify-between uppercase">
          <a href="#" className="text-[15px] font-semibold tracking-[4px] font-[Montserrat sans-serif] bg-[#FFD321] text-[#505050] px-5 py-4">
            Home
          </a>
          <a href="#About" className="text-[15px] font-semibold tracking-[4px] font-[Montserrat sans-serif] hover:bg-[#FFD321] text-[#505050] px-5 py-4 duration-300">
            About
          </a>
          <a href="#Portfolio" className="text-[15px] font-semibold tracking-[4px] font-[Montserrat sans-serif] hover:bg-[#FFD321] text-[#505050] px-5 py-4 duration-300">
            Portfolio
          </a>
          <a href="#Team" className="text-[15px] font-semibold tracking-[4px] font-[Montserrat sans-serif] hover:bg-[#FFD321] text-[#505050] px-5 py-4 duration-300">
            Team
          </a>
          <a href="#Contact" className="text-[15px] font-semibold tracking-[4px] font-[Montserrat sans-serif] hover:bg-[#FFD321] text-[#505050] px-5 py-4 duration-300">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
