import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { DiJavascript, DiPhotoshop, DiIllustrator } from "react-icons/di";

const Skills = () => {
  return (
    
    <>
      <div className="Skills">
        <h1>My Skills</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est mollitia in, eius quasi aliquid distinctio qui. At saepe dicta sunt?!</p>

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
