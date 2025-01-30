import React, { useEffect, useState } from "react";
import Wrapper from "../../../../assets/wrappers/QualificationPage";
import { MainInfoAPI } from "../../../api/qualifications/mainInfoApi";
import { DictionaryAPI } from "../../../api/dictionaries/dictionaryApi";
import SchoolTable from "./SchoolTable";
import QualificationSchoolMap from "./QualificationSchoolMap";
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
import * as phrases from "../../../shared/dictionaries/pl.json";

const useFetchData = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFunction();
        if (response?.results) {
          setData(response.results);
        } else {
          throw new Error("No data received");
        }
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      }
    };

    fetchData();
  }, dependencies);

  return { data, error };
};

const Dropdown = ({ label, options, value, onChange, disabled }) => (
  <FormControl fullWidth style={{ margin: "12px 0px" }} disabled={disabled}>
    <InputLabel>{label}</InputLabel>
    <Select value={value || ""} label={label} onChange={onChange}>
      {options.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          {option.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const QualificationSchool = () => {
  const [activeProvinceId, setActiveProvinceId] = useState("PL-16"); 
  const [selectedVoivodeship, setSelectedVoivodeship] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [page, setPage] = useState(1);

  const { data: voivodeshipOptions } = useFetchData(DictionaryAPI.voivodeships);

  // Ustawienie domyślnego województwa
  useEffect(() => {
    if (voivodeshipOptions.length > 0 && !selectedVoivodeship) {
      const defaultVoivodeship = voivodeshipOptions.find(
        (voivodeship) => voivodeship.name === "Opolskie"
      );
      if (defaultVoivodeship) {
        setSelectedVoivodeship(defaultVoivodeship);
      }
    }
  }, [voivodeshipOptions, selectedVoivodeship]);

  const { data: cityOptions } = useFetchData(
    () => DictionaryAPI.cities(selectedVoivodeship?.name),
    [selectedVoivodeship]
  );

  const { data: schoolData } = useFetchData(MainInfoAPI.getSchoolDataFixture, [
    selectedVoivodeship,
    selectedCity,
  ]);

 // Obsługa zmiany selectów
  const handleSelectChange = (event, type) => {
    const value = event.target.value;

    if (type === "voivodeship") {
      const voivodeship = voivodeshipOptions.find(
        (option) => option.id === value
      );
      setSelectedVoivodeship(voivodeship);
      setSelectedCity(null); // Reset miasta przy zmianie województwa
    } else if (type === "city") {
      setSelectedCity(value);
    }
  };

  // Obsługa zmiany województwa z mapy
  const handleMapChange = (event) => {
    const voivodeshipName = event.target.getAttribute("data-province");
    const voivodeshipId = event.target.getAttribute("id");

    // Znajdź województwo w liście opcji
    const voivodeship = voivodeshipOptions.find(
      (option) => option.id === voivodeshipId
    );

    if (voivodeship) {
      setSelectedVoivodeship(voivodeship);
      setActiveProvinceId(voivodeshipId);
      setSelectedCity(null); // Reset miasta przy zmianie województwa
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

          <Dropdown
            label={phrases.common.labels.voivodeship}
            options={voivodeshipOptions}
            value={selectedVoivodeship?.id || ""} 
            onChange={(event) => handleSelectChange(event, "voivodeship")}
            disabled={voivodeshipOptions.length === 0}
          />

          <Dropdown
            label={phrases.common.labels.city}
            options={cityOptions}
            value={selectedCity}
            onChange={(event) => handleSelectChange(event, "city")}
            disabled={!selectedVoivodeship}
          />

          <Typography variant="h6" style={{ marginTop: "24px" }}>
            {phrases.qualification.schools_tab.title}
          </Typography>
        </Box>

        {/* Sekcja z mapą */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            padding: 4
          }}
        >
          {selectedVoivodeship && (
            <Typography variant="body2" style={{ marginBottom: "12px", width:400 }}>
              {phrases.common.selected_voivodeship} {selectedVoivodeship.name}
            </Typography>
          )}
          <QualificationSchoolMap handleMapChange={handleMapChange} activeProvinceId={activeProvinceId}/>
        </Box>
      </Stack>

      {/* Tabela szkół */}
      <Box
        sx={{ width: { xs: "100%", md: "65%" }, marginTop: { xs: 2, md: -14 } }}
      >
        <SchoolTable results={schoolData} />
      </Box>

      {/* Paginacja */}
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
