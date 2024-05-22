import { createTheme, responsiveFontSizes } from "@mui/material";
import { cyan, blue, purple, red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
          main: cyan[900],
        },
        secondary: {
          main: red[500],
        },
        success: {
          main: purple[500],
        },
      }
});

export default responsiveFontSizes(theme);