
// import React, { useRef } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'

// const skills = [
//   { id: 1, name: 'HTML',        icon: '🌐' },
//   { id: 2, name: 'CSS',         icon: '🎨' },
//   { id: 3, name: 'JavaScript',  icon: '⚡' },
//   { id: 4, name: 'React JS',    icon: '⚛️' },
//   { id: 5, name: 'Tailwind',    icon: '💨' },
//   { id: 6, name: 'Figma',       icon: '🖌️' },
//   { id: 7, name: 'GitHub',      icon: '🐙' },
// ]

// const SkillsSection = () => {
//   const containerRef = useRef(null)

//   useGSAP(() => {

//     // heading upar se aayega
//     gsap.from('.skills-section h1', {
//       y: -40,
//       opacity: 0,
//       duration: 0.8,
//       ease: 'power2.out',
//     })

//     // har skill card neeche se aayega, ek ke baad ek
//     gsap.from('.skill-card', {
//       y: 50,
//       opacity: 0,
//       duration: 0.5,
//       ease: 'power2.out',
//       stagger: 0.1,
//       delay: 0.3,
//     })

//   }, { scope: containerRef })

//   return (
//     <div className="skills-section" ref={containerRef}>
//       <h1>Skills</h1>
//       <div className="skills-grid">
//         {skills.map((skill) => (
//           <div key={skill.id} className="skill-card">
//             <span className="skill-icon">{skill.icon}</span>
//             <span className="skill-name">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default SkillsSection




import React, { useRef } from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { forwardRef } from 'react'

// ✅ 1. import

gsap.registerPlugin(ScrollTrigger)                   // ✅ 2. register

const skills = [
  { id: 1, name: 'HTML',       icon: <FaHtml5 color="#ff8800" /> },
  { id: 2, name: 'CSS',        icon: <FaCss color="#006eff" /> },
  { id: 3, name: 'JavaScript', icon: <FaJs color="#eeff00" /> },
  { id: 4, name: 'React JS',   icon: <FaReact color="#00c8ff" />},
  { id: 5, name: 'Tailwind',   icon: <RiTailwindCssFill color="#4000ff"  />},
  { id: 6, name: 'Figma',      icon: <IoLogoFigma color="#0009ab" /> },
  { id: 7, name: 'GitHub',     icon: <FaGithub color='white' />},
  
]

const SkillsSection =  forwardRef((props, ref) => {

  const containerRef = useRef(null)

  useGSAP(() => {

    gsap.from('.skills-section h1', {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {               // ✅ 3. har animation me ye add karo
        trigger: '.skills-section h1',
        start: 'top 85%',           // jab heading screen ke 85% pe aaye
      }
    })

    gsap.from('.skill-card', {
      y: 50,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 85%',           // jab grid screen ke 85% pe aaye
      }
    })

  }, { scope: containerRef })

  return (
    <>
    <div className="sklsec" ref={ref}>
    <div className="skills-section" ref={containerRef}>
      <h1>Technical Skills</h1> 
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>

    </div>
  </>
  )
})

export default SkillsSection