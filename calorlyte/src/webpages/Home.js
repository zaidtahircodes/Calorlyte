import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonal from '../components/Testimonal'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonal class="mt-20"/>
    </div>
  )
}
