import React from "react";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdElectricBolt, MdKeyboardVoice } from "react-icons/md";
import img from "../../assets/images/pircing.png";
export default function Pricing() {
  return (
    <>
      <div className="w-3/4 mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#19719D] to-[#092837] bg-clip-text text-transparent">
          Pricing
        </h2>{" "}
        <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-x-5 my-16">
          <div className="md:w-1/2 w-full text-white flex gap-y-8 flex-col">
            <h2 className="md:text-5xl text-3xl font-semibold">
              Free Integration. Pay Only Per Call.
            </h2>
            <p className=" text-gray-400 text-wrap w-3/4">
              We integrate the full voice-agent system for free — no setup fees
              or contracts.
            </p>
            <p className="text-[#19719D] text-2xl">
              <span className="text-3xl font-semibold ">1 SAR </span> per call
            </p>
            <p className="text-gray-400">Up to 5 minutes per call</p>
            <ul>
              <li>
                <div className="flex  gap-x-3">
                  <MdKeyboardVoice className="text-[#19719D] text-2xl" />
                  <span>AI Voice Automation</span>
                </div>
              </li>
              <li>
                <div className="flex gap-x-3">
                  <MdElectricBolt className="text-[#19719D] text-2xl" />

                  <span>Zero Setup Fees</span>
                </div>
              </li>
              <li>
                <div className="flex gap-x-3 ">
                  <IoAnalyticsOutline className="text-[#19719D] text-2xl" />
                  <span>Scales With Your Traffic</span>
                </div>
              </li>
            </ul>
            <button className="py-4 px-12 rounded-md bg-white text-black w-fit">
              Contact Us
            </button>
          </div>
          <div className="md:w-1/2 w-full text-white ">
            <img src={img} alt="Pricing" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
