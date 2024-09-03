import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";
import { useDispatch, useSelector } from "react-redux";
import { changeResults, setFiltersPhrase } from "../../redux/searchResults";

const InputAutocomplete = (props) => {
  const { filters_phrase } = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [props.results]);

  const handleChange = (newValue) => {
    if (newValue) {
      console.log(newValue);
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
      <Autocomplete
        value={filters_phrase}
        freeSolo
        className="main autocomplete"
        options={props.results}
        getOptionLabel={(option) => typeof option === 'string' ? option : ""}
        filterSelectedOptions
        onChange={(event, newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField fullWidth {...params} label={props.label} />
        )}
      />
    )
  );
};

export default InputAutocomplete;
