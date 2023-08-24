import Image from 'next/image'
import React from 'react'
import data from '../data/data.json'

export default function Collection() {
  const { popularDestination } = data
  return (
    <section className="max-w-screen-xl mx-auto my-10 px-8">
      <div className="flex">
        <div className="text-start flex-auto">
          <h1 className="text-2xl md:text-4xl font-medium">Popular Destination</h1>
          <p className="text-sm mt-3">Search Flights & Places Hire to our most popular destinations</p>
        </div>
        <div className="text-end flex-auto">
          <button className="btn">See all places</button>
        </div>
      </div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-10">
        {popularDestination && popularDestination.map((dest, i) => {
            return (
              <div className="card glass shadow-xl" key={i}>
                <figure><img alt={i} src={dest.src} /></figure>
                <div className="card-body">
                  <p className="card-title uppercase">{dest.name}</p>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
