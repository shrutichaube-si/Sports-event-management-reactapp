import React, { useState } from 'react'
import axios from 'axios'
import { useRef } from 'react';
import { useEffect } from 'react';
import "./empdetails.css"
export default function Empdetails() {

  let [sportsdata,setSportsdata] = useState([]);
  let [equipdata,setEquipdata] = useState(["bat","ball"]);
   let [venuedata,setVenuedata] = useState([]);
   let [durationdata,setDurationdata] = useState([]);

const selectedSport = useRef([]);
const selectedVenue = useRef([]);

  const getSports = () => {
    axios.get("/getsportsinfo").then((res)=>{
      setSportsdata(res.data)
      
    })

  }
  const venuesinfo=()=>{
    axios.post("/getvenuesinfo",{sport:selectedSport.current.value}).then((res)=>{
      setVenuedata(res.data);
    })
  }

  const eqsinfo=()=>{
    axios.post("/geteqsinfo",{sport:selectedSport.current.value,venue:selectedVenue.current.value}).then((res)=>{
      setEquipdata(res.data)
    })
  }
  
  const durinfo=()=>{
    axios.post("/getdurinfo",{sport:selectedSport.current.value,venue:selectedVenue.current.value}).then((res)=>{
      setDurationdata(res.data)
    })
  }


  return (

    <div class="form-container" >
      <h1>Add details</h1>
      <label for="details">Choose a sport:</label>
      <select name="cars" id="cars" ref={selectedSport} onClick={getSports}>
      <option value="" disabled selected>Choose a Sport </option>
     {sportsdata.map(sport=><option key={sport.Sports_Name}>{sport.Sports_Name}</option>)}
      </select>

      <label for="details">Choose equipment:</label>
    <select name="cars" id="cars" onClick={eqsinfo}>
    <option value="" disabled selected> Choose Equipment</option> 
    {equipdata.map((eq,ind)=><option key={ind}>{eq.Equipment_Name}</option>)}                       
      </select>

      <label for="details">Choose a venue:</label>
      <select name="cars" id="cars"ref={selectedVenue} onClick={venuesinfo} >
        
      <option value="" disabled selected> Choose a Venue</option>                     
                           
        {venuedata.map((data)=>(
          <option key={data.Venue}>{data.Venue}</option>

        ))}
      </select>
      <label for="details">Choose duration:</label>
      <select name="cars" id="cars" onClick={durinfo}>
      <option value="" disabled selected> Choose Duration  </option> 
      {durationdata.map((du,ind)=><option key={ind}>{du.Duration}</option>)}        
      </select>
      <br/>
      <button type='submit'>Add</button>
    </div>

  )
}

