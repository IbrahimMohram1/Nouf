import { BsFillUnlockFill } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuPackage } from "react-icons/lu";

export default function HowWork() {
  const data = [
    {
      icon: <CiMicrophoneOn />,
      title: "Press the Mic",
      description:
        "Simply tap the microphone button to start your voice search instantly",
    },
    {
      icon: <FaRegMessage />,
      title: "Say What You're Looking For",
      description:
        "Speak naturally – whether it's a product name, category, or description. Your voice understands",
    },
    {
      icon: <FaRegLightbulb />,
      title: "Nouf Understands",
      description: "Smart voice understanding your request",
    },
    {
      icon: <BsFillUnlockFill />,
      title: "Get Smart Suggestions",
      description: "Get AI-personalized suggestions",
    },
    {
      icon: <IoIosHelpCircleOutline />,
      title: "Refine with Simple Questions",
      description:
        "Answer a few quick questions if you want to specify more, clear, or rating",
    },
    {
      icon: <LuPackage />,
      title: "Choose & Buy",
      description:
        "Select the best product and add to it's your cart effortlessly",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
            How it Works..?
          </h1>
        </div>

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500"></div>

          {/* data */}
          <div className="space-y-16">
            {data.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="">
                  <div className="flex items-start">
                    {isEven ? (
                      <>
                        {/* Icon  of Left Side */}
                        <div className="w-1/2 pr-8 flex justify-end">
                          <div className="text-blue-500 text-3xl">
                            {item.icon}
                          </div>
                        </div>

                        {/* Content Card on Right */}
                        <div className="w-1/2 pl-8">
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
                        <div className="w-1/2 pr-8">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            {item.description}
                          </p>
                        </div>

                        {/* Icon  of Right Side */}
                        <div className="w-1/2 pl-8 flex justify-start">
                          <div className="text-blue-500 text-3xl">
                            {item.icon}
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
