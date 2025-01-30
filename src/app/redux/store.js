import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./tabs";
import searchResultsReducer from "./searchResults";
import mostWantedReducer from "./mostWanted";
import clipboardReducer from "./clipboard";

export default configureStore({
  reducer: {
    tabs: tabsReducer,
    searchResults: searchResultsReducer,
    mostWanted: mostWantedReducer,
    clipboard: clipboardReducer
  },
});
