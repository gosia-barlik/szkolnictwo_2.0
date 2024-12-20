import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { NavLink } from "react-router-dom";
import fundusze from "../assets/img/footer/fundusze.png";
import ibe from "../assets/img/footer/ibe.png";
import rp from "../assets/img/footer/rp.png";
import ue from "../assets/img/footer/ue.png";
import logotyp from "../assets/img/szkolnictwo-logotyp.svg";
import Wrapper from "../assets/wrappers/Footer";
import * as phrases from "../pages/dictionaries/pl.json";

const LinkItem = ({ to, label }) => (
  <NavLink
    to={to}
    className="nav-link"
    style={{
      color: "black",
      lineHeight: 2,
      fontSize: 14,
      display: "block",
    }}
  >
    {label}
  </NavLink>
);

const ContactItem = ({ icon: Icon, text }) => (
  <Box
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 28,
    }}
  >
    <Icon fontSize="small" sx={{ color: "grey" }} />
    <Typography variant="body2" style={{ marginLeft: 8 }}>
      {text}
    </Typography>
  </Box>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "white",
          padding: "1rem",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          spacing={8}
          sx={{ height: 140, marginTop: 4 }}
        >
          {/* Logo Section */}
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={logotyp}
              alt="Logo"
              style={{ width: 40, height: 40, marginRight: 12 }}
            />
            <Box style={{ display: "flex", flexDirection: "row", width: 180 }}>
              <Typography
                color="black"
                style={{ fontWeight: 600, lineHeight: "1.25rem" }}
              >
                {phrases.footer.application_name}
              </Typography>
            </Box>
          </Box>

          {/* Links Section */}
          <Box>
            <Typography
              variant="body2"
              style={{ fontWeight: 700, marginBottom: 8 }}
            >
              {phrases.footer.see_also}
            </Typography>
            <LinkItem to="/" label={phrases.footer.website_regulations} />
            <LinkItem to="/" label={phrases.footer.privacy_policy} />
            <LinkItem to="/" label={phrases.footer.accessibility_declaration} />
          </Box>

          {/* Contact Section */}
          <Box>
            <Typography
              variant="body2"
              style={{ fontWeight: 700, marginBottom: 8 }}
            >
              {phrases.footer.contact}
            </Typography>
            <Typography variant="body2" style={{ marginBottom: 10 }}>
              {phrases.footer.institution_name}
            </Typography>
            <ContactItem
              icon={MailOutlineRoundedIcon}
              text={
                <a href={`mailto:${phrases.footer.email}`}>
                  {phrases.footer.email}
                </a>
              }
            />
            <ContactItem
              icon={PlaceOutlinedIcon}
              text={phrases.footer.address}
            />
          </Box>
        </Stack>

        <Divider variant="middle" />

        {/* Logos Section */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={5}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ marginTop: 4 }}
        >
          {[fundusze, rp, ibe, ue].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index}`}
              style={{ width: 120 }}
            />
          ))}
        </Stack>

      </Box>
    </Wrapper>
  );
};

export default Footer;
