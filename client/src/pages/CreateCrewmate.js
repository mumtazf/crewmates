import React from 'react';
import './CreateCrewmate.css'

import {useState} from 'react'
import {supabase} from '../client'

const CreateCrewmate = () => {

    const [crewmate, setCrewmate] = useState(null)

    const handleChange = (event) => {
        const {name, value} = event.target;
        
        setCrewmate(prevPost => ({
            ...prevPost,
            [name]: value
        }))
    }

    const createCrewmate = async(event) => {
        event.preventDefault();
        console.log(crewmate.crew_name);

        await supabase.from('Crewmate').insert({name: crewmate.crew_name, speed : crewmate.speed, candy : crewmate.candy}).select();

        window.location = "/";
    }

    return (
        <div>
            <form>
                <label for="crew_name">Name</label> <br />
                <input type="text" id="crew_name" name="crew_name" onChange = {handleChange}/><br />
                <br/>

                <label for="speed">Speed</label><br />
                <input type="number" id="speed" name="speed" onChange = {handleChange} /><br />
                <br/>

                <label for="candy">Favorite Candy</label><br />
                <select id ="candy" name = "candy" onChange = {handleChange}>
                    <option value = "mm">M&Ms</option>
                    <option value = "twix">Twix</option>
                    <option value = "mars">Mars</option>
                    <option value = "kitkat">Kitkat</option>
                    <option value = "hershey">Hershey's Kisses</option>
                    <option value = "other">Other</option>
                </select>
                <br/>
                <input type="submit" value="Submit" onClick = {createCrewmate}/>
            </form>
        </div>
    )
}

export default CreateCrewmate;