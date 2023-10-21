import Image from 'next/image'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import AboutSection from './components/AboutSection/AboutSection'
import ProjectSection from './components/ProjectSection/ProjectSection'
import EmailSection from './components/EmailSection/EmailSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
       <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      </div>
    </main>
  )
}
