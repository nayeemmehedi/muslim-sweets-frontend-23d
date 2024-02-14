"use client";

import React, { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../StateManagement/store";

function ProductDetailButton({ productDetails }: any) {
  const [number, setnumber] = useState(1);

  const onChange = (value: any): any => {
    setnumber(value);
  };

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const GotoCard = () => {
    if (number === null) {
      setnumber(1);
    }
    console.log("dekhi ki", number);
  };

  return (
    <div className="py-5">
      <Form layout="vertical">
        <Form.Item
          label="Qty"
          name="InputNumber"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber min={1} max={20} defaultValue={1} onChange={onChange} />
        </Form.Item>

        <Form.Item label=" ">
          <Button
            className="text-white border border-green-700 bg-amber-700 w-[40%] py-5 flex justify-center items-center"
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
