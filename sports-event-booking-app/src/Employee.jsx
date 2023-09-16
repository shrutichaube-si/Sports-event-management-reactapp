import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

let Employee = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [userInfo,setUserInfo] = useState({});

  const login = () => {
    axios.post("/emplcheck",{email:emailRef.current.value,password:passwordRef.current.value}).then((res)=>{
      if(res.data===true){
        console.log("success");
        navigate("/employeedashboard");
      }
      else{
        alert("wrong input")
      }
    })
   // console.log(emailRef.current.value)
  }



  return <div>
     

    <h1 style={{ color: 'green', textAlign:"center" }}>Employee Login</h1>
    <form style={{ display: "inline-grid", border: "2px solid black", padding: "80px", margin: "100px", }}>
      <div class="form-group">
        <label for="exampleInputEmail1">Email addresess</label>
        <input type="text" class="form-control" id="exampleInputEmail1" ref={emailRef} aria-describedby="emailHelp" placeholder="Enter email" />

      </div>
      <br />
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" ref={passwordRef} placeholder="Password" />
      </div>
      <br />
      <button type="button" class="btn btn-primary" onClick={login}>Login</button>
    </form> 
  </div>
}
export default Employee;