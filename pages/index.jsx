import CardSection from '@/components/CardSection'
import Collection from '@/components/Collection'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection/>
      <Collection />
    </>
  )
}
