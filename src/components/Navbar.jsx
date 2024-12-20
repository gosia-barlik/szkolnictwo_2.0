import React, { useState } from "react";
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
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

// ElevationScroll component to handle scroll-triggered elevation
const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  return cloneElement(children, { elevation: trigger ? 4 : 0 });
};

// Reusable component for menu links
const NavLinkWithIcon = ({ to, label, badgeContent, IconComponent }) => (
  <NavLink to={to} className="nav-link" style={{ color: "black" }}>
    {label}
    {IconComponent && (
      <IconButton aria-label={label} title={label}>
        <Badge badgeContent={badgeContent} color="primary">
          <IconComponent style={{ color: "black" }} />
        </Badge>
      </IconButton>
    )}
  </NavLink>
);

// Reusable component for mobile menu items
const MobileMenuItem = ({
  to,
  label,
  onClose,
  badgeContent,
  IconComponent,
}) => (
  <MenuItem onClick={onClose}>
    <NavLinkWithIcon
      to={to}
      label={label}
      badgeContent={badgeContent}
      IconComponent={IconComponent}
    />
  </MenuItem>
);

const Navbar = () => {
  const { favorites } = useSelector((state) => state.clipboard);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <Wrapper>
      <ElevationScroll>
        <AppBar color="default" className="main-nav">
          <Container maxWidth="xl">
            <Toolbar>
              <img src={img} alt="logotyp" />
              <Box
                style={{ display: "flex", flexDirection: "row", width: 180 }}
              >
                <NavLink to="/" className="nav-link logo">
                  <Typography
                    color="black"
                    className="text logo"
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  >
                    Kompas szkolnictwa branżowego
                  </Typography>
                </NavLink>
              </Box>

              {/* Desktop Links */}
              <Box
                className="links-container"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  pl: 10,
                }}
              >
                <NavLinkWithIcon
                  to="/about"
                  label="O aplikacji"
                />
                <NavLinkWithIcon
                  to="/favorites"
                  label="Schowek"
                  badgeContent={favorites.length}
                  IconComponent={FavoriteBorderRoundedIcon}
                />
              </Box>

              {/* Mobile Menu */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuRoundedIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  keepMounted
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  <MobileMenuItem
                    to="/about"
                    label="Powiązane narzędzia"
                    onClose={handleCloseNavMenu}
                  />
                  <MobileMenuItem
                    to="/favorites"
                    label="Schowek"
                    badgeContent={favorites.length}
                    onClose={handleCloseNavMenu}
                    IconComponent={FavoriteBorderRoundedIcon}
                  />
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </Wrapper>
  );
};

export default Navbar;
