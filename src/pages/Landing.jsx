import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import InputAutocomplete from "../components/ui/Autocomplete";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as phrases from "./dictionaries/landing.dictionary.json";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import PieChart from "../components/PieChart";
import QualificationListItem from "../components/ui/QualificationListItem";
import SingleSelect from "../components/ui/SingleSelect";
import MostWantedQualifications from "../components/MostWantedQualifications";

const Landing = () => {
  const [autocompleteOptions, setAutocompleteOptions] = React.useState([]);
  const [filtersOptions, setFiltersOptions] = React.useState([]);
  const [filtersAreas, setFiltersAreas] = React.useState([]);
  const [filtersIndustries, setFiltersIndustries] = React.useState([]);
  const { qualifications, filters_industry, filters_area, filters_phrase } =
    useSelector((state) => state.searchResults);
  const theme = useTheme();
  const listRef = useRef();

  useEffect(() => {
    getAutocompleteOptions();
  }, []);

  useEffect(() => {
    getFiltersOptions();
  }, []);

  useEffect(() => {

    if (filters_area && filtersOptions.length > 0) {
      // Use filters_area directly if it's a string, not an array
      const foundIndustry = filtersOptions.find(
        (item) => item.area === filters_area[0]
      );
      if (foundIndustry) {
        console.log(foundIndustry.industry);
        setFiltersIndustries(foundIndustry.industry);
      } else {
        console.log("Area not found");
      }
    }
  }, [filters_area, filtersOptions]);

  useEffect(() => {
    listRef.current?.scrollIntoView({ behavior: "smooth" }, [qualifications]);
  });

  const getAutocompleteOptions = async () => {
    const response = await MainInfoAPI.getAutocompleteOptions()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setAutocompleteOptions(response.results);
  };

  const getFiltersOptions = async () => {
    const response = await MainInfoAPI.getFiltersOptionsFixture()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setFiltersOptions(response.results);
    const areas = response.results.map((item) => item.area);
    setFiltersAreas(areas);
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
              <PieChart />
            </Grid>
          </Grid>
        </Box>
      </header>
      <main>
        {qualifications.length > 0 && (
          <section className="qualifications-list" ref={listRef}>
            <div className="filters container">
              <SingleSelect
                options={filtersAreas}
                label="obszar"
                selected={filters_area}
              />
              <SingleSelect
                options={filtersIndustries}
                label="branża"
                selected={filters_industry}
                disabled={filters_area ? false : true}
              />

              <InputAutocomplete results={autocompleteOptions} label="fraza" />
            </div>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "24px" }}
            >
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
