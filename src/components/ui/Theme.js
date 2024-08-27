import { createTheme, responsiveFontSizes } from "@mui/material";
import { amber, cyan, purple, grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
          main: amber[500],
          light: amber[50],
          dark: amber[900]
        },
        secondary: {
          main: cyan[500],
        },
        success: {
          main: purple[500],
        },
      },
      text: {
        primary: {
          main: grey[900]
        },
        secondary: {
          main: grey[700]
        }
      }
});

export default responsiveFontSizes(theme);