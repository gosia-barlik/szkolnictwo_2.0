import { cloneElement } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import img from "../assets/img/szkolnictwo-logotyp.svg";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = () => {
  const { favorites } = useSelector((state) => state.clipboard);

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
                <NavLink to="/related_apps" className="nav-link">
                  <Typography sx={{ mr: 1 }} component="div">
                    Powiązane narzędzia
                  </Typography>
                </NavLink>
                <div>
                  <NavLink to="/favorites" className="nav-link">
                    Schowek
                    <IconButton aria-label="favorite" title="schowek">
                      <Badge badgeContent={favorites.length} color="primary">
                        <FavoriteBorderRoundedIcon style={{ color: "black" }} />
                      </Badge>
                    </IconButton>
                  </NavLink>
                  <NavLink to="/dictionary" className="nav-link">
                    Słownik
                    <IconButton aria-label="favorite" title="słownik">
                      <MenuBookRoundedIcon style={{ color: "black" }} />
                    </IconButton>
                  </NavLink>
                </div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </Wrapper>
  );
};

export default Navbar;
