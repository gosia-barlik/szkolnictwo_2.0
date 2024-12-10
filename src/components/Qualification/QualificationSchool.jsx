import React, { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/QualificationPage";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";
import { DictionaryAPI } from "../../api/Dictionaries/dictionaryApi";
import SchoolTable from "./SchoolTable";
import PolandMap from "../ui/Polandmap";
import {
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Box,
  Stack,
  Pagination,
} from "@mui/material";
import * as phrases from "../../pages/dictionaries/pl.json";

const QualificationSchool = () => {
  const [voivodeshipOptions, setVoivodeshipOptions] = useState([]);
  const [selectedVoivodeship, setSelectedVoivodeship] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchVoivodeships();
    console.log(selectedVoivodeship);
  }, []);

  useEffect(() => {
    fetchCities();
  }, [selectedVoivodeship]);

  // Funkcja do pobierania województw
  const fetchVoivodeships = async () => {
    try {
      const response = await DictionaryAPI.voivodeships();
      if (response && response.results) {
        setVoivodeshipOptions(response.results);
      } else {
        console.error("No voivodeship data received from API");
      }
    } catch (error) {
      console.error("Error fetching voivodeships:", error.message);
    }
  };

  // Funkcja do pobierania miast
  const fetchCities = async () => {
    try {
      const response = await DictionaryAPI.cities(selectedVoivodeship.name);
      setCityOptions(response.results);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleSelectChange = (event, id) => {
    if (id === 1) {
      const voivodeship = event.target.value;
      setSelectedVoivodeship(voivodeship);
      console.log(selectedVoivodeship);
    } else if (id === 2) {
      const city = event.target.value;
      setSelectedCity(city);
      console.log(selectedCity);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Wrapper>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box sx={{ width: { xs: "100%", md: "65%" } }}>
          <Typography variant="h6">
            {phrases.landing.byRegion.action}
          </Typography>
          {selectedVoivodeship && (
            <Typography variant="body2">
              {phrases.common.selected_voivodeship} {selectedVoivodeship.name}
            </Typography>
          )}
          <FormControl fullWidth style={{ margin: "24px 0px" }}>
            <InputLabel>{phrases.common.labels.voivodeship}</InputLabel>
            <Select
              value={selectedVoivodeship || ""}
              label="województwo"
              onChange={(event) => handleSelectChange(event, 1)}
            >
              {voivodeshipOptions.map((el) => (
                <MenuItem key={el.id} value={el}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth disabled={selectedVoivodeship.length==0}>
            <InputLabel>{phrases.common.labels.city}</InputLabel>
            <Select
              value={selectedCity || ""}
              label="miasto"
              onChange={(event) => handleSelectChange(event, 2)}
            >
              {cityOptions.map((el) => (
                <MenuItem key={el.id} value={el}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="h6" style={{ marginTop: "24px" }}>
            {phrases.qualification.schools_tab.title}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },
            paddingTop: { xs: 2, md: 6 },
            paddingLeft: { xs: 2, md: 6 },
          }}
        >
          <PolandMap />
        </Box>
      </Stack>
      <Box
        sx={{ width: { xs: "100%", md: "65%" }, marginTop: { xs: 2, md: -20 } }}
      >
        <SchoolTable />
      </Box>
      <Stack
        spacing={2}
        sx={{
          marginTop: 2,
          width: { xs: "100%", md: "65%" },
          justifyContent: "center",
        }}
      >
        <Pagination
          count={5}
          page={page}
          onChange={handlePageChange}
          style={{ display: "flex", justifyContent: "center" }}
        />
      </Stack>
    </Wrapper>
  );
};

export default QualificationSchool;
