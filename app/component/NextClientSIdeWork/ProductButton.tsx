import React from "react";

function ProductButton() {
  return (
    <div className="flex justify-center my-1">
      {" "}
      <button className="border border-red-600 text-red-500 hover:text-blue-500 hover:border-blue-400  p-1  w-full  m-3 rounded-md  ">
        Order Here
      </button>
    </div>
  );
}

export default ProductButton;
