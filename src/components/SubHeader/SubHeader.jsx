import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/images/Vector.png";
import { SiSpeedypage } from "react-icons/si";
export default function SubHeader() {
  const { t } = useTranslation();
  let data = [
    { id: 1, title: t("subheader.logo"), image: <SiSpeedypage /> },
    { id: 2, title: t("subheader.logo"), image: <SiSpeedypage /> },
    { id: 3, title: t("subheader.logo"), image: <SiSpeedypage /> },
    { id: 4, title: t("subheader.logo"), image: <SiSpeedypage /> },
    { id: 5, title: t("subheader.logo"), image: <SiSpeedypage /> },
  ];
  return (
    <>
      <div className="my-8">
        <p className="text-gray-400 text-center mt-12">
          {t("subheader.customers")}
        </p>
        {/* logos */}
        <div className="w-1/2 mx-auto">
          <div className="flex justify-center items-center mt-6 gap-x-16 gap-y-4  flex-wrap text-white">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center gap-x-2 text-xl"
              >
                <div className="text-black bg-gray-400 p-3 rounded-full">
                  {item.image}
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
