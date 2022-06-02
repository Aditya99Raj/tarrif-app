import React, { useEffect, useState } from "react";
//import "./Signin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signin() {
    const navigate = useNavigate()
   // let dusraPage = false;

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //    // console.log("hello");
    //     console.log(userName, userPassword);
    //     fetchUser();
    // };

    // const fetchUser = async () => {
    //     const res = await axios.post(
    //         `http://localhost:8080/login`,{userName,userPassword}
    //     );
    //     // console.log(res)
    //     const data1 = await res.data;
    //     console.log(data1)
    //     // console.log(data1.fullname);
    //     // console.log(data1.profilepicture);
    //     console.log(data1.email);
    //     if (userName === data1.fullname && userPassword === data1.password) {
    //         console.log("success")
    //         dusraPage = true;
    //     } else {
    //         dusraPage = false;
    //     }

    //     if (dusraPage) {
    //         navigate("/")
    //         alert("credential  match happy")

    //     } else {
    //         alert("credential doesn't match")
    //     }

    // };



    // useEffect(() => {
    //     // fetchUser();
    // }, [userName]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleApi = (e) => {
        axios.post(`https://tarrif-plan-app.herokuapp.com/login`,{
            email:email,
            password:password
        }).then(response=>{
            console.log(response)
            alert("login Successful")
            navigate("/")
        }).catch(e=>{
            console.log(e)
        })
    }

    return (
        <div className="login">

            <h1>Welcome Back</h1>

           {/* <form onSubmit={handleSubmit}>
                <label>name</label>
                <input
                    type="name"
                    id="name"
                    placeholder="enter name"
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                <label>Password </label>
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={(e) => {
                        setUserPassword(e.target.value);
                    }}
                />
              
                <input className="link_button" value={"submit"} type="submit" />
               
            </form> */}
            Email:<input value={email} onChange={handleEmail}></input>
            Password:<input value={password} onChange={handlePassword}></input>
           <button onClick={handleApi}>Login</button>
        </div>
    );
}

export default Signin;