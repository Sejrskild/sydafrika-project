import React from "react";

function OmHuset() {
  return (
    <section className="w-full flex h-2 justify-center m-12">
      <div className="w-[70%]">
        <div className="flex items-center justify-center">
          {/* grid with 3 items in a ul element */}
          <ul className="grid grid-cols-3 gap-4">
            <li className="flex flex-col">
              <img
                src="https://d33b12c77av9bg.cloudfront.net/originals/giraffe-natuur-safaripark-beekse-bergen.jpg"
                alt="giraffe"
                className="w-60 h-60"
              />
              <div className="flex flex-col items-start m-6">
                <h3 className="text-2xl font-bold font-montserrat text-[#2F4858]">
                  Dyr
                </h3>
                <p className="text-white font-montserrat w-60">
                  Indenfor det indhegnede område, hvor huset ligger er der alle
                  typer for dyr. Du kan f.eks. se girafferne der spiser af
                  bladdene om morgen, eller zebraerne der slapper af. Alt sammen
                  lige ude for hoveddøren.
                </p>
              </div>
            </li>
            <li className="flex flex-col">
              <img
                src="https://i.ibb.co/tpZr1zV/img6.jpg"
                alt="Køkken"
                className="w-60 h-60"
              />
              <div className="flex flex-col items-start m-6">
                <h3 className="text-2xl font-bold font-montserrat text-[#2F4858]">
                  Autentisk
                </h3>
                <p className="text-white font-montserrat w-60">
                  Lækkert moderne hus, der giver den afrikanske stemning. Med
                  masser af plads samt egen pool, vil der være massere af tid
                  til at slappe af.
                </p>
              </div>
            </li>
            <li className="flex flex-col">
              <img
                src="https://d33b12c77av9bg.cloudfront.net/originals/giraffe-natuur-safaripark-beekse-bergen.jpg"
                alt="giraffe"
                className="w-60 h-60"
              />
              <div className="flex flex-col items-start m-6">
                <h3 className="text-2xl font-bold font-montserrat text-[#2F4858]">
                  Dyr
                </h3>
                <p className="text-white font-montserrat w-60">
                  Indenfor det indhegnede område, hvor huset ligger er der alle
                  typer for dyr. Du kan f.eks. se girafferne der spiser af
                  bladdene om morgen, eller zebraerne der slapper af. Alt sammen
                  lige ude for hoveddøren.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OmHuset;
