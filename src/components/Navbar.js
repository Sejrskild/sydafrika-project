import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
  
  const {pathname} = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const mobileMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    setNavbarOpen(false);
  }, [pathname]);

  return (
    <header className="absolute inset-x-0 top-0 z-10 py-8 md:py-10">
      <div className="px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Phone menu */}
          <div className="md:hidden" onClick={mobileMenu}>
            <button
              type="button"
              className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          


          <div className="hidden md:flex items-center md:items-centers md:space-x-10 lg:ml-28">
            <Link
              to="/om-huset"
              className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              {" "}
              Om Huset{" "}
            </Link>

            <Link
              to="/billeder"
              className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              {" "}
              Billeder{" "}
            </Link>
          </div>
          <div className="hidden md:flex md:items-center lg:ml-28">
            <Link
              to="/kontakt"
              className="font-sans text-base font-normal transition-all border border-white p-2 duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            >
              {" "}
              Kontakt os
            </Link>
          </div>
        </div>
      </div>
      {navbarOpen ? <div className="p-12 h-full w-full bg-[#173518]">
            <div className="flex flex-col items-center">
              <Link to="/om-huset" className="text-2xl font-bold text-white m-3">
                Om Huset
              </Link>
              <Link to="/billeder" className="text-2xl font-bold text-white m-3">
                Billeder
              </Link>
              <Link to="/kontakt" className="text-2xl font-bold text-white m-3">
                Kontakt
              </Link>
            </div>
          </div> : null}
    </header>
  );
}

export default Navbar;
