import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Slider() {
  const images = [
    {
      original: "https://syafrika.imgix.net/img1.jpeg?auto=compress",
      description: "Billede af øvre del af terassen",
    },
    {
      original: "https://syafrika.imgix.net/img2.jpeg?auto=compress",
      description: "Billede af øvre del af terassen",
    },
    {
      original: "https://syafrika.imgix.net/img3.jpeg?auto=compress",
      description: "Nedre terasse med udsigt samt pool",
    },
    {
      original: "https://syafrika.imgix.net/img4.jpeg?auto=compress",
      description: "Hyggestue",
    },
    {
      original: "https://syafrika.imgix.net/img5.jpeg?auto=compress",
      description: "Nyt køkken",
    },
    {
      original: "https://syafrika.imgix.net/img6.jpeg?auto=compress",
      description: "Nyt køkken",
    },
    {
      original: "https://syafrika.imgix.net/img7.jpeg?auto=compress",
      description: "Gang til master bedroom (Nordlige del af huset)",
    },
    {
      original: "https://syafrika.imgix.net/img8.jpeg?auto=compress",
      description: "Hyggeligt grillområde foran huset",
    },
    {
      original: "https://syafrika.imgix.net/img9.jpeg?auto=compress",
      description: "Bad samt toilet tilhørende master bedroom",
    },
    {
      original: "https://syafrika.imgix.net/img10.jpeg?auto=compress",
      description: "Seng i master bedroom med udgang til terrasse",
    },
    {
      original: "https://syafrika.imgix.net/img11.jpeg?auto=compress",
      description: "Master bedroom",
    },
    {
      original: "https://syafrika.imgix.net/img12.jpeg?auto=compress",
      description: "Master bedroom",
    },
    {
      original: "https://syafrika.imgix.net/img13.jpeg?auto=compress",
      description: "Gæsteværelse med udgang til terrasse",
    },
    {
      original: "https://syafrika.imgix.net/img14.jpeg?auto=compress",
      description: "Gæsteværelse hængekøje",
    },
    {
      original: "https://syafrika.imgix.net/img15.jpeg?auto=compress",
      description: "Master bedroom",
    },
    {
      original: "https://syafrika.imgix.net/img16.jpeg?auto=compress",
      description: "Hoveddør til huset, samt garagen i højre side af billedet",
    },
    {
      original: "https://syafrika.imgix.net/img17.jpeg?auto=compress",
      description: "Udsigt fra terassen",
    },
    {
      original: "https://syafrika.imgix.net/img18.jpeg?auto=compress",
      description: "Billede af huset nedefra terassen",
    },
  ];

  return (
    <>
      <ImageGallery items={images} lazyLoad={true} showThumbnails={false} />
    </>
  );
}

export default Slider;
