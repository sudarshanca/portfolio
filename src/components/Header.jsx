import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Header = () => {
  return (
    <>
      <header>
         <div className="Header-icon">
            <h2>s.</h2>
         </div>
          <div className="Header-list" id="mainNav" >
            <ul >
              <Link  activeClass="active" to="Home" spy={true} smooth={true} offset={-50} duration={500} >Home</Link>
              <Link  activeClass="active" to="About" spy={true} smooth={true} offset={-40} duration={500}>About me</Link>
              <Link  activeClass="active" to="Skills" spy={true} smooth={true} offset={-30} duration={500}>Skills</Link>
            </ul>
          </div>
           
      </header>
    </>
  )
}

export default Header
