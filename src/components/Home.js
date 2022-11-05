import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="h-[70vh]">
      <div className="flex flex-col justify-center items-center h-full relative">
        <img
          src="https://rhin-blog-production.s3.eu-west-1.amazonaws.com/wp-content/uploads/2016/03/Elephant-In-Front-Mt-Kilimanjaro-Wide-Angle.jpg"
          alt="home"
          className="h-full w-full object-cover"
        />
        <div className="absolute w-full h-full bg-black opacity-20"></div>
        <div className="absolute w-full h-full flex flex-col pt-[7%] items-center">
          <div className="text-5xl text-white font-montserrat font-bold">
            Velkommen
          </div>
          <div className="flex flex-col items-start justify-center m-6">
            <div className="text-2xl text-white font-montserrat m-2">
              Her vil du kunne læse mere om vores hus i <span className="underline decoration-[#D56C33]">Blyde Wildlife Estate</span>
            </div>
            <div className="text-2xl text-white font-montserrat m-2">
              Hvis du er interesseret I at høre mere skal du endelig bare <Link className="underline" to='/kontakt'>kontakte os</Link>.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
