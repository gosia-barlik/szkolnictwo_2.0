import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import {
  setFiltersArea,
  setFiltersIndustry,
  setFiltersField,
  setFiltersDemand,
  setFiltersSalary,
  setFiltersVoivodeship,
} from "../../../redux/searchResults";

const filterActions = {
  Obszar: setFiltersArea,
  Branża: setFiltersIndustry,
  Dziedzina: setFiltersField,
  Zapotrzebowanie: setFiltersDemand,
  Wynagrodzenie: setFiltersSalary,
  Województwo: setFiltersVoivodeship,
};

const SingleSelect = ({ label, selected, options, disabled }) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected) {
      setSelectedOption(selected);
    }
  }, [selected]);

  const handleChange = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;
      setSelectedOption(value);

      const action = filterActions[label];
      if (action) {
        dispatch(action([value]));
      }
    },
    [label, dispatch]
  );

  return (
    <div className="select">
      <FormControl fullWidth disabled={disabled}>
        <InputLabel>{label}</InputLabel>
        <Select value={selectedOption} onChange={handleChange} label={label}>
          <MenuItem value="">
            <strong>Wszystkie</strong>
          </MenuItem>
          {options &&
            options.map((option) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SingleSelect;
