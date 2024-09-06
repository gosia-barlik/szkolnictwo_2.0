import { createSlice } from "@reduxjs/toolkit";

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    qualifications: [],
    filters_industry: [],
    filters_area: [],
    filters_phrase: []
  },
  reducers: {
    changeResults: (state, action) => {
      state.qualifications = action.payload;
    },
    setFiltersIndustry: (state, action) => {
      state.filters_industry = action.payload;
    },
    setFiltersArea: (state, action) => {
      console.log(action.payload)
      state.filters_area = action.payload;
    },
    setFiltersPhrase: (state, action) => {
      console.log(action.payload);
      state.filters_phrase = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeResults, setFiltersIndustry, setFiltersArea, setFiltersPhrase } =
  searchResultsSlice.actions;

export default searchResultsSlice.reducer;
