import React from 'react'
import { MdTouchApp, RiMoneyEuroBoxFill, BsFillPlayCircleFill, FaPlusCircle } from 'react-icons/all'
import graphic from '../assets/line-graphic (2).png'
import mobileApp from '../assets/mobile-app-image.png'
import meeting from '../assets/World wide web_Flatline.svg'

function Options() {
  return (
    <div className='container'>
        <div className="sells-card">
            <h3>Sells</h3>
            <img src={graphic} alt="" />
            <label> 
                <span> <RiMoneyEuroBoxFill /> </span>
                <div>
                    <b>508.45</b>
                    <p>in 28 min</p>
                </div>
            </label>
        </div>

        <div className="marketing-card">
            <h3>Marketing</h3>
            <span>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </span>
            <label> <BsFillPlayCircleFill /> </label>
        </div>

        <div className="mobile-app-card">
            <h3>Mobile App</h3>
            <span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, qui!</p>
            </span>
            <label>
                <MdTouchApp />
            </label>
            <img src={mobileApp} alt="" />
        </div>

        <div className="products-card">
            <h3>Products</h3>
            <span>
                <p>Lorem ipsum dolor sit amet.</p>
            </span>
            <label> <FaPlusCircle /> </label>
        </div>

        <div className="meetings-card">
            <h3>Meetings</h3>
            <span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat aut alias?</p>
            </span>
            <img src={meeting}/>
        </div>

    </div>
  )
}

export default Options