import React,{useState} from "react"
//import '../App.css'
import axios from "axios"
import Swal from "sweetalert2";
import './UserRegister.css'
import {Link} from "react-router-dom";
import HomeNavBar from "../HomeNavBar";
import Footer from "../Footer";



export default function UserRegistration(){

    const clearData = () => {
        window.location.reload(false);
    };

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        mobileNumber: "",
        email: "",
        password: ""
    });

    const handleChange = ({ currentTarget: input }) => {
       setData({ ...data, [input.name]: input.value });
    };

    const sendData=async(e)=> {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/user/registration";
            const { data: res } = await axios.post(url, data);
            Swal.fire({
                title: "Success!",
                text: res.message,
                icon: "success",
                showConfirmButton: false,
            })
            setTimeout(() => {
                window.location = "/UserLogin"
            }, 2000)
        }
        catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                //setError(error.response.data.message);
            }
        }
    }
    return(
        <>
        <div className="body1">
            <HomeNavBar/>

            <div className="containerss">
            {/* {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />} */}
                <form className='was-validated'onSubmit={sendData}>
                    <h3 className="text-center">Local Register</h3>

                    <div className="col-md-7 element">
                        <label>First Name :</label>
                        <input type="text" name="firstName" className="form-control" id="firstName" value={data.firstName} onChange={handleChange}/>
                    </div>

                    <div className="col-md-7 element">
                        <label>Last name :</label>
                        <input type="text" name="lastName" className="form-control" id="lastName" value={data.lastName} onChange={handleChange}/>
                    </div>

                    <div className="col-md-7 element">
                        <label>NIC Number/ Passport ID :</label>
                        <input type="text" name="address" className="form-control" id="address" value={data.address}onChange={handleChange}/>
                    </div>

                    <div className="col-md-7 element">
                        <label>Email: </label>
                        <input type="email" name="email" className="form-control" id="email" value={data.email} onChange={handleChange}/>
                    </div>

                    <div className="col-md-7 element">
                        <label>Phone :</label>
                        <input type="text" name="mobileNumber" className="form-control" id="mobileNumber" value={data.mobileNumber}onChange={handleChange}/>
                    </div>

                    <div className="col-md-7 element">
                        <label>Password: (include capital,numbers and characters )</label>
                        <input type="password" name="password" className="form-control" id="password" value={data.password} onChange={handleChange}/>
                    </div>


                        <button type="submit" value="Register" className="btn btn-outline-success">Register</button>
                        <buttons type="clear" className="btn Addbtn1" onClick={clearData}>Cancel</buttons>

                    <br></br>
                    <br></br>
                        <br></br>
                        <p>Have a account already ?<Link to ='/UserLogin'><button1>Sign In Now</button1></Link></p>
                </form>
            </div>
        </div>
        <Footer/>
        </>
           
    )
}