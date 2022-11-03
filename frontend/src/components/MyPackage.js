import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import './DownloadInvoice.css';
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";


const MyPackage = () => {

    const [PaymentData,setPaymentData] = useState([]);

    const navigate = useNavigate();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    useEffect(() =>{

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
              <button className='btn' onClick={backHome}>Go Back</button>
              <br/>
    
              <div>
        
        <br/>
    
         <div ref={componentRef} className="info">
    
       
         <table className="table background">
         <thead>
          <tr>
            
            <th>PaymentId</th>
            <th>CustomerName</th>
             <th>Amount(LKR.)</th>
             
           </tr>
         </thead>
        
         <tbody>
    
         {PaymentData.map(item => (

            <tr key={item._id}>
                <td className='td'>{item. Pay_ID}</td>
                <td className='td'>{item.BanK_Owner_Name}</td>
                <td className='td'>1000</td>
        

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

export default MyPackage;