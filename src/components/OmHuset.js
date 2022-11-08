import React from "react";
import { Hero } from "./index";
import { BiSwim, BiWifi } from "react-icons/bi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { MdDryCleaning } from "react-icons/md";

function OmHuset() {
  const googleMapsLink =
    "https://www.google.com/maps/place/24%C2%B023'53.2%22S+30%C2%B047'51.5%22E/@-24.3981099,30.7970916,235m/data=!3m2!1e3!4b1!4m16!1m9!3m8!1s0x1ec3abf91b743011:0xc579b620fda7a820!2sBlyde+Wildlife+Estate!5m2!4m1!1i2!8m2!3d-24.397515!4d30.806929!3m5!1s0x0:0xdb84c0e75e00ad73!7e2!8m2!3d-24.3980955!4d30.7976387";

  const mapsPhoto = require("../assets/maps.jpeg");

  return (
    <main className="">
      <div className="bg-[#173518] navbar-bg">
        {/* navbar background image */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8"></div>
      </div>
      <Hero />
      <div className="w-screen flex flex-col justify-center items-center p-10">
        {/* Om Huset */}
        <div className="w-[70%] flex flex-col justify-center pt-10">
          <h1 className="uppercase font-montserrat tracking-widest text-[#265828] text-2xl">
            Om huset
          </h1>
          <div className="flex flex-col gap-4">
            <p className="">
              Vi er de heldige ejere af et spændende og autentisk hus i
              Sydafrika. Huset er igennem de sidste 13 år løbende vedligeholdt
              og seneste opgradering og udvidelse af køkken og spiseafdeling er
              fra 2021. Da vi desværre har andet af se til, og derfor ikke kan
              bruge det hele tiden, vil vi gerne låne det ud til venner og
              familie.
            </p>
            <p className="">
              Huset indeholder to masterbedrooms med eget bad og toilet,
              derudover almindeligt soveværelse inkl. køjeseng i
              voksenstørrelse, med tilhørende bad og toilet. Meget stor stue,
              køkken alrum og kæmpeoverdækket terrasse med udsigt til bjergene
              og på nederste niveau en lille men velholdt pool. 6-8 mennesker
              kan overnatte i huset. Helt ideelt til to familier med børn.
            </p>
            <p className="">
              Vi har en servicemedarbejder boende fast, som nu har været hos os
              de seneste 10 år. Hun sørger for pasning og vedligeholdelse af hus
              og have samt tilsikrer den daglige rengøring, skift af sengetøj 1
              gange ugentlig, sengeredning, vask og strygning af tøj. Hun kan
              endvidere stå for morgenmaden, hvis I har købt ind til det. Typisk
              slutter hendes arbejdsdag kl. 17 med en længere middagspause.
            </p>
          </div>
          <div className="pt-10 pb-5 w-full ">
            <div className="flex items-center justify-center">
              <h1 className="uppercase font-montserrat tracking-widest text-[#265828] text-l">
                Huset er udstyret med
              </h1>
            </div>
            <div className="w-full sm:flex sm:flex-row gap-10 justify-between flex-col ">
              <div className="flex items-center gap-2 pt-5">
                <BiSwim />
                Egen pool
              </div>
              <div className="flex items-center gap-2 pt-5">
                <BiWifi />
                Wifi
              </div>
              <div className="flex items-center gap-2 pt-5">
                <TbToolsKitchen2 />
                Stort køkken
              </div>
              <div className="flex items-center gap-2 pt-5">
                <BsSnow />
                Aircondition
              </div>
              <div className="flex items-center gap-2 pt-5">
                <FaCar />
                Garage
              </div>
              <div className="flex items-center gap-2 pt-5">
                <MdDryCleaning />
                Håndklæder, sengetøj m.v.
              </div>
            </div>
          </div>
        </div>
        {/* Området */}
        <div className="w-[70%] flex flex-col justify-center pt-10">
          <h1 className="uppercase font-montserrat tracking-widest text-[#265828] text-2xl">
            Området
          </h1>
          <div className="flex flex-col gap-4">
            <p className="">
              Estaten er bemandet med vagter 24/7 så fremmede ikke kommer
              uhindret ind på arealet. Vi er kommet i området gennem alle årene
              og har aldrig følt os utrygge, men det er rart at vide at vagterne
              passer på os. Huset er beliggende i Blyde Wildlife Estate, som er
              mere end 380 hektar stort og delt op i 150 grunde og kæmpe
              fællesarealer.
            </p>
            <p className="">
              Hele området er indhegnet. På den måde kan vi beholde vores egne
              dyr på estaten. Bl.a giraffer, zebraer, gnuer, impalaer, vortesvin
              og mange andre, og samtidigt holde elefanter, næsehorn, bøfler,
              løver og leoparder udenfor.
            </p>
            <p className="">
              Disse kan opleves på et game drive i en af de mange lodges i
              området eller ses i Kryger National Park som alene ligger 30 min.
              kørsel fra vores hus. Vores hus ligger tæt på Kryger National
              Park, verdens 3.største kløft Blyde River Cayons, Panoramaruten og
              kun 15 km fra Hoedspruit by hvor der købes ind og ligger en masse
              gode restauranter.
            </p>
            <p>
              Der er masser af muligheder for andet end at se dyr. Der er en
              panorama Rute i Blyde River Canyon, drypstens huler, besøg på
              silkefarmen, Diverse flod ture, Luftballontur m.v. Rigtig mange
              steder kan man køre ind og få frokost. Der er også gode golfbaner
              indenfor 1 times kørsel. Det er billigt at tage en overnatning og
              spille golf til rimelige priser et par dage. Vi deler gerne vores
              erfaringer og oplevelser, så hvis du skulle få lyst til en tur ned
              til det vidunderlige Sydafrika, er I meget velkomne til at
              kontakte os.
            </p>
          </div>
        </div>
        {/* Attraiktioner */}
        <div className="w-[70%] flex flex-col justify-center pt-10">
          <h1 className="uppercase font-montserrat tracking-widest text-[#265828] text-2xl">
            Attraktioner i nærheden
          </h1>
          <div className="flex flex-col sm:flex-row justify-around items-center p-3">
            <div className="flex flex-col justify-center">
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g312616-d2690643-Reviews-Hippo_Jessica-Hoedspruit_Limpopo_Province.html"
                target="__blank"
              >
                <img
                  src="https://images.toofab.com/image/3b/4by3/2021/12/09/3b0af7cd9fe04d7db1d807726876c94f_md.jpg"
                  className="w-48 h-48 rounded-full m-2"
                  alt="Jessica the Hippo"
                />
                <h3 className="text-center uppercase text-[#265828] font-montserrat m-2">
                  Jessica the Hippo
                </h3>
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a
                href="https://nyati-safari.dk/safari-sydafrika/"
                target="__blank"
              >
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/0f/c6/22/cd/nyati-safari-lodge.jpg"
                  className="w-48 h-48 rounded-full m-2"
                  alt="Nyati Safari Lodge"
                />
                <h3 className="text-center uppercase text-[#265828] font-montserrat m-2">
                  Nyati Safari Lodge
                </h3>
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="https://www.moholoholo.co.za/" target="__blank">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/50/59/44/caption.jpg?w=800&h=-1&s=1"
                  className="w-48 h-48 rounded-full m-2"
                  alt="Moholoholo Wildlife"
                />
                <h3 className="text-center uppercase text-[#265828] font-montserrat m-2">
                  Moholoholo Wildlife
                </h3>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[78px]">
          <div className="w-full h-full">
            <div className="relative hidden my-6 overflow-hidden cursor-pointer md:block p-3">
              <img src={mapsPhoto} placeholder="blur" className="object-fit" alt="satelite above the house" />
              <div className="absolute top-0 left-0 px-8 py-8 text-white">
                <h1 className="text-5xl font-montserrat ">Hoedspruit</h1>
                <h1 className="text-5xl font-montserrat ">Sydafrika</h1>
                <button className="px-8 py-2 mt-4 text-black bg-white rounded-full ">
                  <a href={googleMapsLink} className="uppercase font-thin">Se i maps</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OmHuset;
