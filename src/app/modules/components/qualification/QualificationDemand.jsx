import React, { useEffect } from "react";
import Wrapper from "../../../../assets/wrappers/QualificationPage";
import { Typography, Link, Stack, Box } from "@mui/material";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import SignalCellularAlt2BarRoundedIcon from "@mui/icons-material/SignalCellularAlt2BarRounded";
import SignalCellularAlt1BarRoundedIcon from "@mui/icons-material/SignalCellularAlt1BarRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import QualificationDemandMap from "./QualificationDemandMap";
import QualificationPopularityMap from "./QualificationPopularityMap";
import { MainInfoAPI } from "../../../api/qualifications/mainInfoApi";
import * as phrases from "../../../shared/dictionaries/pl.json";

const QualificationDemand = (props) => {
  const [demandData, setDemandData] = React.useState([]);

  useEffect(() => {
    getDemandDataFixture();
  }, []);

  const getDemandDataFixture = async () => {
    try {//TODO:: oblsuga bledow w warstwie API
      const response = await MainInfoAPI.getQualificationDemandMap();
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
    const demandThree = [];
    demandData.forEach((item) => {
      const { demand, voivodeship_demand_id, voivodeship_demand_name } = item;
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
        case "3":
          demandThree.push(item);
          break;
        default:
          console.warn(`Unexpected demand value: ${demand}`);
      }
    });
    return { demandZero, demandOne, demandTwo };
  };

  return (
    <Wrapper>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ marginBottom: "36px" }}
        spacing={2}
      >
        <Box sx={{ width: { xs: "100%", md: "65%" } }}>
          <Typography variant="h6">
            {phrases.qualification.demand_tab.demand_title} {props.name}
          </Typography>
          <Typography variant="body2" style={{ marginTop: "24px" }}>
            {phrases.qualification.demand_tab.demand_subtitle_1} {props.name}
            {phrases.qualification.demand_tab.demand_subtitle_2}
          </Typography>

          {categorizeByDemand(demandData).demandTwo && (
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <SignalCellularAltRoundedIcon sx={{ marginTop: 2.5 }} />
                <Typography variant="body2" style={{ marginTop: "24px" }}>
                  <strong>
                    {phrases.qualification.demand_tab.demand_high}{" "}
                  </strong>{" "}
                  dla województw:
                </Typography>
              </Box>
              <Typography variant="body2">
                {categorizeByDemand(demandData).demandTwo.map((item) => (
                  <span key={item.voivodeship_demand_id}>
                    {item.voivodeship_demand_name},{" "}
                  </span>
                ))}
              </Typography>
            </Box>
          )}

          {categorizeByDemand(demandData).demandOne && (
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <SignalCellularAlt2BarRoundedIcon sx={{ marginTop: 2.5 }} />
                <Typography variant="body2" style={{ marginTop: "24px" }}>
                  <strong>
                    {phrases.qualification.demand_tab.demand_moderate}{" "}
                  </strong>{" "}
                  dla województw:
                </Typography>
              </Box>
              <Typography variant="body2">
                {categorizeByDemand(demandData).demandOne.map((item) => (
                  <span key={item.voivodeship_demand_id}>
                    {item.voivodeship_demand_name},{" "}
                  </span>
                ))}
              </Typography>
            </Box>
          )}

          {categorizeByDemand(demandData).demandZero && (
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <QuestionMarkRoundedIcon sx={{ marginTop: 2.5 }} />
                <Typography variant="body2" style={{ marginTop: "24px" }}>
                  <strong>
                    {phrases.qualification.demand_tab.demand_not_included}
                  </strong>
                </Typography>
              </Box>
              <Typography variant="body2">
                {categorizeByDemand(demandData).demandZero.map((item) => (
                  <span key={item.voivodeship_demand_id}>
                    {item.voivodeship_demand_name},{" "}
                  </span>
                ))}
              </Typography>
            </Box>
          )}

          <Typography variant="body2" style={{ marginTop: "24px" }}>
            {phrases.qualification.demand_tab.demand_description}
          </Typography>
          <Typography variant="body2" style={{ marginTop: "24px" }}>
            {phrases.qualification.demand_tab.source}
          </Typography>
          <Link href="#" style={{ color: "black" }}>
            {phrases.qualification.demand_tab.demand_announcement}
          </Link>
        </Box>
        <Box
          className="map-container"
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <QualificationDemandMap demandData={demandData} />
        </Box>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ marginTop: "46px" }}
      >
        <Box sx={{ width: { xs: "100%", md: "65%" } }}>
          <Typography variant="h6">
            {phrases.qualification.demand_tab.popularity_title}
          </Typography>
          <Typography variant="body2" style={{ marginTop: "24px" }}>
            {phrases.qualification.demand_tab.popularity_subtitle_1}
          </Typography>

          {categorizeByDemand(demandData).demandThree && (
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <SignalCellularAltRoundedIcon sx={{ marginTop: 2.5 }} />

                <Typography variant="body2" style={{ marginTop: "24px" }}>
                  <strong>
                    {phrases.qualification.demand_tab.popularity_high}{" "}
                  </strong>{" "}
                  dla województw:
                </Typography>
              </Box>
              <Typography variant="body2">
                {categorizeByDemand(demandData).demandThree.map((item) => (
                  <span key={item.voivodeship_demand_id}>
                    {item.voivodeship_demand_name},{" "}
                  </span>
                ))}
              </Typography>
            </Box>
          )}

          {categorizeByDemand(demandData).demandTwo && (
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <SignalCellularAlt2BarRoundedIcon sx={{ marginTop: 2.5 }} />
                <Typography variant="body2" style={{ marginTop: "24px" }}>
                  <strong>
                    {phrases.qualification.demand_tab.popularity_moderate}{" "}
                  </strong>{" "}
                  dla województw:
                </Typography>
              </Box>
              <Typography variant="body2">
                {categorizeByDemand(demandData).demandTwo.map((item) => (
                  <span key={item.voivodeship_demand_id}>
                    {item.voivodeship_demand_name},{" "}
                  </span>
                ))}
              </Typography>
            </Box>
          )}

          {categorizeByDemand(demandData).demandOne && (
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <SignalCellularAlt1BarRoundedIcon sx={{ marginTop: 2.5 }} />
                <Typography variant="body2" style={{ marginTop: "24px" }}>
                  <strong>
                    {phrases.qualification.demand_tab.popularity_low}{" "}
                  </strong>{" "}
                  dla województw:
                </Typography>
              </Box>
              <Typography variant="body2">
                {categorizeByDemand(demandData).demandTwo.map((item) => (
                  <span key={item.voivodeship_demand_id}>
                    {item.voivodeship_demand_name},{" "}
                  </span>
                ))}
              </Typography>
            </Box>
          )}

          {categorizeByDemand(demandData).demandZero && (
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <QuestionMarkRoundedIcon sx={{ marginTop: 2.5 }} />
                <Typography variant="body2" style={{ marginTop: "24px" }}>
                  <strong>
                    {phrases.qualification.demand_tab.popularity_not_included}
                  </strong>
                </Typography>
              </Box>
              <Typography variant="body2">
                {categorizeByDemand(demandData).demandZero.map((item) => (
                  <span key={item.voivodeship_demand_id}>
                    {item.voivodeship_demand_name},{" "}
                  </span>
                ))}
              </Typography>
            </Box>
          )}

          <Typography variant="body2" style={{ marginTop: "24px" }}>
            {phrases.qualification.demand_tab.popularity_description}
          </Typography>
          <Typography variant="body2" style={{ marginTop: "24px" }}>
            {phrases.qualification.demand_tab.source}
          </Typography>
          <Link href="#" style={{ color: "black" }}>
            {phrases.qualification.demand_tab.popularity_announcement}
          </Link>
        </Box>
        <Box
          className="map-container"
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <QualificationPopularityMap demandData={demandData} />
        </Box>
      </Stack>
    </Wrapper>
  );
};

export default QualificationDemand;
