"use client"

import React from 'react'
import CardDetails from "../../component/CardDetails"
import { useSelector } from 'react-redux';
import { RootState } from '@/app/StateManagement/store';

function page() {
  const  cardValue = useSelector((state: RootState) => state.counter.value);


 
  return (
    <div>
      <CardDetails cardValue={cardValue}></CardDetails>
    </div>
  )
}

export default page