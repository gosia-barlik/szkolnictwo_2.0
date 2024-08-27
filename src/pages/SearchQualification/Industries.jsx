import React, { useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import InputAutocomplete from "../../components/ui/Autocomplete";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";
import IndustriesListItem from "./IndustriesListItem";
import Pagination from "@mui/material/Pagination";
import "./Industries.css";

const Industries = () => {
  const [industries, setIndustries] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    getIndustries(), [];
  });

  useEffect(() => {
    getIndustriesQualifications();
  }, []);

  const getIndustries = async () => {
    const response = await MainInfoAPI.getIndustries()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setIndustries(response.results);
  };

  const getIndustriesQualifications = async () => {
    try {
      const response = await MainInfoAPI.getIndustriesQualifications();
      setData(response);
      // if (response.results) {
      //   const initialSectionState = response.results.reduce((acc, el) => {
      //     el.children.forEach((child) => {
      //       acc[child.name] = false;
      //     });
      //     return acc;
      //   }, {});
      //   setSection(initialSectionState);
      // }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      <Stack
        spacing={3}
        sx={{ width: "100%" }}
        direction={{ xs: "column", sm: "row" }}
      >
        <InputAutocomplete results={industries} label="Wskaż branżę" />
        <Button variant="outlined">Więcej filtrów</Button>
      </Stack>
      <Typography style={{ fontWeight: 600 }}>
        liczba kwalifikacji: {data.qualifications_count}
      </Typography>
      {data.results &&
        data.results.map((el) => (
          <IndustriesListItem
            key={el.name}
            name={el.name}
            id={el.id}
            children={el.children}
            qualifications_count={el.qualifications_count}
          />
        ))}
      <Stack spacing={2}   sx={{ width: "800px", alignItems:"center", marginTop: "24px" }}>
        <Pagination count={10} page={page} onChange={handlePageChange} />
      </Stack>
    </Box>
  );
};

export default Industries;
