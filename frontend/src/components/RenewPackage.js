import React, { useState, useRef, useEffect } from "react"
import '../App.css'
import './AddProductNavBar.css'
import './RenewPackage.css'
import './HomeNavBar.css'
import AdminNavBar from "./AdminNavBar";
import Swal from "sweetalert2";
import Footer from "./Footer";
import HomeNavBar from "./HomeNavBar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import EnterForm from "./EnterForm"


export default function RenewPackage() {


    const [PaymentData, setPaymentData] = useState([]);

    const navigate = useNavigate();

    const componentRef = useRef();


    useEffect(() => {

        function getPaymentData() {
            axios.get("http://localhost:5000/Payment_Details/view_Payment/").then((res) => {

                setPaymentData(res.data);
                console.log(res.data)
            }).catch((err) => {

                alert(err.message);
            })
        }

        getPaymentData();

    }, [])

    const backHome = () => {
        navigate(-1);
    }
    return (

        <>
            <div >

                <EnterForm />

                <body className='bod2'>


                    {PaymentData.map(item => (

                        <div className="containers5">

                            <h1>My Package</h1>
                            <h5>Week Package</h5><br />
                            <p className='Receipt3'>Payment ID :</p>
                            <p className='Receipt2'>{item.Pay_ID}</p>



                            <p className='Receipt3'>Name :</p>
                            <p className='Receipt2'>{item.BanK_Owner_Name}</p><br />
                            <h5>Expire Date: 11/03/2022</h5><br />
                            <h5>Remaining: 7 days</h5>



                        </div>

                    ))}


                    <div className='containers6'>
                        <Link to='/customer-home'><button className="print__button btn2"> Add More </button></Link>
                        <Link to='/customer-home'><button className="print__button btn2"> Back to Home </button></Link>
                    </div>

                </body>


            </div>
            <Footer />
        </>
    )
}