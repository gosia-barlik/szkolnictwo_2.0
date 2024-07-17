import React, { useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import InputAutocomplete from "../../components/ui/Autocomplete";
import QualificationListItem from "../../components/ui/QualificationListItem";
import QualificationListAccordion from "../../components/ui/QualificationListAccordion";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";

const Industries = () => {
  const [industries, setIndustries] = React.useState([]);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getIndustries(), [];
  });

  useEffect(() => {
    getQualifications(), [];
  });

  const getIndustries = async () => {
    const response = await MainInfoAPI.getIndustries()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setIndustries(response.results);
  };

  const getQualifications = async () => {
    const response = await MainInfoAPI.getQualifications()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setData(response);
  };

  return (
    <Box>
      <Stack
        spacing={3}
        sx={{ width: "100%" }}
        direction={{ xs: "column", sm: "row" }}
      >
        <InputAutocomplete results={industries} />
        <Button variant="outlined">Więcej filtrów</Button>
      </Stack>
      <Stack
        spacing={3}
        sx={{ width: "100%", marginTop: "12px" }}
        direction={{ xs: "column" }}
      >
        {data.results &&
          data.results.map((el) =>
            el.type === "kwalifikacja" ? (
              <QualificationListItem name={el.name} category={el.category} skills={el.skills}/>
            ) : (
              <QualificationListAccordion name={el.name} skills={el.skills} children={el.children}/>
            )
          )}
          <Typography>Lorem ipsum</Typography>
      </Stack>
    </Box>
  );
};

export default Industries;
