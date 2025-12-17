import React from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight } from "react-icons/md";
import img from "../../assets/images/iPhone.png";
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-3/4 mx-auto text-center h-screen ">
        <div className="flex flex-col justify-center items-center  h-full text-white">
          <span className="  rounded-full text-gray-400 p-3 custom-gradient-header">
            {t("home.tagline")}
          </span>
          <h1 className="md:text-5xl text-3xl text-wrap font-bold mt-6 md:w-3/4 md">
            {t("home.title")}
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl">
            {t("home.description")}
          </p>
          <button className="mt-6 flex justify-center items-center bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            {t("home.button")}
            <MdKeyboardArrowRight className="text-xl" />
          </button>
          <div className="w-full mt-5">
            <div className="text-center mx-auto overflow-hidden mt-6 background-overlay ">
              <img src={img} className="w-2/12 m-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
