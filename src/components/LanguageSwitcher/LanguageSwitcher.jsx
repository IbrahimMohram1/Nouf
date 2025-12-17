import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Show only the button for the opposite language
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleChange(isArabic ? "en" : "ar")}
        className="px-3 py-1 rounded bg-white text-black font-semibold hover:bg-gray-200 transition"
      >
        {isArabic ? "EN" : "AR"}
      </button>
    </div>
  );
}
