import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail, SiLinkedin } from "react-icons/si";
const Footer = () => {
  return (
    <>
       <footer>
        <div className="Footer-content">
          <h2>Have any projects in mind ?</h2>
          <a target='_blank' href="mailto:sudarshanreddyca@gmail.com" className='Footer-button'>Hire Me</a>
        </div>
          <div className="icons">
      
      <div><a target='_blank' href="https://www.instagram.com/sudarshan7_?igsh=YzAwZjE1ZTI0Zg==">
           <FaInstagram /></a><p>instagram</p>
      </div>
      
      <div><a target='_blank' href="mailto:sudarshanreddyca@gmail.com">
          <SiGmail /></a><p>Gmail</p> 
      </div>
      
      <div><a target='_blank' href="https://www.linkedin.com/in/sudarshan-reddy-ca-467666291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <SiLinkedin /></a><p>Linkdin</p>
      </div>
          </div>
       </footer>
    </>
  )
}

export default Footer
