"use client";

import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Dancing_Script } from "next/font/google";
import "../../../style/slider.css"

const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

const SlideShow = () => {
  const images = [
    {
      pic: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      content_h1: "Muslim Sweets & Chocolate",
      content_h2: "Narail,Lohagora",
      content_p:
        "There is nothing more significant than love and chocolate. They make a truly winning combination.",
    },
    {
      pic: "https://images.unsplash.com/photo-1615796701805-2094ac54bbf9?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      content_h1: "Our Product 100% Pure",
      content_h2: "Narail,Lohagora",
      content_p:
        "There is nothing more significant than love and chocolate. They make a truly winning combination.",
    },
    {
      pic: "https://images.unsplash.com/photo-1518090878263-90511084a1ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      content_h1: "Product Pure & Authentic",
      content_h2: "Narail,Lohagora",
      content_p:
        "There is nothing more significant than love and chocolate. They make a truly winning combination.",
    },
  ];

  return (
    <Zoom duration={1200} scale={1.4} indicators={true}>
      {images.map((each, index) => (
        <div key={index}>
          {/* <img className='object-scale-down w-full' alt="Slide Image" src={each} /> */}
          <div
            className="value text-white"
            style={{
              backgroundImage: `url(${each.pic})`,
              width: "100%",
              minHeight: "600px",
            }}
          ></div>

          <div className={dancing_Script.className}>
            <div className="content">
              <h1>{each.content_h1}</h1>
              <h2 className="text-amber-400">{each.content_h2}</h2>
              <p className="mt-5 ">{each.content_p}</p>
            </div>
          </div>
        </div>
      ))}
    </Zoom>
  );
};

export default SlideShow;
