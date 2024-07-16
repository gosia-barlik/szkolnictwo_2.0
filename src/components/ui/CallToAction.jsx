import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, useTheme } from "@mui/material";
import * as dictionary from'./dictionaries/header.dictionary.json';
import './CallToAction.css'

const CallToAction = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.primary.light,
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", marginLeft: "auto",marginRight:"auto", display:"flex", paddingLeft:48 }}>
        <Grid item className="cta_grid_2" xs={8} sx={{ pt: 4, pb: 8 }}>
          <Typography variant="h6" color={theme.palette.secondary.main}>
          {dictionary.header.title}
          </Typography>
          <Typography color={theme.palette.secondary.main}>
          {dictionary.header.content}
          </Typography>
          <Button className="action" variant="outlined" > {dictionary.header.action}</Button>
        </Grid>
        <Grid item className="cta_grid_2" xs={4} sx={{ pt: 4, pb: 8 }}>
          <div className="img"></div>
        </Grid>
      </div>
    </Grid>
  );
};
export default CallToAction;
