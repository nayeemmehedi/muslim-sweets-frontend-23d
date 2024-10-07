import React from 'react'
import dynamic from 'next/dynamic'
import TopRated from '../ServiceDescription/TopRated'

const SlideShow = dynamic(() => import("../Navabar/SlideShow"))
const PatisserieProduct = dynamic(() => import('../ServiceDescription/PatisserieProduces'))
const Unique = dynamic(() => import('../ServiceDescription/Unique'))
const OnlineStore = dynamic(() => import('../ServiceDescription/OnlineStore'))
const Testimonial = dynamic(() => import('../ServiceDescription/Testimonial'))

function MainComponent() {
  return (
    <div className=''>
         <SlideShow></SlideShow>
         <PatisserieProduct></PatisserieProduct>
         <Unique></Unique>
         <OnlineStore></OnlineStore>
         <TopRated></TopRated>

         <Testimonial></Testimonial>


        
    </div>
  )
}

export default MainComponent
