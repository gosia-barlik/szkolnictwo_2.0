import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const QualificationAccordion = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
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
            <Typography className="item-title">
              {props.summary}
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>

      <AccordionDetails className="details">
        {props.details.map((el) => (
          <Typography variant="body2" key={el}>{el}</Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default QualificationAccordion;
