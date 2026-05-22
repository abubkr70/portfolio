
// import React from 'react'
// import './index.css'
// import Navbar from './components/Navbar.jsx'
// import HeroSection from './components/HeroSection.jsx'
// import GsapScroll from './components/GsapScroll.jsx'
// import ProjectSection from './components/ProjectSection.jsx'
// import SkillsSection from './components/SkillsSection.jsx'
// import AboutSection from './components/AboutSection.jsx'
// import EducationSection from './components/Education.jsx'
// import ContactSection from './components/ContactSection.jsx'

// import { useRef } from 'react'



// const App = () => {

  
//   return (
//     <>
//     <Navbar />
//     <HeroSection />
//     <GsapScroll />
//     <ProjectSection  ref={projectRef} />
//     <SkillsSection  ref={skillRef} />
//     <AboutSection  ref={aboutRef} />
//     <EducationSection />
//     <ContactSection  ref={contactRef} />
//     </>
//   )
// }

// export default App






import { useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import EducationSection from './components/Education.jsx'
import ContactSection from './components/ContactSection.jsx'
import GsapScroll from './components/GsapScroll.jsx'
import './index.css'



const App = () => {

  // ✅ Sab refs yahan banao
  const projectRef = useRef(null)
  const skillRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  // ✅ Scroll function bhi yahan
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ✅ Navbar ko functions pass karo, refs nahi */}
      <Navbar
        onAbout={() => scrollToSection(aboutRef)}
        onProjects={() => scrollToSection(projectRef)}
        onSkills={() => scrollToSection(skillRef)}
        onContact={() => scrollToSection(contactRef)}
      />

      <HeroSection />
           <GsapScroll />
      {/* ✅ Sections ko ref pass karo */}
      <ProjectSection ref={projectRef} />
      <SkillsSection ref={skillRef} />
      <AboutSection ref={aboutRef} />
      <EducationSection />
      <ContactSection ref={contactRef} />
    </>
  )
}

export default App




