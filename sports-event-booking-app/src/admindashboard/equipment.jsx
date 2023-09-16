import React from 'react'
import { useState } from 'react';
import "./equi.css";
import axios from 'axios';

const Equipment = (props) => {

    const [Sports,setSports] = useState('');
    const [Equipment,setEquipment]=useState('');
    const [Venue, setVenue]= useState('');
    const[Duration, setDuration] = useState('');

    const handleAdd = async (e) =>{
        e.preventDefault();
    

    const data = {
        Sports: Sports,
        Equipment: Equipment,
        Venue: Venue,
        Duration: Duration
    }

    try {
        const response = await axios.post('/addsport', data);
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
    }
      return (
    <div class="form-container">
    <form  onSubmit={handleAdd}>
        <label for="name">Sports Name:</label>
        <input onChange={(e)=> setSports(e.target.value)} type="text" id="sports" value ={Sports} placeholder="Enter Sports name"></input>

        <label for="email">Equipment Name:</label>
        <input onChange={(e)=> setEquipment(e.target.value)} type="text" id="equipment"value={Equipment} placeholder="Enter Equipment"></input>

        <label for="venue">Venue:</label>
        <input onChange={(e)=> setVenue(e.target.value)} type="text" id="venue"value={Venue} placeholder="Enter Venue"></input>


        <label for="duration">Duration:</label>
        <input onChange={(e)=> setDuration(e.target.value)} type="text" id="duration"value={Duration} placeholder="Enter Duration"></input>


        <button type='submit'>Add</button>
    </form>
    <h3>List of Equipments</h3>
    <ul>
        
        <li> Sports Name:{Sports}</li>
        <li>Equipment Name:{Equipment}</li>
        <li>Venue Name: {Venue}</li>
        <li>Duration :{Duration}</li>
    </ul>
</div>
  )
}

export default Equipment;