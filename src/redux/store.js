import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./tabs";
import searchResultsReducer from "./searchResults";
import mostWantedReducer from "./mostWanted";

export default configureStore({
  reducer: {
    tabs: tabsReducer,
    searchResults: searchResultsReducer,
    mostWanted: mostWantedReducer
  },
});
