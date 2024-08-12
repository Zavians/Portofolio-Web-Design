import React, { useEffect, useRef } from "react";
import "../../index.css";
import Project from "./project";

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
    <div className="p-8 px-12 bg-black text-white font-poppins ">
      <div className="flex gap-60 items-center">
        <div>
          <div className="text-4xl space-x-2 font-bold">
            <span>Hello</span>
            <span className="text-purple-700">Dear</span>
          </div>

          <div className="text-4xl space-x-2 font-bold pt-5">
            <span>I</span>
            <span>am</span>
            <span className="text-purple-700">Kenza</span>
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

            <div className="pt-10 space-x-8">
              <span>
                <button className="text-white bg-purple-700 border py-2 px-5 rounded-md border-purple-700">
                  Donwload CV
                </button>
              </span>
              <span>
                <button className="text-purple-700 bg-black py-2 px-5 rounded-md border-purple-700 border-2">
                  Donwload CV
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-s bg-green-50">
          <img
            src="https://i.pinimg.com/736x/ce/6b/9f/ce6b9fc92c7983e31f4d55c5655bcab1.jpg"
            alt=""
          />
        </div>
      </div>

      <Project />
    </div>
  );
};

export default Main;
