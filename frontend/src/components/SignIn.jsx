/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState,useContext } from "react";
import "./SignIn.css";
import logo from "/images/insta-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginContext } from "../context/ContextLogin";

const SignIn = () => {
const {setUserLogin}=useContext(LoginContext)
  const navigate = useNavigate();
  const notyfyA = (message) => {
    toast.error(message);
  };
  const notyfyB = (message) => {
    toast.success(message);
  };
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = () => {
    if (!emailRegEx.test(email)) {
      notyfyA("Please enter a valid email");
      return;
    }
    if (!password) {
      notyfyA("Please enter your password");
      return;
    }

    // sending data to server
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data"+JSON.stringify(data))
        if (data.error) {
          notyfyA(data.error);
          return;
        }else{
          notyfyB(data.message);
          console.log(data)
          localStorage.setItem("jwt",data.token)
          setUserLogin(true)
          navigate('/')
        }
      })
      .catch((error) => {
        console.error(error);
        notyfyA("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="signIn">
      <div className="loginForm">
        <img src={logo} alt="" className="signupLogo" />
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
        </div>
        <input type="submit" id="login-btn" value="Log In" onClick={postData} />
      </div>
      <div className="loginForm2">
        Don't have an accout?
        <Link to="/signup">
          <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
