import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

let Admin = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const login = () => {
    axios.post("/admincheck",{email:email.current.value,password:password.current.value}).then((res)=>{
      if(res.data==true){
        navigate("/admindashboard")
      }
      else{
        alert("wrong input");
      }
    })
  }

  

  return (
    <div>
      <h1 style={{ color: "black", alignText: "center" }}>Admin Login</h1>
      <form
        style={{
          display: "inline-grid",
          border: "2px solid black",
          padding: "20px",
          margin: "100px",
        }}
      >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            ref = {email}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <br />
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
          ref={password}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="button" class="btn btn-primary" onClick={login}>
          Login</button>
      </form>
    </div>
  );
};
export default Admin;
