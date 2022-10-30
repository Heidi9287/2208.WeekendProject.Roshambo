import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import PlayerList from "./components/players";
import SinglePlayer from "./components/singlePlayer";
import Home from "./components/home";
import AddNewPlayer from "./components/addNewPlayer";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const [load, setLoad] = useState(false);
  //---------------get a list of users from db---------------
  const getPlayers = async () => {
    const data = await fetch("/api/players");
    const json = await data.json();
    setPlayers(json);
  };
  //-------------select player to view detail-------------------
  const selectPlayer = async (playerId) => {
    const singlePlayer = await fetch(`/api/players/${playerId}`);
    const json = await singlePlayer.json();
    setSelectedPlayer(json);
    setLoad(true);
  };
  //---------------creat a new user-----------------------

  return (
    <div className="row container">
      <Link to="/new-player">
        <button>Create New Players</button>
      </Link>
      <Routes>
        <Route exact path="/" index element={<Home />} />
        <Route
          path="/players"
          element={
            <PlayerList
              players={players}
              getPlayers={getPlayers}
              selectPlayer={selectPlayer}
              selectedPlayer={selectedPlayer}
            />
          }
        />
        <Route
          path="/players/:playerId"
          element={
            <SinglePlayer
              players={players}
              selectedPlayer={selectedPlayer}
              load={load}
            />
          }
        />
        <Route path="/new-player" element={<AddNewPlayer />}></Route>
      </Routes>
    </div>
  );
};

export default App;
