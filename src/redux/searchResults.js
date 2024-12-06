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
    filters_demand: [],
    filters_final_exam: false,
    filters_unemployment: false,
    expand_filters: false,
    display_as_list: "",
    page: 1,
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
    setFiltersFinalExam: (state, action) => {
      state.filters_final_exam = action.payload;
    },
    setFiltersUnemployment: (state, action) => {
      state.filters_unemployment = action.payload;
    },
    setExpandFilters: (state, action) => {
      state.expand_filters = action.payload;
    },
    setDisplayAsList: (state, action) => {
      state.display_as_list = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
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
  setFiltersFinalExam,
  setFiltersUnemployment,
  setExpandFilters,
  setDisplayAsList,
  setPage,
  setGraphItems,
  setSelectedItem,
} = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
