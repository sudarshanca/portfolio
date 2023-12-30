import React from 'react'
import resum from './assets/Resume.jpg'


const About = () => {

 
  return (
    <>
      <div className="About" id='About'>
        <h1>About Me</h1>
         <p>
          Front-end developer with 2 years of expertise in HTML, CSS, JavaScript, and React.js, creating captivating digital experiences. Passionate about anime, exploring diverse narratives and animation styles. Avid gamer with an analytical mindset, appreciating the intricacies of game design. My unique blend of technical proficiency and creative interests defines my approach to front-end development.
         </p>
         <a href="https://drive.google.com/file/d/102WByhuenqq1m0fJJAyXafT7fPO_hAAh/view?usp=sharing"  target='_blank' >Resume</a>
         <a href={resum} download>Click to download</a>
        </div>
    </>
  )
}

export default About
