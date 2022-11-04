  import React, { useState, useRef, useEffect } from "react"
  import '../App.css'
  import './AddProductNavBar.css'
  import './HomeNavBar.css'
  import './ProfileScreen.css'
  import AdminNavBar from "./AdminNavBar";
  import Swal from "sweetalert2";
  import Footer from "./Footer";
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import {Link} from "react-router-dom";
  import EnterForm from "./EnterForm";


const ProfileScreen = () => {

    const [user, setuser] = useState([]);

    const navigate = useNavigate();

    const componentRef = useRef();


    useEffect(() => {

        function getUser() {
            axios.get("http://localhost:5000/user/view-user/").then((res) => {

                setuser(res.data);
                console.log(res.data)
            }).catch((err) => {

                alert(err.message);
            })
        }

        getUser();

    }, [])

    const backHome = () => {
        navigate(-1);
    }
    return (

        <>
            <div >

                <EnterForm/>

                <body className='bo2'>


                    {user.map(item => (

                        <div className="contain5">

                            <h1>My Profile</h1>
                            <br />
                            <p className='Receipt3'>First Name :</p>
                            <p className='Receipt2'>{item.firstName}</p>


                            <p className='Receipt3'>Last Name :</p>
                            <p className='Receipt2'>{item.lastName}</p>

                            <p className='Receipt3'>Contac Number :</p>
                            <p className='Receipt2'>{item.mobileNumber}</p>

                            <p className='Receipt3'>NIC/Passport No:</p>
                            <p className='Receipt2'>{item.address}</p>

                            <p className='Receipt3'>Email:</p>
                            <p className='Receipt2'>{item.email}</p>

                            



                        </div>

                    ))}


                    <div className='contain6'>
                        <Link to='/customer-home'><button className="print__button btn2"> Update </button></Link>
                        <Link to='/customer-home'><button className="print__button btn2"> Back to Home </button></Link>
                    </div>

                </body>


            </div>
            <Footer />
        </>
    )
}
 

export default ProfileScreen;
