import React from "react";


function Filterstyle({ img, img1, img2, img3 }) {
  return (
    <div className="w-[100%]">
      <div className="flex">
        <img src={img} className="w-[100%]" alt="" />
        {/* <img src={img1} className="w-[100%]" alt="" />
        <img src={img2} className="w-[100%]" alt="" />
        <img src={img3} className="w-[100%]" alt="" /> */}
      </div>
    </div>
  );
}

export default Filterstyle;
