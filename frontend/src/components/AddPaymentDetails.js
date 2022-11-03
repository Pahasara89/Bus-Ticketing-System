import React, { useState } from "react"
import AddPaymentDetailsNavBar from './AddPaymentDetailsNavBar';
import '../App.css'
import './AddProductNavBar.css'
import './AddEditPayment.css'
import './HomeNavBar.css'
import AdminNavBar from "./AdminNavBar";
import Swal from "sweetalert2";
import Footer from "./Footer";
import HomeNavBar from "./HomeNavBar";
import axios from 'axios';


export default function AddProduct() {
    const [bankOwnerName , setBankOwnerName] = useState('');
    const [Pay_date , setPay_date] = useState('');
    const [BanKName , setBanKName] = useState('');
    const [Card_No , setCard_No] = useState('');
    const [Expiry , setExpiry] = useState('');
    const [Cvv , setCvv] = useState('');

    //action="http://localhost:3000/Payment_Details/add_Payment" method="post"


    

    const addPayment = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:3000/Payment_Details/add_Payment", { 
            BanK_Owner_Name:bankOwnerName,
            Pay_date:Pay_date,

            BanKName:BanKName,
            Card_No:Card_No,
            Expiry:Expiry,
            Cvv:Cvv,

      
         
        }).then((res)=>{
            if(res.status==200){
                localStorage.setItem("bankOwner", bankOwnerName);
                localStorage.setItem("Pay_date", Pay_date);
                localStorage.setItem("BanKName", BanKName);
                localStorage.setItem("Card_No", Card_No);
                localStorage.setItem("Expiry", Expiry);
                localStorage.setItem("Cvv", Cvv);

  

            
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Success',
                    confirmButtonText: 'Viwe Receipt',
                  }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/Success_payment"
                    }
                  })
                

                //window.location.href = "/Success_payment"
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })

            }
        }).catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
            //console.log(error.response.data);
        })

        console.log(bankOwnerName);
    }

    return (
    
      <>
        <div className="body2">
            <HomeNavBar/>
 

            <div className="containers1">
                <form onSubmit={addPayment} >
                    <h1>Add Payment Details</h1>
                    <br />
              <tr className='was-validated'>
                <td>
                

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Bank Owner Name</label>
                        <input type="text" name="BanK_Owner_Name" className="form-control input-field" id="inserProduct" placeholder="Enter Bank Owner name" onChange={(e)=>setBankOwnerName(e.target.value)} required/>
                    </div>
                    </td>
                    <td>

                    <div className="col-md-3 element" style={{ display: 'block' }}>
                          <label for="datePicker" className="form-label1">Date</label>
                          <input id="date" name="Pay_date" label="Choose Received Date"  type="Date" InputLabelProps={{ shrink: true, }} onChange={(e)=>setPay_date(e.target.value)} required/>
    
                    </div>

                     </td>

                    </tr>

                    
                    <br/>
                    <div className="col-md-5 element">
                        <label for="inputQuant" className="form-label1">PAYMENT DETAILS</label>
                        <p className="ViweMore3">Bank Name</p>
                        <input name="BanKName" type="text" className="form-control" id="inputQuant" placeholder="Enter Bank Name" onChange={(e)=>setBanKName(e.target.value)} required/>
                    </div>
                    <tr >
                    <td>
                    
                    <div className="col-md-5 element">
                        <p className="ViweMore4">Card No</p>
                        <input name="Card_No" type="Number" className="form-control" id="inputQuant1" placeholder="Enter Card Number" onChange={(e)=>setCard_No(e.target.value)} required/>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <p className="ViweMore4">Expiry</p>
                        <input name="Expiry" type="text" className="form-control" id="inputQuant2" placeholder="01/25" onChange={(e)=>setExpiry(e.target.value)} required/>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <p className="ViweMore4">Cvv</p>
                        <input name="Cvv" type="text" className="form-control" id="inputQuant3" placeholder="Cvv" onChange={(e)=>setCvv(e.target.value)} required/>
                    </div>
                    </td>
                    </tr>

                    <br />
          
              

                        <p className="p_tag"> Enjoy all the features and perk after you complete the payment</p>
                    

                    <br />

                

                   <br />
                   <br />
                   <br />

                   <button type="submit" className="btn Addbtn">Add Payment Details</button>
                    <br />

                </form>
            </div>
            
            
        </div>
        <Footer/>
        </>


    )
}