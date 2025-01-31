import React, { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import * as phrases from "../../shared/dictionaries/pl.json";
import { MainInfoAPI } from "../../api/qualifications/mainInfoApi";
import { DictionaryAPI } from "../../api/dictionaries/dictionaryApi";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import QualificationListItem from "./ui/QualificationListItem";
import PolandMap from "./ui/Polandmap";
import { useDispatch, useSelector } from "react-redux";
import { changeResults, setVoivodeship } from "../../redux/mostWantedStore";

const MostWantedQualifications = () => {
  const [voivodeships, setVoivodeships] = useState([]);
  const { mostWanted, voivodeship } = useSelector((state) => state.mostWanted);
  const dispatch = useDispatch();
  const theme = useTheme();
  const mostWantedRef = useRef();

  // Fetch voivodeships on component mount
  useEffect(() => {
    getSelectOptions();
  }, []);

  // useEffect(() => {
  //   mostWantedRef.current?.scrollIntoView({ behavior: "smooth" }, [mostWanted]);
  // });

  const handleChange = (event) => {
    const selectedVoivodeship = event.target.value;
    dispatch(setVoivodeship(selectedVoivodeship));
    if (selectedVoivodeship) {
      getSearchResults(selectedVoivodeship);
    }
  };

  const getSelectOptions = async () => {
    try {
      const response = await DictionaryAPI.getVoivodeships();
      if (response && response.results) {
        setVoivodeships(response.results);
      } else {
        console.error("No voivodeship data received from API");
      }
    } catch (error) {
      console.error("Error fetching voivodeships:", error.message);
    }
  };

  const getSearchResults = async (voivodeship) => {
    try {
      const response = await MainInfoAPI.getSearchResults();
      if (response && response.results) {
        dispatch(changeResults(response.results));
      } else {
        console.error("No search results received from API");
      }
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h6" component="h2" color={theme.text.primary.main}>
          {phrases.landing.byRegion.title}
        </Typography>
        <Typography
          color={theme.text.primary.main}
          style={{ marginTop: "18px", fontWeight: 600 }}
        >
          {phrases.landing.byRegion.action}
        </Typography>

        <FormControl fullWidth style={{margin: "24px 0px" }}>
          <InputLabel>{phrases.common.labels.voivodeship}</InputLabel>
          <Select
            value={voivodeship || ""}
            label="województwo"
            onChange={handleChange}
          >
            {voivodeships.map((el) => (
              <MenuItem key={el.id} value={el}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {voivodeship && (
          <Typography ref={mostWantedRef} style={{fontWeight:"700"}}>
            {phrases.common.selected_voivodeship} {voivodeship.name}
          </Typography>
        )}
        {mostWanted.map((el) => (
          <QualificationListItem
            id={el.id}
            key={el.id}
            name={el.name}
            prk_level={el.prk_level}
            image_url={el.image_url}
          />
        ))}
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <PolandMap />
      </Grid>
    </Grid>
  );
};

export default MostWantedQualifications;
