import React from "react";

import "../../index.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
import { SlSocialGithub } from "react-icons/sl";

export const Lower = () => {
  return (
    <div className="p-8 px-4 md:px-12 bg-black text-white font-poppins">
      <div className="flex flex-col md:flex-row justify-between 2xl:items-center gap-2 md:gap-4">
        <div className="flex-1 mb-8 md:mb-0 md:mr-2">
          <h1 className="text-2xl md:text-3xl font-semibold glow-text-white">
            Let's Keep in Touch!
          </h1>
          <h1 className="text-sm md:text-lg text-gray-400 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            error illo earum id quas iure quos dicta amet aut doloribus?
          </h1>

          <div className="flex flex-col md:flex-row 2xl:items-center mt-8 gap-8 md:gap-20">
            <div className="flex items-center space-x-4 md:space-x-8">
              <span className="text-xl">
                <FaPhone />
              </span>
              <span>
                <div className="text-gray-400">Phone</div>
                <div>+62-8522-9996-2824</div>
              </span>
            </div>
            <div className="flex items-center space-x-4 md:space-x-8">
              <span className="text-xl">
                <IoMailUnreadSharp />
              </span>
              <span>
                <div className="text-gray-400">Email</div>
                <div>kenzatekkom20@gmail.com</div>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:pr-28 gap-8 md:gap-24">
          <div className="font-semibold text-sm text-left">
            <div className="text-lg">
              <span className="text-white glow-text-white">My</span>
              <span className="text-purple-700 glow-text-purple">
                Portofolio
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <button className="text-white">Home</button>
              </div>
              <div>
                <button className="text-white">Project</button>
              </div>
              <div>
                <button className="text-white">About Me</button>
              </div>
              <div>
                <button className="text-white">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end items-center space-x-8 md:space-x-6 mt-16">
        <div className="text-white font-poppins font-semibold">Find Me On</div>
        <div className="rounded-full bg-purple-950 flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
          <SlSocialGithub className="text-white text-xl md:text-2xl" />
        </div>
        <div className="rounded-full bg-purple-950 flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
          <FaFacebook className="text-white text-xl md:text-2xl" />
        </div>
        <div className="rounded-full bg-purple-950 flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
          <FaInstagram className="text-white text-xl md:text-2xl" />
        </div>
        <div className="rounded-full bg-purple-950 flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
          <FaLinkedin className="text-white text-xl md:text-2xl" />
        </div>
      </div>

      <div className="border-2 border-gray-400 my-4"></div>

      <div className="text-center text-gray-400">2024 All Right Reserved</div>
    </div>
  );
};

export default Lower;
