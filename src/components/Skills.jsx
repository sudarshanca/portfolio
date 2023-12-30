import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { DiJavascript, DiPhotoshop, DiIllustrator } from "react-icons/di";

const Skills = () => {
  return (
    
    <>
      <div className="Skills">
        <h1>My Skills</h1>
        <p>I'm a front-end developer with a focus on HTML5, CSS3, JavaScript, React and TypeScript.
        <br /><br />
        I specialize in building websites that are pixel perfect and well-designed using processes and code that is clean, semantic and easy to maintain.
        <br /><br />
        Some of my other preferred tools and frameworks are Figma, Bootstrap, Framer Motion and Tailwind CSS</p>
        
        <div className="Skills-skills">
          <div className="Skills-list">
            <h2>Front-end dev</h2>
            <div className="skill-icons">
           <div className='skill-icon'> <FaHtml5 className='icon'  />        <p>HTML</p>            </div>
           <div className='skill-icon'> <FaCss3Alt className='icon' />      <p>CSS</p>             </div>
           <div className='skill-icon'> <DiJavascript className='icon' />   <p>JavaScript</p>      </div>
           <div className='skill-icon'> <FaReact className='icon' />        <p>REACT</p>           </div>
           </div>
          </div>
          <div className="Skills-list">
            <h2>Graphic Designer</h2>
                <div className="skill-icons">
                <div className='skill-icon'> <DiPhotoshop className='icon' />   <p>Photoshop</p>    </div>  
                <div className='skill-icon'> <DiIllustrator className='icon' /> <p>Illustrator</p>  </div>  
                <div className='skill-icon'> <FaFigma className='icon' />       <p>figma</p>        </div>  
                </div>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Skills;
