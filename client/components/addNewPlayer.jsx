import axios from "axios";
import React,{useState} from "react";

const AddNewPlayer = () => {
    const [username,setUsername]=useState('')
    const handleUsernameInput=(event)=>{
        setUsername(event.target.value)
    }
  const handleFormSubmit=async (event)=>{
    event.preventDefault();
    const body={username:username}
const res = await axios.post('/api/players',body
 )
 console.log(res)
  }
    {return(<form onSubmit={handleFormSubmit}>
        <label>New Player: </label>
        <input placeholder="enter a name" value={username} onChange={handleUsernameInput}></input>
        <button type="submit" > Submit New Player</button>
    </form>)
      }
    
  };
  
  export default AddNewPlayer;