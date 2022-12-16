import React from 'react'
import MenuBarImage from '../assets/menu-bar.png'
import './Card-styles.css'
import Background from '../assets/background-gradient.jpg'
// images
import bitcoin from '../assets/bitcoin.png'
import coins from '../assets/coins.png'
import mining from '../assets/data-mining.png'

function Card({info, card}) {
    console.log(card)
  return (
    <div className='card'>
        <img className='background' src={Background} />
        <span>
            <img 
            className={ card == 1 ? 'bitcoin' : card == 2 ? 'coins' : card == 3 ? 'mining' : '' } 
            src={ card == 1 ? bitcoin : card == 2 ? coins : card == 3 ? mining : '' } />
        </span>
        <img src={MenuBarImage} />
        <label>
            <p>{info.info}</p>
        </label>
        <button>
            Suscription for {info.price} per month
        </button>
        <button className='try-it-btn'>
            Try 30 days for $30.00
        </button>
        <label>
            <p>Lorem ipsum dolor sit amet.</p>
        </label>
    </div>
    
  )
}

export default Card