import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchResults";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import QualificationListItem from "../components/ui/QualificationListItem";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import SingleSelect from "../components/ui/SingleSelect";

import {
  changeResults,
  setFiltersIndustry,
  setFiltersArea,
  setFiltersPhrase,
  setGraphItems,
} from "../redux/searchResults";

const SearchResults = () => {
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [filtersOptions, setFiltersOptions] = useState([]);
  const [filtersAreas, setFiltersAreas] = useState([]);
  const [filtersIndustries, setFiltersIndustries] = useState([]);
  const [filtersVoivodeships, setFiltersVoivodeships] = useState([]);
  const [filtersPRKLevels, setFiltersPRKLevels] = useState([]);

  const [displayAsList, setDisplayAsList] = useState("");
  const [expandFilters, setExpandFilters] = useState(false);
  const [page, setPage] = useState(1);
  const { qualifications, filters_industry, filters_area, filters_phrase } =
    useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  useEffect(() => {
    getFiltersOptions();
  }, []);

  useEffect(() => {
    getAutocompleteOptions();
  }, []);

  useEffect(() => {
    if (filters_area.length > 0 && filtersOptions.areas) {
      const areas = filtersOptions.areas;
      const foundIndustry = areas.find((item) => item.area === filters_area[0]);
      if (foundIndustry) {
        setFiltersIndustries(foundIndustry.industry);
      } else {
        setFiltersIndustries([]);
      }
    }
  }, [filters_area, filtersOptions]);

  const getAutocompleteOptions = async () => {
    const response = await MainInfoAPI.getAutocompleteOptions()
      .catch((error) => console.log([error.message]))
      .finally(() => {});
    setAutocompleteOptions(response.results);
  };

  const getFiltersOptions = async () => {
    const response = await MainInfoAPI.getFiltersOptionsFixture()
      .catch((error) => console.log([error.message]))
      .finally(() => {});
    setFiltersOptions(response.results);
    const areas = response.results.areas.map((item) => item.area);
    setFiltersAreas(areas);
    setFiltersVoivodeships(response.results.voivodeships);
    setFiltersPRKLevels(response.results.PRKLevels);
  };

  const clearFiltersOptions = () => {
    setFiltersIndustries([]);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Wrapper>
      <NavLink
        to="/"
        onClick={() => {
          dispatch(setFiltersPhrase(""));
          dispatch(setFiltersIndustry([]));
          dispatch(setFiltersArea([]));
          dispatch(changeResults([]));
          dispatch(setGraphItems([]));
        }}
      >
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
            disabled={filters_area ? false : true}
          />
          <Autocomplete
            style={{ width: "100%", paddingTop: "8px" }}
            value={filters_phrase}
            freeSolo
            disableClearable
            options={autocompleteOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Fraza"
                slotProps={{
                  input: {
                    ...params.InputProps,
                    type: "search",
                  },
                }}
              />
            )}
          />

          {/* <InputAutocomplete results={autocompleteOptions} label="fraza" /> */}
        </Stack>

        {expandFilters && (
          <Stack>
            <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
              <SingleSelect options={filtersVoivodeships} label="Dziedzina" />
              <SingleSelect options={filtersVoivodeships} label="Województwo" />
              <SingleSelect
                options={filtersVoivodeships}
                label="Zapotrzebowanie"
              />
            </Stack>
            <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
              <SingleSelect
                options={filtersVoivodeships}
                label="Wynagrodzenie"
              />
              <Box style={{width:"100%"}}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Najniższy poziom bezrobocia"
                />
              </Box>
              <Box style={{width:"100%"}}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Chcę poza dyplomem zawodowym zdać maturę"
                />
              </Box>
            </Stack>
          </Stack>
        )}

        <div className="flex-center">
          {!expandFilters && (
            <IconButton
              title="rozwiń filtry"
              aria-label="Rozwiń filtry"
              onClick={() => setExpandFilters(!expandFilters)}
            >
              <KeyboardDoubleArrowDownRoundedIcon />
            </IconButton>
          )}
          {expandFilters && (
            <IconButton
              title="zwiń filtry"
              aria-label="Zwiń filtry"
              onClick={() => setExpandFilters(!expandFilters)}
            >
              <KeyboardDoubleArrowUpRoundedIcon />
            </IconButton>
          )}
        </div>

        <div className="controls container">
          <Button
            onClick={() => {
              // props.getGraphItemsFixture();
              clearFiltersOptions();
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
              area={el.area}
              industry={el.industry}
              field={el.field}
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
      </section>
    </Wrapper>
  );
};

export default SearchResults;
