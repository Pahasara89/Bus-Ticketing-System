import React, { useState } from "react";
import axios from "axios";
import HomeNavBar from "./HomeNavBar";
import Footer from "./Footer";
import './AboutUs.css';
import {FaHome} from "react-icons/fa";
import {Link} from "react-router-dom";




export default function AboutUs() {



    return (
        <>
            <HomeNavBar />
            <div className="boy">
                <h6>About Us</h6>
                <p9>We, EasyGoing (Pvt) Ltd. who is pioneer of Online Bus Ticket Booking Service in Sri Lanka since 2010. In this segment the company has launch a web site www.EasyGoing.lk with the collaboration of NTC/CTB registered Busses in Sri Lanka.

                    Through this service long distance travelers could be able to book any bus seats for anywhere in Sri Lanka at one place, and get the bus ticket details to their mobile, the operation is by online service or 24x7 call center hotline 0777299522.

                    Presently most of the passenger is unable to make their itineraries because of the un-schedule times of departure from the boarding point by the private bus operators. We have made a system with the all private bus operators to obtain the details of the bus operating route and the time of departure. So that the online booking personal well informed of the exact bus number, route, time of departure, fare of the particular route. All routes and the destinations will be notified in our platform of the booking service and monitoring the passenger boarding points to be success the operation.

                    The vision of the online booking services is to provide the easy and convenient way of booking their tickets by our system & Pay Easy by Visa / Master (Credit / Debit) Amex cards, eZcash, mCash, Reload, Sampath Bank or Commercial Bank Deposits/Transfer and get the bus details mTicket to their mobile / e-mail instantly.</p9>
            </div>

            <Link to="/" class="btn homebtn"><FaHome/><span style={{position:"relative", top:"1.5px",marginLeft:"2px"}}>Back to Home</span></Link>
            
            <Footer/>
        </>

    )
}