import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import img from "../assets/img/szkolnictwo-logotyp.svg";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import IconButton from "@mui/material/IconButton";

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
    <Wrapper>
      <ElevationScroll>
        <AppBar color="default" className="main-nav">
          <Container maxWidth="xl">
            <Toolbar>
              <img src={img} alt="logotyp" />

              <NavLink to="/" className="nav-link logo">
                <Typography color="black" className="text logo">
                  Kompas szkolnictwa <br></br> branżowego
                </Typography>
              </NavLink>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  pl: 10,
                }}
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <NavLink to="/about" className="nav-link">
                  <Typography sx={{ mr: 1 }} component="div">
                    Powiązane narzędzia
                  </Typography>
                </NavLink>
                <NavLink to="/favorites" className="nav-link">
                  <IconButton aria-label="favorite" title="schowek">
                    <FavoriteBorderRoundedIcon
                      style={{ color: "black" }}
                    />
                  </IconButton>
                </NavLink>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </Wrapper>
  );
};

export default Navbar;
