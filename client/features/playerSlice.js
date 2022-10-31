import { createSlice } from "@reduxjs/toolkit";

const initialState = { allPlayers: [], selectedPlayer: {} };

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setAllPlayers: (state, action) => {
      state.allPlayers = action.payload;
    },
    setSelectedPlayer: (state, action) => {
      state.selectedPlayer = action.payload;
    },
    addNewPlayer: () => {},
  },
});
export const { setAllPlayers, setSelectedPlayer, addNewPlayer } =
  playerSlice.actions;
export default playerSlice.reducer;
