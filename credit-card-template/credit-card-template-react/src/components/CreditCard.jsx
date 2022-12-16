import React from 'react'
import { FaWifi } from 'react-icons/fa'
import chip from '../assets/chip.png'
import MasterCard from '../assets/mastercard.svg'

import './Credit-card-styles.css'

function CreditCard() {
  return (<>
    <div className="credit-card">

        <div className="card-header">
            <h1>Credit Card</h1>
            <span>
                <FaWifi />
            </span>
        </div>

        <div className="chip">
            <img src={chip} alt="" />
        </div>

        <div className="card-info-img">
            <div className="card-info">
                <h3>3890 2345 3283</h3>
                <span>11/24</span>
                <label>Nombre Persona</label>
            </div>

            <div className="card-img">
                <img src={MasterCard} alt="" />
            </div>
        </div>

    </div>
    <div className="credit-card_behind">
        <div className="bar"></div>
        <span>ICA 3094</span>
    </div>
</>)
}

export default CreditCard