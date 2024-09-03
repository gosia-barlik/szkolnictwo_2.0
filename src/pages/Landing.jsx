import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import InputAutocomplete from "../components/ui/Autocomplete";
import Button from "@mui/material/Button";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as phrases from "./dictionaries/landing.dictionary.json";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import PieChart from "../components/PieChart";
import "./Landing.css";
import QualificationListItem from "../components/ui/QualificationListItem";
import MultipleSelect from "./MultipleSelect";

const Landing = () => {
  const [autocompleteOptions, setAutocompleteOptions] = React.useState([]);
  const [filtersOptions, setFiltersOptions] = React.useState([]);
  const { qualifications, filters_industry, filters_area, filters_phrase } =
    useSelector((state) => state.searchResults);
  const theme = useTheme();

  useEffect(() => {
    getAutocompleteOptions(), [];
  });

  useEffect(() => {
    getFiltersOptions(), [];
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
  };

  return (
    <>
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
              {/* <Button
                color="black"
                variant="text"
                startIcon={<TuneRoundedIcon />}
              >
                Filtry
              </Button> */}
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <PieChart />
            </Grid>
          </Grid>
        </Box>
      </header>
      <main>
        {qualifications.length > 0 && (
          <section className="qualifications-list">
            <div className="filters container">
              <MultipleSelect
                options={filtersOptions.area}
                label="obszar"
                selected={filters_area}
              />
              <MultipleSelect
                options={filtersOptions.industry}
                label="branża"
                selected={filters_industry}
              />
              <InputAutocomplete
                results={autocompleteOptions}
                label="fraza"
              />
            </div>
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
      </main>
    </>
  );
};
export default Landing;
