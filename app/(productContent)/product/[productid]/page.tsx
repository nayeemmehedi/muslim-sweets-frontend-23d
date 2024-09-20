"use client"
import React, { useEffect, useState } from "react";
import ProductDetails from "./product/ProductDetails";
import Rating from "./product/Rating";
import { productId } from "@/app/fetch/product";
import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation'


async function page() {

  const {productid :id} :any = useParams()

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch the product data when the component mounts
    const fetchProduct = async () => {
      const data = await productId(id);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner or message while data is being fetched
  }

  if (!product) {
    return <div>Product not found</div>; // Handle if product data is not found
  }
  


  return (
    <div>
        <div>
          <ProductDetails
            productDetails={product?.data?.value[0]}
          ></ProductDetails>
          <Rating productDetails={product?.data?.value[0]}></Rating>
        </div>
      
    </div>
  );
}

export default page;
