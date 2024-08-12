import React, { useEffect, useRef } from "react";
import "../../index.css";
import Project from "./project";
import Hire from "./hire";
import About from "./about";

export const Main = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const words = ["Backend Developer", "UI/UX Designer"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
      if (typewriterRef.current) {
        currentWord = words[i];
        if (isDeleting) {
          typewriterRef.current.textContent = currentWord.substring(0, j - 1);
          j--;
          if (j === 0) {
            isDeleting = false;
            i++;
            if (i === words.length) {
              i = 0;
            }
          }
        } else {
          typewriterRef.current.textContent = currentWord.substring(0, j + 1);
          j++;
          if (j === currentWord.length) {
            isDeleting = true;
          }
        }
        setTimeout(type, 150);
      }
    }

    type();
  }, []);

  return (
    <div className="2xl:p-8 items-center p-4 2xl:px-12 md:px-12 bg-black text-white font-poppins">
      <div className="flex items-center flex-col-reverse lg:flex-row gap-24 min-h-screen">
        <div>
          <div className="text-4xl space-x-2 font-bold">
            <span>Hello</span>
            <span className="text-purple-700">Dear</span>
          </div>

          <div className="text-4xl space-x-2 font-bold pt-5">
            <span>I</span>
            <span>am</span>
            <span className="text-purple-700">Kea</span>
            <span className="text-purple-700">Vianda</span>
          </div>

          <div
            ref={typewriterRef}
            className="text-xl text-gray-400 font-semibold pt-5"
          />

          <div className="pt-16 max-w-3xl">
            <div className="w-full h-px max-w-6xl mx-auto py-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <div className=" pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, sint? Expedita sapiente voluptatibus voluptatum sunt
              accusamus quasi eligendi sed ratione tempora libero, illum tempore
              sit repudiandae doloremque consectetur officiis earum suscipit.
              Quibusdam, repudiandae sapiente velit nam et quasi voluptates
              repellat.
            </div>

            <div className="pt-10 flex flex-col gap-4 md:flex-row md:gap-8">
              <div className="w-full md:w-auto">
                <button class="relative inline-block font-medium group py-1.5 px-2.5 ">
                  <span class="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-F2black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full bg-Plavender border border-Slavender group-hover:bg-Pblack"></span>
                  <span class="relative text-white ">Donwload CV</span>
                </button>
              </div>
              <div className="w-full md:w-auto">
              <div className="w-full md:w-auto">
                <button class="relative inline-block font-medium group py-1.5 px-2.5 ">
                  <span class="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full bg-Pblack border border-Slavender group-hover:bg-Plavender"></span>
                  <span class="relative text-white ">Donwload CV</span>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-1/2 min-h-64">
          <img
            src="https://images.pexels.com/photos/18495/pexels-photo.jpg?cs=srgb&dl=pexels-omaralnahi-18495.jpg&fm=jpg"
            alt=""
          />
        </div>
      </div>

      <Project />
      <About/>
      <Hire />
    </div>
  );
};

export default Main;
