"use client";
import { comments } from "@/app/extra/JsonFile/JsonFile";
import React, { useState, useEffect, useRef } from "react";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (currentIndex === comments.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(comments.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleImageError = (event:any) => {
    event.target.src =
      "https://sgp1.digitaloceanspaces.com/cosmosgroup-dc/news/qqwYxlIFK9HiYbgQj1uWjvT11UgYs3IsCj5gD3dc.jpeg";
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="carousel-container"
        ref={carouselRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.6s ease-in-out",
        }}
      >
        {comments.map((comment, index) => (
          <div key={index} className="carousel-item">
            <div className="h-[400px] w-[100%]">
              <div className="w-[70%] h-[300px] mt-20 ml-auto mr-auto border border-amber-300 md:text-ellipsis md:overflow-hidden sm:text-ellipsis sm:overflow-hidden">
                <div className="grid justify-items-center">
                  <img
                    src={comment.imageSrc}
                    className="w-14 rounded-full mt-10"
                    onError={handleImageError}
                    alt="Testimonial Avatar"
                  />
                </div>
                <p className="text-white w-[80%] ml-auto mr-auto mt-5">
                  {comment.comments}
                </p>
                <div className="text-white grid justify-end w-[80%]">
                  <h3>{comment.name}</h3>
                  <p>{comment.customer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        className="carousel-control next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
}