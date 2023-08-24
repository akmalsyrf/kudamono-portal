import React from 'react'
import CardCarousel from './ui/CardCarousel'
import data from '../data/data.json'

export default function CardSection() {
  const { promo } = data
  return (
    <section className="max-w-screen-xl mx-auto my-10 px-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-medium">Promo</h1>
      </div>
      <div className="py-10 justify-items-center gap-10">
        <div className="carousel carousel-center w-full">
            {promo && promo.map((src, i) => 
                <CardCarousel src={src} idx={i} key={i}/>
            )}
        </div>
      </div>
    </section>
  )
}
