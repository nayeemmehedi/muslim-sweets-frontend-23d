"use client";

import React from "react";
import ProductDetails from "./product/ProductDetails";
import Rating from "./product/Rating";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import  ErrorBoundary from "../../../utls/ErrorBoundary.js"
import { useParams } from 'next/navigation'

function page() {
  const params = useParams()
  

  return (
    <div>
      <ErrorBoundary>
      <ProductDetails  id={params?.productid}></ProductDetails>
      <Rating id={params?.productid}></Rating>
      </ErrorBoundary>
    </div>
  );
}

export default page;
