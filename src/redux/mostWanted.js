import { createSlice } from "@reduxjs/toolkit";

export const mostWantedSlice = createSlice({
  name: "mostWanted",
  initialState: {
    mostWanted: [],
    voivodeship: null,
  },
  reducers: {
    changeResults: (state, action) => {
      state.mostWanted = action.payload;
    },
    setVoivodeship: (state, action) => {
      state.voivodeship = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeResults, setVoivodeship } = mostWantedSlice.actions;

export default mostWantedSlice.reducer;
