import React from 'react'
import header from "../Img/header.png"
export default function herosection() {
  return (
    <div >
   <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner header">
    <div className={`carousel-item active `}>
      <img src={header} className="d-block w-100 " alt="..." />
    </div>
   </div>
</div>
    </div>
  )
}
