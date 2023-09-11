import {BrowserRouter, Routes,Route} from "react-router-dom" ;
import Layout from "./Layout";
import Home from "./Home";
import Admin from "./Admin";
import Employee from "./Employee";
let App=()=>{
    return <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}> </Route>
           
            <Route index element={<Home/>}></Route>
            <Route path="/admin" element ={<Admin/>}></Route>
            <Route path="/employee" element ={<Employee/>}></Route>
        </Routes>
        </BrowserRouter>


    </div>
}
export default App;