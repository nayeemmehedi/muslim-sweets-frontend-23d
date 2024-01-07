"use client";

import React from "react";
import { Button, Input, Space } from "antd";

function OderSummery() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <div>
      <div className="m-4 p-4 bg-white">
        <div>
          <p className="text-2xl py-3">Order Summary</p>
          <hr />
          <div className="flex justify-between py-3">
            <p> Subtotal (8 items)</p>
            <p>৳ 924</p>
          </div>
          <div className="flex justify-between py-3">
            <p>Shipping Fee</p>
            <p>৳ 138</p>
          </div>

          <hr />

          <div className="flex justify-end py-3  ">
            <Space direction="horizontal">
              <Input className="w-[250px]" placeholder="Input Coupon" />
              <Button style={{ width: 80 }}>APPLY</Button>
            </Space>
          </div>

          <div className="flex justify-between py-3">
            <p>Total</p>
            <p className="text-orange-300">৳ 1,062</p>
          </div>
          <div className="my-4">
            <button className="w-full py-2 border  border-red-500 text-red-400 hover:text-blue-600">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OderSummery;
