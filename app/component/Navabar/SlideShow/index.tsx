"use client";

import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Dancing_Script } from "next/font/google";
import "../../../style/slider.css"
import sweets_occation from "/public/img/sweets/sweets1.jpg"
import sweets_normal from "/public/img/sweets/sweets2.jpg"
import sweets_good from "/public/img/sweets/sweets3.jpg"

const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

const SlideShow = () => {
  const images = [
    {
      pic:sweets_occation,

      content_h1: "মিষ্টি কিনতে চাও..",
      content_h2: "চলে আসো  লোহাগড়া নড়াইল",
      content_p:
        "There is nothing more significant than love and chocolate. They make a truly winning combination.",
    },
    {
      pic: sweets_good,

      content_h1: "আমাদের পণ্য ১০০% শুদ্ধ",
      content_h2: "Contact No : 01916108472",
      content_p:
        "There is nothing more significant than love and chocolate. They make a truly winning combination.",
    },
    {
      pic:sweets_normal, 
      content_h1: "",
      content_h2: "Lohagora,Narail,Bangladesh",
      content_p:
        "There is nothing more significant than love and chocolate. They make a truly winning combination.",
    },
  ];

  return (
   <div>
    <div>
      {/* <img src={allsweet.src}  width="200" alt="" ></img> */}
    </div>
     <Zoom duration={1200} scale={1.4} indicators={true}>
      {images.map((each, index) => (
        <div key={index}>
          <div
            className="value "
            style={{
              backgroundImage: `url(${each.pic.src})` ,
              width: "100%",
              minHeight: "600px",
            }}
          ></div>

          <div className={dancing_Script.className}>
            <div className="content">
              <p className="text-4xl text-white ">{each.content_h1}</p>
              <p className="text-amber-400">{each.content_h2}</p>
              <p className="mt-5 text-red-100 ">{each.content_p}</p>
            </div>
          </div>
        </div>
      ))}
    </Zoom>
   </div>
  );
};

export default SlideShow;
