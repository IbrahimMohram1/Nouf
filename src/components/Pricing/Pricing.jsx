import React from "react";
import { useTranslation } from "react-i18next";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdElectricBolt, MdKeyboardVoice } from "react-icons/md";
import img from "../../assets/images/pircing.png";
export default function Pricing() {
  const { t } = useTranslation();
  return (
    <>
      <div id="testimonials" className="w-3/4 mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#19719D] to-[#092837] bg-clip-text text-transparent">
          {t("pricing.title")}
        </h2>{" "}
        <div className="flex items-center md:justify-between justify-center flex-wrap md:flex-nowrap gap-x-5 my-16">
          <div className="md:w-1/2 w-full text-white flex gap-y-8 flex-col">
            <h2 className="md:text-5xl text-3xl font-semibold">
              {t("pricing.heading")}
            </h2>
            <p className=" text-gray-400 text-wrap w-3/4">
              {t("pricing.description")}
            </p>
            <p className="text-[#19719D] text-2xl">
              <span className="text-3xl font-semibold ">
                {t("pricing.price")}{" "}
              </span>{" "}
              {t("pricing.perCall")}
            </p>
            <p className="text-gray-400">{t("pricing.upto")}</p>
            <ul>
              {t("pricing.bullets", { returnObjects: true }).map((b, i) => (
                <li key={i}>
                  <div className="flex  gap-x-3">
                    {/* icon placeholder */}
                    <span className="text-[#19719D] text-2xl">•</span>
                    <span>{b}</span>
                  </div>
                </li>
              ))}
            </ul>
            <button className="py-4 px-12 rounded-md bg-white text-black w-fit">
              {t("pricing.button")}
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
