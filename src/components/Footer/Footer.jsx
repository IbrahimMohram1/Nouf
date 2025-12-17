import React from "react";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img from "../../assets/images/logo.png";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="w-3/4 mx-auto">
        <div className="flex justify-center items-center">
          <img src={img} className="w-16" />
          <div className=" border-b border-gray-300 w-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-gray-300">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Nouf</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Company Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Webinars & Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support & Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <FaInstagram className="text-lg" />
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaFacebookSquare className="text-lg" />
                <a href="#" className="hover:text-white transition">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaXTwitter className="text-lg" />
                <a href="#" className="hover:text-white transition">
                  Twitter / X
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-lg" />
                <a href="#" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
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
