import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {setSelectedPlayer} from '../features/playerSlice'
import axios from 'axios';
import { Link } from "react-router-dom";

const SinglePlayer = () => {
  const {playerId} = useParams() 
  const selectedPlayer = useSelector(state => state.player.selectedPlayer);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  const selectPlayer = async () => {
      const selectedOne= await axios.get(`/api/players/${playerId}`);
      dispatch(setSelectedPlayer(selectedOne.data));
      setLoad(true);
      };

  useEffect(()=>{
    selectPlayer();
      }, [])

if(load===true){return(<>

      <div className="board">
          <h2>
           {selectedPlayer.username}'s game results
          </h2>
          <div className="singlePlayerList">
       {selectedPlayer.games.map(game=>{return(<>
        <p id="gameId">Game Id: {game.id}</p>
        <p id="gameResult">
       Game Result: {game.result}</p>
       </> )
       })}</div>
       <Link to="/players">
  <button id="lButton">Leaderboard</button>
</Link>
      </div></>)
      }
    ;
  };
  
  export default SinglePlayer;