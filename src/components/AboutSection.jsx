
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { forwardRef } from 'react'

gsap.registerPlugin(ScrollTrigger)


const AboutSection = forwardRef((props, ref) => {

  const containerRef = useRef(null)


  useGSAP(() => {

    // heading animation
    gsap.from('.about-section h1', {
      x: -60,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-section h1',
        start: 'top 85%',
      }
    })

    // word by word animation
    gsap.from('.about-section p', {
      x: -90,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.5,          // har word 0.04s baad aayega
      scrollTrigger: {
        trigger: '.about-section p',
        start: 'top 90%',
      }
    })

  }, { scope: containerRef })


    return (
    <>
    <div className="abt" ref={ref}>
    <div className="about-section"  ref={containerRef}>
        <h1>About Me</h1>
        <p>I am <span>Iqzal khan</span>&nbsp;   
           A Student, Motivated Frontend Web Developer
             with foundational experience in
              HTML, CSS, JavaScript, figma and React. 
              Passionate about building responsive and user-friendly web applications. 
              Seeking an internship or entry-level opportunity to apply technical skills,
               contribute to development teams, 
               and grow in modern web technologies.
        </p>
    </div>

    </div>
        </>
  )
})

export default AboutSection