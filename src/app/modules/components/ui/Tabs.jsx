import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import QualificationCharacteristic from "../qualification/QualificationCharacteristic";
import QualificationSchool from "../qualification/QualificationSchool";
import QualificationDemand from "../qualification/QualificationDemand";
import QualificationSimilar from "../qualification/QualificationSimilar";
import * as phrases from "../../../shared/dictionaries/pl.json";

const TabItem = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  position: "relative",
  borderRadius: "30px",
  textAlign: "center",
  transition: "all .5s",
  padding: "10px 15px",
  color: "#555555",
  height: "auto",
  margin: "10px 0",
  float: "none",
  fontSize: "14px",
  fontWeight: "500",
  fontFamily: "Quicksand",
  [theme.breakpoints.up("md")]: {
    minWidth: 120,
  },
  [`&.${tabClasses.selected}, &:hover`]: {
    color: "black",
    fontWeight: "700",
    backgroundColor: "#fabd3a",
    boxShadow: "8px 11px 29px -21px rgba(0, 99, 12, 1)",
  },
}));

const TabsPill = (props) => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", marginTop: "44px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            selectionFollowsFocus
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
            aria-label="Zakładki"
            sx={{
              width: "100%",
              [`& .${tabsClasses.indicator}`]: {
                display: "none",
              },
            }}
          >
            <TabItem
              disableRipple
              label={phrases.qualification.characteristics}
              value="1"
            />
            <TabItem
              disableRipple
              label={phrases.qualification.schools}
              value="2"
            />
            <TabItem
              disableRipple
              label={phrases.qualification.demand}
              value="3"
            />
            <TabItem
              disableRipple
              label={phrases.qualification.similar}
              value="4"
            />
          </Tabs>
        </Box>
        <TabPanel value="1">
          <QualificationCharacteristic
            characteristics={props.characteristics}
            sub_qualifications={props.sub_qualifications}
            professions={props.professions}
          />
        </TabPanel>
        <TabPanel value="2">
          <QualificationSchool />
        </TabPanel>
        <TabPanel value="3">
          <QualificationDemand name={props.name} />
        </TabPanel>
        <TabPanel value="4">
          <QualificationSimilar
            similar_qualifications={props.similar_qualifications}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default TabsPill;
