import Biography from '../components/about/Biography'
import Background from '../components/about/Background'
import Education from '../components/about/Education'
import Reviews from '../components/about/Reviews'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50 pb-107">
      <Biography />
      <Background />
      <Education />
      <Reviews />
    </main>
  )
}
