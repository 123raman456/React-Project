import './Footer.css'
import React from 'react'
import {FaPhone,FaMailBulk,FaHome,FaFacebook,FaLinkedin} from 'react-icons/fa';


 const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_bar'>
            <div className='left'>
            <div className='location'>
        <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
        <div>
          <p>Sec 33 Hisar</p>
          <p>Hisar Haryana</p>
        </div>
            </div>
            <div className='phone'>
            <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>7015724793 </h4> 
            </div>
            <div className='email'>
            <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>ramanverma.988@gmail.com </h4> 
            </div>
        </div>
        <div className='right'>
          <h4>Certified Web Developer</h4>
          <p>Raman Verma certified web developer from Unikaksha.</p>
          <div className='social'>
          <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>
          <FaLinkedin size={20} style={{color:"white", marginRight:"2rem"}}/>
          
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer;
