import MainProduct from "@/app/component/product/mainProduct";
import Toprate from "@/app/component/product/topRated";
import React from "react";

function Product() {
  

  return (
    <div className="container w-[90%] ml-auto mr-auto">
      <div className="grid grid-cols-5 gap-3 text-red-800">
        <div className="my-5">
          <p>Top Rated</p>
          <hr />
          <Toprate></Toprate>
        </div>

        <div className="col-span-4  ">
          <MainProduct></MainProduct>
        </div>
      </div>
    </div>
  );
}

export default Product;
