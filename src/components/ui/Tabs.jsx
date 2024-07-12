import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import {changeValue} from "../../redux/tabs";

const AntTabs = styled(TabList)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: ["-apple-system", '"Segoe UI"', "Roboto"].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

const Tabs = () => {
  const { value } = useSelector((state) => state.tabs);
  const dispatch = useDispatch ()

    const handleChange = (event, newValue) => {
        dispatch (changeValue(newValue))
    };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <AntTabs
            selectionFollowsFocus
            onChange={handleChange}
            aria-label="Zakładki"
          >
            <AntTab label="Branże" value="1"/>
            <AntTab label="Umiejętności" value="2"/>
            <AntTab label="Zawody" value="3" />
          </AntTabs>
        </Box>
        <TabPanel value="1">Branże</TabPanel>
        <TabPanel value="2">Umiejętności</TabPanel>
        <TabPanel value="3">Zawody</TabPanel>
      </TabContext>
    </Box>
  );
};
export default Tabs;
