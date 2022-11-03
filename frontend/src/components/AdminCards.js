import React from 'react'
import CardItem from './CardItem'
import './AdminCards.css'

function AdminCards() {
  return (
    <div className='cards'>
      <h1>Welcome to Cafe SecretAlly </h1>
      <h1>Management Section</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/schedule.gif"
                    text="Manage bus schedule Details"
                    label="Schedule Management"
                    path="/view"
                />
                <CardItem
                    src="images/package.gif"
                    text="Manage Package Details"
                    label="Pakage Management"
                    path="/ViewPacakges"
                />

              
            </ul>
            
        </div>
      </div>
    </div>
  )
}

export default AdminCards