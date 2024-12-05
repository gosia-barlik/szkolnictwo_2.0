import { createSlice } from "@reduxjs/toolkit";

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    qualifications: [],
    filters_industry: [],
    filters_area: [],
    filters_phrase: [],
    filters_field: [],
    filters_voivodeship: [],
    filters_salary: [],
    filters_demand:[],
    graph_items: [],
    selected_item: [],
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
    setFiltersVoivodeship: (state, action) => {
      state.filters_voivodeship = action.payload;
    },
    setFiltersSalary: (state, action) => {
      state.filters_salary = action.payload;
    },
    setFiltersDemand: (state, action) => {
      state.filters_demand = action.payload;
    },
    setFiltersField: (state, action) => {
      state.filters_field = action.payload;
    },
    setGraphItems: (state, action) => {
      state.graph_items = action.payload;
    },
    setSelectedItem: (state, action) => {
      state.selected_item = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeResults,
  setFiltersIndustry,
  setFiltersArea,
  setFiltersPhrase,
  setFiltersField,
  setFiltersSalary,
  setFiltersDemand,
  setFiltersVoivodeship,
  setGraphItems,
  setSelectedItem,
} = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
