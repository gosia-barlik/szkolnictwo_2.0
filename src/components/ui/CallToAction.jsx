import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const CallToAction = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems="center"
      sx={{ backgroundColor: theme.palette.primary.main, mt: 8,justifyContent:"center" }}
    >
      <Grid item className="cta_grid_2" sx={{pt:8, pb:8}}>
        <Typography variant="h4" color={theme.palette.common.white}>
          Wybierz właściwy kierunek swojego rozwoju.
        </Typography>
        <Typography color={theme.palette.common.white}>
          Znajdź inspirację do planowania rozwoju w oparciu o opisy
          kwalifikacji.
        </Typography>
      </Grid>
      <Grid item className="cta_grid_2">
        <div className="img"></div>
      </Grid>
    </Grid>
  );
};
export default CallToAction;
