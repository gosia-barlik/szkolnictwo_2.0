import Wrapper from "../../assets/wrappers/QualificationPage";
import { Typography, Stack, Box } from "@mui/material";
import QualificationAccordion from "../ui/Accordion";

const QualificationCharacteristic = (props) => {
  return (
    <Wrapper>
      <Typography variant="h6" style={{marginBottom:"24px"}}>Charakterystyka zawodu</Typography>

      {props.characteristics && (
        <QualificationAccordion
          summary="Opis zawodu"
          details={[props.characteristics]}
          color="red"
        />
      )}
      {props.sub_qualifications && (
        <QualificationAccordion
          summary="Kwalifikacje zawodowe i zestawy efektów uczenia się"
          details={props.sub_qualifications}
          color="blue"
        />
      )}
      {props.professions.skills && (
        <QualificationAccordion
          summary="Oczekiwania wobec osoby wykonującej zawód"
          details={props.professions.skills}
          color="green"
        />
      )}
      {props.professions.predispositions && (
        <QualificationAccordion
          summary="Oczekiwania wobec osoby wykonującej zawód"
          details={props.professions.predispositions}
          color="yellow"
        />
      )}
      <Stack direction={{xs: "column", md: "row"}} spacing={2}>
        <Box style={{width: "50%"}}>
          {props.professions.career_prospects && (
            <QualificationAccordion
              summary="Perspektywy zawodowe"
              details={props.professions.career_prospects}
              color="deepPurple"
            />
          )}
          {props.professions.advantages && (
            <QualificationAccordion
              summary="Plusy"
              details={props.professions.advantages}
              color="lightGreen"
            />
          )}
        </Box>
        <Box style={{width: "50%"}}>
          {props.professions.work_conditions && (
            <QualificationAccordion
              summary="Twoje szanse na zatrudnienie zwiększą"
              details={props.professions.work_conditions}
              color="indigo"
            />
          )}
          {props.professions.disadvantages && (
            <QualificationAccordion
              summary="Minusy"
              details={props.professions.disadvantages}
              color="orange"
            />
          )}
        </Box>
      </Stack>
    </Wrapper>
  );
};

export default QualificationCharacteristic;
