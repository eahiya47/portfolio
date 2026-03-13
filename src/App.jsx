import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import SkillsOrbit from "./components/SkillsOrbit"



function App() {
  return (
    <div className="bg-slate-900 text-white">

      <Navbar />

      <Hero />
      <About />
      <SkillsOrbit />
      <Projects />
      <Contact />

    </div>
  )
}

export default App