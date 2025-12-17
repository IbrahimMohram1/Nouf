import { BsFillUnlockFill } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuPackage } from "react-icons/lu";
import { useTranslation } from "react-i18next";
const savedLng = localStorage.getItem("language") || "en";

export default function HowWork() {
  const { t } = useTranslation();
  const data = [
    {
      icon: <CiMicrophoneOn />,
      title: t("how.steps.0.title"),
      description: t("how.steps.0.description"),
    },
    {
      icon: <FaRegMessage />,
      title: t("how.steps.1.title"),
      description: t("how.steps.1.description"),
    },
    {
      icon: <FaRegLightbulb />,
      title: t("how.steps.2.title"),
      description: t("how.steps.2.description"),
    },
    {
      icon: <BsFillUnlockFill />,
      title: t("how.steps.3.title"),
      description: t("how.steps.3.description"),
    },
    {
      icon: <IoIosHelpCircleOutline />,
      title: t("how.steps.4.title"),
      description: t("how.steps.4.description"),
    },
    {
      icon: <LuPackage />,
      title: t("how.steps.5.title"),
      description: t("how.steps.5.description"),
    },
  ];

  return (
    <div className="min-h-screen text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gradient">
            {t("how.title")}
          </h1>
        </div>

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#19719D]"></div>

          {/* data */}
          <div className="space-y-16">
            {data.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="">
                  <div className="flex items-start">
                    {isEven ? (
                      <>
                        {/* Icon  of Left Side */}
                        <div className="w-1/2 pr-8 flex justify-center ">
                          <div className="icon-gradient text-3xl">
                            {item.icon}
                          </div>
                        </div>

                        {/* Content Card on Right */}
                        <div
                          className={`w-1/2 ${
                            savedLng === "ar" ? "ps-8" : "pl-8"
                          }`}
                        >
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Content Card on Left */}
                        <div
                          className={`w-1/2 ${
                            savedLng === "ar" ? "pe-8" : "pl-8"
                          }`}
                        >
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm ">{item.description}</p>
                        </div>

                        {/* Icon  of Right Side */}
                        <div
                          className={`w-1/2 ${
                            savedLng === "ar" ? "ps-8" : "pl-8"
                          }`}
                        >
                          <div>
                            <div className=" icon-gradient text-3xl">
                              {item.icon}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
