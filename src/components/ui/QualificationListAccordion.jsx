import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./QualificationAccordion.css";

const QualificationListAccordion = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

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
        className="summary"
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Box
          width={60}
          alignItems="center"
          justifyContent="center"
          sx={{ display: "flex" }}
        >
          <DoubleArrowIcon />
        </Box>
        <Box display="flex" flexDirection="column">
          <Box>
            <Typography className="item-title">
              Kierunek {props.name}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" width={700}>
            <Typography variant="caption" width={150} className="item-detail">
              liczba kwalifikacji: {props.children.length}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              width={550}
              overflow="hidden"
              sx={{ marginTop: "4px" }}
            >
              {props.skills.map((el) => (
                <Chip key={el} label={el} variant="outlined" size="small" />
              ))}
            </Stack>
          </Box>
        </Box>
      </AccordionSummary>

      <AccordionDetails className="details">
        <List component="nav" aria-label="">
          {props.children.map((el) => (
            <ListItemButton
              key={el.id}
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText primary={el.name} />
              <ListItemText secondary={el.form} />
              <ListItemText secondary={el.PRKlevel} />
            </ListItemButton>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default QualificationListAccordion;
