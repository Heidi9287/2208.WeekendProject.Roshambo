import React from "react";

const SinglePlayer = ({ selectedPlayer,load}) => {
 console.log(load)
      if(load===true){return(
      <div className="board">
          <h2>
           {selectedPlayer.username}'s game results
          </h2>
          <div className="singlePlayerList">
       {selectedPlayer.games.map(game=>{return(<>
        <p id="gameId">GameId: {game.id}</p>
        <p id="gameResult">
       Game Result: {game.result}</p>
       </> )
       })}</div>
      </div>)
      }
    ;
  };
  
  export default SinglePlayer;