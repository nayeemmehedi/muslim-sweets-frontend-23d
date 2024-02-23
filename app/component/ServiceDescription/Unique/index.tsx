"use client";

import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { Dancing_Script } from "next/font/google";
const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });


function Unique() {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image:
              "https://c8.alamy.com/comp/A07MRH/sweets-on-display-in-bakery-in-dhaka-bangladesh-A07MRH.jpg",
            speed: -20,
          },
          {
            speed: -15,
            children: (
              <div className={dancing_Script.className}>
                 <div className="absolute inset-0 flex items-center justify-center">
                <div className="  text-7xl text-center">
                    <p className="text-green-950">Made with <span className="text-red-800">love</span> </p>
                   <p className="text-green-950"> <span className="text-amber-400">unique</span> sweets for gourmet</p>
                </div>
              </div>
              </div>
            ),
          },
          //   { image: "https://media.istockphoto.com/id/1143856977/photo/dim-sum-buffet.webp?s=170667a&w=0&k=20&c=U31fdys8fk_PUmNb619ZfKFFv1IvfVxK_17VWLzYIMk=", speed: -10 },
        ]}
        className="aspect-[2/1]"
      ></ParallaxBanner>
    </ParallaxProvider>
  );
}
export default Unique;
