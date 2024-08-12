import React from "react";

import "../../index.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
import { SlSocialGithub } from "react-icons/sl";

export const Lower = () => {
  return (
    <div className="p-8 px-12 bg-black text-white font-poppins">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold glow-text-white">Let's Keep in Touch!</h1>
          <h1 className="text-l text-gray-400 mt-2">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis error illo earum id quas iure quos dicta amet aut doloribus?
          </h1>

          <div className=" flex items-center mt-8 gap-20">
            <div>
              <div className="flex items-center justify-between space-x-8 ">
                <span className="text-xl">
                  <FaPhone />
                </span>
                <span>
                  <div className=" text-gray-400">Phone</div>
                  <div>+62-8522-9996-2824</div>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-8 ">
              <span className="text-xl">
                <IoMailUnreadSharp />
              </span>
              <span>
                <div className=" text-gray-400">Email</div>
                <div>kenzatekkom20@gmail.com</div>
              </span>
            </div>
          </div>


        
        </div>
        <div className="flex justify-between pr-36 gap-24">
          <div className="font-semibold text-sm text-left">
            <div className="text-lg">
              <span className="text-white glow-text-white">My</span>
              <span className="text-purple-700 glow-text-purple">
                Portofolio
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <div><button>Home</button></div>
              <div><button>Home</button></div>
              <div><button>Home</button></div>
              <div><button>Home</button></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" flex justify-end items-center space-x-6 mt-16 pr-10">
          <div className="text-white font-poppins font-semibold">
            Find Me On
          </div>
          <div className="rounded-full bg-purple-950 flex items-center justify-center w-10 h-10">
            <SlSocialGithub className="text-white text-2xl" />
          </div>

          <div className="rounded-full  bg-purple-950 flex items-center justify-center w-10 h-10">
          <FaFacebook className="text-white text-2xl" />
          </div>

          <div className="rounded-full bg-purple-950 flex items-center justify-center w-10 h-10">
          <FaInstagram  className="text-white text-2xl"/>
          </div>

          <div className="rounded-full bg-purple-950 flex items-center justify-center w-10 h-10">
          <FaLinkedin className="text-white text-2xl" />
          </div>
          
        </div>
      </div>

      <div>
        <div className="border-2 border-gray-400 my-4"></div>
      </div>

      <div>
        <div className="text-center text-gray-400">2024 All Right Reserved</div>
      </div>



    </div>
  );
};

export default Lower;
