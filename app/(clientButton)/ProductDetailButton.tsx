"use client";

import React, { useState } from "react";
import { Button, Form, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../StateManagement/store";
import { useRouter } from "next/navigation";
import { productRedux } from "../StateManagement/counterSlice";
import clsx from "clsx";

function ProductDetailButton({ productDetails }: any) {
  const [number, setnumber] = useState<any>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  let onFinish = (values: any) => {
    setnumber(true);

    const value = values.InputNumber;
    const name = {
      banglaName: productDetails.banglaName,
      englishName: productDetails.englishName,
      imgUrl: productDetails.imgUrl,
      rating: productDetails.rating,
      price: productDetails.price,
      qty: value,
    };

    let product = { ...name };

    dispatch(productRedux(product));

    setnumber(false);

    router.push("/card");
  };

  return (
    <div className="py-5">
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Qty"
          name="InputNumber"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber min={1} max={20} />
        </Form.Item>

        <Form.Item label=" ">
          <Button
            className={clsx(
              "text-white border border-green-700 bg-amber-700 w-[40%] py-5 flex justify-center items-center",
              { "cursor-not-allowed": number }
            )}
            htmlType="submit"
            // onClick={goToCard}
          >
            Go to Card
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ProductDetailButton;
