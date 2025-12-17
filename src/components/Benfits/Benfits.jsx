import React from "react";
import img from "../../assets/images/logoText.png";
import { IoAnalytics } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import { CiFaceSmile, CiPlug1 } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Benfits() {
  let data = [
    {
      id: 1,
      icon: <IoAnalytics />,
      title: " Conversion Rates",
      span: "Higher ",
      desc: "When customers find products faster through voice, they complete purchases more often — boosting your overall sales.",
    },
    {
      id: 2,
      icon: <MdElectricBolt />,
      title: " Product Discovery",
      span: "Faster",
      desc: "Nouf helps users reach the right product in seconds, reducing drop-offs caused by long searches or complicated filters.",
    },
    {
      id: 3,
      icon: <CiFaceSmile />,
      title: " Integration",
      span: "Plug-Play ",
      desc: "Voice search makes shopping smoother, more intuitive, more accessible — especially for users who struggle with typing or don’t know product names.",
    },
    {
      id: 4,
      icon: <CiPlug1 />,
      title: " Conversion Rates",
      span: "Higher",
      desc: "Add Nouf to your store with a simple script. No technical setup, no development time — just plug it in and start using it.e",
    },
    {
      id: 5,
      icon: <AiOutlineGlobal />,
      title: " Insights",
      span: "Smart",
      desc: "Gain valuable data about what users are asking for, popular voice queries, and customer intent — helping you improve products and increase store efficiency.",
    },
  ];
  return (
    <>
      <div className="w-3/4 mx-auto my-16">
        <div className="flex justify-start items-center">
          <img className="w-32" src={img} />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#19719D] to-[#092837] bg-clip-text text-transparent">
            Benefits
          </h2>{" "}
        </div>
        <div className="flex flex-wrap justify-center gap-6  my-12 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 custom-gradient-header   border-gray-300 rounded-lg shadow-md w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="flex flex-col items-start justify-end  ">
                <div className="text-[#19719D] text-4xl my-3">{item.icon}</div>
                <h2 className="text-xl font-semibold text-gray-400 ">
                  <span className="text-white"> {item.span}</span>
                  {item.title}
                </h2>
              </div>
              <p className="text-gray-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
