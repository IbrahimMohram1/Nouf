import React from "react";
import { useTranslation } from "react-i18next";
import { SiSpeedypage } from "react-icons/si";
import img from "../../assets/images/LogoSub.png";
import img1 from "../../assets/images/LogoSub2.png";
import img2 from "../../assets/images/LogoSub3.png";
import img3 from "../../assets/images/LogoSub4.png";
import img4 from "../../assets/images/LogoSub5.png";
import img5 from "../../assets/images/LogoSub6.png";

export default function SubHeader() {
  const { t } = useTranslation();
  let data = [
    { id: 1, image: img },
    { id: 3, image: img2 },
    { id: 2, image: img1 },
    { id: 4, image: img3 },
    { id: 5, image: img4 },
    { id: 6, image: img5 },
  ];
  return (
    <>
      <div className="my-8">
        <p className="text-gray-400 text-center mt-12">
          {t("subheader.customers")}
        </p>
        {/* logos */}
        <div className="w-1/2 mx-auto">
          <div className="flex justify-center items-center mt-6  gap-x-8 gap-y-4  flex-wrap text-white">
            {data.map((item) => (
              <div key={item.id} className="flex justify-center  items-center ">
                <div className="">
                  <img className="w-36" src={item.image} alt="" srcset="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
