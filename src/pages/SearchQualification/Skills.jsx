import React, { useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import InputAutocomplete from "../../components/ui/Autocomplete";
import QualificationListItem from "../../components/ui/QualificationListItem";
import QualificationListAccordion from "../../components/ui/QualificationListAccordion";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";
import Pagination from "@mui/material/Pagination";

const Industries = () => {
  const [skills, setSkills] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    getSkills(), [];
  });

  useEffect(() => {
    getQualifications(), [];
  });

  const getSkills = async () => {
    const response = await MainInfoAPI.getSkills()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setSkills(response.results);
  };

  const getQualifications = async () => {
    const response = await MainInfoAPI.getQualifications()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setData(response);
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
        <InputAutocomplete results={skills} label="Wskaż umiejętności" />
        <Button variant="outlined">Więcej filtrów</Button>
      </Stack>
      <Typography style={{ fontWeight: 600 }}>
        liczba kwalifikacji: {data.qualifications_count}
      </Typography>
      <Stack
        spacing={3}
        sx={{ width: "100%", marginTop: "12px" }}
        direction={{ xs: "column" }}
      >
        {data.results &&
          data.results.map((el) =>
            el.type === "kwalifikacja" ? (
              <QualificationListItem
                key={el.name}
                name={el.name}
                category={el.category}
                skills={el.skills}
              />
            ) : (
              <QualificationListAccordion
                key={el.name}
                name={el.name}
                skills={el.skills}
                children={el.children}
              />
            )
          )}
      </Stack>
      <Stack
        spacing={2}
        sx={{ width: "800px", alignItems: "center", marginTop: "24px" }}
      >
        <Pagination count={10} page={page} onChange={handlePageChange} />
      </Stack>
    </Box>
  );
};

export default Industries;
