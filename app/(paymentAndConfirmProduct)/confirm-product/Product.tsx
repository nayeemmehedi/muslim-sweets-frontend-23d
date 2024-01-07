"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import food from "/public/food.jpg";
import { Inter, Dancing_Script } from "next/font/google";

const inter = Dancing_Script({ subsets: ["latin"] });

// image: "/chomchom.jpg",
// name: "Chomchom",
// banglaName: "কাটারী ভোগ",
// price: 40,
// rating: 4,
// available: "Unavailable",
// availableTime: "6AM-12PM",

interface MyComponentProps {
  value: {
    image: string;
    name: string;
    banglaName: string;
    price: number;
    rating: number;
    available: string;
    availableTime: string;
  };
}

const ProductPayment: React.FC<MyComponentProps> = ({ value }) => {
  return (
    <div className={inter.className}>
      <div className="mx-8 my-3  p-6 bg-white font-light">
        <div className="grid grid-cols-5">
          <div className="col-span-3 flex ">
            <div>
              <Image src={food} width={70} height={70} alt="not found"></Image>
            </div>
            <div className="ms-5 flex items-center">
              <div>
                <p className="">
                  {value.name}-{value.banglaName}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center">qt: 2</div>

          <div className="col-span-1 flex items-center">
            <p className="text-orange-600">Price: ৳ {value.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPayment;
