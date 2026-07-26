import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useSectionNavigate } from '../hooks/useSectionNavigate'

export default function Home() {
  const onNavigate = useSectionNavigate()

  

  return (
    <>
      <Hero onNavigate={onNavigate} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
