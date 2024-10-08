import React from "react";
import dynamic from "next/dynamic";
import TopRated from "../ServiceDescription/TopRated";

const SlideShow = dynamic(() => import("../Navabar/SlideShow"), { ssr: false });
import PatisserieProduct from "../ServiceDescription/PatisserieProduces";
const Unique = dynamic(() => import("../ServiceDescription/Unique"), {
  ssr: false,
});
import OnlineStore from "../ServiceDescription/OnlineStore";
const Testimonial = dynamic(() => import("../ServiceDescription/Testimonial"), {
  ssr: false,
});

function MainComponent() {
  return (
    <div className="">
      <SlideShow></SlideShow>
      <PatisserieProduct></PatisserieProduct>
      <Unique></Unique>
      <OnlineStore></OnlineStore>
      <TopRated></TopRated>

      <Testimonial></Testimonial>
    </div>
  );
}

export default MainComponent;
