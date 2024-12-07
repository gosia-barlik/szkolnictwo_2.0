import Wrapper from "../../assets/wrappers/QualificationPage";
import { Typography, Link, Stack, Box } from "@mui/material";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import SignalCellularAlt2BarRoundedIcon from "@mui/icons-material/SignalCellularAlt2BarRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import QualificationDemandMap from "./QualificationDemandMap";
import * as phrases from "../../pages/dictionaries/pl.json";

const QualificationDemand = (props) => {
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
            {relevant.map((item) => (
              <span key={item}>{item}, </span>
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
            {moderate.map((item) => (
              <span key={item}>{item}, </span>
            ))}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <QuestionMarkRoundedIcon sx={{ marginTop: 2.5 }} />
            <Typography variant="body2" style={{ marginTop: "24px" }}>
              <strong>{phrases.qualification.demand_tab.not_included}</strong>
            </Typography>
          </Box>
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
       <QualificationDemandMap/>
        </Box>
      </Stack>
    </Wrapper>
  );
};

export default QualificationDemand;
