import React from 'react';
import AdminCards from './AdminCards';
import AdminNavBar from './AdminNavBar';
import Footer from './Footer';


export default function AdminHome(){
    return(
        <div className='back'>
            <AdminNavBar/>
            <AdminCards/>
            <Footer/>
        </div>
    )
}