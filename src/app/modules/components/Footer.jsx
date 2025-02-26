import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { NavLink } from "react-router-dom";
import Wrapper from "../../../assets/wrappers/Footer";
import * as phrases from "../../shared/dictionaries/pl.json";

import ibe from "../../../assets/img/footer/IBEPIB.png";
import fundusze from "../../../assets/img/footer/fundusze.png";
import rp from "../../../assets/img/footer/rp.png";
import ue from "../../../assets/img/footer/ue.png";
import fundusze_v from "../../../assets/img/footer/fundusze_v.png";
import rp_v from "../../../assets/img/footer/rp_v.png";
import ue_v from "../../../assets/img/footer/ue_v.png";
import logotyp from "../../../assets/img/szkolnictwo-logotyp.svg";

const LinkItem = ({ to, label }) => (
  <NavLink to={to} className="nav-link">
    {label}
  </NavLink>
);

const ContactItem = ({ icon: Icon, text }) => (
  <Stack direction="row" alignItems="center" spacing={1} sx={{ height: 28 }}>
    <Icon fontSize="small" sx={{ color: "grey" }} />
    <Typography variant="body2" sx={{ fontSize: { xs: 12, md: 14 } }}>
      {text}
    </Typography>
  </Stack>
);

const LogoSection = ({ images, vertical }) => (
  <Stack
    direction={vertical ? "column" : "row"}
    alignItems="center"
    justifyContent="center"
    spacing={vertical ? 1 : 5}
    sx={{
      mt: 4,
      display: {
        xs: vertical ? "flex" : "none",
        md: vertical ? "none" : "flex",
      },
    }}
  >
    {images.map(({ src, name }, index) => (
      <img key={index} src={src} alt={`Logo ${name}`} style={{ width: 120 }} />
    ))}
    {!vertical && (
      <Divider
        orientation="vertical"
        flexItem
        sx={{ backgroundColor: "black" }}
      />
    )}
    {vertical && (
      <Divider
        sx={{ width: 60, height: 1, backgroundColor: "black" }}
        style={{ marginTop: "24px", marginBottom: "24px" }}
      />
    )}
    <img src={ibe} alt="Logo IBE-PIB" style={{ width: 120 }} />
  </Stack>
);

const Footer = () => {
  return (
    <Wrapper>
      <Box sx={{ width: "100%", backgroundColor: "white", p: "1rem" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          spacing={{ xs: 2, md: 8 }}
          sx={{ height: { xs: 200, sm: 180, md: 120 } }}
        >
          {/* Logo Section */}
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent={{ xs: "center", md: "flex-start" }}
            spacing={1}
            sx={{ mb: 6 }}
          >
            <img src={logotyp} alt="Logo" style={{ width: 40, height: 40 }} />
            <Typography
              color="black"
              sx={{ fontWeight: 600, lineHeight: "1.25rem", width: 180 }}
            >
              {phrases.footer.application_name}
            </Typography>
          </Stack>

          {/* Links & Contact Section */}
          <Stack direction="row" spacing={4} sx={{ mt: { xs: 36, md: 24 } }}>
            <Box sx={{ width: "50%" }}>
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, mb: 2, fontSize: { xs: 12, md: 14 } }}
              >
                {phrases.footer.see_also}
              </Typography>
              {[
                phrases.footer.website_regulations,
                phrases.footer.privacy_policy,
                phrases.footer.accessibility_declaration,
              ].map((label, index) => (
                <LinkItem key={index} to="/" label={label} />
              ))}
            </Box>

            <Box sx={{ width: "50%" }}>
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, mb: 2, fontSize: { xs: 12, md: 14 } }}
              >
                {phrases.footer.contact}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 2, fontSize: { xs: 12, md: 14 } }}
              >
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
        </Stack>

        <Divider sx={{ mt: 2 }} />

        {/* Logos Section */}
        <LogoSection
          images={[
            { src: fundusze, name: "Fundusze" },
            { src: rp, name: "RP" },
            { src: ue, name: "UE" },
          ]}
          vertical={false}
        />
        <LogoSection
          images={[
            { src: fundusze_v, name: "Fundusze" },
            { src: rp_v, name: "RP" },
            { src: ue_v, name: "UE" },
          ]}
          vertical={true}
        />
      </Box>
    </Wrapper>
  );
};

export default Footer;
