import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/images/logoText.png";
import { IoAnalytics } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import { CiFaceSmile, CiPlug1 } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Benfits() {
  const { t } = useTranslation();
  const data = t("benefits.items", { returnObjects: true });
  return (
    <>
      <div className="w-3/4 mx-auto my-16">
        <div className="flex justify-start items-center">
          <img className="w-32" src={img} />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#19719D] to-[#092837] bg-clip-text text-transparent">
            {t("benefits.title")}
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
