import React,{useState} from "react"
//import '../App.css'
import axios from "axios"
import Swal from "sweetalert2";
import './UserLogin.css'
import {Link} from "react-router-dom";
import HomeNavBar from "../HomeNavBar";
import Footer from "../Footer";


export default function UserLogin(){

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = ({ currentTarget: input }) => {
       setData({ ...data, [input.name]: input.value });
    };

    const sendData=async(e)=> {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/user/login";
            const { data: res } = await axios.post(url, data);
            console.log("Blah",res.user._id);
            Swal.fire({
                title: "Success!",
                text: res.message,
                icon: "success",
                showConfirmButton: false,
            })
            setTimeout(() => {
                window.sessionStorage.setItem("userdetails",JSON.stringify(res.user._id))
                window.location = "/customer-home"
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
        <div className="containerss22">
            {/* {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />} */}

            <div style={{marginTop:150}}>
            <form onSubmit={sendData}>
                <div style={{marginLeft:540}}>
                </div>
                <h3 className="text-center">!!Hello Local Passenger!!</h3>
                <h4 className="text-center">Login</h4>

                <div className="mb-3" style={{marginLeft:400, marginRight:400}}>
                    <label>Email: </label>
                    <input type="email" name="email" className="form-control" id="email" value={data.email} onChange={handleChange}/>
                </div>

                <div className="mb-3" style={{marginLeft:400, marginRight:400}}>
                    <label>Password: </label>
                    <input type="password" name="password" className="form-control" id="password" value={data.password} onChange={handleChange}/>
                </div>


                <button type="submit" value="Login" className="btn btn-outline-success">Login</button>

                <div style={{marginLeft:800,fontSize:14}}>

                     <p1>Don't have a account<Link to = '/UserRegistration'><button2>Sign Up</button2></Link></p1>
                     
                </div>
                
            </form>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}