import React from 'react'
import { FaStar } from 'react-icons/fa'
import './components-styles/Game-card-styles.css'
import images from '../assets/images'

function GameCard({infoGame}) {
  return (
    <div className='game-card' id={infoGame.name}>
        <label>
            <img src={images[infoGame.img]} />
            <div className="consoles">
                {infoGame.consoles.length > 0 ? 
                infoGame.consoles.map((console,i)=>{
                    return (<span key={i}> 
                        <p>{console}</p> 
                    </span>)
                }) 
                :' '}
            </div>
        </label>
        <span className="rate">
            <FaStar className='star' />
            <p>{infoGame.rate}</p>
        </span>
        <span>
        <h3>{infoGame.title}</h3>
        </span>
    </div>
  )
}

export default GameCard