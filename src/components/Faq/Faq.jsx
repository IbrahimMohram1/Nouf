import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa";
import { IoChevronUp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Faq() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const Istoggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const items = t("faq.items", { returnObjects: true });

  return (
    <>
      <div className="w-3/4 mx-auto my-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#19719D] to-[#092837] bg-clip-text text-transparent">
          {t("faq.title")}
        </h2>
        <div>
          <div className="rounded-base  overflow-hidden shadow-xs my-12 text-white custom-gradient-header">
            {items.map((item, index) => (
              <div key={index} className="my-6">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-body  hover:text-heading hover:bg-neutral-secondary-medium gap-3"
                  onClick={() => Istoggle(index)}
                >
                  <MdKeyboardArrowDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 text-[#19719D] text-3xl ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`flex-1 text-left text-xl font-semibold ${
                      openIndex === index ? "text-[#19719D]" : "text-white"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="p-4 md:p-5">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
