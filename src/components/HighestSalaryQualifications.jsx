import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box, IconButton } from "@mui/material";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import { useTheme } from "@mui/material";
import * as phrases from "../pages/dictionaries/pl.json";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import QualificationListItem from "./ui/QualificationListItem";

const HighestSalaryQualifications = () => {
  const [qualifications, setQualifications] = React.useState([]);
  const [expandList, setExpandList] = React.useState(false);
  const theme = useTheme();

  useEffect(() => {
    getSearchResultsFixture();
  }, []);

  const getSearchResultsFixture = async () => {
    try {
      const response = await MainInfoAPI.getSearchResultsFixture();
      if (response && response.results) {
        setQualifications(response.results);
      } else {
        console.error("No search results received from API");
      }
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, lg: 6 }}>
        <Typography variant="h6" component="h2" color={theme.text.primary.main}>
          Zobacz zawody z najwyższymi zarobkami
        </Typography>
        <Typography
          color={theme.text.primary.main}
          style={{ marginTop: "18px" }}
        >
          Źródło: Dane z monitoringu losów absolwentów
        </Typography>

        {qualifications.slice(0, 4).map((el) => (
          <QualificationListItem
            id={el.id}
            key={el.id}
            name={el.name}
            prk_level={el.prk_level}
            image_url={el.image_url}
          />
        ))}

        {expandList &&
          qualifications
            .slice(4)
            .map((el) => (
              <QualificationListItem
                id={el.id}
                key={el.id}
                name={el.name}
                prk_level={el.prk_level}
                image_url={el.image_url}
              />
            ))}

        <div className="flex-center">
          <IconButton onClick={() => setExpandList(!expandList)}>
            {expandList ? (
              <KeyboardDoubleArrowUpRoundedIcon />
            ) : (
              <KeyboardDoubleArrowDownRoundedIcon />
            )}
          </IconButton>
        </div>
      </Grid>
      <Grid
        size={{ xs: 12, lg: 6 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          component="img"
          sx={{ display: { xs: "none", lg: "flex" } }}
          style={{
            height: 488,
            width: 488,
            marginTop: 100,
          }}
          alt="grafika dekoracyjna"
          src="/src/assets/img/grow_salary.svg"
        />
      </Grid>
    </Grid>
  );
};

export default HighestSalaryQualifications;
