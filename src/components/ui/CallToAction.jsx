import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, useTheme } from "@mui/material";
import './CallToAction.css'

const CallToAction = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.primary.light,
        mt: 8,
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", marginLeft: "auto",marginRight:"auto", width:1536, display:"flex", paddingLeft:48 }}>
        <Grid item className="cta_grid_2" xs={6} sx={{ pt: 4, pb: 8 }}>
          <Typography variant="h6" color={theme.palette.secondary.main}>
          Pomogę Ci wybrać właściwy kierunek Twojego rozwoju. 
          </Typography>
          <Typography color={theme.palette.secondary.main}>
          Podpowiem inspiracje do planowania rozwoju w oparciu o kwalifikacje.
          </Typography>
          <Button>Dowiedz się więcej o kwalifikacjach</Button>
        </Grid>
        <Grid item className="cta_grid_2" xs={4} sx={{ pt: 4, pb: 8 }}>
          <div className="img"></div>
        </Grid>
      </div>
    </Grid>
  );
};
export default CallToAction;
