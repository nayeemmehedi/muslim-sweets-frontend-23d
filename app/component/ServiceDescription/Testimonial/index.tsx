"use client";

import React, { useState } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function Testimonial() {
  const [imageSrc, setImageSrc] = useState(
    "https://wfg32p.s3.amazonaws.com/media/dishes/chanar_jilapi_6156-med.jpg"
  );
  const [alternativeImageSrc, setAlternativeImageSrc] = useState(
    "https://sgp1.digitaloceanspaces.com/cosmosgroup-dc/news/qqwYxlIFK9HiYbgQj1uWjvT11UgYs3IsCj5gD3dc.jpeg"
  );

  const handleImageError = () => {
    // Set the alternative image source when the original image fails to load
    setImageSrc(alternativeImageSrc);
  };

  return (
    <>
      <TECarousel showControls ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className=" h-[400px] w-[100%]">
              <div className="w-[70%] h-[300px] mt-20 ml-auto mr-auto border border-amber-300 md:text-ellipsis md:overflow-hidden sm:text-ellipsis sm:overflow-hidden  ">
                <div className="grid justify-items-center ">
                  <img
                    src={imageSrc}
                    className="w-14 rounded-full mt-10  "
                    onError={handleImageError}
                  />
                </div>

                <p className="text-white w-[80%] ml-auto mr-auto mt-5 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas inventore incidunt eligendi quasi adipisci veniam?
                  Ipsa fuga sit eveniet quisquam omnis saepe impedit quis
                  deleniti tenetur! Neque commodi quos animi.
                </p>

                <div className="text-white grid justify-end w-[80%]">
                    <h3>Raderfort Islam</h3>
                    <p>Customer</p>
                </div>
              </div>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
