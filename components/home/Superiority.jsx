import React from 'react'
import data from '../../data/data.json'

export default function Superiority() {
  const { superiority } = data
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center flex gap-5 px-14">
    {superiority && superiority.map((dt, i) => {
        return (
            <div className="px-8 sm:py-6">
                <div className="flex justify-center items-center">
                    <img src={dt.src} alt="" />
                </div>
                <h2 className="text-2xl text-center">{dt.name}</h2>
                <p className="text-center">{dt.desc}</p>
            </div>
        )
    })}
    </div>
  )
}
