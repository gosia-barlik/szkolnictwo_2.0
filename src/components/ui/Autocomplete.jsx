
import React, { useEffect }  from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";
import { useDispatch, useSelector } from "react-redux";
import { changeResults } from "../../redux/searchResults";

const InputAutocomplete = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(props.results);
  });

  const handleChange = (newValue) => {
    console.log(newValue);
    getSearchResultsFixture();
  };

  const getSearchResultsFixture = async () => {
    const response = await MainInfoAPI.getSearchResultsFixture()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    if (response && response.results) {
      handleSearchResults([...response.results]);
    } else {
      console.error("No data received from API");
    }
  };

  const handleSearchResults = (newValue) => {
    dispatch(changeResults(newValue));
  };

  return (
    props.results && (
      <Autocomplete
        freeSolo
        className="main autocomplete"
        options={props.results.map((option) => option.name)}
        filterSelectedOptions
        onChange={(event, newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField fullWidth {...params} label={props.label} />
        )}
      ></Autocomplete>
    )
  );
};
export default InputAutocomplete;
