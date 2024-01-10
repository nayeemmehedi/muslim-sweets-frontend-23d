"use client";
import React, { useState } from "react";

function ProductDetails() {
  const [imgtoggle, setImgtoggle] = useState(1);

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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <a href="#" className="hover:underline hover:text-gray-600">
                  Electronics
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span>Headphones</span>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div x-data="{ image: 1 }" x-cloak>
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                      {imgtoggle == 1 && (
                        <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                          <span className="text-5xl">1</span>
                        </div>
                      )}

                      {imgtoggle == 2 && (
                        <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                          <span className="text-5xl">2</span>
                        </div>
                      )}

                      {imgtoggle == 3 && (
                        <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                          <span className="text-5xl">3</span>
                        </div>
                      )}

                      {imgtoggle == 4 && (
                        <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                          <span className="text-5xl">4</span>
                        </div>
                      )}
                    </div>

                    {/* <div className="flex -mx-2 mb-4">
                    <template x-for="i in 4">
                <div className="flex-1 px-2">
                 
                </div>
              </template>
                  </div> */}

                    <div>
                      <div className="flex gap-4">
                        <div
                          onClick={() => setImgtoggle(1)}
                          className="w-[80px] h-[80px] border shadow-md hover:border-red-300"
                        >
                          1
                        </div>
                        <div
                          onClick={() => setImgtoggle(2)}
                          className="w-[80px] h-[80px] border shadow-md hover:border-red-300"
                        >
                          2
                        </div>
                        <div
                          onClick={() => setImgtoggle(3)}
                          className="w-[80px] h-[80px] border shadow-md hover:border-red-300"
                        >
                          3
                        </div>
                        <div
                          onClick={() => setImgtoggle(4)}
                          className="w-[80px] h-[80px] border shadow-md hover:border-red-300"
                        >
                          4
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                    Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
                  </h2>

                  <div className="flex items-center space-x-4 my-4">
                    <div>
                      <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                        <span className="text-yellow-800 mr-1 mt-1">$</span>
                        <span className="font-bold text-yellow-800 text-3xl">
                          25
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-red-400 text-xl font-semibold">
                        Save 12%
                      </p>
                      <p className="text-gray-400 text-sm">
                        Inclusive of all Taxes.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-500">
                    Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                    Vitae exercitationem porro saepe ea harum corrupti vero id
                    laudantium enim, libero blanditiis expedita cupiditate a
                    est.
                  </p>

                  <div className="flex py-4 space-x-4">
                    <div className="relative">
                      <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                        Qty
                      </div>
                      <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>

                      <svg
                        className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                        />
                      </svg>
                    </div>

                    <button
                      type="button"
                      className="h-14 px-6 py-2 font-semibold rounded-xl bg-yellow-900 hover:bg-indigo-500 text-white w-1/3"
                    >
                      Add to Cart
                    </button>
                  </div>
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
