import { useState, useEffect, useRef } from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import InputAutocomplete from "../components/ui/Autocomplete";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as phrases from "./dictionaries/landing.dictionary.json";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import PieChart from "../components/PieChart";
import MostWantedQualifications from "../components/MostWantedQualifications";
import QualificationsList from "../components/QualificationsList";
import {
  setGraphItems,
  setSelectedItem,
} from "../redux/searchResults";

const Landing = () => {
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [filtersOptions, setFiltersOptions] = useState([]);
  const [filtersAreas, setFiltersAreas] = useState([]);
  const [filtersIndustries, setFiltersIndustries] = useState([]);
  const [filtersVoivodeships, setFiltersVoivodeships] = useState(["Dolnośląskie","Kujawsko-Pomorskie","Lubuskie","Łódzkie","Lubelskie"]);
  const [filtersPRKLevels, setFiltersPRKLevels] = useState(["I","II","III","IV"])
  const { qualifications, filters_area, graph_items } =
    useSelector((state) => state.searchResults);
  const theme = useTheme();
  const listRef = useRef();
  const dispatch = useDispatch();

  const handleGraphItems = (newValue) => {
    dispatch(setGraphItems(newValue));
  };
  const handleSelectItem = (newValue) => {
    dispatch(setSelectedItem(newValue));
  };
  useEffect(() => {
    getAutocompleteOptions();
  }, []);

  useEffect(() => {
    getFiltersOptions();
  }, []);

  useEffect(() => {
    // get data to draw graph if there isnt any
    if (graph_items.length <= 0) {
      getGraphItemsFixture();
    }
  }, [graph_items]);

  useEffect(() => {
    if (filters_area && filtersOptions.length > 0) {
      const foundIndustry = filtersOptions.find(
        (item) => item.area === filters_area[0]
      );
      if (foundIndustry) {
        setFiltersIndustries(foundIndustry.industry);
      }
    }
  }, [filters_area, filtersOptions]);

  useEffect(() => {
    listRef.current?.scrollIntoView({ behavior: "smooth" }, [qualifications]);
  });

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
    const areas = response.results.map((item) => item.area);
    setFiltersAreas(areas);
  };

  const getGraphItemsFixture = async () => {
    handleSelectItem([]);
    const response = await MainInfoAPI.getGraphItemsFixture()
      .catch((error) => console.log([error.message]))
      .finally(() => {});
    handleGraphItems(response.results);
  };

  const clearFiltersOptions = () => {
    setFiltersIndustries([]);
  };

  return (
    <Wrapper>
      <header className="home-header">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h5"
                component="h1"
                color={theme.text.primary.main}
              >
                {phrases.landing.header.title}
              </Typography>
              <Typography
                color={theme.text.primary.main}
                style={{ marginTop: "18px" }}
              >
                {phrases.landing.header.content}
              </Typography>
              <Typography
                color={theme.text.primary.main}
                style={{ marginTop: "18px", fontWeight: 600 }}
              >
                {phrases.landing.header.action}
              </Typography>
              <InputAutocomplete
                results={autocompleteOptions}
                label="Szukaj zawodu"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <PieChart getGraphItemsFixture={getGraphItemsFixture} />
            </Grid>
          </Grid>
        </Box>
      </header>
      <main>
        {qualifications.length > 0 && (
          <section className="qualifications-list" ref={listRef}>
            <QualificationsList
              filtersAreas={filtersAreas}
              filtersIndustries={filtersIndustries}
              filtersVoivodeships ={filtersVoivodeships}
              filtersPRKLevels={filtersPRKLevels}
              autocompleteOptions={autocompleteOptions}
              getGraphItemsFixture={getGraphItemsFixture}
              clearFiltersOptions={clearFiltersOptions}
            />
          </section>
        )}
        <section className="qualifications-by-region">
          <MostWantedQualifications />
        </section>
      </main>
    </Wrapper>
  );
};
export default Landing;
