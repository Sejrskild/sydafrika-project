import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    // Error page
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-bold text-black">404! ❌</h1>
      <h2 className="text-3xl font-bold text-black">
        Skynd dig tilbage i sikkerhed
      </h2>
      <Link
        to="/"
        className="text-2xl font-montserrat bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10 "
      >
        Gå tilbage til forsiden
      </Link>
    </div>
  );
}

export default Error;
