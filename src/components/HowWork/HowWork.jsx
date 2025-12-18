import { BsFillUnlockFill } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuPackage } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
    <div id="about" className="min-h-screen text-white py-20 px-4">
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
                        <motion.div
                          className="w-1/2 pr-8 flex justify-center "
                          initial={{ opacity: 0, y: 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }} // يشتغل مرة واحدة
                          transition={{ duration: 0.6 }}
                        >
                          <div>
                            <div className="icon-gradient text-3xl">
                              {item.icon}
                            </div>
                          </div>
                        </motion.div>

                        {/* Content Card on Right */}
                        <motion.div
                          className={`w-1/2 ${
                            savedLng === "ar" ? "pr-12" : "pl-12"
                          }`}
                          initial={{ opacity: 0, y: 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }} // يشتغل مرة واحدة
                          transition={{ duration: 0.6 }}
                        >
                          <div>
                            <p className="bg-[#19719d] text-black my-2  text-center flex items-center justify-center  w-8 h-8 rounded-full">
                              {index + 1}
                            </p>
                            <h3 className="text-xl font-bold text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-slate-400 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      </>
                    ) : (
                      <>
                        {/* Content Card on Left */}
                        <motion.div
                          className={`w-1/2 ${
                            savedLng === "ar" ? "pe-12" : "pl-12"
                          }`}
                          initial={{ opacity: 0, y: 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }} // يشتغل مرة واحدة
                          transition={{ duration: 0.6 }}
                        >
                          <p className="bg-[#19719d] text-black my-2  text-center flex items-center justify-center  w-8 h-8 rounded-full">
                            {index + 1}
                          </p>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm ">{item.description}</p>
                        </motion.div>
                        {/* Icon  of Right Side */}
                        <motion.div
                          className={`w-1/2 ${
                            savedLng === "ar" ? "ps-6" : "pl-8"
                          }`}
                        >
                          <div className="flex justify-center">
                            <div className=" icon-gradient text-3xl">
                              {item.icon}
                            </div>
                          </div>
                        </motion.div>
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
