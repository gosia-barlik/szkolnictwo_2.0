import { createSlice } from "@reduxjs/toolkit";

export const clipboardSlice = createSlice({
  name: "clipboard",
  initialState: {
    favorites: [],
  },

  reducers: {
    addToClipboard: (state, action) => {
        state.favorites = [...state.favorites, action.payload];
    },
    removeFromClipboard: (state, action) => {
        state.favorites = state.favorites.filter((item) => item !== action.payload);
      },
  },
});

// Action creators are generated for each case reducer function
export const { addToClipboard, removeFromClipboard } = clipboardSlice.actions;

export default clipboardSlice.reducer;