import React from "react";
import "../../index.css";

import Teamwork from "../image/—Pngtree—purple teamwork character illustration_6429884.png";

export const Hire = () => {
  return (
    <div className="bg-black text-white font-poppins">
      <div className="mx-auto">
        <div className="font-semibold text-2xl lg:text-3xl">
          <div>Got a project in mind?</div>
          <div className="text-Plavender">
            Share it, and let's collaborate together!
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 items-center">
          {/* Kolom Pertama */}
          <div className="lg:w-1/2 space-y-4">
            <div>
              <img
                src={Teamwork}
                alt="Teamwork"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>

          {/* Kolom Kedua */}
          <div className="lg:w-1/2 w-full bg-Kblack p-6 rounded-lg">
            <div className="text-center text-2xl font-bold">
              Collaborate Form
            </div>
            <div className="space-y-6">
              <div className="mt-4">
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-Lblack bg-Fblack rounded-lg focus:ring focus:ring-Slavender focus:border-Llavender"
                  placeholder="Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-Lblack bg-Fblack rounded-lg focus:ring focus:ring-Slavender focus:border-Llavender"
                  placeholder="Email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white font-semibold mb-2"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-Lblack bg-Fblack rounded-lg focus:ring focus:ring-Slavender focus:border-Llavender"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2"
                >
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-Lblack bg-Fblack rounded-lg focus:ring focus:ring-Slavender focus:border-Llavender"
                  placeholder="Enter your message"
                  rows="8"
                ></textarea>
              </div>

              <div className="text-center">
                <button className="bg-purple-700 text-white border border-purple-700 py-2 px-5 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
