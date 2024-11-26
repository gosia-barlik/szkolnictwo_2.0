
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const QualificationAccordion = (props) => {

  return (
    <Accordion
      defaultExpanded={props.color === "red" ? true : false}
      className="accordion"
    >
      <AccordionSummary
        className={"summary" + "-" + props.color}
        expandIcon={<ExpandMoreIcon />}
      >
        <Box
          width={60}
          alignItems="center"
          justifyContent="center"
          sx={{ display: "flex" }}
        >
          <DoubleArrowIcon className={"icon" + "-" + props.color} />
        </Box>
        <Box display="flex" flexDirection="column">
          <Box>
            <Typography className="item-title">{props.summary}</Typography>
          </Box>
        </Box>
      </AccordionSummary>

      {props.color != "blue" && (
        <AccordionDetails className="details">
          {props.details.map((el) => (
            <Typography variant="body2" key={el}>
              {el}
            </Typography>
          ))}
        </AccordionDetails>
      )}

      {props.color == "blue" && (
        <AccordionDetails className="details">
          {props.details.map((detail) => (
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
        </AccordionDetails>
      )}
    </Accordion>
  );
};

export default QualificationAccordion;
