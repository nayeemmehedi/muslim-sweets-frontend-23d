import MainProduct from "@/app/component/product/mainProduct";
import Toprate from "@/app/component/product/topRated";
import { productAll } from "@/app/fetch/product";
import React from "react";

import type { Metadata } from "next";

export async function generateMetadata() {
  const product = await productAll();

  if (!product || !product.data?.value?.length) {
    return {
      title: "No Products Available - My E-commerce Store",
      description:
        "We currently have no products available. Please check back later.",
    };
  }

  // Generate metadata dynamically based on the first few products
  const productNames = product.data.value
    .slice(0, 3)
    .map((p: any) => p.name)
    .join(", ");
  const productCount = product.data.value.length;

  return {
    title: `Buy ${productCount} Products - My E-commerce Store`,
    description: `Check out our top products: ${productNames}. Find the best deals and prices here!`,
  };
}

async function Product() {
  const product = await productAll();

  return (
    <div className="container w-[90%] ml-auto mr-auto">
      <div className="grid grid-cols-5  gap-3 text-red-800">
        <div className="my-5">
          <p>Top Rated</p>
          <hr />
          <Toprate product={product}></Toprate>
        </div>

        <div className="col-span-4  ">
          <MainProduct product={product}></MainProduct>
        </div>
      </div>
    </div>
  );
}

export default Product;
