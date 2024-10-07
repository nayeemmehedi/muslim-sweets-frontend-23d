import React from "react";
import ProductDetails from "./product/ProductDetails";
import Rating from "./product/Rating";



async function fetchProduct(id:any) {
  
  const res = await fetch(`https://muslim-sweets-backend.onrender.com/api/v1/product/${id}`, { cache: 'no-store' });
  if (!res.ok) {
   <div>Problem occures Product Id</div>
    
  }
  return res.json();
}

async function page({params}:any) {

  const { productid } = params;
  const { data } = await fetchProduct(productid);

  return (
    <div>
        <div>
          <ProductDetails
            productDetails={data?.value[0]}
          ></ProductDetails>
          <Rating productDetails={data?.value[0]}></Rating>
        </div>
      
    </div>
  );
}

export default page;
