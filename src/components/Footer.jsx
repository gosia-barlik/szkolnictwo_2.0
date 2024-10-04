import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import fundusze from "../assets/img/footer/fundusze.png";
import ibe from "../assets/img/footer/ibe.png";
import rp from "../assets/img/footer/rp.png";
import ue from "../assets/img/footer/ue.png";
import logotyp from "../assets/img/szkolnictwo-logotyp.svg";
import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
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
        <Stack direction="row" style={{paddingLeft:"48px"}}>
        <img src={logotyp} alt="" style={{ width: "40px",marginRight:"12px" }} />
          <Typography color="black" style={{fontWeight:"600", lineHeight:"1.25rem"}}>
            Kompas szkolnictwa <br></br> branżowego
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={5}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ marginTop: '30px' }}
        >
          <img src={fundusze} alt="" style={{ width: "120px" }} />
          <img src={rp} alt="" style={{ width: "120px" }} />
          <img src={ibe} alt="" style={{ width: "180px" }} />
          <img src={ue} alt="" style={{ width: "190px" }} />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={5}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ marginTop: '30px' }}
        >
          <Typography color="textSecondary" variant="body1">
            {`${new Date().getFullYear()} | Polityka prywatności | Regulamin | Deklaracja dostępności`}
          </Typography>
        </Stack>
      </Box>
    </Wrapper>
  );
};

export default Footer;
