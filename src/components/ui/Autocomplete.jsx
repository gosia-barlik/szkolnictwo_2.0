import { useEffect } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const InputAutocomplete = (props) => {
  useEffect(() => {
    // console.log(props.results);
  });

  const handleChange = (newValue) => {
    console.log(newValue);
  };
  return (
    props.results && (
      <Autocomplete
        className="main autocomplete"
        multiple
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
