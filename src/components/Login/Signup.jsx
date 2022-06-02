import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import{useNavigate } from "react-router-dom"

function Signup() {
  let navigte = useNavigate()
  const [allData, setAllData] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setAllData({
      ...allData,
      [id]: value,
    });
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    axios
      .post(`https://tarrif-plan-app.herokuapp.com/register`, formData)
      .then((res) => {
        console.log(res);
        alert("registration successful");
        navigte("signin");

      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login">
     
      <h1>Register </h1>
      <form onSubmit={handleSignupSubmit}>
        <label>Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          placeholder=""
          onChange={handleChange}
        />
        <label>Password </label>
        <input
          type="password"
          id="password"
          placeholder=""
          value={formData.password}
          onChange={handleChange}
        />
        <label>Full name</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="enrter name"
        />
        <label>phone</label>
        <input
          type="text"
          id="phone"
          onChange={handleChange}
          value={formData.phone}
          placeholder="phone"
        />

     
        <input className="link_button" value={"submit"} type="submit" />
      </form>

      <div className="google_button">
        <span> submit</span>
        <Link to="/signin">
          <button>go to login</button>
        </Link>

       
      </div>
    
    </div>
  );
}

export default Signup;
//<script src="./Register.js"></script>;