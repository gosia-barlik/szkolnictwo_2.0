import React, { useState, cloneElement, forwardRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Menu,
  IconButton,
  MenuItem,
  Badge,
  useScrollTrigger,
  Tooltip,
  styled,
} from "@mui/material";
import {
  FavoriteBorderRounded as FavoriteIcon,
  MenuRounded as MenuIcon,
} from "@mui/icons-material";
import img from "../../../assets/img/szkolnictwo-logotyp.svg";
import Wrapper from "../../../assets/wrappers/Navbar";
import * as phrases from "../../shared/dictionaries/pl.json";

// Scroll elevation wrapper
const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  return cloneElement(children, { elevation: trigger ? 4 : 0 });
};

// Styled tooltip component
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 360,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

// Tooltip content generator
const FavoritesTooltipContent = ({ favorites }) => (
  <>
    {favorites.map((item) => (
      <Link to={`/qualification/${item.id}`} key={item.id} className="link">
        <Typography>{item.name}</Typography>
      </Link>
    ))}
  </>
);

// Reusable navigation link with optional icon
const NavLinkWithIcon = forwardRef(
  ({ to, label, badgeContent, IconComponent, ...props }, ref) => (
    <NavLink
      to={to}
      ref={ref}
      {...props}
      className="nav-link"
      style={{ color: "black" }}
    >
      {label}
      {IconComponent && (
        <IconButton aria-label={label} title={label}>
          <Badge badgeContent={badgeContent} color="primary">
            <IconComponent style={{ color: "black" }} />
          </Badge>
        </IconButton>
      )}
    </NavLink>
  )
);

const Navbar = () => {
  const { favorites } = useSelector((state) => state.clipboard);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const desktopLinks = [
    { to: "/about", label: phrases.about.title },
    {
      to: "/favorites",
      label: phrases.common.storage,
      IconComponent: FavoriteIcon,
      tooltip: <FavoritesTooltipContent favorites={favorites} />,
      badgeContent: favorites.length,
    },
  ];

  const mobileLinks = [
    { to: "/about", label: phrases.about.title },
    {
      to: "/favorites",
      label: phrases.common.storage,
      IconComponent: FavoriteIcon,
      badgeContent: favorites.length,
    },
  ];

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
                    sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
                  >
                    {phrases.common.application_name}
                  </Typography>
                </NavLink>
              </Box>

              {/* Desktop Links */}
              <Box
                className="links-container"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "flex" },
                  pl: 10,
                }}
              >
                {desktopLinks.map(
                  ({ to, label, IconComponent, tooltip, badgeContent }) =>
                    favorites.length>0 ? (
                      <HtmlTooltip key={to} title={tooltip}>
                        <NavLinkWithIcon
                          to={to}
                          label={label}
                          badgeContent={badgeContent}
                          IconComponent={IconComponent}
                        />
                      </HtmlTooltip>
                    ) : (
                      <NavLinkWithIcon
                        key={to}
                        to={to}
                        label={label}
                        IconComponent={IconComponent}
                      />
                    )
                )}
              </Box>

              {/* Mobile Menu */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
                <IconButton
                  size="large"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  keepMounted
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", sm: "none" } }}
                >
                  {mobileLinks.map(
                    ({ to, label, IconComponent, badgeContent }) => (
                      <MenuItem key={to} onClick={handleCloseNavMenu}>
                        <NavLinkWithIcon
                          to={to}
                          label={label}
                          badgeContent={badgeContent}
                          IconComponent={IconComponent}
                        />
                      </MenuItem>
                    )
                  )}
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
