import React from "react";
import ProductDetails from "./product/ProductDetails";
import Rating from "./product/Rating";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import  ErrorBoundary from "../../../utls/ErrorBoundary.js"

function page({ params }: any) {

  if(!params.productid){
    return <div className="text-center text-red-400 text-2xl">Product Details not found ,try another one</div>

  }

  return (
    <div>
      <ErrorBoundary>
      <ProductDetails  params={params}></ProductDetails>
      <Rating id={params?.productid}></Rating>
      </ErrorBoundary>
    </div>
  );
}

export default page;
