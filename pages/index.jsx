import AboutUs from '@/components/home/AboutUs'
import CardSection from '@/components/home/CardSection'
import Collection from '@/components/home/Collection'
import Feature from '@/components/home/Feature'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import Superiority from '@/components/home/Superiority'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection/>
      <Collection />
      <Feature/>
      <Superiority/>
      <AboutUs/>
      <Footer/>
    </>
  )
}
