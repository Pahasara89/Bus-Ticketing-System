import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoadingPage.css'
import HomeNavBar from './HomeNavBar';
import Footer from './Footer';
import {Link} from "react-router-dom";


export default function LoadingPage() {

    const [q, setQ] = useState("");


    return (
        <>
            <HomeNavBar />
            <div className='body8'>

                <div className='topic1'>

                    <h1>Welcome To</h1>
                    <h1>EasyGoig Ticketing</h1>

                </div>

                <div className='topic2'>
                    <p>Quick Search</p>
                </div>

                <div className='topic3'>
                    <p>Pay Online</p>
                </div>

                <div className='topic4'>
                    <p>Smartcard</p>
                </div>

                <div className='topic5'>
                    <p>NFC Technology</p>
                </div>

                <div className='topic6'>
                    <p>Hassel-Free bus ticketing</p>
                </div>

                <Link to = '/AboutUs'><button  className="learn_btn"> Learn More </button></Link>


            </div>
            <Footer />
        </>

    )
}