
// import React from 'react'
// import '../index.css'

// const Navbar = () => {


//   return (
// <>
// <div className="nav">
//     <div className="about">
//       About
//     </div>
//     <div className="projects">
//         Projects
//     </div>
//     <div className="skills">
//         Skills
//     </div>
//     <div className="contact">
//         Contact
//     </div>
// </div>
// </>    
//   )
// }

// export default Navbar





import React from 'react'

// ✅ Props receive karo — useRef ki zaroorat nahi yahan
const Navbar = ({ onAbout, onProjects, onSkills, onContact }) => {
  return (
    <div className="nav">
      <div className="about" onClick={onAbout}>About</div>
      <div className="projects" onClick={onProjects}>Projects</div>
      <div className="skills" onClick={onSkills}>Skills</div>
      <div className="contact" onClick={onContact}>Contact</div>
    </div>
  )
}

export default Navbar