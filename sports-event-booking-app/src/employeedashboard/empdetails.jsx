import React, { useState } from 'react'
import axios from 'axios'
import "./empdetails.css"
export default function Empdetails() {
  let [sportsdata,setSportsdata] = useState([]);
  // let [equipdata,setEquipdata] = useState([]);
  // let [durationdata,setDurationdata] = useState([]);
  // let [venuedata,setVenuedata] = useState([]);

  const getSports = () => {
    axios.get("/getsportsinfo").then((res)=>{
      setSportsdata(res.data)
      console.log(sportsdata)
    })

  }
  return (

    <div >
      <label for="details">Choose a sport:</label>
      <select name="cars" id="cars" onClick={getSports}>
        {sportsdata.map(sport=><option key={sport.Sports_Name}>{sport.Sports_Name}</option>)}
      </select>

      <label for="details">Choose equipment:</label>
    <select name="cars" id="cars" >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <label for="details">Choose a venue:</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <label for="details">Choose duration:</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <button type='submit'>Add</button>
    </div>

  )
}
