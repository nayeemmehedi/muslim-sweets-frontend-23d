"use client"

import React from "react";
import error from "/public/illustration/error.jpg";
import Image from "next/image";
import Link from "next/link";

function PaymentSuccess() {
  return (
    <div>
      <Link href="/">
        <button className="font-extralight text-xs p-3 m-4 border border-green-200 ">
          Back To Home
        </button>
      </Link>

      <div className="w-[50%] ml-auto mr-auto">
        <Image src={error} alt="error"></Image>
      </div>
    </div>
  );
}

export default PaymentSuccess;
