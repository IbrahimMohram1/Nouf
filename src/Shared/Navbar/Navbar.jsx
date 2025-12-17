import React from "react";
import logo from "../../assets/images/logo.png";
export default function Navbar() {
  return (
    <>
      <nav className=" w-3/4 mx-auto z-20 top-0 start-0 border-b border-default">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <img className="w-3/4" src={logo} alt="Logo" srcset="" />
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-normal flex flex-col p-4 md:p-0   md:flex-row md:space-x-8 text-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading custom-gradient-header rounded-2xl  "
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-heading  ">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-heading  ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-heading  ">
                  Platforms
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-heading  ">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
