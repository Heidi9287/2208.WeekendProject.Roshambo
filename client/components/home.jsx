import React from 'react';
import { Link } from 'react-router-dom';

const Home=()=>{
    return (<div>

    <div >
      <Link to="/players">
        <button className="playerListButton">Leaderboard</button>
      </Link>
      <button className="playButton">Play</button>
    </div>
 
    </div>)

}

  
  export default Home;