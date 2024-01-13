"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import ProductPayment from "./Product";
import ModalProduct from "@/app/utls/modal/ModalProduct";
import ModalEmail from "@/app/utls/modal/ModelEmail";
import ModalPhone from "@/app/utls/modal/ModalPhone";
import Link from "next/link";

function page() {
  const [value, setValue] = useState(false);

  let serviceDetails = [
    { name: "Items Total", tk: 169 },
    { name: "Delivery Fee", tk: 169 },
    { name: "Delivery Discount", tk: 169 },
    { name: "Total Payment", tk: 169 },
  ];

  const card = {
    image: "/public/chomchom.jpg",
    name: "Chomchom",
    banglaName: "কাটারী ভোগ",
    price: 40,
    rating: 4,
    available: "Unavailable",
    availableTime: "6AM-12PM",
  };

  const [ModalOpen, setModalOpen] = useState(false);
  const toggleModal = (): any => setModalOpen(!ModalOpen);

  const [ModalOpenEmail, setModalOpenEmail] = useState(false);
  const toggleModalEmail = (): any => setModalOpenEmail(!ModalOpenEmail);

  const [ModalOpenPhone, setModalOpenPhone] = useState(false);
  const toggleModalPhone = (): any => setModalOpenPhone(!ModalOpenPhone);

  return (
    <div className="bg-zinc-200 ">
      {ModalOpen && (
        <ModalProduct modal={ModalOpen} toggleModal={toggleModal} />
      )}
      {ModalOpenEmail && (
        <ModalEmail modal={ModalOpenEmail} toggleModal={toggleModalEmail} />
      )}
      {ModalOpenPhone && (
        <ModalPhone modal={ModalOpenPhone} toggleModal={toggleModalPhone} />
      )}
      <div className="grid grid-cols-5 w-[90%] ml-auto mr-auto">
        <div className="col-span-3 mt-5">
          <div className="mx-8 my-3  p-6 bg-white shadow">
            <p className="font-bold">Deliver to: nayeem</p>
            <p className="font-light my-2">
              Address: Dhaka{" "}
              <span
                onClick={() => toggleModal()}
                className="underline text-blue-500 cursor-pointer"
              >
                edit
              </span>{" "}
            </p>
            <p className="font-light my-2">
              {" "}
              Email to : boyneel79@gmail.com{" "}
              <span
                onClick={() => toggleModalEmail()}
                className="underline text-blue-500"
              >
                edit
              </span>
            </p>

            <p className="font-light my-2">
              {" "}
              Phone : 01756564463{" "}
              <span
                onClick={() => toggleModalPhone()}
                className="underline text-blue-500"
              >
                edit
              </span>
            </p>
          </div>

          <div>
            <ProductPayment value={card}></ProductPayment>
          </div>
        </div>

        <div className="col-span-2 ">
          <div className="my-8 p-6 bg-white shadow">
            <div className="my-6">
              <p className="text-sm font-bold my-2 ">Discount and Payment</p>
              <div className="flex justify-between text-xs ">
                <p>Promo Code</p>
                <p>
                  ffdr<span className="blur-sm">backdrop-blur-xl</span>
                </p>
              </div>
            </div>
            <hr />

            <div>
              <div className="font-bold"> Order Summary</div>

              <div className="my-4">
                {serviceDetails.map((v, item): any => {
                  return (
                    <div
                      className={clsx("flex justify-between text-xs", {
                        "text-lg font-bold my-5": v.name == "Total Payment",
                      })}
                    >
                      <p className="">{v.name}</p>
                      <p>৳ {v.tk}</p>
                    </div>
                  );
                })}
              </div>

              <p className="font-bold text-xs flex justify-end">
                VAT included, where applicable
              </p>
              <hr className="my-3" />

             <Link href="payment-option">
             <button className="border border-red-300 hover:border-red-900 px-3 py-2 w-full bg-amber-900 text-white">
                PLACE ORDER{" "}
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
