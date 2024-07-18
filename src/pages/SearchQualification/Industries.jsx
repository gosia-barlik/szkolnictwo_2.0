import React, { useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import InputAutocomplete from "../../components/ui/Autocomplete";
import QualificationListItem from "../../components/ui/QualificationListItem";
import QualificationListAccordion from "../../components/ui/QualificationListAccordion";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
// import "./SearchQualification.css";

const Industries = () => {
  const [industries, setIndustries] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [section, setSection] = React.useState({
    administracja: true,
    prawo: false,
    backoffice: false,
  });

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

  const toggleSection = (sectionName) => {
    setSection((prevState) => ({
      ...prevState,
      [sectionName]: !prevState[sectionName],
    }));
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

      <Box sx={{ borderLeft: "3px solid red" }}>
        <Typography variant="h6" style={{ margin: "6px", marginLeft:"14px" }}>
          Administracja i prawo
        </Typography>
        <Typography variant="caption" style={{ margin:"14px" }}>
          liczba kwalifikacji: 587
        </Typography>
        <Box sx={{ marginLeft: "14px"}} className="item-box" onClick={() => toggleSection('administracja')}>
          <Box
            width={60}
            height={90}
            alignItems="center"
            justifyContent="center"
            sx={{ display: "flex"}}
          >
            <WorkspacesIcon />
          </Box>
          <Box display="flex" flexDirection="column" >
            <Typography className="item-title">Administracja</Typography>
            <Typography variant="caption" width={150} className="item-detail">
              liczba kwalifikacji:
            </Typography>
          </Box>
        </Box>
        {section.administracja && (
          <Stack
            spacing={3}
            sx={{ marginTop: "12px", marginLeft: "24px" }}
            direction={{ xs: "column" }}
          >
            {data.results &&
              data.results.map((el) =>
                el.type === "kwalifikacja" ? (
                  <QualificationListItem
                    name={el.name}
                    category={el.category}
                    skills={el.skills}
                  />
                ) : (
                  <QualificationListAccordion
                    name={el.name}
                    skills={el.skills}
                    children={el.children}
                  />
                )
              )}
            <Typography>Lorem ipsum</Typography>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default Industries;
