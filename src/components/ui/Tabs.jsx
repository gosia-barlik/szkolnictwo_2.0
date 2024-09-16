import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import QualificationCharacteristic from "../QualificationCharacteristic";
import QualificationSchool from "../QualificationSchool";
import QualificationDemand from "../QualificationDemand";
import QualificationSimilar from "../QualificationSimilar";

const AntTabs = styled(TabList)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "primary",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.95)",
    fontFamily: ["Quicksand", '"Segoe UI"', "Roboto"].join(","),
    "&:hover": {
      color: "#black",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "black",
      fontWeight: theme.typography.fontWeightBold,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

const Tabs = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", marginTop: "44px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <AntTabs
            selectionFollowsFocus
            onChange={handleChange}
            aria-label="Zakładki"
          >
            <AntTab label="Charakterystyka" value="1" />
            <AntTab label="Szkoły i placówki" value="2" />
            <AntTab label="Prognoza zapotrzebowania" value="3" />
            <AntTab label="Pokrewne certyfikaty" value="4" />
          </AntTabs>
        </Box>
        <TabPanel value="1">
          <QualificationCharacteristic />
        </TabPanel>
        <TabPanel value="2">
          <QualificationSchool />
        </TabPanel>
        <TabPanel value="3">
          <QualificationDemand />
        </TabPanel>
        <TabPanel value="4">
          <QualificationSimilar />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default Tabs;
