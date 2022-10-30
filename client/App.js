import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PlayerList from "./components/players";
import SinglePlayer from "./components/singlePlayer";
import Home from "./components/home";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const [load, setLoad] = useState(false);
  const getPlayers = async () => {
    const data = await fetch("/api/players");
    const json = await data.json();
    setPlayers(json);
  };

  const selectPlayer = async (playerId) => {
    const singlePlayer = await fetch(`/api/players/${playerId}`);
    const json = await singlePlayer.json();
    setSelectedPlayer(json);
    setLoad(true);
  };

  return (
    <div className="row container">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          exact
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
      </Routes>
    </div>
  );
};

export default App;
