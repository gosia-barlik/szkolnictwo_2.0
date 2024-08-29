import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import InputAutocomplete from "../components/ui/Autocomplete";
import Button from "@mui/material/Button";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import * as phrases from "./dictionaries/landing.dictionary.json";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import PieChart from "../components/PieChart";
import "./Landing.css";

const Landing = () => {
  const [autocompleteOptions, setAutocompleteOptions] = React.useState([]);
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    getAutocompleteOptions(), [];
  });

  const getAutocompleteOptions = async () => {
    const response = await MainInfoAPI.getAutocompleteOptions()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setAutocompleteOptions(response.results);
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
                style={{ marginTop: "18px" }}
              >
                {phrases.landing.header.action}
              </Typography>
              <InputAutocomplete
                results={autocompleteOptions}
                label="Szukaj zawodu"
              />
              <Button
                color="primary"
                variant="text"
                startIcon={<TuneRoundedIcon />}
              >
                Filtry
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <PieChart />
            </Grid>
          </Grid>
        </Box>
      </header>
      <main>
        <section></section>
      </main>
    </>
  );
};
export default Landing;
