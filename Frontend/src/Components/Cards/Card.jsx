import React from 'react'
import './card.css'
function Card() {
    const cardImage = '/Asset/HomeCheck.jpg'
     const cardImage1 = '/Asset/Gas.webp'
      const cardImage2 = '/Asset/Electric.webp'
  return (
    <div className='Card'>
    <div className='card'>
        <img src={cardImage}/>
        <h5>
            Home Health Check
        </h5>
    </div>
     <div className='card'>
     <img src={cardImage1}/>
     <h5>
        Gas
     </h5>
 </div>
  <div className='card'>
  <img src={cardImage2}/>
  <h5>
      EV Charging
  </h5>
</div>
</div>
  )
}

export default Card