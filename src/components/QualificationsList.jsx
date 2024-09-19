import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import QualificationListItem from "../components/ui/QualificationListItem";
import InputAutocomplete from "../components/ui/Autocomplete";
import SingleSelect from "../components/ui/SingleSelect";
import {
  changeResults,
  setFiltersIndustry,
  setFiltersArea,
  setFiltersPhrase,
} from "../redux/searchResults";

const QualificationsList = (props) => {
  const [displayAsList, setDisplayAsList] = useState("");
  const [expandFilters, setExpandFilters] = useState(false);
  const [page, setPage] = useState(1);
  const { qualifications, filters_industry, filters_area } = useSelector(
    (state) => state.searchResults
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

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

      {expandFilters && (
        <div className="filters container" style={{ width: "60%" }}>
          <SingleSelect
            options={props.filtersVoivodeships}
            label="województwo"
          />
          <SingleSelect options={props.filtersPRKLevels} label="poziom PRK" />
        </div>
      )}

      <div className="flex-center">
        <IconButton
          title="rozwiń filtry"
          aria-label="Rozwiń filtry"
          onClick={() => setExpandFilters(!expandFilters)}
        >
          <KeyboardDoubleArrowDownRoundedIcon />
        </IconButton>
      </div>

      <div className="controls container">
        <Button
          onClick={() => {
            props.getGraphItemsFixture();
            props.clearFiltersOptions();
            dispatch(setFiltersPhrase(""));
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
        <div style={{ marginTop: "12px" }}>
          <IconButton
            title="lista"
            aria-label="wyświetl w formie listy"
            onClick={() => setDisplayAsList("")}
          >
            <TableRowsRoundedIcon />
          </IconButton>
          <IconButton
            title="kafelki"
            aria-label="wyświetl w formie kafelków"
            onClick={() => setDisplayAsList("grid")}
          >
            <GridViewRoundedIcon />
          </IconButton>
        </div>
      </div>

      <Typography variant="h6" component="h2" style={{ marginTop: "24px" }}>
        Zawody
      </Typography>

      <div className={displayAsList}>
        {qualifications.map((el) => (
          <QualificationListItem
            id={el.id}
            key={el.id}
            name={el.name}
            prk_level={el.prk_level}
            image_url={el.image_url}
            displayAsList={displayAsList}
          />
        ))}
      </div>
      {qualifications.length > 6 && (
        <Stack spacing={2} sx={{ marginTop: "24px" }}>
          <Pagination count={5} page={page} onChange={handlePageChange} />
        </Stack>
      )}
    </>
  );
};

export default QualificationsList;
