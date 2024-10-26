// import React from "react";
// import ProductDetails from "./product/ProductDetails";
// import Rating from "./product/Rating";



// async function fetchProduct(id:any) {
  
//   const res = await fetch(`https://muslim-sweets-backend.onrender.com/api/v1/product/${id}`, { cache: 'no-store' });
//   if (!res.ok) {
//    <div>Problem occures Product Id</div>
    
//   }
//   return res.json();
// }

// async function page({params}:any) {

//   const { productid } = params;
//   const { data } = await fetchProduct(productid);

//   return (
//     <div>
//         <div>
//           <ProductDetails
//             productDetails={data?.value[0]}
//           ></ProductDetails>
//           <Rating productDetails={data?.value[0]}></Rating>
//         </div>
      
//     </div>
//   );
// }

// export default page;
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import ProductDetails from "./product/ProductDetails";
import Rating from "./product/Rating";

function ProductPage() {
  const {productid} = useParams();

  console.log("productid",productid)

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct(id:any) {
      if (!id) return; // Ensure `id` is available before fetching

      try {
        const res = await fetch(`https://muslim-sweets-backend.vercel.app/api/v1/product/${id}`, {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data?.data?.value[0]);
      } catch (error:any) {
        console.error("Error fetching product:", error);
        setError(error.message);
      }
    }

    fetchProduct(productid);
  }, [productid]);

  if (error) {
    return <div className="text-red-500">Problem occurred while fetching the product.</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProductDetails productDetails={product} />
      <Rating productDetails={product} />
    </div>
  );
}

export default ProductPage;
