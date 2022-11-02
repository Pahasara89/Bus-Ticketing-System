import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>-------Payment Method-------</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__itemss'>
                <CardItem
                    src="images/cash.jpg"
                    label = "cash"
                    text="Cash"
                    path="/pizza"
                />
                <CardItem
                    src="images/visa.jpg"
                    label = "visa/master"
                    text="Visa/Master"
                    path="/add_Payment"
                />
         
                <CardItem
                    src="images/ezcash.png"
                    label = "ezcash"
                    text="eZCash"
                    path="/shawarma"
                />
                <CardItem
                    src="images/amex.webp"
                    label = "amex"
                    text="Amex"
                    path="/hotdogs"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
