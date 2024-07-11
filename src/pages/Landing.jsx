import InputAutocomplete from "../components/ui/Autocomplete";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, useTheme } from "@mui/material";
import * as phrases from "./landing.dictionary.json";
import "./Landing.css";

const Landing = () => {
  const theme = useTheme();
  return (
    <>
      <section>
        <Grid
          container
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ md: 6 }}
          sx={{
            mt: 8,
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid
            item
            className="main_grid_1"
            xs={12}
            md={8}
            sx={{ pt: 4, pb: 8, order: { xs: 1, md: 0 } }}
          >
            <Typography variant="h6" color={theme.text.primary.main}>
              {phrases.landing.header.title}
            </Typography>
            <Typography color={theme.text.primary.main}>
              {phrases.landing.header.content}
            </Typography>
            <Typography color={theme.text.primary.main}>
              {phrases.landing.header.about}
            </Typography>
            <Button>{phrases.landing.header.action}</Button>
          </Grid>

          <Grid
            item
            className="main_grid_1"
            xs={12}
            sm={12}
            md={4}
            sx={{ pt: 4, pb: 8, order: { xs: 0, md: 1 } }}
          >
            <div className="img"></div>
          </Grid>
        </Grid>
      </section>

      <section>
        <Grid
          container
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ md: 12 }}
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid
            item
            className="main_grid_2"
            xs={12}
            md={6}
            sx={{ pt: 4, pb: 8, pl: { xs: 1, md: 8 }, order: { xs: 1, md: 1 } }}
          >
            <Typography variant="h6" color={theme.text.primary.main}>
              {phrases.landing.section_1.title}
            </Typography>
            <Typography color={theme.text.primary.main}>
              {phrases.landing.section_1.content}
            </Typography>
            <Button>{phrases.landing.section_1.action}</Button>
          </Grid>

          <Grid
            item
            className="main_grid_2"
            xs={12}
            md={4}
            sx={{ pt: 4, pb: 8, order: { xs: -1, md: -1 }}}
          >
            <div style={{marginLeft:'-96px'}}className="img"></div>
          </Grid>
        </Grid>
      </section>

      <section>
        <Grid
          container
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ md: 6 }}
          sx={{
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid
            item
            className="main_grid_3"
            xs={12}
            md={8}
            sx={{ pb: 8, order: { xs: 1, md: 0 } }}
          >
            <Typography variant="h6" color={theme.text.primary.main}>
              {phrases.landing.section_2.title}
            </Typography>
            <Typography color={theme.text.primary.main}>
              {phrases.landing.section_2.content}
            </Typography>
            <Typography color={theme.text.primary.main}>
              {phrases.landing.section_2.about}
            </Typography>
            <Button>{phrases.landing.section_2.action}</Button>
          </Grid>

          <Grid
            item
            className="main_grid_3"
            xs={12}
            sm={12}
            md={4}
            sx={{ pt: 4, pb: 8, order: { xs: 0, md: 1 } }}
          >
            <div className="img"></div>
          </Grid>
        </Grid>
      </section>

      
      <section>
        <Grid
          container
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ md: 12 }}
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid
            item
            className="main_grid_4"
            xs={12}
            md={6}
            sx={{ pt: 4, pb: 8, pl: { xs: 1, md: 8 }, order: { xs: 1, md: 1 } }}
          >
            <Typography variant="h6" color={theme.text.primary.main}>
              {phrases.landing.section_3.title}
            </Typography>
            <Typography color={theme.text.primary.main}>
              {phrases.landing.section_3.content}
            </Typography>
            <Button>{phrases.landing.section_3.action}</Button>
          </Grid>

          <Grid
            item
            className="main_grid_4"
            xs={12}
            md={4}
            sx={{ pt: 4, pb: 8, order: { xs: -1, md: -1 }}}
          >
            <div style={{marginLeft:'-96px'}}className="img"></div>
          </Grid>
        </Grid>
      </section>

      <InputAutocomplete />
    </>
  );
};
export default Landing;
