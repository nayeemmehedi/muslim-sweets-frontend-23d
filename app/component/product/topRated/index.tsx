import React from "react";
import Image from "next/image";
// import getProduct from "@/app/fetch/product";

async function Toprate() {
  const product = [
    {
      image: "/chomchom.jpg",
      name: "Chomchom",
      banglaName: "কাটারী ভোগ",
      price: 40,
      rating: 4,
      available: "Unavailable",
      availableTime: "6AM-12PM",
    },
    {
      image: "/chomchom.jpg",
      name: "Chomchom",
      banglaName: "কাটারী ভোগ",
      price: 40,
      rating: 4,
      available: "Unavailable",
      availableTime: "6AM-12PM",
    },
    {
      image: "/chomchom.jpg",
      name: "Chomchom",
      banglaName: "কাটারী ভোগ",
      price: 40,
      rating: 4,
      available: "Unavailable",
      availableTime: "6AM-12PM",
    },
  ];
  // const product = await getProduct()

  return (
    <div>
      {product.map((p) => (
        <div className="rounded-md shadow-md border hover:shadow-xl hover:border-red-950 hover:bg-teal-950 my-4 max-w-40 max-h-40 flex hover:text-stone-100">
          <Image
            className="rounded-md"
            src={p.image}
            width={100}
            height={100}
            alt="Unavailable"
          ></Image>
          <div className="ps-3">
            <p> {p.name}</p>
            <p>৳ {p.price}</p>
            <p> rating: {p.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toprate;
