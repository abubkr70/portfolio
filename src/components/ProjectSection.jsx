import React from 'react'
import '../index.css'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import  img1 from '../images/hero-sec.jpeg'
import  img2 from '../images/WhatsApp-Image-2026-04-23-at-5.34.07-PM.jpeg'
import  img3 from '../images/design3.jpeg'
import  img4 from '../images/design4.jpeg'
import  img5 from '../images/design5.jpeg'
import  img6 from '../images/design6.jpeg'
import  img7 from '../images/design7.jpeg'
import  img8 from '../images/design8.jpeg'
import  img9 from '../images/design9.jpeg'
import  img10 from '../images/design10.jpeg'

import { forwardRef } from 'react'


const ProjectSection = forwardRef((props, ref) => {


const projects  = [
    {
        id: 1,
        title: 'E-commerce UI ',
        description: 'A e-commerce user interface built with React, redux, data save in local storage.',
        link: 'https://online-storex-project.netlify.app',
        date : '10 May 2026',
    },
        {
        id: 2,
        title: ' Images Gallery',
        description: 'gallery app using react, fetch data using google picsum API user can use that images.',
        link: 'https://gallery-free-images.netlify.app/',
          date : '15 May 2026', 
    },
        {
        id: 3,
        title: 'Todo app',
        description: 'a todo app, it allows users to add, delete and mark tasks as completed. It also has a filter feature that allows users to view all tasks, completed tasks.',
        link: 'https://abubkr70.github.io/todo-App/',
        date : '25 Nov 2025', 
    },
] 

const design = [
  {
     id: 1,
    title: 'UI design hero section',
    img: img2,
  },
{
   id: 2,
    title: 'UI design hero section',
    img: img3
},
{
   id: 3,
    title: 'social media post design',
    img: img4,
},
  {
     id: 4,
    title: 'UI design for interior design website',
    img: img5,
  },
    {
     id: 5,
    title:  'UI design for interior design website',
    img: img6,
  },
    {
     id: 6,
    title:  'social media post design',
    img: img7,
  },
    {
     id: 7,
    title: 'UI design for fashion brand website',
    img: img8,
  },
    {
     id: 8,
    title: 'UI design for fashion brand website',
    img: img9,
  },
    {
     id: 9,
    title: 'UI design for fashion brand website',
    img: img10,
  },
]

  const containerRef = useRef(null)
    // const designRef = useRef(null)

  useGSAP(() => {
  
    // cards animation — ek ke baad ek aayenge (stagger)
    gsap.from(".project-card", {
     height: '50%',
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.10,
           scrollTrigger: {
        trigger: '.project-card',
        start: 'top 70%',
                   }        // har card 0.15s delay se aayega
    })

  }, { scope: containerRef , }) 


  return (
    <>
    <div className="proj" ref={ref}>
      <div className="projects-section" ref={containerRef}>
        <h1>Projects</h1>
    <div className="projects-grid">
    {projects.map((projects) => (
        <div key={projects.id} className="project-card">
               <span className="date">{projects.date}</span>
            <h2>{projects.title}</h2>
            <p>{projects.description}</p>
            <a href={projects.link} target="_blank" rel="noopener noreferrer">
              View project →
                </a>
        </div>
))}
    </div>
    </div>
  
          <div className="projects-section">
        <h1> Design Projects</h1>
    <div className="projects-design">
    {design.map((design) => (
        <div key={design.id} className="design-card">
            <h2>{design.title}</h2>
            <img src={design.img} alt={design.title} className="project-image" />
        </div>
))}
    </div>
    </div>

    </div>
    </>
  )
})

export default ProjectSection