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
import * as phrases from "../../pages/dictionaries/pl.json";

const Section = ({ iconColor, title, children, sx = {} }) => (
  <Box sx={{ marginTop: "40px", ...sx }}>
    <Stack
      className="accordion"
      direction="row"
      sx={{ borderBottom: `2px solid ${iconColor}`, paddingBottom: "10px" }}
    >
      <DoubleArrowIcon sx={{ color: iconColor, marginRight: 2 }} />
      <Typography style={{ fontSize: "16px" }} variant="h6">
        {title}
      </Typography>
    </Stack>
    <Box sx={{ marginTop: "12px", marginLeft: "34px" }}>{children}</Box>
  </Box>
);

const ListWithIcons = ({ items, iconColor }) => (
  <>
    {items.map((item, index) => (
      <Stack direction="row" key={index}>
        <CheckRoundedIcon
          sx={{ color: iconColor, marginRight: "12px" }}
          fontSize="small"
        />
        <Typography variant="body2">{item}</Typography>
      </Stack>
    ))}
  </>
);

const NestedAccordion = ({ data }) => (
  <>
    {data.map((detail) => (
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
  </>
);

const QualificationCharacteristic = (props) => {
  const { characteristics, sub_qualifications, professions } = props;
  return (
    <Wrapper>
      <Typography variant="h6" sx={{ marginBottom: "24px" }}>
        {phrases.qualification.characteristics_tab.title}
      </Typography>

      {characteristics && (
        <Section iconColor="#1565c0" title="Jakie zadania będę wykonywać">
          <Typography variant="body2">{characteristics}</Typography>
        </Section>
      )}

      {sub_qualifications && (
        <Section iconColor="#3d5afe" title="Czego się będę uczyć">
          <NestedAccordion data={sub_qualifications} />
        </Section>
      )}

      {professions.skills && (
        <Section iconColor="#651fff" title="Po zdobyciu tego zawodu będziesz">
          <ListWithIcons items={professions.skills} iconColor="#651fff" />
        </Section>
      )}

      {professions.predispositions && (
        <Section
          iconColor="#ea144e"
          title="Jakie powinienem mieć predyspozycje"
        >
          <ListWithIcons
            items={professions.predispositions}
            iconColor="#ea144e"
          />
        </Section>
      )}

      {professions.career_prospects && (
        <Section iconColor="#EF6C00" title="Gdzie mogę pracować">
          <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
            {professions.career_prospects.map((el, index) => (
              <Grid size={6} key={index}>
                <Stack direction="row">
                  <CheckRoundedIcon
                    sx={{ color: "#EF6C00", marginRight: "12px" }}
                    fontSize="small"
                  />
                  <Typography variant="body2">{el}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Section>
      )}

      {professions.work_conditions && (
        <Section iconColor="#ffab00" title="Jak będę pracować">
          <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
            {professions.work_conditions.map((el, index) => (
              <Grid size={6} key={index}>
                <Stack direction="row">
                  <CheckRoundedIcon
                    sx={{ color: "#ffab00", marginRight: "12px" }}
                    fontSize="small"
                  />
                  <Typography variant="body2">{el}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Section>
      )}

      {characteristics && (
        <Section iconColor="#64dd17" title="Gdzie będę się uczyć">
          <Typography variant="body2">{characteristics}</Typography>
        </Section>
      )}

      <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
        <Grid size={6}>
          {professions.advantages && (
            <Section iconColor="#1B5E20" title="Plusy">
              <ListWithIcons
                items={professions.advantages}
                iconColor="#1B5E20"
              />
            </Section>
          )}
        </Grid>
        <Grid size={6}>
          {professions.disadvantages && (
            <Section iconColor="#E65100" title="Minusy">
              <ListWithIcons
                items={professions.disadvantages}
                iconColor="#E65100"
              />
            </Section>
          )}
        </Grid>
      </Grid>

      <Section iconColor="#006064" title="Multimedia">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="item-title">Multimedia</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card>
              <CardMedia
                component="iframe"
                sx={{ height: 430 }}
                // src="https://www.youtube.com/embed/Ui59depm1js"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
          </AccordionDetails>
        </Accordion>
      </Section>
    </Wrapper>
  );
};

export default QualificationCharacteristic;
