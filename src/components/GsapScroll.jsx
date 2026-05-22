
// import React from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// import { useRef } from  'react'
// import '../index.css'

// const GsapScroll = () => {


//   useGSAP(() => {
//   gsap.to(".ani h1", {
//   x: "-115%",
//   scrollTrigger: {
//     trigger: ".ani",
//     scroller: "body",
//     start: "top top",
//     end: "+=150%",
//     scrub: 2,
//     pin: true,
//     markers: true
//   }
//   })
//   });


//   return (
//     <>
//         <div className="ani">
//         <h1>Frontend Web Developer</h1>
//         </div>
//     </>
//   )
// }

// export default GsapScroll



// GsapScroll.jsx
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../index.css'

// ✅ Register ScrollTrigger ONCE at module level
gsap.registerPlugin(ScrollTrigger)

const GsapScroll = () => {
  useGSAP(() => {
    gsap.to(".ani h1", {
      x: "-115%",
      scrollTrigger: {
        trigger: ".ani",
        scroller: "body",
        start: "top top",
        end: "+=150%",
        scrub: 2,
        pin: true,
        // ✅ markers removed (debug only)
      },
    })
  }, []) // ✅ empty dependency array added

  return (
    <div className="ani">
      <h1>Frontend Web Developer</h1>
    </div>
  )
}

export default GsapScroll





