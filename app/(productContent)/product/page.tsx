import MainProduct from "@/app/component/product/mainProduct";
import Toprate from "@/app/component/product/topRated";
import { productAll } from "@/app/fetch/product";
import React from "react";

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
