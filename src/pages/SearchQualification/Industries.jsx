import React, { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import InputAutocomplete from "../../components/ui/Autocomplete";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";

const Industries = () => {
  const [results, setResults] = React.useState([]);

  useEffect(() => {
    getIndustries(), [];
  });

  const getIndustries = async () => {
    const response = await MainInfoAPI.getIndustries()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("działam");
      });
    setResults(response.results);
  };

  return (
    <Box>
      <Stack spacing={3} sx={{ width: '100%'}} direction={{ xs: 'column', sm: 'row' }}>
        <InputAutocomplete results={results} />
        <Button variant="outlined">Więcej filtrów</Button>
      </Stack>
    </Box>
  );
};

export default Industries;
