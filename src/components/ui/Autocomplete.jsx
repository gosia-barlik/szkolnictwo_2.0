import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const InputAutocomplete = () => {
  return (
    <Stack spacing={2} sx={{ width: 300, ml: "auto", mr: "auto" }}>
      <Autocomplete
        options={results.map((option) => option.name)}
        renderInput={(params) => <TextField {...params} label="Wyszukaj" />}
      ></Autocomplete>
    </Stack>
  );
};
export default InputAutocomplete;

const results = [
  {
    id: "12345",
    name: "Technik technologii szkła",
  },
  {
    id: "12346",
    name: "Technik technologii drewna",
  },
  {
    id: "12347",
    name: "Technik technologii żywności",
  },
  {
    id: "12348",
    name: "Technik technologii chemicznej",
  },
  {
    id: "12349",
    name: "Technik technologii wyrobów skórzanych",
  },
  {
    id: "123410",
    name: "Technologia chemiczna",
  },
  {
    id: "123411",
    name: "Matematyka w technice",
  },
  {
    id: "123412",
    name: "Information Technology",
  },
];
