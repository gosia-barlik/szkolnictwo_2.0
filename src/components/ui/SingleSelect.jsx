import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { setFiltersArea, setFiltersIndustry } from "../../redux/searchResults";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(option, selectedOption, theme) {
  return {
    fontWeight:
      selectedOption.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SingleSelect = (props) => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState([]);
  const dispatch = useDispatch();

  const handleFiltersIndustry = (newValue) => {
    const array = [];
    array.push(newValue);
    dispatch(setFiltersIndustry(array));
  };

  const handleFiltersArea = (newValue) => {
    const array = [];
    array.push(newValue);
    dispatch(setFiltersArea(array));
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

    // Update the selected options state
    setSelectedOption(typeof value === "string" ? value.split(",") : value);

    // Use the latest selected values (from 'value') to update Redux
    if (props.label === "obszar") {
      handleFiltersArea(value);
    } else if (props.label === "branża") {
      handleFiltersIndustry(value);
    }
  };

  return (
    <div className="multiple select">
      <FormControl fullWidth disabled={props.disabled}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={selectedOption}
          onChange={handleChange}
          input={<OutlinedInput label="Chip" />}
          MenuProps={MenuProps}
        >
          {props.options &&
            props.options.map((option) => (
              <MenuItem
                key={option}
                value={option}
                style={getStyles(option, selectedOption, theme)}
              >
                {option}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SingleSelect;
