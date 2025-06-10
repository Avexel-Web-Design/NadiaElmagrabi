import Biography from '../components/about/Biography'
import Background from '../components/about/Background'
import Education from '../components/about/Education'
import Reviews from '../components/about/Reviews'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Biography />
      <Background />
      <Education />
      <Reviews />
    </main>
  )
}
