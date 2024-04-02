"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import ProductPayment from "./Product";
import ModalProduct from "@/app/utls/modal/ModalProduct";
import ModalEmail from "@/app/utls/modal/ModelEmail";
import ModalPhone from "@/app/utls/modal/ModalPhone";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/StateManagement/store";
import withAuth from "@/app/useAuth";
import { useRouter } from "next/navigation";
import { IoMdWarning } from "react-icons/io";

function page() {
  const [price, setPrice] = React.useState(0);
  const [status, setStatus] = React.useState(false);

  const order = useSelector((state: RootState) => state.counter.order);
  const product = useSelector((state: RootState) => state.counter.value);

  const [ModalOpen, setModalOpen] = useState(false);
  const toggleModal = (): any => setModalOpen(!ModalOpen);

  const [ModalOpenEmail, setModalOpenEmail] = useState(false);
  const toggleModalEmail = (): any => setModalOpenEmail(!ModalOpenEmail);

  const [ModalOpenPhone, setModalOpenPhone] = useState(false);
  const toggleModalPhone = (): any => setModalOpenPhone(!ModalOpenPhone);

  const router = useRouter();

  useEffect(() => {
    if (product.length > 0) {
      let allprice = product.map((v, item) => v.price * v.qty);
      const sum = allprice.reduce((acc, curr) => acc + curr, 0);
      setPrice(sum);
    }
  }, []);

  let serviceDetails = [
    { name: "Items Total", value: product?.length },
    { name: "Delivery Fee", value: price ? 100 : 0 },
    { name: "Delivery Discount", value: "no" },
    { name: "Total Payment", value: price ? price + 100 : 0 },
  ];

  const cardValue = useSelector((state: RootState) => state.counter.value);
  const cardOrder: any = useSelector((state: RootState) => state.counter.order);

  function placeOder() {
    if (Object.keys(cardOrder).length === 0) {
      setStatus(true);
    } else {
      setStatus(false);

      router.push("/payment-option");
    }
  }

  const userName = localStorage.getItem("username") ?? "User";

  return (
    <div className="bg-zinc-200 ">
      {ModalOpen && (
        <ModalProduct modal={ModalOpen} toggleModal={toggleModal} />
      )}
      {/* {ModalOpenEmail && (
        <ModalEmail modal={ModalOpenEmail} toggleModal={toggleModalEmail} />
      )} */}
      {ModalOpenPhone && (
        <ModalPhone modal={ModalOpenPhone} toggleModal={toggleModalPhone} />
      )}
      <div className="grid grid-cols-5 w-[90%] ml-auto mr-auto">
        <div className="col-span-3 mt-5">
          <div className="mx-8 my-3  p-6 bg-white shadow">
            <p className="font-bold">Deliver to: {userName}</p>

            <div>
              {Object.keys(cardOrder).length > 0 ? (
                <div>
                 <span>
                 Address : {cardOrder?.address?.location},{" "}
                  {cardOrder?.address?.upazila}, {cardOrder?.address?.district} 

                 </span>
                  <span
                      onClick={() => toggleModal()}
                      className="underline text-blue-500 cursor-pointer"
                    >
                       edit
                    </span>{" "}
                </div>
              ) : (
                <div>
                  <div className="font-light my-2">
                    Address: ******{" "}
                    <span
                      onClick={() => toggleModal()}
                      className="underline text-blue-500 cursor-pointer"
                    >
                      edit
                    </span>{" "}
                  </div>
                 
                </div>
              )}
            </div>

            {/* <p className="font-light my-2">
              {" "}
              Email to : boyneel79@gmail.com{" "}
              <span
                onClick={() => toggleModalEmail()}
                className="underline text-blue-500"
              >
                edit
              </span>
            </p> */}

            {Object.keys(cardOrder).length < 1 ? (
              ""
            ) : (
              <div>

                {Object.keys(cardOrder).length > 1 ? (
                  <div>
                    <div>Phone(Optional) : {cardOrder.phone}</div>
                    <span
                      onClick={() => toggleModalPhone()}
                      className="underline text-blue-500"
                    >
                      edit
                    </span>
                  </div>
                ) : (
                  <div className="font-light my-2">
                    {" "}
                    Phone(Optional) : *******{" "}
                    <span
                      onClick={() => toggleModalPhone()}
                      className="underline text-blue-500"
                    >
                      edit
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <ProductPayment value={product}></ProductPayment>
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
                      key={item}
                      className={clsx("flex justify-between text-xs", {
                        "text-lg font-bold my-5": v.name == "Total Payment",
                      })}
                    >
                      <p className="">{v?.name}</p>
                      <p> {v?.value}</p>
                    </div>
                  );
                })}
              </div>

              <p className="font-bold text-xs flex justify-end">
                VAT included, where applicable
              </p>
              <hr className="my-3" />

              <button
                onClick={() => placeOder()}
                className="border border-red-300 hover:border-red-900 px-3 py-2 w-full bg-amber-900 text-white"
              >
                PLACE ORDER{" "}
              </button>
              {status && (
                <div>
                  <div className="py-5 text-red-900 flex">
                    {" "}
                    <IoMdWarning style={{ fontSize: "20px" }} />{" "}
                    <small>Please Add your Address and Phone</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
