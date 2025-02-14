import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {Typography, Box} from "@mui/material";
import InputAutocomplete from "../../modules/components/ui/Autocomplete";
import PieChart from "../components/PieChart";
import HighestSalaryQualifications from "../components/HighestSalaryQualifications";
import * as phrases from "../../shared/dictionaries/pl.json";
import Wrapper from "../../../assets/wrappers/LandingPage";
import { MainInfoAPI } from "../../api/qualifications/mainInfoApi";
import { DictionaryAPI } from "../../api/dictionaries/dictionaryApi";
import { setGraphItems, setSelectedItem } from "../../redux/searchResultsStore";

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
    const response = await DictionaryAPI.getAutocompleteOptions()
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
      getGraphItems();
    }
  }, [graph_items]);



  useEffect(() => {
    listRef.current?.scrollIntoView({ behavior: "smooth" }, [qualifications]);
  });

  const getGraphItems = async () => {
    handleSelectItem([]);
    const response = await MainInfoAPI.getGraphItems()
      .catch((error) => console.log([error.message]))//TODO:: po co to?
      .finally(() => {});//TODO:: po co to? czy  handleGraphItems nie powinno byc w finally?
    handleGraphItems(response.results);
  };

  return (
    <Wrapper>
      <header className="home-header">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }} className="column-left">
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
              <PieChart getGraphItems={getGraphItems} />
            </Grid>
          </Grid>
        </Box>
      </header>
      <main>

        <section className="qualifications-by-salary">
        <HighestSalaryQualifications/>
        </section>
      </main>
    </Wrapper>
  );
};
export default Landing;
