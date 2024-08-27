import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import QualificationListItem from "../../components/ui/QualificationListItem";
import QualificationListAccordion from "../../components/ui/QualificationListAccordion";
import AppsIcon from "@mui/icons-material/Apps";
import "./Industries.css";

const IndustriesListItem = (props) => {
  const [section, setSection] = React.useState({"Administracja":true});

  const toggleSection = (sectionName) => {
    setSection((prevState) => ({
      ...prevState,
      [sectionName]: !prevState[sectionName],
    }));
  };

  return (
    <Box key={props.name} className={`industry ${props.id}`}>
      <Typography variant="h6" style={{ margin: "6px", marginLeft: "14px" }}>
        {props.name}
      </Typography>
      <Typography variant="caption" style={{ margin: "14px" }}>
        liczba kwalifikacji: {props.qualifications_count}
      </Typography>
      {props.children.map((el) => (
        <Box key={el.name}>
          <Box
            sx={{ marginLeft: "14px" }}
            className="item-box"
            onClick={() => toggleSection(el.name)}
          >
            <Box className="icon-box">
              <AppsIcon />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography className="item-title">{el.name}</Typography>
              <Typography variant="caption" width={150} className="item-detail">
                liczba kwalifikacji: {el.qualifications_count}
              </Typography>
            </Box>
          </Box>
          {section[el.name] && (
            <Stack
              spacing={3}
              sx={{ marginTop: "12px", marginLeft: "24px" }}
              direction={{ xs: "column" }}
            >
              {el.children.map((el) =>
                el.type === "kwalifikacja" ? (
                  <QualificationListItem
                    key={el.name}
                    name={el.name}
                    category={el.category}
                    skills={[]}
                  />
                ) : (
                  <QualificationListAccordion
                    key={el.name}
                    name={el.name}
                    skills={[]}
                    children={el.children}
                  />
                )
              )}
            </Stack>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default IndustriesListItem;
