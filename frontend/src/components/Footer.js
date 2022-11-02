import React from 'react'
import {Link} from "react-router-dom";
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import './Footer.css';
import {
  Nav
} from "react-bootstrap";

function Footer() {
  return (
    <div className='footer-container'>
      
      <section class='social-media'>
       

          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook/>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram/>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter/>
            </Link>
            
            </div>

         <div className='website-rights'>
          <small> EasyGoing © 2022</small>
          </div>
        
      </section>
    </div>
  )
}

export default Footer
