import React from 'react'
import suda from '../components/assets/sudarshan.png'

const Home = () => {
  return (
    <>
      <div className="Home">
          <div className="Home-info">
            <p>Hello</p>
            <h1>I'm Sudarshan</h1>
            <h4>freelancer front-end & <br />Graphic designer</h4>
            <a href="mailto:sudarshanreddyca@gmail.com"> Hire me</a>
          </div>

          <div className="Home-img">
            <img src={suda} alt="" />
          </div>
      </div>
    </>
  )
}

export default Home
