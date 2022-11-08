import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-0">
        {/* dark opacity layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          className="object-cover w-full h-full"
          src="https://images6.alphacoders.com/598/598770.jpg"
          alt=""
        />
      </div>

      <div className="relative">
        <div className="mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="tracking-tighter text-white">
              <span className="text-3xl font-montserrat font-light sm:text-7xl">
                Moderne
              </span>
              <br />
              <span className="text-4xl font-serif italic font-normal sm:text-8xl">
                Afrikansk luksus
              </span>
            </h1>
            <p className="sm:mt-5 p-5 font-sans text-base font-normal text-white text-opacity-70">
              Lækkert moderne hus belliggende i Blyde Wildlife Estate, i
              Sydafrika. Huset er igennem de sidste 13 år løbende vedligeholdt
              og seneste opgradering og udvidelse af køkken og spiseafdeling er
              fra 2021. Da vi desværre har andet af se til, og derfor ikke kan
              bruge det hele tiden, vil vi gerne låne det ud til venner og
              familie.
            </p>
            <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
              <Link
                to="/om-huset"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            leading-6
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                role="button"
              >
                Læs mere om huset
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
