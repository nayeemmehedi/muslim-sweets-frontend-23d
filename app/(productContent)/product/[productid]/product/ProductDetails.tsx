import ProductDetailButton from "@/app/(clientButton)/ProductDetailButton";
import { productId } from "@/app/fetch/product";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
// import { useRouter } from "next/navigation";

function ProductDetails({ productDetails }: any) {
  return (
    <div>
      <div>
        <div className="antialiased">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span className="hover:underline hover:text-gray-600">
                  Home
                </span>

                <span>
                  <IoIosArrowForward></IoIosArrowForward>
                </span>
                <span>Product</span>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div>
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                      <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                        <Image
                          src={productDetails?.imgUrl}
                          // layout="responsive"
                          width={400}
                          height={300}
                          alt="Picture"
                          loading="lazy"
                          className="object-cover w-full h-full"
                        />
                        {/* // style={{ maxWidth: "400px", maxHeight: "320px" }} */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                    {productDetails?.englishName} / {productDetails?.banglaName}
                  </h2>

                  <div className="flex items-center space-x-4 my-4">
                    <div>
                      <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                        <span className="text-yellow-800 mr-1 mt-1">৳</span>
                        <span className="font-bold text-yellow-800 text-3xl">
                          {productDetails?.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500">{productDetails?.description}</p>

                  <ProductDetailButton
                    productDetails={productDetails}
                  ></ProductDetailButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
