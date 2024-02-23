import React from "react";
import { Rate } from "antd";
import { CiStar } from "react-icons/ci";
import { IconContext } from "react-icons";
import { IoMdStar } from "react-icons/io";
import { productId } from "@/app/fetch/product";

async function Rating({ id }: any) {
  const product = await productId(id);
  let productDetails = product.data.value[0];
  let rating = productDetails.rating;

  return (
    <div className="w-[85%] ml-auto mr-auto my-10 ">
      <div className="flex">
        <div>
          <div className="flex items-center my-3">
            <p className="text-4xl">{rating}</p>
            <p className=" ">
              {" "}
              <p className="text-white bg-yellow-400 flex items-center w-[120px] h-auto ms-2 px-1">
                <IoMdStar color="white" className=""></IoMdStar>
                <p className="ps-2">
                  {rating > 4.5
                    ? "Excelent"
                    : rating > 4.3 && rating < 4.5
                    ? "Very Good"
                    : "Good"}
                </p>
              </p>{" "}
            </p>
          </div>
          <Rate disabled defaultValue={rating} />
        </div>

        <div className="ps-10">
          <Rate disabled defaultValue={5} /> <br />
          <Rate disabled defaultValue={4} />
          <br />
          <Rate disabled defaultValue={3} />
          <br />
          <Rate disabled defaultValue={2} />
          <br />
          <Rate disabled defaultValue={1} />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Rating;
