import React from "react";
import sweet from "/public/img/sweets/sweets2.jpg";
import Image from "next/image";

function AboutUs() {
  return (
    <div  >
      <div className="h-[200px] w-full bg-rose-900 grid content-center ">
        <p className="ms-10 mt-10 text-5xl font-bold text-white ">About Us</p>
      </div>
      <div className="w-[70%] ml-auto mr-auto py-10">
        <div className="flex">
         <div>
         <Image src={sweet} alt="" width={800} height={300}></Image>
         </div>

          <div className="ms-6">
            <p className="text-2xl font-bold text-red-300">Muslim Sweets Lohagora</p>
            <p>
              {" "}

              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis impedit necessitatibus eos eius iure hic rem enim ex
              deserunt itaque nostrum numquam, eum perspiciatis ducimus
              temporibus incidunt rerum quasi dolorem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
