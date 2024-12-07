import Wrapper from "../../assets/wrappers/QualificationPage";
import {
  Typography,
  Stack,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
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
            <Typography variant="h6">Opis zawodu</Typography>
          </Stack>
          <Box sx={{ marginTop: "12px" }}>
            <Typography>{props.characteristics}</Typography>
          </Box>
        </Box>
      )}
      {props.sub_qualifications && (
        <Box sx={{ marginTop: "24px" }}>
          <Stack
            className="accordion"
            direction="row"
            style={{ borderBottom: "2px solid #1565c0", paddingBottom: "10px" }}
          >
            <DoubleArrowIcon className={"icon" + "-" + "blue"} />
            <Typography variant="h6">
              Kwalifikacje zawodowe i zestawy efektów uczenia się
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "12px" }}>
            {props.sub_qualifications.map((detail) => (
              <Accordion key={detail.id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  {detail.name}
                </AccordionSummary>
                <AccordionDetails>
                  {detail.set_of_skills.map((set) => (
                    <Accordion key={set.id}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        {set.name}
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
        <Box sx={{ marginTop: "24px" }}>
          <Stack
            className="accordion"
            direction="row"
            style={{ borderBottom: "2px solid #388e3c", paddingBottom: "10px" }}
          >
            <DoubleArrowIcon className={"icon" + "-" + "green"} />
            <Typography variant="h6">
              Po zdobyciu tego zawodu będziesz
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "12px" }}>
            {props.professions.skills.map((el) => (
              <Stack direction="row" key={el}>
                <CheckRoundedIcon color="#388e3c" fontSize="small" />
                <Typography variant="body2">{el}</Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      )}
      {props.professions.predispositions && (
        <Box sx={{ marginTop: "24px" }}>
          <Stack
            className="accordion"
            direction="row"
            style={{ borderBottom: "2px solid #ffab00", paddingBottom: "10px" }}
          >
            <DoubleArrowIcon className={"icon" + "-" + "yellow"} />
            <Typography variant="h6">
              Oczekiwania wobec osoby wykonującej zawód
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "12px" }}>
            {props.professions.predispositions.map((el) => (
              <Stack direction="row" key={el}>
                <CheckRoundedIcon color="primary" fontSize="small" />
                <Typography variant="body2">{el}</Typography>
              </Stack>
            ))}
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
      {/* {props.sub_qualifications && (
        <QualificationAccordion
          summary="Kwalifikacje zawodowe i zestawy efektów uczenia się"
          details={props.sub_qualifications}
          color="blue"
        />
      )} */}
      {/* {props.professions.skills && (
        <QualificationAccordion
          summary="Po zdobyciu tego zawodu będziesz"
          details={props.professions.skills}
          color="green"
        />
      )} */}
      {/* {props.professions.predispositions && (
        <QualificationAccordion
          summary="Oczekiwania wobec osoby wykonującej zawód"
          details={props.professions.predispositions}
          color="yellow"
        />
      )} */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box style={{ width: "50%" }}>
          {/* {props.professions.career_prospects && (
            <QualificationAccordion
              summary="Perspektywy zawodowe"
              details={props.professions.career_prospects}
              color="deepPurple"
            />
          )} */}
          {/* {props.professions.advantages && (
            <QualificationAccordion
              summary="Plusy"
              details={props.professions.advantages}
              color="lightGreen"
            />
          )} */}
        </Box>
        <Box style={{ width: "50%" }}>
          {/* {props.professions.work_conditions && (
            <QualificationAccordion
              summary="Twoje szanse na zatrudnienie zwiększą"
              details={props.professions.work_conditions}
              color="indigo"
            />
          )} */}
          {/* {props.professions.disadvantages && (
            <QualificationAccordion
              summary="Minusy"
              details={props.professions.disadvantages}
              color="orange"
            />
          )} */}
        </Box>
      </Stack>
    </Wrapper>
  );
};

export default QualificationCharacteristic;
