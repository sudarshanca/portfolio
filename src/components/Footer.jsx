import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <>
       <footer>
        <div className="Footer-content">
          <h2>Have any projects in mind ?</h2>
          <button className='Footer-button'>Hire Me</button>
        </div>
          <div className="icons">
      <div><a href=""><FaFacebook /></a> <p>facebook</p></div>
      <div><a href=""><FaInstagram /></a><p>instagram</p></div>
      <div><a href=""><SiGmail /></a><p>Gmail</p></div>
          </div>
       </footer>
    </>
  )
}

export default Footer
