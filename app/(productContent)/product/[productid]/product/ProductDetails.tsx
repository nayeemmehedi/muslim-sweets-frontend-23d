import ProductDetailButton from "@/app/(clientButton)/ProductDetailButton";
import { productId } from "@/app/fetch/product";
import Image from "next/image";
// import { useRouter } from "next/navigation";

async function ProductDetails({ params }: { params: { productid: any } }) {

  const { productid } = params;

  const product = await productId(productid);
  let productDetails = product?.data?.value[0];


  if (!productDetails) {
    return <div className="text-center text-red-400 text-2xl">Product not found</div>;
  }

 

  // console.log("saepected product", productDetails);

  return (
    <div>
      <div>
        <div className="antialiased">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <a href="#" className="hover:underline hover:text-gray-600">
                  Home
                </a>

                <span>
                  <svg
                    className="h-5 w-5 leading-none text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span>Product</span>
              </div>
            </div>

           { productDetails ?  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div x-data="{ image: 1 }" x-cloak>
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                      <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                        <Image
                          src={productDetails?.imgUrl}
                          width={400}
                          height={400}
                          alt="Picture"
                          style={{ maxHeight: "320px" }}
                        />
                      </div>
                    </div>

                    {/* <div className="flex -mx-2 mb-4">
                    <template x-for="i in 4">
                <div className="flex-1 px-2">
                 
                </div>
              </template>
                  </div> */}
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
            </div> : "Loading .."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
