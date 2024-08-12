import React from "react";
import "../../index.css";

import { SiLaragon, SiMysql, SiXampp } from "react-icons/si";
import { IoLogoLaravel } from "react-icons/io5";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";

export const Project = () => {
  return (
    <div className="bg-black font-poppins text-white ">
      {/* My Project */}
      <div className="pt-10">
        <div className="font-semibold text-3xl">
          <h1>Featured Project</h1>
        </div>

        <div className="flex gap-10">
          <div className="pt-8">
          <div className="bg-Lblack  w-80 max-w-2xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-3xl shadow-lg flex flex-col sm:flex-row gap-5 select-none items-center ">
              <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-Pblack border-2 border-Slavender bg-center bg-cover"></div>
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
            </div>
            <div className="bg-Lblack  w-80 max-w-2xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-3xl shadow-lg flex flex-col sm:flex-row gap-5 select-none items-center ">
              <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-Pblack border-2 border-Slavender bg-center bg-cover"></div>
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
            </div>
          </div>

          <div className="pt-8">
          <div className="bg-Lblack  w-80 max-w-2xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-3xl shadow-lg flex flex-col sm:flex-row gap-5 select-none items-center">
              <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-Pblack border-2 border-Slavender bg-center bg-cover"></div>
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
            </div>
            <div className="bg-Lblack  w-80 max-w-2xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-3xl shadow-lg flex flex-col sm:flex-row gap-5 select-none items-center">
              <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-Pblack border-2 border-Slavender bg-center bg-cover"></div>
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
            </div>
          </div>
        </div>
      </div>

      {/* My Tools */}
      <div>
        <section className="bg-black text-white py-8">
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
            </div>

            <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
              <SiXampp className="mx-4 inline h-16 text-9xl" />
              <SiLaragon className="mx-4 inline h-16 text-9xl" />
              <IoLogoLaravel className="mx-4 inline h-16 text-9xl" />
              <FaReact className="mx-4 inline h-16 text-9xl" />
              <FaNodeJs className="mx-4 inline h-16 text-9xl" />
              <SiMysql className="mx-4 inline h-16 text-9xl" />
              <RiTailwindCssLine className="mx-4 inline h-16 text-9xl" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
