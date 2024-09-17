import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import InputAutocomplete from "../components/ui/Autocomplete";
import Button from "@mui/material/Button";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import QualificationListItem from "../components/ui/QualificationListItem";
import SingleSelect from "../components/ui/SingleSelect";

import {
  changeResults,
  setFiltersIndustry,
  setFiltersArea,
} from "../redux/searchResults";

const QualificationsList = (props) => {
  const { qualifications, filters_industry, filters_area } = useSelector(
    (state) => state.searchResults
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="filters container">
        <SingleSelect
          options={props.filtersAreas}
          label="obszar"
          selected={filters_area}
        />
        <SingleSelect
          options={props.filtersIndustries}
          label="branża"
          selected={filters_industry}
          disabled={filters_area ? false : true}
        />
        <InputAutocomplete results={props.autocompleteOptions} label="fraza" />
      </div>
      <Button
        onClick={() => {
          props.getGraphItemsFixture();
          dispatch(setFiltersIndustry([]));
          dispatch(setFiltersArea([]));
          dispatch(changeResults([]));
        }}
        color="black"
        endIcon={<CloseRoundedIcon />}
        style={{ marginTop: "12px", width: "164px" }}
      >
        Wyczyść filtry
      </Button>
      <Typography variant="h6" component="h2" style={{ marginTop: "24px" }}>
        Zawody
      </Typography>
      {qualifications.map((el) => (
        <QualificationListItem
          id={el.id}
          key={el.id}
          name={el.name}
          prk_level={el.prk_level}
          image_url={el.image_url}
        />
      ))}
    </>
  );
};

export default QualificationsList;
