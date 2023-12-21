import React from 'react'

const Header = () => {
  return (
    <>
      <header>
         <div className="Header-icon">
            <h2>s.</h2>
         </div>
          <div className="Header-list">
            <ul >
              <a href="Home">Home</a>
              <a href="About">About me</a>
              <a href="Service">Service</a>
              <a href="Projects">Projects</a>
            </ul>
          </div>
      </header>
    </>
  )
}

export default Header
