import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Testimonal from "./components/Testimonal"
import Features from "./components/Features"
export default function Home() {
  return (
<main className="bg-gray-900">
<Navbar/>
<Hero />
<Features/>
<Testimonal/>
<Footer/>
</main>
  )
}
