import React from "react";
import { Carousel } from "react-carousel-minimal";

function Slider() {
  const data = [
    {
      image: "https://i.ibb.co/0yMDGNP/img1.jpg",
      caption: "Billede af øvre del af terassen",
    },
    {
      image: "https://i.ibb.co/gVM8Hn1/img2.jpg",
      caption: "Billede af øvre del af terassen",
    },
    {
      image: "https://i.ibb.co/yBNnd96/img3.jpg",
      caption: "Nedre terasse med udsigt samt pool",
    },
    {
      image: "https://i.ibb.co/bPZLbFP/img4.jpg",
      caption: "Hyggestue",
    },
    {
      image: "https://i.ibb.co/L5m5nB9/img5.jpg",
      caption: "Nyt køkken",
    },
    {
      image: "https://i.ibb.co/tpZr1zV/img6.jpg",
      caption: "Nyt køkken",
    },
    {
      image: "https://i.ibb.co/tsBtdWp/img7.jpg",
      caption: "Gang til master bedroom (Nordlige del af huset)",
    },
    {
      image: "https://i.ibb.co/HzWyy0n/img8.jpg",
      caption: "Hyggeligt grillområde foran huset",
    },
    {
      image: "https://i.ibb.co/nbMKFNh/img9.jpg",
      caption: "Bad samt toilet tilhørende master bedroom",
    },
    {
      image: "https://i.ibb.co/syykSj8/img10.jpg",
      caption: "Seng i master bedroom med udgang til terrasse",
    },
    {
      image: "https://i.ibb.co/dPh148j/img11.jpg",
      caption: "Master bedroom",
    },
    {
      image: "https://i.ibb.co/0hf7CZv/img12.jpg",
      caption: "Master bedroom",
    },
    {
      image: "https://i.ibb.co/XkS65pZ/img13.jpg",
      caption: "Gæsteværelse med udgang til terrasse",
    },
    {
      image: "https://i.ibb.co/mRYbP03/img15.jpg",
      caption: "Gæsteværelse hængekøje",
    },
    {
      image: "https://i.ibb.co/8sR3rhq/img14.jpg",
      caption: "Master bedroom",
    },
    {
      image: "https://i.ibb.co/VNV2LFy/img17.jpg",
      caption: "Hoveddør til huset, samt garagen i højre side af billedet",
    },
    {
      image: "https://i.ibb.co/khxx6DZ/img18.jpg",
      caption: "Udsigt fra terassen",
    },
    {
      image: "https://i.ibb.co/MNqBdJK/img19.jpg",
      caption: "Billede af huset nedefra terassen",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <>
      <main>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center md:h-full md:w-full">
            <Carousel
              data={data}
              width="1050px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            ></Carousel>
          </div>
        </div>
      </main>
    </>
  );
}

export default Slider;
