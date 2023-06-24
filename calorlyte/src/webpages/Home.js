import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonal from '../components/Testimonal'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonal class="mt-20"/>
      <Footer />
    </div>
  )
}
