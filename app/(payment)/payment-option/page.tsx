import React from "react";

function paymentOption() {
  return (
    <div className="bg-zinc-200 py-5">
        <p className="text-center text-xl font-bold">Select Your Payment Method</p>

      <div className="w-[40%]  ml-auto mr-auto grid grid-cols-2 ">
        <div className=" ">
          <div className="py-5 shadow m-4 bg-white grid content-center justify-center hover:text-2xl hover:text-red-600">
            <p className="">Cash On Delivery</p>
          </div>
        </div>
        <div className=" ">
          <div className="py-5 shadow m-4 bg-white grid content-center justify-center hover:text-2xl hover:text-red-600">
            <p className="">Bkash/Credit Card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default paymentOption;
