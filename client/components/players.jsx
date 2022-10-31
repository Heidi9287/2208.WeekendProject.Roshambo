import React,{useEffect} from "react";
import axios from "axios";
import{useDispatch,useSelector}from'react-redux';
import{setAllPlayers,setSelectedPlayer}from'../features/playerSlice';
import { Link } from "react-router-dom";


const PlayerList=({selectPlayer})=>{
const allPlayers=useSelector((state)=>state.player.allPlayers);
const dispatch=useDispatch();

const getPlayers=async()=>{
  const players = await axios.get("/api/players");
  dispatch(setAllPlayers(players.data));
}
useEffect(()=>{getPlayers();},[])

return(<div className='board'>
  <h2>Leaderboard</h2>
<div>{allPlayers.map((player) => {
    return (
      <div key={player.id} className="playerList">
          <p >{player.id}: {player.username}</p>
        <Link to={`/players/${player.id}`}>
            <button className="playerName" >Player Detail</button>
             </Link>
        </div>
    );
  })}
</div>
</div>
)

}
  export default PlayerList;