import React from 'react'

export default function Hero() {
  return (
    <section>
      <div className="hero min-h-[calc(100vh-67px)] bg-[url('../public/Rectangle-33.png')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center text-neutral-content">
          <div className="">
            <h4 className="mb-5 text-4xl">Helping Others</h4>
            <h1 className="mb-5 text-7xl">EXPLORE JAPAN</h1>
            <p className="mb-5 text-2xl">
              Travel to The Most Beautiful Places in Japan
            </p>
            <button className="btn btn-secondary">Booking Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}
