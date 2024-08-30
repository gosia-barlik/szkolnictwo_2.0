import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./tabs";
import searchResultsReducer from "./searchResults"

export default configureStore({
  reducer: {
    tabs: tabsReducer,
    searchResults: searchResultsReducer,
  },
});
