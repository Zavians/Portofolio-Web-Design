import React from "react";
import "../../index.css";

export const Upper = () => {
  return (
    <div className="fixed w-full z-10 pt-4 pb-2 px-4 md:px-12 font-poppins font-semibold bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-white text-xl">My</span>
          <span className="text-purple-700 text-xl">Portofolio</span>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-2 items-center justify-end">
          <button className="text-white">Home</button>
          
          <button className="text-white">Project</button>
          <button className="text-white">About Me</button>
          <button class="relative inline-block font-medium group py-1.5 px-2.5 ">
            <span class="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-Pblack border border-Slavender group-hover:bg-Plavender"></span>
            <span class="relative text-white ">Hire Me</span>
          </button>
        </div>
      </div>
      <div>
        <div className="border-2 bg-green-600 border-gray-400 my-2"></div>
      </div>
    </div>
  );
};

export default Upper;
