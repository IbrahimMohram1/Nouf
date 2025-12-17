import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUnlockAlt } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuBrain } from "react-icons/lu";
import { SiGoogleanalytics } from "react-icons/si";

export default function Feature() {
  let data = [
    {
      id: 1,
      icon: <FaCodeFork />,
      title: "Plug-and-Play API",
      span: "Integrate Nouf  ",
      desc: " in minutes, no complex setup. Works seamlessly with web and mobile apps instantly.",
    },
    {
      id: 2,
      icon: <IoIosPeople />,
      title: "Accurate Speech Recognition",
      span: "Understands",
      desc: " Arabic & English clearly for every customer",
    },
    {
      id: 3,
      icon: <LuBrain />,
      title: "Intent-Based AI",
      span: "Recognizes",
      desc: " what users mean, not just the words they say",
    },
    {
      id: 4,
      icon: <FaUnlockAlt />,
      title: "Enterprise-Grade Security",
      span: "Protects",
      desc: " user data with full encryption and compliance",
    },
    {
      id: 5,
      icon: <AiOutlineGlobal />,
      title: "Easy Customization",
      span: "Integrate Nouf",
      desc: " in minutes, no complex setup. Works seamlessly with web and mobile apps instantly.",
    },
    {
      id: 6,
      icon: <SiGoogleanalytics />,
      title: "Scalable & Reliable",
      span: "Track",
      desc: " interactions, engagement, and conversions easily",
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-5xl font-semibold text-blue-500 text-center my-12">
          Features & Tech
        </h1>
        <div className="w-3/4 mx-auto my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {data.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-lg shadow-md custom-gradient-header "
              >
                <div className="flex flex-col items-center justify-center text-center ">
                  <div className="text-blue-500 text-4xl my-3">{item.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-400 ">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-700 mt-2">
                  <span className="text-white"> {item.span}</span>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
