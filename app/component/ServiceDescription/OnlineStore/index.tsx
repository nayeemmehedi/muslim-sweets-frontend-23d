import React from "react";
import { Dancing_Script } from "next/font/google";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { productAll } from "@/app/fetch/product";
import Link from "next/link";

const inter = Dancing_Script({ subsets: ["latin"], weight: "400" });

const value = [
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
];

async function OnlineStore() {
  const product = await productAll();

  return (
    <div className={inter.className}>
      <div className="text-white">
        <div>
          <div className="text-center mt-4">
            <p className="text-amber-400 my-3"> ONLINE STORE</p>
            <p className="text-5xl text-white my-4 ">
              Discover Sweet Delicious
            </p>
            <hr className="w-1/2  ml-auto mr-auto text-white my-6" />
          </div>
        </div>

        <div className="flex justify-between w-[80%] ml-auto mr-auto cursor-not-allowed	">
          {product?.data?.value?.slice(0, 4)?.map((v: any, key: any) => (
            <div key={key}>
              <img src={v?.imgUrl} className="w-[200px] h-[200px] cursor-not-allowed	" alt="" />
              <h1 className="my-3 cursor-not-allowed	">{v?.englishName}/{v?.banglaName}</h1>

              <p>
                Available Time:{" "}
                <span className="text-3xl text-amber-400 ">Enjoy NOW</span>
              </p>
              <p>Price: {v?.price} tk</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
         <Link href="/product">
         <button className="text-4xl border p-5 rounded-3xl border-amber-400 text-amber-400 hover:border-white  hover:text-white flex">
            {/* <span className="flex"> */}
              Online Store <BsArrowRightCircleFill className="ms-2" />
            {/* </span> */}
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
}

export default OnlineStore;
