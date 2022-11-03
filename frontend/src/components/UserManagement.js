import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import './DownloadInvoice.css';
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";
import AdminNavBar from './AdminNavBar';
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";




const UserManagement = () => {

    const [user,setUser] = useState([]);

    const navigate = useNavigate();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    useEffect(() =>{

        function getUser() {
            axios.get("http://localhost:5000/user/view-user").then((res) => {
    
                setUser(res.data);
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
        <AdminNavBar/>
              <Link to="/admin-home" class="btn homebtn"><FaHome/><span style={{position:"relative", top:"1.5px",marginLeft:"2px"}}>Home</span></Link>
              <br/>
    
              <div>
        
        <br/>
    
         <div ref={componentRef} className="info">
    
       
         <table className="table background">
         <thead>
          <tr>
            
            <th>Customer First Name</th>
            <th>Customer Last Name</th>
             <th>Contact Number</th>
             <th>Nic / Passport Number</th>
             <th>Email</th>
             
           </tr>
         </thead>
        
         <tbody>
    
         {user.map(user => (

             <tr key={user._id}>
               <td className='td'>{user.firstName}</td>
               <td className='td'>{user.lastName}</td>
               <td className='td'>{user.mobileNumber}</td>
               <td className='td'>{user.address}</td>
               <td className='td'>{user.email}</td>
               
               
               
             </tr>
        
           ))}
    
         </tbody>
       </table>
    
       
    
    
    
       
       <br/><br/>
       <br/>
    
       <button onClick={handlePrint} className="print__button btn btn2"><FiPrinter/> Print </button>
    
    
       </div>
       </div>
        </>
          
          
        
      )

}

export default UserManagement;