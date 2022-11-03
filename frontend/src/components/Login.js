import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HomeNavBar from './HomeNavBar';
import Footer from './Footer';
import {Link} from 'react-router-dom';



export default function Login() {

 

    
    return (
        <>
        <HomeNavBar/>
        <div className='body8'>
            <h9>Before Login!!</h9>
        <center>
        <Link to = '/LoginCard'><button type="button"  style={{marginTop:'300px'}} className="btn btn-success">I am a Customer</button></Link>
        <Link to = '/AdminLogin'><button type="button" style={{ marginTop:'300px', marginLeft: "60px" }} className="btn btn-danger">I am an Admin</button></Link>
        </center>

        </div>
        <Footer/>
        </>

)
}