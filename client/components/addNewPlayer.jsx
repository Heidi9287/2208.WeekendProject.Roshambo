import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import {addNewPlayer} from '../features/playerSlice'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddNewPlayer = () => {
    const [username,setUsername]=useState('');
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const handleUsernameInput=(event)=>{
        setUsername(event.target.value)
    }
  const handleFormSubmit=async (event)=>{
    event.preventDefault();
const res = await axios.post('/api/players',{username:username}
 )
 dispatch(addNewPlayer(username))
 navigate("/players")
  }
    {return(<form onSubmit={handleFormSubmit} className="newPlayerSubmitForm">
        <label>New Player: </label>
        <input placeholder="enter a name" value={username} onChange={handleUsernameInput}></input>
        <button type="submit" > Submit New Player</button>
    </form>)
      }
    
  };
  
  export default AddNewPlayer;