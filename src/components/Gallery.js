import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <main>
      <div className="bg-[#173518] navbar-bg">
        {/* navbar background image */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8"></div>
      </div>
      <div className="flex w-screen flex-col justify-center items-center pt-6 sm:pt-28">
        <div className="w-[70%] flex justify-between gap-10">
          <div className="flex-col w-[50%] hidden sm:flex">
            <h1 className="text-6xl font-bold text-[#173518] font-manrope">
              Billeder siger meget mere end tekst..
            </h1>
            <p className="text-2xl font-normal text-[#173518] pt-3 font-manrope">
              Vi har samlet nogle forskellige billeder af huset, som vi håber
              giver er med til at give et indtryk af, hvordan vores hus ser ud.
            </p>
            <p className="text-2xl font-normal text-[#173518] pt-3 font-manrope">
              Hvis der er nogle spørgsmål, skal du/I endelig ikke tøve med at
              kontakte os.
            </p>
            <div>
              <Link to="/kontakt">
                <button className="bg-[#173518] text-white font-bold py-2 px-4 rounded mt-5">
                  Hør mere
                </button>
              </Link>
            </div>
          </div>
          <div className="sm:w-[50%] sm:block hidden">
            <Slider />
          </div>
        </div>
      </div>
      <section class="overflow-hidden sm:hidden ">
        <div className="flex justify-center items-center">
          <div className="w-[60%] flex items-center">
            <h3 className="text-[#173518] font-manrope text-xl">
              Vi henviser til at besøge hjemmesiden på computer eller tablet,
              for bedst at tilgå billederne.
            </h3>
          </div>
        </div>
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img1.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img2.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img3.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img4.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img5.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img6.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img7.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img8.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img9.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img10.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img11.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img12.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img13.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img14.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img15.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img16.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img17.jpeg?auto=compress"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://syafrika.imgix.net/img18.jpeg?auto=compress"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
