import React from "react";
import Slider from "./Slider";

function Gallery() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <Slider />
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <p className="text-center text-2xl font-bold text-white md:hidden font-montserrat">
              Læg telefonen ned vandret for at se billederne bedst 😁
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
