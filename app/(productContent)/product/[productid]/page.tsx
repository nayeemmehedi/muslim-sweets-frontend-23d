import React from "react";
import ProductDetails from "./product/ProductDetails";
import Rating from "./product/Rating";

function page({ params }: any) {

  if(!params.productid){
    return <div className="text-center text-red-400 text-2xl">Product Details not found ,try another one</div>

  }

  return (
    <div>
      <ProductDetails  params={params}></ProductDetails>
      <Rating id={params?.productid}></Rating>
    </div>
  );
}

export default page;
