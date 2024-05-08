import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductButton from "../../NextClientSIdeWork/ProductButton";

async function MainProduct({ product }: any) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 mx-10 my-6 ">
        {product?.data?.value.map((p: any, item: any) => (
          <div
            key={item}
            className="shadow-lg hover:shadow-2xl rounded-md grid content-between "
          >
            <div>
              <Image
                className="rounded-md "
                src={p?.imgUrl}
                width={350}
                height={150}
                alt="Unavailable"
                style={{ maxHeight: "150px", objectFit: "contain" }}
              ></Image>

              <div className="flex justify-between content-center p-5">
                <div>
                  <p className="text-rose-950 text-lg">{p?.englishName}</p>
                  <p className="text-amber-500">{p?.banglaName}</p>

                  <p className="text-black mt-3">৳ {p?.price}</p>
                </div>
                <div className="self-center">
                  <p>Rating: {p?.rating}</p>
                </div>
              </div>
            </div>
            <Link href={`/product/${p?._id}`}>
              <ProductButton></ProductButton>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainProduct;
