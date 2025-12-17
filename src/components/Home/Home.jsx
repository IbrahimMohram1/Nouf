import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import img from "../../assets/images/iPhone.png";
export default function Home() {
  return (
    <>
      <div className="w-3/4 mx-auto text-center h-screen ">
        <div className="flex flex-col justify-center items-center  h-full text-white">
          <span className="  rounded-full text-gray-400 p-3 custom-gradient-header">
            Voice-First, Business-Ready
          </span>
          <h1 className="md:text-5xl text-3xl text-wrap font-bold mt-6 md:w-3/4 md">
            Deliver instant AI-powered voice experiences to your customers
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl">
            Nouf is an AI Voice Agent that lets your users order, ask, or
            interact with your service using natural conversation — fully
            integrated with your platform in minutes.
          </p>
          <button className="mt-6 flex justify-center items-center bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Get Started
            <MdKeyboardArrowRight className="text-xl" />
          </button>
          <div className="w-full mt-5">
            <div className="text-center mx-auto overflow-hidden mt-6 background-overlay ">
              <img src={img} className="w-2/12 m-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
