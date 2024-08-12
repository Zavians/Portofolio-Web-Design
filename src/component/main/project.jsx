import React from "react";
import "../../index.css";

import { SiCodeigniter, SiLaragon, SiMysql, SiXampp } from "react-icons/si";
import { IoLogoLaravel } from "react-icons/io5";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

export const Project = () => {
  return (
    <div className="bg-black font-poppins  min-h-screen  text-white ">
      {/* My Project */}
      <div className>
        <div className="font-semibold mt-4 text-3xl sm:my-8">
          <h1>Featured Project</h1>
        </div>
        <div className="bg-black mt-10">
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 2xl:flex-row 2xl:gap-20">
            <div className="bg-Kblack  w-full max-w-sm sm:max-w-2xl md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-3xl  flex flex-col sm:flex-row gap-4 select-none items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-Slavender ">
              <div className="flex sm:flex-1 flex-col gap-2 p-1">
                <h1 className="text-lg sm:text-xl font-semibold text-white">
                  This is the title for your card. This is really cool
                </h1>
                <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                  This is the description for your card. This is really really
                  long. This is used to describe the content of the card. I hope
                  you like the design...
                </p>
              </div>
              <div className="h-52 sm:h-48 md:h-full w-full sm:w-1/3 md:w-1/2 2xl:w-1/2 lg:w-1/2 xl:w-1/2 rounded-xl bg-Pblack border-2 border-Slavender">
                <img
                  src="https://i.pinimg.com/736x/69/1b/e4/691be40f520d7827f9adb23a3a034153.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="bg-Kblack  w-full max-w-sm sm:max-w-2xl md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-3xl  flex flex-col sm:flex-row gap-4 select-none items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-Slavender ">
              <div className="flex sm:flex-1 flex-col gap-2 p-1">
                <h1 className="text-lg sm:text-xl font-semibold text-white">
                  This is the title for your card. This is really cool
                </h1>
                <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                  This is the description for your card. This is really really
                  long. This is used to describe the content of the card. I hope
                  you like the design...
                </p>
              </div>
              <div className="h-52 sm:h-48 md:h-full w-full sm:w-1/3 md:w-1/2 2xl:w-1/2 lg:w-1/2 xl:w-1/2 rounded-xl bg-Pblack border-2 border-Slavender">
                <img
                  src="https://i.pinimg.com/736x/69/1b/e4/691be40f520d7827f9adb23a3a034153.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-4 gap-4 md:flex-row md:gap-8 sm:mt-4 2xl:flex-row 2xl:gap-20 2xl:mt-8">
            <div className="bg-Kblack  w-full max-w-sm sm:max-w-2xl md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-3xl  flex flex-col sm:flex-row gap-4 select-none items-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-Slavender ">
              <div className="flex sm:flex-1 flex-col gap-2 p-1">
                <h1 className="text-lg 2xl:text-xl font-semibold text-white">
                  This is the title for your card. This is really cool
                </h1>
                <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                  This is the description for your card. This is really really
                  long. This is used to describe the content of the card. I hope
                  you like the design...
                </p>
              </div>
              <div className="h-52 sm:h-48 md:h-full w-full sm:w-1/3 md:w-1/2 2xl:w-1/2 lg:w-1/2 xl:w-1/2 rounded-xl bg-Pblack border-2 border-Slavender">
                <img
                  src="https://i.pinimg.com/736x/69/1b/e4/691be40f520d7827f9adb23a3a034153.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>

      
            <div className="bg-Kblack w-full max-w-sm sm:max-w-2xl md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-3xl flex flex-col sm:flex-row gap-4 select-none items-center ransform  hover:bg-indigo-600 transition duration-500 hover:scale-105  justify-center ">
              <div className="flex sm:flex-1 flex-col gap-2 p-1 blur-lg">
                <h1 className="text-lg sm:text-xl font-semibold text-white">
                  This is the title for your card. This is really cool
                </h1>
                <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                  This is the description for your card. This is really really
                  long. This is used to describe the content of the card. I hope
                  you like the design...
                </p>
              </div>
              <div className="h-52 sm:h-48 md:h-full w-full sm:w-1/3 md:w-1/2 2xl:w-1/2 lg:w-1/2 xl:w-1/2 rounded-xl bg-Pblack border-2 border-Slavender blur-lg">
                <img
                  src="https://i.pinimg.com/736x/69/1b/e4/691be40f520d7827f9adb23a3a034153.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute flex items-center justify-center">
                
                <h2 className="text-white text-xl font-bold">Find more</h2>
              
              </div>
            </div>
          
          </div>
        </div>
      </div>

      {/* My Tools */}
      <div>
        <section className="bg-black text-white py-10">
          <h2 className="text-center text-2xl mb-2 font-bold leading-8">
            Tools
          </h2>
          <p className="text-center text-lg font-light leading-8 ">
            Tools Drive All My Projects
          </p>

          <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
              <SiXampp className="mx-4 inline h-16 text-9xl" />
              <SiLaragon className="mx-4 inline h-16 text-9xl" />
              <IoLogoLaravel className="mx-4 inline h-16 text-9xl" />
              <FaReact className="mx-4 inline h-16 text-9xl" />
              <FaNodeJs className="mx-4 inline h-16 text-9xl" />
              <SiMysql className="mx-4 inline h-16 text-9xl" />
              <RiTailwindCssLine className="mx-4 inline h-16 text-9xl" />
              <SiCodeigniter className="mx-4 inline h-16 text-9xl" />
              <FaGithub className="mx-4 inline h-16 text-9xl" />
              <VscVscode  className="mx-4 inline h-16 text-9xl" />
            </div>

            <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
              <SiXampp className="mx-4 inline h-16 text-9xl" />
              <SiLaragon className="mx-4 inline h-16 text-9xl" />
              <IoLogoLaravel className="mx-4 inline h-16 text-9xl" />
              <FaReact className="mx-4 inline h-16 text-9xl" />
              <FaNodeJs className="mx-4 inline h-16 text-9xl" />
              <SiMysql className="mx-4 inline h-16 text-9xl" />
              <RiTailwindCssLine className="mx-4 inline h-16 text-9xl" />
              <SiCodeigniter className="mx-4 inline h-16 text-9xl" />
              <FaGithub className="mx-4 inline h-16 text-9xl" />
              <VscVscode  className="mx-4 inline h-16 text-9xl" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
