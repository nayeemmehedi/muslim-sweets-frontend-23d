import React from "react";
import ProductDetails from "./product/ProductDetails";
import Rating from "./product/Rating";

function page({ params }: any) {

  return (
    <div>
      <ProductDetails id={params?.productid}></ProductDetails>
      <Rating id={params?.productid}></Rating>
    </div>
  );
}

export default page;
