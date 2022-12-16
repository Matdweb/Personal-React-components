import React from 'react'
import { FaGamepad } from 'react-icons/fa'
import './components-styles/Games-styles.css'
import GameCard from './GameCard'

function MoreGames() {

    const GamesInfo = [
        {
            name: "uncharted", 
            img: 0,  //images number in the array exported from assets/images.js
            consoles: ["PS4", "PS5"],
            rate: "9.0",
            title: "Uncharted 4"
        },
        {
            name: "injustice", 
            img: 1,  //images number in the array exported from assets/images.js
            consoles: ["PS4", "PS5", "XBOX"],
            rate: "8.5",
            title: "Injustice 2"
        },
        {
            name: "spiderman", 
            img: 2,  //images number in the array exported from assets/images.js
            consoles: ["XBOX", "PS4", "PS5", "PC"],
            rate: "9.0",
            title: "Marvel's Spiderman"
        }
    ]

  return (
    <div className="container-games">
        <div className="superior-menu">
            <span>
                <FaGamepad />
            </span>
            <h3>Some other games</h3>
        </div>
        <div className="games-container">
        {GamesInfo.map( (game,i) =>{
            return (<GameCard infoGame={game} key={i} />)
        })}
        </div>
    </div>
  )
}

export default MoreGames