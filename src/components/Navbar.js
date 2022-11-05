import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineCamera,
  AiOutlineMail,
} from "react-icons/ai";

function Navbar() {
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  // if mobile menu link is clicked, close the menu

  const closeMenu = () => {
    navRef.current.classList.add("hidden");
    if (!navRef.current.classList.contains("hidden")) {
      hamburgerRef.current.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    `;
    } else {
      hamburgerRef.current.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    `;
    }
  };

  const menuToggle = () => {
    navRef.current.classList.toggle("hidden");
    // if navbar is open change the hamburger icon to an X
    if (!navRef.current.classList.contains("hidden")) {
      hamburgerRef.current.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    `;
    } else {
      hamburgerRef.current.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    `;
    }
  };

  return (
    <nav className="bg-[#D2B278] shadow-2xl">
      <div className="max-w-6xl mx-auto px-3 py-5">
        <div className="justify-between text-white text-2xl font-montserrat hidden md:flex">
          {/* Forside Link */}
          <div className="flex justify-between ">
            <Link
              to="/"
              className="py-3 px-3 hover:underline decoration-[#D56C33]"
            >
              Forside
            </Link>
          </div>
          <div className="flex justify-end">
            {/* Midte - Om Huset && Billeder */}
            <div className="flex items-center mx-20">
              <Link
                to="/om-huset"
                className="py-3 px-3 mx-3 hover:underline decoration-[#D56C33] "
              >
                Om Huset
              </Link>
              <Link
                to="/billeder"
                className="py-3 px-3 mx-3 hover:underline decoration-[#D56C33] "
              >
                Billeder
              </Link>
            </div>

            {/* Kontakt os */}
            <Link
              to="/kontakt"
              className="py-3 px-7 bg-[#D56C33] transition duration-300 hover:bg-[#db7a46]"
            >
              Kontakt
            </Link>
          </div>
        </div>
        {/* Mobile */}
        <button
          onClick={menuToggle}
          className="md:hidden z-50 block p-5 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            ref={hamburgerRef}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {/* Mobile menu*/}
        {/* TODO - fiks så det er nemmere a trykke på  */}
      </div>
      <div
        className="md:hidden hidden absolute z-50 w-full h-auto bg-[#d1b98c]"
        ref={navRef}
        onClick={closeMenu}
      >
        <div className="flex flex-col text-2xl font-montserrat text-white px-5 py-3 space-y-10">
          <Link to="/">
            <div className="flex items-center space-x-3 hover:bg-[#c6a871] hover:cursor-pointer p-2">
              <AiOutlineHome />
              <div className="">Forside</div>
            </div>
          </Link>
          <Link to="/om-huset">
            <div className="flex items-center space-x-5 hover:bg-[#c6a871] hover:cursor-pointer p-2">
              <AiOutlineInfoCircle />
              <div className="">Om Huset</div>
            </div>
          </Link>
          <Link to="/billeder">
            <div className="flex items-center space-x-3 hover:bg-[#c6a871] hover:cursor-pointer p-2">
              <AiOutlineCamera />
              <div className="">Billeder</div>
            </div>
          </Link>
          <Link to="/kontakt">
            <div className="flex items-center space-x-3 hover:bg-[#c6a871] hover:cursor-pointer p-2">
              <AiOutlineMail />
              <div className="">Kontakt</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
