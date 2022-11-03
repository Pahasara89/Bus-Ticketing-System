import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HomeNavBar from './HomeNavBar';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import './Register.css';



export default function Register() {

 

    
    return (
        <>
        <HomeNavBar/>
        <div className='body8'>
            <h9>Before Register!!</h9>
        <center>
        <Link to = '/RegisterCard'><button type="button"  style={{marginTop:'300px'}} className="btn btn-success">I am a Customer</button></Link>
        <Link to = '/AdminRegistration'><button type="button" style={{ marginTop:'300px', marginLeft: "60px" }} className="btn btn-danger">I am an Admin</button></Link>
        </center>

        </div>
        <Footer/>
        </>


    )
}