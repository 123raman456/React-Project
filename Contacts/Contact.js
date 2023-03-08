import "./Contact.css";
import React from "react";

const Contact = () => {
  return (
    <div className="form">
      <form>
        <label for="">Frist Name</label>
        <input type="text" />
        <label for="">Last Name</label>
        <input type="text" />
        <label for="">Email</label>
        <input type="email" />
      </form>
    </div>
  );
};

export default Contact;
