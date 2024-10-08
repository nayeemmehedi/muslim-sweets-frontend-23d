"use client"

import { useEffect, useState } from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { Dancing_Script } from "next/font/google";

const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

function Unique() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // একবার লোড হলে observe বন্ধ করে দেয়
        }
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector(".parallax-banner");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.disconnect();
    };
  }, []);

  return (
    <ParallaxProvider>
      <ParallaxBanner
        className="parallax-banner aspect-[2/1]"
        layers={[
          {
            image: inView
              ? "https://roshbd.com/wp-content/uploads/photo-gallery/BAB_5438aaaa.jpg"
              : "", // স্ক্রিনে আসার পরে ইমেজ লোড হবে
            speed: -20,
            style: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
          {
            speed: -15,
            children: (
              <div className={dancing_Script.className}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl text-center">
                    <div className="text-amber-600 lg:w-[60]">
                      স্বাদ উপভোগ করুন যা{" "}
                      <span className="text-green-950 text-2xl">
                        পরিবারকে একসাথে
                      </span>{" "}
                      আনে। প্রতিটি উৎসবে বেছে নিন{" "}
                      <span className="text-red-800">মুসলিম সুইটস</span>।
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
    </ParallaxProvider>
  );
}

export default Unique;
