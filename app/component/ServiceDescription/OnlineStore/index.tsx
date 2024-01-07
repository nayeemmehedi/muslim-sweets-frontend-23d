import React from "react";
import { Dancing_Script } from "next/font/google";
import { BsArrowRightCircleFill } from "react-icons/bs";

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

function OnlineStore() {
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

        <div className="flex justify-between w-[80%] ml-auto mr-auto">
          {value?.map((v, key) => (
            <div key={key}>
              <img src={v.img} className="w-[200px] h-[200px]" alt="" />
              <h1 className="my-3">{v.name}</h1>
              <p>
                Price: <span className="text-orange-200">{v.price} {v.money}</span>{" "} {"->"}
                {v.avaiable ? "Available" : "Unavbilable"}
              </p>
              <p>
                Available Time:{" "}
                <span className="text-3xl text-amber-400 ">
                  {v?.Available_Time ? v?.Available_Time : "Enjoy NOW"}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="text-4xl border p-5 rounded-3xl border-amber-400 text-amber-400 hover:border-white  hover:text-white">
            <span className="flex">
              Online Store <BsArrowRightCircleFill className="ms-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnlineStore;
