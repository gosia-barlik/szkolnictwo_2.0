import { createSlice } from "@reduxjs/toolkit";

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    qualifications: [],
    filters_industry: [],
    filters_area: [],
    filters_phrase: [],
    graph_items: [],
    selected_item: []
  },
  reducers: {
    changeResults: (state, action) => {
      state.qualifications = action.payload;
    },
    setFiltersIndustry: (state, action) => {
      state.filters_industry = action.payload;
    },
    setFiltersArea: (state, action) => {
      state.filters_area = action.payload;
    },
    setFiltersPhrase: (state, action) => {
      state.filters_phrase = action.payload;
    },
    setGraphItems: (state, action) => {
      state.graph_items = action.payload
    },
    setSelectedItem: (state, action) => {
      state.selected_item = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeResults, setFiltersIndustry, setFiltersArea, setFiltersPhrase, setGraphItems, setSelectedItem } =
  searchResultsSlice.actions;

export default searchResultsSlice.reducer;
