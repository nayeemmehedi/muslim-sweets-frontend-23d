import React from "react";
import ProductDetails from "./product/ProductDetails";
import Rating from "./product/Rating";
import { productId } from "@/app/fetch/product";


async function page({params}:any) {

  const product = await productId(params.productid);

  return (
    <div>
     {product?<div>
      <ProductDetails  productDetails={product?.data?.value[0]}></ProductDetails>
      <Rating productDetails={product?.data?.value[0]}></Rating>
     </div>: "Loading.."
      }
    </div>
  );
}

export default page;
