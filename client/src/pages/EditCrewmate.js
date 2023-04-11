import React from 'react';
import { useParams } from 'react-router-dom';
import './EditCrewmate.css'

import {useState} from 'react';
import {supabase} from '../client';


const EditCrewmate = ({data}) => {

    const [crewmates, setCrewmate] = useState(null)
    

    const handleChange = (event) => {
        const {name, value} = event.target;
        
        setCrewmate(prevPost => ({
            ...prevPost,
            [name]: value
        }))
}
    const updateCrewmate = async(event) => {
        event.preventDefault();
        await supabase.from('Crewmate').update({name: crewmates.crew_name, speed : crewmates.speed, candy : crewmates.candy}).eq('id',id);
    
        window.location = "/";
    }

    const {id} = useParams();
   // const crewmate = data.filter(item => item.id === id)[0];

    const deleteCrewmate  = async(event) => {
        event.preventDefault();

        await supabase.from('Crewmate').delete().eq('id',id);
        console.log("in delete" , id)
        window.location = "/"
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
            <input type="submit" value="Edit 🖋️" onClick = {updateCrewmate}/>
            <input type = "submit" value = "Delete ⚠️" onClick = {deleteCrewmate}/>
        </form>
    </div>
    )
}

export default EditCrewmate