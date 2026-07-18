import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Restaurants from '@/components/Restaurants'
import Order from '@/components/Order'
import Why from '@/components/Why'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Restaurants />
        <Order />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  )
}