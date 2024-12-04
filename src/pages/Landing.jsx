import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/LandingPage";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputAutocomplete from "../components/ui/Autocomplete";
import PieChart from "../components/PieChart";
import MostWantedQualifications from "../components/MostWantedQualifications";
import HighestSalaryQualifications from "../components/HighestSalaryQualifications";
import QualificationsList from "./SearchResults";
import * as phrases from "./dictionaries/pl.json";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import { setGraphItems, setSelectedItem } from "../redux/searchResults";

const Landing = () => {
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const { qualifications, filters_area, graph_items } = useSelector(
    (state) => state.searchResults
  );
  const theme = useTheme();
  const listRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    getAutocompleteOptions();
  }, []);

  const getAutocompleteOptions = async () => {
    const response = await MainInfoAPI.getAutocompleteOptions()
      .catch((error) => console.log([error.message]))
      .finally(() => {});
    setAutocompleteOptions(response.results);
  };
  const handleGraphItems = (newValue) => {
    dispatch(setGraphItems(newValue));
  };
  const handleSelectItem = (newValue) => {
    dispatch(setSelectedItem(newValue));
  };


  useEffect(() => {
    // get data to draw graph if there isnt any
    if (graph_items.length <= 0) {
      getGraphItemsFixture();
    }
  }, [graph_items]);



  useEffect(() => {
    listRef.current?.scrollIntoView({ behavior: "smooth" }, [qualifications]);
  });

  const getGraphItemsFixture = async () => {
    handleSelectItem([]);
    const response = await MainInfoAPI.getGraphItemsFixture()
      .catch((error) => console.log([error.message]))
      .finally(() => {});
    handleGraphItems(response.results);
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
        {/* {qualifications.length > 0 && (
          <section className="qualifications-list" ref={listRef}>
            <QualificationsList
            />
          </section>
        )} */}
        {/* <section className="qualifications-by-region">
          <MostWantedQualifications />
        </section> */}
        <section className="qualifications-by-salary">
        <HighestSalaryQualifications/>
        </section>
      </main>
    </Wrapper>
  );
};
export default Landing;
