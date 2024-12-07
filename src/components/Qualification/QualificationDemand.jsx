import React, { useEffect } from "react";
import Wrapper from "../../assets/wrappers/QualificationPage";
import { Typography, Link, Stack, Box } from "@mui/material";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import SignalCellularAlt2BarRoundedIcon from "@mui/icons-material/SignalCellularAlt2BarRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import QualificationDemandMap from "./QualificationDemandMap";
import { MainInfoAPI } from "../../api/Qualifications/mainInfoApi";
import * as phrases from "../../pages/dictionaries/pl.json";

const QualificationDemand = (props) => {
  const [demandData, setDemandData] = React.useState([]);

  useEffect(() => {
    getDemandDataFixture();
  }, []);

  const getDemandDataFixture = async () => {
    try {
      const response = await MainInfoAPI.getQualificationDemandMapFixture();
      if (response && response.results) {
        setDemandData(response.results.voivodeship_demands);
      } else {
        console.error("No search results received from API");
      }
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  const categorizeByDemand = (demandData) => {
    const demandZero = [];
    const demandOne = [];
    const demandTwo = [];

    // Iterate through the input array
    demandData.forEach((item) => {
      const { demand, voivodeship_demand_id, voivodeship_demand_name } = item;
      // Categorize based on demand value
      switch (demand) {
        case "0":
          demandZero.push(item);
          break;
        case "1":
          demandOne.push(item);
          break;
        case "2":
          demandTwo.push(item);
          break;
        default:
          // Handle unexpected cases if necessary
          console.warn(`Unexpected demand value: ${demand}`);
      }
    });

    // Return the categorized arrays
    return { demandZero, demandOne, demandTwo };
  };

  const relevant = [
    "dolnośląskie",
    "kujawsko-pomorskie",
    "mazowieckie",
    "łódzkie",
    "podlaskie",
  ];
  const moderate = [
    "lubelskie",
    "lubuskie",
    "opolskie",
    "podkarpackie",
    "pomorskie",
  ];
  return (
    <Wrapper>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box sx={{ width: { xs: "100%", md: "65%" } }}>
          <Typography variant="h6">
            {phrases.qualification.demand_tab.title} {props.name}
          </Typography>
          <Typography variant="body2" style={{ marginTop: "24px" }}>
            {phrases.qualification.demand_tab.subtitle_1} {props.name}
            {phrases.qualification.demand_tab.subtitle_2}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <SignalCellularAltRoundedIcon sx={{ marginTop: 2.5 }} />
            <Typography variant="body2" style={{ marginTop: "24px" }}>
              <strong>{phrases.qualification.demand_tab.relevant} </strong> dla
              województw:
            </Typography>
          </Box>
          <Typography>
            {categorizeByDemand(demandData).demandTwo.map((item) => (
              <span key={item.voivodeship_demand_id}>
                {item.voivodeship_demand_name},{" "}
              </span>
            ))}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <SignalCellularAlt2BarRoundedIcon sx={{ marginTop: 2.5 }} />
            <Typography variant="body2" style={{ marginTop: "24px" }}>
              <strong>{phrases.qualification.demand_tab.moderate} </strong> dla
              województw:
            </Typography>
          </Box>
          <Typography>
            {categorizeByDemand(demandData).demandOne.map((item) => (
              <span key={item.voivodeship_demand_id}>
                {item.voivodeship_demand_name},{" "}
              </span>
            ))}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <QuestionMarkRoundedIcon sx={{ marginTop: 2.5 }} />
            <Typography variant="body2" style={{ marginTop: "24px" }}>
              <strong>{phrases.qualification.demand_tab.not_included}</strong>
            </Typography>
          </Box>
          <Typography>
            {categorizeByDemand(demandData).demandZero.map((item) => (
              <span key={item.voivodeship_demand_id}>
                {item.voivodeship_demand_name},{" "}
              </span>
            ))}
          </Typography>
          <Typography variant="body2" style={{ marginTop: "24px" }}>
            {phrases.qualification.demand_tab.description}
          </Typography>
          <Typography variant="body2" style={{ marginTop: "24px" }}>
            {phrases.qualification.demand_tab.source}
          </Typography>
          <Link href="#" style={{ color: "black" }}>
            {phrases.qualification.demand_tab.announcement}
          </Link>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <QualificationDemandMap demandData={demandData} />
        </Box>
      </Stack>
    </Wrapper>
  );
};

export default QualificationDemand;
