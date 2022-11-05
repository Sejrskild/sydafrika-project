import React from "react";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";

function Footer() {
  // sticky footer that sticks to button of page using tailwindcss

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col justify-between ">
        <footer className="bg-gray-800 text-white text-xs w-full h-24">
          <div className="flex justify-between flex-col">
            <div className="flex justify-between items-center">
              <div className="flex justify-between flex-col">
                <div className="flex items-center ">
                  <AiOutlineMail className="w-6 h-6 m-2" />
                  <a href="mailto:xxx@hotmail.dk" className="m-2">
                    xxx@hotmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <AiOutlineMobile className="w-6 h-6 m-2" />
                  <a href="tel:+4500000000" className="m-2">
                    +45 00 00 00 00
                  </a>
                </div>
              </div>
              <div className="flex justify-between flex-col">
                <div className="flex items-center flex-col">
                  <a
                    className="flex flex-col justify-center items-center"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/-24.398065367947716,%2030.797608670910986"
                  >
                    <p>Blyde Wildlife Esate nr. 14</p>
                    <p>Hoedspruit, Sydafrika</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
