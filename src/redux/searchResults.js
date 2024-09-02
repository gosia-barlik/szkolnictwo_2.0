import { createSlice } from "@reduxjs/toolkit";

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    qualifications: [],
    filters_industry: [],
    filters_area: [],
  },
  reducers: {
    changeResults: (state, action) => {
      state.qualifications = action.payload;
    },
    setFiltersIndustry: (state, action) => {
      console.log(action.payload);
      state.filters_industry = action.payload;
    },
    setFiltersArea: (state, action) => {
      console.log(action.payload);
      state.filters_area = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeResults, setFiltersIndustry, setFiltersArea } =
  searchResultsSlice.actions;

export default searchResultsSlice.reducer;
