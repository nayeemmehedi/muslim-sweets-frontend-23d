"use client";

import React, { useState } from "react";

function ProductButton() {
  const [value,setValue] = useState(false)

  function productLoading(){
    setValue(!value)
  }

  return (
    <div className="flex justify-center my-1">
      {" "}
      <button className="border border-red-600 text-red-500 hover:text-green-500 hover:border-green-400  p-1  w-full  m-3 rounded-md ">
        <div className="text-blue-700" onClick={productLoading}>{value?"Loading...":"Product Details"}</div>
      </button>
    </div>
  );
}

export default ProductButton;
