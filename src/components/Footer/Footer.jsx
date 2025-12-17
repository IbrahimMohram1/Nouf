import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img from "../../assets/images/logo.png";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="w-3/4 mx-auto">
        <div className="flex justify-center items-center">
          <img src={img} className="w-16" />
          <div className=" border-b border-gray-300 w-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-gray-300">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.about")}</h3>
            <ul className="space-y-2 text-gray-400">
              {t("footer.aboutLinks", { returnObjects: true }).map((l, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              {t("footer.resourcesLinks", { returnObjects: true }).map(
                (l, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.support")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              {t("footer.supportLinks", { returnObjects: true }).map((l, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.connect")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              {t("footer.connectLinks", { returnObjects: true }).map((l, i) => (
                <li key={i} className="flex items-center gap-2">
                  {/* icons are static in markup */}
                  <span className="text-lg">•</span>
                  <a href="#" className="hover:text-white transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>©2026 Nouf • All rights reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Term of use
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy policy
            </a>
            <a href="#" className="hover:text-white transition">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
