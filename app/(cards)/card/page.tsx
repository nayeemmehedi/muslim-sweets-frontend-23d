"use client";

import React from "react";
import CardDetails from "../../component/CardDetails";
import { useSelector } from "react-redux";
import { RootState } from "@/app/StateManagement/store";
import withAuth from "@/app/useAuth";
import { usePathname } from "next/navigation";

function page() {
  const cardValue = useSelector((state: RootState) => state.counter.value);
  let value=10
//  const pathname = usePathname()

//  console.log("pa",pathname)
  return (
    <div>
      <CardDetails cardValue={cardValue}></CardDetails>
    </div>
  );
}

export default withAuth(page) ;
