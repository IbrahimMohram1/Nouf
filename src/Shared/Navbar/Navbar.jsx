import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <nav className=" w-3/4 mx-auto z-20  ">
        <div className=" flex flex-wrap items-center justify-between  p-4">
          <div>
            <img className="w-3/4" src={logo} alt="Logo" />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex text-white items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            {" "}
            <ul className="font-normal flex flex-col justify-center items-center p-4 md:p-0  md:flex-row md:space-x-8 text-white ">
              <li>
                <a
                  onClick={() => setIsOpen(false)}
                  href="#home"
                  className="block py-2 px-3 text-heading custom-gradient-header rounded-2xl  "
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsOpen(false)}
                  href="#features"
                  className="block py-2 px-3 text-heading  "
                >
                  {t("nav.features")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsOpen(false)}
                  href="#about"
                  className="block py-2 px-3 text-heading  "
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsOpen(false)}
                  href="#platforms"
                  className="block py-2 px-3 text-heading  "
                >
                  {t("nav.platforms")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsOpen(false)}
                  href="#testimonials"
                  className="block py-2 px-3 text-heading  "
                >
                  {t("nav.testimonials")}
                </a>
              </li>
              <li className="pt-1">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
