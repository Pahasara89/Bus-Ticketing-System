import React, { useState,useEffect} from "react"
import Packages from './Pakages';
import Footer from './Footer';
import CarouselContainer from './CarouselContainer';
import EnterForm from "./EnterForm";



export default function Home(){
    useEffect(() => {
        localStorage.removeItem("BanKName");
        localStorage.removeItem("City");
        localStorage.removeItem("Pay_date");
        localStorage.removeItem("Strees_Address");
        localStorage.removeItem("productName");
        localStorage.removeItem("State");
        localStorage.removeItem("Order_ID");
        localStorage.removeItem("Card_No");
        localStorage.removeItem("Cvv");
        localStorage.removeItem("productID");

        localStorage.removeItem("Expiry");
        localStorage.removeItem("Zip_Code");
        localStorage.removeItem("bankOwner");
        localStorage.removeItem("Pay_ID");
        localStorage.removeItem("BanKName");
        localStorage.removeItem("Totle_price");
    }, [])

    return(
        <div className='back'>
            <EnterForm/>
            <CarouselContainer />
            <Packages/>
            <Footer/>
        </div>
    )
}