import React from 'react'
import GCNimg from '../assets/Gotham_Knights_Logo.svg.png'
import './components-styles/banner-styles.css'

function Banner() {
  return (
    <div className="container-banner">

      <div className="cont-text">
        <div className="deco"></div>
        <div className="title">
          <span>
            <p>Pre-order</p> 
            <p>Gotham Knights</p>
            <p>Right Now</p>
          </span>
        </div>
        <div className="price">
          <span>
            <p>$60</p>
          </span>
          <label>
            Pre-order
          </label>
        </div>
      </div>

      <div className="cont-img">
          <img src={GCNimg} />
      </div>
      
    </div>
  )
}

export default Banner