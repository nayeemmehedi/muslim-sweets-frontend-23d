"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineAlignRight } from "react-icons/ai";
import { GiWrappedSweet } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { TbUserSearch } from "react-icons/tb";
import { TbShoppingCartSearch } from "react-icons/tb";
import Link from "next/link";

const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

function navResponsive() {
  let NavValue = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/product" },
    { name: "About Us", link: "/aboutUs" },
    { name: "Contacts", link: "/contact-us" },
  ];

  const [toggle, setToggle] = useState(false);

  function clickToggle() {
    setToggle(!toggle);
  }

  return (
    // 14100b
    <div className="bg-[#14100b]">
      <div className="">
        <div className=" text-white">
          <div className="flex justify-between items-center w-[92%]  mx-auto">
            <div>
              <div className={dancing_Script.className}>
                <div className="py-4 ">
                  <div className="flex flex-row">
                    <p className="font-thin text-2xl">Muslim Sweets</p>
                    <div>
                      {" "}
                      <GiWrappedSweet className="text-amber-400"></GiWrappedSweet>
                    </div>
                  </div>

                  <small className="text-amber-400">Sweets & Chocolets</small>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "nav-links duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0  md:w-auto  w-full flex items-center px-5",
                {
                  "top-[-100%]": toggle == false,
                  "top-[30%]  bg-stone-800 text-white": toggle == true,
                }
              )}
            >
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                {NavValue?.map((nav, i) => (
                  <li key={i}>
                    <a className="hover:text-gray-500" href="#">
                      <Link href={nav.link}> {nav.name}</Link>

                      <span className="text-xs font-thin text-amber-400">
                        +
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-6 text-amber-300 ">
              {/* <IoSearch size={22} /> */}
             <Link href={"/login"}> <TbUserSearch size={22} /></Link>
             <Link href={"/card"}> <TbShoppingCartSearch size={22} /></Link>

              

              <div
                onClick={clickToggle}
                className="text-3xl cursor-pointer md:hidden"
              >
                {toggle ? (
                  <AiOutlineClose></AiOutlineClose>
                ) : (
                  <AiOutlineAlignRight></AiOutlineAlignRight>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navResponsive;
