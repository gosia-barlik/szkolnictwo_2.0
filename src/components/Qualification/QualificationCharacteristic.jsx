import Wrapper from "../../assets/wrappers/QualificationPage";
import {
  Typography,
  Stack,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardMedia,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import QualificationAccordion from "../ui/Accordion";
import * as phrases from "../../pages/dictionaries/pl.json";
import { Check } from "@mui/icons-material";

const QualificationCharacteristic = (props) => {
  return (
    <Wrapper>
      <Typography variant="h6" style={{ marginBottom: "24px" }}>
        {phrases.qualification.characteristics_tab.title}
      </Typography>
      {props.characteristics && (
        <Box>
          <Stack
            className="accordion"
            direction="row"
            style={{ borderBottom: "2px solid #ea144e", paddingBottom: "10px" }}
          >
            <DoubleArrowIcon className={"icon" + "-" + "red"} />
            <Typography style={{ fontSize: "16px" }} variant="h6">
              Jakie zadania będę wykonywać
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "12px", marginLeft: "64px" }}>
            <Typography variant="body2">{props.characteristics}</Typography>
          </Box>
        </Box>
      )}
      {props.sub_qualifications && (
        <Box sx={{ marginTop: "40px" }}>
          <Stack
            className="accordion"
            direction="row"
            style={{ borderBottom: "2px solid #1565c0", paddingBottom: "10px" }}
          >
            <DoubleArrowIcon className={"icon" + "-" + "blue"} />
            <Typography style={{ fontSize: "16px" }} variant="h6">
              Czego się będę uczyć
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "12px", marginLeft: "64px" }}>
            {props.sub_qualifications.map((detail) => (
              <Accordion key={detail.id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body2">{detail.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {detail.set_of_skills.map((set) => (
                    <Accordion key={set.id}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="body2">{set.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {set.skills.map((skill) => (
                          <Typography variant="body2" key={skill.id}>
                            {skill.name}
                          </Typography>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      )}
      {props.professions.skills && (
        <Box sx={{ marginTop: "40px" }}>
          <Stack
            className="accordion"
            direction="row"
            style={{ borderBottom: "2px solid #388e3c", paddingBottom: "10px" }}
          >
            <DoubleArrowIcon className={"icon" + "-" + "green"} />
            <Typography style={{ fontSize: "16px" }} variant="h6">
              Po zdobyciu tego zawodu będziesz
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "12px", marginLeft: "34px" }}>
            {props.professions.skills.map((el) => (
              <Stack direction="row" key={el}>
                <CheckRoundedIcon
                  style={{ color: "#388e3c", marginRight: "12px" }}
                  fontSize="small"
                />
                <Typography variant="body2">{el}</Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      )}
      {props.professions.predispositions && (
        <Box sx={{ marginTop: "40px" }}>
          <Stack
            className="accordion"
            direction="row"
            style={{ borderBottom: "2px solid #ffab00", paddingBottom: "10px" }}
          >
            <DoubleArrowIcon className={"icon" + "-" + "yellow"} />
            <Typography style={{ fontSize: "16px" }} variant="h6">
              Jakie powinienem mieć predyspozycje
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "12px", marginLeft: "34px" }}>
            {props.professions.predispositions.map((el) => (
              <Stack direction="row" key={el}>
                <CheckRoundedIcon
                  color="primary"
                  fontSize="small"
                  style={{ marginRight: "12px" }}
                />
                <Typography variant="body2">{el}</Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      )}
      {props.professions.career_prospects && (
        <Box sx={{ marginTop: "40px" }}>
          <Stack
            className="accordion"
            direction="row"
            style={{ borderBottom: "2px solid #651fff", paddingBottom: "10px" }}
          >
            <DoubleArrowIcon className={"icon" + "-" + "deepPurple"} />
            <Typography style={{ fontSize: "16px" }} variant="h6">
              Gdzie mogę pracować
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "12px", marginLeft: "34px" }}>
            <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
              {props.professions.career_prospects.map((el, index) => (
                <Grid size={6} key={index}>
                  <Stack direction="row">
                    <CheckRoundedIcon
                      style={{ color: "#651fff", marginRight: "12px" }}
                      fontSize="small"
                    />
                    <Typography variant="body2">{el}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
      {props.professions.work_conditions && (
        <Box sx={{ marginTop: "40px" }}>
          <Stack
            className="accordion"
            direction="row"
            style={{ borderBottom: "2px solid #3d5afe", paddingBottom: "10px" }}
          >
            <DoubleArrowIcon className={"icon" + "-" + "indigo"} />
            <Typography style={{ fontSize: "16px" }} variant="h6">
              Jak będę pracować
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "12px", marginLeft: "34px" }}>
            <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
              {props.professions.work_conditions.map((el, index) => (
                <Grid size={6} key={index}>
                  <Stack direction="row">
                    <CheckRoundedIcon
                      style={{ color: "#3d5afe", marginRight: "12px" }}
                      fontSize="small"
                    />
                    <Typography variant="body2">{el}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
      {/* {props.characteristics && (
        <QualificationAccordion
          summary="Opis zawodu"
          details={[props.characteristics]}
          color="red"
        />
      )} */}

      <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
        <Grid size={6}>
          {props.professions.advantages && (
            <Box sx={{ marginTop: "40px" }}>
              <Stack
                className="accordion"
                direction="row"
                style={{
                  borderBottom: "2px solid #64dd17",
                  paddingBottom: "10px",
                }}
              >
                <DoubleArrowIcon className={"icon" + "-" + "lightGreen"} />
                <Typography style={{ fontSize: "16px" }} variant="h6">
                  Plusy
                </Typography>
              </Stack>
              <Box sx={{ marginTop: "12px", marginLeft: "34px" }}>
                {props.professions.advantages.map((el) => (
                  <Stack direction="row" key={el}>
                    <CheckRoundedIcon
                      style={{ color: "#64dd17", marginRight: "12px" }}
                      fontSize="small"
                    />
                    <Typography variant="body2">{el}</Typography>
                  </Stack>
                ))}
              </Box>
            </Box>
          )}
        </Grid>
        <Grid size={6}>
          {props.professions.disadvantages && (
            <Box sx={{ marginTop: "40px" }}>
              <Stack
                className="accordion"
                direction="row"
                style={{
                  borderBottom: "2px solid #ef6c00",
                  paddingBottom: "10px",
                }}
              >
                <DoubleArrowIcon className={"icon" + "-" + "orange"} />
                <Typography style={{ fontSize: "16px" }} variant="h6">
                  Minusy
                </Typography>
              </Stack>
              <Box sx={{ marginTop: "12px", marginLeft: "34px" }}>
                {props.professions.disadvantages.map((el) => (
                  <Stack direction="row" key={el}>
                    <CheckRoundedIcon
                      style={{ color: "#ef6c00", marginRight: "12px" }}
                      fontSize="small"
                    />
                    <Typography variant="body2">{el}</Typography>
                  </Stack>
                ))}
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "40px" }}>
        <Accordion className="accordion">
          <AccordionSummary
            className={"summary" + "-" + "gray"}
            expandIcon={<ExpandMoreIcon />}
          >
            <Box
              width={60}
              alignItems="center"
              justifyContent="center"
              sx={{ display: "flex" }}
            >
              <DoubleArrowIcon className={"icon" + "-" + "gray"} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Box>
                <Typography className="item-title">Multimedia</Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails className="details">
            <Card >
              <CardMedia
                component="iframe"
                sx={{ height: 430 }}
                src="https://www.youtube.com/embed/Ui59depm1js"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Wrapper>
  );
};

export default QualificationCharacteristic;
