import React, { useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import InputAutocomplete from "../../components/ui/Autocomplete";
import QualificationListItem from "../../components/ui/QualificationListItem";
import QualificationListAccordion from "../../components/ui/QualificationListAccordion";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";

const Industries = () => {
  const [industries, setIndustries] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [qualifications, setQualifications] = React.useState([
    {
      id: "2346",
      name: "Administracja europejska",
      type: "kwalifikacja",
      category: "studia wyższe",
      children: [],
      skills: ["analizowanie", "dobra pamięć"],
    },
    {
      id: "2346",
      name: "Administracja i cyfryzacja",
      type: "kwalifikacja",
      category: "studia wyższe",
      children: [],
      skills: ["analizowanie", "dobra pamięć"],
    },
  ]);
  const [fields, setFields] = React.useState([]);

  useEffect(() => {
    getIndustries(), [];
  });

  useEffect(() => {
    getData(), [];
  });

  const getIndustries = async () => {
    const response = await MainInfoAPI.getIndustries()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setIndustries(response.results);
  };

  const getData = () => {
    getQualifications();
  };

  const getQualifications = async () => {
    const response = await MainInfoAPI.getQualifications()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setData(response);
  };

  const filterQualifications = (data) => {
    const qualificationArray = data.filter(
      (item) => item.type === "kwalifikacja"
    );
    const fieldArray = data.filter((item) => item.type === "kierunek");
    setQualifications(qualificationArray);
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
