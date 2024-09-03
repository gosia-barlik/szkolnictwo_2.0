import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { setFiltersArea, setFiltersIndustry } from "../redux/searchResults";

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

const MultipleSelect = (props) => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = React.useState([]);
  const dispatch = useDispatch();

  const handleFiltersIndustry = (newValue) => {
    dispatch(setFiltersIndustry(newValue));
  };
  const handleFiltersArea = (newValue) => {
    dispatch(setFiltersArea(newValue));
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
      <FormControl style={{ width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">{props.label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedOption}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
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

export default MultipleSelect;
