import React from "react";
import "../../index.css";

export const Upper = () => {
  return (
    <div className="p-8 px-12 font-poppins font-semibold  bg-black ">
      <div className="flex justify-between items-center ">
        <div>
          <span className="text-white text-xl">My</span>
          <span className="text-purple-700 text-xl">Portofolio</span>
        </div>
        <div className="flex space-x-8 p-2  items-center justify-end">
          <button className="text-white">Home</button>
          <button className="text-white">Project</button>
          <button className="text-white">About Me</button>
          <button className="text-purple-700 border py-2 px-5 rounded-md border-purple-700">
            Hire Me
          </button>
        </div>
      </div>
      <div>
        <div className="border-2 border-gray-400 my-4"></div>
      </div>
    </div>
  );
};

export default Upper;
