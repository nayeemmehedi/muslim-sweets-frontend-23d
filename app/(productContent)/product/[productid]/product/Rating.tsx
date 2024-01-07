import React from "react";
import { Rate } from "antd";
import { CiStar } from "react-icons/ci";
import { IconContext } from "react-icons";
import { IoMdStar } from "react-icons/io";

const Rating: React.FC = () => (
 <div className="w-[85%] ml-auto mr-auto my-10 ">
   <div className="flex">
    <div>
    <div className="flex items-center my-3">
      <p className="text-4xl">4.7</p>
      <p className=" ">
        {" "}
        <p className="text-white bg-yellow-400 flex items-center w-[120px] h-auto ms-2 px-1">
          <IoMdStar color="white" className=""></IoMdStar>
          <p className="ps-2">Excelent</p>
        </p>{" "}
      </p>
    </div>
    <Rate disabled defaultValue={4.7} />
    </div>

    <div className="ps-10">

    <Rate disabled defaultValue={5} /> <br />
    <Rate disabled defaultValue={4} /><br />
    <Rate disabled defaultValue={3} /><br />
    <Rate disabled defaultValue={2} /><br />
    <Rate disabled defaultValue={1} /><br />

    </div>
  </div>
 </div>
);
export default Rating;
