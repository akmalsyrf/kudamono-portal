import React from 'react'

export default function CardCarousel({src, idx}) {
  return (
    <div className="carousel-item card w-96" id={`slide${idx}`}>
        <figure><img src={src} alt={idx} /></figure>
    </div> 
  )
}
