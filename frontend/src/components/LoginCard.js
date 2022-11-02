import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import HomeNavBar from './HomeNavBar';
import Footer from './Footer';

function Cards() {
  return (
    <>
    <HomeNavBar/>
    <div className='bod'>
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/local.gif"
                    text="Local Passengers "
                    label="Local Passengers"
                    path="/UserLogin"
                />
                <CardItem
                    src="images/foreign.gif"
                    text="Foreign Passengers "
                    label="Foreign Passengers"
                    path="/Foreign_Login"
                />
            </ul>
         
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cards