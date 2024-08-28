
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import * as phrases from "./dictionaries/landing.dictionary.json";
import { useDispatch } from "react-redux";
import InputAutocomplete from "../components/ui/Autocomplete";
import Button from '@mui/material/Button';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
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
      <header>
        <Grid
          container
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ md: 6 }}
          sx={{
            mt: 8,
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid
            item
            className="main_grid_1"
            xs={12}
            md={6}
            sx={{ pt: 4, pb: 8, order: { xs: 1, md: 0 } }}
          >
            <Typography
              variant="h5"
              component="h1"
              color={theme.text.primary.main}
            >
              {phrases.landing.header.title}
            </Typography>
            <Typography color={theme.text.primary.main} style={{marginTop: '18px'}}>
              {phrases.landing.header.content}
            </Typography>
            <InputAutocomplete results={autocompleteOptions} label="Szukaj zawodu" />
            <Button color="primary" variant="text" startIcon={<TuneRoundedIcon />}>Filtry</Button>
          </Grid>

          <Grid
            item
            className="main_grid_1"
            xs={12}
            sm={12}
            md={4}
            sx={{ pt: 4, pb: 8, order: { xs: 0, md: 1 } }}
          >
            <div className="img"></div>
          </Grid>
        </Grid>
      </header>
      <main>
        <section></section>
      </main>
    </>
  );
};
export default Landing;
