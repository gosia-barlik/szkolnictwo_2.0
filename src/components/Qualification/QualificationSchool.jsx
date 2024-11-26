import React, { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/QualificationPage";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";
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

const QualificationSchool = () => {
  const [voivodeships, setVoivodeships] = useState([]);
  const [selectedVoivodeship, setSelectedVoivodeship] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch voivodeships on component mount
  useEffect(() => {
    getSelectOptions();
  }, []);

  const handleSelectChange = (event) => {
    const voivodeship = event.target.value;
    setSelectedVoivodeship(voivodeship);
    // if (selectedVoivodeship) {
    //   getSearchResultsFixture(selectedVoivodeship);
    // }
  };

  const getSelectOptions = async () => {
    try {
      const response = await MainInfoAPI.getVoivodeships();
      if (response && response.results) {
        setVoivodeships(response.results);
      } else {
        console.error("No voivodeship data received from API");
      }
    } catch (error) {
      console.error("Error fetching voivodeships:", error.message);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Wrapper>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
        <Typography variant="h6">
            Wybierz województwo z listy lub skorzystaj z mapy!
          </Typography>
          {selectedVoivodeship && (
            <Typography style={{ fontWeight: "700" }}>
              Wybrane województwo: {selectedVoivodeship.name}
            </Typography>
          )}
          <FormControl fullWidth style={{ margin: "24px 0px" }}>
            <InputLabel>Województwo</InputLabel>
            <Select
              value={selectedVoivodeship || ""}
              label="województwo"
              onChange={handleSelectChange}
            >
              {voivodeships.map((el) => (
                <MenuItem key={el.id} value={el}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="h6" style={{marginTop:"24px"}}>
            Lista szkół i placówek oświatowych
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            paddingTop: { xs: 2, md: 8 },
            paddingLeft: { xs: 2, md: 8 },
          }}
        >
          <PolandMap />
        </Box>
      </Stack>
      <Box
        sx={{ width: { xs: "100%", md: "60%" }, marginTop: { xs: 2, md: -28 } }}
      >
        <SchoolTable />
      </Box>
      <Stack
        spacing={2}
        sx={{
          marginTop: 2,
          width: { xs: "100%", md: "60%" },
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
