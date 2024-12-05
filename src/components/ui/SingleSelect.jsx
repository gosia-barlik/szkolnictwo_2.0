import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  setFiltersArea,
  setFiltersIndustry,
  setFiltersField,
  setFiltersDemand,
  setFiltersSalary,
  setFiltersVoivodeship
} from "../../redux/searchResults";

const SingleSelect = (props) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const dispatch = useDispatch();

  const handleFiltersIndustry = (newValue) => {
    dispatch(setFiltersIndustry([newValue]));
  };

  const handleFiltersArea = (newValue) => {
    dispatch(setFiltersArea([newValue]));
  };

  const handleFiltersField = (newValue) => {
    dispatch(setFiltersField([newValue]));
  };

  const handleFiltersDemand = (newValue) => {
    dispatch(setFiltersDemand([newValue]));
  };
  const handleFiltersSalary = (newValue) => {
    dispatch(setFiltersSalary([newValue]));
  };
  const handleFiltersVoivodeship = (newValue) => {
    dispatch(setFiltersVoivodeship([newValue]));
  };

  useEffect(() => {
    if (props.selected) {
      setSelectedOption(props.selected);
    }
  }, [props.selected]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOption(value);
    if (props.label === "Obszar") {
      handleFiltersArea(value);
    }
    if (props.label === "Branża") {
      handleFiltersIndustry(value);
    }
    if (props.label === "Dziedzina") {
      handleFiltersField(value);
    }
    if (props.label === "Zapotrzebowanie") {
      handleFiltersDemand(value);
    }
    if (props.label === "Wynagrodzenie") {
      handleFiltersSalary(value);
    }
    if (props.label === "Województwo") {
      handleFiltersVoivodeship(value);
    }
  };

  return (
    <div className="select">
      <FormControl fullWidth disabled={props.disabled}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={selectedOption}
          onChange={handleChange}
          label={props.label}
        >
          <MenuItem value="">
            <strong>Wszystkie</strong>
          </MenuItem>
          {props.options &&
            props.options.map((option) => (
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
