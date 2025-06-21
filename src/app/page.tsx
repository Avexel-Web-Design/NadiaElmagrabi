import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import BodyGraphChart from './components/BodyGraphChart'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <BodyGraphChart />
      <Services />
      <Contact />
    </div>
  )
}
