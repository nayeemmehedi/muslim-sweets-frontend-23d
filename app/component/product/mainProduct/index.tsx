import Image from "next/image";
import React from "react";

function MainProduct() {
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
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 mx-10 my-6">
        {product.map((p) => (
          <div className="shadow-lg hover:shadow-2xl ">
            <Image
              src={p.image}
              width={350}
              height={150}
              alt="Unavailable"
            ></Image>

            <div className="flex justify-between content-center p-5">
              <div>
                <p className="text-amber-500 text-lg">{p.name}</p>
                <p className="text-amber-500">{p.banglaName}</p>

                <p className="text-black">৳ {p.price}</p>
                <p>Rating: {p.rating}</p>
              </div>
              <div className="self-center">
                <p className="text-teal-950">{p.available}</p>
                <p>{p.availableTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainProduct;
