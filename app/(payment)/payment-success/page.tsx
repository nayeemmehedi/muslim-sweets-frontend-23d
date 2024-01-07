import React from "react";
import success from "/public/illustration/success.jpg";
import Image from "next/image";
import Link from "next/link";

function PaymentSuccess() {
  return (
    <div>
      <Link href="/">
        <button className="font-extralight text-xs p-3 m-4 border border-green-200 ">Back To Home</button>
      </Link>

      <div className="w-[50%] ml-auto mr-auto">
        <Image src={success} alt="error"></Image>
        <p className="text-2xl font-light my-5 text-center text-green-500">
          Succesfully Payment Done{" "}
        </p>
      </div>
    </div>
  );
}

export default PaymentSuccess;
