import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ContentHome from "./components/ContentHome"
import Testimonal from "./components/Testimonal"
import Features from "./components/Features"
import StatisticsHome from "./components/StatisticsHome"
export default function Home() {
  return (
<main className="bg-gray-900">
<Navbar/>
<Hero />
<ContentHome/>
<Features/>
<StatisticsHome />
<Testimonal/>
<Footer/>
</main>
  )
}
