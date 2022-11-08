import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { MdLocalAirport } from "react-icons/md";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="w-full h-[40vh] bg-gray-300 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          className="object-cover w-full h-full"
          src="https://wallpapercave.com/wp/wp2459791.jpg"
          alt=""
        />
      </div>
      <div className="relative justify-center w-full h-full items-center hidden sm:flex">
        <div className="w-48 h-48 m-10 opacity-75 bg-white rounded-full">
          <div className="flex flex-col justify-center w-full h-full items-center text-[#173518]">
            <IoIosBed className="w-10 h-10" />
            <p className="text-4xl font-bold font-serif">4</p>
            <div className="text-[#173518] flex flex-col items-center justify-center">
              <p className="text-sm font-bold font-serif">Rummelige</p>
              <p className="text-sm font-bold font-serif">Soveværelser</p>
            </div>
          </div>
        </div>
        <div className="w-48 h-48 m-10 opacity-75 bg-white rounded-full">
          <div className="flex flex-col justify-center w-full h-full items-center text-[#173518]">
            <BsFillHouseFill className="w-10 h-10" />
            <p className="text-4xl font-bold font-serif">1</p>
            <div className="text-[#173518] flex flex-col items-center justify-center">
              <p className="text-sm font-bold font-serif">Renoveret</p>
              <p className="text-sm font-bold font-serif">Villa</p>
            </div>
          </div>
        </div>
        <div className="w-48 h-48 m-10 opacity-75 bg-white rounded-full">
          <div className="flex flex-col justify-center w-full h-full items-center text-[#173518]">
            <MdLocalAirport className="w-10 h-10" />
            <p className="text-4xl font-bold font-serif">12</p>
            <div className="text-[#173518] flex flex-col items-center justify-center">
              <p className="text-sm font-bold font-serif">Minutter</p>
              <p className="text-sm font-bold font-serif">fra Lufthavnen</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative justify-center w-full h-full items-center sm:hidden">
        <div className="flex justify-center h-full pt-10">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="tracking-tighter text-white">
              <span className="font-montserrat font-light text-4xl">
                <Typewriter
                  options={{
                    strings: ["Autentisk", "Moderne", "Delbart", "Hjemmeligt"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              <span className="font-serif italic font-normal text-5xl">
                Afrikansk luksus
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
