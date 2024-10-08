import React from "react";
import { Dancing_Script } from "next/font/google";
import { BsArrowRightCircleFill } from "react-icons/bs";
// import { productAll } from "@/app/fetch/product";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { productAll } from "@/app/fetch/product";

const inter = Dancing_Script({ subsets: ["latin"], weight: "400" });

export const value = [
  {
    img: "./chomchom.jpg",
    name: "Milk Chocolets with pinat",
    price: 250,
    money: "tk",
    avaiable: false,
    Available_Time: "8am-10am",
  },
  {
    img: "./chomchom.jpg",
    name: "Milk Chocolets with pinat",
    price: 250,
    money: "tk",
    avaiable: false,
    Available_Time: "8am-10am",
  },
  {
    img: "./chomchom.jpg",
    name: "Milk Chocolets with pinat",
    price: 250,
    money: "tk",
    avaiable: true,
  },
  {
    img: "./chomchom.jpg",
    name: "Milk Chocolets with pinat",
    price: 250,
    money: "tk",
    avaiable: false,
    Available_Time: "8am-10am",
  },
  {
    img: "./chomchom.jpg",
    name: "Milk Chocolets with pinat",
    price: 250,
    money: "tk",
    avaiable: false,
    Available_Time: "8am-10am",
  },
  {
    img: "./chomchom.jpg",
    name: "Milk Chocolets with pinat",
    price: 250,
    money: "tk",
    avaiable: true,
  },
];

async function OnlineStore() {
  const product = await productAll();

  return (
    <div className={inter.className}>
      <div className="text-white backgroundColorMain py-4 ">
        <div>
          <div className="text-center pt-4">
            <p className="text-amber-400 my-3"> ONLINE STORE</p>
            <p className="text-5xl text-white my-4 ">
              Discover Sweet Delicious
            </p>
            <hr className="w-1/2  ml-auto mr-auto text-white my-6" />
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4   ml-auto mr-auto cursor-not-allowed lg:w-[90%]	">
          {product?.data?.value?.map((v: any, key: any) => (
            <div
              key={key}
              className=" mx-4 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-white my-3 border-3 "
            >
              {/* Image Section */}
              <div className="relative h-64 w-full rounded-t-lg object-cover">
                <Image
                  src={v?.imgUrl} // Replace with your product image
                  alt="Malai Sweet"
                  fill
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Product Names */}
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {v?.englishName}
                  </h2>
                  <h3 className="text-lg text-gray-500">{v?.banglaName}</h3>
                </div>
                <div className="text-2xl  text-center font-semibold text-red-600">
                  {v?.price}
                </div>

                {/* Price and Rating */}
                <div className="flex justify-center items-center mb-4">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">
                      {v?.rating}/5
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="text-center">
                <Link href={`/product/${v?._id}`}>
                          <button className="py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300 px-5">
                            Buy Now
                          </button>
                          </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OnlineStore;
