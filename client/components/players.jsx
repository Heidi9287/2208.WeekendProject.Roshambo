import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import AddNewPlayer from "./addNewPlayer";

const PlayerList=({getPlayers,players,selectPlayer,selectedPlayer})=>{

useEffect(()=>{
    getPlayers();
},[])
return(<div className='board'>
  <h2>Leaderboard</h2>
<div>{players.map((player) => {
    return (
      <div key={player.id} className="playerList">
          <p >{player.id}: {player.username}</p>
        <Link to={`/players/${player.id}`}>
            <button onClick={()=>{selectPlayer(player.id)}} className="playerName">Player Detail</button>
             </Link>
        </div>
    );
  })}
</div>
</div>
)

}
  export default PlayerList;