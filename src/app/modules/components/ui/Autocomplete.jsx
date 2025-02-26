import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Box, Autocomplete, TextField } from "@mui/material";
import { MainInfoAPI } from "../../../api/qualifications/mainInfoApi";
import { useDispatch, useSelector } from "react-redux";
import { changeResults, setFiltersPhrase } from "../../../redux/searchResultsStore";

const InputAutocomplete = (props) => {
  const { filters_phrase } = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    if (newValue) {
      dispatch(setFiltersPhrase(newValue));
      getSearchResults();
    }
  };

  const getSearchResults = async () => {
    try {
      const response = await MainInfoAPI.getSearchResults();
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
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
        <NavLink
          className="button"
          to="/search_results"
          style={{ color: "black"}}
        >
          Zatwierdź
        </NavLink>
      </Box>
    )
  );
};

export default InputAutocomplete;
