import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchResults";
import Typography from "@mui/material/Typography";
import {
  IconButton,
  Button,
  FormControlLabel,
  Stack,
  Checkbox,
  Pagination,
  TextField,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import QualificationListItem from "../components/ui/QualificationListItem";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import SingleSelect from "../components/ui/SingleSelect";
import { useSearchParams } from "react-router-dom";

import {
  changeResults,
  setFiltersIndustry,
  setFiltersArea,
  setFiltersPhrase,
  setFiltersField,
  setFiltersSalary,
  setFiltersDemand,
  setFiltersVoivodeship,
  setGraphItems,
} from "../redux/searchResults";

const SearchResults = () => {
  const dispatch = useDispatch();
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [filtersOptions, setFiltersOptions] = useState([]);
  const [filtersAreas, setFiltersAreas] = useState([]);
  const [filtersIndustries, setFiltersIndustries] = useState([]);
  const [filtersFields, setFiltersFields] = useState([]);
  const [expandFilters, setExpandFilters] = useState(false);
  const [displayAsList, setDisplayAsList] = useState("");
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    qualifications,
    filters_industry,
    filters_area,
    filters_phrase,
    filters_voivodeship,
    filters_field,
    filters_demand,
    filters_salary,
  } = useSelector((state) => state.searchResults);

  useEffect(() => {
    fetchFiltersOptions();
    fetchAutocompleteOptions();
  }, []);

  useEffect(() => {
    updateIndustries();
  }, [filters_area, filtersOptions]);

  useEffect(() => {
    updateFields();
  }, [filtersIndustries, filters_industry]);

  useEffect(() => {
    fetchSearchResults();
  }, [
    filters_industry,
    filters_area,
    filters_phrase,
    filters_voivodeship,
    filters_field,
    filters_demand,
    filters_salary,
  ]);

  const fetchFiltersOptions = async () => {
    try {
      const response = await MainInfoAPI.getFiltersOptionsFixture();
      setFiltersOptions(response.results);
      setFiltersAreas(
        response.results.areas.map(({ id, name }) => ({ id, name }))
      );
    } catch (error) {
      console.error("Error fetching filters options:", error.message);
    }
  };

  const fetchAutocompleteOptions = async () => {
    try {
      const response = await MainInfoAPI.getAutocompleteOptions();
      setAutocompleteOptions(response.results);
    } catch (error) {
      console.error("Error fetching autocomplete options:", error.message);
    }
  };

  const fetchSearchResults = async () => {
    try {
      const response = await MainInfoAPI.getSearchResultsFixture();
      if (response && response.results) {
        dispatch(changeResults(response.results));
      } else {
        console.error("No data received from API");
      }
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  const updateIndustries = () => {
    if (
      filters_area.length > 0 &&
      filtersOptions.areas &&
      Array.isArray(filtersOptions.areas)
    ) {
      const foundArea = filtersOptions.areas.find(
        (area) => area.name === filters_area[0]
      );
      setFiltersIndustries(foundArea ? foundArea.industries : []);
    } else {
      setFiltersIndustries([]);
    }
  };

  const updateFields = () => {
    if (filters_industry.length > 0) {
      const foundIndustry = filtersIndustries.find(
        (industry) => industry.name === filters_industry[0]
      );
      setFiltersFields(foundIndustry ? foundIndustry.fields : []);
    } else {
      setFiltersFields([]);
    }
  };

  // Synchronizacja query stringów przy zmianie filtrów
  useEffect(() => {
    const newQueryParams = {
      area: filters_area.join(","), // Ustawienie wartości domyślnej
      industry: filters_industry.join(","),
      phrase: [filters_phrase].join(","),
      voivodeship: filters_voivodeship.join(","),
      field: filters_field.join(","),
      demand: filters_demand.join(","),
      salary: filters_salary,
    };

    // Aktualizowanie query stringów po każdej zmianie filtra
    setSearchParams(newQueryParams);
  }, [filters_area, filters_industry, filters_phrase, filters_voivodeship, filters_field, filters_demand, setSearchParams]);

  const clearAllFilters = () => {
    dispatch(setFiltersIndustry([]));
    dispatch(setFiltersArea([]));
    dispatch(setFiltersPhrase([]));
    dispatch(setFiltersField([]));
    dispatch(setFiltersSalary([]));
    dispatch(setFiltersDemand([]));
    dispatch(setFiltersVoivodeship([]));
    dispatch(setGraphItems([]));
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Wrapper>
      <NavLink to="/" onClick={() => clearAllFilters()}>
        Wróć
      </NavLink>

      <section className="qualifications-list">
        <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
          <SingleSelect
            options={filtersAreas}
            label="Obszar"
            selected={filters_area}
          />
          <SingleSelect
            options={filtersIndustries}
            label="Branża"
            selected={filters_industry}
            disabled={!filters_area.length}
          />
          <Autocomplete
            style={{ width: "100%", paddingTop: "8px" }}
            value={filters_phrase}
            freeSolo
            options={autocompleteOptions}
            getOptionLabel={(option) =>
              typeof option === "string" ? option : ""
            }
            filterSelectedOptions
            renderInput={(params) => (
              <TextField fullWidth {...params} label="Fraza" />
            )}
          />
        </Stack>

        {expandFilters && (
          <Stack spacing={2}>
            <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
              <SingleSelect
                options={filtersFields}
                selected={filters_field}
                label="Dziedzina"
                disabled={!filters_industry.length}
              />
              <SingleSelect
                options={filtersOptions.voivodeships}
                selected={filters_voivodeship}
                label="Województwo"
              />
              <SingleSelect
                options={filtersOptions.demands}
                selected={filters_demand}
                label="Zapotrzebowanie"
              />
            </Stack>
            <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
              <SingleSelect
                options={filtersOptions.salaries}
                selected={filters_salary}
                label="Wynagrodzenie"
              />
              <FormControlLabel
                style={{ width: "100%" }}
                control={<Checkbox />}
                label="Najniższy poziom bezrobocia"
              />
              <FormControlLabel
                style={{ width: "100%" }}
                control={<Checkbox />}
                label="Matura z dyplomem zawodowym"
              />
            </Stack>
          </Stack>
        )}

        <div className="flex-center">
          <IconButton onClick={() => setExpandFilters(!expandFilters)}>
            {expandFilters ? (
              <KeyboardDoubleArrowUpRoundedIcon />
            ) : (
              <KeyboardDoubleArrowDownRoundedIcon />
            )}
          </IconButton>
        </div>

        <div className="controls container">
          <Button
            onClick={clearAllFilters}
            color="black"
            endIcon={<CloseRoundedIcon />}
            style={{ marginTop: "12px", textTransform: "none" }}
          >
            Wyczyść filtry
          </Button>
          <div style={{ marginTop: "12px" }}>
            <IconButton onClick={() => setDisplayAsList("")}>
              <TableRowsRoundedIcon />
            </IconButton>
            <IconButton onClick={() => setDisplayAsList("grid")}>
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
              key={el.id}
              {...el}
              displayAsList={displayAsList}
            />
          ))}
        </div>

        {qualifications.length > 6 && (
          <Stack spacing={2} sx={{ marginTop: "24px" }}>
            <Pagination count={5} page={page} onChange={handlePageChange} />
          </Stack>
        )}
      </section>
    </Wrapper>
  );
};

export default SearchResults;
