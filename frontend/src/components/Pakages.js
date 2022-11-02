import React from 'react'
import CardItem from './CardItem'
import './Package.css'

function Pakages() {
  return (
    <div className='cards'>
      <h1>-------Packages-------</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/east.jpg"
                    label = "Featured package"
                    text="That's pckage our minimam package. One week (7 days) package if you like that click it.
                    (Rs.1000/=)"
                    path="/TopUp"
                />
                <CardItem
                    src="images/travel.jpg"
                    label = "Travel inspiration"
                    text="Our most popular travel package comes with 30 days of unlimited coach travel, you’re free to explore the East Coast at your own pace. (Rs.3500/=)"
                    path="/TopUp"
                />
            </ul>

        </div>
      </div>
    </div>
  )
}

export default Pakages
