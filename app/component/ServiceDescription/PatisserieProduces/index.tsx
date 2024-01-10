import React from "react";
import { Dancing_Script } from "next/font/google";
import { IoLanguageOutline } from "react-icons/io5";

const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

function PatisserieProduct() {
  return (
    <div className={dancing_Script.className}>
      <div className="pt-5 bg-[#9D8F8F]">
        <p className="text-3xl text-white text-center">
          WELCOME <span className="text-red-800">TO</span> MUSLIM SWEETS
          <br />
          <span>& Chocolets</span>
        </p>
        <hr className="mt-10 w-1/2 ml-auto mr-auto" />
      </div>

      <div className="">
        <div className="relative ">
          <div className="body1 bg-[#14100b] ">
            <div className="blurred-image-container ">
              <img
                className="blurred-image"
                src="./food.jpg"
                alt="Blurred Image"
              />
            </div>
          </div>
          <div className="flex content1 ">
            <div className="text-white basis-[40%]">
              <div>
                <p className="text-xl">
                  Our patisserie produces{" "}
                  <span className="text-amber-300">unique sweets </span> for
                  lovers of yummy.Excellent product quality, upscale
                  presentation & uncompromised service
                </p>

                <p className="my-8 text-xl ">
                  Excellent product quality, upscale presentation &
                  uncompromised service eventually built its own momentum,
                  through referrals.
                </p>
                <p className="">
                  {" "}
                  Otherwise, your identity as our patron, would be vague and{" "}
                  <span className="text-amber-400">
                    {" "}
                    the brand would become commoditized.
                  </span>
                </p>

                <p className="mt-8 text-3xl">
                  Learn More <span className="text-red-500">About Us</span>....
                </p>
              </div>
            </div>
            <div className="basis-[30%]"></div>

            <div className=" basis-[40%]">
              <section>
                <div className="flex">
                  <div>
                    <IoLanguageOutline className="text-amber-300" size={50} />
                  </div>
                  <div className="text-white ms-4">
                    <p className="text-xl">Natural Organic Product.</p>
                    <p className="my-2">
                      Vivamus vel magna non mi gravida ultr sed ut turpis.
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <div className="flex my-10">
                  <div>
                    <IoLanguageOutline className="text-amber-300" size={50} />
                  </div>
                  <div className="text-white ms-4">
                    <p className="text-xl">Natural Organic Product.</p>
                    <p>Vivamus vel magna non mi gravida ultr sed ut turpis.</p>
                  </div>
                </div>
              </section>
              <section>
                <div className="flex">
                  <div>
                    <IoLanguageOutline className="text-amber-300" size={50} />
                  </div>
                  <div className="text-white ms-4">
                    <p className="text-xl">Natural Organic Product.</p>
                    <p>Vivamus vel magna non mi gravida ultr sed ut turpis.</p>
                  </div>
                </div>
              </section>

              <div className="text-white mt-6 text-3xl">
                Quality 100% <span className="text-amber-300"> Pure...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatisserieProduct;
