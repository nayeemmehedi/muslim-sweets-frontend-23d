"use client";

import { RootState } from "@/app/StateManagement/store";
import { buy, buyBkash } from "@/app/fetch/buyProduct";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { productDeleteRedux } from "@/app/StateManagement/counterSlice";

function paymentOption() {
  const router = useRouter();
  const dispatch = useDispatch();

  const cardValue = useSelector((state: RootState) => state.counter.value);
  const cardOrder = useSelector((state: RootState) => state.counter.order);

  async function cashOne() {
    const productWithAddress = {
      location: cardOrder,
      product: cardValue,
      userEmail: "boyneel79@gmail.com",
      paymentOptions: "cashONdelivery",
    };

    const buyProduct = await buy(productWithAddress);
    if (buyProduct) {
      cardValue.map((v) => {
        dispatch(productDeleteRedux(v.englishName));
      });

      router.push("/payment-success");
    } else {
      console.log("error");
    }
  }

  async function bashOrCredit() {
    const productWithAddress = {
      location: cardOrder,
      product: cardValue,
      userEmail: "boyneel79@gmail.com",
      paymentOptions: "gateway",
    };

    const buyProduct = await buyBkash(productWithAddress);

    console.log("buyProduct.data.gateway", buyProduct.data.gateway);

    // if(buyProduct.st)
    if (buyProduct.statusCode == 200) {
      window.location.replace(buyProduct.data.gateway);
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <div className="bg-zinc-200 py-5">
      <div>
        <p className="text-center text-xl font-bold">
          Select Your Payment Method
        </p>
      </div>
      <div className="w-[40%]  ml-auto mr-auto grid grid-cols-2 ">
        <div className="py-5 shadow m-4 bg-white grid content-center justify-center hover:text-xl hover:text-red-600">
          <button type="button" onClick={() => cashOne()}>Cash On Delivery</button>
        </div>

        <div className="py-5 shadow m-4 bg-white grid content-center justify-center hover:text-xl hover:text-red-600">
          <button type="button" onClick={() => bashOrCredit()}>Bkash/Credit Card</button>
        </div>
      </div>

      <div className="text-center text-green-700">
        ("Please select which mathod  preferences you want to.")
      </div>
    </div>
  );
}

export default paymentOption;
