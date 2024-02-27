"use client";

import React, { useEffect } from "react";
import success from "/public/illustration/success.jpg";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/StateManagement/store";
import { productDeleteRedux } from "@/app/StateManagement/counterSlice";

function PaymentSuccess() {
  const dispatch = useDispatch();
  const cardValue = useSelector((state: RootState) => state.counter.value);

  useEffect(() => {
    cardValue.map((v) => {
      dispatch(productDeleteRedux(v.englishName));
    });
  }, []);

  return (
    <div>
      <Link href="/">
        <button className="font-extralight text-xs p-3 m-4 border border-green-200 ">
          Back To Home
        </button>
      </Link>

      <div className="w-[50%] ml-auto mr-auto">
        <Image src={success} alt="error"></Image>
        <div>
          <p className="text-2xl font-light my-5 text-center text-green-500">
            Succesfully Oder Confirm{" "}
          </p>
          <p className="text-green-900 text-center py-3">
            Please ready when our rider reach u.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
