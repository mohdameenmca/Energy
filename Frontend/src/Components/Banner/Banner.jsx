import React from 'react'
import './banner.css'
// import BannerImg from '/Asset/house.webp'
function Banner() {
  const divStyle = '/Asset/house.webp'

  return (
    <div className='banner' >
      <div className='content'>
    <h2>
    Lower your energy bills with our fixed tariffs
    </h2>
    <h5>
    The Ofgem price cap rose on the 1st April. Avoid future price rises by switching to a fixed tariff with us. Plus, sign up for PeakSave and you could save even more - with half-price electricity every Sunday.1
    </h5>
    </div>
    <img src={divStyle}/>
  </div>
  )
}

export default Banner