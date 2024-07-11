import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExploreIcon from "@mui/icons-material/Explore";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './Navbar.css'

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = () => {
  const getQualifications = async () => {
    const response = await MainInfoAPI.create()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("działam");
      });
    console.log(response);
  };

  return (
    <ElevationScroll>
      <AppBar color="default" className="main-nav">
        <Container maxWidth="xl">
          <Toolbar>
            {/* <ExploreIcon
              color="primary"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} 
              onClick={getQualifications}
            /> */}
            <NavLink to="/" className="nav-link" >
              <Typography color="black" variant="h6" className="highlight">
                Kompas
              </Typography>
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, pl:10 }}>
            
              <NavLink to="/about" className="nav-link">
                <Typography sx={{mr: 1}} component="div">Powiązane narzędzia</Typography>
                
              </NavLink>
              <NavLink to="/newsletter" className="nav-link">
              <Typography sx={{mr: 1}}></Typography>
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
