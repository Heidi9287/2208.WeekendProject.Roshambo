import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import PlayerList from "./components/players";
import SinglePlayer from "./components/singlePlayer";
import Home from "./components/home";
import AddNewPlayer from "./components/addNewPlayer";

const App = () => {
  //---------------creat a new user-----------------------

  return (
    <div className="row container">
      <div className="navBar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/new-player">
          <button>Create New Players</button>
        </Link>
      </div>
      <Routes>
        <Route exact path="/" index element={<Home />} />
        <Route path="/players" element={<PlayerList />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
        <Route path="/new-player" element={<AddNewPlayer />}></Route>
      </Routes>
    </div>
  );
};

export default App;
