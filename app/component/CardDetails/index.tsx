import React from "react";
import AddCard from "./CardItem/AddCard";
import OderSummery from "./CardItem/OderSummery";

function index() {
  const card = {
    image: "/public/chomchom.jpg",
    name: "Chomchom",
    banglaName: "কাটারী ভোগ",
    price: 40,
    rating: 4,
    available: "Unavailable",
    availableTime: "6AM-12PM",
  };

  return (
    <div className="bg-zinc-200">
      <div className="w-[95%] ml-auto mr-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <AddCard value={card}></AddCard>
          </div>
          <div className="">
            <OderSummery></OderSummery>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
