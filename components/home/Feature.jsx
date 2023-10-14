import React from 'react'
import data from '../../data/data.json'

export default function Feature() {
  const { feature } = data
  return (
    <section className="max-w-screen-xl mx-auto my-10 px-8">
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-items-center gap-10">
      {feature && feature.map((dt, i) => {
            return (
              <div className="card glass shadow-xl" key={i}>
                <figure><img alt={i} src={dt.src} /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{dt.name}</h2>
                    <p>Search {dt.name} & Places Hire to our most popular destinations</p>
                    <div className="card-actions">
                        <button className="btn btn-secondary"><img src="/images/paper-plane.png" alt={i} /> Show {dt.name}</button>
                    </div>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
