import React, { useState } from "react";
import QAsos from "../../Assets/Images/portfolio-img1.jpg";
import QAsos2 from "../../Assets/Images/portfolio-img2.jpg";
import QAsos3 from "../../Assets/Images/portfolio-img3.jpg";
import QAsos4 from "../../Assets/Images/portfolio-img4.jpg";
import QAsos5 from "../../Assets/Images/portfolio-img5.jpg";
import QAsos6 from "../../Assets/Images/portfolio-img6.jpg";
import QAsos7 from "../../Assets/Images/portfolio-img7.jpg";
import QAsos8 from "../../Assets/Images/portfolio-img8.jpg";
import QAsos9 from "../../Assets/Images/portfolio-img9.jpg";

import Filterstyle from "./Filterstyle";

const data = [
  {
    img: QAsos,
    status: "Html",
  },
  {
    img: QAsos2,
    status: "Photo",
  },
  {
    img: QAsos3,
    status: "Word",
  },
  {
    img: QAsos4,
    status: "Html",
  },
  {
    img: QAsos5,
    status: "Photo",
  },
  {
    img: QAsos6,
    status: "Word",
  },
  {
    img: QAsos7,
    status: "Html",
  },
  {
    img: QAsos8,
    status: "Photo",
  },
  {
    img: QAsos9,
    status: "Word",
  },
];

function Portfolio() {
  const [fillter, setFillter] = useState("All");
  return (
    <div className="w-full items-center text-[#1e1e1e] bg-[#F9F9F9] pt-20 mt-10 xl:mt-20">
      <div className="grid w-[100%] px-2 gap-10 xl:w-full" id="Prt">
        <div className="grid justify-items-center">
          <p className="text-[#333333] xl:text-[58px] text-[40px] font-bold tracking-[4px]"> PORTFOLIO</p>
          <p className="text-[14px] font-bold">
            MOBILE, WEB AND BRAND IDENTITY
          </p>
        </div>
        <div className="w-full flex justify-around gap-2 items-end text-xl font-extrabold mt-10">
          <div className="flex uppercase flex-wrap justify-center xl:flex lg:flex gap-2 text-[16px] font-medium">
            <button
              style={{
                height: "50px",
                padding: "4px 28px",
                fontWeight: "800",
                // color: "",
              }}
              className={`${
                fillter === "All" ? "text-white bg-[#FFD321]" : "text-[#999999]"
              } ''`}
              onClick={() => {
                setFillter("All");
              }}
            >
              ALL
            </button>
            <button
              style={{
                height: "50px",
                padding: "4px 28px",
                fontWeight: "800",
                // color: "",
              }}
              className={`${
                fillter === "Html" ? "text-white bg-[#FFD321]" : "text-[#999999]"
              } ""`}
              onClick={() => {
                setFillter("Html");
              }}
            >
              HTML
            </button>
            <button
              style={{
                height: "50px",
                borderRadius: "6px",
                padding: "4px 28px",
                fontWeight: "800",
                // color: "",
              }}
              className={`${
                fillter === "Photo" ? "text-white bg-[#FFD321]" : "text-[#999999]"
              } ""`}
              onClick={() => {
                setFillter("Photo");
              }}
            >
              PHOTOSHOP
            </button>
            <button
              style={{
                height: "50px",
                borderRadius: "6px",
                padding: "4px 28px",
                fontWeight: "800",
                // color: "",
              }}
              className={`${
                fillter === "Word" ? "text-white bg-[#FFD321]" : "text-[#999999]"
              } ""`}
              onClick={() => {
                setFillter("Word");
              }}
            >
              WORDPRESS
            </button>
            <button
              style={{
                height: "50px",
                borderRadius: "6px",
                padding: "4px 28px",
                fontWeight: "800",
                // color: "",
              }}
              className={`${
                fillter === "Word" ? "text-white bg-[#FFD321]" : "text-[#999999]"
              } ""`}
              onClick={() => {
                setFillter("Word");
              }}
            >
              MOBILE
            </button>
          </div>
        </div>
        <div
          className="w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-3"
          id="Prt"
        >
          {data
            .filter((elem) => {
              if (fillter === "All") {
                return elem;
              } else {
                return elem.status === fillter;
              }
            })
            .map((item) => (
              <Filterstyle key={item.id} img={item.img} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
