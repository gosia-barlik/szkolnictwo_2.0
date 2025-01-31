import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./tabsStore";
import searchResultsReducer from "./searchResultsStore";
import mostWantedReducer from "./mostWantedStore";
import clipboardReducer from "./clipboardStore";

export default configureStore({
  reducer: {
    tabs: tabsReducer,
    searchResults: searchResultsReducer,
    mostWanted: mostWantedReducer,
    clipboard: clipboardReducer
  },
});
