import {BrowserRouter, Routes,Route} from "react-router-dom" ;
import Layout from "./Layout";
import Home from "./Home";
import Admin from "./Admin";
import Employee from "./Employee";
import axios from "axios"
import { useEffect, useState } from "react";
import EmployeeDashboard from "./EmployeeDashboard";
import AdminDashboard from "./AdminDashboard";
import Details from "./admindashboard/details";
import Equipment from "./admindashboard/equipment";
import Empdetails from "./employeedashboard/empdetails";


let App=()=>{

    let [data,setData]= useState([]);

    return <div >
      
        <BrowserRouter>
        {/* <ul>{data.map(name => <li key={name.firstname}> {name.firstname}{name.lastname} </li>)}</ul> */}
        <Routes>
            <Route path="/" element={<Layout/>}> 
                <Route index element={<Home/>}/>
                <Route path="/admin" element ={<Admin/>}></Route>
                <Route path="/employee" element ={<Employee/>}></Route>
                <Route path="/home" element ={<Home/>}></Route>
                <Route path="/ed" element ={<EmployeeDashboard/>}></Route>
                <Route path="/admindashboard" element={<AdminDashboard/>}/>
                <Route path="/employeedashboard" element ={<EmployeeDashboard/>}/>
                <Route path="/admindashboard/details" element={<Details/>}/>
                <Route path ="/admindashboard/equipment" element={<Equipment/>}></Route>
                 <Route path ="/employeedashboard/empdetails" element={<Empdetails/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
}
export default App;