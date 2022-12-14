import React, { useState, useEffect } from 'react';
import './HomeNavBar.css';
import './Header/Header.css';
import { Link } from 'react-router-dom';
import { AiOutlineDingding } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { logout } from "../actions/userAction";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";


function HomeNavBar() {

  const [click, setClick] = useState(false);
  const [length, setLen] = useState("");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { cart } = useSelector(state => state.cart);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());

  };



  useEffect(() => {
    function setLength() {
      var len = 0;

      for (var i = 0; i < cart.length; i++) {
        if (userInfo?.firstName == cart[i].firstName) {
          len = len + 1
        }
      }
      setLen(len)
    }

    setLength();

  }, [userInfo]);




  return (
    <Navbar bg="blue" expand="lg" variant="blue">
      <Container>

        <div id='hdLogo'>
          <img alt="Logo" src={require("../images/logo.png")} width="90" height="55" className="d-inline-block align-top" />
        </div>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="m-auto">
            <Form inline>

            </Form>
          </Nav>

          {userInfo ? (
            <>

              <Nav>
                <Nav.Link href="/myorders">My Orders</Nav.Link>
                
                  <Nav.Link to='/customer-home' className='homenav-links'>
                    Home
                  </Nav.Link>
              

                <Nav.Link>
                  <Link to='/contact' className='homenav-links'>
                    Contact Us
                  </Link>
                </Nav.Link>


                <NavDropdown title={userInfo?.firstName} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile" style={{ color: 'black' }}>
                    <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    />
                    MyProfile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler} style={{ color: 'black' }}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </>
          ) : (

            <Nav>
              {" "}
              <Nav.Link>
                <Link to='/customer-home' className='homenav-links'>
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to='/contact' className='homenav-links'>
                  Contact Us
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to='/busschedule' className='homenav-links'>
                  Bus schedule
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to='/TopUp' className='homenav-links'>
                  Topup
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to='/RenewPackage' className='homenav-links'>
                  Renew packages
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to='/Login' className='homenav-links'>
                  Login
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to='/Register' className='homenav-links'>
                 Register
                </Link>
              </Nav.Link>


            </Nav>



          )}




        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavBar;