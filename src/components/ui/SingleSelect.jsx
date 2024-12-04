import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { setFiltersArea, setFiltersIndustry } from "../../redux/searchResults";

const SingleSelect = (props) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const dispatch = useDispatch();

  const handleFiltersIndustry = (newValue) => {
    dispatch(setFiltersIndustry([newValue]));
  };

  const handleFiltersArea = (newValue) => {
    dispatch(setFiltersArea([newValue]));
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
    } else if (props.label === "Branża") {
      handleFiltersIndustry(value);
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
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SingleSelect;
