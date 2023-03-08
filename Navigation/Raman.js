import './Ramanstyle.css';
import background from '../assets/background.jpg';
import React from 'react'
import {Link} from 'react-router-dom';
const Raman = () => {
  return (
    <div className='raman'>
        <div className='verma'>
          <img className='image' src={background} alt="image not found"/>
        </div>
        <div className='content'>
            <p>Hello Everyone Welcome to My React Project</p>
            <h1>Web Developer</h1>
            <div>
                <Link to='/project' className='btn'>Project</Link>
                <Link to='/contact' className='btn btn-light'>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Raman