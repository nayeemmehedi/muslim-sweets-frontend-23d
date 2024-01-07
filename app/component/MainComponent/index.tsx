import React from 'react'
import SlideShow from '../Navabar/SlideShow'
import PatisserieProduct from '../ServiceDescription/PatisserieProduces'
import Unique from '../ServiceDescription/Unique'
import OnlineStore from '../ServiceDescription/OnlineStore'
import Testimonial from '../ServiceDescription/Testimonial'

function MainComponent() {
  return (
    <div className=''>
         <SlideShow></SlideShow>
         <PatisserieProduct></PatisserieProduct>
         <Unique></Unique>
         <OnlineStore></OnlineStore>
         <Testimonial></Testimonial>
    </div>
  )
}

export default MainComponent