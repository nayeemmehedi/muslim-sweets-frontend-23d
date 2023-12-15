import React from 'react'
import SlideShow from '../Navabar/SlideShow'
import PatisserieProduct from '../ServiceDescription/PatisserieProduces'
import Unique from '../ServiceDescription/Unique'
import OnlineStore from '../ServiceDescription/OnlineStore'

function MainComponent() {
  return (
    <div className=''>
         <SlideShow></SlideShow>
         <PatisserieProduct></PatisserieProduct>
         <Unique></Unique>
         <OnlineStore></OnlineStore>
    </div>
  )
}

export default MainComponent