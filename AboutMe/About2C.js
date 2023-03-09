import './About2.css';
import React from 'react'
import {Link} from 'react-router-dom';
const About2C = () => {
  return (
    <div className='about'>
      <h1>I am Raman Verma</h1>
      <p>I am Full Stack Web Developer Graduated From Unikaksha in 2023.Done Graduation from NGF College Affiliated from Maharishi Dayanand University (Rohtak, Haryana).</p>
      <br/>
      <Link to='/contact' className='btn3'>Contact</Link>
    </div>
  )
}

export default About2C;
