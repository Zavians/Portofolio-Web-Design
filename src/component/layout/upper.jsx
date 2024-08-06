import React from "react";
import "../../index.css";

export const Upper = () => {
  return (
    <div className="p-3 font-poppins font-semibold pl-10 bg-black">
      <div className="flex justify-between items-center ">
        <div>
          <span className="text-white text-xl">My</span>
          <span className="text-purple-700 text-xl">Portofolio</span>
        </div>
        <div className="flex space-x-8 p-2 mr-10 items-center">
          <div className="text-white">Home</div>
          <div className="text-white">About</div>
          <div className="text-white">Project</div>
          <div className="text-purple-700 border py-2 px-5 rounded-md border-purple-700">
            Project
          </div>
        </div>
      </div>
      <div>
        <div className="border-2 border-gray-400 my-4"></div>
      </div>
    </div>
  );
};

export default Upper;
