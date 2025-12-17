import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUnlockAlt } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuBrain } from "react-icons/lu";
import { SiGoogleanalytics } from "react-icons/si";

export default function Feature() {
  const { t } = useTranslation();
  const items = t("features.items", { returnObjects: true });
  return (
    <>
      <div>
        <h1 className="text-5xl font-semibold text-primary-gradient text-center my-12">
          {t("features.title")}
        </h1>
        <div className="w-3/4 mx-auto my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg shadow-md custom-gradient-header "
              >
                <div className="flex flex-col items-center justify-center text-center ">
                  <div className="text-[#136d8b] opacity-75 text-4xl my-3">
                    {item.icon}
                  </div>
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
