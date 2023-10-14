import React from 'react'

export default function AboutUs() {
  return (
    <section className="max-w-screen-xl mx-auto my-10 px-8">
      <div className="text-start flex-auto">
        <h1 className="text-2xl md:text-4xl font-medium">About Us</h1>
        <p className="text-xl mt-3">The best travel agency for you</p>
      </div>
      <div className="md:flex lg:flex">
        <div className="prose py-5">
          <p>We are a company engaged in the Travel Business and Relations between Japan and Indonesia. The track record of making this Travel was started by Japanese Literature Graduates who had relationships with Japanese companies and campuses.</p>
        </div>
        <div className="flex justify-center items-center">
          <div className=""></div>
          <div className="">
            <img src="/images/about-us.png" alt="about-us" />
          </div>
        </div>
      </div>
    </section>
  )
}
