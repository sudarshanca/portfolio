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
         <a href="https://drive.google.com/file/d/1ga8N79C6o1G6KLq5i2kr014HwnxgxdXq/view?usp=sharing"  target='_blank' >Resume</a>
         <a href={resum} download>Click to download</a>
        </div>
    </>
  )
}

export default About
