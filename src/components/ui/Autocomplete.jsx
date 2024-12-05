import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Box, Autocomplete, TextField } from "@mui/material";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";
import { useDispatch, useSelector } from "react-redux";
import { changeResults, setFiltersPhrase } from "../../redux/searchResults";

const InputAutocomplete = (props) => {
  const { filters_phrase } = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    if (newValue) {
      dispatch(setFiltersPhrase(newValue));
      getSearchResultsFixture();
    }
  };

  const getSearchResultsFixture = async () => {
    try {
      const response = await MainInfoAPI.getSearchResultsFixture();
      if (response && response.results) {
        handleSearchResults([...response.results]);
      } else {
        console.error("No data received from API");
      }
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  const handleSearchResults = (newValue) => {
    dispatch(changeResults(newValue));
  };

  return (
    props.results && (
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Autocomplete
          value={filters_phrase}
          freeSolo
          className="main autocomplete"
          options={props.results}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : ""
          }
          filterSelectedOptions
          onChange={(event, newValue) => handleChange(newValue)}
          renderInput={(params) => (
            <TextField fullWidth {...params} label={props.label} />
          )}
        />
        <NavLink className="button" to="/search_results">
          Zatwierdź
        </NavLink>
      </Box>
    )
  );
};

export default InputAutocomplete;
