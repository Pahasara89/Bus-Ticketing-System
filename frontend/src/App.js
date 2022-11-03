import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LoadingPage from './components/LoadingPage';
import Home from './components/Home';
import AdminHome from './components/AdminHome';
import ViewAdmin from './components/ViewAdmin';


import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import PrintReport from './components/PrintReport';

import AddPaymentDetails from './components/AddPaymentDetails';
import ViewPaymentDetails from './components/ViewPaymentDetails';



import ContactUs from './components/ContactUs';
import AllComplaints from './components/AllComplaints';
import AddComplaint from './components/AddComplaint';


import AddSuccess from './components/Payment_Success';
import ViewOnePaymentDetails from './components/ViweOnePaymentData';
import PrintPaymentDetail from './components/printPaymentDetails';



import RegisterCard from './components/RegisterCard';
import LoginCard from './components/LoginCard';

import Foreign_Login from './components/User/Foreign_Login';
import UserLogin from './components/User/UserLogin';


import Foreign_Register from './components/User/Foreign_Register';
import UserRegistration from './components/User/UserRegistration';


import TopUp from './components/TopUp';
import PakageHome from './components/PakageHome';
import Register from './components/Register';
import Login from './components/Login';

import AdminRegistration from './components/Admin/AdminRegistration';
import AdminLogin from './components/Admin/AdminLogin';






const App = () => {


  return (
    <Router>
      <div>

        <main>
          <Routes>

            <Route path="/" element={<LoadingPage />} />
            <Route path="/customer-home" element={<Home />} />
            <Route path="/admin-home" element={<AdminHome />} />
            <Route path="/view-admin" element={<ViewAdmin />} />

            <Route path="/view" element={<ViewProduct />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/printreport" element={<PrintReport />} />


            <Route path="/contact" element={<ContactUs />} />
            <Route path='/add-feedback' element={<AddComplaint />} />
            <Route path='/view-feedback' element={<AllComplaints />} />


            <Route path="/add_Payment" element={<AddPaymentDetails />} />
            <Route path="/view_Payment" element={<ViewPaymentDetails />} />
            <Route path="/view_Payment_Details/:id" element={<ViewOnePaymentDetails />} />
            <Route path="/Success_payment" element={<AddSuccess />} />
            <Route path="/printPaymentDetails" element={<PrintPaymentDetail />} />





            <Route path='/RegisterCard' element={<RegisterCard />} />
            <Route path='/LoginCard' element={<LoginCard />} />

            <Route path="/Foreign_Register" element={<Foreign_Register />} />
            <Route path="/UserRegistration" element={<UserRegistration />} />

            <Route path="/Foreign_Login" element={<Foreign_Login />} />
            <Route path="/UserLogin" element={<UserLogin />} />

            <Route path="/AdminRegistration" element={<AdminRegistration />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />

            <Route path="/TopUp" element={<TopUp />} />
            <Route path="/Pakages" element={<PakageHome />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />



          </Routes>

        </main>

      </div>
    </Router>
  );
};

export default App;
