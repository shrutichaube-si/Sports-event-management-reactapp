import React from 'react'
import { useState } from 'react';
import "./equi.css";
import axios from 'axios';

 const Details=(props)=> {
    const[Venue,setVenue]= useState('');
    const [Sports,setSports] = useState('');
    const [Equipment,setEquipment]=useState('');
    const [Location,setLocation]=useState('');

    const handleAdd = async (e) =>{
        e.preventDefault();
    

    const data = {
        Venue:Venue,
        Sports: Sports,
        Equipment:Equipment,
        Location:Location
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
    <label for="name">Venue Name:</label>
        <input onChange={(e)=> setVenue(e.target.value)} type="text" id="venue" value ={Venue} placeholder="Enter Venue"></input>


        <label for="name">Sports Name:</label>
        <input onChange={(e)=> setSports(e.target.value)} type="text" id="sports" name="name" value ={Sports} placeholder="Enter Sports name"></input>
        
        <label for="email">Equipment Name:</label>
        <input onChange={(e)=> setEquipment(e.target.value)} type="text" id="equipment"value={Equipment} placeholder="Enter Equipment"></input>


        <label for="name">Location:</label>
        <input onChange={(e)=> setLocation(e.target.value)} type="text" id="location" name="name" value={Location} placeholder="Enter Location"></input>

        <button type='submit'>Add</button>
    </form>
    <h3>List of Equipments</h3>
    <ul>
        <li>Venue Name:{Venue}</li>
        <li> Sports Name:{Sports}</li>
        <li>Equipment Name:{Equipment}</li>
        <li>Location:{Location}</li>
    </ul>
</div>
  )
}
export default Details;

