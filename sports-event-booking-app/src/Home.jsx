
import { Link } from "react-router-dom";
let Home=()=>{
    return <div>
        <h1> Sportz Interactive event booking</h1>
        <Link to ="/Admin">Admin</Link><br/>
        <Link to ="/Employee">Employee</Link>
    </div>
}
export default Home;