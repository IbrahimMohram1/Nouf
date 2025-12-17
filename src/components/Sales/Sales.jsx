import React from "react";
import { GiStarFormation } from "react-icons/gi";
import img from "../../assets/images/mobile2.png";
import img2 from "../../assets/images/mobile.png";
import { FaArrowRight } from "react-icons/fa";

export default function Sales() {
  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className="text-center mx-auto flex justify-center items-center gap-y-4 flex-col text-white">
          <span className="flex gap-x-2 custom-gradient  w-fit justify-center items-center ">
            <GiStarFormation />
            Smart Cross-Selling
          </span>
          <h2 className="text-4xl font-semibold">
            Turn Every Conversation into Extra Sales!{" "}
          </h2>
          <p className=" text-wrap w-1/2 mx-auto">
            Nouf listens to customers, understands their needs, and suggests
            additional products automatically.
          </p>
        </div>

        <div className="flex justify-center flex-wrap items-start text-white ">
          <div className="md:w-1/2 w-full contents  ">
            <img className="w-96" src={img} alt="" srcset="" />
          </div>
          <div className="bg-cyan-800 p-5 rounded-full md:mt-16 mx-8 my-4">
            <FaArrowRight />
          </div>
          <div className="md:w-1/2 w-full contents ">
            <img
              className="w-96
"
              src={img2}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
