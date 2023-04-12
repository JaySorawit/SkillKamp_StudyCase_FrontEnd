import React from 'react'
import ImageSlider from './Imageslide'
import { Title } from '../styles/style'
// import ProductSlider from './ProductSlider'

function Home() {
  return (
    <div>
      <ImageSlider/>
      <div className="box"></div>
      <Title>New Arrivals </Title>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div> 
      {/* <ProductSlider/> */}
    </div>
  )
}

export default Home