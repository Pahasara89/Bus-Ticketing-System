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

                <div id="repGSearch" className='col-lg-3 mt-2 mb-2 ml-5'>

                    <input type="search" className="form-control" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />

                </div>

                <div className='topic1'>

                    <h1>Welcome To</h1>
                    <h1>EasyGoig Ticketing</h1>

                </div>

                <div className='topic2'>
                    <p>Qyuick Search</p>
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

                <Link to = '/add-feedback'><button  className="learn_btn"> Learn More </button></Link>


            </div>
            <Footer />
        </>

    )
}