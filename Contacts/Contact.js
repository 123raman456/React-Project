import "./Contact2.css";
import React from "react";
import {Link} from 'react-router-dom';


const Contact2 = () => {
  return (
    <div className="form">
    <h1>Contact Me</h1>
      <form method="post">
        <label for="">Frist Name</label>
        <input type="text" placeholder="Enter your name"/> <br/>
        <label for="">Last Name</label>
        <input type="text" placeholder="Enter your Last name"/> <br/>
        <label for="">Email</label>
        <input type="email" placeholder="abc@123gmail.com"/><br/>
        <label for="">Password</label>
        <input type="password" placeholder="******"></input> <br/>
        <label for="">Phone</label>
        <input type="phone" maxLength="10" placeholder="987654****"/><br/>
        <label for="">DOB</label>
        <input type="date"></input><br/>
        <label for="">Address</label>
        <textarea name="" id="" cols="40" rows="4"></textarea> <br/>
        <label for="">Gender</label>
        <input type="radio"/>Male
        <input type="radio"/>Female <br/>
        <Link to="/" className="btn5">Submit</Link>
      </form>
    </div>
  );
};

export default Contact2;
